const { gloalSettings: { globalAttributes }, QubelyButton: { buttonAttributes }, } = wp.qubelyComponents

export const attributes = {
    uniqueId: { type: 'string', default: '' },
    // Global
    ...globalAttributes,
    ...buttonAttributes,
    layout: { type: 'number', default: 1 },
    spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },

    // Media
    mediaType: { type: 'string', default: 'image' },
    imagePosition: { 
        type: 'string', 
        default: 'top',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 },
                    { key: 'imagePosition', relation: '==', value: 'bottom' },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-1 .qubely-block-mediacard-wrapper {display:flex;flex-wrap: wrap;flex-direction: column-reverse;}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                    { key: 'imagePosition', relation: '==', value: 'bottom' },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-4 .qubely-block-mediacard-wrapper {display:flex;flex-wrap: wrap;flex-direction: column-reverse;}'
            }
        ] 
    },
    imagePositionHorizontal: { 
        type: 'string', 
        default: 'left',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 2 },
                    { key: 'imagePositionHorizontal', relation: '==', value: 'left' },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-2 .qubely-block-mediacard-wrapper {display:flex;}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 2 },
                    { key: 'imagePositionHorizontal', relation: '==', value: 'right' },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-2 .qubely-block-mediacard-wrapper {display:flex;flex-direction: row-reverse;}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 5 },
                    { key: 'imagePositionHorizontal', relation: '==', value: 'right' },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-5 .qubely-block-mediacard-wrapper {display:flex;flex-direction: row-reverse;}'
            }
        ] 
    },
    videoSource: { type: 'string', default: 'local' },
    vimeoId: { type: 'string', default: '368867301' },
    youtubeId: { type: 'string', default: 'HY3sut8LTSw' },
    localVideo: {
        type: 'object',
        default: {}
    },
    videoUrl: {
        type: 'string',
        default: null
    },
    autoplay: { type: 'boolean', default: false },
    // videoWidth: {
    //     type: 'object',
    //     default: { md: 50, unit: '%' },
    //     style: [
    //         {
    //             selector: '{{QUBELY}} .qubely-block-mediacard.qubely-mediacard-layout-2 .qubely-mediacard-video { width: {{videoWidth}}; } {{QUBELY}} .qubely-mediacard-layout-3.media-type-video .qubely-mediacard-media { width: {{videoWidth}}; }'
    //         }
    //     ]
    // },
    image: { 
        type: 'object', 
        default: {
            url: 'http://qubely.io/wp-content/uploads/qubely-assets/demo/image8.jpg'
        } 
    },
    image2x: { 
        type: 'object', 
        default: {} 
    },
    imgAlt: { type: 'string', default: '' },
    imageWidth: {
        type: 'object',
        default: {},
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 3 },
                    { key: 'layout', relation: '!=', value: 4 }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media_wrapper {width: {{imageWidth}};} {{QUBELY}} .qubely-mediacard-image .qubely-image-placeholder {height: {{imageWidth}}; width: {{imageWidth}};}'
            },
        ]
    },
    imageBorderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global',
            global: { md: 5 },
            unit: 'px',

        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 3 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-image, {{QUBELY}} .qubely-mediacard-image img'
            }
        ]
    },
    mediaSpacing: {
        type: 'object', default: { md: '', unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 },
                    { key: 'imagePosition', relation: '==', value: 'top' },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media_wrapper {margin-bottom: {{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 },
                    { key: 'imagePosition', relation: '==', value: 'bottom' },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media_wrapper {margin-top: {{mediaSpacing}};}'
            },

            {
                condition: [
                    { key: 'layout', relation: '==', value: 2 },
                    { key: 'imagePositionHorizontal', relation: '==', value: 'left' }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media_wrapper {margin-right: {{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 2 },
                    { key: 'imagePositionHorizontal', relation: '==', value: 'right' }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media_wrapper {margin-left: {{mediaSpacing}};}'
            },

            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                    { key: 'imagePosition', relation: '==', value: 'top' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard.qubely-mediacard-layout-4 .qubely-mediacard-content-wrapper {margin-top: -{{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                    { key: 'imagePosition', relation: '==', value: 'bottom' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard.qubely-mediacard-layout-4 .qubely-mediacard-content-wrapper {margin-top:0;margin-bottom: -{{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 5 },
                    { key: 'imagePositionHorizontal', relation: '==', value: 'left' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard.qubely-mediacard-layout-5 .qubely-mediacard-content-wrapper {margin-left: -{{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 5 },
                    { key: 'imagePositionHorizontal', relation: '==', value: 'right' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard.qubely-mediacard-layout-5 .qubely-mediacard-content-wrapper {margin-right: -{{mediaSpacing}};}'
            }
        ]
    },

    // Title
    title: {
        type: 'string',
        source: 'html',
        selector: '.qubely-mediacard-title',
        default: 'Qubely Gutenberg Plugin'
    },

    //Content
    content: {
        type: 'string',
        source: 'html',
        selector: '.qubely-mediacard-text',
        default: 'There’s no easier way to add innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.'
    },

    //stack
    stackBg: {
        type: 'object',
        default: {},
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-4 .qubely-block-mediacard-wrapper .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-6 .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-7 .qubely-mediacard-content-wrapper'
            }
        ]
    },
    stackBorderRadius: {
        type: 'object',
        default: {
            unit: 'px',
            openBorderRadius: true,
            radiusType: 'global',
            global: {
                md: 10,
            },
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-block-mediacard-wrapper .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-6 .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-7 .qubely-mediacard-content-wrapper'
            }
        ]
    },
    stackWidth: {
        type: 'object',
        default: {},
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-block-mediacard-wrapper .qubely-mediacard-content-wrapper {width: {{stackWidth}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 5 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-block-mediacard-wrapper .qubely-mediacard-content-wrapper {height: {{stackWidth}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-6 .qubely-mediacard-content-wrapper {width: {{stackWidth}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-7 .qubely-mediacard-content-wrapper {width: {{stackWidth}};}'
            }
        ]
    },

    stackPadding: {
        type: 'object',
        default: {
            'openPadding': 1,
            'paddingType': 'global',
            'unit': 'px',
            'global': {
                'md': 30
            },
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-block-mediacard-wrapper .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 5 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-block-mediacard-wrapper .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-6 .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-7 .qubely-mediacard-content-wrapper'
            }
        ]
    },
    stackBoxShadow: {
        type: 'object',
        default: {
            'blur': 20,
            'color': 'rgba(0,0,0,0.3)',
            'horizontal': 0,
            'inset': 0,
            'openShadow': true,
            'spread': -20,
            'vertical': 20
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-block-mediacard-wrapper .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 5 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-block-mediacard-wrapper .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-6 .qubely-mediacard-content-wrapper'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-7 .qubely-mediacard-content-wrapper'
            },
        ]
    },

    // Badge__
    badge: { type: 'string', default: 'Sale' },
    badgeStyle: {
        type: 'string',
        default: 'default'
    },
    badgePosition: {
        type: 'string',
        default: 'left',
        style: [
            {
                condition: [
                    { key: 'badgeStyle', relation: '==', value: 'none' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {right: -50px; transform: rotate(45deg);}'
            },
        ]
    },
    badgeColor: {
        type: 'string',
        default: '#FFFFFF',
        style:
        [
            {
                condition:
                    [
                        { key: 'badgeStyle', relation: '!=', value: 'none' },
                    ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {color: {{badgeColor}};}'
            }
        ]
    },
    badgeTypography: {
        type: 'object',
        default: {
            openTypography: 1,
            size: {
                md: 14,
                unit: 'px'
            }
        },
        style:
        [
            {
                condition:
                    [
                        { key: 'badgeStyle', relation: '!=', value: 'none' },
                    ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge'
            }
        ]
    },
    badgeBg: {
        type: 'string',
        default: '#4592FF',
        style:
            [
                {
                    condition: [
                        { key: 'badgeStyle', relation: '!=', value: 'none' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {background-color: {{badgeBg}};}'
                }
            ]
    },
    badgePadding: {
        type: 'object',
        default: {
            'openPadding': 1,
            'paddingType': 'custom',
            'unit': 'px',
            'custom': {
                'md': '3 7 3 7'
            },
        },
        style: [
            {
                condition: [
                    { key: 'badgeStyle', relation: '!=', value: 'none' },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge'
            },
        ]
    },
    
    badgeMargin: {
        type: 'object',
        default: {
            'openMargin': 1,
            'marginType': 'global',
            'unit': 'px',
            'global': {
                'md': ''
            },
        },
        style: [
            {
                condition: [
                    { key: 'badgeStyle', relation: '!=', value: 'none' },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge'
            },
        ]
    },
    badgeBorderRadius: {
        type: 'object',
        default: {
            unit: 'px',
            openBorderRadius: true,
            radiusType: 'global',
            global: {
                md: '2',
            },
        },
        style: [
            {
                condition: [
                    { key: 'badgeStyle', relation: '!=', value: 'none' },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge'
            },
        ]
    },

    // Card
    alignment: {
        type: 'object',
        default: {
            md: 'left'
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard {text-align: {{alignment}};}'
            }
        ]
    },
    contentPosition: {
        type: 'string',
        default: 'middle',
        style: [
            {
                condition: [
                    { key: 'contentPosition', relation: '==', value: 'top' },
                    { key: 'layout', relation: '==', value: 3 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {align-content: flex-start;}'
            },
            {
                condition: [
                    { key: 'contentPosition', relation: '==', value: 'middle' },
                    { key: 'layout', relation: '==', value: 3 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {align-content: center;}'
            },
            {
                condition: [
                    { key: 'contentPosition', relation: '==', value: 'bottom' },
                    { key: 'layout', relation: '==', value: 3 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {align-content: flex-end;}'
            },

            {
                condition: [
                    { key: 'contentPosition', relation: '==', value: 'top' },
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {align-content: flex-start;}'
            },
            {
                condition: [
                    { key: 'contentPosition', relation: '==', value: 'middle' },
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {align-content: center;}'
            },
            {
                condition: [
                    { key: 'contentPosition', relation: '==', value: 'bottom' },
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {align-content: flex-end;}'
            }
        ]
    },
    contentHorizontalPosition: {
        type: 'string',
        default: 'middle',
        style: [
            {
                condition: [
                    { key: 'contentHorizontalPosition', relation: '==', value: 'left' },
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-4 .qubely-block-mediacard-wrapper {justify-content:flex-start; align-items: flex-start;}'
            },
            {
                condition: [
                    { key: 'contentHorizontalPosition', relation: '==', value: 'middle' },
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-4 .qubely-block-mediacard-wrapper {justify-content: center;align-items: center;}'
            },
            {
                condition: [
                    { key: 'contentHorizontalPosition', relation: '==', value: 'right' },
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-mediacard-layout-4 .qubely-block-mediacard-wrapper {justify-content:flex-end; align-items: flex-end;}'
            },
            {
                condition: [
                    { key: 'contentHorizontalPosition', relation: '==', value: 'left' },
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {justify-content: flex-start;}'
            },
            {
                condition: [
                    { key: 'contentHorizontalPosition', relation: '==', value: 'middle' },
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {justify-content: center;}'
            },
            {
                condition: [
                    { key: 'contentHorizontalPosition', relation: '==', value: 'right' },
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {justify-content: flex-end;}'
            }
        ]
    },
    bgColor: { 
        type: 'object', 
        default: {

        }, 
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 2 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 5 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard'
            }
        ] 
    },
    bgImage: { 
        type: 'object', 
        default: { 
            bgimgPosition: 'center center', 
            bgimgSize: 'cover', 
            bgimgRepeat: 'no-repeat', 
            bgDefaultColor: '#f5f5f5' 
        }, 
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 3 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 6 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 7 },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard'
            }
        ] 
    },
    bgPadding: {
        type: 'object',
        default: {
            paddingType: 'global'
        },
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-mediacard'
            }
        ]
    },
    bgBorderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global',

        },
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-mediacard'
            },
        ]
    },
    bgBorder: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard' }] },
    bgShadow: { type: 'object', default: { color: '' }, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard' }] },
    enableFixedHeight: { 
        type: 'boolean', 
        default: true 
    },
    fixedHeight: { 
        type: 'object', 
        default: {
            md: 450,
            unit: 'px'
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 3 },
                    { key: 'enableFixedHeight', relation: '==', value: true },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {height: {{fixedHeight}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 6 },
                    { key: 'enableFixedHeight', relation: '==', value: true },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {height: {{fixedHeight}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 7 },
                    { key: 'enableFixedHeight', relation: '==', value: true },
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard-wrapper {height: {{fixedHeight}};}'
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
            type: 'color',
            color: 'rgba(0, 0, 0, 0.8)',
            gradient: {
                color1: 'rgba(0, 0, 0, 0.5)',
                color2: 'rgba(6, 1, 14, 0.6)',
                direction: 25,
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
                selector: '{{QUBELY}} .qubely-block-mediacard.qubely-mediacard-layout-3:before'
            }
        ]
    },
    overlayHoverBg: {
        type: 'object',
        default: {
            type: 'gradient',
            openColor: 0,
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
                selector: '{{QUBELY}} .qubely-block-mediacard.qubely-mediacard-layout-3:hover:before'
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
                selector: '{{QUBELY}} .qubely-block-mediacard.qubely-mediacard-layout-3:before {mix-blend-mode: {{overlayBlend}};}'
            }
        ]
    },
    showContextMenu: {
        type: 'boolean',
        default: false
    },
};