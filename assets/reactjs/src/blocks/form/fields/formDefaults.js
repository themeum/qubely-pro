const FieldDefaults = {
    category: 'qubely',
    // parent: ['qubely/form','qubely/form-column'],
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


    }
}
export default FieldDefaults