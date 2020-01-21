<?php
namespace QUBELY_PRO;

defined('ABSPATH') || exit;

class Updater {

	//Live Api URL
	public $api_end_point = 'https://www.themeum.com/wp-json/themeum-license/v2/';
    //Is Valid of this license
	public $is_valid = false;
	
	public $plugin_slug = 'qubely-pro';

	public static function init() {
		return new self();
	}

	public function __construct() {
		$this->is_valid = $this->is_valid();
		add_action('admin_menu', 							array( $this, 'add_license_page'), 20 );
		add_action('admin_init', 							array( $this, 'check_license_key') );
		add_filter('plugins_api', 							array( $this, 'plugin_info'), 20, 3 );
		add_action('admin_notices', 						array( $this, 'show_invalid_license_notice') );
		add_filter('pre_set_site_transient_update_plugins', array( $this, 'check_for_update' ) );
	}

	public function add_license_page() {
		add_submenu_page(
			'qubely-settings', 
			__('License Page', 'qubely-pro'), 
			__('License Page', 'qubely-pro'), 
			'manage_options', 
			'wp-qubely-license', 
			array($this, 'license_form')
		);
	}

	public function check_license_key(){
		if ( ! empty($_POST['wp_qubely_check_license_code'])){
			if ( ! check_admin_referer('wp_qubely_license_nonce')){
				return;
			}

			$key  = sanitize_text_field($_POST['wp_qubely_license_key']);
			$unique_id = $_SERVER['REMOTE_ADDR'];
            $blog = esc_url( get_option( 'home' ) );

			$api_call = wp_remote_post( $this->api_end_point.'validator',
				array(
					'body'          => array(
						'blog_url'      => $blog,
						'license_key'   => $key,
						'action'        => 'check_license_key_api',
						'blog_ip'       => $unique_id,
						'request_from'  => 'plugin_license_page',
						'product_info'  => array('type' => 'plugin', 'unique_id'=> $this->plugin_slug),
					),
				)
			);

			if ( is_wp_error( $api_call ) ) {
				//echo "Something went wrong: $error_message";
			} else {
				$response_body = $api_call['body'];
				$response = json_decode($response_body);

				$response_msg = '';
				if ( ! empty($response->data->msg)){
					$response_msg = $response->data->msg;
				}
				if ($response->success){
					//Verified License
					$license_info = array(
						'activated'     => true,
						'license_key'   => $key,
						'license_to'    => $response->data->license_info->customer_name,
						'expires_at'    => $response->data->license_info->expires_at,
						'activated_at'  => $response->data->license_info->activated_at,
						'msg'  			=> $response_msg,
					);

					$license_info_serialize = serialize($license_info);
					update_option(QUBELY_PRO_BASENAME.'_license_info', $license_info);
				} else {
					//License is invalid
					$license_info = array(
						'msg'  			=> $response_msg,
						'activated'     => false,
						'license_key'   => $key,
						'license_to'    => '',
						'expires_at'    => '',
					);

					$license_info_serialize = serialize($license_info);
					update_option(QUBELY_PRO_BASENAME.'_license_info', $license_info);
				}
			}
		}
	}

