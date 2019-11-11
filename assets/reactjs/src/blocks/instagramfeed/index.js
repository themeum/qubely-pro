
import './style.scss'
import Edit from './Edit'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/instagramfeed', {
	title: __('Instagram Feed'),
	description: __('Fetch Instagram feed block'),
	icon: 'instagram',
    category: 'qubely',
	keywords: [__('Instagram'), __('Instagram Feed')],
	

	// Attribute
	// attributes: {
		// token: {
		// 	type: 'string',
		// 	default: '',
		// },
		
		// column: {
		// 	type: 'number',
		// 	default: 3,
		// },
		// numberimages: {
		// 	type: 'number',
		// 	default: 9,
		// },
	// 	hasEqualImages: {
	// 		type: 'boolean',
	// 		default: false,
	// 	},
	// 	thumbs: {
	// 		type: 'array',
	// 		default: [],
	// 	},
	// 	gridGap: {
	// 		type: 'number',
	// 		default: 0,
	// 	},
	// 	showProfile: {
	// 		type: 'boolean',
	// 		default: false,
	// 	},
	// 	profile: {
	// 		type: 'array',
	// 		default: [],
	// 	},
	// },

	edit: Edit,
	save: function( props ) {
		return null;
	}
});