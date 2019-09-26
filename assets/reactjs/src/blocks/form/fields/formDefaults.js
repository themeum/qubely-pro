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
        id: { type: 'number', default: 1, },
        label: {
            type: 'string',
            default: null,
        },
        required: {
            type: 'boolean',
            default: false,
        }
    }
}
export default FieldDefaults