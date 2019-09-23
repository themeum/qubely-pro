const { __ } = wp.i18n
const { Fragment, Component } = wp.element;
const { PanelBody, Tooltip } = wp.components
const { InspectorControls, RichText, MediaUpload } = wp.editor
import icons from '../../helpers/icons'
const { Range, Color, Typography, Toggle, Separator, ColorAdvanced, Border, BorderRadius, BoxShadow, Select, Styles, Alignment, Padding, Tabs, Tab, Carousel, ButtonGroup, CssGenerator: { CssGenerator } } = wp.qubelyComponents

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

	renderSlider = (sliderimage, index) => {
		return (
			<div className={`qubely-slider-image-container${(sliderimage != undefined && sliderimage.url != undefined) ? '' : ' qubely-empty-image'}`}>
				<MediaUpload
					onSelect={value => this.updateAtrributes('sliderimage', value, index)}
					allowedTypes={['image']}
					multiple={false}
					value={sliderimage}
					render={({ open }) => (
						<Fragment> 
							{(sliderimage && sliderimage.url) ?
								<div className="qubely-slider-content-sliderimage-editor">
									<img src={sliderimage.url} alt={__('Slider Image')} />
									<div className="qubely-media-actions qubely-field-button-list">
										<Tooltip text={__('Edit')}>
											<button className="qubely-button" aria-label={__('Edit')} onClick={open} role="button">
												<span aria-label={__('Edit')} className="fas fa-pencil-alt fa-fw"></span>
											</button>
										</Tooltip>
										<Tooltip text={__('Remove')}>
											<button className="qubely-button" aria-label={__('Remove')} onClick={() => this.updateAtrributes('sliderimage', '', index)} role="button">
												<span aria-label={__('Close')} className="far fa-trash-alt fa-fw"></span>
											</button>
										</Tooltip>
									</div>
								</div>
								:
								<a className="qubely-insert-image" href="#" onClick={open}>
									<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-insert" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
									<path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>
									<span>{__('Insert')}</span>
								</a>
							}
						</Fragment>
					)}
				/>
			</div>




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
		const { attributes: { layout, sliderContent, activeDescription } } = this.props
		const { slidertitle, subtitle, sliderimage, message } = item

		return (
			<div className={`qubely-image-slider`}>
				{this.renderSlider(sliderimage, index)}
				{ (layout != 1 && layout != 2 ) &&
					<div>
						{ (sliderContent || layout === 6 ) && 
							<div className={`qubely-image-slider-text`}>
								<div className="qubely-image-content">
									<div className="qubely-image-title" >{this.renderName(slidertitle, index)}</div>
									<div className="qubely-image-subtitle" >{this.renderDesignation(subtitle, index)}</div>
									{activeDescription &&
										<span className="qubely-slider-description" >{this.renderMessage(message, index)} </span>
									}
								</div>
							</div>
						}
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
					<div key={index} className={`qubely-carousel-item item-layout${layout} ${index < items[this.parseResponsiveViewPort()] ? 'active' : ''}`} >
						<div className={`qubely-image-item layout-${layout}`}>
							{this.renderSliderInfo(item, index)}
						</div>
					</div>
				)
			})
		)
	}

	renderLayoutFive = () => { 
		const { attributes: { layout, items, carouselItems } } = this.props
		return (
			carouselItems.map((item, index) => {
				return (
					<div key={index} className={`qubely-carousel-item layout5 active `} >
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
			slidertitle: 'Wordcamp Dhaka 2019',
			subtitle: '28 September 2019',
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
		const { attributes: { layout, items, itemthree, itemfive } } = this.props
		let responsive = [
			{ viewport: 1170, items: layout != 2 ? ((layout == 5) ? itemfive.md : items.md) : itemthree.md },
			{ viewport: 980, items: layout != 2 ? ((layout == 5) ? itemfive.sm : items.sm) : itemthree.sm },
			{ viewport: 580, items: layout != 2 ? ((layout == 5) ? itemfive.xs : items.xs) : itemthree.xs }
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
			uniqueId, items, itemthree, itemfive, autoPlay, interval, speed, nav, carouselItems, dragable,
			layout, messageSpacingTop, messageSpacingBottom, nameColor, descriptionColor,  alignment, subtitleColor, activeDescription,
			nameTypo, nameSpacing, messageTypo, subtitleTypo, contentSpacing, textColor, bgBorderRadius, border, boxShadow,
			boxShadowHover, sliderNumber, itemPerSlides, infiniteLoop, isCentered, notCentered, activeFade,
			arrowStyle, arrowPosition, cornerRadius, cornerHoverRadius, arrowSize, sizeWidth,
			arrowColor, arrowShapeColor, arrowBorderColor, arrowHoverColor, arrowShapeHoverColor, arrowBorderHoverColor,
			dots, dotIndicator, dotwidth, dotHeight, dotBorderRadius, dotColor, dotActiveColor, horizontalScroll,

			sliderContent,
			animateOnHover,
			enableOverlay,
            overlayBg,
            overlayHoverBg,
            overlayBlend,
		} } = this.props

		const { device } = this.state

		const carouselSettings = {
			autoplay: autoPlay,
			items: layout != 2 ? ((layout == 5) ? itemfive : items) : itemthree,
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
					items: layout != 2 ? ((layout == 5) ? itemfive.md : items.md) : itemthree.md
				},
				{
					viewport: 980,
					items: layout != 2 ? ((layout == 5) ? itemfive.sm : items.sm) : itemthree.sm
				},
				{
					viewport: 580,
					items: layout != 2 ? ((layout == 5) ? itemfive.xs : items.xs) : itemthree.xs
				}
			],
		};

		// Item Five.
		const carouselFiveSettings = {
			autoplay: autoPlay,
			items: items,
			margin: 10,
			center: false,
			dot_indicator: dotIndicator,
			dots: false,
			nav: nav,
			arrowStyle: arrowStyle,
			arrowPosition: arrowPosition,
			speed: speed,
			interval: interval,
			responsive: [
				{ 
					viewport: 1170,
					items: 1,
				},
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
							min={3} 
							max={20} 
							value={carouselItems.length}
							onChange={val => this.setCarouselLength(val)}
						/>

						{ layout == 2 &&  
							<Range
								label={__('Number of Columns')}
								min={1} max={20} responsive device={device}
								device={this.state.device}
								value={ (layout != 2) ? ((layout == 5) ? itemfive : items) : itemthree }
								onChange={value => setAttributes( (layout != 2 ) ? ((layout == 5) ? { itemfive: value } : { items: value }) : { itemthree: value })}
								onDeviceChange={value => this.setState({ device: value })}
							/>
						}

						{ (layout != 6 && layout != 1 && layout != 2) &&
							<Toggle label={__('Slider Content')} value={sliderContent} onChange={value => setAttributes({ sliderContent: value })} />
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
						
						{layout != 1 &&
							<Fragment>
								<Toggle 
									label={__('Centered Slides')} 
									value={(layout == 3 || layout == 4) ? isCentered : notCentered } 
									onChange={value => setAttributes((layout == 3 || layout == 4) ? { isCentered: value } : { notCentered: value })}
								/>

								{ isCentered &&
									<Toggle label={__('Fade Deactivated Items')} value={activeFade} onChange={value => setAttributes({ activeFade: value })} />
								}
							</Fragment>
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
					
					{ (sliderContent || layout === 6 ) && 
						<Fragment>
							{(layout != 1 && layout != 2) &&
								<Fragment>
									<PanelBody title={__('Title')} initialOpen={false}>
										<Range
											label={__('Spacing')}
											value={nameSpacing} onChange={(value) => setAttributes({ nameSpacing: value })}
											unit={['px', 'em', '%']} 
											max={300} min={0} responsive
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
									
									<PanelBody title={__('Subtitle')} initialOpen={false}>
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

									<PanelBody title={__('Description')} initialOpen={false}>
										<Toggle label={__('Hide Description')} value={activeDescription} onChange={value => setAttributes({ activeDescription: value })} />
										{ activeDescription && 
											<Fragment>
												<Color
													label={__('Color')}
													value={descriptionColor} onChange={(value) => setAttributes({ descriptionColor: value })}
												/>
												<Typography
													label={__('Typography')}
													value={messageTypo}
													onChange={(value) => setAttributes({ messageTypo: value })}
													device={device} onDeviceChange={value => this.setState({ device: value })} />
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
											</Fragment>
										}
									</PanelBody>

									<PanelBody title={__('Overlay')} initialOpen={false}>
										<Toggle label={__('Animate on Hover')} value={animateOnHover} onChange={val => setAttributes({ animateOnHover: val })} />
										<Toggle label={__('Enable')} value={enableOverlay} onChange={val => setAttributes({ enableOverlay: val })} />
										{enableOverlay == 1 &&
											<Fragment>

												{animateOnHover == 1 ?
													<Tabs>
														<Tab tabTitle={__('Normal')}>
															<ColorAdvanced label={__('Background')} value={overlayBg} onChange={(value) => setAttributes({ overlayBg: value })} />
														</Tab>
														<Tab tabTitle={__('Hover')}>
															<ColorAdvanced label={__('Background')} value={overlayHoverBg} onChange={(value) => setAttributes({ overlayHoverBg: value })} />
														</Tab>
													</Tabs>
													:
													<Fragment>
														<ColorAdvanced label={__('Background')} value={overlayBg} onChange={(value) => setAttributes({ overlayBg: value })} />
														<Separator />
													</Fragment>
												}
												<Select label={__('Blend Mode')} options={[['normal', __('Normal')], ['multiply', __('Multiply')], ['screen', __('Screen')], ['overlay', __('Overlay')], ['darken', __('Darken')], ['lighten', __('Lighten')], ['color-dodge', __('Color Dodge')], ['saturation', __('Saturation')], ['luminosity', __('Luminosity')], ['color', __('Color')], ['color-burn', __('Color Burn')], ['exclusion', __('Exclusion')], ['hue', __('Hue')]]} value={overlayBlend} onChange={val => setAttributes({ overlayBlend: val })} />
											</Fragment>
										}
										<Range
											label={__('Content Spacing')}
											value={contentSpacing} onChange={(value) => setAttributes({ contentSpacing: value })}
											unit={['px', 'em', '%']} max={300}
											min={0}
											responsive
											device={device}
											onDeviceChange={value => this.setState({ device: value })} />
									</PanelBody>
								</Fragment>
							}
						</Fragment>

						
					}

					
				</InspectorControls>

				<div className={`qubely-block-${uniqueId}`}>
					<div className={`qubely-block-image-carousel qubely-layout-${layout}`}>
						
						{layout == 5 && 
							<Carousel options={carouselFiveSettings}>
								{this.renderLayoutFive()}
							</Carousel>	
						}

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