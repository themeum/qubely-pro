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
                    }
                }
            }
        },
    })
};


const qubelyFormFields = [

    // 1. text field
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
                placeHolder: {
                    type: 'string',
                    default: 'Add text'
                },
            }

        },
        blockName: "qubely/formfield-text"
    },
    // 2 . number
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
                placeHolder: {
                    type: 'string',
                    default: 'Add number'
                },
            }

        },
        blockName: "qubely/formfield-number"
    },
    //3. email
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
                label: {
                    type: 'string',
                    default: 'Email',
                },
                emailConformation: {
                    type: 'boolean',
                    default: false
                },
                conformationEmailLabel: {
                    type: 'string',
                    default: 'Confirm Email'
                },
                placeHolder: {
                    type: 'string',
                    default: 'Add email'
                },
            }

        },
        blockName: "qubely/formfield-email"
    },
    //4. textarea
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
                placeHolder: {
                    type: 'string',
                    default: 'Add text'
                },
            }

        },
        blockName: "qubely/formfield-textarea"
    },
    // 5. dropdown
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
                label: {
                    type: 'string',
                    default: 'Dropdown',
                },
                options: {
                    type: 'array',
                    default: ['option one', 'option two', 'option three']
                },
            }

        },
        blockName: "qubely/formfield-dropdown"
    },
    // 6. radio
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
                columns: {
                    type: 'string',
                    default: '1-column'
                },
                options: {
                    type: 'array',
                    default: ['option one', 'option two', 'option three']
                },
                enableOtherOption: {
                    type: 'boolean',
                    default: false
                }
            }

        },
        blockName: "qubely/formfield-radio"
    },
    // 7. checkbox
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
                columns: {
                    type: 'string',
                    default: '1-column'
                },
                options: {
                    type: 'array',
                    default: ['option one', 'option two', 'option three']
                },
            }

        },
        blockName: "qubely/formfield-checkbox"
    },
    // 8. date picker
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Date Picker'),
            description: __('Date picker field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'date-picker'
                },
                type: {
                    type: 'string',
                    default: 'date'
                },
                dateSeparator: {
                    type: 'string',
                    default: '-'
                },
                dateFormat: {
                    type: 'string',
                    default: 'dd-M-yy'
                }
            }

        },
        blockName: "qubely/formfield-date"
    },
    // 9. time picker
    {
        ...qubelyField,
        settings: {
            ...qubelyField.settings,
            title: __('Time Picker'),
            description: __('Time picker field for Qubely Form'),
            attributes: {
                ...qubelyField.settings.attributes,
                fieldName: {
                    type: 'string',
                    default: 'time-picker'
                },
                type: {
                    type: 'string',
                    default: 'time'
                },
                timeFormatType: {
                    type: 'number',
                    default: 12
                },
                seletedTimeFormat: {
                    type: 'string',
                    default: 'AM'
                },
                minuteInterval: {
                    type: 'number',
                    default: 5
                },
            }

        },
        blockName: "qubely/formfield-time"
    },
]


/**
 * Register form fields
 */
export const registerFromFields = () => {
    qubelyFormFields.forEach(registerBlock);
}

registerFromFields()
