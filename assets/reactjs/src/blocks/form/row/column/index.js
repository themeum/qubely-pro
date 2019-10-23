
// import './style.scss'
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
        parentClientId: {
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
                    selector: '{{QUBELY}}.qubely-form-field-front.qubely-large {flex:100%;max-width:100%;}'
                },
                {
                    condition: [
                        { key: 'fieldSize', relation: '==', value: 'small' }
                    ],
                    selector: '{{QUBELY}}.qubely-form-field-front.qubely-small {flex:30%;max-width:30%;}'
                },
                {
                    condition: [
                        { key: 'fieldSize', relation: '==', value: 'medium' }
                    ],
                    selector: '{{QUBELY}}.qubely-form-field-front.qubely-medium {flex:50%;max-width:50%;}'
                },
                {
                    condition: [
                        { key: 'fieldSize', relation: '==', value: 'custom' }
                    ],
                    selector: '{{QUBELY}}.qubely-form-field-front.qubely-custom {flex:{{width}};max-width:{{width}};}'
                },
            ]
        }
    },
    getEditWrapperProps(attributes) {
        const { fieldSize, width } = attributes;
        let device = window.innerWidth <= 1199 ? window.innerWidth <= 991 ? 'xs' : 'sm' : 'md'
        if (Number.isFinite(width)) {
            return {
                style: {
                    width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `100%` : width[device] + '%',
                }
            }
        }
    },
    edit: Edit,
    save: Save
})