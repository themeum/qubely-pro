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
    RadioAdvanced,
    Typography,
    Toggle,
    Styles,
    Alignment,
    ColorAdvanced,
    Background,
    Color,
    Border,
    BorderRadius,
    Padding,
    Margin,
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
            setAttributes,
            attributes: {

                uniqueId,
                layout,

                //fixed height
                fixedHeight,
                enableFixedHeight,

                //overlay
                enableOverlay,
                overlayBg,
                overlayHoverBg,
                overlayBlend,

                //media
                mediaType,
                imagePosition,
                imagePositionHorizontal,
                alignment,
                videoSource,
                localVideo,
                videoUrl,
                vimeoId,
                youtubeId,
                autoplay,
                videoWidth,
                imageBorderRadius,
                mediaSpacing,
                image,
                image2x,
                imgAlt,
                imageWidth,
                bgColor,
                bgImage,

                //content
                title,
                content,

                //Card
                bgBorder,
                bgPadding,
                bgBorderRadius,
                bgShadow,
                contentPosition,
                contentHorizontalPosition,

                //Global
                enablePosition,
                selectPosition,
                positionXaxis,
                positionYaxis,
                globalZindex,
                hideTablet,
                hideMobile,
                globalCss,

                //Stack
                stackBg,
                stackWidth,
                stackBorderRadius,
                stackPadding,
                stackBoxShadow,

                //Badge
                badge,
                badgeStyle,
                badgePosition,
                badgeColor,
                badgeBg,
                badgeTypography,
                badgePadding,
                badgeMargin,
                badgeBorderRadius,

                //Context
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
                        <Styles
                            columns={3}
                            value={layout}
                            options={[
                                { value: 1, svg: icons.mediacard_1, label: __('') },
                                { value: 2, svg: icons.mediacard_2, label: __('') },
                                { value: 3, svg: icons.mediacard_3, label: __('') },
                                { value: 4, svg: icons.mediacard_4, label: __('') },
                                { value: 5, svg: icons.mediacard_5, label: __('') },
                                { value: 6, svg: icons.mediacard_6, label: __('') },
                                { value: 7, svg: icons.mediacard_7, label: __('') },
                            ]}
                            onChange={val => setAttributes(
                                val === 3 ?
                                    {
                                        layout: val,
                                        bgImage: {
                                            ...bgImage,
                                            bgType: 'image',
                                            openBg: 1,
                                            bgImage: {
                                                url: 'http://qubely.io/wp-content/uploads/qubely-assets/demo/image8.jpg'
                                            }
                                        }
                                    }
                                    : { layout: val })
                            }
                        />

                    </PanelBody>
                    <PanelBody title={__('Card Settings')} initialOpen={false}>
                        {
                            (layout == 1) &&
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
                        {((layout == '4') || (layout == '7')) &&
                            <RadioAdvanced
                                label={__('Content Position')}
                                options={[
                                    { value: 'left', label: __('Left'), },
                                    { value: 'middle', label: __('Middle'), },
                                    { value: 'right', label: __('Right'), },
                                ]}
                                value={contentHorizontalPosition}
                                onChange={val => setAttributes({ contentHorizontalPosition: val })}
                            />
                        }
                        {((layout == '3') || (layout == '6')) &&
                            <RadioAdvanced
                                label={__('Content Position')}
                                options={[
                                    { value: 'top', label: __('Top'), },
                                    { value: 'middle', label: __('Middle'), },
                                    { value: 'bottom', label: __('Bottom'), },
                                ]}
                                value={contentPosition}
                                onChange={val => setAttributes({ contentPosition: val })}
                            />
                        }
                        {((layout == '1') || (layout == '4')) &&
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
                        {((layout == '2') || (layout == '5')) &&
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
                        {((layout == '3') || (layout == '6') || (layout == '7')) &&
                            <Background label={__('Background')} sources={['image', 'gradient', 'video']} parallax value={bgImage} onChange={val => setAttributes({ bgImage: val })} />
                        }
                        {((layout == '1') || (layout == '2') || (layout == '4') || (layout == '5')) &&
                            <ColorAdvanced label={__('Background')} value={bgColor} onChange={val => setAttributes({ bgColor: val })} />
                        }
                        <Border label={__('Border')} value={bgBorder} onChange={val => setAttributes({ bgBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BorderRadius label={__('Card Corner')} value={bgBorderRadius} onChange={(value) => setAttributes({ bgBorderRadius: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Padding label={__('Card Padding')} value={bgPadding} onChange={val => setAttributes({ bgPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BoxShadow label={__('Card Shadow')} value={bgShadow} onChange={(value) => setAttributes({ bgShadow: value })} />
                        {((layout == '3') || (layout == '6') || (layout == '7')) &&
                            <Fragment>
                                <Toggle label={__('Fixed Height')} value={enableFixedHeight} onChange={value => setAttributes({ enableFixedHeight: value })} />
                                {enableFixedHeight && <Range label={__('Height')} value={fixedHeight} onChange={value => setAttributes({ fixedHeight: value })} unit={['px', 'em', '%']} min={10} max={1000} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />}
                            </Fragment>
                        }
                        {(layout == '3') &&
                            <Fragment>
                                <Toggle label={__('Enable Overlay')} value={enableOverlay} onChange={val => setAttributes({ enableOverlay: val })} />
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
                            </Fragment>
                        }
                    </PanelBody>
                    {((layout === 1) || (layout === 2) || (layout === 4) || (layout === 5)) &&
                        <PanelBody title={__('Media Settings')} initialOpen={false}>
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
                                            (layout !== 3 && layout !== 4 && layout !== 5) &&
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
                                            (layout === 1 || layout === 2 || layout === 4 || layout === 5) &&
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

                                        {/* {(layout == 2 || layout == 3) &&
                                        <Range
                                            label={__('Video Width')}
                                            value={videoWidth}
                                            onChange={val => setAttributes({ videoWidth: val })}
                                            min={1} max={100}
                                            responsive device={device} unit={['px', 'em', '%']}
                                            onDeviceChange={value => this.setState({ device: value })}
                                        />
                                    } */}
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
                                    </Fragment>
                            }
                        </PanelBody>
                    }
                    {
                        (layout === 4 || layout === 5 || layout === 6 || layout === 7) &&
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
                        <Fragment>
                            <RadioAdvanced
                                label={__('Badge')}
                                options={
                                    ((layout == '3') || (layout == '6') || (layout == '7')) ?
                                        [
                                            { icon: 'fas fa-ban', value: 'none', label: __('None'), },
                                            { value: 'default', label: __('Default'), },
                                            { value: 'badge', label: __('Badge'), }
                                        ]
                                        :
                                        [
                                            { icon: 'fas fa-ban', value: 'none', label: __('None'), },
                                            { value: 'default', label: __('Default'), },
                                        ]
                                }
                                value={badgeStyle}
                                onChange={val => setAttributes({ badgeStyle: val })}
                            />
                            {(badgeStyle != 'none') &&
                                <Fragment>
                                    {((layout == '3') || (layout == '6') || (layout == '7')) &&
                                        <Select
                                            label={__("Badge Position")}
                                            options={[['leftTop', __('Left Top')], ['rightTop', __('Right Top')], ['leftBottom', __('Left Bottom')], ['rightBottom', __('Right Bottom')]]}
                                            value={badgePosition}
                                            onChange={value => setAttributes({ badgePosition: value })}
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
                                    <Typography
                                        value={badgeTypography}
                                        disableLineHeight
                                        onChange={val => setAttributes({ badgeTypography: val })}
                                        device={device}
                                        onDeviceChange={value => this.setState({ device: value })}
                                    />
                                    <Padding
                                        min={0}
                                        max={60}
                                        responsive
                                        device={device}
                                        value={badgePadding}
                                        unit={['px', 'em', '%']}
                                        label={__('Padding')}
                                        onChange={val => setAttributes({ badgePadding: val })}
                                        onDeviceChange={value => this.setState({ device: value })}
                                    />
                                    <Margin
                                        min={-200}
                                        max={300}
                                        responsive
                                        device={device}
                                        value={badgeMargin}
                                        unit={['px', 'em', '%']}
                                        label={__('Margin')}
                                        onChange={val => setAttributes({ badgeMargin: val })}
                                        onDeviceChange={value => this.setState({ device: value })}
                                    />
                                    <BorderRadius
                                        min={0}
                                        max={100}
                                        responsive
                                        device={device}
                                        unit={['px', 'em', '%']}
                                        value={badgeBorderRadius}
                                        label={__('Corner')}
                                        onDeviceChange={value => this.setState({ device: value })}
                                        onChange={value => setAttributes({ badgeBorderRadius: value })}
                                    />
                                </Fragment>
                            }

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
                    {/* <div className={`qubely-block-mediacard qubely-mediacard-layout-${layout}`} onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}> */}
                    <div className={`qubely-block-mediacard qubely-mediacard-layout-${layout} ${(imagePosition != '') ? 'qubely-mediacard-image-position-' + imagePosition : ''} ${(imagePositionHorizontal != '') ? 'qubely-mediacard-image-position-' + imagePositionHorizontal : ''}`}>
                        <div className={`qubely-block-mediacard-wrapper`}>
                            {((layout === 1) || (layout === 2) || (layout === 4) || (layout === 5)) &&
                                <div className={`qubely-mediacard-media_wrapper qubely-mediacard-${mediaType}`}>
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
                                                    <div className="qubely-mediacard-image qubely-image-placeholder"><i className="far fa-image" /></div>
                                            }
                                        </Fragment>
                                    }
                                </div>
                            }
                            <div className="qubely-mediacard-content-wrapper">
                                {(badgeStyle != 'none') && <span className={`${(badgeStyle == 'badge') ? 'qubely-mediacard-badge qubely-mediacard-badge-position qubely-badge-style-' + badgePosition : 'qubely-mediacard-badge'}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}>{badge}</span>}
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