/* eslint-disable react/react-in-jsx-scope */
const { __ } = wp.i18n
const { createBlock } = wp.blocks
const { compose } = wp.compose
const { select, dispatch, withSelect, withDispatch } = wp.data
const { InspectorControls, BlockControls, InnerBlocks, RichText } = wp.blockEditor
const { Dropdown, PanelBody, TextControl, Toolbar, TextareaControl, Button, SelectControl } = wp.components
const {
    Component,
    Fragment,
    createRef } = wp.element
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
    withCSSGenerator,
    QubelyButton: { buttonSettings },
    gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
    ContextMenu: {
        ContextMenu,
        handleContextMenu
    },
    InspectorTabs,
    InspectorTab
} = wp.qubelyComponents;

import icons from '../../helpers/icons';


class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spacer: true,
            selectedItem: -1,
            hideDropdown: null,
            newItemType: 'text',
            device: 'md',
            groupField: false,
            test: false,
            saved_globally: false,
            mc_lists: [],
            mc_fields: [],
        };
        this._saveGlobally = this._saveGlobally.bind(this);
        this.qubelyContextMenu = createRef();
    }

    componentDidMount() {
        const {
            setAttributes,
            clientId,
            attributes: {
                uniqueId,
                afterSubmitAction,
                reCaptchaSiteKey,
                reCaptchaSecretKey,
            }
        } = this.props;
        const _client = clientId.substr(0, 6);

        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }

        if (qubely_admin.qubely_recaptcha_site_key) {
            setAttributes({ reCaptchaSiteKey: qubely_admin.qubely_recaptcha_site_key });
        }

        if (qubely_admin.qubely_recaptcha_secret_key) {
            setAttributes({ reCaptchaSecretKey: qubely_admin.qubely_recaptcha_secret_key });
        }
        if (afterSubmitAction === 'mailchimp') {
            this.fetchMCLists();
        }
    }

    /**
     * Get all mailchimp lists
     */
    fetchMCLists() {
        fetch(qubely_admin.ajax + '?action=qubely_mc_get_lists')
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (response.data && response.data.lists) {
                    this.setState({
                        mc_lists: response.data.lists
                    })
                    this.fetchMCFields();
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

    fetchMCFields(listId) {
        const {
            attributes: {
                mcListId
            }
        } = this.props;
        let selectedList = mcListId;
        if (typeof listId !== 'undefined') {
            selectedList = listId;
        }

        fetch(qubely_admin.ajax + `?action=qubely_mc_get_fields&list=${selectedList}`)
            .then(response => response.json())
            .then(response => {
                if (response.data && response.data.fields) {
                    this.setState({
                        mc_fields: response.data.fields
                    })
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

    submitMailchimp() {
        const {
            attributes: {
                mcListId,
                mcMappedFields
            }
        } = this.props;
        fetch(qubely_admin.ajax + '?action=qubely_mc_add_subs', {
            body: JSON.stringify({
                list: mcListId,
                fields: {
                    ...mcMappedFields
                }
            })
        })
    }

    async _saveGlobally(siteKey, secretKey) {
        if (!siteKey || !secretKey) return;
        try {
            await wp.apiFetch({
                path: 'qubely/v1/add_qubely_options',
                method: 'POST',
                data: { key: 'qubely_recaptcha_site_key', value: siteKey }
            });
            await wp.apiFetch({
                path: 'qubely/v1/add_qubely_options',
                method: 'POST',
                data: { key: 'qubely_recaptcha_secret_key', value: secretKey }
            });
            this.setState({ saved_globally: true });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {

        const {
            block,
            attributes: {
                showLabel,
                labelAlignment,
                afterSubmitAction
            }
        } = this.props;
        const { updateBlock, toggleSelection } = dispatch('core/block-editor');

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
            toggleSelection(false);
        }

        if (afterSubmitAction === 'mailchimp' && prevProps.attributes.afterSubmitAction !== afterSubmitAction) {
            this.fetchMCLists();
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
        innerBlocks.push(createBlock('qubely/form-row', { uniqueId: '' }, [createBlock('qubely/form-column', { uniqueId: 'test2' }, [createBlock(`qubely/formfield-${newFieldType}`, { fieldName: `${newFieldType}-${innerBlocks.length + 1}1` })])]))
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
                    <div className={'qubely-form-field-tabs'}>
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
                                                innerBlocks.push(createBlock('qubely/form-row', {}, Array(value).fill(0).map(() => createBlock('qubely/form-column', { width: { sm: tempWidth, md: tempWidth, xs: tempWidth, unit: '%' }, fieldSize: 'custom', parentClientId: clientId }))))
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
                        ['qubely/form-column', { parentClientId: clientId, fieldSize: 'medium' },
                            [
                                ['qubely/formfield-text', { parentClientId: clientId, type: 'text', label: 'First Name', placeHolder: 'First name', width: 'medium', required: true, fieldName: 'text-11' }]
                            ]
                        ],
                        ['qubely/form-column', { parentClientId: clientId, fieldSize: 'medium' },
                            [
                                ['qubely/formfield-text', { parentClientId: clientId, type: 'text', label: 'Last Name', placeHolder: 'Last name', width: 'medium', required: true, fieldName: 'text-12' }]
                            ]
                        ],
                    ]
                ],
                ...formItems.map(({ type, label, options, placeHolder, width, required }, index) => {
                    return (
                        ['qubely/form-row', { parentClientId: clientId },
                            [
                                ['qubely/form-column', { parentClientId: clientId, fieldSize: 'large' },
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

    renderSubmitActionSettings() {
        const { afterSubmitAction } = this.props.attributes
        switch (afterSubmitAction) {
            case 'mailchimp':
                return this.renderMailchimpSettings();
            // case 'aweber':
            //     return this.renderAWeberSettings();
            // case 'drip':
            //     return this.renderDripSettings();
            // case 'mailerlite':
            //     return this.renderMailerliteSettings();
            default:
                return this.renderEmailSettings();
        }
    }

    renderSubmitActionNotice() {
        const setting_url = qubely_admin.admin_url + 'admin.php?page=qubely-settings';
        const afterSubmitAction = this.props.attributes;

        const ApiNotice = (props) => {
            return <div className='api-notice warning'>{props.notice}, <a target='_blank' href={setting_url}>{__('Add key here')}</a></div>
        }

        switch (afterSubmitAction) {
            case 'mailchimp':
                return this.state.mcListId ? null : <ApiNotice notice="MailChimp API key not found" />
            default:
                break;
        }
    }

    /**
     * Email Settings
     */
    renderEmailSettings() {
        const {
            setAttributes,
            attributes: {
                emailReceiver,
                emailHeaders,
                emailFrom,
                emailSubject,
                emailBody
            }
        } = this.props
        return (
            <PanelBody title={__('Email Settings')} initialOpen={false}>
                <TextControl
                    label={__('Recipient Email')}
                    value={emailReceiver}
                    onChange={val => setAttributes({ emailReceiver: val })}
                    placeholder={__('Enter Recipient Email')}
                    help={__('Enter the recipient email address. This field is mandatory. Without a recipient email, form will not work.')}
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
                    help={__('Set your form email body here. In editor don\'t add any CSS style or others option just add your form field name between double curly braces {{field-name}} as you set in \'Field Name\'.')}
                />
            </PanelBody>
        );
    }

    /**
     * 
     * @return Form builder fields
     */
    getFormFields = () => {
        const {
            clientId,
        } = this.props;
        const formBuilder = wp.data.select('core/block-editor').getBlock(clientId);
        let fields = [{
            label: 'Select',
            value: null
        }];

        formBuilder.innerBlocks.forEach(block => {
            const {
                name,
                innerBlocks = []
            } = block;
            if (innerBlocks.length > 0) {
                innerBlocks.forEach(column => {
                    const fieldName = column.innerBlocks[0].attributes.fieldName
                    fields.push({
                        label: fieldName.toUpperCase(),
                        value: fieldName
                    })
                })
            }
        });

        return fields;

    }

    /**
     * MailChimp
     */
    renderMailchimpSettings() {
        const {
            mc_fields,
            mc_lists,
        } = this.state;

        const {
            setAttributes,
            attributes: {
                mcListId,
                mcMappedFields,
            }
        } = this.props;

        return (
            <PanelBody title={__('Mailchimp Settings')} initialOpen={true}>
                <SelectControl
                    label={__('Select a list')}
                    value={this.props.attributes.mcListId}
                    onChange={(id) => {
                        this.props.setAttributes({ mcListId: id });
                        this.setState({
                            mcListId: id
                        });
                        this.fetchMCFields(id);
                    }}
                    options={mc_lists}
                />
                <h2>Field Mapping</h2>
                {
                    (mc_fields.length > 0 && mcListId) ?
                        mc_fields.map((field) => (
                            <SelectControl
                                label={`${field.remote_label} (${field.remote_id}) ${field.remote_required ? '*' : ''}`}
                                value={mcMappedFields[field.remote_id]}
                                onChange={newValue => {
                                    setAttributes({
                                        mcMappedFields: {
                                            ...mcMappedFields,
                                            [field.remote_id]: newValue
                                        }
                                    });
                                }}
                                options={this.getFormFields()}
                            />
                        ))
                        :
                        <div className="qubely-mc-fields">{__('Please select a list')}</div>
                }
            </PanelBody>
        );
    }

    /**
     * AWeber
     */
    renderAWeberSettings() {
        return (
            <PanelBody title={__('AWeber Settings')} initialOpen={true}>
            // Settings Here
            </PanelBody>
        );
    }

    // /**
    //  * Drip
    //  */
    // renderDripSettings() {
    //     return (
    //         <PanelBody title={__('Drip Settings')} initialOpen={true}>
    //             // Settings Here
    //         </PanelBody>
    //     );
    // }

    // /**
    //  * Mailerlite
    //  */
    // renderMailerliteSettings() {
    //     return (
    //         <PanelBody title={__('Mailerlite Settings')} initialOpen={true}>
    //             // Settings Here
    //         </PanelBody>
    //     );
    // }

    render() {
        const {
            name,
            clientId,
            attributes,
            setAttributes,
            attributes: {
                uniqueId,
                className,
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
                afterSubmitAction
            }
        } = this.props

        const { device } = this.state

        const setting_url = qubely_admin.admin_url + 'admin.php?page=qubely-settings';
        return (
            <Fragment>
                <InspectorControls key="inspector">
                    <InspectorTabs tabs={['style', 'advance']}>
                        <InspectorTab key={'style'}>
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

                                <Toggle label={__('Enable Policy Checkbox')} value={policyCheckbox} onChange={val => setAttributes({ policyCheckbox: val })} />
                                <Toggle label={__('Enable reCAPTCHA')} value={reCaptcha} onChange={val => setAttributes({ reCaptcha: val })} />

                                {
                                    reCaptcha && (
                                        ((qubely_admin.qubely_recaptcha_site_key && qubely_admin.qubely_recaptcha_site_key) || this.state.saved_globally) ? (
                                            <div className='api-notice'>{__('reCaptcha keys added successfully')}, <a target='_blank' href={setting_url}>{__('Edit keys here')}</a></div>
                                        ) : (
                                                reCaptchaSiteKey && reCaptchaSecretKey ? (
                                                    <div className='recaptcha-keys'>
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
                                                        <Button isPrimary onClick={() => this._saveGlobally(reCaptchaSiteKey, reCaptchaSecretKey)}>{__('Set globally')}</Button>
                                                    </div>
                                                ) : (
                                                        <div className='api-notice warning'>{__('reCaptcha requires site key & secret key')}, <a target='_blank' href={setting_url}>{__('Add keys here')}</a></div>
                                                    )
                                            )
                                    )
                                }
                            </PanelBody>

                            <PanelBody title={__('Submit Action')} initialOpen={false}>
                                <SelectControl
                                    label={__('Select an action')}
                                    value={afterSubmitAction}
                                    onChange={afterSubmitAction => setAttributes({ afterSubmitAction })}
                                    options={[
                                        { value: null, label: 'Choose actions', disabled: true },
                                        { value: 'email', label: 'Email' },
                                        { value: 'mailchimp', label: 'MailChimp' },
                                        // { value: 'drip', label: 'Drip' },
                                        // { value: 'aweber', label: 'AWeber' },
                                        // { value: 'mailerlite', label: 'Mailer Lite' },
                                    ]}
                                />

                                {this.renderSubmitActionNotice()}

                            </PanelBody>

                            {this.renderSubmitActionSettings()}

                            {buttonSettings(this.props.attributes, device, (key, value) => setAttributes({ [key]: value }), (key, value) => { this.setState({ [key]: value }) })}
                        </InspectorTab>

                        <InspectorTab key={'advance'}>
                            {animationSettings(uniqueId, animation, setAttributes)}
                            {interactionSettings(uniqueId, interaction, setAttributes)}
                        </InspectorTab>
                    </InspectorTabs>
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

                <div className={`qubely-block-${uniqueId}${className ? ` ${className}` : ''}`}>
                    <div
                        className={`qubely-block-form qubely-layout-${layout}`}
                        onContextMenu={event => handleContextMenu(event, this.qubelyContextMenu.current)}
                    >
                        <form className={`qubely-form is-${inputSize}`}>
                            <InnerBlocks
                                allowedBlocks={['qubely/formfield-row', 'qubely/formfield-column',]}
                                template={this.renderFormTemplate()}
                            />

                            {policyCheckbox &&
                                <div className={'qubely-form-policy-checkbox-wrapper'}>
                                    <input className="qubely-form-policy-checkbox" type="checkbox" name={`qubely-form-policy-${uniqueId}`} id={`qubely-form-policy-checkbox-${uniqueId}`} value="Yes" required />
                                    <RichText
                                        placeholder={__('Add checkbox message')}
                                        className={'qubely-form-policy-checkbox-message'}
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
                                className={'qubely-action-add-form-field'}
                                contentClassName={'qubely-form-field-picker'}
                                position="bottom center"
                                renderToggle={({ isOpen, onToggle }) =>
                                    <div onClick={onToggle} aria-expanded={isOpen} className="qubely-action-add-form-item">
                                        <i className="fas fa-plus-circle" />
                                        <span onClick={() => this.setState({ hideDropdown: onToggle })}> {__('Add new item')}</span>
                                    </div>

                                }
                                renderContent={() => this.renderFormFieldTypes()}
                            />
                        </div>
                        <div
                            ref={this.qubelyContextMenu}
                            className={'qubely-context-menu-wraper'}
                        >
                            <ContextMenu
                                name={name}
                                clientId={clientId}
                                attributes={attributes}
                                setAttributes={setAttributes}
                                qubelyContextMenu={this.qubelyContextMenu.current}
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
        const { getBlock, getBlockRootClientId } = select('core/block-editor')
        let rootBlockClientId = getBlockRootClientId(clientId)
        rootBlockClientId = getBlockRootClientId(clientId)
        return {
            rootBlockClientId,
            block: getBlock(clientId),
        }
    }),
    withDispatch((dispatch) => {
        const { insertBlock, removeBlock, updateBlockAttributes, toggleSelection } = dispatch('core/block-editor')
        return {
            insertBlock,
            removeBlock,
            updateBlockAttributes,
            toggleSelection
        }
    }),
    withCSSGenerator()
])(Edit)