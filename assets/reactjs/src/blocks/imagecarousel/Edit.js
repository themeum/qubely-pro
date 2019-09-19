const { __ } = wp.i18n
const { Fragment, Component } = wp.element;
const { PanelBody } = wp.components
const { InspectorControls, RichText, MediaUpload } = wp.editor
import icons from '../../helpers/icons'
const { Range, Color, Typography, Toggle, Separator, ColorAdvanced, Border, BorderRadius, BoxShadow, Styles, Alignment, Padding, Tabs, Tab, Carousel, ButtonGroup, CssGenerator: { CssGenerator } } = wp.qubelyComponents

class Edit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			device: 'md',
			spacer: true,
			openPanelSetting: ''
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

	changePluginAttribute = (key, value) => {
		this.setState({
			key: key,
			value: value
		})
		this.props.setAttributes({ [key]: value })
	}

	updateAtrributes = (name, value, index) => {
		const { setAttributes, attributes: { carouselItems } } = this.props
		let updatedAttributes = carouselItems.map((data, itemIndex) => {
			if (index === itemIndex) {
				return { ...data, [name]: value }
			} else {
				return data
			}
		})
		setAttributes({ carouselItems: updatedAttributes })
	}

	renderName = (name, index) => {
		return (
			<RichText
				key="editable"
				keepPlaceholderOnFocus
				placeholder={__('Add Name...')}
				formattingControls={['bold', 'italic', 'link', 'strikethrough']}
				onChange={value => this.updateAtrributes('slidertitle', value, index)}
				value={name}
			/>
		)
	}

	renderDesignation = (subtitle, index) => {
		return (
			<RichText
				key="editable"
				placeholder={__('Add subtitle...')}
				formattingControls={['bold', 'italic', 'link', 'strikethrough']}
				keepPlaceholderOnFocus
				onChange={value => this.updateAtrributes('subtitle', value, index)}
				value={subtitle}
			/>
		)
	}

	renderAvatar = (sliderimage, index) => {
		const { attributes: { sliderimageAlt } } = this.props
		return (
			<MediaUpload
				onSelect={val => this.updateAtrributes('sliderimage', val, index)}
				allowedTypes={['image']}
				multiple={false}
				value={sliderimage}
				render={({ open }) => (
					<div className="qubely-single-img qubely-backend">
						{(sliderimage && sliderimage.url) ?
								<img onClick={open} className="qubely-image-sliderimage" src={sliderimage.url} alt={sliderimageAlt} />
								:
								<div onClick={open} className="qubely-image-placeholder qubely-image-sliderimage" ><i className="fas fa-upload"></i></div>
						}
					</div>
				)}
			/>
		)
	}

	renderMessage = (message, index) => {
		return (
			<RichText
				key="editable"
				placeholder={__('Add Message...')}
				formattingControls={['bold', 'italic', 'link', 'strikethrough']}
				keepPlaceholderOnFocus
				onChange={value => this.updateAtrributes('message', value, index)}
				value={message}
			/>
		)
	}

	renderSliderInfo = (item, index) => {
		const { attributes: { layout } } = this.props
		const { slidertitle, subtitle, sliderimage, message } = item

		return (
			<div className={`qubely-image-slider`}>
				{this.renderAvatar(sliderimage, index)}

				{ (layout == 6) && 
					<div className={`qubely-image-slider-text`}>
						<div className="qubely-image-content">
							<div className="qubely-image-title" >{this.renderName(slidertitle, index)}</div>
							<div className="qubely-image-subtitle" >{this.renderDesignation(subtitle, index)}</div>
							<span className="qubely-image-content" >{this.renderMessage(message, index)} </span>
						</div>
					</div>
				}
			</div>
		)
	}

	renderImages = () => {
		const { attributes: { layout, items, carouselItems } } = this.props
		return (
			carouselItems.map((item, index) => {
				return (
					<div key={index} className={`qubely-carousel-item qubely-carousel-extended-item ${index < items[this.parseResponsiveViewPort()] ? 'active' : ''}`} >
						<div className={`qubely-image-item layout-${layout}`}>
							{this.renderSliderInfo(item, index)}
						</div>
					</div>
				)
			})
		)
	}

	setCarouselLength = (newLength) => {
		const { setAttributes, attributes: { carouselItems, items } } = this.props
		let newCarouselItems = JSON.parse(JSON.stringify(carouselItems))
		let defaultItem = {
			slidertitle: 'Word Camp 2019',
			subtitle: 'Word Camp Dhaka ',
			message: '“Instantly raise your website appearance with this stylish new plugin.”',
			ratings: '5',
			sliderimage: {}
		}
		if (newLength > carouselItems.length) {
			newCarouselItems.push(defaultItem)
		} else {
			(newLength >= items.md && newLength >= items.sm && newLength >= items.sm) && newCarouselItems.pop()
		}
		setAttributes({ carouselItems: newCarouselItems })
	}

	parseResponsiveViewPort = () => {
		const { attributes: { items } } = this.props
		let responsive = [
			{ viewport: 1170, items: items.md },
			{ viewport: 980, items: items.sm },
			{ viewport: 580, items: items.xs }
		]
		if (typeof responsive === 'undefined')
			return
		let activeView = null

		for (let i = 0; i < responsive.length; i++) {
			if (window.innerWidth > responsive[i].viewport) {
				activeView = responsive[i]
				break;
			}
		}
		if (activeView === null) {
			activeView = responsive[responsive.length - 1]
		}
		return activeView.viewport <= 1199 ? activeView.viewport <= 991 ? 'xs' : 'sm' : 'md'
	}
	render() {
		const { setAttributes, attributes: {
			uniqueId, items, itemthree, autoPlay, interval, speed, nav, carouselItems, dragable,
			layout, messageSpacingTop, messageSpacingBottom, nameColor, alignment, subtitleColor,
			nameTypo, nameSpacing, messageTypo, subtitleTypo, bgPadding, textColor, bgColor, bgBorderRadius, border, boxShadow,
			boxShadowHover, sliderNumber, itemPerSlides, infiniteLoop, isCentered, notCentered, activeFade,
			arrowStyle, arrowPosition, cornerRadius, cornerHoverRadius, arrowSize, sizeWidth,
			arrowColor, arrowShapeColor, arrowBorderColor, arrowHoverColor, arrowShapeHoverColor, arrowBorderHoverColor,
			dots, dotIndicator, dotwidth, dotHeight, dotBorderRadius, dotColor, dotActiveColor, horizontalScroll,
		} } = this.props

		const { device } = this.state

		const carouselSettings = {
			autoplay: autoPlay,
			items: layout != 2 ? items : itemthree,
			margin: 10,
			center: (layout == 3 || layout == 4) ? isCentered : notCentered,
			dot_indicator: dotIndicator,
			dots: dots,
			nav: nav,
			arrowStyle: arrowStyle,
			arrowPosition: arrowPosition,
			speed: speed,
			interval: interval,
			responsive: [
				{
					viewport: 1170,
					items: layout != 2 ? items.md : itemthree.md
				},
				{
					viewport: 980,
					items: layout != 2 ? items.sm : itemthree.sm
				},
				{
					viewport: 580,
					items: layout != 2 ? items.xs : itemthree.xs
				}
			],
		};

		if (uniqueId) { CssGenerator(this.props.attributes, 'imagecarousel', uniqueId) }

		return (
			<Fragment>
				<InspectorControls key="inspector">

					<PanelBody title="Image Carousel" initialOpen={false}>
						<Styles 
							options={[
								{ value: 1, svg: icons.imagecarousel_1, label: __('Layout 1') },
								{ value: 2, svg: icons.imagecarousel_2, label: __('Layout 2') },
								{ value: 3, svg: icons.imagecarousel_3, label: __('Layout 3') },
								{ value: 4, svg: icons.imagecarousel_4, label: __('Layout 4') },
								{ value: 5, svg: icons.imagecarousel_5, label: __('Layout 5') },
								{ value: 6, svg: icons.imagecarousel_6, label: __('Layout 6') }
							]}
							value={layout} onChange={val => setAttributes({ layout: val })}
						/>

						<Alignment
							label={__('Alignment')}
							value={alignment}
							alignmentType="content"
							onChange={val => setAttributes({ alignment: val })}
							alignmentType="content" disableJustify responsive device={device}
							onDeviceChange={value => this.setState({ device: value })}
						/>

						<Range label={__('Number of Carousels')}
							min={1} 
							max={20} 
							value={carouselItems.length}
							onChange={val => this.setCarouselLength(val)}
						/>

						{ layout == 2 && 
							<Range
								label={__('Number of Columns')}
								min={1} max={20} responsive device={device}
								device={this.state.device}
								value={ (layout != 2) ? items : itemthree }
								onChange={value => setAttributes( (layout != 2 ) ? { items: value } : { itemthree: value })}
								onDeviceChange={value => this.setState({ device: value })}
							/>
						}
					</PanelBody>

					<PanelBody title={__('Carousel Settings')} initialOpen={false}>
						<Toggle label={__('Autoplay')} value={autoPlay} onChange={value => setAttributes({ autoPlay: value })} />
						{autoPlay &&
							<Fragment>
								<Range label={__('Speed (ms)')} value={speed} onChange={value => setAttributes({ speed: parseInt(value) })} min={500} max={5000} />
								<Range label={__('Interval (ms)')} value={interval} onChange={value => setAttributes({ interval: parseInt(value) })} min={500} max={5000} />
							</Fragment>
						}
						<Toggle label={__('Draggable')} value={dragable} onChange={value => setAttributes({ dragable: value })} />
						<Toggle 
							label={__('Centered Slides')} 
							value={(layout == 3 || layout == 4) ? isCentered : notCentered } 
							onChange={value => setAttributes((layout == 3 || layout == 4) ? { isCentered: value } : { notCentered: value })}
						/>

						{
							isCentered &&
							<Toggle label={__('Fade Deactivated Items')} value={activeFade} onChange={value => setAttributes({ activeFade: value })} />
						}
					</PanelBody>

					<PanelBody title={__('Slider Settings')} initialOpen={false}>
						<Toggle label={__('Show Arrow Navigation')} value={nav} onChange={value => setAttributes({ nav: value })} />

						{nav &&
							<Fragment>
								<ButtonGroup
									label={__('Arrow Style')}
									options={[[<span className="dashicons dashicons-arrow-right-alt"></span>, 'arrowright'], [<span className="dashicons dashicons-arrow-right-alt2"></span>, 'arrowright2']]}
									value={arrowStyle}
									onChange={value => setAttributes({ arrowStyle: value })}
								/>
								<Range
									label={__('Horizontal Position')}
									value={horizontalScroll} onChange={(value) => setAttributes({ horizontalScroll: value })}
									min={-100} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Vertical Position')}
									value={arrowPosition} onChange={(value) => setAttributes({ arrowPosition: value })}
									min={1} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Shape Size')}
									value={sizeWidth} onChange={(value) => setAttributes({ sizeWidth: value })}
									min={1} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Arrow Size')}
									value={arrowSize} onChange={(value) => setAttributes({ arrowSize: value })}
									min={0} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Tabs>
									<Tab tabTitle={__('Normal')}>
										<Color label={__('Arrow Color')} value={arrowColor} onChange={(value) => setAttributes({ arrowColor: value })} />
										<ColorAdvanced label={__('Shape Color')} value={arrowShapeColor} onChange={val => setAttributes({ arrowShapeColor: val })} />
										<Border label={__('Border')} value={arrowBorderColor} onChange={val => setAttributes({ arrowBorderColor: val })} />
										<Range
											label={__('Corner Radius')}
											value={cornerRadius} onChange={(value) => setAttributes({ cornerRadius: value })}
											min={1} max={100}
											responsive unit={['px', 'em', '%']}
											device={device}
											onDeviceChange={value => this.setState({ device: value })}
										/>
									</Tab>
									<Tab tabTitle={__('Hover')}>
										<Color label={__('Arrow Hover Color')} value={arrowHoverColor} onChange={(value) => setAttributes({ arrowHoverColor: value })} />
										<ColorAdvanced label={__('Shape Hover Color')} value={arrowShapeHoverColor} onChange={val => setAttributes({ arrowShapeHoverColor: val })} />
										<Border label={__('Border Hover Color')} value={arrowBorderHoverColor} onChange={val => setAttributes({ arrowBorderHoverColor: val })} />
										<Range
											label={__('Corner Hover Radius')}
											value={cornerHoverRadius} onChange={(value) => setAttributes({ cornerHoverRadius: value })}
											min={1} max={100}
											responsive unit={['px', 'em', '%']}
											device={device}
											onDeviceChange={value => this.setState({ device: value })}
										/>
									</Tab>
								</Tabs>
							</Fragment>
						}

						<Toggle label={__('Show Dot Navigation')} value={dots} onChange={value => setAttributes({ dots: value })} />

						{dots &&
							<Fragment>
								<Range
									label={__('Dot Width')}
									value={dotwidth} onChange={(value) => setAttributes({ dotwidth: value })}
									min={1} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Dot Height')}
									value={dotHeight} onChange={(value) => setAttributes({ dotHeight: value })}
									min={1} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Dot Border Radius')}
									value={dotBorderRadius} onChange={(value) => setAttributes({ dotBorderRadius: value })}
									min={1} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Tabs>
									<Tab tabTitle={__('Normal')}>
										<ColorAdvanced label={__('Dot Color')} value={dotColor} onChange={val => setAttributes({ dotColor: val })} />
									</Tab>
									<Tab tabTitle={__('Active')}>
										<ColorAdvanced label={__('Dot Active Color')} value={dotActiveColor} onChange={val => setAttributes({ dotActiveColor: val })} />
									</Tab>
								</Tabs>
							</Fragment>
						}
					</PanelBody>
					
					{ (layout == 6) && 
						<Fragment>
							<PanelBody title={__('Subtitle')} initialOpen={false}>
								<Range
									label={__('Top Spacing')}
									value={messageSpacingTop} onChange={(value) => setAttributes({ messageSpacingTop: value })}
									unit={['px', 'em', '%']} max={300}
									min={0}
									responsive
									device={device}
									onDeviceChange={value => this.setState({ device: value })} />
								<Range
									label={__('Bottom Spacing')}
									value={messageSpacingBottom} onChange={(value) => setAttributes({ messageSpacingBottom: value })}
									unit={['px', 'em', '%']} max={300}
									min={0}
									responsive
									device={device}
									onDeviceChange={value => this.setState({ device: value })} />
								<Typography
									label={__('Typography')}
									value={messageTypo}
									onChange={(value) => setAttributes({ messageTypo: value })}
									device={device} onDeviceChange={value => this.setState({ device: value })} />
							</PanelBody>
							<PanelBody title={__('Title')} initialOpen={false}>
								<Range
									label={__('Spacing')}
									value={nameSpacing} onChange={(value) => setAttributes({ nameSpacing: value })}
									unit={['px', 'em', '%']} max={300}
									min={0}
									responsive
									device={device}
									onDeviceChange={value => this.setState({ device: value })} />
								<Color
									label={__('Color')}
									value={nameColor} onChange={(value) => setAttributes({ nameColor: value })}
								/>
								<Typography
									label={__('Typography')}
									value={nameTypo}
									onChange={(value) => setAttributes({ nameTypo: value })}
									device={device} onDeviceChange={value => this.setState({ device: value })} />
							</PanelBody>
							<PanelBody title={__('Content Text')} initialOpen={false}>
								<Color
									label={__('Color')}
									value={subtitleColor} onChange={(value) => setAttributes({ subtitleColor: value })}
								/>
								<Typography
									label={__('Typography')}
									value={subtitleTypo}
									onChange={(value) => setAttributes({ subtitleTypo: value })}
									device={device} onDeviceChange={value => this.setState({ device: value })} />
							</PanelBody>
						</Fragment>
					}

					<PanelBody title={__('Design')} initialOpen={false}>
						<Color
							label={__('Text Color')}
							value={textColor}
							onChange={val => setAttributes({ textColor: val })} />
						<Color
							label={__('Background')}
							value={bgColor}
							onChange={val => setAttributes({ bgColor: val })} />
						<Separator />
						<Border
							label={__('Border')}
							value={border}
							onChange={val => setAttributes({ border: val })} />
						<Padding
							label={__('Padding')}
							value={bgPadding} onChange={(value) => setAttributes({ bgPadding: value })}
							unit={['px', 'em', '%']}
							min={0}
							max={100}
							responsive
							device={device}
							onDeviceChange={value => this.setState({ device: value })} />
						<BorderRadius
							label={__('Border Radius')}
							value={bgBorderRadius}
							onChange={val => setAttributes({ bgBorderRadius: val })}
							min={0}
							max={100}
							unit={['px', 'em', '%']}
							responsive
							device={device}
							onDeviceChange={value => this.setState({ device: value })} />
						<Tabs>
							<Tab tabTitle={__('Normal')}>
								<BoxShadow
									label={__('Box Shadow')}
									value={boxShadow} onChange={val => setAttributes({ boxShadow: val })}
								/>
							</Tab>
							<Tab tabTitle={__('Hover')}>
								<BoxShadow
									label={__('Box Shadow')}
									value={boxShadowHover} onChange={val => setAttributes({ boxShadowHover: val })}
								/>
							</Tab>
						</Tabs>
					</PanelBody>
				</InspectorControls>

				<div className={`qubely-block-${uniqueId}`}>
					<div className={`qubely-block-image-carousel qubely-layout-${layout}`}>
						<Carousel options={carouselSettings}>
							{this.renderImages()}
						</Carousel>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Edit