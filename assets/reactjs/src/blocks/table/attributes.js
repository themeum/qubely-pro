const {
    gloalSettings: {
        globalAttributes
    },
    QubelyButton: {
        buttonAttributes
    },
    QubelyList: {
        listAttributes
    }
} = wp.qubelyComponents;

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
    tableHeader: {
        type: 'boolean',
        default: false
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
            { selector: '{{QUBELY}} .qubely-block-table thead' }
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
            { selector: '{{QUBELY}} .qubely-block-table thead' }
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
            { selector: '{{QUBELY}} .qubely-block-table table' }
        ]
    },
    tableBorderRadius: {
        type: 'object',
        default: {},
        style: [
            { selector: '{{QUBELY}} .qubely-block-table table{border-radius:{{tableBorderRadius}};}' }
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
            { selector: '{{QUBELY}} .qubely-block-table tfoot' }
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
            color:'#E5E7EA',
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
                selector: '{{QUBELY}} .table-ratings:before {color: {{ratingsColor}};} {{QUBELY}} .table-ratings {color: {{ratingsColor}};}'
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
                selector: '{{QUBELY}}  .list-cell.list-wrapper {color: {{listColor}};}'
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
}
export default attributes;
