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

		// Add Styles and Scripts
		add_action('wp_enqueue_scripts', array($this, 'qubely_pro_enqueue_style'));
		add_action('admin_enqueue_scripts', array($this, 'admin_enqueue_scripts'));

		// dynamic blocks
		add_action('init', array($this, 'init_dynamic_postgrid_blocks'));
		add_action('init', array($this, 'init_dynamic_postcarousel_blocks')); 
	}

	/**
	 * Init dynamic blocks frontend
	 */
	public function init_dynamic_postgrid_blocks()
	{
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/postgrid.php';
	}

	public function init_dynamic_postcarousel_blocks()
	{
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/postcarousel.php';
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

	/**
	 * Frontend Style & Script
	 * @since 1.0.0
	 */
	public function qubely_pro_enqueue_style()
	{
		wp_enqueue_script('qubely-carousel', QUBELY_PRO_DIR_URL . 'assets/js/qubely-carousel.js', array('jquery'), QUBELY_PRO_VERSION);
		wp_enqueue_script('qubely-slider-script', QUBELY_PRO_DIR_URL . 'assets/js/slider-script.js', array('jquery'), QUBELY_PRO_VERSION);
		wp_enqueue_script('form-script', QUBELY_PRO_DIR_URL . 'assets/js/form.js', array('jquery', 'jquery-ui'), QUBELY_PRO_VERSION);
		wp_enqueue_script('jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
		wp_register_style('jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
	}
	/**
	 * Frontend Style & Script
	 * @since 1.0.0
	 */
	public function admin_enqueue_scripts()
	{
		wp_enqueue_script('qubely-form',  QUBELY_PRO_DIR_URL . 'assets/js/form.js', array('jquery', 'jquery-ui'), QUBELY_PRO_VERSION);
		wp_enqueue_script('jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
		wp_register_style('jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
	}
}
new QUBELY_PRO();
