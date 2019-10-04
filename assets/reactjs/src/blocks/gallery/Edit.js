const { __ } = wp.i18n
const { Fragment, Component } = wp.element;
const { PanelBody, Tooltip, Toolbar } = wp.components
const { InspectorControls, RichText, BlockControls, MediaUpload } = wp.editor
const { IconList,Inline: { InlineToolbar }, RadioAdvanced, ColorAdvanced, Select, Tabs, Tab, Range, Color, Styles, Typography, Toggle, Separator, Border, BorderRadius, BoxShadow, Alignment, Padding, Headings, CssGenerator: { CssGenerator } } = wp.qubelyComponents
import icons from '../../helpers/icons'

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

	updatePricelistContent = (key, value, index) => {
		const { setAttributes, attributes: { pricelistItems, pricelistContents } } = this.props
		if (key === 'add' || key === 'delete') {
			let updatedAttributes = key === 'add' ? [...pricelistContents, { title: 'Pricelist Block', date: 'January 1, 2021', description: 'Include detailed for your products, company, etc with Qubely Pricelist.' }] : pricelistContents.slice(0, pricelistItems - 1)
			setAttributes({
				pricelistContents: updatedAttributes,
				pricelistItems: key === 'add' ? pricelistItems + 1 : pricelistItems - 1
			})
		} else {
			let updatedAttributes = pricelistContents.map((data, itemIndex) => {
				if (index === itemIndex) {
					return { ...data, [key]: value }
				} else {
					return data
				}
			})
			setAttributes({ pricelistContents: updatedAttributes })
		}
	}

    removePricelistItem = (index) => {
		const { setAttributes, attributes: { pricelistContents } } = this.props
		let newPricelistItems = JSON.parse(JSON.stringify(pricelistContents))
		newPricelistItems.splice(index, 1)
		setAttributes({ pricelistContents: newPricelistItems })
	}

	renderPricelist = () => {
		const { attributes: { pricelistContents, contentAlign, headingLevel, enableImage } } = this.props
		const titleTagName = 'h' + headingLevel;
		return (pricelistContents.map(({ title, description, image, price, discount, badge }, index) => {

			return (
				<div key={index} className={`qubely-pricelist-item qubely-pricelist-item-${contentAlign}`}>
                    <Tooltip text={__('Delete this item')}>
                        <span className="qubely-repeatable-action-remove" role="button" onClick={() => this.removePricelistItem(index)}><i class="fas fa-close"></i></span>
                    </Tooltip>
					<div className={`qubely-pricelist-content`}>
						{enableImage == 1 &&
							<div className={`qubely-pricelist-image-container`}>
								<div className={`qubely-pricelist-content-image${(image != undefined && image.url != undefined) ? '' : ' qubely-empty-image'}`}>
                                    <MediaUpload
                                        onSelect={value => this.updatePricelistContent('image', value, index)}
                                        allowedTypes={['image']}
                                        multiple={false}
                                        value={image}
                                        render={({ open }) => (
                                            <Fragment>
                                                {(image != undefined && image.url != undefined) ?
                                                    <div className="qubely-pricelist-content-image-editor">
                                                        <img src={image.url} alt={__('image')} />
                                                        <div className="qubely-media-actions qubely-field-button-list">
                                                            <Tooltip text={__('Edit')}>
                                                                <button className="qubely-button" aria-label={__('Edit')} onClick={open} role="button">
                                                                    <span aria-label={__('Edit')} className="fas fa-pencil-alt fa-fw"></span>
                                                                </button>
                                                            </Tooltip>
                                                            <Tooltip text={__('Remove')}>
                                                                <button className="qubely-button" aria-label={__('Remove')} onClick={() => this.updatePricelistContent('image', '', index)} role="button">
                                                                    <span aria-label={__('Close')} className="far fa-trash-alt fa-fw"></span>
                                                                </button>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                    :
                                                    <a className="qubely-insert-image" href="#" onClick={open}>
                                                        <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-insert" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>
                                                        <span>{__('Insert')}</span>
                                                    </a>
                                                }
                                            </Fragment>
                                        )}
                                    />
                                </div>
							</div>
						}

						<div className="qubely-pricelist-description-wrapper">
                            <div className="qubely-pricelist-description">
                                <div className="qubely-pricelist-title-wrapper">
                                    <RichText
                                        placeholder={__('Add title')}
                                        tagName={titleTagName}
                                        className="qubely-pricelist-title"
                                        value={title}
                                        onChange={value => this.updatePricelistContent('title', value, index)}
                                        keepPlaceholderOnFocus
                                    />
                                </div>
                            </div>
						</div>
					</div>
				</div>
			)
		}))
	}

	render() {
		const { setAttributes, attributes: {
			uniqueId,
			pricelistItems,
			style,
            headingLevel,
			headingTypography,
			headingColor,
            headingSpacing,
            
			contentPadding,
			contentBorderRadius,
            contentBoxShadow,
            contentSpacing,
            contentAlign,
            overlayHoverBg,
            overlayBg,
            height,
        
			enableImage,
			imagePosition,
            imageBorderRadius,
            imageSize,
            imageSpacing,

		} } = this.props

		const { device } = this.state

		if (uniqueId) { CssGenerator(this.props.attributes, 'gallery', uniqueId) }

		return (
			<Fragment>
				<InspectorControls key="inspector">
					<PanelBody title={__('General Settings')}>
						<Range
							min={2}
							max={100}
							label={__('Number of Items')}
							value={pricelistItems}
							onChange={value => this.updatePricelistContent(value > pricelistItems ? 'add' : 'delete')}
						/>
                        <Styles columns={2} value={style} onChange={val => setAttributes({ style: val })}
							options={[
								{ value: 1, svg: icons.postgrid_design_1 },
								{ value: 2, svg: icons.postgrid_design_3 },
							]}
						/>
					</PanelBody>

                    <PanelBody title={__('Image')} initialOpen={false}>
                        <BorderRadius label={__('Radius')} value={contentBorderRadius} onChange={val => setAttributes({ contentBorderRadius: val })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <BoxShadow label={__('Box-Shadow')} value={contentBoxShadow} onChange={val => setAttributes({ contentBoxShadow: val })} disableInset />
                        <Range label={__('Spacing')} value={contentSpacing} onChange={val => setAttributes({ contentSpacing: val })} min={0} max={100} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => this.setState({ device: value })} />
                        <Padding label={__('Padding')} value={contentPadding} onChange={val => setAttributes({ contentPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                    </PanelBody>           

					<PanelBody title={__('Caption')} initialOpen={false}>
						<Headings label={__('Heading Tag')} selectedLevel={headingLevel} onChange={(value) => setAttributes({ headingLevel: value })} />
						<Typography label={__('Heading Typography')} value={headingTypography} onChange={val => setAttributes({ headingTypography: val })} device={device} onDeviceChange={value => this.setState({ device: value })} />
						<Color label={__('Heading Color')} value={headingColor} onChange={(value) => setAttributes({ headingColor: value })} />
						<Range label={__('Heading Spacing')} value={headingSpacing} onChange={val => setAttributes({ headingSpacing: val })} min={0} max={100} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => this.setState({ device: value })} />
					</PanelBody>

					<PanelBody title={__('Image')} initialOpen={false}>
						<Toggle label={__('Enable')} value={enableImage} onChange={val => setAttributes({ enableImage: val })} />
						{ (enableImage == 1) && (style != 3) &&
							<Fragment>
                                <RadioAdvanced label={__('Position')} value={imagePosition} onChange={(value) => setAttributes({ imagePosition: value })}
									options={[
										{ label: __('Left'), value: 'left', title: __('Left') },
										{ label: __('Top'), value: 'top', title: __('Top') }
									]}
								/>
								<Range label={__('Size')} value={imageSize} onChange={val => setAttributes({ imageSize: val })} min={0} max={500} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => this.setState({ device: value })} />
                                <BorderRadius label={__('Radius')} value={imageBorderRadius} onChange={val => setAttributes({ imageBorderRadius: val })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                <Range label={__('Spacing')} value={imageSpacing} onChange={val => setAttributes({ imageSpacing: val })} min={0} max={100} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => this.setState({ device: value })} />
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

				<div className={`qubely-block-${uniqueId}`}>
					<div className={`qubely-block-pricelist qubely-pricelist-item-${style}`}>
						<div className={`qubely-pricelist-items`}>
							{this.renderPricelist()}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Edit
