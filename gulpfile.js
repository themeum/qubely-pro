const { src, dest, series } = require('gulp');
const zip = require('gulp-zip');
const replace = require('gulp-replace');
const clean = require('gulp-clean');
const minifyCSS = require('gulp-csso');
const minifyJS = require('gulp-minify');
const merge = require('merge-stream');
const fs = require('fs');

let versionNumber = '';
try {
    const data = fs.readFileSync('qubely-pro.php', 'utf8');
    const match = data.match(/Version:\s*([\d.]+)/i);
    versionNumber = match ? match[1] : '';
} catch (err) {
    console.error('Error reading file:', err);
}

function cleanBuild() {
    return src('./build', { read: false, allowEmpty: true })
        .pipe(clean());
}

function cleanZip() {
    return src(`./*.zip`, { read: false, allowEmpty: true })
        .pipe(clean());
}

function makeBuild() {
    return src([
        './**/*.*',
        '!./build/**/*.*',
        '!./assets/reactjs/**/*.*',
        '!./assets/js/qubely.pro.dev.js.map',
        '!./assets/js/qubely.pro.dev.js',
        '!./assets/js/jquery.magnific-popup.js',
        '!./assets/css/style.min.css.map',
        '!./node_modules/**/*.*',
        '!./**/*.zip',
        '!./gulpfile.js',
        '!./readme.md',
        '!./LICENSE.txt',
        '!./package.json',
        '!./package-lock.json',
        '!./yarn.lock',
    ]).pipe(dest('build/qubely-pro/'));
}

function productionMode() {
    const assets = src(['./build/qubely-pro/classes/Assets.php'])
        .pipe(replace(/qubely\.pro\.dev\.js/g, 'qubely.min.js'))
        .pipe(replace(/form\.js/g, 'form.min.js'))
        .pipe(replace(/woocommerce\.js/g, 'woocommerce.min.js'))
        .pipe(replace(/qubely-carousel\.js/g, 'qubely-carousel.min.js'))
        .pipe(replace(/qubely-countdown\.js/g, 'qubely-countdown.min.js'))
        .pipe(replace(/lottie-block\.js/g, 'lottie-block.min.js'))
        .pipe(replace(/modal\.js/g, 'modal.min.js'))
        .pipe(dest('./build/qubely-pro/classes/'));

    const qubely_pro = src(['./build/qubely-pro/core/Qubely-Pro.php'])
        .pipe(replace(/form\.js/g, 'form.min.js'))
        .pipe(replace(/woocommerce\.js/g, 'woocommerce.min.js'))
        .pipe(replace(/qubely-carousel\.js/g, 'qubely-carousel.min.js'))
        .pipe(replace(/qubely-countdown\.js/g, 'qubely-countdown.min.js'))
        .pipe(replace(/lottie-block\.js/g, 'lottie-block.min.js'))
        .pipe(replace(/modal\.js/g, 'modal.min.js'))
        .pipe(dest('./build/qubely-pro/core/'));

    const installer = src(['./build/qubely-pro/classes/Installer.php'])
        .pipe(replace(/installer\.js/g, 'installer.min.js'))
        .pipe(dest('./build/qubely-pro/classes/'));

    return merge(assets, qubely_pro, installer)
}

function minify_css() {
    return src(['./build/qubely-pro/assets/css/*.css'])
        .pipe(minifyCSS())
        .pipe(dest('./build/qubely-pro/assets/css/'));
}

function minify_js() {
    return src(['./build/qubely-pro/assets/js/*.js'])
        .pipe(minifyJS({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['qubely.min.js', '*-min.js', '*.min.js']
        }))
        .pipe(dest('./build/qubely-pro/assets/js/'));
}

function removeJsFiles() {
    return src(
        ['./build/qubely-pro/assets/js/common-script.js',
            './build/qubely-pro/assets/js/form.js',
            './build/qubely-pro/assets/js/woocommerce.js',
            './build/qubely-pro/assets/js/qubely-carousel.js',
            './build/qubely-pro/assets/js/installer.js',
            './build/qubely-pro/assets/js/qubely-countdown.js',
            './build/qubely-pro/assets/js/lottie-block.js',
            './build/qubely-pro/assets/js/modal.js',
        ],
        { read: false, allowEmpty: true })
        .pipe(clean());
}

function makeZip() {
    return src('./build/**/*.*')
        .pipe(zip(`qubely-pro-${versionNumber}.zip`))
        .pipe(dest('./'))
}

function updateVersion() {
    if (process.argv.length > 2) {
        let args = process.argv.slice(2)
        let oldVerion = args[1], newVersion = args[3]
        return src(['./build/qubely-pro/qubely-pro.php'])
            .pipe(replace(new RegExp(oldVerion, 'g'), `${newVersion}`))
            .pipe(dest('./build/qubely-pro/'));
    } else {
        console.log('Versions not given, please update version manullay or try again "gulp --old oldversion --new newversion"');
    }
}

exports.makeBuild = makeBuild;
exports.productionMode = productionMode;
exports.minify_css = minify_css;
exports.minify_js = minify_js;
exports.cleanBuild = cleanBuild;
exports.cleanZip = cleanZip;
exports.removeJsFiles = removeJsFiles;
exports.makeZip = makeZip;
exports.default = series(
    cleanBuild,
    cleanZip,
    makeBuild,
    minify_css,
    minify_js,
    removeJsFiles,
    productionMode,
    // updateVersion,
    makeZip,
    cleanBuild);