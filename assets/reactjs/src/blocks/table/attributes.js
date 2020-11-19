const {
    gloalSettings: {
        globalAttributes
    },
    QubelyList: {
        listAttributes
    }
} = wp.qubelyComponents;

const buttonAttributes = {
    buttonText: { type: 'string', default: '' },
    buttonFillType: { type: 'string', default: 'fill' },
    buttonTag: { type: 'string', default: 'a' },
    buttonUrl: { type: 'object', default: { url: '#' } },
    buttonSize: { type: 'string', default: 'medium' },
    recreateStyles: {
        type: 'boolean',
        default: true,
    },
    buttonAlignment: {
        type: 'object',
        default: { md: 'left' },
        style: [
            {
                condition: [
                    { key: 'enableButtonAlignment', relation: '==', value: true },
                ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-wrapper {text-align: {{buttonAlignment}};}',
            },
        ],
    },
    buttonWidthType: {
        type: 'string',
        default: 'auto',
        style: [
            {
                condition: [
                    { key: 'buttonWidthType', relation: '==', value: 'block' },
                ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-anchor {width:100% !important; display: -webkit-box; display: -ms-flexbox; display: flex;}',
            },
            {
                condition: [
                    { key: 'buttonWidthType', relation: '==', value: 'auto' },
                ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-anchor {width:auto !important}',
            },
            {
                condition: [
                    { key: 'buttonWidthType', relation: '==', value: 'fixed' },
                ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-anchor {display:inline-flex}',
            },
        ],
    },
    buttonWidth: {
        type: 'object',
        default: {
            md: 260,
            unit: 'px',
        },
        style: [
            {
                condition: [
                    { key: 'buttonWidthType', relation: '==', value: 'fixed' },
                ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-anchor {width: {{buttonWidth}};}',
            },
        ],
    },
    buttonPadding: {
        type: 'object',
        default: {
            openPadding: 1,
            paddingType: 'global',
            global: { md: 18 },
            custom: { md: '10 10 10 10' },
            unit: 'px',
        },
        style: [
            {
                condition: [
                    { key: 'buttonSize', relation: '==', value: 'custom' },
                ],
                selector: '{{QUBELY}} .qubely-block-btn-anchor',
            },
        ],
    },
    buttonTypography: {
        type: 'object',
        default: {},
        style: [{ selector: '{{QUBELY}} .qubely-block-btn-anchor' }],
    },
    buttonColor: {
        type: 'string',
        default: '#000',
        style: [
            {
                // condition: [
                //   { key: 'buttonFillType', relation: '==', value: 'fill' },
                // ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-wrapper:not(.button-type-outline) .qubely-block-btn-anchor { color:{{buttonColor}}; }',
            },
        ],
    },
    buttonColor2: {
        type: 'string',
        default: 'var(--qubely-color-1)',
        style: [
            {
                // condition: [
                //   { key: 'buttonFillType', relation: '!=', value: 'fill' },
                // ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-wrapper.button-type-outline .qubely-block-btn-anchor { color:{{buttonColor2}}; }',
            },
        ],
    },
    buttonHoverColor: {
        type: 'string',
        default: '#fff',
        style: [
            {
                // condition: [
                //   { key: 'buttonFillType', relation: '==', value: 'fill' },
                // ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-wrapper:not(.button-type-outline) .qubely-block-btn-anchor:hover { color:{{buttonHoverColor}}; }',
            },
        ],
    },
    buttonHoverColor2: {
        type: 'string',
        default: 'var(--qubely-color-2)',
        style: [
            {
                // condition: [
                //   { key: 'buttonFillType', relation: '!=', value: 'fill' },
                // ],
                selector:
                    '{{QUBELY}} .qubely-block-btn-wrapper.button-type-outline .qubely-block-btn-anchor:hover { color:{{buttonHoverColor2}}; }',
            },
        ],
    },
    buttonBgColor: {
        type: 'object',
        default: {
            type: 'color',
            openColor: 1,
            color: 'var(--qubely-color-1)',
            gradient: {
                color1: 'var(--qubely-color-2)',
                color2: 'var(--qubely-color-1)',
                type: 'linear',
                direction: 0,
                start: 0,
                stop: 100,
            },
        },
        style: [
            {
                // condition: [
                //   { key: 'buttonFillType', relation: '==', value: 'fill' },
                // ],
                selector: '{{QUBELY}} .qubely-block-btn-wrapper:not(.button-type-outline) .qubely-block-btn-anchor',
            },
        ],
    },
    buttonBgHoverColor: {
        type: 'object',
        default: {
            type: 'color',
            openColor: 1,
            color: 'var(--qubely-color-2)',
            gradient: {
                color1: 'var(--qubely-color-1)',
                color2: 'var(--qubely-color-2)',
                type: 'linear',
                direction: 0,
                start: 0,
                stop: 100,
            },
        },
        style: [
            {
                // condition: [
                //   { key: 'buttonFillType', relation: '==', value: 'fill' },
                // ],
                selector: '{{QUBELY}} .qubely-block-btn-wrapper:not(.button-type-outline) .qubely-block-btn-anchor:before',
            },
        ],
    },

    buttonBorder: {
        type: 'object',
        default: {
            openBorder: 1,
            widthType: 'global',
            global: 1,
            color: 'var(--qubely-color-1)',
            type: 'solid',
            unit: 'px',
        },
        style: [{ selector: '{{QUBELY}} .qubely-block-btn-anchor' }],
    },

    buttonBorderHoverColor: {
        type: 'string',
        default: 'var(--qubely-color-2)',
        style: [
            {
                selector:
                    '{{QUBELY}} .qubely-block-btn-anchor:hover {border-color: {{buttonBorderHoverColor}};}',
            },
        ],
    },

    buttonBorderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global',
            global: {
                md: 4,
            },
            unit: 'px',
        },
        style: [{ selector: '{{QUBELY}} .qubely-block-btn-anchor' }],
    },
    buttonShadow: {
        type: 'object',
        default: {},
        style: [{ selector: '{{QUBELY}} .qubely-block-btn-anchor' }],
    },
    buttonHoverShadow: {
        type: 'object',
        default: {},
        style: [{ selector: '{{QUBELY}} .qubely-block-btn-anchor:hover' }],
    },
    buttonIconName: { type: 'string', default: '' },
    buttonIconPosition: { type: 'string', default: 'right' },
    buttonIconSize: {
        type: 'object',
        default: {},
        style: [
            {
                condition: [
                    { key: 'buttonIconName', relation: '!=', value: '' },
                ],
                selector:
                    '{{QUBELY}} .qubely-btn-icon {font-size: {{buttonIconSize}}}',
            },
        ],
    },
    buttonIconGap: {
        type: 'object',
        default: { md: 8, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'buttonIconName', relation: '!=', value: '' },
                    { key: 'buttonIconPosition', relation: '==', value: 'left' },
                ],
                selector:
                    '{{QUBELY}} .qubely-btn-icon { margin-right: {{buttonIconGap}}; }',
            },
            {
                condition: [
                    { key: 'buttonIconName', relation: '!=', value: '' },
                    { key: 'buttonIconPosition', relation: '==', value: 'right' },
                ],
                selector:
                    '{{QUBELY}} .qubely-btn-icon { margin-left: {{buttonIconGap}}; }',
            },
        ],
    },
    buttonGap: {
        type: 'object',
        default: { md: 8, unit: 'px' },
        style: [
            {
                selector:
                    '{{QUBELY}} .qubely-block-btn-wrapper { margin-bottom: {{buttonGap}}; }',
            },
        ],
    },
};

