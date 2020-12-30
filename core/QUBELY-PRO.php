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
		// dynamic blocks
		add_action('init', array($this, 'init_blocks'));
	}

	/**
	 * Init dynamic blocks frontend
	 */
	public function init_blocks()
	{
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/postgrid.php';
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/postcarousel.php';
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/wooproducts.php';
	
		/**
		 * Add Preview CSS
		 */
		if (isset($_GET['preview']) && $_GET['preview'] == true) {
			$this->add_static_assets();
		}
	}
	/**
	 * on Preview
	 * enqueue static CSS 
	 * and Scripts 
	 */
	public function add_static_assets(){
		//CSS
		wp_enqueue_style('qubely-pro-preview-style-min', QUBELY_PRO_DIR_URL . 'assets/css/style.min.css', false, QUBELY_PRO_VERSION);

		//Scripts
		wp_enqueue_script('form-preview-script', QUBELY_PRO_DIR_URL . 'assets/js/form.min.js', array('jquery', 'jquery-ui'), QUBELY_PRO_VERSION);
		wp_enqueue_script('jquery-preview-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
		wp_register_style('jquery-preview-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
		wp_enqueue_script('qubely-preview-carousel', QUBELY_PRO_DIR_URL . 'assets/js/qubely-carousel.js', array('jquery'), QUBELY_PRO_VERSION);
		wp_enqueue_script('qubely-preview-countdown', QUBELY_PRO_DIR_URL . 'assets/js/qubely-countdown.js', array(), QUBELY_PRO_VERSION);
	}
}
new QUBELY_PRO();
