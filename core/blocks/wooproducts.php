<?php

/**
 * Registers the `qubely/postgrid` block on server.
 *
 * @since 1.1.0
 */
function register_block_qubely_wooproducts()
{
    // Check if the register function exists.
    if (!function_exists('register_block_type')) {
        return;
    }
    register_block_type(
        'qubely/wooproducts',
        array(
            'attributes' => array(
                'uniqueId' => array(
                    'type' => 'string',
                ),
                //layout
                'layout' => array(
                    'type' => 'number',
                    'default' => 2
                ),
                'style' => array(
                    'type' => 'number',
                    'default' => 1
                ),
                'productsPerPage' => array(
                    'type' => 'number',
                    'default' => 6
                ),
                'columns' => array(
                    'type' => 'number',
                    'default' => 3
                ),
                'orderby' => array(
                    'type'    => 'string',
                    'default' => 'menu_order',
                ),
                'productsStatus' => array(
                    'type'    => 'string',
                    'default' => null,
                ),
                'excerptLimit' => array(
                    'type' => 'number',
                    'default' => 10
                ),
                'selectedCatagories' => array(
                    'type' => 'array',
                    'default' => [],
                    'items'   => [
                        'type' => 'object'
                    ],
                ),
                'imageSize' => array(
                    'type' => 'string',
                    'default' => '250px',
                    'style' => [(object) [
                        'condition' => [
                            (object) ['key' => 'imageSize', 'relation' => '!=', 'value' => 'custom']
                        ],
                        'selector' => '{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image img,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-image-placeholder {width: {{imageSize}};}'
                    ]]
                ),
                'imageSizeCustom' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'md' => 300,
                        'unit' => 'px'
                    ],
                    'style' => [(object) [
                        'condition' => [
                            (object) ['key' => 'imageSize', 'relation' => '==', 'value' => 'custom']
                        ],
                        'selector' => '{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image img,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-image-placeholder {width: {{imageSizeCustom}};}'
                    ]]
                ),
                'imageHeight' => array(
                    'type' => 'string',
                    'default' => '250px',
                    'style' => [(object) [
                        'condition' => [
                            (object) ['key' => 'imageHeight', 'relation' => '!=', 'value' => 'custom']
                        ],
                        'selector' => '{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image img,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-image-placeholder {height: {{imageHeight}};}'
                    ]]
                ),

                'imageCustomHeight' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'md' => 300,
                        'unit' => 'px'
                    ],
                    'style' => [(object) [
                        'condition' => [
                            (object) ['key' => 'imageHeight', 'relation' => '==', 'value' => 'custom']
                        ],
                        'selector' => '{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image img,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-image-placeholder {height: {{imageCustomHeight}};}'
                    ]]
                ),
                'imageBorderRadius' => array(
                    'type' => 'object',
                    'default' => (object) [
                        "global" => (object) ["md" => "5"],
                        "openBorderRadius" => 1,
                        "radiusType" => "global",
                        "unit" => "px",
                    ],
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image img,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-image-placeholder'
                    ]]
                ),
                'addToCartButtonText' => array(
                    'type'    => 'string',
                    'default' => 'Add to cart',
                ),
                'buttonPadding' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openPadding' => 1,
                        'paddingType' => 'custom',
                        'unit' => 'px',
                        'custom' => (object) ['md' => '5 10 5 10'],
                    ],
                    'style' => [
                        (object) [
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-addtocart-wrapper'
                        ]
                    ]
                ),
                'buttonColor' => array(
                    'type' => 'string',
                    'default' => '#000',
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-addtocart-wrapper{color:{{buttonColor}};}'
                    ]]
                ),
                'buttonBgColor' => array(
                    'type' => 'object',
                    'default' => (object) array(),
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-addtocart-wrapper'
                    ]]
                ),
                'buttonBorder' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'color' => "#000",
                        "global" => (object) ["md" => "1"],
                        "openBorder" => 1,
                        "type" => "solid",
                        "unit" => "px",
                        "widthType" => "global"
                    ],
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-addtocart-wrapper'
                    ]]
                ),
                'buttonBorderRadius' => array(
                    'type' => 'object',
                    'default' => (object) [
                        "global" => (object) ["md" => "5"],
                        "openBorderRadius" => 1,
                        "radiusType" => "global",
                        "unit" => "px",
                    ],
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-addtocart-wrapper'
                    ]]
                ),
                'recreateStyles' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'blockPadding' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openPadding' => 1,
                        'paddingType' => 'global',
                        'unit' => 'px',
                        'global' => (object) ['md' => 10],
                    ],
                    'style' => [
                        (object) [
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper'
                        ]
                    ]
                ),

                'cardPadding' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openPadding' => 1,
                        'paddingType' => 'global',
                        'unit' => 'px',
                        'global' => (object) ['md' => 20],
                    ],
                    'style' => [
                        (object) [
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper'
                        ]
                    ]
                ),
                'bgColor' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'type' => 'color',
                        'openColor' => 0,
                        'color' => 'var(--qubely-color-1)',
                        'gradient' => (object)[
                            'color1' => 'var(--qubely-color-2)',
                            'color2' => 'var(--qubely-color-1)',
                            'direction' => 0,
                            'start' => 0,
                            'stop' => 100,
                            'type' => 'linear'
                        ]
                    ],
                    'style' => [
                        (object) [
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper'
                        ]
                    ]
                ),
                'border' => array(
                    'type' => 'object',
                    'default' => (object) array(),
                    'style' => [
                        (object) [
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper'
                        ]
                    ]
                ),
                'borderRadius' => array(
                    'type' => 'object',
                    'default' => (object) array(),
                    'style' => [
                        (object) [
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper'
                        ]
                    ]
                ),
                'boxShadow' => array(
                    'type' => 'object',
                    'default' => (object) array(),
                    'style' => [
                        (object) [
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper'
                        ]
                    ]
                ),
                'showGlobalSettings' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'interaction' => array(
                    'type' => 'object',
                    'default' => (object) array(),
                ),
                'animation' => array(
                    'type' => 'object',
                    'default' => (object) array(),
                ),
                'globalZindex' => array(
                    'type'    => 'string',
                    'default' => '0',
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} {z-index:{{globalZindex}};}'
                    ]]
                ),
                'hideTablet' => array(
                    'type' => 'boolean',
                    'default' => false,
                    'style' => [(object) [
                        'selector' => '{{QUBELY}}{display:none;}'
                    ]]
                ),
                'hideMobile' => array(
                    'type' => 'boolean',
                    'default' => false,
                    'style' => [(object) [
                        'selector' => '{{QUBELY}}{display:none;}'
                    ]]
                ),
                'globalCss' => array(
                    'type' => 'string',
                    'default' => '',
                    'style' => [(object) [
                        'selector' => ''
                    ]]
                ),
            ),
            'render_callback' => 'render_block_qubely_wooproducts'
        )
    );
}



