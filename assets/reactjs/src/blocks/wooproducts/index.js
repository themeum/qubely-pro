const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents

import './style.scss'

import Edit from './Edit'
import Save from './Save'

const attributes = {
    uniqueId: {
        type: 'string',
        default: ''
    },
    productsPerPage: {
        type: 'number',
        default: 4
    },
    selectedCatagories: {
        type: 'array',
        default: []
    },
    orderby: {
        type: 'string',
        default: 'date',
    },
    productsStatus: {
        type: 'string',
        default: null,
    },
    //layout attributes 
    columns: {
        type: 'number',
        default: 3
    },
    layout: {
        type: 'number',
        default: 2,
    },
    style: {
        type: 'number',
        default: 2,
    },

    //global
    showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
    showContextMenu: { type: 'boolean', default: true },
    ...globalAttributes,
}

registerBlockType('qubely/wooproducts', {
    title: __('woo Products'),
    category: 'qubely',
    description: __('Showcase woocommerce products'),
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-gallery.svg'} alt={__('Gallery')} />,
    keywords: [
        __('woo'),
        __('woocommerce'),
        __('products')
    ],
    supports: {
        align: ['center', 'wide', 'full'],
    },
    attributes,
    edit: Edit,
    // save: Save,
    save: function (props) {
        return null;
    }
});
