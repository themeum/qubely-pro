
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents;

const attributes = {
    uniqueId: {
        type: 'string',
        default: ''
    },
    spacer: {
        type: 'object',
        default: {
            spaceTop: {
                md: '10',
                unit: "px"
            },
            spaceBottom: {
                md: '10',
                unit: "px"
            }
        },
        style: [{ selector: '{{QUBELY}}' }]
    },
    layout: {
        type: 'number',
        default: 1
    },
    // Global
    ...globalAttributes,
    date: {
        type: 'string',
        default: null
    },
    startDate: {
        type: 'string',
        default: null
    },
    sourceOfCopiedStyle: {
        type: 'boolean',
        default: false
    },

    justifyAlign: {
        type: 'string',
        default: 'flex-start',
        style: [{
            selector: '{{QUBELY}} .qubely-countdown{justify-content: {{justifyAlign}}}'
        }]
    },

    // Container or Circle
    strokeLinecap: {
        type: 'string',
        default: 'round',
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 2
            }],
            selector: '{{QUBELY}} .qubely-countdown-cirlce-forground{stroke-linecap: {{strokeLinecap}}}'
        }]
    },
    circleTransition: {
        type: 'boolean',
        default: true,
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 2
            }],
            selector: '{{QUBELY}} .qubely-countdown-cirlce-forground{transition: stroke-dashoffset 300ms}'
        }]
    },
    background: {
        type: 'object',
        default: {
            openColor: 1,
            type: 'color',
            color: '#f5f5f5'
        },
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 1
            }],
            selector: '{{QUBELY}} .qubely-countdown-item'
        }]
    },
    fill: {
        type: 'object',
        default: {
            openColor: 1,
            type: 'gradient',
            color: '#007bff',
            gradient: {
                type: 'linear',
                color1: '#25b5e1',
                color2: '#1f8493',
                direction: '47',
                start: '0',
                stop: '100'
            }
        }
    },
    emptyFill: {
        type: 'string',
        default: '#f7f7f7'
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
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 1
            }],
            selector: '{{QUBELY}} .qubely-countdown-item'
        }]
    },

    minWidth: {
        type: 'object',
        default: {
            md: 0,
            unit: 'px'
        },
        style: [{
            selector:
                '{{QUBELY}} .qubely-countdown-item{min-width: {{minWidth}};} '
        }]
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
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 1
            }],
            selector: '{{QUBELY}} .qubely-countdown-item'
        }]
    },
    border: {
        type: 'object',
        default: {},
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 1
            }],
            selector: '{{QUBELY}} .qubely-countdown-item'
        }]
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
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 1
            }],
            selector: '{{QUBELY}} .qubely-countdown-item'
        }]
    },

    size: {
        type: 'object',
        default: {
            md: 180
        },
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 2
            }],
            selector: '{{QUBELY}} .qubely-countdown-svg-wrap{height: {{size}}px; width: {{size}}px}'
        }]
    },

    thickness: {
        type: 'object',
        default: {
            md: 15
        },
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 2
            }],
            selector: '{{QUBELY}} .hello'
        }]
    },

    thicknessBg: {
        type: 'object',
        default: {
            md: 15
        },
        style: [{
            condition: [{
                key: 'layout',
                relation: '==',
                value: 2
            }],
            selector: '{{QUBELY}} .hello'
        }]
    },

    //SEPARATOR
    separatorType: {
        type: 'string',
        default: 'none'
    },

    separatorSize: {
        type: 'object',
        default: {
            md: 30
        },
        style: [{
            selector:
                '{{QUBELY}} .qubely-countdown.qubely-item-separator-colon .qubely-countdown-item::after{font-size: {{separatorSize}}px}' +
                '{{QUBELY}} .qubely-countdown.qubely-item-separator-line .qubely-countdown-item::after{height: {{separatorSize}}%}'
        }]
    },
    separatorSizeX: {
        type: 'object',
        default: {
            md: 2
        },
        style: [{
            selector: '{{QUBELY}} .qubely-countdown.qubely-item-separator-line .qubely-countdown-item::after{width: {{separatorSizeX}}px}'
        }]
    },
    separatorOffset: {
        type: 'object',
        default: {
            md: 50
        },
        style: [{
            selector: '{{QUBELY}} .qubely-countdown .qubely-countdown-item::after{top: {{separatorOffset}}% !important}'
        }]
    },
    separatorColor: {
        type: 'string',
        default: '#000',
        style: [{
            selector:
                '{{QUBELY}} .qubely-countdown.qubely-item-separator-colon .qubely-countdown-item::after{color: {{separatorColor}}}' +
                '{{QUBELY}} .qubely-countdown.qubely-item-separator-line .qubely-countdown-item::after{background-color: {{separatorColor}}}'
        }]
    },
    //NUMBER
    numberColor: {
        type: 'string',
        default: '#000',
        style: [{
            selector: '{{QUBELY}} .qubely-countdown-item h5  {color: {{numberColor}};}'
        }]
    },
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
    enableLabel: {
        type: 'boolean',
        default: true
    },
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