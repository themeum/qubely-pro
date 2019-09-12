const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
import './style.scss'
import Edit from './Edit'
import Save from './Save'

registerBlockType('qubely/teamcarousel', {
	title: __('Team Carousel'),
	description: __('Design and showcase Qubely Team Carousel block'),
	icon: 'groups',
	category: 'qubely',
	keywords: [
		__('Team'),
		__('Carousel')
	], 
	attributes: {
		uniqueId: { type: 'string', default: '' },
		items: { type: 'object', default: { md: '2', sm: '2', xs: '1' } },
		columns: { type: 'number', default: 2 },
		autoPlay: { type: 'boolean', default: false },
		dots: { type: 'boolean', default: true },
		dragable: { type: 'boolean', default: true },
		dotIndicator: { type: 'boolean', default: true },
		nav: { type: 'boolean', default: true },
		interval: { type: 'number', default: 3000 },
		speed: { type: 'number', default: 800 },
		carouselItems: {
			type: 'array',
			default: [
				{
					author: 'James Moriarty',
					designation: 'Web WordPress Developer',
					message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '5',
					avatar: {}
				},
				{
					author: 'Julia Toufis',
					designation: 'WordPress Developer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '4.5',
					avatar: {}
				},
				{
					author: 'Mila Kunis',
					designation: 'WordPress Developer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '4.5',
					avatar: {}
				},
				{
					author: 'Arthur Conan Doyle',
					designation: 'Writer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '5',
					avatar: {}
				},
				{
					author: 'John Deo',
					designation: 'WordPress Developer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '5',
					avatar: {}
				},
				{
					author: 'Alex Fera',
					designation: 'WordPress Developer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '5',
					avatar: {}
				},
			]
		},

		/*---------------------------------------------------
		* 	Team Layouts:  common/style attributes
		* --------------------------------------------------- */
		layout: { type: 'number', default: 1 },
		alignment: { 
			type: 'object', 
			default: { md: 'left' }, 
			style: [
				{ selector: '{{QUBELY}} .qubely-team-author-info {text-align: {{alignment}};}' }
			] 
		},
		spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },

		// Number of slider.
		sliderNumber: { type: 'number', default: 5 },
		// Item per Slider  
		itemPerSlides: { type: 'string', default: '2' },
		// Space Between Two item.
		sliderItemsSpace: {
			type: 'objext',
			default: {},
			style: [{
				selector: '{{QUBELY}} .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item { padding: 0 {{sliderItemsSpace}}; }'
			}]
		},
		// Infinite Loop
		infiniteLoop: { type: 'boolean', default: true },
		isCentered: { type: 'boolean', default: false },
		activeFade: { type: 'boolean', default: false },

		/*------------------------------------
		* 			Slider Settings 			
		-------------------------------------- */
		arrowStyle: { type: 'string', default: 'arrowright' },
		horizontalScroll: {
			type: 'object',
			default: { md: 0, unit: '%' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} }  ' }
			]
		},
		// arrowPosition: {type: 'string', default: 'center' },
		arrowPosition: {
			type: 'object',
			default: { md: 49, unit: '%' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control { bottom: {{arrowPosition}}; } ' }
			]
		},
		cornerRadius: {
			type: 'object',
			default: { md: 10, unit: 'px' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control { border-radius: {{cornerRadius}}; } ' }
			]
		},
		cornerHoverRadius: {
			type: 'object',
			default: { md: 50, unit: '%' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover { border-radius: {{cornerHoverRadius}}; } ' }
			]
		},
		sizeWidth: {
			type: 'string',
			default: { md: 12, unit: 'px' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control { padding: {{sizeWidth}}; } ' }
			]
		},
		arrowSize: {
			type: 'object',
			default: { md: 20, unit: 'px' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control .dashicons { font-size: {{arrowSize}}; } ' }
			]
		},
		// Section Arrow 
		arrowColor: {
			type: 'string',
			default: '#1066CC',
			style: [{ selector: '{{QUBELY}} .qubely-block-team-carousel .nav-control .dashicons { color:{{arrowColor}}; }' }]
		},
		// Arrow background color
		arrowShapeColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#fafafa' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' },
			],
		},
		// Arrow Border Color
		arrowBorderColor: {
			type: 'object',
			default: {},
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' }]
		},
		// Arrow Hover Color.
		arrowHoverColor: {
			type: 'string', default: '#ffffff',
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover .dashicons { color:{{arrowHoverColor}}; }' }]
		},
		// Arrow background Hover Color.
		arrowShapeHoverColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#1066CC' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover ' },
			],
		},
		// Arroe Border Hover Color.
		arrowBorderHoverColor: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover' }]
		},
		// Dot Navigation.
		dotwidth: {
			type: 'string',
			default: { md: 30, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { width: {{dotwidth}} }' }]
		},
		dotHeight: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { height: {{dotHeight}} }' }]
		},
		dotBorderRadius: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { border-radius: {{dotBorderRadius}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator { border-radius: {{dotBorderRadius}} }' }]
		},
		// Dot
		dotColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#f4f4f4' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li' }]
		},
		// Dot Active Color
		dotActiveColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#1066CC' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator' }
			]
		},
		//Name
		nameColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-team-author-name { color:{{nameColor}}; }' }] },
		nameTypo: { type: 'object', default: { openTypography: 1, weight: 700, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-team-author-name' }] },
		nameSpacing: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-team-author-name {margin-bottom: {{nameSpacing}};}' }] },

		//Designation
		designationColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-team-author-designation { color:{{designationColor}}; }' }] },
		designationTypo: { type: 'object', default: { openTypography: 1, size: { md: 14, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-team-author-designation' }] },


		/*------------------------------------
		* 			Avatar 
		* ------------------------------------ */
		showAvatar: { type: 'boolean', default: true },
		avatarLayout: { type: 'string', default: 'top' },
		avatarAlt: { type: 'string', default: '' },
		avatarSize: {
			type: 'string',
			default: '',
			style: [
				{ selector: '{{QUBELY}} .qubely-team-avatar { width: {{avatarSize}}; height: {{avatarSize}}; font-size: {{avatarSize}}; }' }
			]
		},
		avatarWidth: { type: 'object', default: { md: 120, unit: 'px' }, style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }], selector: '{{QUBELY}} .qubely-team-avatar {width: {{avatarWidth}}; font-size: {{avatarWidth}};}' }] },
		avatarHeight: { type: 'object', default: { md: 120, unit: 'px' }, style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }], selector: '{{QUBELY}} .qubely-team-avatar {height: {{avatarHeight}};}' }] },
		avatarSpacing: {
			type: 'object',
			default: {
				md: 20,
				unit: 'px'
			},
			style: [
				{
					condition: [
						{ key: 'avatarLayout', relation: '==', value: 'left' }
					],
					selector: '{{QUBELY}} .qubely-team-avatar {margin-right: {{avatarSpacing}}; }'
				},
				{
					condition: [
						{ key: 'avatarLayout', relation: '==', value: 'right' }
					],
					selector: '{{QUBELY}} .qubely-team-avatar {margin: 0px 0px 0px {{avatarSpacing}};}'
				},
				{
					condition: [
						{ key: 'avatarLayout', relation: '==', value: 'top' }
					],
					selector: '{{QUBELY}} .qubely-team-avatar {margin: 0px 0px {{avatarSpacing}};}'
				},
				{
					condition: [
						{ key: 'avatarLayout', relation: '==', value: 'bottom' }
					],
					selector: '{{QUBELY}} .qubely-team-avatar{margin: {{avatarSpacing}} 0px 0px;}'
				}
			]
		},
		avatarBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: '' },
				unit: '%'
			},
			style: [
				{ selector: '{{QUBELY}} .qubely-team-avatar' }
			]
		},
		avatarBorder: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-team-avatar' }] },

		/* ------------------------------------
		* 			Design 
		* ------------------------------------- */
		textColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-team-carousel-content-wrapper { color:{{textColor}}; }' }] },
		bgPadding: {
			type: 'object',
			default: {},
			style: [
				{
					condition: [
						{ key: 'layout', relation: '==', value: '1' }
					],
					selector: '{{QUBELY}} .qubely-layout-1 .qubely-tesitmonial-item'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '2' }
					],
					selector: '{{QUBELY}} .qubely-layout-2 .qubely-tesitmonial-item'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '3' }
					],
					selector: '{{QUBELY}} .qubely-layout-3 .qubely-team-carousel-content-wrapper'
				}
			]
		},
		// Background Color
		bgColor: {
			type: 'string',
			default: '',
			style: [
				{
					selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1 {background-color: {{bgColor}};} {{QUBELY}} .qubely-tesitmonial-item.layout-2 {background-color: {{bgColor}};}'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '3' }
					],
					selector: '{{QUBELY}} .layout-3 .qubely-team-carousel-content-wrapper {background-color: {{bgColor}};} {{QUBELY}} .layout-3 .qubely-team-carousel-content-wrapper:before {border-color: {{bgColor}} transparent transparent transparent;}'
				}
			]
		},
		// Border radius
		bgBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: 20 },
				unit: 'px'
			},
			style: [
				{ selector: '{{QUBELY}} .qubely-layout-1 .qubely-tesitmonial-item, {{QUBELY}} .qubely-layout-2 .qubely-tesitmonial-item, {{QUBELY}} .qubely-layout-3 .qubely-team-carousel-content-wrapper' }
			]
		},
		border: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [
				{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1, {{QUBELY}} .qubely-tesitmonial-item.layout-2, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-team-carousel-content-wrapper' }]
		},
		boxShadow: {
			type: 'object', default: {},
			style: [
				{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1, {{QUBELY}} .qubely-tesitmonial-item.layout-2, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-team-carousel-content-wrapper' }
			]
		},
		boxShadowHover: {
			type: 'object', default: {},
			style: [
				{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1:hover, {{QUBELY}} .qubely-tesitmonial-item.layout-2:hover, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-team-carousel-content-wrapper:hover' }
			]
		},
		showGlobalSettings: { type: 'boolean', default: true }, 

		/**
		 *  Social Share */
        showSociallinks: { type: 'boolean', default: false },
        facebook: { type: 'string', default: 'https://facebook.com/themeum' },
        twitter: { type: 'string', default: 'https://twitter.com/themeum' },
        instagram: { type: 'string', default: '' },
        linkedin: { type: 'string', default: '' },
        youtube: { type: 'string', default: 'https://youtube.com/user/themeumwp' },
        github: { type: 'string', default: '' },
        flickr: { type: 'string', default: '' },
        pinterest: { type: 'string', default: '' },
        dribbble: { type: 'string', default: '' },
        behance: { type: 'string', default: '' },
        iconStyle: { type: 'string', default: 'normal' },
        iconUseDefaultStyle: { type: 'boolean', default: true },
        iconSize: {
            type: 'string', default: '14px',
            style: [
                {
                    condition: [
                        { key: 'iconSize', relation: '!=', value: 'custom' },
                    ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a {font-size: {{iconSize}};}'
                }
            ]
        },
        iconSizeCustom: {
            type: 'object', default: { md: 18, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'iconSize', relation: '==', value: 'custom' },
                    ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a {font-size: {{iconSizeCustom}};}'
                }
            ]
        },
        iconGutter: {
            type: 'object', default: { md: 10, unit: 'px' },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-team-social-links > a {margin: 0 calc({{iconGutter}}/2);}'
                }
            ]
        },
        iconSpacing: {
            type: 'object', default: {},
            style: [
                {
                    selector: '{{QUBELY}} .qubely-team-social-links {margin-top: {{iconSpacing}};}'
                }
            ]
        },

        iconBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1,
                radiusType: 'global',
                global: { md: 4 },
                unit: 'px'
            },
            style: [
                {
                    condition: [
                        { key: 'iconStyle', relation: '==', value: 'fill' }
                    ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a'
                }
            ]
        },

        iconColor: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false }
                        ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a {color: {{iconColor}};}'
                }
            ]
        },
        iconColorHover: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false }
                        ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a:hover {color: {{iconColorHover}};}'
                }
            ]
        },
        iconBackground: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false },
                            { key: 'iconStyle', relation: '==', value: 'fill' }
                        ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a {background-color: {{iconBackground}};}'
                }
            ]
        },
        iconBackgroundHover: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false },
                            { key: 'iconStyle', relation: '==', value: 'fill' }
                        ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a:hover {background-color: {{iconBackgroundHover}};}'
                }
            ]
        },
        iconBorder: {
            type: 'object', default: {},
            style: [
                {
                    condition: [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false },
                            { key: 'iconStyle', relation: '==', value: 'fill' }
                        ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a'
                }
            ]
        },
        iconBorderColorHover: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false },
                            { key: 'iconStyle', relation: '==', value: 'fill' }
                        ],
                    selector: '{{QUBELY}} .qubely-team-social-links>a:hover {border-color: {{iconBorderColorHover}};}'
                }
            ]
        },




	},
	edit: Edit,
	save: Save
});
