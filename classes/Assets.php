<?php
namespace QUBELY_PRO;

defined('ABSPATH') || exit;

class Assets {

	public function __construct() {
		add_action('wp_enqueue_scripts', array($this, 'frontend_scripts'));
		add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));
		add_action( 'enqueue_block_editor_assets', array( $this, 'qubely_editor_assets' ) );
	}

	public function frontend_scripts() {
        wp_enqueue_style('qubely-pro-style-min', QUBELY_PRO_DIR_URL . 'assets/css/style.min.css', false, QUBELY_PRO_VERSION);
        wp_enqueue_script( 'qubely-pro-frontend', QUBELY_PRO_DIR_URL.'assets/js/frontend.js', array('jquery'), QUBELY_PRO_VERSION, true );
	}

	public function admin_scripts() {
		wp_enqueue_style( 'plugin-license-handler', QUBELY_PRO_DIR_URL.'assets/css/license.css');
	}

	public function qubely_editor_assets(){
		wp_enqueue_script( 'qubely-pro-blocks-js', QUBELY_PRO_DIR_URL . 'assets/js/qubely.pro.dev.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'qubely-blocks-js' ), QUBELY_PRO_VERSION, true );
		wp_localize_script( 'qubely-pro-blocks-js', 'qubely_pro', array(
			'plugin' => QUBELY_PRO_DIR_URL,
			'ajax' => admin_url( 'admin-ajax.php' ),
		) );
	}

}