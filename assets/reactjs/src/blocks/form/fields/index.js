const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

/**
 * import required attributes of form fields
 */
import * as qubelyField from './qubelyField';

import './style.scss'

const registerBlock = (block) => {
    if (!block) {
        return;
    }

    const { blockName, settings } = block;

    registerBlockType(blockName, {
        ...settings,
        getEditWrapperProps(attributes) {
            const { fieldSize, width } = attributes;
            if (Number.isFinite(width)) {
                return {
                    style: {
                        width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `90%` : width + '%',
                    },
                }
            }
        },
    })
};


const qubelyFormFields = [
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Text'),
            description: __('Text field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'text'
                },
                type: {
                    type: 'string',
                    default: 'text'
                },
            }

        },
        blockName: "qubely/formfield-text"
    },
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Number'),
            description: __('Number field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'number'
                },
                type: {
                    type: 'string',
                    default: 'number'
                },
            }

        },
        blockName: "qubely/formfield-number"
    },
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Email'),
            description: __('Email field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'email'
                },
                type: {
                    type: 'string',
                    default: 'email'
                },
            }

        },
        blockName: "qubely/formfield-email"
    },
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Textarea'),
            description: __('Textarea field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'textarea'
                },
                type: {
                    type: 'string',
                    default: 'textarea'
                },
                height: {
                    type: 'object',
                    default: {
                        md: 150,
                        unit: 'px'
                    },
                    style: [
                        {
                            selector: '{{QUBELY}} .qubely-form-field.qubely-form-textarea { height: {{height}};}'
                        }
                    ]
                },
            }

        },
        blockName: "qubely/formfield-textarea"
    },
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Dropdown'),
            description: __('Dropdown field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'dropdown'
                },
                type: {
                    type: 'string',
                    default: 'dropdown'
                },
                options: {
                    type: 'array',
                    default: ['option one', 'option two', 'option three']
                },
            }

        },
        blockName: "qubely/formfield-dropdown"
    },
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Radio'),
            description: __('Radio field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'radio'
                },
                type: {
                    type: 'string',
                    default: 'radio'
                },
                options: {
                    type: 'array',
                    default: ['option one', 'option two', 'option three']
                },
            }

        },
        blockName: "qubely/formfield-radio"
    },
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Checkbox'),
            description: __('Checkbox field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'checkbox'
                },
                type: {
                    type: 'string',
                    default: 'checkbox'
                },
                options: {
                    type: 'array',
                    default: ['option one', 'option two', 'option three']
                },
            }

        },
        blockName: "qubely/formfield-checkbox"
    },
]


/**
 * Register form fields
 */
export const registerFromFields = () => {
    qubelyFormFields.forEach(registerBlock);
}

registerFromFields()
