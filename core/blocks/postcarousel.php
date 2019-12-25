<?php

defined('ABSPATH') || exit;

/**
 * Registers the `qubely/postcarousel block on server.
 *
 * @since 1.1.0
 */
function register_block_qubely_postcarousel_pro()
{
	# Check if the register function exists.
	if (!function_exists('register_block_type')) {
		return;
	}
	register_block_type(
		'qubely/postcarousel',
		array(
			'attributes' => array(
				'uniqueId' => array(
					'type' => 'string',
				),

				'sliderItemsSpace' => array(
					'type' 			=> 'object',
					'default' 		=> (object) array(
						'md' 	=> '10',
						'unit' 	=> 'px'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item { padding: 5px {{sliderItemsSpace}}; }'
						]
					]
				),

				'sliderItemMargin' 	=> array(
					'type' 			=> 'number',
					'default' 		=> 10
				),

				/* -----------------------------
				* 	Slider Settings
				*------------------------------- */
				'nav' 			=> array(
					'type' 		=> 'boolean',
					'default' 	=> true
				),
				'arrowStyle' => array(
					'type' 		=> 'string',
					'default' 	=> 'arrowright2',
				),
				'horizontalPosition' => array(
					'type' 			=> 'object',
					'default' 		=> (object) array(
						'md' 	=> '-7',
						'unit' 	=> '%'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {right: {{horizontalPosition}};} {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {left: {{horizontalPosition}};}'
						]
					]
				),
				'verticalPosition' => array(
					'type' 			=> 'object',
					'default' 		=> (object) array(
						'md' 	=> 50,
						'unit' 	=> '%'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control { top: {{verticalPosition}};}'
						]
					]
				),
				# Arrow style.
				'navColor' 		=> array(
					'type'    	=> 'string',
					'default' 	=> '#2184F9',
					'style' 	=> [(object) [
						'condition' => [
							(object) ['key' => 'nav', 'relation' => '==', 'value' => true]
						],
						'selector' => '{{QUBELY}} .qubely-carousel-nav-control .nav-control span {color: {{navColor}};}'
					]]
				),
				'navShapeColor' 	=> array(
					'type'    		=> 'string',
					'default' 		=> '#ffffff',
					'style' 		=> [(object) [
						'condition' => [
							(object) ['key' => 'nav', 'relation' => '==', 'value' => true]
						],
						'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {background: {{navShapeColor}};}'
					]]
				),
				# Dot style.
				'dotPosition' => array(
					'type' 			=> 'object',
					'default' 		=> (object) array(
						'md' 	=> -15,
						'unit' 	=> 'px'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots { bottom: {{dotPosition}};}'
						]
					]
				),
				'dotwidth' => array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'md' 	=> '40',
						'unit' 	=> 'px'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {width: {{dotwidth}};} {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active {width: {{dotwidth}};}'
						]
					]
				),
				'dotHeight' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'md' 	=> '4',
						'unit' 	=> 'px'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {height: {{dotHeight}};}'
						]
					]
				),
				'dotBorderRadius' => array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'md' 	=> '10',
						'unit' 	=> '%'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {border-radius: {{dotBorderRadius}};}'
						]
					]
				),
				# Dot Color style.
				'dotColor' 		=> array(
					'type'    	=> 'string',
					'default' 	=> '#f5f5f5',
					'style' 	=> [(object) [
						'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li'
					]]
				),
				'dotColor' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'openColor' 	=> 1,
						'type' 			=> 'color',
						'color' 		=> '#f5f5f5',
						'gradient'		=> (object) [
							'color1' 	=> '#16d03e',
							'color2' 	=> '#1f91f3',
							'direction' => 45,
							'start' 	=> 0,
							'stop' 		=> 100,
							'type' 		=> 'linear'
						],
					),
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li'
					]]
				),
				'dotActiveColor' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'openColor' 	=> 1,
						'type' 			=> 'color',
						'color' 		=> '#2184f9',
						'gradient'		=> (object) [
							'color1' 	=> '#16d03e',
							'color2' 	=> '#1f91f3',
							'direction' => 45,
							'start' 	=> 0,
							'stop' 		=> 100,
							'type' 		=> 'linear'
						],
					),
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active'
					]]
				),

				'dotalignment' 	=>  array(
					'type' 		=> 'string',
					'default' 	=> 'center',
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {text-align: {{dotalignment}};}'
					]]
				),

				'textalignment' =>  array(
					'type' 		=> 'string',
					'default' 	=> 'left',
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-post-grid-wrapper .qubely-post-grid-content {text-align: {{textalignment}};}'
					]]
				),
				/*---------------------------------
				* 		Post Carousel
				-----------------------------------*/
				'postitems' => array(
					'type' 		=> 'object',
					'default' 	=> array('md' => 2, 'sm' => 2, 'xs' => 1),
				),
				'autoPlay' => array(
					'type' => 'boolean',
					'default' => false
				),
				'isCentered' => array(
					'type' 		=> 'boolean',
					'default' 	=> false
				),
				'activeFade' => array(
					'type' 		=> 'boolean',
					'default' 	=> false
				),
				'interval' 		=> array(
					'type' 		=> 'number',
					'default' 	=> 3000
				),
				'speed' 		=> array(
					'type' 		=> 'number',
					'default' 	=> 800
				),
				'dots' 			=> array(
					'type' 		=> 'boolean',
					'default' 	=> false
				),
				'shapeWidth' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'md' 	=> 20, 'unit' => 'px'
					),
					'style' 	=> [(object) [
						'selector' => '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control .fas { width: {{shapeWidth}}; height: {{shapeWidth}}; line-height: {{shapeWidth}}; }'
					]]
				),
				'navSize' 		=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'md' 	=> 20,
						'unit' 	=> 'px'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-carousel-nav-control .nav-control .fas { font-size: {{navSize}}; }'
						],
					],
				),
				'navBorderColor' => array(
					'type' 			=> 'object',
					'default' 		=> (object) array(
						'unit' 		=> 'px',
						'widthType' => 'global',
						'global' 	=> (object) array(
							'md' 	=> '1',
						),
					),
					'style' 		=> [(object) [
						'condition' => [
							(object) ['key' => 'nav', 'relation' => '==', 'value' => true]
						],
						'selector' 	=> '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control'
					]]
				),

				'navigationRadius' => array(
					'type' 				=> 'object',
					'default' 			=> (object) array(
						'unit' 			=> 'px',
						'openBorderRadius' => true,
						'radiusType' 	=> 'global',
						'global' 		=> (object) array(
							'md' 			=> 10,
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

				/*--------------------------------
				*		Post Design
				---------------------------------- */
				'style' 		=> array(
					'type' 		=> 'number',
					'default' 	=> 1
				),
				'contentPosition' 	=>  array(
					'type' 		=> 'string',
					'default' 	=> 'center',
				),
				'contentPadding' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(),
					'style' 	=> [(object) [
						'selector' => '{{QUBELY}} .qubely-post-grid-content, {{QUBELY}} .qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content'
					]]
				),

				'gutterspace' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'md' 	=> 10,
						'unit' 	=> 'px'
					),
					'style' 	=> [
						(object) [
							'selector' => '{{QUBELY}} .qubely-block-post-carousel.layout-1 .qubely-carousel .qubely-carousel-item {padding: {{gutterspace}};} {{QUBELY}} .qubely-block-post-carousel.layout-3 .qubely-carousel .qubely-carousel-item {padding: {{gutterspace}};} {{QUBELY}} .qubely-block-post-carousel.layout-4 .qubely-carousel .qubely-carousel-item {padding: {{gutterspace}};}'
						]
					]
				),

				'bgColor' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'openColor' 	=> 1,
						'type' 			=> 'color',
						'color' 		=> '',
						'gradient'		=> (object) [
							'color1' 	=> '#16d03e',
							'color2' 	=> '#1f91f3',
							'direction' => 45,
							'start' 	=> 0,
							'stop' 		=> 100,
							'type' 		=> 'linear'
						],
					),
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-post-grid-wrapper, {{QUBELY}} .qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content'
					]]
				),
				'border' 		=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(),
					'style' 	=> [(object) [
						'selector' => '{{QUBELY}} .qubely-postgrid-style-1 .qubely-post-grid-wrapper, {{QUBELY}} .qubely-postgrid-style-2 .qubely-post-grid-wrapper.qubely-post-grid-center'
					]]
				),
				'borderRadius' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(),
					'style' 	=> [(object) [
						'condition' => [
							(object) ['key' => 'style', 'relation' => '!=', 'value' => 4],
							(object) ['key' => 'style', 'relation' => '!=', 'value' => 3]
						],
						'selector' => '{{QUBELY}} .qubely-postgrid-style-1 .qubely-post-grid-wrapper, {{QUBELY}} .qubely-postgrid-style-2 .qubely-post-grid-wrapper'
					]]
				),
				'boxShadow' 	=> array(
					'type' 			=> 'object',
					'default' 		=> (object) array(
						'blur' 		=> 8,
						'color' 	=> "rgba(0,0,0,0.10)",
						'horizontal' => 0,
						'inset' 	=> 0,
						'openShadow' => true,
						'spread' 	=> 0,
						'vertical' 	=> 4
					),
					'style' => [
						(object) [
							'condition' => [
								(object) ['key' => 'style', 'relation' => '!=', 'value' => 4],
								(object) ['key' => 'style', 'relation' => '!=', 'value' => 3],
								(object) ['key' => 'style', 'relation' => '!=', 'value' => 1]
							],
							'selector' => '{{QUBELY}} .qubely-post-grid-view .qubely-post-grid-wrapper'
						]
					]
				),
				//card
				'cardBackground' => array(
					'type' => 'object',
					'default' => (object) [],
					'style' => [
						(object) [
							'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 2]],
							'selector' => '{{QUBELY}} .qubely-postgrid-style-2 .qubely-post-grid-wrapper'
						]
					]
				),
				'cardBorder' => array(
					'type' => 'object',
					'default' => (object) array(
						'unit' => 'px',
						'widthType' => 'global',
						'global' => (object) array(
							'md' => '1',
						),
					),
					'style' => [
						(object) [
							'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 2]],
							'selector' => '{{QUBELY}} .qubely-postgrid-style-2 .qubely-post-grid-wrapper'
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
							'selector' => '{{QUBELY}} .qubely-postgrid-style-2 .qubely-post-grid-wrapper'
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
							'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 2]],
							'selector' => '{{QUBELY}} .qubely-postgrid-style-2 .qubely-post-grid-wrapper'
						]
					]
                ),
                'cardBoxShadow' => array(
					'type' => 'object',
					'default' 		=> (object) array(
						'blur' 		=> 8,
						'color' 	=> "rgba(0,0,0,0.10)",
						'horizontal' => 0,
						'inset' 	=> 0,
						'openShadow' => true,
						'spread' 	=> 0,
						'vertical' 	=> 4
					),
					'style' => [(object) [
						'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => '2']],
						'selector' => '{{QUBELY}} .qubely-postgrid-style-2 .qubely-post-grid-wrapper'
					]]
				),
                
				'overlayHeight' => array(
					'type' => 'object',
					'default' => (object) array(
						'md' => 300,
						'unit' => 'px'
					),
					'style' => [
						(object) [
							'condition' => [
								(object) ['key' => 'style', 'relation' => '==', 'value' => 4]
							],
							'selector' => '{{QUBELY}} .qubely-postgrid-style-4 {height: {{overlayHeight}};} {{QUBELY}} .qubely-postgrid-layout-4.qubely-postgrid-column .qubely-postgrid {height: {{overlayHeight}};} {{QUBELY}} .layout-4 .clone.qubely-carousel-item .qubely-post-grid-img.qubely-post-img {
								height: 300px;
							}'
						]
					]
				),

				'overlayBorderRadius' => array(
					'type' => 'object',
					'default' => (object) array(
						'unit' => 'px',
						'openBorderRadius' => true,
						'radiusType' => 'global',
						'global' => (object) array(
							'md' => 20,
						),
					),
					'style' => [
						(object) [
							'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 4]],
							'selector' => '{{QUBELY}} .qubely-postgrid-style-4'
						]
					]
				),
				'overlayBg' => array(
					'type' => 'object',
					'default' => (object) [
						'openColor' => 1,
						'type' => 'color',
						'color' => 'rgba(0,0,0,0.7)',
						'gradient' => (object) [
							'color1' => '#071b0b',
							'color2' => '#101a3b',
							'direction' => 45,
							'start' => 0,
							'stop' => 100,
							'type' => 'linear'
						],
					],
					'style' => [(object) [
						'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 4]],
						'selector' => '{{QUBELY}} .qubely-postgrid-style-4:before'
					]]
				),
				'overlayHoverBg' => array(
					'type' => 'object',
					'default' => (object) [
						'openColor' => 1,
						'type' => 'color',
						'color' => '#4c4e54',
						'gradient' => (object) [
							'color1' => '#4c4e54',
							'color2' => '#071b0b',
							'direction' => 45,
							'start' => 0,
							'stop' => 100,
							'type' => 'linear'
						],
					],
					'style' => [(object) [
						'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 4]],
						'selector' => '{{QUBELY}} .qubely-postgrid-style-4:hover:before'
					]]
				),
				'overlayBlend' => array(
					'type'    => 'string',
					'default' => '',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 4]],
						'selector' => '{{QUBELY}} .qubely-postgrid-style-4:before {mix-blend-mode: {{overlayBlend}};}'
					]]
				),
				'stackBg' => array(
					'type' => 'object',
					'default' => (object) [],
					'style' => [
						(object) [
							'condition' => [
								(object) ['key' => 'style', 'relation' => '==', 'value' => 3]
							],
							'selector' => '{{QUBELY}} .qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content'
						],
					]
				),
				'stackBorderRadius' => array(
					'type' 			=> 'object',
					'default' 		=> (object) array(
						'unit' 		=> 'px',
						'openBorderRadius' => true,
						'radiusType' => 'global',
						'global' 	=> (object) array(
							'md' 	=> 10,
						),
					),
					'style' => [
						(object) [
							'condition' => [
								(object) ['key' => 'style', 'relation' => '==', 'value' => 3]
							],
							'selector' => '{{QUBELY}} .qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content'
						]
					]
				),

				'stackBoxShadow' 	=> array(
					'type' 			=> 'object',
					'default' 		=> (object) array(
						'blur' 		=> 8,
						'color' 	=> "rgba(0,0,0,0.10)",
						'horizontal' => 0,
						'inset' 	=> 0,
						'openShadow' => true,
						'spread' 	=> 0,
						'vertical' 	=> 4
					),
					'style' => [
						(object) [
							'condition' => [
								(object) ['key' => 'style', 'relation' => '==', 'value' => 3]
							],
							'selector' => '{{QUBELY}} .qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content'
						]
					]
				),
				# Post design End.






				//general
				'postType' => array(
					'type' => 'string',
					'default' => 'Posts',
				),
				'taxonomy' => array(
					'type' => 'string',
					'default' => 'categories',
				),
				'categories' => array(
					'type' => 'array',
					'default' => [],
					'items'   => [
						'type' => 'object'
					],
				),
				'tags' => array(
					'type' => 'array',
					'default' => [],
					'items'   => [
						'type' => 'object'
					],
				),
				'order' => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy' => array(
					'type'    => 'string',
					'default' => 'date',
				),




				//content
				'showTitle' => array(
					'type' => 'boolean',
					'default' => true
				),
				'titlePosition' => array(
					'type' => 'boolean',
					'default' => true,
				),
				'showCategory' => array(
					'type' => 'string',
					'default' => 'default',
				),
				'categoryPosition' => array(
					'type' => 'string',
					'default' => 'leftTop',
				),
				'badgePosition' => array(
					'type' => 'string',
					'default' => 'default',
				),
				'badgePadding' => array(
					'type' => 'object',
					'default' => (object) [
						'paddingType' => 'custom',
						'unit' => 'px',
					],
					'style' => [
						(object) [
							'condition' => [
								(object) ['key' => 'layout', 'relation' => '==', 'value' => 2,],
								(object) ['key' => 'style', 'relation' => '!=', 'value' => 4],
								(object) ['key' => 'badgePosition', 'relation' => '!=', 'value' => 'default'],
							],
							'selector' => '{{QUBELY}} .qubely-postgrid-wrapper .qubely-postgrid .qubely-post-grid-wrapper .qubely-postgrid-cat-position'
						]
					]
				),
				'showDates' => array(
					'type' => 'boolean',
					'default' => true
				),
				'showComment' => array(
					'type' => 'boolean',
					'default' => true
				),
				'showAuthor' => array(
					'type' => 'boolean',
					'default' => true
				),
				'showExcerpt' => array(
					'type' => 'boolean',
					'default' => true
				),
				'excerptLimit' => array(
					'type' => 'number',
					'default' => 20
				),
				'showReadMore' => array(
					'type' => 'boolean',
					'default' => false
				),
				'verticalAlignment' => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'items' => array(
					'type' => 'number',
					'default' => 2,
				),
				'excerptCharLength' => array(
					'type' => 'number',
					'default' => 45,
				),
				'postsToShow' => array(
					'type' => 'number',
					'default' => 4,
				),
				'excerptLength' => array(
					'type'    => 'number',
					'default' => 55,
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
							'selector' => '{{QUBELY}} .qubely-post-list-view.qubely-postgrid-style-3:not(:last-child) {margin-bottom: {{stackSpace}};}'
						]
					]

				),

				//typography
				'titleTypography' => array(
					'type' => 'object',
					'default' => (object) [
						'openTypography' => 1,
						'family' => "Roboto",
						'type' => "sans-serif",
						'size' => (object) ['md' => 22, 'unit' => 'px'],
					],
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showTitle', 'relation' => '==', 'value' => true]],
						'selector' => '{{QUBELY}} .qubely-post-grid-content h3'
					]]
				),
				'metaTypography' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) [
						'openTypography' => 1,
						'family' 	=> "Open Sans",
						'type' 		=> "sans-serif",
						'size' 		=> (object) ['md' => 14, 'unit' => 'px'],
					],
					'condition' => [
						(object) ['key' => 'showAuthor', 'relation' => '==', 'value' => true],
						(object) ['key' => 'showDates', 'relation' => '==', 'value' => true],
						(object) ['key' => 'showComment', 'relation' => '==', 'value' => true]
					],
					'style' => [(object) ['selector' => '{{QUBELY}} .qubely-postcarousel-meta span']]
				),
				'excerptTypography' 	=> array(
					'type' 			=> 'object',
					'default' 		=> (object) [
						'openTypography' => 1,
						'family' 	=> "Open Sans",
						'type' 		=> "sans-serif",
						'size' 		=> (object) ['md' => 15, 'unit' => 'px'],
					],
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showExcerpt', 'relation' => '==', 'value' => true]],
						'selector' => '{{QUBELY}} .qubely-postcarousel-intro, {{QUBELY}} .qubely-postcarousel-intro p'
					]]
				),
				'categoryTypography' => array(
					'type' 		=> 'object',
					'default' 	=> (object) [
						'openTypography' => 1,
						'family' 	=> "Open Sans",
						'type' 		=> "sans-serif",
						'size' 		=> (object) ['md' => 14, 'unit' => 'px'], 'spacing' => (object) ['md' => 1.1, 'unit' => 'px'], 'transform' => 'capitalize'
					],
					'style' 	=> [(object) [
						'condition' 	=> [(object) ['key' => 'showCategory', 'relation' => '!=', 'value' => 'none']],
						'selector' 		=> '{{QUBELY}} .qubely-postcarousel-category a'
					]]
				),

				//image 
				'showImages' => array(
					'type' => 'boolean',
					'default' => true
				),
				'enableFixedHeight' => array(
					'type' => 'boolean',
					'default' => false
				),
				'fixedHeight' => array(
					'type' => 'object',
					'default' => (object) [
						'md' => "150",
						'unit' => "px"
					],
					'style' => [(object) [
						'condition' 	=> [
							(object) ['key' => 'style', 'relation' => '!=', 'value' => 4],
							(object) ['key' => 'enableFixedHeight', 'relation' => '==', 'value' => true],
						],
						'selector' => '{{QUBELY}} .qubely-post-image{object-fit: cover;height: {{fixedHeight}};}'
					]]
				),
				'imgSize' => array(
					'type'    => 'string',
					'default' => 'qubely_portrait',
				),
				'imageRadius' => array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'unit' 	=> 'px',
						'openBorderRadius' => true,
						'radiusType' => 'global',
						'global' => (object) array(
							'md' => 10,
						),
					),
					'style' => [(object) ['selector' => '{{QUBELY}} .qubely-post-img']]
				),

				'imageAnimation' => array(
					'type' 		=> 'string',
					'default' 	=> 'zoom-out'
				),

				//readmore link
				'buttonText' => array(
					'type' => 'string',
					'default' => 'Read More'
				),
				'readmoreStyle' => array(
					'type' => 'string',
					'default' => 'fill'
				),
				'readmoreSize' => array(
					'type' => 'string',
					'default' => 'small'
				),
				'readmoreCustomSize' => array(
					'type' => 'object',
					'default' => (object) [
						'openPadding' => 1,
						'paddingType' => 'custom',
						'unit' => 'px',
						'custom' => (object) ['md' => '5 10 5 10'],
					],
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'readmoreStyle', 'relation' => '==', 'value' => 'fill'],
							(object) ['key' => 'readmoreSize', 'relation' => '==', 'value' => 'custom']
						],
						'selector' => '{{QUBELY}} .qubely-postcarousel-btn.qubely-button-fill.is-custom'
					]]
				),

				'readmoreTypography' => array(
					'type' => 'object',
					'default' => (object) [
						'openTypography' => 1,
						'family' => "Roboto",
						'type' => "sans-serif",
						'size' => (object) ['md' => 14, 'unit' => 'px'],
					],
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showTitle', 'relation' => '==', 'value' => true]],
						'selector' => '{{QUBELY}} .qubely-postcarousel-btn'
					]]
				),
				'readmoreColor' => array(
					'type'    => 'string',
					'default' => '#fff',
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'showReadMore', 'relation' => '==', 'value' => true],
							(object) ['key' => 'readmoreStyle', 'relation' => '==', 'value' => 'fill']
						],
						'selector' => '{{QUBELY}} a.qubely-postcarousel-btn {color: {{readmoreColor}};}'
					]]

				),
				'readmoreColor2' => array(
					'type'    => 'string',
					'default' => '#2184F9',
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'showReadMore', 'relation' => '==', 'value' => true],
							(object) ['key' => 'readmoreStyle', 'relation' => '==', 'value' => 'outline']
						],
						'selector' => '{{QUBELY}} a.qubely-postcarousel-btn {color: {{readmoreColor2}};}'
					]]

				),
				'readmoreHoverColor' => array(
					'type'    => 'string',
					'default' => '',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showReadMore', 'relation' => '==', 'value' => true]],
						'selector' => '{{QUBELY}} a.qubely-postcarousel-btn:hover {color: {{readmoreHoverColor}};}'
					]]

				),
				'readmoreBg' => array(
					'type' => 'object',
					'default' => (object) array(
						'openColor' => 1,
						'type' => 'color',
						'color' => '#2184F9',
						'gradient' => (object) [
							'color1' => '#16d03e',
							'color2' => '#1f91f3',
							'direction' => 45,
							'start' => 0,
							'stop' => 100,
							'type' => 'linear'
						],
					),
					'style' => [(object) [
						'condition' => [(object) ['key' => 'readmoreStyle', 'relation' => '==', 'value' => 'fill']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-btn'
					]]
				),
				'readmoreHoverBg' => array(
					'type' => 'object',
					'default' => (object) array(),
					'style' => [(object) [
						'condition' => [(object) ['key' => 'readmoreStyle', 'relation' => '==', 'value' => 'fill']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-btn:hover'
					]]
				),
				'readmoreBorder' => array(
					'type' => 'object',
					'default' => (object) array(),
					'style' => [(object) [
						'condition' => [(object) ['key' => 'readmoreStyle', 'relation' => '==', 'value' => 'fill']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-btn'
					]]
				),
				'readmoreBorderRadius' => array(
					'type' => 'object',
					'default' => (object) array(
						'unit' => 'px',
						'openBorderRadius' => true,
						'radiusType' => 'global',
						'global' => (object) array(
							'md' => 2,
						),
					),
					'style' => [(object) [
						'condition' => [(object) ['key' => 'readmoreStyle', 'relation' => '==', 'value' => 'fill']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-btn'
					]]
				),
				'readmoreBoxShadow' => array(
					'type' => 'object',
					'default' => (object) array(),
					'style' => [(object) [
						'condition' => [(object) ['key' => 'readmoreStyle', 'relation' => '==', 'value' => 'fill']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-btn'
					]]
				),

				//color
				'categoryPadding' => array(
					'type' => 'object',
					'default' => (object) array(
						'unit' => 'px',
						'openPadding' => true,
						'paddingType' => 'custom',
						'custom' => (object) array(
							'md' => '4 8 4 8',
						),
					),
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showCategory', 'relation' => '==', 'value' => 'badge']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-category a'
					]]
				),
				'categoryRadius' => array(
					'type' => 'object',
					'default' => (object) array(
						'unit' => 'px',
						'openBorderRadius' => true,
						'radiusType' => 'global',
						'global' => (object) array(
							'md' => 2,
						),
					),
					'style' => [(object) ['selector' => '{{QUBELY}} .qubely-postcarousel-category a']]
				),
				'titleColor' => array(
					'type'    => 'string',
					'default' => '#1b1b1b',
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'style', 'relation' => '!=', 'value' => 4],
							(object) ['key' => 'showTitle', 'relation' => '==', 'value' => true]
						],
						'selector' => '{{QUBELY}} .qubely-postcarousel-title a {color: {{titleColor}};}'
					]]
				),
				'titleOverlayColor' => array(
					'type'    => 'string',
					'default' => '#fff',
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'style', 'relation' => '==', 'value' => 4],
							(object) ['key' => 'showTitle', 'relation' => '==', 'value' => true]
						],
						'selector' => '{{QUBELY}} .qubely-postcarousel-title a {color: {{titleOverlayColor}};}'
					]]
				),
				'titleHoverColor' => array(
					'type'    => 'string',
					'default' => '#FF0096',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showTitle', 'relation' => '==', 'value' => true]],
						'selector' => '{{QUBELY}} .qubely-postcarousel-title a:hover {color: {{titleHoverColor}};} {{QUBELY}} .qubely-postcarousel-meta span a:hover {color: {{titleHoverColor}};}'
					]]
				),
				'categoryColor' => array(
					'type'    => 'string',
					'default' => '#FF0096',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showCategory', 'relation' => '==', 'value' => 'default']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-category a {color: {{categoryColor}};}'
					]]
				),
				'categoryColor2' => array(
					'type'    => 'string',
					'default' => '#fff',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showCategory', 'relation' => '==', 'value' => 'badge']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-category a {color: {{categoryColor2}};}'
					]]
				),
				'categoryHoverColor' => array(
					'type'    => 'string',
					'default' => '#FF0096',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showCategory', 'relation' => '==', 'value' => 'default']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-category a:hover {color: {{categoryHoverColor}};}'
					]]
				),
				'categoryBackground' => array(
					'type'    => 'string',
					'default' => '#FF0096',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showCategory', 'relation' => '==', 'value' => 'badge']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-category a {background: {{categoryBackground}};}'
					]]
				),
				'categoryHoverBackground' => array(
					'type'    => 'string',
					'default' => '#e00e89',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showCategory', 'relation' => '==', 'value' => 'badge']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-category a:hover {background: {{categoryHoverBackground}};}'
					]]
				),

				'categoryHoverColor2' => array(
					'type'    => 'string',
					'default' => '#fff',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showCategory', 'relation' => '==', 'value' => 'badge']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-category a:hover {color: {{categoryHoverColor2}};}'
					]]
				),
				'metaColor' => array(
					'type'    => 'string',
					'default' => '#9B9B9B',
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'style', 'relation' => '!=', 'value' => 4]
						],
						'selector' => '{{QUBELY}} .qubely-postcarousel-meta a {color: {{metaColor}};} {{QUBELY}} .qubely-postcarousel-meta {color: {{metaColor}};} {{QUBELY}} .qubely-postcarousel-meta span:before {background: {{metaColor}};}'
					]]
				),
				'metaOverlayColor' => array(
					'type'    => 'string',
					'default' => '#fff',
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'style', 'relation' => '==', 'value' => 4]
						],
						'selector' => '{{QUBELY}} .qubely-postcarousel-meta a {color: {{metaOverlayColor}};} {{QUBELY}} .qubely-postcarousel-meta {color: {{metaOverlayColor}};} {{QUBELY}} .qubely-postcarousel-meta span:before {background: {{metaOverlayColor}};}'
					]]
				),
				'excerptColor' => array(
					'type'    => 'string',
					'default' => '#9B9B9B',
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'style', 'relation' => '!=', 'value' => 4],
							(object) ['key' => 'showExcerpt', 'relation' => '==', 'value' => true]
						],
						'selector' => '{{QUBELY}} .qubely-postcarousel-intro {color: {{excerptColor}};}'
					]]
				),
				'excerptColor2' => array(
					'type'    => 'string',
					'default' => '#fff',
					'style' => [(object) [
						'condition' => [
							(object) ['key' => 'style', 'relation' => '==', 'value' => 4],
							(object) ['key' => 'showExcerpt', 'relation' => '==', 'value' => true]
						],
						'selector' => '{{QUBELY}} .qubely-postcarousel-intro {color: {{excerptColor2}};}'
					]]
				),

				/*-----------------------------------
				*		design
				------------------------------------- */
				'spacer' 		=> 	array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'spaceTop' 		=> (object) ['md' => '10', 	'unit' => "px"],
						'spaceBottom' 	=> (object) ['md' => '10', 'unit' => "px"],
					),
					'style' => [(object) ['selector' => '{{QUBELY}}']]
				),

				'girdContentPosition' =>  array(
					'type' => 'string',
					'default' => 'bottom',
				),
				'color' => array(
					'type'    => 'string',
					'default' => '',
					'style' => [(object) [
						'condition' => [(object) ['key' => 'style', 'relation' => '==', 'value' => 1]],
						'selector' => '{{QUBELY}} .qubely-postgrid-wrapper .qubely-postgrid .qubely-post-list-content {color: {{color}};}'
					]]
				),

				//Spacing
				'imageSpace' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'md' 	=> 0,
						'unit' 	=> 'px'
					),
					'style' 	=> [(object) ['selector' => '{{QUBELY}} .qubely-post-img {padding-bottom: {{imageSpace}};}']]
				),
				'titleSpace' 	=> array(
					'type' 		=> 'object',
					'default' 	=> (object) array(
						'md' 	=> 10,
						'unit' 	=> 'px'
					),
					'style' => [(object) ['selector' => '{{QUBELY}} .qubely-postcarousel-title {padding-bottom: {{titleSpace}};}']]
				),
				'categorySpace' => array(
					'type' => 'object',
					'default' => (object) array(
						'md' => 5,
						'unit' => 'px'
					),
					'style' => [(object) [
						'condition' => [(object) ['key' => 'showCategory', 'relation' => '==', 'value' => 'default']],
						'selector' => '{{QUBELY}} .qubely-postcarousel-category {display:inline-block;padding-bottom: {{categorySpace}};}'
					]]
				),
				'metaSpace' => array(
					'type' => 'object',
					'default' => (object) array(
						'md' => 10,
						'unit' => 'px'
					),
					'style' => [(object) ['selector' => '{{QUBELY}} .qubely-postcarousel-meta {padding-bottom: {{metaSpace}};}']]
				),
				'excerptSpace' => array(
					'type' => 'object',
					'default' => (object) array(
						'md' => 10,
						'unit' => 'px'
					),
					'style' => [(object) ['selector' => '{{QUBELY}} .qubely-postcarousel-intro {padding-bottom: {{excerptSpace}};}']]
				),
				'postSpace' => array(
					'type' => 'object',
					'default' => (object) array(
						'md' => 10,
						'unit' => 'px'
					),
				),
				'showGlobalSettings' => array(
					'type' => 'boolean',
					'default' => true
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
			'render_callback' => 'render_block_qubely_postcarousel_pro'
		)
	);
}

