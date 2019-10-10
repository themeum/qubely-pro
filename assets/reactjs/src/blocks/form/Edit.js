const { __ } = wp.i18n
const { createBlock } = wp.blocks
const { select, dispatch } = wp.data
const { InspectorControls, BlockControls, InnerBlocks, RichText } = wp.editor
const { Dropdown, PanelBody, TextControl, Toolbar, TextareaControl } = wp.components
const { Component, Fragment } = wp.element
const {
    ButtonGroup,
    BoxShadow,
    BorderRadius,
    Padding,
    Styles,
    Wrapper,
    Range,
    Separator,
    Toggle,
    Typography,
    Color,
    Tabs,
    Tab,
    Border,
    RadioAdvanced,
    QubelyButtonEdit,
    Inline: { InlineToolbar },
    CssGenerator: { CssGenerator },
    QubelyButton: { buttonSettings },
    gloalSettings: { globalSettingsPanel },
} = wp.qubelyComponents

import icons from '../../helpers/icons';




class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            spacer: true,
            selectedItem: -1,
            dropdownOpen: -1,
            newItemType: 'text',
            device: 'md',
        }
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }
    }

    setSettings(type, val, index = -1) {
        const selectedItem = (index !== -1) ? index : this.state.selectedItem;
        const { attributes, setAttributes } = this.props;
        let formItems = [...attributes.formItems];
        formItems[selectedItem][type] = val;
        setAttributes({ formItems });
    }

    setOptionSettings(selectedItem, index, val) {
        const { attributes, setAttributes } = this.props;
        let formItems = [...attributes.formItems];
        formItems[selectedItem].options[index] = val;
        setAttributes({ formItems });
    }

    addNewItem(newFieldType) {

        const { clientId, attributes, setAttributes } = this.props
        const { getBlocks } = select('core/block-editor')
        const { replaceInnerBlocks } = dispatch('core/block-editor')

        const formItems = [...attributes.formItems]
        const newItem = {
            type: newFieldType,
            label: 'Label',
            placeholder: '',
            width: 100,
            required: true,
            hideLabel: false
        }

        formItems.push(newItem)
        setAttributes({ formItems })

        let innerBlocks = [...getBlocks(clientId)]

        innerBlocks.push(createBlock(`qubely/formfield-${newFieldType}`))

        replaceInnerBlocks(clientId, innerBlocks, false);

    }

    insertOption(index) {
        const { attributes, setAttributes } = this.props;
        let formItems = [...attributes.formItems];
        let activeItem = formItems[index];
        activeItem.options.push(`Option ${activeItem.options.length + 1}`);
        formItems[index] = activeItem;
        setAttributes({ formItems });
    }

    moveItem(index, moveTo) {
        const { attributes, setAttributes } = this.props;
        const formItems = [...attributes.formItems];
        const moveIndex = (moveTo == 'left') ? index - 1 : index + 1;
        const movableItem = formItems[index];
        formItems[index] = formItems[moveIndex];
        formItems[moveIndex] = movableItem;
        this.setState({ selectedItem: moveIndex });
        setAttributes({ formItems });
    }

    cloneItem(index) {
        const { attributes, setAttributes } = this.props;
        let formItems = [...attributes.formItems];
        let clonedItem = JSON.parse(JSON.stringify(formItems[index]));
        formItems.splice(index + 1, 0, clonedItem);
        setAttributes({ formItems });
    }

    removeItem(index) {
        const { selectedItem } = this.state;
        const { attributes, setAttributes } = this.props;
        let formItems = [...attributes.formItems];
        formItems.splice(index, 1);
        setAttributes({ formItems });
        if (selectedItem == index);
        this.setState({ selectedItem: -1 });
    }

    removeOption(item, option) {
        const { attributes, setAttributes } = this.props;
        let formItems = [...attributes.formItems];
        formItems[item].options.splice(option, 1);
        setAttributes({ formItems });
    }

    renderLabel = (index, isRequired) => {
        const { attributes: { formItems } } = this.props
        return (
            <label className="qubely-form-label">
                <RichText
                    tagName="label"
                    className="qubely-form-field-label"
                    value={formItems[index].label}
                    onChange={val => this.setSettings('label', val, index)}
                />
                {isRequired && '*'}
            </label>
        )
    }

    renderFormFieldTypes = () => {
        const formFields = [
            [__('Text'), 'text'],
            [__('Number'), 'number'],
            [__('Email'), 'email'],
            [__('Radio'), 'radio'],
            [__('Checkbox'), 'checkbox'],
            [__('Textarea'), 'textarea'],
            [__('Date'), 'date'],
            [__('Time'), 'time'],
            [__('Dropdown'), 'dropdown'],
        ]
        return (
            <div className="qubely-form-field-types">
                {formFields.map(([fieldName, type], index) => {
                    return (
                        <div className="qubely-form-field-type"
                            onClick={() => this.addNewItem(type)}>
                            {fieldName}
                        </div>
                    )
                })}
            </div>
        )
    }
    render() {
        const {
            attributes,
            setAttributes,
            toggleSelection,
            attributes: {
                uniqueId,
                layout,
                formItems,


                //label settings
                labelColor,
                labelAlignment,
                labelTypography,

                //input settings
                spacing,
                gutter,
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


                //button
                enableButton,
                buttonTag,
                buttonSize,
                buttonFillType,
                buttonText,
                buttonIconName,
                buttonIconPosition,

                fieldErrorMessage,
                formSuccessMessage,
                formErrorMessage,

                reCaptcha,
                reCaptchaSiteKey,
                reCaptchaSecretKey,
                policyCheckbox,
                policyCheckboxText,

                emailReceiver,
                emailHeaders,
                emailFrom,
                emailSubject,
                emailBody,

                globalZindex,
                hideTablet,
                hideMobile,
                globalCss,



                height,
                width,
            }
        } = this.props

        const { device, selectedItem, dropdownOpen } = this.state

        if (uniqueId) { CssGenerator(attributes, 'form', uniqueId); }
        return (
            <Fragment>
                <InspectorControls key="inspector">

                    <PanelBody title={__('')} opened={true}>
                        <Styles
                            value={layout}
                            onChange={val => setAttributes({ layout: val })}
                            options={[
                                { value: 'classic', img: icons.form_classic, label: __('Classic') },
                                { value: 'material', img: icons.form_material, label: __('Material') },
                            ]}
                        />
                    </PanelBody>

                    <PanelBody title={__('Label')} initialOpen={false}>
                        <ButtonGroup
                            label={__('Label Alignment')}
                            options={
                                [
                                    [__('Top'), 'top'],
                                    [__('Left'), 'left'],
                                    [__('Right'), 'right'],
                                ]}
                            value={labelAlignment}
                            onChange={value => setAttributes({ labelAlignment: value })}
                        />
                        <Typography
                            value={labelTypography}
                            onChange={val => setAttributes({ labelTypography: val })}
                        />
                        <Color
                            label={__('Color')}
                            value={labelColor}
                            onChange={val => setAttributes({ labelColor: val })}
                        />
                    </PanelBody>


                    <PanelBody title={__('Input')} initialOpen={false}>

                        <RadioAdvanced
                            label={__('Input Size')}
                            options={[
                                { label: 'S', value: 'small', title: 'Small' },
                                { label: 'M', value: 'medium', title: 'Medium' },
                                { label: 'L', value: 'large', title: 'Large' },
                                { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }
                            ]}
                            value={inputSize}
                            onChange={(value) => setAttributes({ inputSize: value })} />

                        {inputSize == 'custom' &&
                            <Padding
                                max={50}
                                min={0}
                                responsive
                                value={inputCustomSize}
                                label={__('Custom Size')}
                                unit={['px', 'em', '%']}
                                onChange={value => setAttributes({ inputCustomSize: value })}
                            />
                        }
                        <Range
                            min={100}
                            max={500}
                            responsive
                            value={textareaHeight}
                            unit={['px', 'em', '%']}
                            label={__('Textarea Height')}
                            onChange={(value) => setAttributes({ textareaHeight: value })}
                        />

                        <Range
                            min={0}
                            max={60}
                            responsive
                            value={spacing}
                            label={__('Spacing')}
                            unit={['px', 'em', '%']}
                            onChange={(value) => setAttributes({ spacing: value })}
                        />
                        <Range
                            min={0}
                            max={60}
                            responsive
                            value={gutter}
                            label={__('Gutter')}
                            unit={['px', 'em', '%']}
                            onChange={(value) => setAttributes({ gutter: value })}
                        />

                        {
                            layout == 'classic' &&
                            <Border label={__('Border')} value={inputBorder} onChange={val => setAttributes({ inputBorder: val })} min={0} max={10} />
                        }
                        {
                            layout == 'material' &&
                            <Border label={__('Border')} value={inputBorderMaterial} onChange={val => setAttributes({ inputBorderMaterial: val })} min={0} max={10} />
                        }

                        <BorderRadius
                            min={0}
                            max={100}
                            responsive
                            label={__('Field Radius')}
                            value={inputBorderRadius}
                            unit={['px', 'em', '%']}
                            onChange={(value) => setAttributes({ inputBorderRadius: value })} />

                        <Tabs>
                            <Tab tabTitle={__('Normal')}>
                                <Color label={__('Input Text Color')} value={inputColor} onChange={val => setAttributes({ inputColor: val })} />
                                <Color label={__('Background Color')} value={inputBg} onChange={val => setAttributes({ inputBg: val })} />
                                <Color label={__('Placeholder Color')} value={placeholderColor} onChange={val => setAttributes({ placeholderColor: val })} />
                            </Tab>

                            <Tab tabTitle={__('Focus')}>
                                <Color label={__('Text Color')} value={inputColorFocus} onChange={val => setAttributes({ inputColorFocus: val })} />
                                <Color label={__('Background Color')} value={inputBgFocus} onChange={val => setAttributes({ inputBgFocus: val })} />
                                <Color label={__('Border Color')} value={inputBorderColorFocus} onChange={(value) => setAttributes({ inputBorderColorFocus: value })} />
                                <Color label={__('Placeholder Color')} value={placeholderColorFocus} onChange={val => setAttributes({ placeholderColorFocus: val })} />
                            </Tab>

                            <Tab tabTitle={__('Hover')}>
                                <Color label={__('Text Color')} value={inputColorHover} onChange={val => setAttributes({ inputColorHover: val })} />
                                <Color label={__('Background Color')} value={inputBgHover} onChange={val => setAttributes({ inputBgHover: val })} />
                                <Color label={__('Border Color')} value={inputBorderColorHover} onChange={(value) => setAttributes({ inputBorderColorHover: value })} />
                                <Color label={__('Placeholder Color')} value={placeholderColorHover} onChange={val => setAttributes({ placeholderColorHover: val })} />
                            </Tab>
                        </Tabs>


                        <Typography value={inputTypography} onChange={val => setAttributes({ inputTypography: val })} />

                        <Separator />

                        <BoxShadow
                            disableInset
                            label={__('Box-Shadow')}
                            value={inputBoxShadow}
                            onChange={value => setAttributes({ inputBoxShadow: value })}
                        />

                        <Separator />
                    </PanelBody>



                    <PanelBody title={__('Settings')} initialOpen={false}>

                        <Tabs>
                            <Tab tabTitle={__('Form')}>
                                <TextControl
                                    label={__('Required Field Error Message')}
                                    value={fieldErrorMessage}
                                    onChange={val => setAttributes({ fieldErrorMessage: val })}
                                />
                                <TextareaControl
                                    label={__('Form Submit Success Message')}
                                    value={formSuccessMessage}
                                    onChange={val => setAttributes({ formSuccessMessage: val })}
                                    help={__('Set your desired message after successful form submission. Leave blank for default.')}
                                />
                                <TextareaControl
                                    label={__('Form Submit Failed Message')}
                                    value={formErrorMessage}
                                    onChange={val => setAttributes({ formErrorMessage: val })}
                                    help={__('Set your desired message for form submission error. Leave blank for default.')}
                                />
                                <Toggle label={__('Enable Captcha')} value={reCaptcha} onChange={val => setAttributes({ reCaptcha: val })} />
                                {reCaptcha &&
                                    <div>
                                        <TextControl
                                            label={__('Site Key ')}
                                            value={reCaptchaSiteKey}
                                            onChange={val => setAttributes({ reCaptchaSiteKey: val })}
                                            placeholder={__('Enter Google Site Key')}
                                        />
                                        <TextControl
                                            label={__('Secret Key ')}
                                            value={reCaptchaSecretKey}
                                            onChange={val => setAttributes({ reCaptchaSecretKey: val })}
                                            placeholder={__('Enter Google Secret Key')}
                                        />
                                    </div>
                                }
                                <Toggle label={__('Enable Policy Checkbox')} value={policyCheckbox} onChange={val => setAttributes({ policyCheckbox: val })} />

                            </Tab>
                            <Tab tabTitle={__('Email')}>
                                <TextControl
                                    label={__('Recipient Email')}
                                    value={emailReceiver}
                                    onChange={val => setAttributes({ emailReceiver: val })}
                                    placeholder={__('Enter Recipient Email')}
                                    help={__('Enter the recipient email address. This field is mandatory. Without a recipient email, contact form will not work.')}
                                />
                                <TextareaControl
                                    label={__('Email Headers')}
                                    value={emailHeaders}
                                    onChange={val => setAttributes({ emailHeaders: val })}
                                />
                                <TextControl
                                    label={__('From Email')}
                                    value={emailFrom}
                                    onChange={val => setAttributes({ emailFrom: val })}
                                    placeholder={__('Your Name: admin@example.com')}
                                />
                                <TextControl
                                    label={__('Subject')}
                                    value={emailSubject}
                                    onChange={val => setAttributes({ emailSubject: val })}
                                    placeholder={__('Enter Subject')}
                                />
                                <TextareaControl
                                    label={__('Email Body')}
                                    value={emailBody}
                                    onChange={val => setAttributes({ emailBody: val })}
                                    help={__("Set your form email body here. In editor don't add any CSS style or others option just add your form field name between double curly braces {{field-name}} as you set in 'Field Name'.")}
                                />
                            </Tab>
                        </Tabs>
                    </PanelBody>
                    {buttonSettings(this.props.attributes, device, setAttributes, (key, value) => { this.setState({ [key]: value }) })}

                </InspectorControls>

                <BlockControls>
                    <Toolbar>
                        <InlineToolbar
                            data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
                            {...this.props}
                            prevState={this.state}
                        />
                    </Toolbar>
                </BlockControls>

                {globalSettingsPanel(globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId}`}>
                    <div className={`qubely-block-form qubely-layout-${layout}`}>
                        <form className={`qubely-form is-${inputSize}`}>
                            <InnerBlocks
                                templateLock="all"
                                template={formItems.map(({ type, label, options, placeholder, width, required }) => [`qubely/formfield-${type}`, { type, label, options, placeholder, width, required }])}
                            />
                        </form>

                        <div className="qubely-form-group qubely-form-button" >
                            <QubelyButtonEdit
                                enableButton={enableButton}
                                buttonFillType={buttonFillType}
                                buttonSize={buttonSize}
                                buttonText={buttonText}
                                buttonIconName={buttonIconName}
                                buttonIconPosition={buttonIconPosition}
                                buttonTag={buttonTag}
                                onTextChange={value => setAttributes({ buttonText: value })}
                            />
                        </div>

                        <div className="qubely-form-add-item">

                            <Dropdown
                                className={"qubely-action-add-form-field"}
                                contentClassName={"qubely-form-field-picker"}
                                position="bottom center"
                                renderToggle={({ isOpen, onToggle }) =>
                                    <div onClick={onToggle} aria-expanded={isOpen} className="qubely-action-add-form-item">
                                        <i className="fas fa-plus-circle"></i>
                                        <span> {__(`Add new item`)}</span>
                                    </div>

                                }
                                renderContent={() => this.renderFormFieldTypes()}
                            />
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Edit;