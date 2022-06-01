<?php

class WOOCAROUSEL
{
    protected $page = 1;
    function __construct()
    {
        add_action('init', [$this, 'register_block_qubely_woocarousel'], 100);
    }

    /**
     * Registers the `qubely/woocarousel` block on server.
     *
     * @since 1.1.0
     */
    function register_block_qubely_woocarousel()
    {
        // Check if the register function exists.
        if (!function_exists('register_block_type')) {
            return;
        }
        register_block_type(
            'qubely/woocarousel',
            array(
                'attributes' => array(
                    'uniqueId' => array(
                        'type' => 'string',
                    ),
                    'style' => array(
                        'type' => 'number',
                        'default' => 1,
                        'style' => [
                            (object) [
                                'condition' => [
                                    (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                                ],
                                'selector' => '{{QUBELY}} .qubely_woo_product .qubely-product-info {z-index: 1;}{{QUBELY}} .qubely-woo_product-image-wrapper + .qubely-product-info {  margin-top: -40px;  }'
                            ]
                        ]
                    ),
                    'page' => array(
                        'type' => 'number',
                        'default' => 1,
                    ),
                    'productsPerPage' => array(
                        'type' => 'number',
                        'default' => 4
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
                        'default' => '350px',
                        'style' => [
                            (object) [
                                'condition' => [
                                    (object) ['key' => 'imageSize', 'relation' => '!=', 'value' => 'custom']
                                ],
                                'selector' => '{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image img,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-image-placeholder {width: {{imageSize}};}'
                            ]
                        ]
                    ),
                    'imageSizeCustom' => array(
                        'type' => 'object',
                        'default' => (object) [
                            'md' => 100,
                            'unit' => '%'
                        ],
                        'style' => [
                            (object) [
                                'condition' => [
                                    (object) ['key' => 'imageSize', 'relation' => '==', 'value' => 'custom']
                                ],
                                'selector' => '{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-woo_product-image img,{{QUBELY}} .qubely-woo_product-image-wrapper .qubely-image-placeholder {width: {{imageSizeCustom}};}'
                            ]
                        ]
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
                    //ratings
                    'showRatings' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'showRatingsCount' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'ratingsColor' => array(
                        'type'    => 'string',
                        'default' => '#FFB800',
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-ratings-wrapper .qubely-product-ratings:before {color: {{ratingsColor}};} {{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-ratings-wrapper .qubely-product-ratings {color: {{ratingsColor}};}'
                        ]]
                    ),

                    'starsSize' => array(
                        'type' => 'object',
                        'default' => (object) [
                            'md' => 20,
                            'unit' => 'px'
                        ],
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-ratings-wrapper .qubely-product-ratings{font-size:{{starsSize}};}'
                        ]]
                    ),
                    'ratingsSpacing' => array(
                        'type' => 'object',
                        'default' => (object) [
                            'md' => 5,
                            'unit' => 'px'
                        ],
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-ratings-wrapper{margin-bottom: {{ratingsSpacing}};}'
                        ]]
                    ),
                    'ratingsCountSpacing' => array(
                        'type' => 'object',
                        'default' => (object) [
                            'md' => 5,
                            'unit' => 'px'
                        ],
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-ratings-wrapper .qubely-ratings-count{margin-left: {{ratingsCountSpacing}};}'
                        ]]
                    ),
                    //Colors
                    'titleColor' => array(
                        'type'    => 'string',
                        'default' => '#0073aa',
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-name {color: {{titleColor}};}'
                        ]]
                    ),
                    'discount' => array(
                        'type'    => 'string',
                        'default' => '#546E7A',
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-regular-price s {color: {{discount}};}'
                        ]]
                    ),

                    'titleHoverColor' => array(
                        'type'    => 'string',
                        'default' => '#005177',
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-name:hover {color: {{titleHoverColor}};}'
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
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-price{margin-bottom: {{priceSpacing}};}'
                        ]]
                    ),

                    'titleSpace' => array(
                        'type' => 'object',
                        'default' => (object) array(
                            'md' => 10,
                            'unit' => 'px'
                        ),
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-name{margin-bottom: {{titleSpace}};}'
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
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-product-name'
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
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-regular-price'
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
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-sale-price'
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
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-product-info .qubely-addtocart-wrapper'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-addtocart-wrapper'
                            ]
                        ]
                    ),
                    'buttonColor' => array(
                        'type' => 'string',
                        'default' => '#000',
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-addtocart-wrapper{color:{{buttonColor}};}'
                        ]]
                    ),
                    'buttonBgColor' => array(
                        'type' => 'object',
                        'default' => (object) array(),
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-addtocart-wrapper'
                        ]]
                    ),
                    'buttonHoverColor' => array(
                        'type' => 'string',
                        'default' => '#000',
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-addtocart-wrapper:hover{color:{{buttonHoverColor}};}'
                        ]]
                    ),
                    'buttonHoverBgColor' => array(
                        'type' => 'object',
                        'default' => (object) array(),
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-addtocart-wrapper:hover'
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
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-addtocart-wrapper'
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
                            'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product .qubely-addtocart-wrapper'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper'
                            ]
                        ]
                    ),
                    //Product Card
                    'ContentPosition' =>  array(
                        'type' => 'string',
                        'default' => 'center',
                        'style' => [(object) [
                            'condition' => [
                                (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                            ],
                            'selector' => '{{QUBELY}} .qubely_woo_product_wrapper .qubely_woo_product {align-items: {{ContentPosition}};}'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper {grid-gap: {{gridCardSpace}};}'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper'
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
                                    (object) ['key' => 'style', 'relation' => '!=', 'value' => 3]
                                ],
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper .qubely-product-info'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper .qubely-product-info'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper .qubely-product-info'
                            ]
                        ]
                    ),
                    'gridStackWidth' => array(
                        'type' => 'object',
                        'default' => (object) array(
                            'md' => 80,
                            'unit' => '%'
                        ),
                        'style' => [
                            (object) [
                                'condition' => [
                                    (object) ['key' => 'style', 'relation' => '==', 'value' => 3]
                                ],
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper .qubely-product-info {width: {{gridStackWidth}};}'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper .qubely-product-info'
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper .qubely-product-info'
                            ],
                        ]
                    ),
                    'productBgColor' => array(
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
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper'
                            ]
                        ]
                    ),
                    'productBorder' => array(
                        'type' => 'object',
                        'default' => (object) array(),
                        'style' => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper'
                            ]
                        ]
                    ),
                    'productBorderRadius' => array(
                        'type' => 'object',
                        'default' => (object) array(),
                        'style' => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely_woo_carousel_wrapper .qubely_woo_product_wrapper'
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
                                'selector' => '{{QUBELY}}'
                            ]
                        ]
                    ),
                    'border' => array(
                        'type' => 'object',
                        'default' => (object) array(),
                        'style' => [
                            (object) [
                                'selector' => '{{QUBELY}}'
                            ]
                        ]
                    ),
                    'borderRadius' => array(
                        'type' => 'object',
                        'default' => (object) array(),
                        'style' => [
                            (object) [
                                'selector' => '{{QUBELY}}'
                            ]
                        ]
                    ),
                    'boxShadow' => array(
                        'type' => 'object',
                        'default' => (object) array(),
                        'style' => [
                            (object) [
                                'selector' => '{{QUBELY}}'
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
                    'sliderItemMargin'     => array(
                        'type'             => 'number',
                        'default'         => 10
                    ),

                    /* -----------------------------
                    * 	Slider Settings
                    *------------------------------- */
                    'nav'             => array(
                        'type'         => 'boolean',
                        'default'     => true
                    ),
                    'arrowStyle' => array(
                        'type'         => 'string',
                        'default'     => 'arrowright2',
                    ),
                    'horizontalPosition' => array(
                        'type'             => 'object',
                        'default'         => (object) array(
                            'md'     => '-7',
                            'unit'     => '%'
                        ),
                        'style'     => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {right: {{horizontalPosition}};} {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {left: {{horizontalPosition}};}'
                            ]
                        ]
                    ),
                    'verticalPosition' => array(
                        'type'             => 'object',
                        'default'         => (object) array(
                            'md'     => 50,
                            'unit'     => '%'
                        ),
                        'style'     => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control { top: {{verticalPosition}};}'
                            ]
                        ]
                    ),
                    # Arrow style.
                    'navColor'         => array(
                        'type'        => 'string',
                        'default'     => '#2184F9',
                        'style'     => [(object) [
                            'condition' => [
                                (object) ['key' => 'nav', 'relation' => '==', 'value' => true]
                            ],
                            'selector' => '{{QUBELY}} .qubely-carousel-nav-control .nav-control span {color: {{navColor}};}'
                        ]]
                    ),
                    'navShapeColor'     => array(
                        'type'            => 'string',
                        'default'         => '#ffffff',
                        'style'         => [(object) [
                            'condition' => [
                                (object) ['key' => 'nav', 'relation' => '==', 'value' => true]
                            ],
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {background: {{navShapeColor}};}'
                        ]]
                    ),
                    # Dot style.
                    'dotPosition' => array(
                        'type'             => 'object',
                        'default'         => (object) array(
                            'md'     => -15,
                            'unit'     => 'px'
                        ),
                        'style'     => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots { bottom: {{dotPosition}};}'
                            ]
                        ]
                    ),
                    'dotwidth' => array(
                        'type'         => 'object',
                        'default'     => (object) array(
                            'md'     => '40',
                            'unit'     => 'px'
                        ),
                        'style'     => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {width: {{dotwidth}};} {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active {width: {{dotwidth}};}'
                            ]
                        ]
                    ),
                    'dotHeight'     => array(
                        'type'         => 'object',
                        'default'     => (object) array(
                            'md'     => '4',
                            'unit'     => 'px'
                        ),
                        'style'     => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {height: {{dotHeight}};}'
                            ]
                        ]
                    ),
                    'dotBorderRadius' => array(
                        'type'         => 'object',
                        'default'     => (object) array(
                            'md'     => '10',
                            'unit'     => '%'
                        ),
                        'style'     => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {border-radius: {{dotBorderRadius}};}'
                            ]
                        ]
                    ),
                    # Dot Color style.
                    'dotColor'         => array(
                        'type'        => 'string',
                        'default'     => '#f5f5f5',
                        'style'     => [(object) [
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li'
                        ]]
                    ),
                    'dotColor'     => array(
                        'type'         => 'object',
                        'default'     => (object) array(
                            'openColor'     => 1,
                            'type'             => 'color',
                            'color'         => '#f5f5f5',
                            'gradient'        => (object) [
                                'color1'     => '#16d03e',
                                'color2'     => '#1f91f3',
                                'direction' => 45,
                                'start'     => 0,
                                'stop'         => 100,
                                'type'         => 'linear'
                            ],
                        ),
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li'
                        ]]
                    ),
                    'dotActiveColor'     => array(
                        'type'         => 'object',
                        'default'     => (object) array(
                            'openColor'     => 1,
                            'type'             => 'color',
                            'color'         => '#2184f9',
                            'gradient'        => (object) [
                                'color1'     => '#16d03e',
                                'color2'     => '#1f91f3',
                                'direction' => 45,
                                'start'     => 0,
                                'stop'         => 100,
                                'type'         => 'linear'
                            ],
                        ),
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active'
                        ]]
                    ),

                    'dotalignment'     =>  array(
                        'type'         => 'string',
                        'default'     => 'center',
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {text-align: {{dotalignment}};}'
                        ]]
                    ),

                    'textalignment' =>  array(
                        'type'         => 'string',
                        'default'     => 'left',
                        'style' => [(object) [
                            'selector' => '{{QUBELY}} .qubely-post-grid-wrapper .qubely-post-grid-content {text-align: {{textalignment}};}'
                        ]]
                    ),
                    /*---------------------------------
                    * 		Post Carousel
                    -----------------------------------*/
                    'postitems' => array(
                        'type'         => 'object',
                        'default'     => array('md' => 2, 'sm' => 2, 'xs' => 1),
                    ),
                    'autoPlay' => array(
                        'type' => 'boolean',
                        'default' => false
                    ),
                    'isCentered' => array(
                        'type'         => 'boolean',
                        'default'     => false
                    ),
                    'activeFade' => array(
                        'type'         => 'boolean',
                        'default'     => false
                    ),
                    'interval'         => array(
                        'type'         => 'number',
                        'default'     => 3000
                    ),
                    'speed'         => array(
                        'type'         => 'number',
                        'default'     => 800
                    ),
                    'dots'             => array(
                        'type'         => 'boolean',
                        'default'     => false
                    ),
                    'shapeWidth'     => array(
                        'type'         => 'object',
                        'default'     => (object) array(
                            'md'     => 20, 'unit' => 'px'
                        ),
                        'style'     => [(object) [
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control .fas { width: {{shapeWidth}}; height: {{shapeWidth}}; line-height: {{shapeWidth}}; }'
                        ]]
                    ),
                    'navSize'         => array(
                        'type'         => 'object',
                        'default'     => (object) array(
                            'md'     => 20,
                            'unit'     => 'px'
                        ),
                        'style'     => [
                            (object) [
                                'selector' => '{{QUBELY}} .qubely-carousel-nav-control .nav-control .fas { font-size: {{navSize}}; }'
                            ],
                        ],
                    ),
                    'navBorderColor' => array(
                        'type'             => 'object',
                        'default'         => (object) array(
                            'unit'         => 'px',
                            'widthType' => 'global',
                            'global'     => (object) array(
                                'md'     => '1',
                            ),
                        ),
                        'style'         => [(object) [
                            'condition' => [
                                (object) ['key' => 'nav', 'relation' => '==', 'value' => true]
                            ],
                            'selector'     => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control'
                        ]]
                    ),

                    'navigationRadius' => array(
                        'type'                 => 'object',
                        'default'             => (object) array(
                            'unit'             => 'px',
                            'openBorderRadius' => true,
                            'radiusType'     => 'global',
                            'global'         => (object) array(
                                'md'             => 10,
                            ),
                        ),
                        'style' => [(object) ['selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control']]
                    ),
                    'navHoverColor' => array(
                        'type'    => 'string',
                        'default' => '#ffffff',
                        'style' => [(object) [
                            'condition' => [
                                (object) ['key' => 'nav', 'relation' => '==', 'value' => true]
                            ],
                            'selector' => '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover span {color: {{navHoverColor}};}'
                        ]]
                    ),
                    'navShapeHoverColor' => array(
                        'type'    => 'string',
                        'default' => '#0b65cb',
                        'style' => [(object) [
                            'condition' => [
                                (object) ['key' => 'nav', 'relation' => '==', 'value' => true]
                            ],
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover {background: {{navShapeHoverColor}};}'
                        ]]
                    ),
                    'navBorderHoverColor' => array(
                        'type' => 'object',
                        'default' => (object) array(
                            'unit' => 'px',
                            'widthType' => 'global',
                            'global' => (object) array(
                                'md' => '1',
                            ),
                        ),
                        'style' => [(object) [
                            'condition' => [
                                (object) ['key' => 'nav', 'relation' => '==', 'value' => true]
                            ],
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover'
                        ]]
                    ),
                    'navHoverRadius' => array(
                        'type' => 'object',
                        'default' => (object) array(
                            'unit' => '%',
                            'openBorderRadius' => true,
                            'radiusType' => 'global',
                            'global' => (object) array(
                                'md' => 50,
                            ),
                        ),
                        'style' => [(object) [
                            'condition' => [
                                (object) ['key' => 'nav', 'relation' => '==', 'value' => true]
                            ],
                            'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover'
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
                'render_callback' => [$this, 'render_block_qubely_woocarousel']
            )
        );
    }

    /**
     * Get Product quantity in Cart
     */
    function matched_cart_items($target_id)
    {
        $count = 0;
        if (WC()->cart && !WC()->cart->is_empty()) {
            $items = WC()->cart->get_cart();
            foreach ($items as $item => $values) {
                if ($target_id == $values['product_id']) {
                    $count = $values['quantity'];
                }
            }
        }
        return $count;
    }


    /**
     * Render function for Front-end
     */
    function render_block_qubely_woocarousel($att)
    {
        if ( ! class_exists( 'WooCommerce' ) ) {
            return;
        }

        $uniqueId                 = isset($att['uniqueId']) ? $att['uniqueId'] : '';
        $showRatings            =  $att['showRatings'];
        $showRatingsCount       =  $att['showRatingsCount'];
        $style                  = isset($att['style']) ? $att['style'] : 1;
        $productsStatus         = isset($att['productsStatus']) ? $att['productsStatus'] : 'all';
        $orderBy                = isset($att['orderby']) ? $att['orderby'] : 'date';
        $selectedCatagories     = isset($att['selectedCatagories']) ? $att['selectedCatagories'] : [];
        $animation              = isset($att['animation']) ? (count((array) $att['animation']) > 0 && $att['animation']['animation']  ? 'data-qubelyanimation="' . htmlspecialchars(json_encode($att['animation']), ENT_QUOTES, 'UTF-8') . '"' : '') : '';

        $products = new WP_Query(array('post_type' => 'product', 'post_status' => 'publish', 'posts_per_page' => -1));

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


        if (!empty(get_query_var('page')) || !empty(get_query_var('paged'))) {
            $this->page = is_front_page() ? get_query_var('page') : get_query_var('paged');
        }

        $query_args = array(
            'order'          => '',
            'orderby'        => '',
            'post_type'      => 'product',
            'post_status'    => 'publish',
            'tax_query'      => $tax_query
        );


        switch ($productsStatus) {
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


        if (isset($att['orderby'])) {

            switch ($orderBy) {
                case 'price':
                    // $query_args['orderby'] = 'meta_value_num';
                    // $query_args['meta_key'] = '_price';
                    $query_args['orderby'] = 'price';
                    $query_args['order']   = 'asc';
                    break;
                case 'price_desc':
                    // $query_args['orderby'] = 'meta_value_num';
                    // $query_args['meta_key'] = '_price';
                    $query_args['orderby'] = 'price';
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
                default:
                    $query_args['orderby'] = $att['orderby'];
            }
        }


        $query_args = array_merge(
            $query_args,
            WC()->query->get_catalog_ordering_args($query_args['orderby'], $query_args['order'])
        );

        $wp_query = new WP_Query($query_args);

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

        # Attribute value: Using Json Encode.
        $autoPlay               = $att['autoPlay'];
        $postitems              = $att['postitems'];
        $nav                    = $att['nav'];
        $dots                    = $att['dots'];
        $speed                    = $att['speed'];
        $interval                = $att['interval'];
        $center                    = $att['isCentered'];
        $arrowStyle                = $att['arrowStyle'];
        $verticalPosition        = $att['verticalPosition'];
        $sliderItemMargin         = $att['sliderItemMargin'];

        # Attribute value.
        $data_options = (object) array(
            'autoplay'         => $autoPlay,
            'items'         => $postitems,
            'nav'             => $nav,
            'dots'             => $dots,
            'margin'         => $sliderItemMargin,
            'speed'         => $speed,
            'interval'         => $interval,
            'center'         => $center,
            'arrowStyle'     => $arrowStyle,
            'arrowPosition' => $verticalPosition,
            'responsive'     => array(
                [
                    'viewport'     => 1170,
                    'items'     => $postitems['md']
                ],
                [
                    'viewport'     => 980,
                    'items'     => $postitems['sm']
                ],
                [
                    'viewport'     => 580,
                    'items'     => $postitems['xs']
                ],
            )
        );
        # End data options.

        $woo_product_markup = '';

        if ($wp_query->have_posts()) {
            $woo_product_markup .= sprintf(
                '<div class="qubely-block-%1$s">',
                $uniqueId
            );

            $woo_product_markup .=  '<div class="qubely_woo_carousel_wrapper">';
            $woo_product_markup .= sprintf(
                '<div class="qubely-carousel qubely-carousel-wrapper %1$s" data-options="%2$s">',
                $interaction,
                htmlspecialchars(json_encode($data_options), ENT_QUOTES, 'UTF-8')
            );

            while ($wp_query->have_posts()) {
                $wp_query->the_post();
                $post_id = get_the_ID();
                $product = wc_get_product($post_id);
                $id = get_post_thumbnail_id();
                $src = wp_get_attachment_image_src($id);
                $image_id  = $product->get_image_id();
                $product_id  = $product->get_id();
                $image_url = wp_get_attachment_image_url($image_id, 'full');
                $in_cart = $this->matched_cart_items($product_id);
                $rating = $product->get_average_rating();
                $count   = $product->get_rating_count();
                $regular_price =  $product->get_regular_price();
                $sale_price = 	$product->get_sale_price();
               
                if($product->is_type('variable')){
					$sale_price =  $product->get_variation_sale_price( 'min', true );
					$regular_price=  $product->get_variation_regular_price( 'max', true );
				}

                $woo_product_markup .= '<div class="qubely-carousel-item">';
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
                    $woo_product_markup .= '<div class="qubely-woo_product-image-wrapper width-placeholder">
                          <div class="qubely-image-placeholder"></div>
                    </div>';
                }


                $woo_product_markup .= '<div class="qubely-product-info">';
                if ($showRatings) {
                    $woo_product_markup .= sprintf(
                        '<div class="qubely-product-ratings-wrapper">
                    <div class="qubely-product-ratings" style="--qubely-product-rating:%1$s%2$s;"></div>',
                        $rating * 20,
                        '%'
                    );
                    if ($showRatingsCount) {
                        $woo_product_markup .= sprintf(
                            '<span class="qubely-ratings-count">' . _x( '(%1$s)', 'Ratings Count', 'qubely-pro' ) . '</span>',
                            $count
                        );
                    }
                    $woo_product_markup .= '</div>';
                }

                $woo_product_markup .= sprintf(
                    '<a class="qubely-product-name" href=%1$s>%2$s</a>',
                    $product->get_permalink(),
                    get_the_title()
                );
                if ($product->is_on_sale()) {
                    $woo_product_markup .= sprintf(
                        '<div class="qubely-product-price">
                         <div class="qubely-regular-price">
                             <s>' . _x( '$%1$s', 'Product Regular Price', 'qubely-pro' ) . '</s>
                        </div>
                        <div class="qubely-sale-price">' . _x( '$%2$s', 'Product Sale Price', 'qubely-pro' ) . '</div>
                    </div>',
                    $regular_price,
                    $sale_price
                    );
                } else {
                    $woo_product_markup .= sprintf(
                        '<div class="qubely-product-price">' . _x( '$%1$s', 'Product Price', 'qubely-pro' ) . '</div>',
                        $product->get_price()
                    );
                }
                if ($in_cart == 0) {
                    $woo_product_markup .= sprintf(
                        '<div class="qubely-addtocart-wrapper">
                        <div class="qubely_adtocart_button" id="%1$s">' . _x( '%2$s', 'Add to Cart Button Text', 'qubely-pro' ) . '</div>
                    </div>',
                        $product_id,
                        $att['addToCartButtonText']
                    );
                } else {
                    $woo_product_markup .= sprintf(
                        '<div class="qubely-addtocart-wrapper">
                        <div class="qubely_adtocart_button" id="%1$s" data-quantity="%2$s">%3$s ' . __( 'in Cart', 'qubely-pro' ) . '</div>
                    </div>',
                        $product_id,
                        $in_cart,
                        $in_cart
                    );
                }
                $woo_product_markup .= '</div></div></div></div>';
            }
            wp_reset_postdata();
            $woo_product_markup .= "</div></div>";
        }

        $woo_product_markup .= "</div>";
        return $woo_product_markup;
    }
}
new WOOCAROUSEL();
