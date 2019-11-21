const { __ } = wp.i18n
const {
    Fragment,
    Component
} = wp.element;
const {
    PanelBody,
    TextControl,
    Toolbar
} = wp.components
const {
    RichText,
    InspectorControls,
    BlockControls,
    InnerBlocks
} = wp.blockEditor
const {
    Media,
    Tabs,
    Tab,
    Range,
    BoxShadow,
    Select,
    Separator,
    RadioAdvanced,
    Typography,
    Toggle,
    Styles,
    Alignment,
    ColorAdvanced,
    Color,
    Headings,
    Border,
    BorderRadius,
    Padding,
    gloalSettings: {
        globalSettingsPanel
    },
    Inline: {
        InlineToolbar
    },
    CssGenerator: {
        CssGenerator
    },
    ContextMenu: {
        ContextMenu,
        handleContextMenu
    }
} = wp.qubelyComponents
import icons from '../../helpers/icons';

const TEMPLATE = [['qubely/column',]];

class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = { device: 'md', selector: true, spacer: true, openPanelSetting: '' };
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

    handlePanelOpenings = (panelName) => {
        this.setState({ ...this.state, openPanelSetting: panelName })
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

                videoSource,
                vimeoId,
                youtubeId,
                autoplay,
                videoWidth,

                contentAlign,

                mediaType,
                alignment,
                titleLevel,
                title,
                titleTypography,
                titleColor,
                titleColorHover,
                titleSpacing,

                //content
                enableContent,
                content,
                contentTypography,
                contentColor,
                contentColorHover,
                contentPadding,
                contentSpacing,

                useMediaBg,
                mediaBorderRadius,
                mediaSpacing,
                image,
                image2x,
                imgAlt,
                imageWidth,
                bgColor,
                bgColorHover,
                bgBorder,
                bgBorderColorHover,
                bgPadding,
                bgBorderRadius,
                bgShadow,
                bgShadowHover,
                enableButton,

                enablePosition,
                selectPosition,
                positionXaxis,
                positionYaxis,
                globalZindex,
                hideTablet,
                hideMobile,
                globalCss,

                // Card.
                cardBackgroundColor,
                cardBgPadding,
                cardBgBorder,
                cardBgShadow,
                cardBgBorderRadius,

                // Card Hover
                // cardBgColorHover,
                // cardBgShadowHover,
                // cardBgBorderColorHover
            }
        } = this.props

        let autoPlay = (autoplay == true) ? '1' : '0';

        const { openPanelSetting, device } = this.state
        const titleTagName = 'h' + titleLevel;

        if (uniqueId) { CssGenerator(this.props.attributes, 'mediacard', uniqueId); }

        return (
            <Fragment>
                <InspectorControls key="inspector">
                    <PanelBody title=''>
                        <Styles columns={3} value={layout} onChange={val => setAttributes({ layout: val })}
                            options={[
                                { value: 1, svg: icons.mediacard_1, label: __('') },
                                { value: 2, svg: icons.mediacard_2, label: __('') },
                                { value: 3, svg: icons.mediacard_3, label: __('') },
                                { value: 4, svg: icons.mediacard_4, label: __('') },
                                { value: 5, svg: icons.mediacard_5, label: __('') },
                                { value: 6, svg: icons.mediacard_5, label: __('') },

                            ]}
                        />

                        <RadioAdvanced label={__('Content Align')} value={contentAlign} onChange={val => setAttributes({ contentAlign: val })}
                            options={[
                                { label: __('Top'), value: 'top', title: __('Top') },
                                { label: __('Middle'), value: 'middle', title: __('Middle') },
                                { label: __('Bottom'), value: 'bottom', title: __('Bottom') },
                            ]}
                        />

                        <Padding
                            label={__('Content Padding')}
                            value={contentPadding}
                            onChange={val => setAttributes({ contentPadding: val })}
                            min={0} max={100} unit={['px', 'em', '%']}
                            responsive device={device}
                            onDeviceChange={value => this.setState({ device: value })}
                        />
                    </PanelBody>

                    <PanelBody title={__('Card Settings')} initialOpen={false}>
                        <ColorAdvanced label={__('Background')} value={bgColor} onChange={val => setAttributes({ bgColor: val })} />
                        <Border label={__('Border')} value={bgBorder} onChange={val => setAttributes({ bgBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BorderRadius label={__('Card Corner')} value={bgBorderRadius} onChange={(value) => setAttributes({ bgBorderRadius: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Padding label={__('Card Padding')} value={bgPadding} onChange={val => setAttributes({ bgPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BoxShadow label={__('Card Shadow')} value={bgShadow} onChange={(value) => setAttributes({ bgShadow: value })} />
                    </PanelBody>

                    <PanelBody title={__('Image Settings')} opened={'Media' === openPanelSetting} onToggle={() => this.handlePanelOpenings(openPanelSetting !== 'Media' ? 'Media' : '')}>

                        <RadioAdvanced label={__('Type')} value={mediaType} onChange={val => setAttributes({ mediaType: val })}
                            options={[
                                { label: __('Video'), value: 'video', title: __('Video') },
                                { label: __('Image'), value: 'image', title: __('Image') },
                            ]}
                        />

                        {mediaType &&
                            <Fragment>
                                {mediaType == 'image' &&
                                    <Fragment>
                                        <Media label={__('Image')} multiple={false} type={['image']} panel={true} value={image} onChange={val => setAttributes({ image: val })} />
                                        <Media label={__('Retina Image')} multiple={false} type={['image']} panel={true} value={image2x} onChange={val => setAttributes({ image2x: val })} />
                                        {image.url && <TextControl label={__('Alt Text')} value={imgAlt} onChange={val => setAttributes({ imgAlt: val })} />}
                                        <Range label={__('Image Width')} value={imageWidth} onChange={val => setAttributes({ imageWidth: val })} min={0} max={2000} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                    </Fragment>
                                }

                                {mediaType == 'video' &&
                                    <Fragment>
                                        <Select
                                            label={__('Video Type')}
                                            value={videoSource}
                                            options={[['vimeo', __('Vimeo Video')], ['youtube', __('YouTube Video')]]}
                                            onChange={value => setAttributes({ videoSource: value })}
                                        />

                                        {(videoSource === 'vimeo') ?
                                            <TextControl label={__('Vimeo Video ID')} value={vimeoId} onChange={val => setAttributes({ vimeoId: val })} />
                                            :
                                            <TextControl label={__('YouTube Video ID')} value={youtubeId} onChange={val => setAttributes({ youtubeId: val })} />
                                        }

                                        <Toggle label={__('Autoplay')} value={autoplay} onChange={val => setAttributes({ autoplay: val })} />

                                        {(layout == 2 || layout == 3) &&
                                            <Range
                                                label={__('Video Width')}
                                                value={videoWidth}
                                                onChange={val => setAttributes({ videoWidth: val })}
                                                min={1} max={100}
                                                responsive device={device} unit={['px', 'em', '%']}
                                                onDeviceChange={value => this.setState({ device: value })}
                                            />
                                        }
                                    </Fragment>
                                }

                                <Separator />

                                {mediaType == 'image' &&
                                    <Fragment>
                                        <BorderRadius label={__('Radius')} value={mediaBorderRadius} onChange={val => setAttributes({ mediaBorderRadius: val })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <Range label={__('Spacing')} value={mediaSpacing} onChange={val => setAttributes({ mediaSpacing: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                    </Fragment>
                                }
                            </Fragment>
                        }
                    </PanelBody>

                    <PanelBody title={__('Title')} opened={'Title' === openPanelSetting} onToggle={() => this.handlePanelOpenings(openPanelSetting !== 'Title' ? 'Title' : '')}>
                        <Headings label={__('Title Tag')} selectedLevel={titleLevel} onChange={(value) => setAttributes({ titleLevel: value })} />
                        <Typography label={__('Typography')} value={titleTypography} onChange={(value) => setAttributes({ titleTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Range label={<span>Spacing <span className="dashicons dashicons-sort" title="Y Spacing" /></span>} value={titleSpacing} onChange={val => setAttributes({ titleSpacing: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Tabs>
                            <Tab tabTitle={__('Normal')}>
                                <Color label={__('Color')} value={titleColor} onChange={(value) => setAttributes({ titleColor: value })} />
                            </Tab>
                            <Tab tabTitle={__('Hover')}>
                                <Color label={__('Color')} value={titleColorHover} onChange={(value) => setAttributes({ titleColorHover: value })} />
                            </Tab>
                        </Tabs>
                    </PanelBody>

                    <PanelBody title={__('Content')} opened={'Content' === openPanelSetting} onToggle={() => this.handlePanelOpenings(openPanelSetting !== 'Content' ? 'Content' : '')}>
                        <Toggle label={__('Show Content')} value={enableContent} onChange={val => setAttributes({ enableContent: val })} />
                        {enableContent &&
                            <Fragment>
                                <Typography label={__('Typography')} value={contentTypography} onChange={(value) => setAttributes({ contentTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />

                                <Tabs>
                                    <Tab tabTitle={__('Normal')}>
                                        <Color label={__('Color')} value={contentColor} onChange={(value) => setAttributes({ contentColor: value })} />
                                    </Tab>
                                    <Tab tabTitle={__('Hover')}>
                                        <Color label={__('Color')} value={contentColorHover} onChange={(value) => setAttributes({ contentColorHover: value })} />
                                    </Tab>
                                </Tabs>

                                {enableButton &&
                                    <Range label={__('Spacing')} value={contentSpacing} onChange={(value) => setAttributes({ contentSpacing: value })} unit={['px', 'em', '%']} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                }
                            </Fragment>
                        }
                    </PanelBody>

                    <PanelBody title={__('Card Style')} initialOpen={true}>
                        <ColorAdvanced label={__('Background Color')} value={cardBackgroundColor} onChange={val => setAttributes({ cardBackgroundColor: val })} />
                        <Padding label={__('Padding')} value={cardBgPadding} onChange={val => setAttributes({ cardBgPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Border label={__('Border')} value={cardBgBorder} onChange={val => setAttributes({ cardBgBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BoxShadow label={__('Box-Shadow')} value={cardBgShadow} onChange={(value) => setAttributes({ cardBgShadow: value })} />
                        <BorderRadius label={__('Radius')} value={cardBgBorderRadius} onChange={(value) => setAttributes({ cardBgBorderRadius: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                    </PanelBody>

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
                    <div className={`qubely-block-mediacard qubely-mediacard-layout-${layout} media-type-${mediaType}`} onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>

                        <div className={`qubely-mediacard-media${useMediaBg ? ' qubely-media-has-bg' : ''}`} onClick={() => this.handlePanelOpenings('Media')}>
                            {mediaType == 'video' &&
                                <Fragment>
                                    {(videoSource == 'vimeo') ?
                                        <iframe src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay}&loop=1&autopause=0`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                        :
                                        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay}&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com`}></iframe>
                                    }
                                </Fragment>
                            }

                            {(mediaType == 'image') &&
                                <Fragment>
                                    {image.url != undefined ?
                                        <img className="qubely-mediacard-image" src={image.url} srcset={image2x.url != undefined ? image.url + ' 1x, ' + image2x.url + ' 2x' : ''} alt={imgAlt && imgAlt} />
                                        :
                                        <div className="qubely-mediacard-image qubely-image-placeholder"><i className="far fa-image" /></div>
                                    }
                                </Fragment>
                            }
                        </div>

                        <div className="qubely-mediacard-body">
                            <div className="qubely-mediacard-wrap">
                                <div className={`qubely-mediacard-title-container`} >
                                    <div className="qubely-mediacard-title-inner">
                                        <div onClick={() => this.handlePanelOpenings('Title')}>
                                            <RichText
                                                key="editable"
                                                tagName={titleTagName}
                                                className="qubely-mediacard-title"
                                                keepPlaceholderOnFocus
                                                placeholder={__('Add Text...')}
                                                onChange={value => setAttributes({ title: value })}
                                                value={title} />
                                        </div>
                                    </div>
                                </div>

                                {enableContent &&
                                    <div className="qubely-mediacard-content" onClick={() => this.handlePanelOpenings('Content')}>
                                        <RichText
                                            key="editable"
                                            tagName='div'
                                            className="qubely-mediacard-text"
                                            keepPlaceholderOnFocus
                                            placeholder={__('Add Text...')}
                                            onChange={value => setAttributes({ content: value })}
                                            value={content}
                                        />
                                    </div>
                                }

                                {(typeof this.props.insertBlocksAfter !== 'undefined') && (
                                    <div className={`innerBlock-content`}>
                                        <InnerBlocks
                                            template={TEMPLATE}
                                            templateLock={true}
                                            templateInsertUpdatesSelection={false}
                                        />
                                    </div>
                                )}
                            </div>
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

export default Edit