const { __ } = wp.i18n
const {
    Fragment,
    Component
} = wp.element;
const {
    PanelBody,
    TextControl,
    Toolbar,
    Tooltip
} = wp.components
const {
    RichText,
    InspectorControls,
    BlockControls,
    InnerBlocks,
    MediaUpload
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
    Background,
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

const mediaOptions = [
    { label: __('Image'), value: 'image', title: __('Image') },
    { label: __('Video'), value: 'video', title: __('Video') }
]
const videoSources = [
    { label: __('Local'), value: 'local', title: __('Local') },
    { label: __('External'), value: 'external', title: __('External') }
]
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
                localVideo,
                videoUrl,
                vimeoId,
                youtubeId,
                autoplay,
                videoWidth,


                mediaType,
                imagePosition,
                imagePositionHorizontal,
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
                imageBorderRadius,
                mediaSpacing,
                image,
                image2x,
                imgAlt,
                imageWidth,
                bgColor,
                bgImage,
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

                //stack
                stackBg,
                stackWidth,
                stackSpace,
                stackBorderRadius,
                stackPadding,
                stackBoxShadow,

                //Badge
                enableBadge,

                badge,
                badgeStyle,
                badgePosition,
                badgeSize,
                badgeSpacing,
                badgeSpacingTop,
                badgeColor,
                badgeBg,
                badgeTypography,
                badgeRadius,

                showContextMenu,
            }
        } = this.props

        let autoPlay = autoplay ? '1' : '0';

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
                                { value: 7, svg: icons.mediacard_5, label: __('') },
                            ]}
                        />

                    </PanelBody>
                    <PanelBody title={__('Card Settings')} initialOpen={false}>
                        {
                            layout == 1 &&
                            <Alignment
                                responsive
                                disableJustify
                                device={device}
                                value={alignment}
                                label={__('Alignment')}
                                alignmentType="content"
                                onChange={val => setAttributes({ alignment: val })}
                                onDeviceChange={value => this.setState({ device: value })}
                            />
                        }
                        {(layout=='3') &&
                            <Background label={__('Background')} sources={['image', 'gradient', 'video']} parallax value={bgImage} onChange={val => setAttributes({ bgImage: val })} />
                        }
                        {(layout!='3') &&
                            <ColorAdvanced label={__('Background')} value={bgColor} onChange={val => setAttributes({ bgColor: val })} />
                        }
                        <Border label={__('Border')} value={bgBorder} onChange={val => setAttributes({ bgBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BorderRadius label={__('Card Corner')} value={bgBorderRadius} onChange={(value) => setAttributes({ bgBorderRadius: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Padding label={__('Card Padding')} value={bgPadding} onChange={val => setAttributes({ bgPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BoxShadow label={__('Card Shadow')} value={bgShadow} onChange={(value) => setAttributes({ bgShadow: value })} />
                    </PanelBody>
                    {(layout!='3') &&
                        <PanelBody title={__('Media Settings')} initialOpen={false} >
                        {(layout=='1') &&
                        <RadioAdvanced
                            label={__('Image Position')}
                            options={[
                                { value: 'top', label: __('Top'), },
                                { value: 'bottom', label: __('Bottom'), },
                            ]}
                            value={imagePosition}
                            onChange={val => setAttributes({ imagePosition: val })}
                        />
                        }
                        {(layout=='2') &&
                        <RadioAdvanced
                            label={__('Image Position')}
                            options={[
                                { value: 'left', label: __('Left'), },
                                { value: 'right', label: __('Right'), },
                            ]}
                            value={imagePositionHorizontal}
                            onChange={val => setAttributes({ imagePositionHorizontal: val })}
                        />
                        }
                        <RadioAdvanced
                            label={__('Type')}
                            value={mediaType}
                            options={mediaOptions}
                            onChange={val => setAttributes({ mediaType: val })}
                        />
                        {
                            mediaType == 'image' ?
                                <Fragment>
                                    <Media
                                        panel
                                        value={image}
                                        multiple={false}
                                        type={['image']}
                                        label={__('Image')}
                                        onChange={val => setAttributes({ image: val })} />
                                    <Media
                                        panel
                                        value={image2x}
                                        multiple={false}
                                        type={['image']}
                                        label={__('Retina Image')}
                                        onChange={val => setAttributes({ image2x: val })} />
                                    {
                                        image.url &&
                                        <TextControl
                                            value={imgAlt}
                                            label={__('Alt Text')}
                                            onChange={val => setAttributes({ imgAlt: val })}
                                        />
                                    }
                                    {
                                        (layout !== 3 && layout !== 4) &&
                                        <Range
                                            min={0}
                                            max={2000}
                                            responsive
                                            device={device}
                                            value={imageWidth}
                                            unit={['px', 'em', '%']}
                                            label={__('Image Width')}
                                            onChange={val => setAttributes({ imageWidth: val })}
                                            onDeviceChange={value => this.setState({ device: value })}
                                        />

                                    }

                                    <BorderRadius
                                        min={0}
                                        max={100}
                                        responsive
                                        device={device}
                                        label={__('Radius')}
                                        unit={['px', 'em', '%']}
                                        value={imageBorderRadius}
                                        onDeviceChange={value => this.setState({ device: value })}
                                        onChange={val => setAttributes({ imageBorderRadius: val })}
                                    />
                                    {
                                        (layout === 1 || layout === 2) &&
                                        <Range
                                            min={0}
                                            max={200}
                                            responsive
                                            device={device}
                                            value={mediaSpacing}
                                            label={__('Spacing')}
                                            unit={['px', 'em', '%']}
                                            onChange={val => setAttributes({ mediaSpacing: val })}
                                            onDeviceChange={value => this.setState({ device: value })}
                                        />
                                    }
                                </Fragment>
                                :
                                <Fragment>

                                    <RadioAdvanced
                                        label={__('Video Source')}
                                        value={videoSource}
                                        options={videoSources}
                                        onChange={val => setAttributes({ videoSource: val })}
                                    />
                                    {
                                        videoSource === 'external' ?
                                            <Fragment>
                                                <TextControl label={__('Url')} value={videoUrl} onChange={val => setAttributes({ videoUrl: val })} />

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
                                            </Fragment>
                                            :
                                            <Media
                                                panel={true}
                                                multiple={false}
                                                type={['video']}
                                                value={localVideo}
                                                label={__('Local Video')}
                                                onChange={value => setAttributes({ localVideo: value })}
                                            />
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
                    </PanelBody>
                    }
                    {
                        (layout === 4 || layout === 5) &&
                        <PanelBody title={__('Stack Style')} initialOpen={true}>

                            <ColorAdvanced
                                value={stackBg}
                                label={__('Stack Background')}
                                onChange={(value) => setAttributes({ stackBg: value })}
                            />
                            <Range
                                min={50}
                                max={600}
                                responsive
                                device={device}
                                value={stackWidth}
                                label={__('Stack Size')}
                                unit={['px', 'em', '%']}
                                onChange={value => setAttributes({ stackWidth: value })}
                                onDeviceChange={value => this.setState({ device: value })}
                            />
                            <BorderRadius
                                min={0}
                                max={100}
                                responsive
                                device={device}
                                unit={['px', 'em', '%']}
                                value={stackBorderRadius}
                                label={__('Stack Corner')}
                                onDeviceChange={value => this.setState({ device: value })}
                                onChange={value => setAttributes({ stackBorderRadius: value })}
                            />
                            <Padding
                                min={0}
                                max={60}
                                responsive
                                device={device}
                                value={stackPadding}
                                unit={['px', 'em', '%']}
                                label={__('Stack Padding')}
                                onChange={val => setAttributes({ stackPadding: val })}
                                onDeviceChange={value => this.setState({ device: value })}
                            />
                            <BoxShadow
                                value={stackBoxShadow}
                                label={__('Stack Box Shadow')}
                                onChange={(value) => setAttributes({ stackBoxShadow: value })}
                            />
                        </PanelBody>
                    }
                    <PanelBody title={__('Badge')} initialOpen={false} >
                        {/* <Toggle
                            value={enableBadge}
                            label={__('Enable')}
                            onChange={val => setAttributes({ enableBadge: val })}
                        /> */}
                        <Fragment>
                            {/* <Styles value={badgeStyle} onChange={val => setAttributes({ badgeStyle: val })}
                                options={[
                                    { value: 1, svg: QubelyFreeIcons.pricing.badge[1], label: __('Style 1') },
                                    { value: 2, svg: QubelyFreeIcons.pricing.badge[2], label: __('Style 2') },
                                    { value: 3, svg: QubelyFreeIcons.pricing.badge[3], label: __('Style 3') },
                                    { value: 4, svg: QubelyFreeIcons.pricing.badge[4], label: __('Style 4') },
                                    { value: 5, svg: QubelyFreeIcons.pricing.badge[5], label: __('Style 5') },
                                    { value: 6, svg: QubelyFreeIcons.pricing.badge[6], label: __('Style 6') },
                                ]}
                            /> */}
                            <RadioAdvanced
                                label={__('Badge')}
                                options={[
                                    { icon: 'fas fa-ban', value: 'none', label: __('None'), },
                                    { value: 'default', label: __('Default'), },
                                    { value: 'badge', label: __('Badge'), }
                                ]}
                                value={badgeStyle}
                                onChange={val => setAttributes({ badgeStyle: val })}
                            />
                            {(badgeStyle == 'badge') &&
                                <Select
                                    label={__("Badge Position")}
                                    options={[['leftTop', __('Left Top')], ['rightTop', __('Right Top')], ['leftBottom', __('Left Bottom')], ['rightBottom', __('Right Bottom')]]}
                                    value={badgePosition}
                                    onChange={value => setAttributes({ badgePosition: value })}
                                />
                            }
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
                            <Typography
                                value={badgeTypography}
                                disableLineHeight
                                onChange={val => setAttributes({ badgeTypography: val })}
                                device={device}
                                onDeviceChange={value => this.setState({ device: value })} />
                        </Fragment>
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
                    <div className={`qubely-block-mediacard qubely-mediacard-layout-${layout}`} onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>
                        {(badgeStyle != 'none') && <span className={`qubely-mediacard-badge qubely-badge-style-${badgeStyle} qubely-badge-size-${badgeSize}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}><span>{badge}</span></span>}
                        <div className={`qubely-block-mediacard-wrapper`}>
                            {(layout!=3) &&
                                <div className={`qubely-mediacard-media_wrapper qubely-mediacard-${mediaType} qubely-backend`}>
                                {
                                    mediaType == 'video' &&
                                    <Fragment>
                                        {
                                            videoSource === 'external' ?
                                                <Fragment>
                                                    {videoSource == 'vimeo' ?
                                                        <iframe src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay}&loop=1&autopause=0`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                                        :
                                                        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay}&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com`}></iframe>
                                                    }
                                                </Fragment>
                                                :
                                                <div className={`qubely-mediacard-video qubely-local-video`}>
                                                    <video controls src={localVideo.url} />
                                                </div>

                                        }
                                    </Fragment>
                                }

                                {mediaType === 'image' &&
                                    <Fragment>
                                        {
                                            (image && image.url) ?
                                                <img
                                                    src={image.url}
                                                    {...(imgAlt && { alt: imgAlt })}
                                                    className="qubely-mediacard-image"
                                                    srcset={image2x.url != undefined ? image.url + ' 1x, ' + image2x.url + ' 2x' : ''}
                                                />
                                                :
                                                <div className="qubely-mediacard-image-picker">
                                                    <div className="qubely-mediacard-image qubely-image-placeholder"><i className="far fa-image" /></div>
                                                </div>
                                        }
                                    </Fragment>
                                }


                            </div>
                            }
                            <div className="qubely-mediacard-content-wrapper">
                                <div className={`qubely-mediacard-innerBlocks`}>
                                    <InnerBlocks
                                        allowedBlocks={qubelyBlocks}
                                        templateInsertUpdatesSelection={false}
                                        template={
                                            [[
                                                'qubely/text',
                                                {
                                                    title: __(title),
                                                    content: __(content),
                                                }
                                            ]]
                                        }
                                        renderAppender={() => (
                                            <InnerBlocks.ButtonBlockAppender />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            showContextMenu &&
                            <div ref="qubelyContextMenu" className={`qubely-context-menu-wraper`} >
                                <ContextMenu
                                    name={name}
                                    clientId={clientId}
                                    attributes={attributes}
                                    setAttributes={setAttributes}
                                    qubelyContextMenu={this.refs.qubelyContextMenu}
                                />
                            </div>
                        }
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