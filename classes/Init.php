<?php
namespace QUBELY_PRO;

defined( 'ABSPATH' ) || exit;

class Init {
	public $version = QUBELY_PRO_VERSION;
	public $path;
	private $updater;

	function __construct() {
        $this->url = QUBELY_PRO_DIR_URL;
		$this->path = plugin_dir_path( QUBELY_PRO_FILE );
		$this->basename = plugin_basename( QUBELY_PRO_FILE );

		$this->run(); //run pro plugin

		//Loading Autoloader
        spl_autoload_register( array( $this, 'loader' ) );

		//Load Component from Class
		new \QUBELY_PRO\Assets();
		new \QUBELY_PRO\Newsletter();

		require_once( dirname( __DIR__ ) . '/updater/update.php' );
		$this->updater = new \QUBELY_PRO\ThemeumUpdater\Update( 
			array(
				'product_title'      => 'Qubely Pro',
				'product_slug'       => 'qubely-pro',
				'product_basename'   => QUBELY_PRO_BASENAME,
				'product_type'       => 'plugin',
				'current_version'    => QUBELY_PRO_VERSION,
				'menu_title'         => 'License Page',
				'parent_menu'        => 'qubely-settings',
				'menu_capability'    => 'manage_options',
				'license_option_key' => QUBELY_PRO_BASENAME . '_license_info',
				'updater_url'        => QUBELY_PRO_DIR_URL . 'updater/',
				'header_content'     => QUBELY_PRO_DIR_URL . 'assets/img/logo.svg',
			)
		);
    }

	/**
	 * @param $className
	 *
	 * Auto Load class and the files
	 */
	private function loader( $className ) {
		if ( ! class_exists( $className ) ) {
			$className = preg_replace(
				array( '/([a-z])([A-Z])/', '/\\\/' ),
				array( '$1-$2', DIRECTORY_SEPARATOR ),
				$className
			);

			$className = str_replace( 'QUBELY_PRO' . DIRECTORY_SEPARATOR, 'classes' . DIRECTORY_SEPARATOR, $className );
			$file_name = $this->path.$className . '.php';

			if ( file_exists( $file_name ) && is_readable( $file_name ) ) {
				require_once $file_name;
			}
		}
	}

    /**
	 * Run the Qubely pro right now
	 */
	public function run() {
		register_activation_hook( QUBELY_PRO_FILE, array( $this, 'qubely_pro_activate' ) );
	}

	/**
	 * Do some task during plugin activation
	 */
	public function qubely_pro_activate() {
		$version = get_option( 'qubely_pro_version' );
		//Save Option
		if ( ! $version ) {
			update_option( 'qubely_pro_version', $this->version );
		}
	}

}