const attributes = {
    uniqueId: {
        type: 'string',
        default: ''
    },
    // Global
    ...globalAttributes,
    ...buttonAttributes,
    ...listAttributes,
    layout: {
        type: 'string',
        default: 'bordered'
    },
    align: {
        type: 'string',
        default: 'wide',
    },
    tableHeader: {
        type: 'boolean',
        default: true,
    },
    stripeColor: {
        type: 'string',
        default: '#e8e8e8',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'row-stripe' }
                ],
                selector: '{{QUBELY}} .qubely-block-table.row-stripe table tr:not(.head-row):nth-child(odd){background: {{stripeColor}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'column-stripe' }
                ],
                selector: '{{QUBELY}} .qubely-block-table.column-stripe tr td:nth-child(odd){background: {{stripeColor}};}'
            }
        ]
    },
    headerBg: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table .qubely-table-figure .qubely-table thead tr.head-row th.qubely-block-table_cell-content' }
        ]
    },
    headerTextColor: {
        type: 'string',
        default: '#000',
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-table thead tr th{color: {{headerTextColor}} !important;}'
            }
        ]
    },
    headerBorder: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table thead {border-bottom: {{headerBorder}};border-bottom-style: solid;}' }
        ]
    },
    headerBorderColor: {
        type: 'string',
        default: '',
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-table thead {border-bottom-color: {{headerBorderColor}} !important;}'
            }
        ]
    },
    headerTypo: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table thead .head-row .qubely-block-table_cell-content' }
        ]
    },
    tableFooter: {
        type: 'boolean',
        default: false
    },
    tableBoxShadow: {
        type: 'object',
        default: {
            tableBorder: true,
            border: {
                global: {
                    md: "1",
                },
                openBorder: 1,
                type: "solid",
                unit: "px",
                widthType: "global",
            }
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table table:not(.no-outer-border)' }
        ]
    },
    tableBorderRadius: {
        type: 'object',
        default: {},
        style: [
            { selector: '{{QUBELY}} .qubely-block-table table{border-radius:{{tableBorderRadius}}; overflow:hidden}' }
        ]
    },

    footerBg: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table tfoot' }
        ]
    },
    footerTextColor: {
        type: 'string',
        default: '#000',
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-table tfoot td{color: {{footerTextColor}} !important;}'
            }
        ]
    },
    footerBorder: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table tfoot{border-top: {{footerBorder}};border-top-style: solid;}' }
        ]
    },
    footerBorderColor: {
        type: 'string',
        default: '',
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-table tfoot {border-top-color: {{footerBorderColor}} !important;}'
            }
        ]
    },
    footerTypo: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table tfoot .foot-row .qubely-block-table_cell-content' }
        ]
    },
    tableMaxWdith: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table {width: {{tableMaxWdith}};}' }
        ]
    },
    fixedWithCells: {
        type: 'boolean',
        default: true
    },
    fixedCellWidth: {
        type: 'object',
        default: {
        },
        style: [
            {
                condition: [{ key: 'fixedWithCells', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-block-table table th,td{width: {{fixedCellWidth}} !important;}'
            }
        ]
    },
    horizontalBorder: {
        type: 'boolean',
        default: true
    },
    verticalBorder: {
        type: 'boolean',
        default: true
    },
    outerBoder: {
        type: 'boolean',
        default: true
    },
    cellBg: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table .qubely-block-table_cell-content' }
        ]
    },
    cellTypography: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table .qubely-block-table_cell-content' }
        ]
    },
    cellTextColor: {
        type: 'string',
        default: '#000',
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-table .qubely-block-table_cell-content {color: {{cellTextColor}};}'
            }
        ]
    },
    cellPadding: {
        type: 'object',
        default: {
            custom: { md: "10 0 10 0" },
            openPadding: 1,
            paddingType: "custom",
            unit: "px",
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table .qubely-block-table_cell-content' }
        ]
    },
    cellAlignment: {
        type: 'object',
        default: {
            md: 'center'
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table .qubely-block-table_cell-content {text-align: {{cellAlignment}}; }' }
        ]
    },
    cellVerticalPosition: {
        type: 'string',
        default: 'middle',
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-table .qubely-block-table_cell-content {vertical-align: {{cellVerticalPosition}}; }'
            }
        ]
    },
    cellBorder: {
        type: 'object',
        default: {
            global: {
                md: "1",
            },
            color: '#E5E7EA',
            openBorder: 1,
            type: "solid",
            unit: "px",
            widthType: "global",
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table .qubely-block-table_cell-content' }
        ]
    },
    recreateStyles: {
        type: 'boolean',
        default: true
    },
    buttonToggleOption: {
        type: 'boolean',
        default: false
    },
    enableButton: {
        type: 'boolean',
        default: true
    },
    spacer: {
        type: 'object',
        default: {
            spaceTop: { md: '10', unit: 'px' },
            spaceBottom: { md: '10', unit: 'px' }
        },
        style: [{ selector: '{{QUBELY}}' }]
    },
    body: {
        type: 'array',
        default: [],
        selector: 'tbody tr'
    },
    head: {
        type: 'array',
        default: [],
        selector: 'thead tr'
    },
    foot: {
        type: 'array',
        default: [],
        selector: 'tfoot tr'
    },
    ratingsColor: {
        type: 'string',
        default: '#FFB800',
        style: [
            {
                selector: '{{QUBELY}} .table-ratings {color: {{ratingsColor}};}'
            }
        ]
    },
    ratingsSize: {
        type: 'string',
        default: '90%',
        style: [
            {
                condition: [{ key: 'ratingsSize', relation: '!=', value: 'custom' }],
                selector: '{{QUBELY}} .table-ratings {font-size:{{ratingsSize}};}'
            }
        ]
    },
    ratingsCustomSize: {
        type: 'object',
        default: {
            md: 64,
            unit: 'px'
        },
        style: [
            {
                condition: [{ key: 'ratingsSize', relation: '==', value: 'custom' }],
                selector: '{{QUBELY}} .table-ratings {font-size: {{ratingsCustomSize}};}'
            }]
    },

    ratingsAlignment: {
        type: 'object',
        default: {
            md: 'center'
        },
        style: [
            { selector: '{{QUBELY}} .ratings-cell.ratings-wrapper {text-align: {{ratingsAlignment}};}' }
        ]
    },
    ratingsPadding: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .ratings-cell.ratings-wrapper' }
        ]
    },

    imageAlignment: {
        type: 'object',
        default: {
            md: 'left'
        },
        style: [
            { selector: '{{QUBELY}} .image-cell.image-wrapper {text-align: {{imageAlignment}};}' }
        ]
    },
    imageCommonSize: {
        type: 'string',
        default: '100px',
        style: [
            {
                condition: [{ key: 'imageSize', relation: '!=', value: 'custom' }],
                selector: '{{QUBELY}} .icon-cell.icon-wrapper .icon {font-size:{{imageSize}};}'
            }
        ]
    },
    imageCustomSize: {
        type: 'object',
        default: {
            md: 100,
            unit: 'px'
        },
        // style: [
        //     {
        //         condition: [{ key: 'iconSize', relation: '==', value: 'custom' }],
        //         // selector: '{{QUBELY}} .icon-cell.icon-wrapper .icon {font-size: {{iconCustomSize}};}'
        //     }]
    },
    imagePadding: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .image-cell.image-wrapper' }
        ]
    },
    imageRadius: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .image-cell.image-wrapper .qubely-image' }
        ]
    },


    iconColor: {
        type: 'string',
        default: '#000',
        style: [
            {
                selector: '{{QUBELY}}  .icon-cell.icon-wrapper .icon {color: {{iconColor}};}'
            }
        ]
    },
    iconPadding: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .icon-cell.icon-wrapper .icon i' }
        ]
    },
    iconBg: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .icon-cell.icon-wrapper .icon i' }
        ]
    },
    iconRadius: {
        type: 'String',
        default: '',
        style: [
            { selector: '{{QUBELY}} .icon-cell.icon-wrapper .icon i{border-radius:{{iconRadius}}%};' }
        ]
    },
    iconAlignment: {
        type: 'object',
        default: {
            md: 'left'
        },
        style: [
            { selector: '{{QUBELY}} .icon-cell.icon-wrapper {text-align: {{iconAlignment}};}' }
        ]
    },
    iconSize: {
        type: 'string',
        default: '40px',
        style: [
            {
                condition: [{ key: 'iconSize', relation: '!=', value: 'custom' }],
                selector: '{{QUBELY}} .icon-cell.icon-wrapper .icon {font-size:{{iconSize}};}'
            }
        ]
    },
    iconCustomSize: {
        type: 'object',
        default: {
            md: 64,
            unit: 'px'
        },
        style: [
            {
                condition: [{ key: 'iconSize', relation: '==', value: 'custom' }],
                selector: '{{QUBELY}} .icon-cell.icon-wrapper .icon {font-size: {{iconCustomSize}};}'
            }]
    },
    listColor: {
        type: 'string',
        default: '#000',
        style: [
            {
                selector: '{{QUBELY}} .qubely-block-table .qubely-table-figure .qubely-table .qubely-block-table_cell-content .list-cell.list-wrapper {color: {{listColor}};}'
            }
        ]
    },
    listIcon: {
        type: 'object',
        default: {
            name: 'check-circle-outline',
            value: 'far fa-check-circle'
        }
    },
    listIconSpacing: {
        type: 'object',
        default: {
            md: 10,
            unit: 'px'
        },
        style: [
            {
                selector: '{{QUBELY}} .list-cell.list-wrapper li::before { margin-right: {{listIconSpacing}};}'
            }
        ]
    },

    listAlignment: {
        type: 'object',
        default: {
            md: 'left'
        },
        style: [
            { selector: '{{QUBELY}} .list-cell.list-wrapper {text-align: {{listAlignment}};}' }
        ]
    },
    listPadding: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .list-cell.list-wrapper' }
        ]
    },
    qubelyStyleAttributes: {
        type: 'array',
        default: [
            'layout',
            'buttonAlignment',
            'buttonBgColor',
            'buttonBgHoverColor',
            'buttonBorder',
            'buttonBorderHoverColor',
            'buttonBorderRadius',
            'buttonColor',
            'buttonColor2',
            'buttonFillType',
            'buttonIconGap',
            'buttonPadding',
            'buttonTypography',
            'cellAlignment',
            'cellBg',
            'cellBorder',
            'tableBorderRadius',
            'cellPadding',
            'cellTextColor',
            'cellTypography',
            'cellVerticalPosition',
            'footerBg',
            'headerBg',
            'iconAlignment',
            'iconRadius',
            'iconPosition',
            'iconPadding',
            'stripeColor',
            'ratingsColor',
            'listIconSpacing',
            'imageRadius',
            'imageAlignment',
            'iconColor',
            'iconColor',
            'iconColor',
            'verticalBorder',
            'horizontalBorder',
            'outerBoder',
        ]
    }
}
export default attributes;
