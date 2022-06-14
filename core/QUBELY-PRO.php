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
		add_action('rest_api_init', array($this, 'qubely_register_route'));
	}

	/**
	 * Init dynamic blocks frontend
	 */
	public function init_blocks()
	{
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/postgrid.php';
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/postcarousel.php';
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/wooproducts.php';
		require_once QUBELY_PRO_DIR_PATH . 'core/blocks/woocarousel.php';

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
	public function add_static_assets()
	{
		//CSS
		wp_enqueue_style('qubely-pro-preview-style-min', QUBELY_PRO_DIR_URL . 'assets/css/style.min.css', false, QUBELY_PRO_VERSION);

		//Scripts
		wp_enqueue_script('jquery-preview-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), QUBELY_PRO_VERSION);
		wp_register_style('jquery-preview-ui', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css', array(), QUBELY_PRO_VERSION);
		wp_enqueue_script('form-preview-script', QUBELY_PRO_DIR_URL . 'assets/js/form.min.js', array('jquery', 'jquery-preview-ui'), QUBELY_PRO_VERSION);
		wp_enqueue_script('qubely-preview-carousel', QUBELY_PRO_DIR_URL . 'assets/js/qubely-carousel.js', array('jquery'), QUBELY_PRO_VERSION);
		wp_enqueue_script('qubely-preview-countdown', QUBELY_PRO_DIR_URL . 'assets/js/qubely-countdown.js', array(), QUBELY_PRO_VERSION);
	}


	public function qubely_register_route()
	{
		register_rest_route(
			'qubely/v1',
			'/get_woo_products/',
			array(
				array(
					'methods'             => 'GET',
					'callback'            => array($this, 'get_woo_products'),
					'permission_callback' => '__return_true',
					'args' => array('orderby' => [], 'page'=>[], 'per_page' => [],  'catagories' => [], 'status' => []),
				),
			)
		);
	}

	public function get_woo_products($request)
	{
		$params = $request->get_params();
		$products = new WP_Query(array('post_type' => 'product', 'post_status' => 'publish', 'posts_per_page' => -1));
		$pages = array_fill(0, ceil($products->found_posts / ($productsPerPage || 1)), '1');
		$categories = $params['catagories'] ? $params['catagories'] : [];

		$cat_ids = array_column($categories, 'value');

		$tax_query = array();
		if (!empty($cat_ids)) {
			array_push(
				$tax_query,
				array(
					'taxonomy'    => 'product_cat',
					'field'     => 'term_id',
					'terms'   =>  $cat_ids,
				)
			);
		}


		$query_args = array(
			'order'          => '',
			'orderby'        => '',
			'post_type'      => 'product',
			'paged'      => -1,
			'posts_per_page'      => $params['per_page'],
			'post_status'    => 'publish',
			'tax_query'      => $tax_query,
			'max_num_pages' => count($pages),
		);


		switch ($params['status']) {
			case 'featured':
				if (isset($query_args['post__in'])) {
					$query_args['post__in'] = array_merge($query_args['post__in'], wc_get_featured_product_ids());
				} else {
					$query_args['post__in'] = wc_get_featured_product_ids();
				}
				break;

			case 'onsale':
				unset($query_args['meta_key']);
				$query_args['meta_query'] = array(
					'relation' => 'AND',
					array(
						'key'           => '_sale_price',
						'value'         => 0,
						'compare'       => '>',
						'type'          => 'numeric'
					),
					array(
						'key'           => '_regular_price',
						'value'         => 0,
						'compare'       => '>',
						'type'          => 'numeric'
					)
				);
				break;

			default:
				break;
		}

		if (isset($params['orderby'])) {

			switch ($params['orderby']) {
				case 'price':
					$query_args['orderby'] = 'meta_value_num';
					$query_args['meta_key'] = '_price';
					$query_args['order']   = 'asc';
					break;
				case 'price_desc':
					$query_args['orderby'] = 'meta_value_num';
					$query_args['meta_key'] = '_price';
					$query_args['order']   = 'desc';
					break;
				case 'title':
					$query_args['orderby'] = 'title';
					$query_args['order']   = 'asc';
					break;
				case 'title-desc':
					$query_args['orderby'] = 'title';
					$query_args['order']   = 'desc';
					break;
				case 'date':
					$query_args['orderby'] = 'date';
					$query_args['order']   = 'asc';
					$query_args['meta_key']   = '';
					break;
				case 'date-desc':
					$query_args['orderby'] = 'date';
					$query_args['order']   = 'desc';
					$query_args['meta_key']   = '';
					break;
				case 'menu_order':
					$query_args['orderby'] = 'title menu_order';
					$query_args['order']   = 'asc';
					break;
				case 'rating':
					$query_args['orderby'] = 'meta_value_num';
                    $query_args['meta_key'] = '_wc_average_rating';
						break;
				default:
					$query_args['orderby'] = $att['orderby'];
			}
		}
		/**
		 * All products
		 */
		$all_products = new WP_Query($query_args);

		$query_args['paged'] = $params['page'];
		$query = new WP_Query($query_args);
		$woo_products = [];
		
		if ($query->have_posts()) {
			while ($query->have_posts()) {
				$query->the_post();
				global $product;
				$temp                = array();
				$post_id            = get_the_ID();
				$temp['id'] =  $post_id;
				$temp['name'] =  get_the_title();
				$temp['on_sale'] =  $product->is_on_sale();
				$temp['product_id']  = $product->get_id();

				if ($product->is_type( 'simple' )) {
					$temp['regular_price'] =  $product->get_regular_price();
					$temp['sale_price'] = 	$product->get_sale_price();
				}
				elseif($product->is_type('variable')){
					$temp['sale_price'] =  $product->get_variation_sale_price( 'min', true );
					$temp['regular_price'] =  $product->get_variation_regular_price( 'max', true );
				}

				$temp['price'] = 	$product->get_price();
				$image_id  = $product->get_image_id();
				$temp['img_id']  = 	$image_id;
				$temp['img_url']  = wp_get_attachment_image_url($image_id, 'full');
				$temp['average_rating'] = 	$product->get_average_rating();
				$temp['rating_count'] = 	$product->get_rating_count();
				$temp['permalink'] = $product->get_permalink();
				$temp['all_products'] = $all_products->found_posts;
				$woo_products[] = $temp;
			}
			wp_reset_postdata();
		}
		return rest_ensure_response($woo_products);
	}
}
new QUBELY_PRO();