function render_block_qubely_postcarousel_pro($att)
{
	$uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
	$style 		            = isset($att['style']) ? $att['style'] : 3;
	$column 		        = isset($att['column']) ? $att['column'] : 3;
	$numbers 		        = isset($att['postsToShow']) ? $att['postsToShow'] : 3;
	$limit 		            = isset($att['excerptLimit']) ? $att['excerptLimit'] : 3;
	$showCategory 		    = isset($att['showCategory']) ? $att['showCategory'] : 'default';
	$categoryPosition 		= isset($att['categoryPosition']) ? $att['categoryPosition'] : 'leftTop';
	$contentPosition 		= isset($att['contentPosition']) ? $att['contentPosition'] : 'center';
	$girdContentPosition 	= isset($att['girdContentPosition']) ? $att['girdContentPosition'] : 'center';
	$showTitle 		        = isset($att['showTitle']) ? $att['showTitle'] : 1;
	$showAuthor 		    = isset($att['showAuthor']) ? $att['showAuthor'] : 1;
	$showDates 		        = isset($att['showDates']) ? $att['showDates'] : 1;
	$showComment 		    = isset($att['showComment']) ? $att['showComment'] : 1;
	$showExcerpt 		    = isset($att['showExcerpt']) ? $att['showExcerpt'] : 1;
	$showReadMore 		    = isset($att['showReadMore']) ? $att['showReadMore'] : 1;
	$buttonText 		    = isset($att['buttonText']) ? $att['buttonText'] : __('Read More', 'qubely-pro');
	$readmoreSize 		    = isset($att['readmoreSize']) ? $att['readmoreSize'] : 'small';
	$readmoreStyle 		    = isset($att['readmoreStyle']) ? $att['readmoreStyle'] : 'fill';
	$showImages 		    = isset($att['showImages']) ? $att['showImages'] : 1;
	$imgSize 		        = isset($att['imgSize']) ? $att['imgSize'] : 'large';
	$showBadge 		        = isset($att['showBadge']) ? $att['showBadge'] : 1;
	$order 		            = isset($att['order']) ? $att['order'] : 'DESC';
	$imageAnimation 		= isset($att['imageAnimation']) ? $att['imageAnimation'] : '';
	$orderBy 		        = isset($att['orderBy']) ? $att['orderBy'] : 'date';
	$categories             = $att['categories'];
	$tags                   = $att['tags'];
	$taxonomy               = $att['taxonomy'];
	$animation 		        = isset($att['animation']) ? (count((array) $att['animation']) > 0 && $att['animation']['animation']  ? 'data-qubelyanimation="' . htmlspecialchars(json_encode($att['animation']), ENT_QUOTES, 'UTF-8') . '"' : '') : '';

	# Attribute value: Using Json Encode.
	$autoPlay               = $att['autoPlay'];
	$postitems              = $att['postitems'];
	$nav					= $att['nav'];
	$dots					= $att['dots'];
	$speed					= $att['speed'];
	$interval				= $att['interval'];
	$center					= $att['isCentered'];
	$arrowStyle				= $att['arrowStyle'];
	$verticalPosition		= $att['verticalPosition'];
	$sliderItemMargin 		= $att['sliderItemMargin'];

	# Attribute value.
	$data_options = (object) array(
		'autoplay' 		=> $autoPlay,
		'items' 		=> $postitems,
		'nav' 			=> $nav,
		'dots' 			=> $dots,
		'margin' 		=> $sliderItemMargin,
		'speed' 		=> $speed,
		'interval' 		=> $interval,
		'center' 		=> $center,
		'arrowStyle' 	=> $arrowStyle,
		'arrowPosition' => $verticalPosition,
		'responsive' 	=> array(
			[
				'viewport' 	=> 1170,
				'items' 	=> $postitems['md']
			],
			[
				'viewport' 	=> 980,
				'items' 	=> $postitems['sm']
			],
			[
				'viewport' 	=> 580,
				'items' 	=> $postitems['xs']
			],
		)
	); # End data options.

	# Post query.
	$args = array(
		'post_type' 		=> 'post',
		'posts_per_page' 	=> esc_attr($numbers),
		'order' 			=> esc_attr($order),
		'orderby' 			=> esc_attr($orderBy),
		'status' 			=> 'publish',
	);
	$query = new WP_Query($args);

	$active_taxonomy_array = $att['taxonomy'] == 'categories' ? $categories : $tags;
	$active_taxonomy_name = $att['taxonomy'] == 'categories' ? 'category__in' : 'tag__in';

	if (is_array($active_taxonomy_array) && count($active_taxonomy_array) > 0) {
		$args[$active_taxonomy_name] = array_column($active_taxonomy_array, 'value');
	}

	# Excerpt;
	if (!function_exists('qubely_excerpt_max_charlength')) :
		function qubely_excerpt_max_charlength($limit)
		{
			$excerpt = get_the_excerpt();
			if (str_word_count($excerpt, 0) > $limit) {
				$words = str_word_count($excerpt, 2);
				$pos = array_keys($words);
				$text = substr($excerpt, 0, $pos[$limit]);
				return $text;
			}
		}
	endif;

	$html = '';
	$class = 'wp-block-qubely-postcarousel qubely-block-'.$uniqueId;
	if ( isset( $att['align'] ) ) {
		$class .= ' align' . $att['align'];
	}
	if ( isset( $att['className'] ) ) {
		$class .=' '. $att['className'];
	}
	# The Loop. 
	if ($query->have_posts()) {
		$html .= '<div class="' . $class . '">';
		$html .= '<div class="qubely-block-post-carousel qubely-postcarousel-wrapper" ' . $animation . '>';

		# Carousel Class.
		$html .= '<div class="qubely-carousel qubely-carousel-wrapper" data-options="' . htmlspecialchars(json_encode($data_options), ENT_QUOTES, 'UTF-8') . '">';

		while ($query->have_posts()) {
			$query->the_post();
			$id = get_post_thumbnail_id();
			$src = wp_get_attachment_image_src($id, $imgSize);
			$image = '<img class="qubely-post-image" src="' . esc_url($src[0]) . '" alt="' . get_the_title() . '"/>';
			$title = '<h3 class="qubely-postcarousel-title"><a href="' . esc_url(get_the_permalink()) . '">' . get_the_title() . '</a></h3>';
			$category = '<span class="qubely-postcarousel-category">' . get_the_category_list(' ') . '</span>';
			$meta = ($showAuthor == 1) ? '<span><i class="fas fa-user"></i> ' . __('By ', 'qubely') . get_the_author_posts_link() . '</span>' : '';
			$meta .= ($showDates == 1) ? '<span><i class="far fa-calendar-alt"></i> ' . date_i18n(get_option('date_format'), strtotime(get_the_date())) . '</span>' : '';
			$meta .= ($showComment == 1) ? '<span><i class="fas fa-comment"></i> ' . get_comments_number('0', '1', '%') . '</span>' : '';
			$btn = '<div class="qubely-postcarousel-btn-wrapper"><a class="qubely-postcarousel-btn qubely-button-' . esc_attr($readmoreStyle) . ' is-' . esc_attr($readmoreSize) . '" href="' . esc_url(get_the_permalink()) . '">' . esc_attr($buttonText) . '</a></div>';
			$excerpt = '<div class="qubely-postcarousel-intro">' . qubely_excerpt_max_charlength(esc_attr($limit)) . '</div>';

			if ($style == 1 || $style == 2) {
				$html .= '<div class="qubely-carousel-item">';
				$html .= '<div class="qubely-post-grid-view qubely-postgrid-style-' . esc_attr($style) . '">';
				$html .= '<div class="qubely-post-grid-wrapper qubely-post-grid-center">';
				if (($showImages == 1) && has_post_thumbnail()) {
					if ($showCategory == 'badge' && $style == 4) {
						$html .= '<div class="qubely-postgrid-cat-position qubely-postgrid-cat-position-' . esc_attr($categoryPosition) . '">';
						$html .= $category;
						$html .= '</div>';
					}
					$html .= '<div class="qubely-post-list-img qubely-post-img qubely-post-img-' . esc_attr($imageAnimation) . '">';
					$html .= '<a href="' . esc_url(get_the_permalink()) . '">';
					$html .= $image;
					$html .= '</a>';
					if ($showCategory == 'badge' && $style != 4) {
						$html .= '<div class="qubely-postgrid-cat-position qubely-postgrid-cat-position-' . esc_attr($categoryPosition) . '">';
						$html .= $category;
						$html .= '</div>';
					}
					$html .= '</div>'; //qubely-post-list-img
				}
				$html .= '<div class="qubely-post-grid-content align-top">';
				if ($showCategory == 'default') {
					$html .= $category;
				}
				if ($showTitle == 1) {
					$html .= $title;
				}
				if (($showAuthor == 1) || ($showDates == 1) || ($showComment == 1)) {
					$html .= '<div class="qubely-postcarousel-meta">';
					$html .= $meta;
					$html .= '</div>';
				}
				if ($showExcerpt == 1) {
					$html .= $excerpt;
				}
				if ($showReadMore == 1) {
					$html .= $btn;
				}
				$html .= '</div>'; //qubely-post-list-content
				$html .= '</div>';
				$html .= '</div>'; # qubely-carousel-item
				$html .= '</div>'; # qubely-carousel-item
			}

			# Style - 2. 
			if ($style == 3 || $style == 4) {
				$html .= '<div class="qubely-carousel-item">';
				$html .= '<div class="qubely-post-grid-view qubely-postgrid-style-' . esc_attr($style) . '">';
				$html .= '<div class="qubely-post-grid-wrapper qubely-post-grid-' . esc_attr(($style === 3) ? $contentPosition : $girdContentPosition)  . '">';
				if (($showImages == 1) && has_post_thumbnail()) {
					if ($showCategory == 'badge'  && $style == 4) {
						$html .= '<div class="qubely-postgrid-cat-position qubely-postgrid-cat-position-' . esc_attr($categoryPosition) . '">';
						$html .= $category;
						$html .= '</div>';
					}
					$html .= '<div class="qubely-post-grid-img qubely-post-img qubely-post-img-' . esc_attr($imageAnimation) . '">';
					$html .= '<a href="' . esc_url(get_the_permalink()) . '">';
					$html .= $image;
					$html .= '</a>';
					if ($showCategory == 'badge'  && $style != 4) {
						$html .= '<div class="qubely-postgrid-cat-position qubely-postgrid-cat-position-' . esc_attr($categoryPosition) . '">';
						$html .= $category;
						$html .= '</div>';
					}
					$html .= '</div>'; //qubely-post-grid-img
				}
				$html .= '<div class="qubely-post-grid-content align-top">';
				if ($showCategory == 'default') {
					$html .= $category;
				}
				if ($showTitle == 1) {
					$html .= $title;
				}
				if (($showAuthor == 1) || ($showDates == 1) || ($showComment == 1)) {
					$html .= '<div class="qubely-postcarousel-meta">';
					$html .= $meta;
					$html .= '</div>';
				}
				if ($showExcerpt == 1) {
					$html .= $excerpt;
				}
				if ($showReadMore == 1) {
					$html .= $btn;
				}
				$html .= '</div>'; //qubely-post-grid-content
				$html .= '</div>'; //qubely-post-grid-wrap
				$html .= '</div>'; //qubely-postgrid
				$html .= '</div>'; # qubely-carousel-item
			}
		}

		$html .= '</div>'; # qubely-carousel :- carousel class 
		$html .= '</div>'; # qubely-block-post-carousel
		$html .= '</div>'; # qubely-block-ID
		wp_reset_postdata();
	}
	return $html;
}
add_action('init', 'register_block_qubely_postcarousel_pro', 100);
