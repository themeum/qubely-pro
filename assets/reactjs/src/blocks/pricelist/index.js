const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { gloalSettings: { globalAttributes }} = wp.qubelyComponents
import './style.scss'
import Edit from './Edit'
import Save from './Save'

registerBlockType('qubely/pricelist', {
	title: __('Price List'),
    category: 'qubely',
    description: __('Showcase detailed with Qubely Price List.'),
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-price-list.svg'} alt={__('Price List')} />,
	keywords: [
		__('Price List'),
		__('Pricing')
    ],

    example: {
        attributes: {
            pricelistItems: 2,
            headingTypography: {
                openTypography: 1,
                size: {
                    md: 16,
                    unit: 'px'
                }
            },
            column: {
                md: 1
            },
            pricelistContents: [
                {
                    title: __( 'Qubely Blocks', 'qubely' ),
                    description: __( 'Qubely offers a rich collection of highly customizable.', 'qubely' ),
                    price: '$20.00'
                },
                {
                    title: __( 'Pre-made Sections', 'qubely' ),
                    description: __( 'Get a rich collection of blocks that are highly.', 'qubely' ),
                    price: '$30.00'
                }
            ]
        },
    },

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
				{ title: 'Qubely Blocks', digitText: '01', badge: 'Hot',  price: '$20.00', discount: '$10', description: 'Qubely offers a rich collection of highly customizable dedicated Gutenberg blocks.' },
				{ title: 'Pre-made Sections', digitText: '02', badge: 'Hot', price: '$30.00', discount: '$15', description: 'Qubely has a rich library of ready sections that can be imported and used as blocks on the Gutenberg.' },
				{ title: 'Rich Blocks Collection', digitText: '03',  badge: 'Hot', price: '$40.00', discount: '$25', description: 'Get a rich collection of blocks that are highly customizable and easy to use.' },
				{ title: 'Layout Packs', digitText: '04', badge: 'Hot', price: '$50.00', discount: '$35', description: 'Qubely gives you many beautiful template layouts completely free of cost. These can also customize.' }
			]
		},

        // Content
        column: {
			type: 'object',
			default: {
				md: '2'
			},
			style: [
				{
                    selector: '{{QUBELY}} .qubely-pricelist-items {grid-template-columns: repeat({{column}}, 1fr);}'
                }
            ]
		},
        columnGap: {
			type: 'object',
			default: {
                md: '20',
                unit: 'px'
			},
			style: [
				{
                    selector: '{{QUBELY}} .qubely-pricelist-items {grid-gap: {{columnGap}};}'
                }
            ]
		},
        style: {
			type: 'number',
			default: 2,
        },
        contentAlign: {
			type: 'string',
            default: 'left',
		},
        overlayContentBg: {
            type: 'object', default: { 
                type: 'color', 
                openColor: 0, 
                color: 'rgba(6, 80, 183, 0.7)', 
                gradient: { color1: '#1066CC', color2: '#2184F9', direction: 0, start: 0, stop: 100 } 
            },
            style: [
                {
                    condition: [
                        { key: 'style', relation: '==', value: '2' },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-content:before'
                }
            ]
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
            type: 'object', 
            default: {
				openBg: 1,
				bgDefaultColor: '#f5f5f5'
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
                }
            ] 
        },
        height: {
			type: 'object',
			default: {
				md: '150',
				unit: 'px'
			},
			style: [
				{
					condition: [
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'style', relation: '===', value: '3' },
                        { key: 'mediaType', relation: '==', value: 'image' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-content, {{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-empty-image {height: {{height}};}'
                }
            ]
		},
        contentSpacing: {
			type: 'object',
			default: {
				md: 0,
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
					md: 20
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
				openShadow: false,
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
                    selector: '{{QUBELY}} .qubely-pricelist-item .qubely-pricelist-image-container:before'
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
                    selector: '{{QUBELY}} .qubely-pricelist-item:hover .qubely-pricelist-image-container:before'
                }
            ]
        },

        //line
        enableLine: {
			type: 'boolean',
			default: false,
        },
        lineBorderStyle: { 
            type: 'string', 
            default: 'solid',
            style: [
                {
					condition: [
						{ key: 'enableLine', relation: '==', value: true }
					],
					selector: '{{QUBELY}} .qubely-pricelist-line {border-bottom-style: {{lineBorderStyle}};}'
                }
			]
        },
        lineBorderWidth: {
			type: 'object',
			default: {
				md: 1,
				unit: 'px'
			},
			style: [
                {
					condition: [
						{ key: 'enableLine', relation: '==', value: true }
					],
					selector: '{{QUBELY}} .qubely-pricelist-line {border-bottom-width: {{lineBorderWidth}};}'
                }
			]
		},
		lineBorderColor: {
			type: 'string',
			default: '#e5e5e5',
			style: [
				{
					condition: [
						{ key: 'enableLine', relation: '==', value: true }
					],
					selector: '{{QUBELY}} .qubely-pricelist-line {border-bottom-color: {{lineBorderColor}};}'
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
                {
                    condition: [
                        { key: 'style', relation: '!=', value: '3' },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-title {color: {{headingColor}};}'
                }
            ]
		},
		headingWhiteColor: {
			type: 'string',
            default: '#fff',
            style: [
                {
                    condition: [
                        { key: 'style', relation: '==', value: '3' },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-title {color: {{headingWhiteColor}};}'
                }
            ]
		},
		headingSpacing: {
			type: 'object',
			default: {
				md: 1,
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
                        { key: 'style', relation: '!=', value: '3' },
                        { key: 'enableDescription', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-introtext {color: {{descriptionColor}};}'
                }
            ]
		},
		descriptionWhiteColor: {
			type: 'string',
            default: '#fff',
            style: [
                {
                    condition: [
                        { key: 'style', relation: '==', value: '3' },
                        { key: 'enableDescription', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-introtext {color: {{descriptionWhiteColor}};}'
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
                        { key: 'style', relation: '!=', value: '3' },
                        { key: 'enableDiscount', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-discount {color: {{discountColor}};}'
                }
            ]
		},
		discountWhiteColor: {
			type: 'string',
            default: '#fff',
            style: [
                {
                    condition: [
                        { key: 'style', relation: '==', value: '3' },
                        { key: 'enableDiscount', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-discount {color: {{discountWhiteColor}};}'
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
                        { key: 'style', relation: '!=', value: '3' },
                        { key: 'enablePrice', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-price {color: {{priceColor}};}'
                }
            ]
		},
		priceWhiteColor: {
			type: 'string',
            default: '#fff',
            style: [
                {
                    condition: [
                        { key: 'style', relation: '==', value: '3' },
                        { key: 'enablePrice', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-price {color: {{priceWhiteColor}};}'
                }
            ]
		},
        
        //Badge
        enableBadge: {
			type: 'boolean',
			default: false,
        },
        badgePosition: {
			type: 'string',
			default: 'left',
			style: [
                {
					condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgePosition', relation: '==', value: 'right' },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-image-container .qubely-pricelist-badge {left: auto; right: 15px;}'
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
		enableMedia: {
			type: 'boolean',
			default: true,
		},
		mediaType: {
			type: 'string',
			default: 'image',
		},
		imagePosition: {
			type: 'string',
			default: 'left',
			style: [
                {
					condition: [
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'left' },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-content {display: -webkit-box; display: -ms-flexbox; display: flex;}'
                }
            ]
		},
		imageBorderRadius: {
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
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'style', relation: '!=', value: '3' },
                        { key: 'mediaType', relation: '==', value: 'image' }
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
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'style', relation: '!=', value: '3' },
                        { key: 'mediaType', relation: '==', value: 'image' }
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
						{ key: 'enableMedia', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'left' },
                        { key: 'mediaType', relation: '==', value: 'image' },
                        { key: 'style', relation: '!=', value: '3' },
                        { key: 'contentAlign', relation: '!=', value: 'left' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-description-wrapper {margin-right: {{imageSpacing}};}'
                },
				{
					condition: [
						{ key: 'enableMedia', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'left' },
                        { key: 'mediaType', relation: '==', value: 'image' },
                        { key: 'style', relation: '!=', value: '3' },
                        { key: 'contentAlign', relation: '==', value: 'left' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-image-container {margin-right: {{imageSpacing}};}'
                },
                {
					condition: [
						{ key: 'enableMedia', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'top' },
                        { key: 'mediaType', relation: '==', value: 'image' },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-image-container {margin-bottom: {{imageSpacing}};}'
                }
            ]
        },
        
        //digit
        digitTypography: {
			type: 'object',
			default: { openTypography: 1, size: { md: 12, unit: 'px' } },
			style: [
				{
					condition: [
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'mediaType', relation: '==', value: 'digit' },
                    ],
					selector: '{{QUBELY}} .qubely-pricelist-digit'
				}
			]
		},
        digitColor: {
			type: 'string',
			default: '#fff',
			style: [
                {
					condition: [
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'mediaType', relation: '==', value: 'digit' },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-digit {color: {{digitColor}};}'
                }
            ]
        },
        digitBg: {
			type: 'string',
			default: '#2184F9',
			style: [
                {
					condition: [
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'mediaType', relation: '==', value: 'digit' },
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-digit {background: {{digitBg}};}'
                }
            ]
        },
		digitSize: {
			type: 'object',
			default: {
				md: '40',
				unit: 'px'
			},
			style: [
				{
					condition: [
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'mediaType', relation: '==', value: 'digit' },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-digit {text-align:center; width: {{digitSize}};} {{QUBELY}} .qubely-pricelist-digit {height: {{digitSize}};} {{QUBELY}} .qubely-pricelist-digit {line-height: {{digitSize}};}'
                }
            ]
        },
        digitBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: {
					md: 100
				},
				unit: 'px'
			},
			style: [
                {
					condition: [
                        { key: 'enableMedia', relation: '==', value: true },
                        { key: 'mediaType', relation: '==', value: 'digit' },
                        { key: 'style', relation: '!=', value: '3' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-digit'
                }
            ]
        },
        digitSpacing: {
			type: 'object',
			default: {
				md: 15,
				unit: 'px'
			},
			style: [
                {
					condition: [
						{ key: 'enableMedia', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'left' },
                        { key: 'mediaType', relation: '==', value: 'digit' },
                        { key: 'contentAlign', relation: '!=', value: 'left' }
                    ],
                    selector: '{{QUBELY}} .qubely-pricelist-description-wrapper {margin-right: {{digitSpacing}};}'
                },
				{
					condition: [
						{ key: 'enableMedia', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'left' },
                        { key: 'mediaType', relation: '==', value: 'digit' },
                        { key: 'contentAlign', relation: '==', value: 'left' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist .qubely-pricelist-item .qubely-pricelist-digit {margin-right: {{digitSpacing}};}'
                },
                {
					condition: [
						{ key: 'enableMedia', relation: '==', value: true },
                        { key: 'imagePosition', relation: '==', value: 'top' },
                        { key: 'mediaType', relation: '==', value: 'digit' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-pricelist .qubely-pricelist-item .qubely-pricelist-digit {margin-bottom: {{digitSpacing}};}'
                }
            ]
        },

		pricelistItems: { type: 'number', default: 4 },
		showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
        showContextMenu: { type: 'boolean', default: true },
        ...globalAttributes
	},
	edit: Edit,
	save: Save
});
