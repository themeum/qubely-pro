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
                imageBorderRadius,
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

                            ]}
                        />
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
                    </PanelBody>

                    <PanelBody title={__('Card Settings')} initialOpen={false}>
                        <ColorAdvanced label={__('Background')} value={bgColor} onChange={val => setAttributes({ bgColor: val })} />
                        <Border label={__('Border')} value={bgBorder} onChange={val => setAttributes({ bgBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BorderRadius label={__('Card Corner')} value={bgBorderRadius} onChange={(value) => setAttributes({ bgBorderRadius: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Padding label={__('Card Padding')} value={bgPadding} onChange={val => setAttributes({ bgPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BoxShadow label={__('Card Shadow')} value={bgShadow} onChange={(value) => setAttributes({ bgShadow: value })} />
                    </PanelBody>

                    <PanelBody title={__('Media Settings')} initialOpen={false} >

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
                    </PanelBody>

                    <PanelBody title={__('Title')} initialOpen={false} >
                        {
                            layout !== 1 &&
                            <Alignment
                                responsive
                                device={device}
                                label={__('Alignment')}
                                value={titleAlignment}
                                onChange={val => setAttributes({ titleAlignment: val })}
                                onDeviceChange={value => this.setState({ device: value })}
                            />
                        }
                        <Typography
                            device={device}
                            label={__('Typography')}
                            value={titleTypography}
                            onChange={(value) => setAttributes({ titleTypography: value })}
                            onDeviceChange={value => this.setState({ device: value })}
                        />
                        <Range
                            label={<span>Spacing <span className="dashicons dashicons-sort" title="Y Spacing" /></span>}
                            min={0}
                            max={200}
                            responsive
                            device={device}
                            value={titleSpacing}
                            unit={['px', 'em', '%']}
                            onChange={val => setAttributes({ titleSpacing: val })}
                            onDeviceChange={value => this.setState({ device: value })}
                        />
                        <Tabs>
                            <Tab tabTitle={__('Normal')}>
                                <Color
                                    label={__('Color')}
                                    value={titleColor}
                                    onChange={(value) => setAttributes({ titleColor: value })}
                                />
                            </Tab>
                            <Tab tabTitle={__('Hover')}>
                                <Color
                                    label={__('Color')}
                                    value={titleColorHover}
                                    onChange={(value) => setAttributes({ titleColorHover: value })}
                                />
                            </Tab>
                        </Tabs>
                    </PanelBody>

                    <PanelBody title={__('Content')} initialOpen={false} >
                        <Toggle label={__('Show Content')} value={enableContent} onChange={val => setAttributes({ enableContent: val })} />
                        {enableContent &&
                            <Fragment>
                                {
                                    layout !== 1 && <Alignment
                                        responsive
                                        device={device}
                                        label={__('Alignment')}
                                        value={contentAlignment}
                                        onChange={val => setAttributes({ contentAlignment: val })}
                                        onDeviceChange={value => this.setState({ device: value })} />
                                }


                                <Typography
                                    device={device}
                                    label={__('Typography')}
                                    value={contentTypography}
                                    onChange={(value) => setAttributes({ contentTypography: value })}
                                    onDeviceChange={value => this.setState({ device: value })} />

                                <Padding
                                    min={0}
                                    max={300}
                                    responsive
                                    device={device}
                                    label={__('Padding')}
                                    value={contentPadding}
                                    unit={['px', 'em', '%']}
                                    onChange={val => setAttributes({ contentPadding: val })}
                                    onDeviceChange={value => this.setState({ device: value })}
                                />
                                <Tabs>
                                    <Tab tabTitle={__('Normal')}>
                                        <Color
                                            label={__('Color')}
                                            value={contentColor}
                                            onChange={(value) => setAttributes({ contentColor: value })} />
                                    </Tab>

                                    <Tab tabTitle={__('Hover')}>
                                        <Color
                                            label={__('Color')}
                                            value={contentColorHover}
                                            onChange={(value) => setAttributes({ contentColorHover: value })} />
                                    </Tab>
                                </Tabs>

                                {enableButton &&
                                    <Range
                                        min={0}
                                        max={100}
                                        responsive
                                        device={device}
                                        label={__('Spacing')}
                                        value={contentSpacing}
                                        unit={['px', 'em', '%']}
                                        onChange={(value) => setAttributes({ contentSpacing: value })}
                                        onDeviceChange={value => this.setState({ device: value })} />
                                }
                            </Fragment>
                        }
                    </PanelBody>

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
                    <PanelBody title={__('Card Style')} initialOpen={false}>
                        <ColorAdvanced
                            label={__('Background Color')}
                            value={cardBackgroundColor}
                            onChange={val => setAttributes({ cardBackgroundColor: val })} />
                        <Padding
                            label={__('Padding')}
                            value={cardBgPadding}
                            onChange={val => setAttributes({ cardBgPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Border
                            min={0}
                            max={10}
                            responsive
                            device={device}
                            label={__('Border')}
                            value={cardBgBorder}
                            unit={['px', 'em', '%']}
                            onChange={val => setAttributes({ cardBgBorder: val })}
                            onDeviceChange={value => this.setState({ device: value })}
                        />
                        <BoxShadow
                            value={cardBgShadow}
                            label={__('Box-Shadow')}
                            onChange={(value) => setAttributes({ cardBgShadow: value })} />
                        <BorderRadius
                            min={0}
                            max={100}
                            responsive
                            device={device}
                            label={__('Radius')}
                            unit={['px', 'em', '%']}
                            value={cardBgBorderRadius}
                            onDeviceChange={value => this.setState({ device: value })}
                            onChange={(value) => setAttributes({ cardBgBorderRadius: value })}
                        />
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
                    <div className={`qubely-block-mediacard qubely-mediacard-layout-${layout}`} onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>
                        {enableBadge && <span className={`qubely-mediacard-badge qubely-badge-style-${badgeStyle} qubely-badge-size-${badgeSize}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}><span>{badge}</span></span>}
                        <div className={`qubely-block-mediacard-wrapper`}>
                            <div className={`qubely-mediacard-media_wrapper qubely-mediacard-${mediaType} qubely-backend`}>
                                {mediaType == 'video' &&
                                    <Fragment>
                                        {
                                            videoSource == 'vimeo' ?
                                                <iframe src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay}&loop=1&autopause=0`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                                :
                                                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay}&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com`}></iframe>
                                        }
                                    </Fragment>
                                }

                                {mediaType == 'image' &&
                                    <Fragment>
                                        <MediaUpload
                                            onSelect={value => setAttributes({ image: value })}
                                            allowedTypes={['image']}
                                            multiple={false}
                                            value={image}
                                            render={({ open }) => (
                                                <Fragment>
                                                    {(image && image.url) ?
                                                        <Fragment>
                                                            <img className="qubely-mediacard-image" src={image.url} srcset={image2x.url != undefined ? image.url + ' 1x, ' + image2x.url + ' 2x' : ''} alt={imgAlt && imgAlt} />
                                                            <div className="qubely-media-actions qubely-field-button-list">
                                                                <Tooltip text={__('Edit')}>
                                                                    <button className="qubely-button" aria-label={__('Edit')} onClick={open} role="button">
                                                                        <span aria-label={__('Edit')} className="fas fa-pencil-alt fa-fw" />
                                                                    </button>
                                                                </Tooltip>
                                                                <Tooltip text={__('Remove')}>
                                                                    <button className="qubely-button" aria-label={__('Remove')} onClick={() => setAttributes({ image: {} })} role="button">
                                                                        <span aria-label={__('Close')} className="far fa-trash-alt fa-fw" />
                                                                    </button>
                                                                </Tooltip>
                                                            </div>
                                                        </Fragment>
                                                        :
                                                        <div className="qubely-mediacard-image-picker">
                                                            <a className="qubely-insert-image" href="#" onClick={open}>
                                                                <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-insert" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                                    <path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>
                                                                <span>{__('Insert')}</span>
                                                            </a>
                                                        </div>

                                                    }
                                                </Fragment>
                                            )}
                                        />
                                    </Fragment>
                                }
                            </div>


                            <div className="qubely-mediacard-content-wrapper">
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