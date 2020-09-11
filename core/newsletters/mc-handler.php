<?php

if (!defined("ABSPATH")) exit;

class Qubely_MC_Handler {
  private $api_base_url = '';
	private $api_key = '';
  private $api_request_args = [];

  public function __construct() {
    $this->is_valid_api();
		$this->api_request_args = [
			'headers' => [
				'Authorization' => 'Basic ' . base64_encode( 'user:' . $this->api_key ),
			],
		];
	}

	public function is_valid_api() {
    $options = get_option('qubely_options');
    $api_key = $options['mailchimp_api_key'];
    $this->api_key = $api_key;
    $key_parts = explode( '-', $this->api_key );
		if ( empty( $key_parts[1] ) || 0 !== strpos( $key_parts[1], 'us' ) ) {
			throw new \Exception( 'Invalid API key' );
    }
    $this->api_base_url = 'https://' . $key_parts[1] . '.api.mailchimp.com/3.0/';
	}

  private function query( $end_point ) {
    $response = wp_remote_get( $this->api_base_url . $end_point, $this->api_request_args );
		if ( is_wp_error( $response ) || 200 != (int) wp_remote_retrieve_response_code( $response ) ) {
			throw new \Exception( 'Mailchimp Error' );
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( ! is_array( $body ) ) {
			throw new \Exception( 'Mailchimp Error' );
		}

		return $body;
	}


  public function get_lists() {
		$results = $this->query( 'lists?count=999' );

		$lists = array(
			array(
				'value' => '',
				'label' => 'Select...'
			)
		);

		if ( ! empty( $results['lists'] ) ) {
			foreach ( $results['lists'] as $list ) {
				$lists[] = array('label' => $list['name'], 'value' => $list['id']);
			}
		}

		$return_array = [
			'lists' => $lists,
		];

		return $return_array;
  }

  public function post( $end_point, $data, $request_args = [] ) {
		$this->api_request_args += $request_args;
		$this->api_request_args['headers']['Content-Type'] = 'application/json; charset=utf-8';
		$this->api_request_args['body'] = wp_json_encode( $data );
		$response = wp_remote_post( $this->api_base_url . $end_point, $this->api_request_args );

		if ( is_wp_error( $response ) ) {
			throw new \Exception( 'Mailchimp Error' );
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( ! is_array( $body ) ) {
			throw new \Exception( 'Mailchimp Error' );
		}

		return [
			'code' => (int) wp_remote_retrieve_response_code( $response ),
			'body' => $body,
		];
  }

  public function add_subscribers($data = []) {
		$endpoint = '/lists/'. $data['list'] . '/members';
    return $this->post($endpoint, $data['fields']);
  }

  public function get_fields( $list_id ) {
		$results = $this->query( 'lists/' . $list_id . '/merge-fields?count=999' );

		$fields = [
			[
				'remote_label' => 'Email',
				'remote_type' => 'email',
				'remote_id' => 'email',
				'remote_required' => true,
			],
		];

		if ( ! empty( $results['merge_fields'] ) ) {
			foreach ( $results['merge_fields'] as $field ) {
				$fields[] = [
					'remote_label' => $field['name'],
					'remote_type' => $this->normalize_type( $field['type'] ),
					'remote_id' => $field['tag'],
					'remote_required' => $field['required'],
				];
			}
		}

		$return_array = [
			'fields' => $fields,
		];

		return $return_array;
  }

  private function normalize_type( $type ) {
		static $types = [
			'text' => 'text',
			'number' => 'number',
			'address' => 'text',
			'phone' => 'text',
			'date' => 'text',
			'url' => 'url',
			'imageurl' => 'url',
			'radio' => 'radio',
			'dropdown' => 'select',
			'birthday' => 'text',
			'zip' => 'text',
		];

		return $types[ $type ];
	}


}