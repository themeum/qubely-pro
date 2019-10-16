
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
        gutter: {
            type: 'object',
            default: {
                md: 10,
                sm: 10,
                xs: 10,
                unit: 'px',
                device: 'md'
            },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form-row.qubely-backend .editor-inner-blocks.block-editor-inner-blocks >div {margin-left:-{{gutter}};margin-right:-{{gutter}};} {{QUBELY}} .qubely-form-row.qubely-frontend {margin-left:-{{gutter}};margin-right:-{{gutter}};} {{QUBELY}} .qubely-form-row.qubely-backend .editor-block-list__layout.block-editor-block-list__layout>div,{{QUBELY}} .qubely-form-row.qubely-frontend .qubely-form-field-front{padding-left:{{gutter}};padding-right:{{gutter}};} '
                }
            ]
        },
        spacer: {
            type: 'object',
            default: {
                md: 10,
                sm: 10,
                xs: 10,
                unit: 'px',
                device: 'md'
            },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form-row.qubely-backend .editor-inner-blocks.block-editor-inner-blocks >div {margin-top:-{{spacer}};margin-bottom:-{{spacer}};} {{QUBELY}} .qubely-form-row.qubely-frontend {margin-top:-{{spacer}};margin-bottom:-{{spacer}};} {{QUBELY}} .qubely-form-row.qubely-backend .editor-block-list__layout.block-editor-block-list__layout>div,{{QUBELY}} .qubely-form-row.qubely-frontend .qubely-form-field-front{padding-top:{{spacer}};padding-bottom:{{spacer}};} '
                }
            ]
        },
    },
    edit: Edit,
    save: Save
})