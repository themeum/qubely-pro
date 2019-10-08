const FieldDefaults = {
    category: 'qubely',
    parent: ['qubely/form'],
    supports: {
        reusable: false,
        html: false,
        inserter: false,
    },
    attributes: {
        uniqueId: {
            type: 'string',
            default: ''
        },
        type: {
            type: 'string',
            default: null
        },
        width: {
            type: 'number',
            default: 90,
        },
        fieldSize: {
            type: 'string',
            default: 'large',
        },
        label: {
            type: 'string',
            default: 'label',
        },
        instruction: {
            type: 'string',
            default: null,
        },
        required: {
            type: 'boolean',
            default: false,
        },

        //label settings
        labelTypography: {
            type: 'object',
            default: {},
            style: [
                { selector: '{{QUBELY}} .qubely-form-field-label' }
            ]
        },
        labelColor: {
            type: 'string',
            default: '',
            style: [
                { selector: '{{QUBELY}} .qubely-form-field-label { color:{{labelColor}}; }' }
            ]
        },
        labelAlignment: {
            type: 'string',
            default: 'top',
            // style: []
        }

    }
}
export default FieldDefaults