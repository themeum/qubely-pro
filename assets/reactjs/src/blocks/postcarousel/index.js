
import './style.scss'
import Edit from './Edit'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/postcarousel', {
	title: __('Post Carousel'),
	description: 'Fetch blog posts and display them beautifully in grid or list views with Qubely Postgrid Block.',
	icon: 'image-flip-horizontal',
    category: 'qubely',
    keywords: [__('Post'), __('Blog Post Carousel')],
	edit: Edit,
	
	save: function( props ) {
		return null;
	}

});