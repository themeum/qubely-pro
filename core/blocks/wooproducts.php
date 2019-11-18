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
                    'default' => 2
                ),
                'productsPerPage' => array(
                    'type' => 'number',
                    'default' => 4
                ),
                'columns' => array(
                    'type' => 'number',
                    'default' => 3
                ),
                'orderby' => array(
                    'type'    => 'string',
                    'default' => 'date',
                ),
                'productsStatus' => array(
                    'type'    => 'string',
                    'default' => null,
                ),
                'selectedCatagories' => array(
                    'type' => 'array',
                    'default' => [],
                    'items'   => [
                        'type' => 'object'
                    ],
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

    $uniqueId               = isset($att['uniqueId']) ? $att['uniqueId'] : '';
    $layout                 = isset($att['layout']) ? $att['layout'] : 2;
    $style                  = isset($att['style']) ? $att['style'] : 1;
    $orderBy                = isset($att['orderBy']) ? $att['orderBy'] : 'date';
    $selectedCatagories     = isset($att['selectedCatagories']) ? $att['selectedCatagories']:[];
    $animation              = isset($att['animation']) ? (count((array) $att['animation']) > 0 && $att['animation']['animation']  ? 'data-qubelyanimation="' . htmlspecialchars(json_encode($att['animation']), ENT_QUOTES, 'UTF-8') . '"' : '') : '';


    $cat_ids = array_column($selectedCatagories, 'value');

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

    $args = array(
        'orderby'  => esc_attr($orderBy),
        'post_type' => 'product',
        'post_status'    => 'publish',
        'tax_query'     => array(
            array(
                'taxonomy'    => 'product_cat',
                'field'     => 'term_id',
                'terms'   => $cat_ids,
            )
        )
    );
    $query = new WP_Query($args);

    $html = '';

    if ($query->have_posts()) {
        $html .= '<div class="qubely-block-' . $uniqueId . '">';
        $html .= '<div class="qubely-woo__products_wrapper ' . $interaction . ' qubely-layout-' . esc_attr($layout) . '" ' . $animation . '>';

        while ($query->have_posts()) {
            $query->the_post();
            $id = get_post_thumbnail_id();
            $src = wp_get_attachment_image_src($id);
            $image = '<img class="qubely-post-image" src="' . esc_url($src[0]) . '" alt="' . get_the_title() . '"/>';
            $html .= $image;
        }
        $html .= '</div>';
        wp_reset_postdata();
    }
    return $html;
}
add_action('init', 'register_block_qubely_wooproducts', 100);
