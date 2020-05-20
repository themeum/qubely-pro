import './style.scss'
import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { gloalSettings: { globalAttributes }, QubelyButton: { buttonAttributes }, QubelyList: { listAttributes }  } = wp.qubelyComponents


registerBlockType('qubely/table', {
    title: __('Table'),
    description: __('Advance table blocks.'),
    category: 'qubely',
    icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-button.svg'} alt={__('Button Block')} />,
    supports: {
        align: ['center', 'wide', 'full'],
    },
    keywords: [__('countdown'), __('count'), __('timer')],
    example: {
        attributes: {},
    },
    attributes: {
        uniqueId: { type: 'string', default: '' },
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
        // Global
        ...globalAttributes,
        ...buttonAttributes,
        ...listAttributes,
        sourceOfCopiedStyle: { type: 'boolean', default: false }
    },
    edit: Edit,
    save: Save,
});