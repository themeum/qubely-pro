const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents

import './style.scss'

import Edit from './Edit'

registerBlockType('qubely/woocarousel', {
    title: __('Woo Carousel'),
    category: 'qubely',
    description: __('Showcase woocommerce products with Qubely Woo Carousel'),
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-woo-carousel.svg'} alt={__('wooproducts')} />,
    keywords: [
        __('woo'),
        __('woocommerce'),
        __('Carousel'),
        __('All Products')
    ],
    supports: {
        align: ['center', 'wide', 'full'],
    },
    edit: Edit,
    save: function () {
        return null;
    }
});
