
import './style.scss'
import Save from './save'
import Edit from './edit'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/form-column', {
    title: __('Form Column'),
    category: 'qubely',
    parent: ['qubely/form-row'],
    supports: {
        inserter: false,
		reusable: false,
		html: false,
    },
    icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-form.svg'} alt={__('Form')} />,
    attributes: {
        uniqueId: { type: 'string', default: '' },
    },
    edit: Edit,
    save: Save
})