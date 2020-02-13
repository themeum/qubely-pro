
import './style.scss'
import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks;
const { gloalSettings: { globalAttributes }, QubelyButton: { buttonAttributes } } = wp.qubelyComponents

const defaultFormItems = [
    {
        type: 'email',
        label: 'Email',
        name: 'email',
        placeHolder: 'Email',
        required: true,
        hideLabel: false
    },
    {
        type: 'textarea',
        label: 'Message',
        name: 'message',
        placeHolder: 'Message',
        required: true,
        hideLabel: false
    }
]

registerBlockType('qubely/form', {
    title: __('Form Builder'),
    category: 'qubely',
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-form.svg'} alt={__('Form')} />,
    description: 'Create functional Form using Qubely Form block.',
    keywords: [
        __('Form'),
        __('Form Builder'),
        __('Builder')
    ],
    supports: {
        align: ['center', 'wide', 'full'],
    },
    example: {
        attributes: {
            formItems: defaultFormItems,
        },
        innerBlocks: [
            {
                name: 'qubely/image',
                attributes: {
                    image: { url: 'http://qubely.io/wp-content/uploads/qubely-assets/demo/form-builder.png' },
                },
            },
        ]
    },
    attributes: {
        uniqueId: { type: 'string', default: '' },
        ...globalAttributes,
        ...buttonAttributes,
        height: {
            type: 'number',
            default: 200,
        },
        width: {
            type: 'number',
            default: 320,
        },
        enableButtonAlignment: { type: 'boolean', default: true },
        layout: { type: 'string', default: 'classic' },
        useDefaultStyle: { type: 'boolean', default: true },
        spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },
        buttonComponent: { type: 'boolean', default: true },
        enableButton: { type: 'boolean', default: true },
        buttonTag: { type: 'string', default: 'button' },
        buttonText: { type: 'string', default: 'Submit' },
        buttonColor: {
            type: 'string', default: '#fff',
            style: [
                {
                    condition: [{ key: 'buttonFillType', relation: '==', value: 'fill' }],
                    selector: '{{QUBELY}} .qubely-block-btn-anchor { color:{{buttonColor}}; }'
                }
            ]
        },
        buttonGap: {
            type: 'object', default: { md: 0, unit: 'px' },
            style: [{ selector: '{{QUBELY}} .qubely-block-btn-wrapper { margin-top: {{buttonGap}}; }' }]
        },
        formItems: { type: 'array', default: defaultFormItems },
        showPlaceholder: { type: 'boolean', default: true },

        spacing: {
            type: 'object', default: { md: 15, unit: 'px' },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper,{{QUBELY}} .qubely-form.qubely-google-recaptcha,{{QUBELY}} .qubely-form-policy-checkbox-wrapper {margin-bottom: {{spacing}};} {{QUBELY}} .qubely-form-field-label.qubely-confirmation-email {margin-top: {{spacing}};}'
                }
            ]
        },

        gutter: {
            type: 'object', default: { md: 15, unit: 'px' },
            style: [
                // {
                //     selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper {margin-left: calc(-{{gutter}}/2);margin-right: calc(-{{gutter}}/2);}'
                // }
            ]
        },

        //label settings
        showLabel: {
            type: 'boolean',
            default: true
        },
        labelSpacing: {
            type: 'object',
            default: { md: 5, unit: 'px' },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field {margin-top: {{labelSpacing}};}'
                }
            ]
        },

        labelTypography: {
            type: 'object',
            default: {},
            style: [
                { selector: '{{QUBELY}} .qubely-form-field-label, {{QUBELY}} .qubely-from-field-required-sign' }
            ]
        },
        labelColor: {
            type: 'string',
            default: '',
            style: [
                { selector: '{{QUBELY}} .qubely-form-field-label { color:{{labelColor}}; }' }
            ]
        },
        labelAlignment: {
            type: 'string',
            default: 'top',
        },

        inputTypography: {
            type: 'obejct', default: { openTypography: 1, size: { md: 14, unit: 'px' } },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field, {{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field::placeholder'
                }
            ]
        },
        inputBoxShadow: {
            type: 'object',
            default: {},
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio)'
                }
            ]
        },

        inputColor: {
            type: 'string',
            default: "#495057",
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio) {color: {{inputColor}};}'
                }
            ]
        },
        inputColorHover: {
            type: 'string',
            default: "#495057",
            style: [
                { selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):hover {color: {{inputColorHover}};}' }
            ]
        },

        inputColorFocus: {
            type: 'string',
            default: "#495057",
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):focus {color: {{inputColorFocus}};}'
                }
            ]
        },

        placeholderColor: {
            type: 'string',
            default: "#818181",
            style: [
                { selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio)::placeholder {color: {{placeholderColor}};}' }
            ]
        },

        placeholderColorHover: {
            type: 'string',
            default: "",
            style: [
                { selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):hover::placeholder {color: {{placeholderColorHover}};}' }
            ]
        },

        placeholderColorFocus: {
            type: 'string',
            default: "",
            style: [
                { selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):focus::placeholder {color: {{placeholderColorFocus}};}' }
            ]
        },

        inputBg: {
            type: 'string', default: "#fff",
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 'materialdark' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio) {background-color: {{inputBg}};}'
                }
            ]
        },
        materialDarkInputBg: {
            type: 'string', default: "#f5f5f5",
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'materialdark' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio) {background-color: {{materialDarkInputBg}};}'
                }
            ]
        },

        inputBgHover: {
            type: 'string', default: '',
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):hover {background-color: {{inputBgHover}};}'

                }
            ]
        },

        inputBgFocus: {
            type: 'string', default: "#fff",
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):focus {background-color: {{inputBgFocus}};}'
                }
            ]
        },

        inputBorder: {
            type: 'object',
            default: {
                openBorder: 1,
                type: 'solid',
                widthType: 'global',
                global: { md: 1 },
                custom: { md: '1 1 1 1' },
                color: '#ced4da'
            },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-form.qubely-layout-classic .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio)'
                }
            ]
        },
        inputBorderRadius: {
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
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 'material' },
                    ],
                    selector: '{{QUBELY}} input.qubely-form-field, {{QUBELY}} textarea.qubely-form-field, {{QUBELY}} .qubely-form-dropdown'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' },
                    ],
                    selector: '{{QUBELY}} input.qubely-form-field, {{QUBELY}} textarea.qubely-form-field, {{QUBELY}} .qubely-form-dropdown{border-radius:0;}'
                }
            ]
        },

        inputBorderMaterial: {
            type: 'object',
            default: {
                openBorder: 1,
                type: 'solid',
                widthType: 'custom',
                custom: { md: '0 0 2 0' },
                color: '#e5e5e5'
            },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio)'

                }
            ]
        },

        inputBorderColorHover: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-form.qubely-layout-classic .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):hover {border-color: {{inputBorderColorHover}};}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):hover {border-color: {{inputBorderColorHover}};}'
                }
            ]
        },

        inputBorderColorFocus: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} input.qubely-form-field:focus, textarea.qubely-form-field:focus {border-color: {{inputBorderColorFocus}}; box-shadow: 0 0 0 2px {{inputBorderColorFocus}};}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):focus {border-color: {{inputBorderColorFocus}};}'
                }
            ]
        },

        inputSize: { type: 'string', default: 'medium' },

        inputCustomSize: {
            type: 'object',
            default: {
                openPadding: 1,
                paddingType: 'custom',
                global: { md: '5' },
                custom: { md: '8 15 8 15' },
                unit: 'px'
            },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 'material' },
                        { key: 'inputSize', relation: '==', value: 'custom' }
                    ],
                    selector: '{{QUBELY}} .qubely-form.is-custom .qubely-form-field '
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' }
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-field, {{QUBELY}} .qubely-form textarea.qubely-form-field {padding: 10px 0;}'
                }
            ]
        },
        textareaHeight: {
            type: 'object', default: { md: 180, unit: 'px' },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper textarea.qubely-form-textarea {height: {{textareaHeight}};}'
                }
            ]
        },

        fieldErrorMessage: { type: 'string', default: 'Please fill the required field.' },
        formSuccessMessage: { type: 'string', default: 'Email successfully sent!' },
        formErrorMessage: { type: 'string', default: 'Email sent failed, fill required field and try again!' },
        reCaptcha: { type: 'boolean', default: false },
        reCaptchaSiteKey: { type: 'string', default: '' },
        reCaptchaSecretKey: { type: 'string', default: '' },
        policyCheckbox: { type: 'boolean', default: false },
        policyCheckboxText: { type: 'string', default: 'I agree with the Terms & Conditions and I declare that I have read the information that is required in accordance with the terms' },
        emailReceiver: { type: 'string', default: '' },
        emailHeaders: { type: 'string', default: 'Reply-To: {{email}}\nReply-name: {{first-name}} {{last-name}}\nCc: {{email}}\nBcc: admin@yourcompany.com' },
        emailFrom: { type: 'string', default: 'Your Name: admin@example.com' },
        emailSubject: { type: 'string', default: '{{subject}} | {{email}} | {{site-name}}' },
        emailBody: { type: 'string', default: '<p><strong>From:</strong> {{first-name}} {{last-name}}</p><strong>Email:</strong> {{email}}</p>\n<p><strong>Subject:</strong> {{subject}}</p>\n<p><strong>Message:</strong> {{message}}</p>' },
        showGlobalSettings: { type: 'boolean', default: true },  // Global Settings
    },
    edit: Edit,
    save: Save,
});
