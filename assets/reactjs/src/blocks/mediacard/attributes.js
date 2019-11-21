const { gloalSettings: { globalAttributes }, QubelyButton: { buttonAttributes }, } = wp.qubelyComponents

export const attributes = {

    uniqueId: { type: 'string', default: '' },
    // Global
    ...globalAttributes,
    ...buttonAttributes,
    layout: { type: 'number', default: 1 },
    mediaType: { type: 'string', default: 'image' },

    videoSource: { type: 'string', default: 'vimeo' },
    vimeoId: { type: 'string', default: '368867301' },
    youtubeId: { type: 'string', default: 'HY3sut8LTSw' },
    autoplay: { type: 'boolean', default: false },
    videoWidth: {
        type: 'object',
        default: { md: 50, unit: '%' },
        style: [
            {
                selector: '{{QUBELY}} .qubely-mediacard-layout-2.media-type-video .qubely-mediacard-media { width: {{videoWidth}}; } {{QUBELY}} .qubely-mediacard-layout-3.media-type-video .qubely-mediacard-media { width: {{videoWidth}}; }'
            }
        ]
    },

    alignment: {
        type: 'object', default: { md: 'left' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard {text-align: {{alignment}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard {text-align: {{alignment}};}'
            }
        ]
    },

    spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },

    enableButton: { type: 'boolean', default: false },
    buttonToggleOption: { type: 'boolean', default: true },



    // Image
    image: { type: 'object', default: {} },
    image2x: { type: 'object', default: {} },
    imgAlt: { type: 'string', default: '' },
    imageWidth: {
        type: 'object',
        default: {},
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'image' }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media img {width: {{imageWidth}};} {{QUBELY}} .qubely-mediacard-media .qubely-image-placeholder {height: {{imageWidth}}; width: {{imageWidths}};}'
            }
        ]
    },



    // Media background
    useMediaBg: { type: 'boolean', default: 1 },

    mediaBorderRadius: {
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
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'useMediaBg', relation: '==', value: 1 }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media, {{QUBELY}} .qubely-mediacard-media img'
            }
        ]
    },


    // Media Spacing
    mediaSpacing: {
        type: 'object', default: { md: 20, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media {margin-bottom: {{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 2 }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media {margin-right: {{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 3 }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-media {margin-left: {{mediaSpacing}};}'
            },
        ]
    },

    // Title
    title: {
        type: 'string',
        source: 'html',
        selector: '.qubely-mediacard-title',
        default: 'Qubely Gutenberg Plugin'
    },
    titleAlignment: {
        type: 'object', default: { md: 'left' },
        style: [
            {
                condition: [
                    { key: 'enableContent', relation: '==', value: true }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-title {text-align: {{titleAlignment}};}'
            }
        ]
    },
    titleTypography: {
        type: 'object',
        default: {
            openTypography: 1,
            family: 'Helvetica',
            type: 'sans-serif',
            size: {
                md: 32,
                unit: 'px'
            },
            height: {
                md: '45',
                unit: 'px'
            }
        },
        style: [{ selector: '{{QUBELY}} .qubely-mediacard-title' }]
    },
    titleColor: {
        type: 'string',
        default: '#1B1B1B',
        style: [
            {
                selector: '{{QUBELY}} .qubely-mediacard-title {color: {{titleColor}};}'
            }
        ]
    },
    titleColorHover: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-block-mediacard:hover .qubely-mediacard-title {color: {{titleColorHover}};}' }] },
    titleSpacing: { type: 'object', default: { md: 10, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-mediacard-title {margin-bottom: {{titleSpacing}};}' }] },

    //Content
    enableContent: { type: 'boolean', default: true },
    content: {
        type: 'string',
        source: 'html',
        selector: '.qubely-mediacard-text',
        default: 'There’s no easier way to add innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.'
    },
    contentAlignment: {
        type: 'object', default: { md: 'left' },
        style: [
            {
                condition: [
                    { key: 'enableContent', relation: '==', value: true }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-text {text-align: {{contentAlignment}};}'
            }
        ]
    },
    contentTypography: {
        type: 'object',
        default: {
            openTypography: 1,
            family: 'Helvetica',
            type: 'sans-serif',
            size: {
                md: 16,
                unit: 'px'
            },
            height: {
                md: '24',
                unit: 'px'
            }
        },
        style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{QUBELY}} .qubely-mediacard-text' }]
    },
    contentColor: {
        type: 'string',
        default: '#9B9B9B',
        style: [
            {
                condition: [{ key: 'enableContent', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-mediacard-text {color: {{contentColor}};}'
            }]
    },
    contentColorHover: { type: 'string', default: '', style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{QUBELY}} .qubely-block-mediacard:hover .qubely-mediacard-text {color: {{contentColorHover}};}' }] },
    contentPadding: { type: 'object', default: {}, style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{QUBELY}} .qubely-mediacard-body' }] },
    contentSpacing: {
        type: 'object', default: { md: 10, unit: 'px' },
        style: [
            {
                condition: [{ key: 'enableButton', relation: '==', value: true }, { key: 'enableContent', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-mediacard-body .qubely-mediacard-text {margin-bottom: {{contentSpacing}};}'
            },
            {
                condition: [
                    { key: 'enableButton', relation: '==', value: false },
                    { key: 'enableContent', relation: '==', value: true }
                ],
                selector: '{{QUBELY}} .qubely-mediacard-body .qubely-mediacard-text {margin-bottom: 0;}'
            },
        ]
    },

    // Badge__
    enableBadge: { type: 'boolean', default: false },
    badge: { type: 'string', default: 'New' },
    badgeStyle: {
        type: 'number',
        default: 1,
        style: [
            {
                condition: [
                    { key: 'badgeStyle', relation: '!=', value: 3 }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard {overflow: hidden;}'
            }
        ]
    },
    badgePosition: {
        type: 'string',
        default: 'left',
        style: [
            {
                condition: [
                    { key: 'badgeStyle', relation: '==', value: 1 },
                    { key: 'badgePosition', relation: '==', value: 'left' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {left: -73px; transform: rotate(-45deg);}'
            },
            {
                condition: [
                    { key: 'badgeStyle', relation: '==', value: 1 },
                    { key: 'badgePosition', relation: '==', value: 'right' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {right: -73px; transform: rotate(45deg);}'
            },
            {
                condition: [
                    { key: 'badgeStyle', relation: '==', value: 2 },
                    { key: 'badgePosition', relation: '==', value: 'left' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {left: -50px; transform: rotate(-45deg);}'
            },
            {
                condition: [
                    { key: 'badgeStyle', relation: '==', value: 2 },
                    { key: 'badgePosition', relation: '==', value: 'right' }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {right: -50px; transform: rotate(45deg);}'
            },
        ]
    },
    badgeSize: {
        type: 'string',
        default: 'regular'
    },
    badgeSpacing: {
        type: 'object',
        default: {
            md: 20,
            unit: 'px'
        },
        style:
            [
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 3 },
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {margin-top: {{badgeSpacing}};}'
                },
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 5 },
                        { key: 'badgePosition', relation: '==', value: 'left' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {left: {{badgeSpacing}};}'
                },
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 5 },
                        { key: 'badgePosition', relation: '==', value: 'right' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {right: {{badgeSpacing}};}'
                },
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 6 },
                        { key: 'badgePosition', relation: '==', value: 'left' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {left: {{badgeSpacing}};}'
                },
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 6 },
                        { key: 'badgePosition', relation: '==', value: 'right' }
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {right: {{badgeSpacing}};}'
                }
            ]
    },
    badgeSpacingTop: {
        type: 'object',
        default: {
            md: 20,
            unit: 'px'
        },
        style:
            [
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 5 }
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {top: {{badgeSpacingTop}};}'
                }
            ]
    },
    badgeBg: {
        type: 'string',
        default: '#50E3C2',
        style:
            [
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true }
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge {background-color: {{badgeBg}};}'
                },
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 3 }
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge::before {border-color: {{badgeBg}} {{badgeBg}} transparent transparent;} {{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge::after {border-color: {{badgeBg}} transparent transparent {{badgeBg}};}'
                },
                {
                    condition: [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 6 }
                    ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge::before {border-color: {{badgeBg}} {{badgeBg}} transparent {{badgeBg}};}'
                }
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
                            { key: 'enableBadge', relation: '==', value: true }
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
                            { key: 'enableBadge', relation: '==', value: true }
                        ],
                    selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge'
                }
            ]
    },

    badgeRadius: {
        type: 'object',
        default: {
            paddingType: 'global',
        },
        style: [
            {
                condition:
                    [
                        { key: 'enableBadge', relation: '==', value: true },
                        { key: 'badgeStyle', relation: '==', value: 5 }
                    ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-badge'
            }
        ]
    },

    // Body
    bgColor: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard' }] },
    bgColorHover: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard:hover' }] },
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
    bgBorderColorHover: { type: 'string', default: '#e5e5e5', style: [{ selector: '{{QUBELY}} .qubely-block-mediacard:hover { border-color: {{bgBorderColorHover}};}' }] },
    bgShadow: { type: 'object', default: { color: '' }, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard' }] },
    bgShadowHover: { type: 'object', default: { color: '' }, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard:hover' }] },






    // Card
    cardBackgroundColor: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-body' }] },
    cardBgPadding: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-body' }] },
    cardBgBorder: {
        type: 'object',
        default: {
            paddingType: 'global'
        },
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-body'
            }
        ]
    },
    cardBgBorderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global',

        },
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-body'
            },
        ]
    },
    cardBgShadow: { type: 'object', default: { color: '' }, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-body' }] },



};