	public function license_form(){
		$license_key = '';
		$license_to = '';
		$license_activated = false;

		$getLicenses = maybe_unserialize(get_option(QUBELY_PRO_BASENAME.'_license_info'));

		$license_info = array('activated' => false);
        if ( is_array($getLicenses) && count($getLicenses)){
            $license_info = $getLicenses;
        }
        $license_info = (object) $license_info;

        if(! empty($license_info->license_key)){
            $license_key = $license_info->license_key;
        }
        if ( ! empty($license_info->license_to)){
            $license_to = $license_info->license_to;
        }
        if ( ! empty($license_info->activated)){
            $license_activated = $license_info->activated;
        }
		?>

		<div class="qubely-license-head">
			<div class="qubely-license-head__inside-container">
				<div class="qubely-license-head__logo-container">
					<a href="https://themeum.com/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank">
                        <img class="qubely-license-head__logo" src="https://www.themeum.com/wp-content/themes/themeum/images/themeum.svg" />
                    </a>
				</div>

				<div class="qubely-license-head__menu-contain">
					<ul>
						<li><a href="https://www.themeum.com/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank">Home</a></li>
						<li> <a href="https://www.themeum.com/wordpress-themes/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank"> Themes</a></li>
						<li> <a href="https://www.themeum.com/wordpress-plugins/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank"> Plugins</a></li>
						<li>
							<a href="#">Support</a>
							<ul class="sub-menu">
								<li><a href="https://www.themeum.com/support/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank">Support Forum</a></li>
								<li><a href="https://www.themeum.com/about-us/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank">About us</a></li>
								<li><a href="https://www.themeum.com/docs/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank">Documentation</a></li>
								<li><a href="https://www.themeum.com/contact-us/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank">Contact Us</a></li>
								<li><a href="https://www.themeum.com/faq/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank">FAQ</a></li>
							</ul>
						</li>
						<li><a href="https://www.themeum.com/blog/?utm_source=plugin_license&utm_medium=top_menu_link&utm_campaign=activation_license" target="_blank">Blog</a></li>
					</ul>
				</div>
			</div>
		</div>

		<div class="qubely-lower ">
			<div class="qubely-box qubely-box-<?php echo $license_activated ? 'success':'error'; ?>">
				<?php if ($license_activated){
					?>
					<h3> <i class="dashicons-before dashicons-thumbs-up"></i> <?php _e('Your license is connected with', 'qubely-pro'); ?> Themeum.com</h3>
					<p><i class="dashicons-before dashicons-tickets-alt"></i> <?php _e('Licensed To', 'qubely-pro'); ?> : <?php echo $license_to; ?> </p>
                    <p>
                        <i class="dashicons dashicons-calendar"></i>
                        <?php echo __('License Valid Until', 'qubely-pro') .' : '. date(get_option( 'date_format' ),
                                strtotime($license_info->expires_at)) ?>
                    </p>
					<?php
				}else{
					?>
					<h3>
                        <i class="dashicons-before dashicons-warning"></i>
                        <?php
                        if ($license_key){
	                        _e('Your license is not connected', 'qubely-pro');
                        }else{
	                        _e('Valid license required', 'qubely-pro');
                        }
                        ?>
                    </h3>
					<p><i class="dashicons-before dashicons-tickets-alt"></i> <?php _e('A valid license is required to unlock available features', 'qubely-pro'); ?> </p>
					<?php
				}
				if ( ! empty($license_info->msg)){
					echo "<p> <i class='dashicons-before dashicons-admin-comments'></i> {$license_info->msg}</p>";
				}
				?>
			</div>


			<div class="qubely-boxes">
				<div class="qubely-box">
					<h3><?php _e('Power Up Your Plugin', 'qubely-pro'); ?></h3>
					<div class="qubely-right">
						<a href="https://www.themeum.com/dashboard/" class="qubely-licence-button qubely-is-primary" target="_blank"> <?php _e('Get License Key', 'qubely-pro'); ?></a>
					</div>
					<p>
						<?php _e('Please enter your license key. An active license key is needed for automatic plugin updates and', 'qubely-pro'); ?>
                        <a href="https://www.themeum.com/support/" target="_blank"><?php _e('support', 'qubely-pro'); ?></a>.</p>
				</div>
				<div class="qubely-box">
					<h3><?php _e('Enter License Key', 'qubely-pro'); ?></h3>
					<p> <?php _e('Already have your key? Enter it here', 'qubely-pro'); ?>. </p>
					<form action="" method="post">
						<?php wp_nonce_field('wp_qubely_license_nonce'); ?>
						<input type="hidden" name="wp_qubely_check_license_code" value="checking" />
						<p style="width: 100%; display: flex; flex-wrap: nowrap; box-sizing: border-box;">
							<input id="wp_qubely_license_key" name="wp_qubely_license_key" size="15" value="" class="regular-text code" style="flex-grow: 1; margin-right: 1rem;" type="text" placeholder="<?php echo $license_activated?'****************':'Enter your license key here'; ?>" />
							<input name="submit" id="submit" class="qubely-licence-button" value="Connect with License key" type="submit">
						</p>
					</form>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * @param $res
	 * @param $action
	 * @param $args
	 *
	 * @return bool|\stdClass
     *
     * Get the plugin info from server
	 */
	function plugin_info( $res, $action, $args ){
		$plugin_slug = QUBELY_PRO_BASENAME;

		// do nothing if this is not about getting plugin information
		if( $action !== 'plugin_information' )
			return false;

		// do nothing if it is not our plugin
		if( $plugin_slug !== $args->slug )
			return $res;

		$remote = $this->check_for_update_api('plugin_info');

		if(! is_wp_error($remote) ) {

			$res = new \stdClass();
			$res->name = $remote->data->plugin_name;
			$res->slug = $plugin_slug;
			$res->version = $remote->data->version;
			$res->last_updated = $remote->data->updated_at;
			$res->sections = array(
				'changelog' => nl2br($remote->data->change_log), // changelog tab
			);
			return $res;
		}

		return false;
	}

	/**
	 * @return array|bool|mixed|object
     *
     * Get update information
	 */
	public function check_for_update_api($request_from = ''){
		// Plugin update
		$getLicenses = maybe_unserialize(get_option(QUBELY_PRO_BASENAME.'_license_info'));
		$license_info = array('activated' => false);
        if ( is_array($getLicenses) && count($getLicenses)){
            $license_info = $getLicenses;
        }
        $license_info = (object) $license_info;

        if (empty($license_info->activated) || ! $license_info->activated || empty($license_info->license_key) ){
            return false;
        }

        $params = array(
            'body' => array(
                'action'        => 'check_update_by_license',
                'license_key'   => $license_info->license_key,
                'product_slug'  => $this->plugin_slug,
                'request_from'  => $request_from,
            ),
        );

        // Make the POST request
        $request = wp_remote_post($this->api_end_point.'check-update', $params );
        $request_body = false;
        // Check if response is valid
        if ( !is_wp_error( $request ) || wp_remote_retrieve_response_code( $request ) === 200 ) {
            $request_body = json_decode($request['body']);

            if ( empty($request_body->success) || !$request_body->success){
                $license_info = (array) $license_info;
                $license_info['activated'] = 0;
            }
        }

        return $request_body;
    }


	/**
	 * @param $transient
	 *
	 * @return mixed
	 */
	public function check_for_update($transient){
		$plugin_slug = QUBELY_PRO_BASENAME;
		$request_body = $this->check_for_update_api('update_check');
		if ($request_body && $request_body->success){
			if ( version_compare( QUBELY_PRO_VERSION, $request_body->data->version, '<' ) ) {
				$transient->response[$plugin_slug] = (object) array(
					'new_version'   => $request_body->data->version,
					'package'       => $request_body->data->download_url,
					'tested'        => $request_body->data->tested_wp_version,
					'slug'          => $plugin_slug,
				);
			}
        }
		return $transient;
	}

	public function show_invalid_license_notice(){
		if( !$this->is_valid() ) {
			$class = 'notice notice-error';
			$message = sprintf(__( 'To receive automatic update and premium support for Qubely Pro, %s please confirm your license key. %s', 'qubely-pro' ), " <a href='".admin_url('admin.php?page=wp-qubely-license')."'>", '</a>');
			printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), $message );
		}
    }

	/**
	 * @return bool
	 */
    public function is_valid() {
		$getLicenses = maybe_unserialize(get_option(QUBELY_PRO_BASENAME.'_license_info'));
        $license_info = (object) array('activated' => false);
        if ( is_array($getLicenses) && count($getLicenses)){
            $license_info = (object) $getLicenses;
        }

        if ( isset($license_info->activated)){
            return $license_info->activated;
        }
        return false;
    }
}