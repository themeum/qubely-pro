/**
 * Internal dependencies
 */
import Edit from './Edit';
import Save from './Save';
import './style.scss';
import {
    attributes,
    defaultFormItems,
} from './attributes';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


registerBlockType('qubely/form', {
    title: __('Form Builder'),
    category: 'qubely',
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-form.svg'} alt={__('Form')} />,
    description: 'Create functional Form using Qubely Form block.',
    keywords: [
        __('Form'),
        __('Form Builder'),
        __('Builder')
    ],
    supports: {
        align: ['center', 'wide', 'full'],
    },
    example: {
        attributes: {
            formItems: defaultFormItems,
        },
        innerBlocks: [
            {
                name: 'qubely/image',
                attributes: {
                    image: { url: 'http://qubely.io/wp-content/uploads/qubely-assets/demo/form-builder.png' },
                },
            },
        ]
    },
    attributes,
    edit: Edit,
    save: Save,
});
