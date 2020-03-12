<?php
/*
 * Plugin Name:       Qubely Pro
 * Plugin URI:        https://www.themeum.com/product/qubely/
 * Description:       This plugins is a pro version of Qubely regular version
 * Version:           1.1.5
 * Author:            Themeum
 * Author URI:        https://themeum.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       qubely-pro
 * Domain Path:       /languages
 */
defined('ABSPATH') || exit;

// Defined
define('QUBELY_PRO_FILE', __FILE__);
define('QUBELY_PRO_VERSION', '1.1.5');
define('QUBELY_PRO_DIR_URL', plugin_dir_url(QUBELY_PRO_FILE));

// Define Physical Path
define('QUBELY_PRO_DIR_PATH', plugin_dir_path(QUBELY_PRO_FILE));

define('QUBELY_FREE_BASENAME', 'qubely/qubely.php');
define('QUBELY_PRO_BASENAME', 'qubely-pro/qubely-pro.php');

add_action('init', 'qubely_pro_language_load');
function qubely_pro_language_load() {
    load_plugin_textdomain('qubely-pro', false, basename(dirname(QUBELY_PRO_FILE)) . '/languages/');
}

// Include Require File
require_once QUBELY_PRO_DIR_PATH . 'core/initial-setup.php'; // Initial Setup Data


//Version Check & Include Core
if (!version_compare(PHP_VERSION, '5.4', '>=')) {
    add_action('admin_notices', array('QUBELY_Pro_Initial_Setup', 'php_error_notice')); // PHP Version Check
} elseif (!version_compare(get_bloginfo('version'), '4.5', '>=')) {
    add_action('admin_notices', array('QUBELY_Pro_Initial_Setup', 'wordpress_error_notice')); // WordPress Version Check
} else {
    require_once QUBELY_PRO_DIR_PATH . 'core/QUBELY-PRO.php';   // Loading QUBELY Blocks Main Files
}

require_once QUBELY_PRO_DIR_PATH . 'core/QUBELY-PRO.php'; // Initial Setup Data

include_once 'classes/Init.php';
include_once ABSPATH . 'wp-admin/includes/plugin.php';

if (file_exists(WP_PLUGIN_DIR . '/' . QUBELY_FREE_BASENAME) && is_plugin_active(QUBELY_FREE_BASENAME)) {
    new \QUBELY_PRO\Init();
} else {
    include_once 'classes/Installer.php';
    new \QUBELY_PRO\Installer();
}
