
import './style.scss'
import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks;
const { gloalSettings: { globalAttributes }, QubelyButton: { buttonAttributes } } = wp.qubelyComponents

const defaultFormItems = [
    { type: 'text', label: 'First Name', name: 'first-name', placeholder: 'First Name', width: 50, required: true, hideLabel: false },
    { type: 'number', label: 'Number', name: 'number', placeholder: 'Number', width: 50, required: false, hideLabel: false },
    { type: 'email', label: 'Email', name: 'email', placeholder: 'Email', width: 90, required: true, hideLabel: false },
    { type: 'textarea', label: 'Message', name: 'message', placeholder: 'Message', width: 90, required: true, hideLabel: false },
    {
        type: 'dropdown',
        label: 'Select',
        name: 'message',
        width: 50,
        required: true,
        hideLabel: false
    },
    {
        type: 'radio',
        label: 'Radio',
        width: 50,
        required: true,
        hideLabel: false
    },
    {
        type: 'checkbox',
        label: 'Checkbox',
        width: 50,
        required: true,
        hideLabel: false
    },
]

registerBlockType('qubely/form', {
    title: __('Form'),
    category: 'qubely',
    icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-form.svg'} alt={__('Form')} />,
    description: 'Create functional Form using this block.',
    keywords: [__('Form')],
    supports: { align: ['full'] },
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
        formItems: { type: 'array', default: defaultFormItems },
        showPlaceholder: { type: 'boolean', default: true },

        spacing: {
            type: 'object', default: { md: 30, unit: 'px' },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-group:not(:last-child) {margin-bottom: {{spacing}};}'
                }
            ]
        },

        gutter: {
            type: 'object', default: { md: 30, unit: 'px' },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form {margin: 0 calc(-{{gutter}}/2);} {{QUBELY}} .qubely-form .qubely-form-group {padding: 0 calc({{gutter}}/2);}'
                }
            ]
        },

        labelTypography: {
            type: 'obejct', default: { openTypography: 1, size: { md: 16, unit: 'px' } },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' }
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-label'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' }
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-label'
                }
            ]
        },

        labelColor: {
            type: 'string', default: "",
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' }
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-label {color: {{labelColor}};}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' }
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-label {color: {{labelColor}};}'
                }
            ]
        },

        labelColorFocus: {
            type: 'string', default: "",
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' }
                    ],
                    selector: '{{QUBELY}} .qubely-form-control:focus ~ .qubely-form-label, {{QUBELY}} .qubely-form-control:valid ~ .qubely-form-label {color: {{labelColorFocus}};}'
                }
            ]
        },

        inputTypography: {
            type: 'obejct', default: { openTypography: 1, size: { md: 14, unit: 'px' } },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control, {{QUBELY}} .qubely-form .qubely-form-control::placeholder'
                }
            ]
        },

        inputColor: { type: 'string', default: "#495057", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control {color: {{inputColor}};}' }] },
        inputColorHover: { type: 'string', default: "#495057", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control:Hover {color: {{inputColorHover}};}' }] },
        inputColorFocus: { type: 'string', default: "#495057", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control:focus {color: {{inputColorFocus}};}' }] },

        placeholderColor: { type: 'string', default: "#818181", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control::placeholder {color: {{placeholderColor}};}' }] },
        placeholderColorHover: { type: 'string', default: "", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control::placeholder:Hover {color: {{placeholderColorHover}};}' }] },
        placeholderColorFocus: { type: 'string', default: "", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control::placeholder:focus {color: {{placeholderColorFocus}};}' }] },

        inputBg: {
            type: 'string', default: "#fff",
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control {background-color: {{inputBg}};}'
                }
            ]
        },

        inputBgHover: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {background-color: {{inputBgHover}};}'
                }
            ]
        },

        inputBgFocus: {
            type: 'string', default: "#fff",
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control:focus {background-color: {{inputBgFocus}};}'
                }
            ]
        },

        inputBorder: {
            type: 'object', default: { openBorder: 1, type: 'solid', widthType: 'all', width: { all: 1 }, color: '#ced4da' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control'
                }
            ]
        },

        inputBorderMaterial: {
            type: 'object', default: { openBorder: 1, type: 'solid', widthType: 'custom', width: { bottom: 2 }, color: '#ced4da' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control'
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
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {border-color: {{inputBorderColorHover}};}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {border-bottom-color: {{inputBorderColorHover}};}'
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
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control:focus {border-color: {{inputBorderColorFocus}}; box-shadow: 0 0 0 2px {{inputBorderColorFocus}};}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control:focus {border-bottom-color: {{inputBorderColorFocus}};}'
                }
            ]
        },

        inputColorHover: {
            type: 'string', default: '',
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {color: {{inputColorHover}};}'
                }
            ]
        },

        inputCorner: {
            type: 'string', default: '4px',
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                        { key: 'inputCorner', relation: '!=', value: 'custom' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control {border-radius: {{inputCorner}};}'
                }
            ]
        },

        inputCornerRadius: {
            type: 'object', default: { md: 5, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                        { key: 'inputCorner', relation: '==', value: 'custom' },
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control {border-radius: {{inputCornerRadius}};}'
                }
            ]
        },

        inputSize: { type: 'string', default: 'medium' },
        inputPaddingY: {
            type: 'object', default: { md: 10, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                        { key: 'inputSize', relation: '==', value: 'custom' }
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'material' },
                        { key: 'inputSize', relation: '==', value: 'custom' }
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
                }
            ]
        },
        inputPaddingX: {
            type: 'object', default: { md: 15, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 'classic' },
                        { key: 'inputSize', relation: '==', value: 'custom' }
                    ],
                    selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-left: {{inputPaddingX}}; padding-right: {{inputPaddingX}};}'
                }
            ]
        },
        textareaHeight: {
            type: 'object', default: { md: 200, unit: 'px' },
            style: [
                {
                    selector: '{{QUBELY}} .qubely-form .qubely-form-group textarea.qubely-form-control {height: {{textareaHeight}};}'
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
        policyCheckboxText: { type: 'string', default: 'I agree with the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> and I declare that I have read the information that is required in accordance with <a href="http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG&amp;toc=OJ:L:2016:119:TOC" target="_blank">Article 13 of GDPR.</a>' },
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
