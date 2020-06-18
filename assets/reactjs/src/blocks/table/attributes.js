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
    tableFooter: {
        type: 'boolean',
        default: false
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
    collapsableBorder: {
        type: 'boolean',
        default: true
    },
    tableRadius: {
        type: 'object',
        default: {
        },
        style: [
            { selector: '{{QUBELY}} .qubely-block-table' }
        ]
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
            custom: { md: "10 0 10 15" },
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
    cellBorder: {
        type: 'object',
        default: {
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
        default: [
            /*{
                cells: [
                    {
                        content: 'Table 1',
                        tag: 'td',
                        scope: undefined,
                        align: undefined
                    },
                    {
                        content: 'Table 1',
                        tag: 'td',
                        scope: undefined,
                        align: undefined
                    }
                ]
            },
            {
                cells: [
                    {
                        content: 'Table 1',
                        tag: 'td',
                        scope: undefined,
                        align: undefined
                    },
                    {
                        content: 'Table 1',
                        tag: 'td',
                        scope: undefined,
                        align: undefined
                    }
                ]
            }*/
        ],
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
        default: '40px',
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
    imageSize: {
        type: 'string',
        default: '64px',
        // style: [
        //     {
        //         condition: [{ key: 'imageSize', relation: '!=', value: 'custom' }],
        //         // selector: '{{QUBELY}} .icon-cell.icon-wrapper .icon {font-size:{{imageSize}};}'
        //     }
        // ]
    },
    imageCustomSize: {
        type: 'object',
        default: {
            md: 64,
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
        default: '64px',
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
