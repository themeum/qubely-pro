const { __ } = wp.i18n
const { Fragment, Component } = wp.element;
const {
    PanelBody,
    Tooltip,
    Toolbar,
    SelectControl,
    IconButton
} = wp.components

const {
    InspectorControls,
    RichText,
    BlockControls,
    MediaUpload,
    MediaPlaceholder
} = wp.blockEditor

const {
    RadioAdvanced,
    ColorAdvanced,
    Select,
    Tabs,
    Tab,
    Range,
    Color,
    Styles,
    Typography,
    Toggle,
    BorderRadius,
    BoxShadow,
    Alignment,
    Padding,
    Inline: { InlineToolbar },
    withCSSGenerator,
    gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
    ContextMenu: { ContextMenu, handleContextMenu },
    InspectorTabs,
    InspectorTab
} = wp.qubelyComponents

import icons from '../../helpers/icons'

const linkOptions = [
    { value: 'attachment', label: __('Attachment Page') },
    { value: 'media', label: __('Media File') },
    { value: 'none', label: __('None') },
];
class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            device: 'md',
            spacer: true,
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

    updateGalleryImage = (key, value, index) => {
        const {
            setAttributes,
            attributes: { galleryItems, galleryContents }
        } = this.props

        if (key === 'add' || key === 'delete') {
            let updatedAttributes = key === 'add' ? [...galleryContents, { title: __('Best Gutenberg Block') }] : galleryContents.slice(0, galleryItems - 1)
            setAttributes({
                galleryContents: updatedAttributes,
                galleryItems: key === 'add' ? galleryItems + 1 : galleryItems - 1
            })
        } else {
            let updatedAttributes = galleryContents.map((data, itemIndex) => {
                if (index === itemIndex) {
                    return { ...data, [key]: value }
                } else {
                    return data
                }
            })
            setAttributes({ galleryContents: updatedAttributes })
        }
    }


    moveItem = (index, direction) => {
        const { setAttributes, attributes: { galleryContents } } = this.props
        let newgalleryItems = JSON.parse(JSON.stringify(galleryContents))

        if (direction === 'remove') {
            newgalleryItems.splice(index, 1)
        } else if (direction === 'right') {
            let tempElement = newgalleryItems[index]
            newgalleryItems[index] = newgalleryItems[index + 1]
            newgalleryItems[index + 1] = tempElement
        } else {
            let tempElement = newgalleryItems[index]
            newgalleryItems[index] = newgalleryItems[index - 1]
            newgalleryItems[index - 1] = tempElement
        }
        setAttributes({ galleryContents: newgalleryItems })
    }

    renderGalleryItem = () => {
        const { isSelected, setAttributes, attributes: { galleryContents, enableCaption, enableOverlay, showCaption, imageAnimation, enablePopup, enablePopupIcon } } = this.props

        return ([...galleryContents, { image: undefined, title: undefined, addNewItem: true }].map(({ title, image, addNewItem = false }, index) => {
            return (
                <div key={index} className={`qubely-gallery-item`}>
                    <Tooltip text={__('Delete this item')}>
                        <span className="qubely-repeatable-action-remove" role="button" onClick={() => this.moveItem(index, 'remove')}><span className="dashicons dashicons-no-alt" /></span>
                    </Tooltip>
                    {
                        index < galleryContents.length &&
                        <div className="qubely-gallery-item__move-menu">
                            <IconButton
                                icon={icons.leftArrow}
                                onClick={() => index === 0 ? undefined : this.moveItem(index, 'left')}
                                className="qubely-gallery-item__move-backward"
                                label={__('Move image backward')}
                                aria-disabled={index === 0}
                                disabled={!isSelected}
                            />

                            <IconButton
                                icon={icons.rightArrow}
                                onClick={() => index === galleryContents.length - 1 ? undefined : this.moveItem(index, 'right')}
                                className="qubely-gallery-item__move-forward"
                                label={__('Move image forward')}
                                aria-disabled={index === galleryContents.length - 1}
                                disabled={!isSelected}
                            />
                        </div>
                    }

                    <div className={`qubely-gallery-content ${enablePopup ? 'qubely-gallery-pupup' : ''}`}>
                        <div className={`qubely-gallery-image-container${enableOverlay ? ' qubely-gallery-overlay' : ''}`}>
                            <div className={`qubely-gallery-content-image${(image != undefined && image.url != undefined) ? '' : ' qubely-empty-image'} qubely-gallery-image-${imageAnimation}`}>
                                <MediaUpload
                                    onSelect={value => {
                                        if (addNewItem) {
                                            setAttributes({
                                                galleryContents: [
                                                    ...galleryContents,
                                                    ...value.map(item => {
                                                        return (
                                                            {
                                                                title: item.caption,
                                                                image: item
                                                            }
                                                        )
                                                    })
                                                ]
                                            })
                                        } else {
                                            this.updateGalleryImage('image', value, index)
                                        }
                                    }
                                    }
                                    allowedTypes={['image']}
                                    multiple={addNewItem}
                                    value={image}
                                    render={({ open }) => (
                                        <Fragment>
                                            {(image != undefined && image.url != undefined) ?
                                                <div className="qubely-gallery-content-image-editor">
                                                    <img src={image.url} alt={__(image.alt)} />
                                                    <div className="qubely-media-actions qubely-field-button-list">
                                                        <Tooltip text={__('Edit')}>
                                                            <button className="qubely-button" aria-label={__('Edit')} onClick={open} role="button">
                                                                <span aria-label={__('Edit')} className="fas fa-pencil-alt fa-fw" />
                                                            </button>
                                                        </Tooltip>
                                                        <Tooltip text={__('Remove')}>
                                                            <button className="qubely-button" aria-label={__('Remove')} onClick={() => this.updateGalleryImage('image', '', index)} role="button">
                                                                <span aria-label={__('Close')} className="far fa-trash-alt fa-fw" />
                                                            </button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                :
                                                <a className="qubely-insert-image" href="#" onClick={open}>
                                                    <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-insert" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>
                                                    <span>{__('Insert Image')}</span>
                                                </a>
                                            }
                                        </Fragment>
                                    )}
                                />
                                {enablePopupIcon && <div className={'qubely-gallery-pupup-icon'}><i class="fas fa-plus"></i></div>}
                            </div>

                            {enableCaption == 1 &&
                                <div className={`qubely-gallery-caption-wrapper ${(showCaption === 'onHover') ? 'qubely-gallery-caption-onHover' : ''}`}>
                                    <RichText
                                        placeholder={__('Add title')}
                                        tagName='div'
                                        className="qubely-gallery-caption"
                                        value={title}
                                        onChange={value => this.updateGalleryImage('title', value, index)}
                                        keepPlaceholderOnFocus
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )
        }))
    }

    onSelectImages = (images) => {
        const { setAttributes } = this.props
        let galleryNewContents = images.map(image => {
            return (
                {
                    title: image.caption,
                    image: image
                }
            )
        })

        setAttributes({ galleryContents: galleryNewContents, galleryItems: galleryNewContents.length })
    }

    render() {
        const {
            name,
            clientId,
            attributes,
            setAttributes,
            attributes: {
                uniqueId,
                className,
                galleryItems,
                galleryContents,
                linkTo,
                style,
                column,
                gutter,
                imgBorderRadius,
                enablePopup,
                enablePopupIcon,
                imgBoxShadow,
                enableImgFixedHeight,
                imgFixedHeight,
                imageAnimation,
                enableCaption,
                captionPadding,
                captionVerticalAlign,
                captionAlignment,
                showCaption,
                captionTypography,
                captionColor,
                enableOverlay,
                overlayBg,
                overlayHoverBg,
                overlayBlend,
                globalZindex,
                enablePosition,
                selectPosition,
                positionXaxis,
                positionYaxis,
                hideTablet,
                hideMobile,
                globalCss,
                animation,
                interaction
            }
        } = this.props
        const { device } = this.state


        if (galleryContents.length === 0) {
            return (
                <MediaPlaceholder
                    className={'qubely-gallery-media-placeholder'}
                    labels={{
                        title: __('Qubely Gallery'),
                        instructions: __('Drag images, upload new ones or select files from your library.'),
                    }}
                    onSelect={this.onSelectImages}
                    accept="image/*"
                    allowedTypes={['image']}
                    multiple
                />
            )
        }

        return (
            <Fragment>
                <InspectorControls key="inspector">
                    <InspectorTabs tabs={['style', 'advance']}>
                        <InspectorTab key={'style'}>
                            <PanelBody title={__('General Settings')}>
                                <Styles columns={2} value={style} onChange={val => setAttributes({ style: val })}
                                    options={[
                                        { value: 1, svg: icons.gallery_1 },
                                        { value: 2, svg: icons.gallery_2 },
                                    ]}
                                />

                                <Range
                                    label={__('Select Column')}
                                    value={column}
                                    onChange={(value) => setAttributes({ column: value })}
                                    min={1} step={1} max={6}
                                    responsive device={device}
                                    onDeviceChange={value => this.setState({ device: value })}
                                />
                                <Range label={__('Gutter')} value={gutter} onChange={val => setAttributes({ gutter: val })} min={0} max={50} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => this.setState({ device: value })} />
                                <Toggle label={__('Enable Popup')} value={enablePopup} onChange={value => setAttributes({ enablePopup: value })} />
                                {enablePopup &&
                                    <Toggle label={__('Enable Popup Icon')} value={enablePopupIcon} onChange={value => setAttributes({ enablePopupIcon: value })} />
                                }
                                {!enablePopup &&
                                    <SelectControl
                                        label={__('Link To')}
                                        value={linkTo}
                                        onChange={value => setAttributes({ linkTo: value })}
                                        options={linkOptions}
                                    />
                                }
                            </PanelBody>
                            <PanelBody title={__('Image')} initialOpen={false}>

                                {(style === 1) &&
                                    <Fragment>
                                        <Toggle label={__('Fixed Image Height')} value={enableImgFixedHeight} onChange={value => setAttributes({ enableImgFixedHeight: value })} />
                                        {enableImgFixedHeight && <Range label={__('')} value={imgFixedHeight} onChange={value => setAttributes({ imgFixedHeight: value })} unit={['px', 'em', '%']} min={10} max={600} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />}
                                    </Fragment>
                                }
                                <BorderRadius label={__('Radius')} value={imgBorderRadius} onChange={val => setAttributes({ imgBorderRadius: val })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                <BoxShadow label={__('Box-Shadow')} value={imgBoxShadow} onChange={val => setAttributes({ imgBoxShadow: val })} disableInset />
                                <Select label={__('Image Animation')} options={[['none', __('No Animation')], ['slide-top', __('Slide From Top')], ['slide-right', __('Slide From Right')], ['slide-bottom', __('Slide From Bottom')], ['slide-left', __('Slide From Left')], ['zoom-in', __('Zoom In')], ['zoom-out', __('Zoom Out')], ['scale', __('Scale')]]} value={imageAnimation} onChange={val => setAttributes({ imageAnimation: val })} />
                            </PanelBody>

                            {/* caption     */}
                            <PanelBody title={__('Caption')} initialOpen={false}>
                                <Toggle label={__('Enable Caption')} value={enableCaption} onChange={val => setAttributes({ enableCaption: val })} />
                                {enableCaption == 1 &&
                                    <Fragment>
                                        <Padding label={__('Padding')} value={captionPadding} onChange={val => setAttributes({ captionPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <RadioAdvanced label={__('Show')} value={showCaption} onChange={(value) => setAttributes({ showCaption: value })}
                                            options={[
                                                { label: __('On Hover'), value: 'onHover', title: __('On Hover') },
                                                { label: __('Always'), value: 'always', title: __('Always') }
                                            ]}
                                        />
                                        <RadioAdvanced label={__('Vertical Align')} value={captionVerticalAlign} onChange={(value) => setAttributes({ captionVerticalAlign: value })}
                                            options={[
                                                { label: __('Top'), value: 'top', title: __('Top') },
                                                { label: __('Middle'), value: 'center', title: __('Middle') },
                                                { label: __('Bottom'), value: 'bottom', title: __('Bottom') },
                                            ]}
                                        />
                                        <Alignment label={__('Horizontal Alignment')} value={captionAlignment} alignmentType="content" onChange={val => setAttributes({ captionAlignment: val })} alignmentType="content" disableJustify />
                                        <Typography label={__('Caption Typography')} value={captionTypography} onChange={val => setAttributes({ captionTypography: val })} device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <Color label={__('Caption Color')} value={captionColor} onChange={(value) => setAttributes({ captionColor: value })} />
                                    </Fragment>
                                }
                            </PanelBody>

                            <PanelBody title={__('Overlay')} initialOpen={false}>
                                <Toggle label={__('Enable')} value={enableOverlay} onChange={val => setAttributes({ enableOverlay: val })} />
                                {enableOverlay == 1 &&
                                    <Fragment>
                                        <Tabs>
                                            <Tab tabTitle={__('Normal')}>
                                                <ColorAdvanced label={__('Background')} value={overlayBg} onChange={(value) => setAttributes({ overlayBg: value })} />
                                            </Tab>
                                            <Tab tabTitle={__('Hover')}>
                                                <ColorAdvanced label={__('Background')} value={overlayHoverBg} onChange={(value) => setAttributes({ overlayHoverBg: value })} />
                                            </Tab>
                                        </Tabs>

                                        <Select label={__('Blend Mode')} options={[['normal', __('Normal')], ['multiply', __('Multiply')], ['screen', __('Screen')], ['overlay', __('Overlay')], ['darken', __('Darken')], ['lighten', __('Lighten')], ['color-dodge', __('Color Dodge')], ['saturation', __('Saturation')], ['luminosity', __('Luminosity')], ['color', __('Color')], ['color-burn', __('Color Burn')], ['exclusion', __('Exclusion')], ['hue', __('Hue')]]} value={overlayBlend} onChange={val => setAttributes({ overlayBlend: val })} />
                                    </Fragment>
                                }
                            </PanelBody>
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
                    <div className={`qubely-block-gallery qubely-gallery-item-${style}`} onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>
                        <div className={`qubely-gallery-items ${'qubely-column-grid qubely-column-grid-md' + column.md + ' ' + 'qubely-column-grid-sm' + column.sm + ' ' + 'qubely-column-grid-xs' + column.xs}`}>
                            {this.renderGalleryItem()}
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
        )
    }
}

export default withCSSGenerator()(Edit);
