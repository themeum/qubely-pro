import './style.scss'
import Edit from './Edit'
import Save from './Save';
import attributes from './attributes';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks


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
    attributes,
    edit: Edit,
    save: Save,
});