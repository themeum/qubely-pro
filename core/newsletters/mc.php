<?php

if (!defined("ABSPATH")) exit;

require_once "mc-handler.php";

class Qubely_Mailchimp {

	public function __construct() {
		add_filter('qubely_options', array($this, 'settings'));
		add_filter('wp_ajax_qubely_mc_get_lists', array($this, 'get_lists'));
		add_filter('wp_ajax_qubely_mc_get_fields', array($this, 'get_fields'));
		add_filter('wp_ajax_qubely_mc_add_subs', array($this, 'add_subscribers'));
	}

	/**
	 * Register Settings
	 */
	public function settings($settings) {
    $settings["general"]['field_groups']['mailchimp'] = array(
      'label' => 'MailChimp',
      'fields' => array(
          'mailchimp_api_key' => array(
              'type' => 'text',
              'label' => __('Default Form Action', 'qubely'),
              'default' => '',
              'desc' => sprintf(__('Enter your MailChimp API Key, %1$s or Generate a new one %2$s', 'qubely'), '<a href="https://mailchimp.com/help/add-a-signup-form-to-your-website/" target="_blank">', '</a>'),
              'placeholder' => '',
              'suffix' => '',
              'size' => 'regular',
          ),
      ),
    );

    return $settings;
	}

	/**
	 * public function
	 */

	public function get_lists() {
		try {
			$mc = new Qubely_MC_Handler();
			$lists = $mc->get_lists();
			wp_send_json_success($lists);
		} catch (Execption $e) {
			wp_send_json_error($e->get_message());
		}
	}

	public function add_subscribers() {
		$data = (array) json_decode(file_get_contents('php://input'));
		var_dump($data);
		exit;
		try {
			if ( empty( $_POST['list'] ) ) {
				wp_send_json_error("List id is required");
				exit;
			}
			$mc = new Qubely_MC_Handler();
			$data = $mc->add_subscribers($data);
			wp_send_json_success($data);
		} catch (Execption $e) {
			wp_send_json_error($e->get_message());
		}
	}

	public function get_fields() {
		try {
			if ( empty( $_GET['list'] ) ) {
				wp_send_json_error("List id is required");
				exit;
			}
			$mc = new Qubely_MC_Handler();
			$fields = $mc->get_fields($_GET['list']);
			wp_send_json_success($fields);
		} catch (Execption $e) {
			wp_send_json_error($e->get_message());
		}
	}

}