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
	}
}
new QUBELY_PRO();
