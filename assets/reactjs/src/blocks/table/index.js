import './style.scss';
import Edit from './Edit';
import Save from './Save';
import attributes from './attributes';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


registerBlockType('qubely/table', {
    title: __('Table'),
    description: __('Organize/focus data with Qubely table blocks.'),
    category: 'qubely',
    icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-button.svg'} alt={__('Button Block')} />,
    supports: {
        align: ['center', 'wide', 'full'],
    },
    keywords: [
        __('Table'),
        __('Builder'),
        __('table builder')
    ],
    example: {
        attributes: {},
    },
    attributes,
    edit: Edit,
    save: Save,
});