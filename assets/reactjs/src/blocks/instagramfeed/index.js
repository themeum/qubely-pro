
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
	
	edit: Edit,
	save: function( props ) {
		return null;
	}
});