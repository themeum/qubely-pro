
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
    example: {
        attributes: {
            showExcerpt: false,
            showDates: false,
            style: 4,
            overlayBorderRadius: {
                openBorderRadius: true,
                unit : 'px',
                radiusType: 'global',
                global: {
                    md: 10
                },
            },
            titleTypography: {
                openTypography: 1,
                size: {
                    md: 16,
                    unit: 'px'
                }
            },
        },
    },

	edit: Edit,
	
	save: function( props ) {
		return null;
	}

});