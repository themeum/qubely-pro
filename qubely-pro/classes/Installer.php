<?php
namespace QUBELY_PRO;
 
defined('ABSPATH') || exit;
 
class Installer {
 
    public function __construct() {
        add_action('admin_init',                                array($this, 'check_free_installed'));
        add_action('admin_enqueue_scripts',                     array($this, 'enqueue_installer_scripts'));
        add_action('wp_ajax_install_qubely_plugin',             array($this, 'install_qubely_plugin'));
        add_action('admin_action_activate_qubely_free',         array($this, 'activate_qubely_free'));
    }

    public function enqueue_installer_scripts() {
        wp_enqueue_style( 'qubely-plugin-license', QUBELY_PRO_DIR_URL.'assets/css/installer.css', QUBELY_PRO_VERSION, true);
        wp_enqueue_script( 'qubely-pro-scripts', QUBELY_PRO_DIR_URL.'assets/js/installer.min.js', array('jquery'), QUBELY_PRO_VERSION, true );
	}
 
    public function check_free_installed() {
        $source_file = WP_PLUGIN_DIR.'/'.QUBELY_FREE_BASENAME;
        if ( file_exists($source_file) && !is_plugin_active(QUBELY_FREE_BASENAME) ) {
            add_action( 'admin_notices', array($this, 'free_plugin_installed_but_inactive_notice') );
        } elseif ( !file_exists($source_file) ) {
            add_action( 'admin_notices', array($this, 'free_plugin_not_installed') );
        }
    }
 
    public function free_plugin_installed_but_inactive_notice() { ?>
        <div class="notice notice-error qubely-install-notice">
            <div class="qubely-install-notice-inner">
                <div class="qubely-install-notice-icon">
                    <img src="<?php echo QUBELY_PRO_DIR_URL.'assets/img/qubely-logo.svg'; ?>" alt="Qubely Logo">
                </div>
                <div class="qubely-install-notice-content">
                    <h2><?php _e('Thanks for using Qubely Pro','qubely-pro'); ?></h2>
                    <p><?php echo sprintf( __( 'You must have <a href="%s" target="_blank">Qubely</a> Free version installed and activated on this website in order to use Qubely Pro.', 'qubely-pro' ), esc_url( 'https://wordpress.org/plugins/qubely/' ) ); ?></p>
                    <a href="https://www.themeum.com/docs/qubely-introduction/" target="_blank"><?php _e('Learn more about Qubely','qubely-pro'); ?></a>
                </div>
                <div class="qubely-install-notice-button">
                    <a  class="button button-primary" href="<?php echo add_query_arg(array('action' => 'activate_qubely_free'), admin_url()); ?>"><?php _e('Activate Qubely','qubely-pro'); ?></a>
                </div>
            </div>
        </div>
        <?php
    }
 
    public function free_plugin_not_installed() { ?>
        <div class="notice notice-error qubely-install-notice">
            <div class="qubely-install-notice-inner">
                <div class="qubely-install-notice-icon">
                    <img src="<?php echo QUBELY_PRO_DIR_URL.'assets/img/qubely-logo.svg'; ?>" alt="Qubely Logo">
                </div>
                <div class="qubely-install-notice-content">
                    <h2><?php _e('Thanks for using Qubely Pro','qubely-pro'); ?></h2>
                    <p><?php echo sprintf( __( 'You must have <a href="%s" target="_blank">Qubely</a> Free version installed and activated on this website in order to use Qubely Pro.', 'qubely-pro' ), esc_url( 'https://wordpress.org/plugins/qubely/' ) ); ?></p>
                    <a href="https://www.themeum.com/docs/qubely-introduction/" target="_blank"><?php _e('Learn more about Qubely','qubely-pro'); ?></a>
                </div>
                <div class="qubely-install-notice-button">
                    <a class="install-qubely-button button button-primary" data-slug="qubely" href="<?php echo add_query_arg(array('action' => 'install_qubely_free'), admin_url()); ?>"><?php _e('Install Qubely','qubely-pro'); ?></a>
                </div>
            </div>
            <div id="qubely_install_msg"></div>
        </div>
        <?php
    }
 
    public function activate_qubely_free(){
        activate_plugin('qubely/qubely.php');
    }
 
 
    public function install_qubely_plugin(){
        include(ABSPATH . 'wp-admin/includes/plugin-install.php');
        include(ABSPATH . 'wp-admin/includes/class-wp-upgrader.php');
 
        if ( ! class_exists('Plugin_Upgrader')){
            include(ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php');
        }
        if ( ! class_exists('Plugin_Installer_Skin')) {
            include( ABSPATH . 'wp-admin/includes/class-plugin-installer-skin.php' );
        }
 
        $plugin = 'qubely';
 
        $api = plugins_api( 'plugin_information', array(
            'slug' => $plugin,
            'fields' => array(
                'short_description' => false,
                'sections' => false,
                'requires' => false,
                'rating' => false,
                'ratings' => false,
                'downloaded' => false,
                'last_updated' => false,
                'added' => false,
                'tags' => false,
                'compatibility' => false,
                'homepage' => false,
                'donate_link' => false,
            ),
        ) );
 
        if ( is_wp_error( $api ) ) {
            wp_die( $api );
        }
 
        $title = sprintf( __('Installing Plugin: %s'), $api->name . ' ' . $api->version );
        $nonce = 'install-plugin_' . $plugin;
        $url = 'update.php?action=install-plugin&plugin=' . urlencode( $plugin );
 
        $upgrader = new \Plugin_Upgrader( new \Plugin_Installer_Skin( compact('title', 'url', 'nonce', 'plugin', 'api') ) );
        $upgrader->install($api->download_link);
        die();
    }
 
}