function render_block_qubely_wooproducts($att)
{

    $uniqueId               = $att['uniqueId'];
    $layout                 = isset($att['layout']) ? $att['layout'] : 2;
    $columns                 = isset($att['columns']) ? $att['columns'] : 2;
    $style                  = isset($att['style']) ? $att['style'] : 1;
    $name                  = isset($att['name']) ? $att['name'] : 'product name';
    $productsPerPage        = isset($att['productsPerPage']) ? $att['productsPerPage'] : 3;
    $productsStatus         = isset($att['productsStatus']) ? $att['productsStatus'] : 'all';
    $orderBy                = isset($att['orderby']) ? $att['orderby'] : 'date';
    $selectedCatagories     = isset($att['selectedCatagories']) ? $att['selectedCatagories'] : [];
    $animation              = isset($att['animation']) ? (count((array) $att['animation']) > 0 && $att['animation']['animation']  ? 'data-qubelyanimation="' . htmlspecialchars(json_encode($att['animation']), ENT_QUOTES, 'UTF-8') . '"' : '') : '';


    $cat_ids = array_column($selectedCatagories, 'value');
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
        'post_status'    => 'publish',
        'posts_per_page' =>  $productsPerPage,
        'tax_query'      => $tax_query,
    );

    if (isset($att['orderby'])) {

        switch ($orderBy) {
            case 'price':
                //     $query_args['orderby'] = 'meta_value_num';
                //     $query_args['meta_key'] = '_price';
                $query_args['orderby'] = 'price';
                $query_args['order']   = 'asc';
                break;
            case 'price_desc':
                //     $query_args['orderby'] = 'meta_value_num';
                //     $query_args['meta_key'] = '_price';
                $query_args['orderby'] = 'price';
                $query_args['order']   = 'desc';
                break;
            case 'title':
                $query_args['orderby'] = 'title';
                $query_args['order']   = 'asc';
                break;
            case 'title-desc':
                $query_args['orderby'] = 'title';
                $query_args['order']   = 'asc';
                break;
            case 'date':
                $query_args['orderby'] = 'date';
                $query_args['order']   = 'asc';
                break;
            case 'date-desc':
                $query_args['orderby'] = 'date';
                $query_args['order']   = 'desc';
                break;
            case 'menu_order':
                $query_args['orderby'] = 'menu_order';
                $query_args['order']   = 'asc';
                break;
            default:
                $query_args['orderby'] = $att['orderby'];
        }
    }

    if ($productsStatus !== 'all') {
        $ids = $productsStatus === 'on_sale' ? wc_get_product_ids_on_sale() : wc_get_featured_product_ids();
        $on_sale_ids = empty($ids) ? array(0) : $ids;
        $query_args['post__in'] = [];
        $query_args['post__in'] += $ids;
    }

    $query = new WP_Query($query_args);

    $interaction = '';
    if (isset($att['interaction'])) {
        if (!empty((array) $att['interaction'])) {
            if (isset($att['interaction']['while_scroll_into_view'])) {
                if ($att['interaction']['while_scroll_into_view']['enable']) {
                    $interaction = 'qubley-block-interaction';
                }
            }
            if (isset($att['interaction']['mouse_movement'])) {
                if ($att['interaction']['mouse_movement']['enable']) {
                    $interaction = 'qubley-block-interaction';
                }
            }
        }
    }
    $woo_product_markup = '';

    if ($query->have_posts()) {
        $woo_product_markup .= sprintf(
            '<div class="qubely-block-%1$s">',
            $uniqueId
        );
        $woo_product_markup .= sprintf(
            '<div class="qubely_woo_products_wrapper %1$s has_%2$s_columns">',
            $layout == 1 ? 'qubely_list_layout' : 'qubely_grid_layout',
            $columns
        );

        while ($query->have_posts()) {
            $query->the_post();
            $post_id = get_the_ID();
            $product = wc_get_product($post_id);
            $id = get_post_thumbnail_id();
            $src = wp_get_attachment_image_src($id);
            $image_id  = $product->get_image_id();
            $image_url = wp_get_attachment_image_url($image_id, 'full');
            $woo_product_markup .= '<div class="qubely_woo_product_wrapper"><div class="qubely_woo_product">';
            if ($image_url) {
                $woo_product_markup .= sprintf(
                    '<div class="qubely-woo_product-image-wrapper">
                         <img class="qubely-woo_product-image" src="%1$s" alt="%2$s" />
                    </div>',
                    $image_url,
                    $product->get_id()
                );
            } else {
                $woo_product_markup .= '<div class="qubely-woo_product-image-wrapper">
                          <div class="qubely-image-placeholder"></div>
                    </div>';
            }


            $woo_product_markup .= sprintf(
                '<a class="qubely-product-name" href={%1$s}>%2$s</a>',
                $product->get_permalink(),
                get_the_title()
            );
            if ($product->is_on_sale()) {
                $woo_product_markup .= sprintf(
                    '<div class="qubely-product-price">
                         <div class="ws-regular-price">
                             <s>$%1$s</s>
                        </div>
                        <div class="ws-sale-price">$%2$s</div>
                    </div>',
                    $product->get_regular_price(),
                    $product->get_sale_price()
                );
            } else {
                $woo_product_markup .= sprintf(
                    '<div class="qubely-product-price">$%1$s</div>',
                    $product->get_price()
                );
            }
            $woo_product_markup .= sprintf(
                '<div class="qubely-addtocart-wrapper">
                    <div class="qubely_aaddtocart_button">%1$s</div>
                </div>',
                $att['addToCartButtonText']
            );
            $woo_product_markup .= '</div></div>';
        }
        wp_reset_postdata();
    }
    return $woo_product_markup;
}
add_action('init', 'register_block_qubely_wooproducts', 100);
