const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

/**
 * import required attributes of form fields
 */
import * as qubelyFormField from './qubelyFormField';

import './style.scss'

const registerBlock = (block) => {
    if (!block) {
        return;
    }

    const { blockName, settings } = block;

    registerBlockType(blockName, {
        ...settings,
        getEditWrapperProps(attributes) {
            const { width } = attributes;
            if (Number.isFinite(width)) {
                return {
                    style: {
                        width: width + '%',
                    },
                }
            }
        },
    })
};

/**
 * Register form fields
 */
export const registerFromFields = () => {
    [
        {
            ...qubelyFormField,
            settings: {
                ...qubelyFormField.settings,
                title: __('Text'),
                description: __('Text field for Qubely Form'),
                attributes: {
                    ...qubelyFormField.settings.attributes,
                    type: {
                        type: 'string',
                        default: 'text'
                    },
                }

            },
            blockName: "qubely/formfield-text"
        },
        {
            ...qubelyFormField,
            settings: {
                ...qubelyFormField.settings,
                title: __('Number'),
                description: __('Number field for Qubely Form'),
                attributes: {
                    ...qubelyFormField.settings.attributes,
                    type: {
                        type: 'string',
                        default: 'number'
                    },
                }

            },
            blockName: "qubely/formfield-number"
        },
        {
            ...qubelyFormField,
            settings: {
                ...qubelyFormField.settings,
                title: __('Email'),
                description: __('Email field for Qubely Form'),
                attributes: {
                    ...qubelyFormField.settings.attributes,
                    type: {
                        type: 'string',
                        default: 'email'
                    },
                }

            },
            blockName: "qubely/formfield-email"
        },
        {
            ...qubelyFormField,
            settings: {
                ...qubelyFormField.settings,
                title: __('Textarea'),
                description: __('Textarea field for Qubely Form'),
                attributes: {
                    ...qubelyFormField.settings.attributes,
                    type: {
                        type: 'string',
                        default: 'textarea'
                    },
                }

            },
            blockName: "qubely/formfield-textarea"
        },
    ].forEach(registerBlock);
}

registerFromFields()
