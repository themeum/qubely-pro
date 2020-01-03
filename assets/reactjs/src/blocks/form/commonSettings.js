
const { __ } = wp.i18n
import icons from '../../helpers/icons';
const { select, dispatch } = wp.data
const { useState, Fragment } = wp.element
const { PanelBody, TextControl, TextareaControl } = wp.components

const {
    BoxShadow,
    BorderRadius,
    Padding,
    Styles,
    Range,
    Separator,
    Toggle,
    Typography,
    Color,
    Tabs,
    Tab,
    Border,
    RadioAdvanced,
    QubelyButton: { buttonSettings },
} = wp.qubelyComponents

export default function (clientId) {
    const [device, changeDevice] = useState('md')
    const [isUpdating, setUpdate] = useState(false)
    const { getBlockAttributes } = select('core/block-editor')
    let attributes = getBlockAttributes(clientId)
    const { updateBlockAttributes } = dispatch('core/block-editor')

    let {
        layout,
        labelColor,
        labelSpacing,
        labelTypography,
        spacing,
        inputSize,
        inputCustomSize,
        inputTypography,
        inputBoxShadow,
        inputColor,
        inputColorFocus,
        inputColorHover,
        inputBg,
        inputBgFocus,
        inputBgHover,
        inputBorder,
        inputBorderRadius,
        inputBorderMaterial,
        inputBorderColorFocus,
        inputBorderColorHover,
        textareaHeight,
        placeholderColor,
        placeholderColorFocus,
        placeholderColorHover,
        fieldErrorMessage,
        formSuccessMessage,
        formErrorMessage,
        reCaptcha,
        reCaptchaSiteKey,
        reCaptchaSecretKey,
        policyCheckbox,
        emailReceiver,
        emailHeaders,
        emailFrom,
        emailSubject,
        emailBody,
    } = attributes

    const updateAttributes = (key, value) => {
        updateBlockAttributes(clientId, { [key]: value })
        attributes = getBlockAttributes(clientId)
        setUpdate(!isUpdating)
    }

    return (
        <Fragment>

            <PanelBody title={__('')} opened={true}>
                <Styles
                    value={layout}
                    onChange={val => updateAttributes('layout', val)}
                    options={[
                        { value: 'classic', img: icons.form_classic, },
                        { value: 'material', img: icons.form_material },
                        { value: 'materialdark', img: icons.form_material_dark },
                    ]}
                />
            </PanelBody>

            <PanelBody title={__('Label')} initialOpen={false}>
                <Typography
                    value={labelTypography}
                    onChange={val => updateAttributes('labelTypography', val)}
                />
                <Range
                    min={0}
                    max={100}
                    responsive
                    value={labelSpacing}
                    label={__('Spacing')}
                    unit={['px', 'em', '%']}
                    onChange={(value) => updateAttributes('labelSpacing', value)}
                />
                <Color
                    label={__('Color')}
                    value={labelColor}
                    onChange={val => updateAttributes('labelColor', val)}
                />
            </PanelBody>


            <PanelBody title={__('Input')} initialOpen={false}>
                {(layout != 'material') &&
                    <Fragment>
                        <RadioAdvanced
                            label={__('Input Size')}
                            options={[
                                { label: 'S', value: 'small', title: 'Small' },
                                { label: 'M', value: 'medium', title: 'Medium' },
                                { label: 'L', value: 'large', title: 'Large' },
                                { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }
                            ]}
                            value={inputSize}
                            onChange={(value) => updateAttributes('inputSize', value)} />

                        {inputSize == 'custom' &&
                            <Padding
                                max={50}
                                min={0}
                                responsive
                                value={inputCustomSize}
                                label={__('Custom Size')}
                                unit={['px', 'em', '%']}
                                onChange={value => updateAttributes('inputCustomSize', value)}
                            />
                        }
                    </Fragment>
                }

                <Range
                    min={100}
                    max={500}
                    responsive
                    value={textareaHeight}
                    unit={['px', 'em', '%']}
                    label={__('Textarea Height')}
                    onChange={(value) => updateAttributes('textareaHeight', value)}
                />

                <Range
                    min={5}
                    max={300}
                    responsive
                    value={spacing}
                    label={__('Spacing')}
                    unit={['px', 'em', '%']}
                    onChange={(value) => updateAttributes('spacing', value)}
                />
                <Border
                    min={0}
                    max={10}
                    responsive
                    value={layout === 'classic' ? inputBorder : inputBorderMaterial}
                    label={__('Border')}
                    unit={['px', 'em', '%']}
                    onChange={value => layout === 'classic' ? updateAttributes('inputBorder', value) : updateAttributes('inputBorderMaterial', value)} />

                {(layout != 'material') &&
                    <BorderRadius
                        min={0}
                        max={100}
                        responsive
                        label={__('Radius')}
                        value={inputBorderRadius}
                        unit={['px', 'em', '%']}
                        onChange={(value) => updateAttributes('inputBorderRadius', value)}
                    />
                }
                <Tabs>
                    <Tab tabTitle={__('Normal')}>
                        <Color label={__('Input Text Color')} value={inputColor} onChange={val => updateAttributes('inputColor', val)} />
                        <Color label={__('Background Color')} value={inputBg} onChange={val => updateAttributes('inputBg', val)} />
                        <Color label={__('Placeholder Color')} value={placeholderColor} onChange={val => updateAttributes('placeholderColor', val)} />
                    </Tab>
                    <Tab tabTitle={__('Focus')}>
                        <Color label={__('Text Color')} value={inputColorFocus} onChange={val => updateAttributes('inputColorFocus', val)} />
                        <Color label={__('Background Color')} value={inputBgFocus} onChange={val => updateAttributes('inputBgFocus', val)} />
                        <Color label={__('Border Color')} value={inputBorderColorFocus} onChange={(value) => updateAttributes('inputBorderColorFocus', value)} />
                        <Color label={__('Placeholder Color')} value={placeholderColorFocus} onChange={val => updateAttributes('placeholderColorFocus', val)} />
                    </Tab>
                    <Tab tabTitle={__('Hover')}>
                        <Color label={__('Text Color')} value={inputColorHover} onChange={val => updateAttributes('inputColorHover', val)} />
                        <Color label={__('Background Color')} value={inputBgHover} onChange={val => updateAttributes('inputBgHover', val)} />
                        <Color label={__('Border Color')} value={inputBorderColorHover} onChange={(value) => updateAttributes('inputBorderColorHover', value)} />
                        <Color label={__('Placeholder Color')} value={placeholderColorHover} onChange={val => updateAttributes('placeholderColorHover', val)} />
                    </Tab>
                </Tabs>

                <Typography value={inputTypography} onChange={val => updateAttributes('inputTypography', val)} />

                <Separator />

                <BoxShadow
                    disableInset
                    label={__('Box-Shadow')}
                    value={inputBoxShadow}
                    onChange={value => updateAttributes('inputBoxShadow', value)}
                />

                <Separator />
            </PanelBody>



            <PanelBody title={__('Settings')} initialOpen={false}>

                <Tabs>
                    <Tab tabTitle={__('Form')}>
                        <TextControl
                            label={__('Required Field Error Message')}
                            value={fieldErrorMessage}
                            onChange={val => updateAttributes('fieldErrorMessage', val)}
                        />
                        <TextareaControl
                            label={__('Form Submit Success Message')}
                            value={formSuccessMessage}
                            onChange={val => updateAttributes('formSuccessMessage', val)}
                            help={__('Set your desired message after successful form submission. Leave blank for default.')}
                        />
                        <TextareaControl
                            label={__('Form Submit Failed Message')}
                            value={formErrorMessage}
                            onChange={val => updateAttributes('formErrorMessage', val)}
                            help={__('Set your desired message for form submission error. Leave blank for default.')}
                        />
                        
                        <Toggle label={__('Enable Policy Checkbox')} value={policyCheckbox} onChange={val => updateAttributes('policyCheckbox', val)} />
                        <Toggle label={__('Enable reCAPTCHA')} value={reCaptcha} onChange={val => updateAttributes('reCaptcha', val)} />

                        {reCaptcha &&
                            <div>
                                <TextControl
                                    label={__('Site Key ')}
                                    value={reCaptchaSiteKey}
                                    onChange={val => updateAttributes('reCaptchaSiteKey', val)}
                                    placeholder={__('Enter Google Site Key')}
                                />
                                <TextControl
                                    label={__('Secret Key ')}
                                    value={reCaptchaSecretKey}
                                    onChange={val => updateAttributes('reCaptchaSecretKey', val)}
                                    placeholder={__('Enter Google Secret Key')}
                                />
                                <span className="qubely-recaptcha-help">
                                    Get reCAPTCHA(v2) keys from <a href='www.google.com/recaptcha/admin/' >{__('www.google.com/recaptcha/admin/')} </a>
                                </span>
                            </div>
                        }

                    </Tab>
                    <Tab tabTitle={__('Email')}>
                        <TextControl
                            label={__('Recipient Email')}
                            value={emailReceiver}
                            onChange={val => updateAttributes('emailReceiver', val)}
                            placeholder={__('Enter Recipient Email')}
                            help={__('Enter the recipient email address. This field is mandatory. Without a recipient email, contact form will not work.')}
                        />
                        <TextareaControl
                            label={__('Email Headers')}
                            value={emailHeaders}
                            onChange={val => updateAttributes('emailHeaders', val)}
                        />
                        <TextControl
                            label={__('From Email')}
                            value={emailFrom}
                            onChange={val => updateAttributes('emailFrom', val)}
                            placeholder={__('Your Name: admin@example.com')}
                        />
                        <TextControl
                            label={__('Subject')}
                            value={emailSubject}
                            onChange={val => updateAttributes('emailSubject', val)}
                            placeholder={__('Enter Subject')}
                        />
                        <TextareaControl
                            label={__('Email Body')}
                            value={emailBody}
                            onChange={val => updateAttributes('emailBody', val)}
                            help={__("Set your form email body here. In editor don't add any CSS style or others option just add your form field name between double curly braces {{field-name}} as you set in 'Field Name'.")}
                        />
                    </Tab>
                </Tabs>
            </PanelBody>

            {buttonSettings(attributes, device, (key, value) => { updateAttributes(key, value) }, (key, value) => { changeDevice(value) })}

        </Fragment>

    )
}