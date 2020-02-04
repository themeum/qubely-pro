import './style.scss'
import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents

const defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate() + (1 + 7 - defaultDate.getDay()) % 7)

registerBlockType('qubely/countdown', {
    title: __('Countdown'),
    description: __('Create stylish countdown blocks with Qubely Buttons.'),
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
        // Global
        ...globalAttributes,
        date: {
            type: 'string',
            default: defaultDate
        },
        sourceOfCopiedStyle: { type: 'boolean', default: false }
    },
    edit: Edit,
    save: Save,
});