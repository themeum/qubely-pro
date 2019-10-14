
import './style.scss'
import Save from './save'
import Edit from './edit'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const {
    HelperFunction: {
        parseResponsiveViewPort
    }

} = wp.qubelyComponents

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
        uniqueId: {
            type: 'string',
            default: ''
        },
        fieldSize: {
            type: 'string',
            default: 'large',
        },
        width: {
            type: 'object',
            default: {
                md: 50,
                sm: 50,
                xs: 100,
                unit: '%',
                device: 'md'
            },
            style: [
                {
                    condition: [
                        { key: 'fieldSize', relation: '==', value: 'large' }
                    ],
                    selector: '{{QUBELY}}.qubely-form-field-front.qubely-large {flex:90%;max-width:90%;}'
                },
                {
                    condition: [
                        { key: 'fieldSize', relation: '==', value: 'small' }
                    ],
                    selector: '{{QUBELY}}.qubely-form-field-front.qubely-small {flex:25%;max-width:25%;}'
                },
                {
                    condition: [
                        { key: 'fieldSize', relation: '==', value: 'medium' }
                    ],
                    selector: '{{QUBELY}}.qubely-form-field-front.qubely-medium {flex:45%;max-width:45%;}'
                },
                {
                    condition: [
                        { key: 'fieldSize', relation: '==', value: 'custom' }
                    ],
                    selector: '{{QUBELY}}.qubely-form-field-front.qubely-custom {flex:{{width}};max-width:{{width}};}'
                },
            ]
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
                    selector: '{{QUBELY}}.qubely-form-field-front {margin-right:{{gutter}};}'
                }
            ]
        },
    },
    getEditWrapperProps(attributes) {
        const { fieldSize, width } = attributes;
        if (Number.isFinite(width)) {
            return {
                style: {
                    width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `90%` : width[parseResponsiveViewPort] + '%',
                }
            }
        }
    },
    edit: Edit,
    save: Save
})