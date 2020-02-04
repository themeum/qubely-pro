
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents;
const defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate() + (1 + 7 - defaultDate.getDay()) % 7);
const attributes = {
    uniqueId: {
        type: 'string',
        default: ''
    },
    // Global
    ...globalAttributes,
    date: {
        type: 'string',
        default: defaultDate
    },
    sourceOfCopiedStyle: {
        type: 'boolean',
        default: false
    },
    background: {
        type: 'object',
        default: {
            openColor: 1,
            type: "color",
            color: "#f5f5f5"
        },
        style: [{ selector: '{{QUBELY}} .qubely-countdown-item' }]
    },
    padding: {
        type: 'object',
        default: {
            openPadding: 1,
            paddingType: 'global',
            global: { md: '30' },
            custom: { md: '30 30 30 30' },
            unit: 'px'
        },
        style: [{ selector: '{{QUBELY}} .qubely-countdown-item' }]
    },
    borderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global',
            global: {
                md: 4
            },
            unit: 'px'
        },
        style: [
            { selector: '{{QUBELY}} .qubely-countdown-item' }
        ]
    },
    border: {
        type: 'object',
        default: {},
        style: [
            { selector: '{{QUBELY}} .qubely-countdown-item' }
        ]
    },
    boxShadow: {
        type: 'object',
        default: {
            openShadow: 1,
            horizontal: 1,
            vertical: 1,
            blur: 2,
            color: 'rgba(0, 0, 0, .2)',
            spread: 0
        },
        style: [{ selector: '{{QUBELY}} .qubely-countdown-item' }]
    },

}

export default attributes;