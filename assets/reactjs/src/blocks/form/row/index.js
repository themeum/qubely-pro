
import './style.scss'
import Save from './Save'
import Edit from './Edit'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/form-row', {
    title: __('Form Row'),
    category: 'qubely',
    parent: ['qubely/form'],
    supports: {
        // inserter: false,
        // reusable: false,
        html: false,
        className: false
    },
    icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-form.svg'} alt={__('Form')} />,
    attributes: {
        uniqueId: { type: 'string', default: '' },
    },
    edit: Edit,
    save: Save
})