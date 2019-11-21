const { __ } = wp.i18n
const { createBlock } = wp.blocks
const { compose } = wp.compose
const { select, dispatch, withSelect, withDispatch } = wp.data
const { InspectorControls, BlockControls, InnerBlocks, RichText } = wp.blockEditor
const { Dropdown, PanelBody, TextControl, Toolbar, TextareaControl } = wp.components
const { Component, Fragment } = wp.element
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
    QubelyButtonEdit,
    Inline: { InlineToolbar },
    CssGenerator: { CssGenerator },
    QubelyButton: { buttonSettings },
    gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
    ContextMenu: { ContextMenu, handleContextMenu }
} = wp.qubelyComponents

import icons from '../../helpers/icons';




class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            spacer: true,
            selectedItem: -1,
            hideDropdown: null,
            newItemType: 'text',
            device: 'md',
            groupField: false,
            test: false
        }
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

    componentDidUpdate(prevProps, prevState) {

        const { block, attributes: { showLabel, labelAlignment } } = this.props
        const { updateBlock, toggleSelection } = dispatch('core/block-editor')

        let changedAttribute = showLabel !== prevProps.attributes.showLabel ? 'showLabel' : labelAlignment !== prevProps.attributes.labelAlignment ? 'labelAlignment' : false

        if (changedAttribute !== false) {
            block.innerBlocks.forEach(column => {
                updateBlock(column.innerBlocks[0].clientId, {
                    attributes: {
                        ...column.innerBlocks[0].attributes,
                        [changedAttribute]: this.props.attributes[changedAttribute]
                    }
                })
            })
            toggleSelection(false)
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

    addNewItem(fieldName, newFieldType) {

        const { clientId, attributes, setAttributes } = this.props
        const { getBlocks } = select('core/block-editor')
        const { replaceInnerBlocks } = dispatch('core/block-editor')

        const formItems = [...attributes.formItems]
        const newItem = {
            type: newFieldType,
            label: fieldName,
            placeholder: '',
            width: 100,
            required: true,
            hideLabel: false
        }

        formItems.push(newItem)
        setAttributes({ formItems })

        let innerBlocks = [...getBlocks(clientId)]
        innerBlocks.push(createBlock('qubely/form-row', {}, [createBlock(`qubely/form-column`, {}, [createBlock(`qubely/formfield-${newFieldType}`, { fieldName: `${newFieldType}-${innerBlocks.length + 1}1` })])]))
        replaceInnerBlocks(clientId, innerBlocks, false);

    }


    renderFormFieldTypes = () => {
        const { clientId } = this.props
        const { replaceInnerBlocks } = dispatch('core/block-editor')
        const { getBlocks } = select('core/block-editor')
        const { hideDropdown, groupField } = this.state
        let innerBlocks = [...getBlocks(clientId)]

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
        const formColumns = [
            [__('Two'), 2],
            [__('Three'), 3],
            [__('Four'), 4],
        ]

        return (
            <div className="qubely-form-field-types">
                {
                    !groupField &&
                    <div className={`qubely-form-field-tabs`}>
                        <div
                            onClick={() => { this.setState({ groupField: true }) }}
                            className={`qubely-form-field-tab${groupField ? ' qubely-active' : ''}`}
                        >
                            {icons.from_fields.column} {__('Add Column')}</div>
                    </div>
                }

                {
                    groupField ?
                        <div className="qubely-form-column-options">
                            {
                                formColumns.map(([columnName, value], index) => {
                                    return (
                                        <div
                                            className="qubely-form-column-option"
                                            onClick={() => {
                                                let tempWidth = `${100 / (index + 2)}`
                                                innerBlocks.push(createBlock('qubely/form-row', {}, Array(value).fill(0).map(() => createBlock(`qubely/form-column`, { width: { sm: tempWidth, md: tempWidth, xs: tempWidth, unit: '%' }, fieldSize: 'custom', parentClientId: clientId }))))
                                                replaceInnerBlocks(clientId, innerBlocks, false)
                                                this.setState({ groupField: false })
                                                hideDropdown && hideDropdown()
                                            }}
                                        >
                                            {Array(index + 2).fill(0).map(() => {
                                                return (
                                                    <i style={{ width: `${100 / (index + 1)}%` }} />
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        formFields.map(([fieldName, type]) => {
                            return (
                                <div className="qubely-form-field-type"
                                    onClick={() => {
                                        hideDropdown && hideDropdown()
                                        this.addNewItem(fieldName, type)
                                    }}
                                >
                                    {icons.from_fields[type]}   {fieldName}
                                </div>
                            )
                        })


                }
            </div>
        )


    }

    renderFormTemplate = () => {
        const { clientId, attributes: { formItems } } = this.props
        return (
            [
                ['qubely/form-row', { parentClientId: clientId },
                    [
                        [`qubely/form-column`, { parentClientId: clientId, fieldSize: 'medium' },
                            [
                                [`qubely/formfield-text`, { parentClientId: clientId, type: 'text', label: 'First Name', placeHolder: 'First name', width: 'medium', required: true, fieldName: 'text-11' }]
                            ]
                        ],
                        [`qubely/form-column`, { parentClientId: clientId, fieldSize: 'medium' },
                            [
                                [`qubely/formfield-text`, { parentClientId: clientId, type: 'text', label: 'Last Name', placeHolder: 'Last name', width: 'medium', required: true, fieldName: 'text-12' }]
                            ]
                        ],
                    ]
                ],
                ...formItems.map(({ type, label, options, placeHolder, width, required }, index) => {
                    return (
                        ['qubely/form-row', { parentClientId: clientId },
                            [
                                [`qubely/form-column`, { parentClientId: clientId, fieldSize: 'large' },
                                    [
                                        [`qubely/formfield-${type}`, { parentClientId: clientId, type, label, options, placeHolder, width, required, fieldName: `${type}-${index + 2}1` }]
                                    ]
                                ]
                            ]
                        ]

                    )
                })]
        )
    }

    render() {
        const {
            name,
            clientId,
            attributes,
            setAttributes,
            attributes: {
                uniqueId,
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
                materialDarkInputBg,
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
                enablePosition,
                selectPosition,
                positionXaxis,
                positionYaxis,
                hideTablet,
                hideMobile,
                globalCss,
                animation,
                interaction,
            }
        } = this.props

        const { device } = this.state


        if (uniqueId) { CssGenerator(attributes, 'form', uniqueId); }


        return (
            <Fragment>
                <InspectorControls key="inspector">

                    <PanelBody title={__('')} opened={true}>
                        <Styles
                            value={layout}
                            onChange={val => setAttributes({ layout: val })}
                            options={[
                                { value: 'classic', img: icons.form_classic },
                                { value: 'material', img: icons.form_material },
                                { value: 'materialdark', img: icons.form_material_dark },
                            ]}
                        />
                    </PanelBody>

                    <PanelBody title={__('Label')} initialOpen={false}>
                        <Typography
                            value={labelTypography}
                            onChange={val => setAttributes({ labelTypography: val })}
                        />
                        <Range
                            min={0}
                            max={100}
                            responsive
                            value={labelSpacing}
                            label={__('Spacing')}
                            unit={['px', 'em', '%']}
                            onChange={(value) => setAttributes({ labelSpacing: value })}
                        />
                        <Color
                            label={__('Color')}
                            value={labelColor}
                            onChange={val => setAttributes({ labelColor: val })}
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
                            </Fragment>
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
                            min={10}
                            max={300}
                            responsive
                            value={spacing}
                            label={__('Spacing')}
                            unit={['px', 'em', '%']}
                            onChange={(value) => setAttributes({ spacing: value })}
                        />

                        <Border
                            min={0}
                            max={10}
                            responsive
                            value={layout === 'classic' ? inputBorder : inputBorderMaterial}
                            label={__('Border')}
                            unit={['px', 'em', '%']}
                            onChange={val => setAttributes(layout === 'classic' ? { inputBorder: val } : { inputBorderMaterial: val })}
                        />

                        {(layout != 'material') &&
                            <BorderRadius
                                min={0}
                                max={100}
                                responsive
                                label={__('Radius')}
                                value={inputBorderRadius}
                                unit={['px', 'em', '%']}
                                onChange={(value) => setAttributes({ inputBorderRadius: value })}
                            />
                        }

                        <Tabs>
                            <Tab tabTitle={__('Normal')}>
                                <Color label={__('Input Text Color')} value={inputColor} onChange={val => setAttributes({ inputColor: val })} />
                                <Color
                                    label={__('Background Color')}
                                    value={layout !== 'materialdark' ? inputBg : materialDarkInputBg}
                                    onChange={val => setAttributes(layout !== 'materialdark' ? { inputBg: val } : { materialDarkInputBg: val })}
                                />
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

                    {buttonSettings(this.props.attributes, device, (key, value) => setAttributes({ [key]: value }), (key, value) => { this.setState({ [key]: value }) })}

                    {animationSettings(uniqueId, animation, setAttributes)}

                    {interactionSettings(uniqueId, interaction, setAttributes)}

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

                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId}`}>
                    <div className={`qubely-block-form qubely-layout-${layout}`} onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>
                        <form className={`qubely-form is-${inputSize}`}>
                            <InnerBlocks
                                allowedBlocks={['qubely/formfield-row', 'qubely/formfield-column',]}
                                template={this.renderFormTemplate()}
                            />

                            {policyCheckbox &&
                                <div className={`qubely-form-policy-checkbox-wrapper`}>
                                    <input className="qubely-form-policy-checkbox" type="checkbox" name={`qubely-form-policy-${uniqueId}`} id={`qubely-form-policy-checkbox-${uniqueId}`} value="Yes" required />
                                    <RichText
                                        placeholder={__('Add checkbox message')}
                                        className={`qubely-form-policy-checkbox-message`}
                                        value={policyCheckboxText}
                                        onChange={value => setAttributes({ policyCheckboxText: value })}
                                    />
                                </div>
                            }

                            <div className="qubely-form-button" >
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
                        </form>



                        <div className="qubely-form-add-item">

                            <Dropdown
                                className={"qubely-action-add-form-field"}
                                contentClassName={"qubely-form-field-picker"}
                                position="bottom center"
                                renderToggle={({ isOpen, onToggle }) =>
                                    <div onClick={onToggle} aria-expanded={isOpen} className="qubely-action-add-form-item">
                                        <i className="fas fa-plus-circle" />
                                        <span onClick={() => this.setState({ hideDropdown: onToggle })}> {__(`Add new item`)}</span>
                                    </div>

                                }
                                renderContent={() => this.renderFormFieldTypes()}
                            />
                        </div>
                        <div ref="qubelyContextMenu" className={`qubely-context-menu-wraper`} >
                            <ContextMenu
                                name={name}
                                clientId={clientId}
                                attributes={attributes}
                                setAttributes={setAttributes}
                                qubelyContextMenu={this.refs.qubelyContextMenu}
                            />
                        </div>
                   
                    </div>


                </div>

            </Fragment>
        );
    }
}
export default compose([
    withSelect((select, ownProps) => {
        const { clientId } = ownProps
        const { getBlock, getBlockRootClientId } = select('core/editor')
        let rootBlockClientId = getBlockRootClientId(clientId)
        rootBlockClientId = getBlockRootClientId(clientId)
        return {
            rootBlockClientId,
            block: getBlock(clientId),
        }
    }),
    withDispatch((dispatch) => {
        const { insertBlock, removeBlock, updateBlockAttributes, toggleSelection } = dispatch('core/editor')
        return {
            insertBlock,
            removeBlock,
            updateBlockAttributes,
            toggleSelection
        }
    }),
])(Edit)