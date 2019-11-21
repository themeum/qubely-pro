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
    },
    QubelyFreeIcons
} = wp.qubelyComponents
const {
    withSelect
} = wp.data
import icons from '../../helpers/icons';


class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            device: 'md',
            selector: true,
            spacer: true,
            qubelyBlocks: []
        }
    }

    componentDidMount() {
        const {
            blockTypes,
            setAttributes,
            clientId,
            attributes: {
                uniqueId
            }
        } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }

        this.setState({ qubelyBlocks: blockTypes.filter(block => block.category === 'qubely').map(block => block.name) })

    }

    render() {
        const {
            name,
            clientId,
            attributes,
            blockTypes,
            categories,
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

                title,
                titleAlignment,
                titleTypography,
                titleColor,
                titleColorHover,
                titleSpacing,

                //content
                enableContent,
                content,
                contentAlignment,
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

                //Badge
                enableBadge,

                badge,
                badgeStyle,
                badgeSize,
                badgePosition,
                badgeSpacing,
                badgeSpacingTop,
                badgeColor,
                badgeBg,
                badgeTypography,
                badgeRadius,
            }
        } = this.props

        let autoPlay = (autoplay == true) ? '1' : '0';

        const { device, qubelyBlocks } = this.state

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

                    <PanelBody title={__('Image Settings')} initialOpen={false} >

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

                    <PanelBody title={__('Title')} initialOpen={false} >
                    <Alignment label={__('Alignment')} value={titleAlignment} onChange={val => setAttributes({ titleAlignment: val })} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
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

                    <PanelBody title={__('Content')} initialOpen={false} >
                        <Toggle label={__('Show Content')} value={enableContent} onChange={val => setAttributes({ enableContent: val })} />
                        {enableContent &&
                            <Fragment>
                                <Alignment label={__('Alignment')} value={contentAlignment} onChange={val => setAttributes({ contentAlignment: val })} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
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

                    <PanelBody title={__('Card Style')} initialOpen={false}>
                        <ColorAdvanced label={__('Background Color')} value={cardBackgroundColor} onChange={val => setAttributes({ cardBackgroundColor: val })} />
                        <Padding label={__('Padding')} value={cardBgPadding} onChange={val => setAttributes({ cardBgPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Border label={__('Border')} value={cardBgBorder} onChange={val => setAttributes({ cardBgBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BoxShadow label={__('Box-Shadow')} value={cardBgShadow} onChange={(value) => setAttributes({ cardBgShadow: value })} />
                        <BorderRadius label={__('Radius')} value={cardBgBorderRadius} onChange={(value) => setAttributes({ cardBgBorderRadius: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                    </PanelBody>

                    <PanelBody title={__('Badge')} initialOpen={false} >
                        <Toggle
                            value={enableBadge}
                            label={__('Enable')}
                            onChange={val => setAttributes({ enableBadge: val })}
                        />

                        {enableBadge &&
                            <Fragment>
                                <Styles value={badgeStyle} onChange={val => setAttributes({ badgeStyle: val })}
                                    options={[
                                        { value: 1, svg: QubelyFreeIcons.pricing.badge[1], label: __('Style 1') },
                                        { value: 2, svg: QubelyFreeIcons.pricing.badge[2], label: __('Style 2') },
                                        { value: 3, svg: QubelyFreeIcons.pricing.badge[3], label: __('Style 3') },
                                        { value: 4, svg: QubelyFreeIcons.pricing.badge[4], label: __('Style 4') },
                                        { value: 5, svg: QubelyFreeIcons.pricing.badge[5], label: __('Style 5') },
                                        { value: 6, svg: QubelyFreeIcons.pricing.badge[6], label: __('Style 6') },
                                    ]}
                                />

                                <RadioAdvanced
                                    label={__('Size')}
                                    options={[
                                        { label: __('Small'), value: 'small', title: __('Small') },
                                        { label: __('Regular'), value: 'regular', title: __('Regular') },
                                        { label: __('Large'), value: 'large', title: __('Large') },
                                    ]}
                                    value={badgeSize}
                                    onChange={val => setAttributes({ badgeSize: val })}
                                />

                                {(badgeStyle == 1 || badgeStyle == 2 || badgeStyle == 5 || badgeStyle == 6) &&
                                    <RadioAdvanced
                                        label={__('Position')}
                                        options={[
                                            { label: __('Left'), value: 'left', title: __('Left') },
                                            { label: __('Right'), value: 'right', title: __('Right') },
                                        ]}
                                        value={badgePosition}
                                        onChange={val => setAttributes({ badgePosition: val })}
                                    />
                                }

                                <Color
                                    label={__('Background color')}
                                    value={badgeBg}
                                    onChange={val => setAttributes({ badgeBg: val })}
                                />

                                <Color
                                    label={__('Text color')}
                                    value={badgeColor}
                                    onChange={val => setAttributes({ badgeColor: val })}
                                />

                                {badgeStyle == 5 &&
                                    <BorderRadius
                                        label={__('Radius')}
                                        value={badgeRadius}
                                        onChange={(value) => setAttributes({ badgeRadius: value })}
                                        min={0}
                                        max={100}
                                        unit={['px', 'em', '%']}
                                        responsive
                                        device={device}
                                        onDeviceChange={value => this.setState({ device: value })}
                                    />
                                }

                                {(badgeStyle == 3 || badgeStyle == 5 || badgeStyle == 6) &&
                                    <Range
                                        label={badgeStyle == 5 ? __('Side Spacing') : __('Spacing')}
                                        value={badgeSpacing}
                                        onChange={(value) => setAttributes({ badgeSpacing: value })}
                                        min={0}
                                        max={100}
                                        unit={['px', 'em', '%']}
                                        responsive
                                        device={device}
                                        onDeviceChange={value => this.setState({ device: value })}
                                    />
                                }

                                {badgeStyle == 5 &&
                                    <Range
                                        label={__('Top Spacing')}
                                        value={badgeSpacingTop}
                                        onChange={(value) => setAttributes({ badgeSpacingTop: value })}
                                        min={0}
                                        max={100}
                                        unit={['px', 'em', '%']}
                                        responsive
                                        device={device}
                                        onDeviceChange={value => this.setState({ device: value })}
                                    />
                                }

                                <Separator />

                                <Typography
                                    value={badgeTypography}
                                    disableLineHeight
                                    onChange={val => setAttributes({ badgeTypography: val })}
                                    device={device}
                                    onDeviceChange={value => this.setState({ device: value })} />
                            </Fragment>
                        }

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
                        {enableBadge && <span className={`qubely-mediacard-badge qubely-badge-style-${badgeStyle} qubely-badge-size-${badgeSize}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}><span>{badge}</span></span>}
                        <div className={`qubely-mediacard-media${useMediaBg ? ' qubely-media-has-bg' : ''}`} >
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
                                    <RichText
                                        key="editable"
                                        keepPlaceholderOnFocus
                                        placeholder={__('Add Text...')}
                                        className="qubely-mediacard-title"
                                        onChange={value => setAttributes({ title: value })}
                                        value={title} />
                                </div>

                                {enableContent &&
                                    <div className="qubely-mediacard-content" >
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

                                <div className={`qubely-mediacard-innerBlocks`}>
                                    <InnerBlocks
                                        templateLock={false}
                                        allowedBlocks={qubelyBlocks}
                                        templateInsertUpdatesSelection={false}
                                        renderAppender={() => (
                                            <InnerBlocks.ButtonBlockAppender />
                                        )}
                                    />
                                </div>
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

export default withSelect((select, props) => {
    const {
        getBlockTypes,
    } = select('core/blocks');
    return {
        blockTypes: getBlockTypes(),
    }
})
    (Edit)