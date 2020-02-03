import './style.scss'
import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents

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

        sourceOfCopiedStyle: { type: 'boolean', default: false }
    },
    edit: Edit,
    save: Save,
});