import './style.scss'
import Edit from './Edit'
import Save from './Save'
const { gloalSettings: { globalAttributes } } = wp.qubelyComponents

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/pieprogress', {
    title: __('Pie Progress'),
    description: 'Animated circular progress bar',
    category: 'qubely',
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-pie-progress.svg'} alt={__('Pie Progress Block')} />,
    keywords: [__('progress'), __('bar'), __('bar progress')],
    example: {
        attributes: {},
    },
    attributes: {
        uniqueId: { type: 'string', default: '' },
        layout: { type: 'string', default: 'outline' },
        alignment: {
            type: 'string',
            default: 'flex-start',
            style: [
                {
                    selector: '{{QUBELY}} {align-items: {{alignment}}}'
                }
            ]
        },
        progress: {type: 'string', default: 60 },
        speed: {type: 'string', default: 1000 },
        corner: {type: 'string', default: 'round' },
        enableIcon: {type: 'boolean', default: true },
        iconStyle: {type: 'string', default: 'percent', style: [] },
        thickness: {type: 'string', default: 11,style: [] },
        circleShrink: {type: 'string', default: 0 },
        thicknessBg: {type: 'string', default: 21,style: [] },
        fillColor: {
            type: 'object',
            default: {
                openColor: 1,
                type: 'gradient',
                color: '#25b5e1',
                gradient: {
                    type: 'linear',
                    color1: '#25b5e1',
                    color2: '#45dbca',
                    direction: '47',
                    start: '0',
                    stop: '100'
                }
            },
            style: []
        },
        size: {
            type: 'string',
            default: 255 ,
            style: [
                {
                    selector: '{{QUBELY}} .qubely-progress-parent, {{QUBELY}} .qubely-pie-progress-heading.qubely-outside{width: {{size}}px}'
                }
            ]
        },
        iconText: { type: 'string', default: 'Text' },
        background: {type: 'string', default: '#eff4f8' },
        iconName: { type: 'string', default: 'fas fa-rocket' },
        image: { type: 'object', default: {} },
        image2x: { type: 'object', default: {} },
        imageAlt: {type: 'string', default: ''},
        imageSize: {
            type: 'object',
            default: {
                md: '80',
                unit: 'px',
            },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-progress-inner-text .icon-image:not(.pie-placeholder){ max-width: {{imageSize}} }'
                }
            ]
        },
        iconSize: {
            type: 'string', default: 60,
            style: [
                {
                    condition: [
                        { key: 'iconStyle', relation: '==', value: 'icon' },
                    ],
                    selector: '{{QUBELY}} span.qubely-pie-icon{font-size: {{iconSize}}px }'
                }
            ]
        },
        iconTextColor: {
            type: 'string', default: '#062040',
            style: [
                {
                    condition: [
                        { key: 'iconStyle', relation: '!=', value: 'image' },
                    ],
                    selector: '{{QUBELY}} .qubely-progress-inner-text {color: {{iconTextColor}}}'
                }
            ]
        },
        iconTypography: {
            type: 'object',
            default: {
                family: 'Helvetica',
                weight: 300,
                type: 'sans-serif',
                openTypography: 1,
                size: {
                    md: 60,
                    unit: 'px'
                },
                height: {
                    md: 1,
                    unit: 'em'
                }
            },
            style: [
                {
                    condition: [
                        { key: 'enableIcon', relation: '==', value: true },
                        { key: 'iconStyle', relation: '!=', value: 'image' },
                    ],
                    selector: '{{QUBELY}} .qubely-progress-inner-text'
                }
            ]
        },
        enableHeading: {type: 'boolean', default: true},
        heading: {type: 'string', default: 'Updated' },
        headingColor: {
            type: 'string',
            default: '#566372',
            style: [
                {
                    selector: '{{QUBELY}} .qubely-pie-progress-heading {color: {{headingColor}} }'
                }
            ]
        },
        headingPosition: {type: 'string', default: 'inside'},
        headingSpacing: {
            type: 'string',
            default: 10,
            style: [
                {
                    selector: '{{QUBELY}} .qubely-pie-progress-heading {margin-top: {{headingSpacing}}px}'
                }
            ]
        },
        headingAlignment: {
            type: 'object',
            default: {},
            style: [
                { selector: '{{QUBELY}} .qubely-pie-progress-heading {text-align: {{headingAlignment}}; }' }
            ],
        },
        headingTypography: {
            type: 'object',
            default: {
                family: 'Helvetica',
                weight: 300,
                type: 'sans-serif',
                openTypography: 1,
                size: {
                    md: 19,
                    unit: 'px'
                },
                height: {
                    md: 1.1,
                    unit: 'em'
                }
            },
            style: [
                {
                    condition: [
                        {
                            key: 'enableHeading', relation: '==', value: true
                        }
                    ],
                    selector: '{{QUBELY}} .qubely-pie-progress-heading'
                }
            ]
         },
        progressShadow: {
            type: 'object', default: {}, style: []
        },
        circleShadow: {
            type: 'object', default: {
                blur: 3,
                color: 'rgba(100,121,130,0.43)',
                horizontal: 2,
                inset: 'inset',
                openShadow: true,
                spread: 0,
                vertical: 2
            },
            style: []
        },
        spacer: { type: 'object', default:{spaceTop: { md: '10', unit: 'px'}, spaceBottom: { md: '10', unit: 'px'}}, style: [{ selector: '{{QUBELY}}' }] },
        ...globalAttributes,
        content: {
            source: 'html',
            selector: 'h2'
        },
        sourceOfCopiedStyle: { type: 'boolean', default: false },
        qubelyStyleAttributes: {
            type: 'array',
            default: [
                'size',
                'layout',
                'corner',
                'thickness',
                'circleShrink',
                'thicknessBg',
                'fillColor',
                'background',
                'iconTextColor',
                'iconTypography',
                'headingColor',
                'headingPosition',
                'headingSpacing',
                'headingAlignment',
                'headingTypography',
                'progressShadow',
                'circleShadow'
            ]
        }
    },
    edit : Edit,
    save: Save
})
