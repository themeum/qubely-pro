const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

import './style.scss'

import Edit from './Edit'
import Save from './Save'

registerBlockType('qubely/gallery', {
	title: __('Gallery'),
    category: 'qubely',
    description: 'Showcase detailed with Qubely Gallery',
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg'} alt={__('Gallery')} />,
	keywords: [
		__('Gallery'),
		__('Image')
	],
	attributes: {
		uniqueId: { type: 'string', default: '' },
		spacer: {
            type: 'object',
            default: {
                spaceTop: {
                    md: '10',
                    unit: "px"
                },
                spaceBottom: {
                    md: '10',
                    unit: "px"
                }
            },
            style: [
                { selector: '{{QUBELY}}' }
            ]
        },
		galleryContents: {
			type: 'Array',
			default: [
				{ title: 'Best Gutenberg Plugin' },
				{ title: 'Pre-made Sections' },
				{ title: 'Rich Blocks Collection' },
				{ title: 'Layout Packs' },
				{ title: 'Smart Layout Builder' },
			]
        },
        
        //gallery settings
        style: {
			type: 'number',
			default: 1,
        },
		galleryItems: { 
            type: 'number', 
            default: 5
        },
		gutter: {
			type: 'object',
			default: {
				md: '10',
				unit: 'px'
			},
			style: [
                {
					condition: [
                        { key: 'style', relation: '===', value: '1'},
					],
					selector: '{{QUBELY}} .qubely-column-grid {grid-gap: {{gutter}};}'
                },
                {
					condition: [
                        { key: 'style', relation: '!=', value: '1' },
					],
					selector: '{{QUBELY}} .qubely-column-grid {column-gap: {{gutter}};} {{QUBELY}} .qubely-block-gallery .qubely-gallery-item {padding-bottom: {{gutter}};}'
                }
			]
		},
		column: { 
            type: 'object', 
            default: 2,
            default: { md: 2,  sm: 1,  xs: 1, unit: 'px' },
        },

		imgSize: { 
            type: 'string', 
            default: 'full' 
        },
        contentAlign: {
			type: 'string',
			default: 'left'
		},
		enableContentBorder: {
			type: 'boolean',
			default: false,
        },
        contentBorderWidth: {
			type: 'object',
			default: {
				md: 1,
				unit: 'px'
			},
			style: [
                {
					condition: [
                        { key: 'style', relation: '===', value: '1' },
                        { key: 'style', relation: '!=', value: '3' },
						{ key: 'enableContentBorder', relation: '==', value: true }
					],
					selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1 {border-style: solid; border-width: {{contentBorderWidth}};}'
                },
                {
					condition: [
                        { key: 'style', relation: '===', value: '2' },
                        { key: 'style', relation: '!=', value: '3' },
						{ key: 'enableContentBorder', relation: '==', value: true }
					],
					selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content {border-style: solid; border-width: {{contentBorderWidth}};}'
				}
			]
		},
		contentBorderColor: {
			type: 'string',
			default: '#F6F7FB',
			style: [
                {
					condition: [
                        { key: 'style', relation: '===', value: '1' },
                        { key: 'style', relation: '!=', value: '3' },
						{ key: 'enableContentBorder', relation: '==', value: true }
					],
					selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1 {border-color: {{contentBorderColor}};}'
				},
				{
					condition: [
                        { key: 'style', relation: '===', value: '2' },
                        { key: 'style', relation: '!=', value: '3' },
						{ key: 'enableContentBorder', relation: '==', value: true }
					],
					selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content {border-color: {{contentBorderColor}};}'
				}
			]
        },
		contentBg: {
            type: 'string',
            default: '#F9F9F9',
            style: [
				{
                    condition: [
                        { key: 'style', relation: '===', value: '1' }
					],
					selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1 {background-color: {{contentBg}};}'
                },
                {
                    condition: [
                        { key: 'style', relation: '===', value: '2' }
					],
					selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content {background-color: {{contentBg}};}'
				}
            ]
        },

        //image
        imageAnimation: {
			type: 'string',
			default: 'zoom-in'
		},
        enableImgFixedHeight: {
            type: 'boolean',
            default: true,
        },
        imgFixedHeight: {
			type: 'object',
			default: {
				md: '200',
				unit: 'px'
			},
			style: [
				{
					condition: [
                        { key: 'enableImgFixedHeight', relation: '==', value: true },
                        { key: 'style', relation: '!=', value: '2' }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-content-image img {width: 100%;object-fit: cover; height: {{imgFixedHeight}};}'
                }
            ]
        },
		imgBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: {
					md: 5
				},
				unit: 'px'
			},
			style: [
                {
                    selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1'
                }
            ]
		},
		imgBoxShadow: {
			type: 'object',
			default: {
				openShadow: true,
				vertical: 3,
				horizontal: 0,
				blur: 6,
				spread:	0,
				color: 'rgba(0,0,0,0.1)',
			},
			style: [
                {
                    selector: '{{QUBELY}} .qubely-pricelist-item-3 .qubely-pricelist-content'
                }
            ]
        },
        
        overlayBg: {
            type: 'object', default: { 
                type: 'color', 
                openColor: 0, 
                color: 'rgba(6, 80, 183, 0.7)', 
                gradient: { color1: '#1066CC', color2: '#2184F9', direction: 0, start: 0, stop: 100 } 
            },
            style: [
                {
                    condition: [
                        { key: 'style', relation: '==', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist .qubely-pricelist-image-container .qubely-pricelist-content-image-editor:before'
                }
            ]
        },
        overlayHoverBg: {
            type: 'object', default: { 
                type: 'color', 
                openColor: 0, 
                color: 'rgba(6, 80, 183, 0.8)', 
                gradient: { color1: '#1066CC', color2: '#2184F9', direction: 0, start: 0, stop: 100 } 
            },
            style: [
                {
                    condition: [
                        { key: 'style', relation: '==', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist:hover .qubely-pricelist-image-container .qubely-pricelist-content-image-editor:before'
                }
            ]
        },

        // Caption
        enableCaption: { 
            type: 'boolean', 
            default: false 
        },
		captionTypography: {
			type: 'object',
			default: {},
			style: [
				{
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true }
                    ],
					selector: '{{QUBELY}} .qubely-gallery-caption'
				}
			]
		},
		captionColor: {
			type: 'string',
			default: '#fff',
			style: [
				{ 
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-caption {color: {{captionColor}};}' 
                }
			]
		},
        captionPadding: {
            type: 'object',
            default: {
                openPadding: 1,
                paddingType: 'global',
                global: {
                    md: 30,
                },
                unit: 'px'
            },
            style: [
                {
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-caption-wrapper'
                }
            ]
        },

        captionVerticalAlign: {
            type: 'string',
            default: 'center',
            style: [
                {
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true },
                        { key: 'captionVerticalAlign', relation: '==', value: 'top' }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start;}'
                },
                {
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true },
                        { key: 'captionVerticalAlign', relation: '==', value: 'center' }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center;}'
                },
                {
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true },
                        { key: 'captionVerticalAlign', relation: '==', value: 'bottom' }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end;}'
                }
            ]
        },

        captionAlignment: {
            type: 'string',
            default: 'center',
            style: [
                {
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true },
                        { key: 'captionAlignment', relation: '==', value: 'left' }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; text-align: left;}'
                },
                {
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true },
                        { key: 'captionAlignment', relation: '==', value: 'center' }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; text-align: center;}'
                },
                {
                    condition: [
                        { key: 'enableCaption', relation: '==', value: true },
                        { key: 'captionAlignment', relation: '==', value: 'right' }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; text-align: right;}'
                }
            ]
        },
		showCaption: {
			type: 'string',
			default: 'onHover',
			style: [
                {
					condition: [
                        { key: 'enableCaption', relation: '==', value: true },
                        { key: 'showCaption', relation: '==', value: 'onHover' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-content {display: -webkit-box; display: -ms-flexbox; display: flex;}'
                }
            ]
		},

        // Overlay
        enableOverlay: {
            type: 'boolean',
            default: true,
        },
        overlayBg: {
            type: 'object',
            default: {
                openColor: 1,
                type: 'gradient',
                color: 'rgba(6, 80, 183, 0.7)',
                gradient: {
                    color1: 'rgba(6, 80, 183, 0.7)',
                    color2: 'rgba(96, 10, 255, 0.7)',
                    direction: 45,
                    start: 0,
                    stop: 100,
                    type: 'linear'
                },
            },
            style: [
                {
                    condition: [
                        { key: 'enableOverlay', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-image-container:before'
                }
            ]
        },
        overlayHoverBg: {
            type: 'object',
            default: {
                type: 'gradient',
                openColor: 1,
                color: 'rgba(6, 80, 183, 0.85)',
                gradient: {
                    color1: 'rgba(6, 80, 183, 0.85)',
                    color2: 'rgba(96, 10, 255, 0.85)',
                    direction: 45,
                    start: 0,
                    stop: 100,
                    type: 'linear'
                }
            },
            style: [
                {
                    condition: [
                        { key: 'enableOverlay', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-image-container:after'
                }
            ]
        },
        overlayBlend: {
            type: 'string',
            default: '',
            style: [
                {
                    condition: [
                        { key: 'enableOverlay', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-gallery-image-container:before {mix-blend-mode: {{overlayBlend}};} {{QUBELY}} .qubely-gallery-image-container:after {mix-blend-mode: {{overlayBlend}};}'
                }
            ]
        },

		//global
		showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
		showContextMenu: { type: 'boolean', default: true },
	},
	edit: Edit,
	save: Save
});
