const FieldDefaults = {
    category: 'qubely',
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
        parentClientId: {
            type: 'string',
            default: ''
        },
        type: {
            type: 'string',
            default: null
        },
        showLabel: {
            type: 'boolean',
            default: true
        },
        label: {
            type: 'string',
            default: 'label',
        },
        labelAlignment: {
            type: 'string',
            default: 'top',
        },
        instruction: {
            type: 'string',
            default: null,
        },
        required: {
            type: 'boolean',
            default: false,
        },
    }
}
export default FieldDefaults