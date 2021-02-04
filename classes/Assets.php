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
        if (get_post_meta(get_the_ID(), '_qubely_css', true) != '') {
            $blocks_meta_data = get_post_meta(get_the_ID(), '__qubely_available_blocks', true);
            $blocks_meta_data = unserialize($blocks_meta_data);
            wp_register_script('qubely_pro_local_script', '');
            wp_localize_script('qubely_pro_local_script', 'qubely_pro_urls', array(
                'plugin' => QUBELY_PRO_DIR_URL,
            ));
            wp_enqueue_script('qubely_pro_local_script');


            if(is_array($blocks_meta_data) && count($blocks_meta_data)){
                $available_blocks = $blocks_meta_data['available_blocks'];

                wp_enqueue_style('qubely-pro-style-min', QUBELY_PRO_DIR_URL . 'assets/css/style.min.css', false, QUBELY_PRO_VERSION);

                if ( in_array('qubely/form', $available_blocks)) {
                    wp_enqueue_script('form-script', QUBELY_PRO_DIR_URL . 'assets/js/form.js', array('jquery', 'jquery-ui'), QUBELY_PRO_VERSION);
                    wp_enqueue_script('jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
                    wp_register_style('jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
                }
                if ( in_array('qubely/wooproducts', $available_blocks)) {
                    wp_enqueue_script('qubely_woo_script', QUBELY_PRO_DIR_URL . 'assets/js/woocommerce.js', array('jquery'), QUBELY_PRO_VERSION);
                 }

                if (
                    in_array('qubely/imagecarousel', $available_blocks) ||
                    in_array('qubely/postcarousel', $available_blocks) ||
                    in_array('qubely/teamcarousel', $available_blocks) ||
                    in_array('qubely/woocarousel', $available_blocks) ||
                    in_array('qubely/testimonialcarousel', $available_blocks)
                ) {
                    wp_enqueue_script('qubely-carousel', QUBELY_PRO_DIR_URL . 'assets/js/qubely-carousel.js', array('jquery'), QUBELY_PRO_VERSION);
                }
                if(in_array('qubely/countdown', $available_blocks)){
                    wp_enqueue_script('qubely-countdown', QUBELY_PRO_DIR_URL . 'assets/js/qubely-countdown.js', array(), QUBELY_PRO_VERSION);
                }

            } else {
                $this->frontend_scripts_old_style();
            }

        }
	}

    public function frontend_scripts_old_style($post = null)
    {
        if (!has_blocks($post)) {
            return false;
        }

        if (!is_string($post)) {
            $wp_post = get_post($post);
            if ($wp_post instanceof WP_Post) {
                $post = $wp_post->post_content;
            }
        }
        if (false !== strpos($post, '<!-- wp:' . 'qubely/form' . ' ')) {
            wp_enqueue_script('form-script', QUBELY_PRO_DIR_URL . 'assets/js/form.js', array('jquery', 'jquery-ui'), QUBELY_PRO_VERSION);
            wp_enqueue_script('jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
            wp_register_style('jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
        }
        if (false !== strpos($post, '<!-- wp:' . 'qubely/wooproducts' . ' ')) {
            wp_enqueue_script('qubely_woo_script', QUBELY_PRO_DIR_URL . 'assets/js/woocommerce.js', array('jquery'), QUBELY_PRO_VERSION);
        }
        if ((false !== strpos($post, '<!-- wp:' . 'qubely/imagecarousel' . ' ')) || (false !== strpos($post, '<!-- wp:' . 'qubely/postcarousel' . ' ')) || (false !== strpos($post, '<!-- wp:' . 'qubely/teamcarousel' . ' ')) || (false !== strpos($post, '<!-- wp:' . 'qubely/testimonialcarousel' . ' '))) {
            wp_enqueue_script('qubely-carousel', QUBELY_PRO_DIR_URL . 'assets/js/qubely-carousel.js', array('jquery'), QUBELY_PRO_VERSION);
        }
        if(false !== strpos($post, '<!-- wp:' . 'qubely/countdown' . ' ')){
            wp_enqueue_script('qubely-countdown', QUBELY_PRO_DIR_URL . 'assets/js/qubely-countdown.js', array(), QUBELY_PRO_VERSION);
        }

    }

	public function admin_scripts() {
		wp_enqueue_style( 'plugin-license-handler', QUBELY_PRO_DIR_URL.'assets/css/license.css');
        wp_enqueue_script('jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
        wp_enqueue_script('qubely-form',  QUBELY_PRO_DIR_URL . 'assets/js/form.js', array('jquery', 'jquery-ui'), QUBELY_PRO_VERSION);
        wp_enqueue_script('qubely-form',  QUBELY_PRO_DIR_URL . 'assets/js/woocommerce.js', array('jquery', 'jquery-ui'), QUBELY_PRO_VERSION);
        wp_register_style('jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
	}

	public function qubely_editor_assets(){
		wp_enqueue_script( 'qubely-pro-blocks-js', QUBELY_PRO_DIR_URL . 'assets/js/qubely.pro.dev.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'qubely-blocks-js' ), QUBELY_PRO_VERSION, true );
        wp_localize_script('qubely-pro-blocks-js', 'qubely_pro_admin', array(
            'plugin' => QUBELY_PRO_DIR_URL,
            'publishedPosts'=>wp_count_posts()->publish,
            'ajax' => admin_url( 'admin-ajax.php' )
        ));
	}

}