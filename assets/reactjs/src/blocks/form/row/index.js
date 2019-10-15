
import './style.scss'
import Save from './save'
import Edit from './edit'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/form-row', {
    title: __('Form Row'),
    category: 'qubely',
    parent: ['qubely/form'],
    supports: {
        inserter: false,
        reusable: false,
        html: false,
    },
    icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-form.svg'} alt={__('Form')} />,
    attributes: {
        uniqueId: {
            type: 'string',
            default: ''
        },
        parentClientId: {
            type: 'string',
            default: ''
        },
    },
    edit: Edit,
    save: Save
})