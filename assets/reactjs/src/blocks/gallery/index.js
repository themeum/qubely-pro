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
		pricelistContents: {
			type: 'Array',
			default: [
				{ title: 'Qubely Blocks' },
				{ title: 'Pre-made Sections' },
				{ title: 'Rich Blocks Collection' },
				{ title: 'Layout Packs' },
				{ title: 'Smart Layout Builder' },
			]
		},

        // Content
        style: {
			type: 'number',
			default: 1,
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
        height: {
			type: 'object',
			default: {
				md: '200',
				unit: 'px'
			},
			style: [
				{
					condition: [
                        { key: 'enableImage', relation: '==', value: true },
                        { key: 'style', relation: '===', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-content, {{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-empty-image {height: {{height}};}'
                }
            ]
		},
        contentSpacing: {
			type: 'object',
			default: {
				md: 30,
				unit: 'px'
			},
			style: [
				{ selector: '{{QUBELY}} .qubely-pricelist-item {margin-bottom: {{contentSpacing}};}' }
			]
		},
		contentPadding: {
			type: 'object',
			default: {
				openPadding: 1,
				paddingType: 'global',
				unit: 'px',
				global: {
					md: 30
				}
			},
			style: [
                {
                    condition: [
                        { key: 'style', relation: '===', value: '1' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1'
                },
                {
                    condition: [
                        { key: 'style', relation: '===', value: '2' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content'
                },
                {
                    condition: [
                        { key: 'style', relation: '==', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-item-3 .qubely-pricelist-content .qubely-pricelist-description'
                }
            ]
		},
		contentBorderRadius: {
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
                    condition: [
                        { key: 'style', relation: '===', value: '1' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1'
                },
                {
                    condition: [
                        { key: 'style', relation: '===', value: '2' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content'
                },
                {
                    condition: [
                        { key: 'style', relation: '===', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-item-3 .qubely-pricelist-content'
                }
            ]
		},
		contentBoxShadow: {
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
                    condition: [
                        { key: 'style', relation: '===', value: '1' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1'
                },
                {
                    condition: [
                        { key: 'style', relation: '===', value: '2' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content'
                },
                {
                    condition: [
                        { key: 'style', relation: '===', value: '3' }
                    ],
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

        // Heading
		headingLevel: {
			type: 'number',
			default: 4,
		},
		headingTypography: {
			type: 'object',
			default: {},
			style: [
				{
					selector: '{{QUBELY}} .qubely-pricelist-title'
				}
			]
		},
		headingColor: {
			type: 'string',
			default: '',
			style: [
				{ selector: '{{QUBELY}} .qubely-pricelist-title {color: {{headingColor}};}' }
			]
		},
		headingSpacing: {
			type: 'object',
			default: {
				md: 10,
				unit: 'px'
			},
			style: [
				{ selector: '{{QUBELY}} .qubely-pricelist-title {margin: 0 0 {{headingSpacing}} 0;}' }
			]
		},

        //image
		enableImage: {
			type: 'boolean',
			default: true,
		},
		imagePosition: {
			type: 'string',
			default: 'left',
			style: [
                {
					condition: [
                        { key: 'enableImage', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'left' },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-content {display: -webkit-box; display: -ms-flexbox; display: flex;}'
                }
            ]
		},
		imageBorderRadius: {
			type: 'object',
			default: {},
			style: [
                {
					condition: [
                        { key: 'enableImage', relation: '==', value: true },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-image-container img'
                }
            ]
		},
		imageSize: {
			type: 'object',
			default: {
				md: '100',
				unit: 'px'
			},
			style: [
				{
					condition: [
                        { key: 'enableImage', relation: '==', value: true },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-image-container {width: {{imageSize}};}'
                }
            ]
		},
		imageSpacing: {
			type: 'object',
			default: {
				md: 20,
				unit: 'px'
			},
			style: [
				{
					condition: [
						{ key: 'enableImage', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'left' },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-image-container {margin-right: {{imageSpacing}};}'
                },
                {
					condition: [
						{ key: 'enableImage', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'top' },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-image-container {margin-bottom: {{imageSpacing}};}'
                }
            ]
		},

		//
		pricelistItems: { type: 'number', default: 5 },
		showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
		showContextMenu: { type: 'boolean', default: true },
	},
	edit: Edit,
	save: Save
});
