const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

import './style.scss'

import Edit from './Edit'
import Save from './Save'

registerBlockType('qubely/pricelist', {
	title: __('Price List'),
    category: 'qubely',
    description: 'Showcase detailed with Qubely Price List.',
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg'} alt={__('Price List')} />,
	keywords: [
		__('Price List'),
		__('Pricing')
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
				{ title: 'Qubely Blocks', badge: 'Hot',  price: '$20', discount: '$10', description: 'Qubely offers a rich collection of highly customizable dedicated Gutenberg blocks.' },
				{ title: 'Pre-made Sections', badge: 'Hot', price: '$30', discount: '$15', description: 'Qubely has a rich library of ready sections that can be imported and used as blocks on the Gutenberg editor.' },
				{ title: 'Rich Blocks Collection',  badge: 'Hot', price: '$40', discount: '$25', description: 'Get a rich collection of blocks that are highly customizable and easy to use even for the beginners.' },
				{ title: 'Layout Packs', badge: 'Hot', price: '$50', discount: '$35', description: 'Qubely gives you many beautiful template layouts completely free of cost. These can also be customized and styled your way.' },
				{ title: 'Smart Layout Builder', badge: 'Hot', price: '$60', discount: '$45', description: 'Its row-column structure lets you take 1 to as many as 6 columns in a single row.' },
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
                    selector: '{{QUBELY}} .qubely-pricelist-item-3 .qubely-pricelist-content .qubely-pricelist-description-wrapper'
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

        // Discount Price
        enableDescription: {
			type: 'boolean',
			default: true,
        },
		descriptionTypography: {
			type: 'object',
			default: {},
			style: [
				{
					condition: [
                        { key: 'enableDescription', relation: '==', value: true }
                    ],
					selector: '{{QUBELY}} .qubely-pricelist-introtext'
				}
			]
		},
		descriptionColor: {
			type: 'string',
			default: '',
			style: [
                {
					condition: [
                        { key: 'enableDescription', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-introtext {color: {{descriptionColor}};}'
                }
            ]
        },

        // Discount Price
        enableDiscount: {
			type: 'boolean',
			default: false,
        },
		discountTypography: {
			type: 'object',
			default: {},
			style: [
				{
					condition: [
                        { key: 'enableDiscount', relation: '==', value: true }
                    ],
					selector: '{{QUBELY}} .qubely-pricelist-discount'
				}
			]
		},
		discountColor: {
			type: 'string',
			default: '',
			style: [
                {
					condition: [
                        { key: 'enableDiscount', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-discount {color: {{discountColor}};}'
                }
            ]
        },
            
        //Price
        priceAfterTitle: {
			type: 'boolean',
            default: false,
			style: [
                {
					condition: [
                        { key: 'priceAfterTitle', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-title-wrapper {display: block;}'
                }
            ]
        },
        enablePrice: {
			type: 'boolean',
			default: true,
        },
        priceTypography: {
			type: 'object',
			default: {},
			style: [
				{
					condition: [
                        { key: 'enablePrice', relation: '==', value: true }
                    ],
					selector: '{{QUBELY}} .qubely-pricelist-price'
				}
			]
		},
		priceColor: {
			type: 'string',
			default: '',
			style: [
                {
					condition: [
                        { key: 'enablePrice', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-price {color: {{priceColor}};}'
                }
            ]
        },
        
        //Badge
        enableBadge: {
			type: 'boolean',
			default: true,
        },
        badgePosition: {
			type: 'string',
			default: 'before',
			style: [
                {
					condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgePosition', relation: '==', value: 'right' },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-content-image .editor-rich-text {left: auto !important; right: 15px;}'
                }
            ]
        },
        badgeTypography: {
			type: 'object',
			default: { openTypography: 1, size: { md: 12, unit: 'px' }, height: { md: 15, unit: 'px' }  },
			style: [
				{
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true }
                    ],
					selector: '{{QUBELY}} .qubely-pricelist-badge'
				}
			]
		},
        badgeColor: {
			type: 'string',
			default: '#fff',
			style: [
                {
					condition: [
                        { key: 'enableBadge', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-badge {color: {{badgeColor}};}'
                }
            ]
        },
        badgeBg: {
			type: 'string',
			default: '#2184F9',
			style: [
                {
					condition: [
                        { key: 'enableBadge', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-badge {background: {{badgeBg}};}'
                }
            ]
        },
        badgeBorderRadius: {
			type: 'object',
            default: {
                openBorderRadius: 1,
                radiusType: 'global',
                global: { md: 2 },
                unit: 'px',

            },
			style: [
                {
					condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-badge'
                }
            ]
        },
        badgePadding: {
			type: 'object',
			// default: {
			// 	openPadding: 1,
			// 	paddingType: 'global',
			// 	unit: 'px',
			// 	global: {
			// 		md: 30
			// 	}
            // },
            
            default: {
                openPadding: 1,
                paddingType: 'custom',
                custom: {
                    md: '2 6 3 6'
                },
                unit: 'px'
            },

			style: [
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-badge'
                }
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
