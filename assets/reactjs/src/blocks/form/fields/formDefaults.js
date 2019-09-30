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
        parentId: {
            type: 'string',
            default: ''
        },
        width: {
            type: 'number',
            default: 100,
        },
        label: {
            type: 'string',
            default: 'label',
        },
        required: {
            type: 'boolean',
            default: false,
        }
    }
}
export default FieldDefaults