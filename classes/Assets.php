<?php

namespace QUBELY_PRO;

defined('ABSPATH') || exit;

class Assets {

    public function __construct(){
        add_action('wp_enqueue_scripts', array($this, 'frontend_scripts'));
        add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));
        add_action('enqueue_block_editor_assets', array($this, 'qubely_editor_assets'));
    }

    // Check if a block is in reusable
	public function has_block_in_reusable( $block_name, $id = false ){
		$id = (!$id) ? get_the_ID() : $id;
		if( $id ){
			if ( has_block( 'block', $id ) ){
				// Check reusable blocks
				$content = get_post_field( 'post_content', $id );
				$blocks = parse_blocks( $content );
	
				if ( ! is_array( $blocks ) || empty( $blocks ) ) {
					return false;
				}
	
				foreach ( $blocks as $block ) {
					if ( $block['blockName'] === 'core/block' && ! empty( $block['attrs']['ref'] ) ) {
						if( has_block( $block_name, $block['attrs']['ref'] ) ){
						   return true;
						}
					}
				}
			}
		}
	
		return false;
	}

    public function frontend_scripts() {
        if (get_post_meta(get_the_ID(), '_qubely_css', true) != '') {
            $blocks_meta_data = get_post_meta(get_the_ID(), '__qubely_available_blocks', true);
            $blocks_meta_data = maybe_unserialize($blocks_meta_data);

            wp_register_script('qubely_pro_local_script', '');
            wp_localize_script('qubely_pro_local_script', 'qubely_pro_urls', array(
                'plugin' => QUBELY_PRO_DIR_URL,
            ));
            wp_enqueue_script('qubely_pro_local_script');

            if (is_array($blocks_meta_data) && count($blocks_meta_data)) {
                wp_enqueue_style('qubely-pro-style-min', QUBELY_PRO_DIR_URL . 'assets/css/style.min.css', false, QUBELY_PRO_VERSION);

                if ( has_block('qubely/form') || $this->has_block_in_reusable('qubely/form') ) {
                    wp_enqueue_script('qubely-jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
                    wp_register_style('qubely-jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
                    wp_enqueue_script('qubely-form-script', QUBELY_PRO_DIR_URL . 'assets/js/form.js', array('jquery', 'qubely-jquery-ui'), QUBELY_PRO_VERSION);
                }

                if ( has_block('qubely/wooproducts') || $this->has_block_in_reusable('qubely/wooproducts') ) {
                    wp_enqueue_script('qubely_woo_script', QUBELY_PRO_DIR_URL . 'assets/js/woocommerce.js', array('jquery'), QUBELY_PRO_VERSION);
                }

                if ( has_block('qubely/imagecarousel') ||
                     has_block('qubely/postcarousel') ||
                     has_block('qubely/teamcarousel') ||
                     has_block('qubely/woocarousel') ||
                     has_block('qubely/testimonialcarousel') ||
                     $this->has_block_in_reusable('qubely/imagecarousel') ||
                     $this->has_block_in_reusable('qubely/postcarousel') ||
                     $this->has_block_in_reusable('qubely/teamcarousel') ||
                     $this->has_block_in_reusable('qubely/woocarousel') ||
                     $this->has_block_in_reusable('qubely/testimonialcarousel')
                ) {
                    wp_enqueue_script('qubely-carousel', QUBELY_PRO_DIR_URL . 'assets/js/qubely-carousel.js', array('jquery'), QUBELY_PRO_VERSION);
                }

                if ( has_block('qubely/countdown') || $this->has_block_in_reusable( 'qubely/countdown' ) ) {
                    wp_enqueue_script('qubely-countdown', QUBELY_PRO_DIR_URL . 'assets/js/qubely-countdown.js', array(), QUBELY_PRO_VERSION);
                }

                if ( has_block('qubely/lottie') || $this->has_block_in_reusable('qubely/lottie') ) {
                    wp_enqueue_script('qubely-lottie-player', QUBELY_PRO_DIR_URL . 'assets/js/lottie-player.min.js', array(), QUBELY_PRO_VERSION);
                    wp_enqueue_script('qubely-lottie-interactivity', QUBELY_PRO_DIR_URL . 'assets/js/lottie-interactivity.min.js', array(), QUBELY_PRO_VERSION);
                    wp_enqueue_script('qubely-lottie-block', QUBELY_PRO_DIR_URL . 'assets/js/lottie-block.js', array(), QUBELY_PRO_VERSION);
                }

                if ( has_block('qubely/modal') || $this->has_block_in_reusable('qubely/modal') ) {
                    wp_enqueue_script('qubely-modal-block', QUBELY_PRO_DIR_URL . 'assets/js/modal.js', array(), QUBELY_PRO_VERSION);
                }
            } else {
                //$this->frontend_scripts_old_style();
            }
        }
    }

    public function frontend_scripts_old_style($post = null){
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
            wp_enqueue_script('qubely-jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
            wp_register_style('qubely-jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
            wp_enqueue_script('qubely-form-script', QUBELY_PRO_DIR_URL . 'assets/js/form.js', array('jquery', 'qubely-jquery-ui'), QUBELY_PRO_VERSION);
        }
        if (false !== strpos($post, '<!-- wp:' . 'qubely/wooproducts' . ' ')||false !== strpos($post, '<!-- wp:' . 'qubely/woocarousel' . ' ')) {
            wp_enqueue_script('qubely_woo_script', QUBELY_PRO_DIR_URL . 'assets/js/woocommerce.js', array('jquery'), QUBELY_PRO_VERSION);
        }
        if ((false !== strpos($post, '<!-- wp:' . 'qubely/imagecarousel' . ' ')) || (false !== strpos($post, '<!-- wp:' . 'qubely/postcarousel' . ' ')) || (false !== strpos($post, '<!-- wp:' . 'qubely/teamcarousel' . ' ')) || (false !== strpos($post, '<!-- wp:' . 'qubely/testimonialcarousel' . ' '))) {
            wp_enqueue_script('qubely-carousel', QUBELY_PRO_DIR_URL . 'assets/js/qubely-carousel.js', array('jquery'), QUBELY_PRO_VERSION);
        }
        if (false !== strpos($post, '<!-- wp:' . 'qubely/countdown' . ' ')) {
            wp_enqueue_script('qubely-countdown', QUBELY_PRO_DIR_URL . 'assets/js/qubely-countdown.js', array(), QUBELY_PRO_VERSION);
        }
    }

    public function admin_scripts(){
        wp_enqueue_style('plugin-license-handler', QUBELY_PRO_DIR_URL . 'assets/css/license.css');
        wp_enqueue_script('qubely-jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
        wp_enqueue_script('qubely-form-script',  QUBELY_PRO_DIR_URL . 'assets/js/form.js', array('jquery', 'qubely-jquery-ui'), QUBELY_PRO_VERSION);
        wp_enqueue_script('qubely-woocommerce',  QUBELY_PRO_DIR_URL . 'assets/js/woocommerce.js', array('jquery'), QUBELY_PRO_VERSION);
        wp_register_style('qubely-jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
    }

    public function qubely_editor_assets(){
        global $pagenow;

        if ( 'widgets.php' !== $pagenow ) {
            wp_enqueue_script('qubely-pro-blocks-js', QUBELY_PRO_DIR_URL . 'assets/js/qubely.pro.dev.js', array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'qubely-blocks-js'), QUBELY_PRO_VERSION, true);
            wp_localize_script('qubely-pro-blocks-js', 'qubely_pro_admin', array(
                'plugin' => QUBELY_PRO_DIR_URL,
                'publishedPosts' => wp_count_posts()->publish,
                'ajax' => admin_url('admin-ajax.php')
            ));
        }
    }
}
