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


    }
}
export default FieldDefaults