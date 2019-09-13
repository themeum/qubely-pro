<?php
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

class QUBELY_PRO
{

	/**
	 * QUBELY_PRO constructor
	 */
	public function __construct()
	{
		// Editor Load
        add_action('enqueue_block_editor_assets', array($this, 'qubely_pro_editor_assets'), 1000);
        
        // dynamic blocks
		add_action('init', array($this, 'init_dynamic_postgrid_blocks'));
	}

		/**
	 * Init dynamic blocks frontend
	 */
	public function init_dynamic_postgrid_blocks()
	{
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/postgrid.php';
	}

	/**
	 * Load Editor Styles and Scripts
	 * @since 1.0.0
	 */
	public function qubely_pro_editor_assets()
	{

		wp_enqueue_script('qubely-pro-blocks-js', QUBELY_PRO_DIR_URL . 'assets/js/qubely.pro.dev.js', array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), QUBELY_PRO_VERSION, true);

		wp_localize_script('qubely-pro-blocks-js', 'qubely_pro_admin', array(
			'plugin' => QUBELY_PRO_DIR_URL
		));
	}
}
new QUBELY_PRO();
