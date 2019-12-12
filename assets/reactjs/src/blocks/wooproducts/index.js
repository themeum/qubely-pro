const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents

import './style.scss'

import Edit from './Edit'

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
    edit: Edit,
    // save: Save,
    save: function (props) {
        return null;
    }
});
