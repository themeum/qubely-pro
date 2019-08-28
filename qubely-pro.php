<?php
/*
 * Plugin Name:       Qubely Pro
 * Plugin URI:        https://www.themeum.com/product/qubely/
 * Description:       This plugins is a pro version of Qubely regular version
 * Version:           1.0.0
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
define('QUBELY_PRO_VERSION', '1.0.0');
define('QUBELY_PRO_DIR_URL', plugin_dir_url( QUBELY_PRO_FILE ));
define('QUBELY_FREE_BASENAME', 'qubely/qubely.php');

add_action('init', 'qubely_pro_language_load');
function qubely_pro_language_load(){
    load_plugin_textdomain('qubely-pro', false, basename(dirname(QUBELY_PRO_FILE)).'/languages/');
}

include_once 'classes/Init.php';
include_once ABSPATH.'wp-admin/includes/plugin.php';

if( file_exists(WP_PLUGIN_DIR.'/'.QUBELY_FREE_BASENAME) && is_plugin_active(QUBELY_FREE_BASENAME) ) {
	new \QUBELY_PRO\Init();
} else {
	include_once 'classes/Installer.php';
	new \QUBELY_PRO\Installer();
}