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
                    'default' => 1
                ),
                'style' => array(
                    'type' => 'number',
                    'default' => 1,
                    'style' => [(object) [
                        'condition' => [
                            (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                        ],
                        'selector' => '{{QUBELY}} .qubely_woo_product .qubely-product-info {width:100%;z-index: 1;}{{QUBELY}} .qubely-woo_product-image-wrapper + .qubely-product-info {  margin-left: -40px;  }'
                    ]]
                ),
                'productsPerPage' => array(
                    'type' => 'number',
                    'default' => 6
                ),
                'columns' => array(
                    'type' => 'object',
                    'default' => array('md' => 2, 'sm' => 2, 'xs' => 1),
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

                //Colos
                'titleColor' => array(
                    'type'    => 'string',
                    'default' => '#0073aa',
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-product-name {color: {{titleColor}};}'
                    ]]
                ),
                'discount' => array(
                    'type'    => 'string',
                    'default' => '#546E7A',
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-regular-price s {color: {{discount}};}'
                    ]]
                ),

                'titleHoverColor' => array(
                    'type'    => 'string',
                    'default' => '#005177',
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-product-name:hover {color: {{titleHoverColor}};}'
                    ]]
                ),
                //spacing
                'priceSpacing' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'md' => 10,
                        'unit' => 'px'
                    ),
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-product-price{margin-bottom: {{priceSpacing}};}'
                    ]]
                ),

                'titleSpace' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'md' => 10,
                        'unit' => 'px'
                    ),
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-product-name{margin-bottom: {{titleSpace}};}'
                    ]]
                ),
                //Typograpgy
                'titleTypography' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openTypography' => 1,
                        'family' => "Roboto",
                        'type' => "sans-serif",
                        'size' => (object) ['md' => 22, 'unit' => 'px'],
                    ],
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-product-name'
                    ]]
                ),
                'priceTypo' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openTypography' => 1,
                        'family' => "Roboto",
                        'type' => "sans-serif",
                        'size' => (object) ['md' => 20, 'unit' => 'px'],
                    ],
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-regular-price'
                    ]]
                ),
                'discountTypo' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openTypography' => 1,
                        'family' => "Roboto",
                        'type' => "sans-serif",
                        'size' => (object) ['md' => 22, 'unit' => 'px'],
                    ],
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-sale-price'
                    ]]
                ),
                'buttonTypography' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openTypography' => 1,
                        'family' => "Roboto",
                        'type' => "sans-serif",
                        'size' => (object) ['md' => 20, 'unit' => 'px'],
                    ],
                    'style' => [(object) [
                        'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product .qubely-product-info .qubely-addtocart-wrapper'
                    ]]
                ),
                //Button
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
                //Product Card
                'contentPosition' =>  array(
                    'type' => 'string',
                    'default' => 'center',
                    'style' => [(object) [
                        'condition' => [
                            (object) ['key' => 'layout', 'relation' => '==', 'value' => 1]
                        ],
                        'selector' => '{{QUBELY}} .qubely_woo_product_wrapper .qubely_woo_product {align-items: {{contentPosition}};}'
                    ]]
                ),
                'girdContentPosition' =>  array(
                    'type' => 'string',
                    'default' => 'center',
                    'style' => [(object) [
                        'condition' => [
                            (object) ['key' => 'layout', 'relation' => '==', 'value' => 2]
                        ],
                        'selector' => '{{QUBELY}} .qubely_woo_product_wrapper .qubely_woo_product {justify-content: {{girdContentPosition}};}'
                    ]]
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
                            'condition' => [
                                (object) ['key' => 'style', 'relation' => '!=', 'value' => 3]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper'
                        ]
                    ]
                ),
                'cardBorderRadius' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'unit' => 'px',
                        'openBorderRadius' => true,
                        'radiusType' => 'global',
                        'global' => (object) array(
                            'md' => 10,
                        ),
                    ),
                    'style' => [
                        (object) [
                            'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 2]],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper'
                        ]
                    ]
                ),
                'gridCardSpace' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'md' => 25,
                        'unit' => 'px'
                    ),
                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'layout', 'relation' => '==', 'value' => 2],
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper {grid-gap: {{gridCardSpace}};}'
                        ]
                    ]
                ),
                'cardSpace' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'md' => 25,
                        'unit' => 'px'
                    ),
                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'layout', 'relation' => '==', 'value' => 1],
                                (object) ['key' => 'style', 'relation' => '==', 'value' => 2]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper {margin-bottom: {{cardSpace}};}'
                        ]
                    ]
                ),
                'cardBoxShadow' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'blur' => 8,
                        'color' => "rgba(0,0,0,0.10)",
                        'horizontal' => 0,
                        'inset' => 0,
                        'openShadow' => true,
                        'spread' => 0,
                        'vertical' => 4
                    ),
                    'style' => [
                        (object) [
                            'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 2]],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper'
                        ]
                    ]
                ),
                'infoPadding' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openPadding' => 1,
                        'paddingType' => 'custom',
                        'unit' => 'px',
                        'global' => (object) ['md' => 20],
                        'custom' => (object) ['md' => '0 0 0 20'],
                    ],
                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'style', 'relation' => '!=', 'value' => 3],
                                (object) ['key' => 'layout', 'relation' => '==', 'value' => 1],
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper .qubely-product-info'
                        ]
                    ]
                ),
                'gridInfoPadding' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openPadding' => 1,
                        'paddingType' => 'custom',
                        'unit' => 'px',
                        'global' => (object) ['md' => 20],
                        'custom' => (object) ['md' => '20 0 0 0'],
                    ],
                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'layout', 'relation' => '==', 'value' => 2],
                                (object) ['key' => 'style', 'relation' => '!=', 'value' => 3]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper .qubely-product-info'
                        ]
                    ]
                ),
                //scart
                'stackBg' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openColor' => 1,
                        'type' => "color",
                        'color' => "#ffffff",
                        'gradient' => (object)[]
                    ],
                    'style' => [
                        (object) [
                            'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 3]],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper .qubely-product-info'
                        ],
                    ]
                ),
                'stackBorderRadius' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'unit' => 'px',
                        'openBorderRadius' => true,
                        'radiusType' => 'global',
                        'global' => (object) array(
                            'md' => 10,
                        ),
                    ),
                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper .qubely-product-info'
                        ]
                    ]
                ),
                'stackWidth' => array(
                    'type' => 'object',
                    'default' => (object) array(),

                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'layout', 'relation' => '==', 'value' => 2],
                                (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper .qubely-product-info {width: {{stackWidth}};}'
                        ]
                    ]
                ),
                'stackSpace' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'md' => 40,
                        'unit' => 'px'
                    ),
                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'layout', 'relation' => '==', 'value' => 1],
                                (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper:not(:last-child) {margin-bottom: {{stackSpace}};}'
                        ]
                    ]

                ),
                'stackPadding' => array(
                    'type' => 'object',
                    'default' => (object) [
                        'openPadding' => 1,
                        'paddingType' => 'global',
                        'unit' => 'px',
                        'global' => (object) ['md' => 20],
                    ],
                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper .qubely-product-info'
                        ],
                    ]
                ),
                'stackBoxShadow' => array(
                    'type' => 'object',
                    'default' => (object) array(
                        'blur' => 28,
                        'color' => "rgba(0,0,0,0.15)",
                        'horizontal' => 0,
                        'inset' => 0,
                        'openShadow' => true,
                        'spread' => -20,
                        'vertical' => 34
                    ),
                    'style' => [
                        (object) [
                            'condition' => [
                                (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_products_wrapper .qubely_woo_product_wrapper .qubely-product-info'
                        ],
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
    $columns                =  $att['columns'];
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
            '<div class="qubely_woo_products_wrapper %1$s md_has_%2$s_columns sm_has_%3$s_columns xs_has_%4$s_columns">',
            $layout == 1 ? 'qubely_list_layout' : 'qubely_grid_layout',
            $columns['md'],
            $columns['sm'],
            $columns['xs']
        );

        while ($query->have_posts()) {
            $query->the_post();
            $post_id = get_the_ID();
            $product = wc_get_product($post_id);
            $id = get_post_thumbnail_id();
            $src = wp_get_attachment_image_src($id);
            $image_id  = $product->get_image_id();
            $product_id  = $product->get_id();
            $image_url = wp_get_attachment_image_url($image_id, 'full');
            $woo_product_markup .= '<div class="qubely_woo_product_wrapper"><div class="qubely_woo_product">';
            if ($image_url) {
                $woo_product_markup .= sprintf(
                    '<div class="qubely-woo_product-image-wrapper">
                         <img class="qubely-woo_product-image" src="%1$s" alt="%2$s" />
                    </div>',
                    $image_url,
                    $product_id
                );
            } else {
                $woo_product_markup .= '<div class="qubely-woo_product-image-wrapper">
                          <div class="qubely-image-placeholder"></div>
                    </div>';
            }


            $woo_product_markup .= '<div class="qubely-product-info">';

            $woo_product_markup .= sprintf(
                '<a class="qubely-product-name" href={%1$s}>%2$s</a>',
                $product->get_permalink(),
                get_the_title()
            );
            if ($product->is_on_sale()) {
                $woo_product_markup .= sprintf(
                    '<div class="qubely-product-price">
                         <div class="qubely-regular-price">
                             <s>$%1$s</s>
                        </div>
                        <div class="qubely-sale-price">$%2$s</div>
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
                    <div class="qubely_adtocart_button" id="%1$s">%2$s</div>
                </div>',
                $product_id,
                $att['addToCartButtonText']
            );
            $woo_product_markup .= '</div></div></div>';
        }
        wp_reset_postdata();
    }
    return $woo_product_markup;
}
add_action('init', 'register_block_qubely_wooproducts', 100);
