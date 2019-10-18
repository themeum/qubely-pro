
import './style.scss'
import Edit from './Edit'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/postcarousel', {
	title: __('Post Carousel'),
	description: 'Blog post carousel',
    icon: 'image-flip-horizontal',
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-post-carousel.svg'} alt={__('Post Carousel Block')} />,
    category: 'qubely',
    keywords: [__('Post'), __('Blog Post Carousel')],
	edit: Edit,
	
	save: function( props ) {
		return null;
	}

});