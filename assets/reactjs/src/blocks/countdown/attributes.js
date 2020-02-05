
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents;
const defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate() + (1 + 7 - defaultDate.getDay()) % 7);
const attributes = {
    uniqueId: {
        type: 'string',
        default: ''
    },
    layout: {
        type: 'number',
        default: 1
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
            type: 'color',
            color: '#f5f5f5'
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
    spaceBetween: {
        type: 'object',
        default: {
            md: 10,
            unit: 'px'
        },
        style: [{
            selector:
                '{{QUBELY}} .qubely-countdown-item{margin-left: {{spaceBetween}}; margin-bottom: {{spaceBetween}}} ' +
                '{{QUBELY}} .qubely-countdown{margin-left: -{{spaceBetween}}}' +
                '{{QUBELY}} .qubely-countdown .qubely-countdown-item::after{right: calc(-{{spaceBetween}} / 2) !important}'
        }]
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


    //SEPARATOR
    separatorType: {
        type: 'string',
        default: 'colon'
    },
    separatorTypo: {
        type: 'object',
        default: {
            openTypography: 0,
            size: {
                unit: 'px'
            }
        },
        style: [{
            selector: '{{QUBELY}} '
        }]
    },
    separatorSize: {
        type: 'object',
        default: {
            md: 40,
            unit: 'px'
        }
    },
    separatorColor: {
        type: 'string',
        default: '#000',
        style: [{
            selector: '{{QUBELY}}  {color: {{separatorColor}};}'
        }]
    },
    //NUMBER
    numberTypo: {
        type: 'object',
        default: {
            openTypography: 1,
            size: {
                md: 60,
                unit: 'px'
            }
        },
        style: [{
            selector: '{{QUBELY}} .qubely-countdown-item h5'
        }]
    },

    //LABEL
    labelView: {
        type: 'string',
        default: 'inside'
    },
    labelPosition: {
        type: 'string',
        default: 'top'
    },
    enableDay: {
        type: 'boolean',
        default: true
    },
    enableHour: {
        type: 'boolean',
        default: true
    },
    enableMinute: {
        type: 'boolean',
        default: true
    },
    enableSecond: {
        type: 'boolean',
        default: true
    },
    dayText: {
        type: 'string',
        default: 'Days'
    },
    hourText: {
        type: 'string',
        default: 'Hours'
    },
    minuteText: {
        type: 'string',
        default: 'Minutes'
    },
    secondText: {
        type: 'string',
        default: 'Seconds'
    },
    labelSpacing: {
        type: 'number',
        default: 10
    },
    labelColor: {
        type: 'string',
        default: '#000',
        style: [{
            selector: '{{QUBELY}} .qubely-countdown-item p  {color: {{labelColor}};}'
        }]
    },
    labelTypo: {
        type: 'object',
        default: {
            openTypography: 0,
            size: {
                unit: 'px'
            }
        },
        style: [{
            selector: '{{QUBELY}} .qubely-countdown-item p'
        }]
    },
}

export default attributes;