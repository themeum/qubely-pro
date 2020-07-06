const { __ } = wp.i18n
const { Fragment, Component } = wp.element;
const { PanelBody, TextControl, Tooltip, Toolbar } = wp.components
const { InspectorControls, RichText, MediaUpload, BlockControls } = wp.blockEditor
import icons from '../../helpers/icons'
const {
	RadioAdvanced,
	Range,
	Color,
	Typography,
	Toggle,
	Separator,
	ColorAdvanced,
	Border,
	BorderRadius,
	BoxShadow,
	Styles,
	Alignment,
	Padding,
	Tabs,
	Tab,
	Carousel,
	ButtonGroup,
	gloalSettings: {
		globalSettingsPanel,
		animationSettings
	},
	Inline: {
		InlineToolbar
	},
	ContextMenu: {
		ContextMenu,
		handleContextMenu
	},
	withCSSGenerator,
	InspectorTabs,
	InspectorTab
} = wp.qubelyComponents

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

	/** 
	 *  Social Share callback function. */
	renderSocialShare = () => {
		const { attributes: {
			showSociallinks, iconStyle, iconUseDefaultStyle, facebook, twitter, instagram, linkedin, youtube, github, flickr, pinterest, dribbble, behance,
		} } = this.props
		return (
			<div className="qubely-team-social-share">
				{showSociallinks && (facebook || twitter || instagram || linkedin || youtube || github || flickr || pinterest || dribbble || behance) &&
					<div className={`qubely-team-social-links qubely-team-icon-layout-${iconStyle} qubely-team-icon-style-${iconUseDefaultStyle == 1 ? 'default' : 'custom'}`}>
						{facebook && <a className="qubely-team-social-facebook"><i className="fab fa-facebook-f" /></a>}
						{twitter && <a className="qubely-team-social-twitter"><i className="fab fa-twitter" /></a>}
						{instagram && <a className="qubely-team-social-instagram"><i className="fab fa-instagram" /></a>}
						{linkedin && <a className="qubely-team-social-linkedin"><i className="fab fa-linkedin" /></a>}
						{youtube && <a className="qubely-team-social-youtube"><i className="fab fa-youtube" /></a>}
						{github && <a className="qubely-team-social-github"><i className="fab fa-github" /></a>}
						{flickr && <a className="qubely-team-social-flickr"><i className="fab fa-flickr" /></a>}
						{pinterest && <a className="qubely-team-social-pinterest"><i className="fab fa-pinterest" /></a>}
						{dribbble && <a className="qubely-team-social-dribbble"><i className="fab fa-dribbble" /></a>}
						{behance && <a className="qubely-team-social-behance"><i className="fab fa-behance" /></a>}
					</div>
				}
			</div>
		)
	}

	/** 
	 *  Author information. */
	renderAuthorInfo = (item, index) => {
		const { attributes: { layout, showAvatar, enablename, enableDesignation } } = this.props
		const { author, designation, avatar } = item

		return (
			<div className={`qubely-team-author`}>
				{
					showAvatar &&
					<MediaUpload
						onSelect={val => this.updateAtrributes('avatar', val, index)}
						allowedTypes={['image']}
						multiple={false}
						value={avatar}
						render={({ open }) => (
							<div className="qubely-single-img qubely-backend">
								{(avatar && avatar.url) ?
									<img onClick={open} className="qubely-team-avatar" src={avatar.url} />
									:
									<div className="qubely-image-placeholder">
										<div className="qubely-team-avatar">
											<a className="qubely-insert-image" href="#" onClick={open}>
												<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-insert" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>
												<span>{__('Insert')}</span>
											</a>
										</div>
									</div>
								}
							</div>
						)}
					/>}

				<div className="qubely-team-author-info">
					<div className={`qubely-team-info-layout-${layout}`}>
						{enablename &&
							<div className="qubely-team-author-name" >
								<RichText 
									keepPlaceholderOnFocus
									placeholder={__('Add Name...')}
									formattingControls={['bold', 'italic', 'link', 'strikethrough']}
									onChange={value => this.updateAtrributes('author', value, index)}
									value={author}
								/>
							</div>
						}
						{enableDesignation &&
							<div className="qubely-team-author-designation" >
								<RichText 
									placeholder={__('Add designation...')}
									formattingControls={['bold', 'italic', 'link', 'strikethrough']}
									keepPlaceholderOnFocus
									onChange={value => this.updateAtrributes('designation', value, index)}
									value={designation}
								/>
							</div>
						}
						{this.renderSocialShare()  /* Social share callback function */}
					</div>
				</div>

			</div>
		)
	}
	removeCrouselItem = (index) => {
		const { setAttributes, attributes: { carouselItems } } = this.props
		let newCarouselItems = JSON.parse(JSON.stringify(carouselItems))
		newCarouselItems.splice(index, 1)
		setAttributes({ carouselItems: newCarouselItems })
	}
	/** 
	 *  Render author informations. */
	renderTeams = () => {
		const { attributes: { items, layout, carouselItems } } = this.props
		return (
			carouselItems.map((item, index) => {
				return (
					<div key={index} className={`qubely-carousel-item`} >
						{
							(carouselItems.length > items.md && carouselItems.length > items.sm && carouselItems.length > items.sm) &&
							<Tooltip text={__('Delete this item')}>
								<span className="qubely-repeatable-action-remove" role="button" onClick={() => this.removeCrouselItem(index)}>
									<span className={`dashicons dashicons-no-alt`} />
								</span>
							</Tooltip>
						}
						<div className={`qubely-team-carousel-item`}>
							<div className={`qubely-team-${layout}`}>
								{this.renderAuthorInfo(item, index)}
							</div>
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
			author: 'James Moriarty',
			designation: 'Web WordPress Developer',
			message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
			ratings: '5',
			avatar: {}
		}
		if (newLength > carouselItems.length) {
			newCarouselItems.push(defaultItem)
		} else {
			(newLength >= items.md && newLength >= items.sm && newLength >= items.sm) && newCarouselItems.pop()
		}
		setAttributes({ carouselItems: newCarouselItems })

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
				items,
				autoPlay,
				interval,
				speed, nav,
				carouselItems,
				dragable,
				layout,
				nameColor,
				alignment,
				enableDesignation,
				designationColor,
				showAvatar,
				avatarBorderRadius,
				avatarSize,
				avatarWidth,
				avatarHeight,
				avatarBorder,
				avatarVerticalSpacing,
				avatarHorizontalSpacing,
				nameTypo,
				nameSpacing,
				designationTypo,
				designationSpacing,
				bgPadding,
				textColor,
				bgColor,

				bgBorderRadius,
				border,
				boxShadow,
				boxShadowHover,
				sliderItemsSpace,
				isCentered,
				activeFade,
				arrowStyle,
				arrowPosition,
				cornerRadius,
				cornerHoverRadius,
				arrowSize,
				sizeWidth,
				arrowColor,
				arrowShapeColor,
				arrowBorderColor,
				arrowHoverColor,
				arrowShapeHoverColor,
				arrowBorderHover,
				dots,
				dotIndicator,
				dotwidth,
				dotHeight,
				dotBorderRadius,
				dotColor,
				dotActiveColor,
				horizontalScroll,

				// Social Share.
				showSociallinks,
				facebook,
				twitter,
				instagram,
				linkedin,
				youtube,
				github,
				flickr,
				pinterest,
				dribbble,
				behance,
				iconSize,
				iconSizeCustom,
				iconGutter,
				iconSpacing,
				iconStyle,
				iconUseDefaultStyle,
				iconBorderRadius,
				iconColor,
				iconBackground,
				iconBorder,
				iconColorHover,
				iconBackgroundHover,
				iconBorderColorHover,
				sliderMargin,
				enablename,
				dotsPosition,
				horizontalScrollleft,
				contentSpacing,

				globalZindex,
				enablePosition,
				selectPosition,
				positionXaxis,
				positionYaxis,
				hideTablet,
				hideMobile,
				globalCss,
				animation
			} } = this.props

		const { device } = this.state

		const carouselSettings = {
			autoplay: autoPlay,
			items: items,
			margin: sliderMargin,
			center: isCentered,
			dots: dots,
			dot_indicator: dotIndicator,
			nav: nav,
			arrowStyle: arrowStyle,
			arrowPosition: arrowPosition,
			speed: speed,
			interval: interval,
			responsive: [
				{
					viewport: 1170,
					items: items.md
				},
				{
					viewport: 980,
					items: items.sm
				},
				{
					viewport: 580,
					items: items.xs
				}
			],
		};

		return (
			<Fragment>
				<InspectorControls key="inspector">
					<InspectorTabs tabs={['style', 'advance']}>
						<InspectorTab key={'style'}>
							<PanelBody title={__('')} opened={true}>
								<Styles value={layout} onChange={val => setAttributes({ layout: val })}
									options={[
										{ value: 1, svg: icons.teamcarousel_1, label: __('Layout 1') },
										{ value: 2, svg: icons.teamcarousel_2, label: __('Layout 2') },
										{ value: 3, svg: icons.teamcarousel_3, label: __('Layout 3') }
									]}
								/>
								<Alignment
									label={__('Alignment')}
									value={alignment}
									alignmentType="content"
									onChange={val => setAttributes({ alignment: val })}
									alignmentType="content" disableJustify responsive device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>

								<Range
									label={__('Number of Carousels')}
									min={1}
									max={20}
									value={carouselItems.length}
									onChange={val => this.setCarouselLength(val)}
								/>

								<Range
									label={__('Number of Columns')}
									min={1}
									max={20}
									device={device}
									responsive
									value={items}
									onChange={val => setAttributes({ items: val })}
									device={this.state.device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								{/* <Range
							label={__('Padding')}
							min={1}
							max={80}
							responsive
							unit={['px', 'em', '%']}
							value={sliderItemsSpace}
							onChange={(value) => setAttributes({ sliderItemsSpace: value })}
							device={device}
							onDeviceChange={value => this.setState({ device: value })}
						/> */}
								<Range
									label={__('Gutter')}
									min={0}
									max={80}
									value={sliderMargin}
									onChange={(value) => setAttributes({ sliderMargin: parseInt(value) })}
								/>
							</PanelBody>

							<PanelBody title={__('Carousel Settings')} initialOpen={false}>
								<Toggle label={__('Show Arrow Navigation')} value={nav} onChange={value => setAttributes({ nav: value })} />
								<Toggle label={__('Show Dot Navigation')} value={dots} onChange={value => setAttributes({ dots: value })} />
								<Toggle label={__('Draggable')} value={dragable} onChange={value => setAttributes({ dragable: value })} />

								<Toggle label={__('Autoplay')} value={autoPlay} onChange={value => setAttributes({ autoPlay: value })} />
								{autoPlay &&
									<Fragment>
										<Range label={__('Speed (ms)')} value={speed} onChange={value => setAttributes({ speed: parseInt(value) })} min={500} max={5000} />
										<Range label={__('Interval (ms)')} value={interval} onChange={value => setAttributes({ interval: parseInt(value) })} min={500} max={5000} />
									</Fragment>
								}

								<Toggle label={__('Centered Slides')} value={isCentered} onChange={value => setAttributes({ isCentered: value })} />
								{
									isCentered &&
									<Toggle label={__('Fade Deactivated Items')} value={activeFade} onChange={value => setAttributes({ activeFade: value })} />
								}
							</PanelBody>

							{nav &&
								<PanelBody title={__('Arrow Settings')} initialOpen={false}>

									<ButtonGroup
										label={__('Arrow Style')}
										options={[[<span className="dashicons dashicons-arrow-right-alt" />, 'arrowright'], [<span className="dashicons dashicons-arrow-right-alt2" />, 'arrowright2']]}
										value={arrowStyle}
										onChange={value => setAttributes({ arrowStyle: value })}
									/>
									<Range
										label={__('Horizontal Position')}
										value={horizontalScroll} onChange={(value) => setAttributes({ horizontalScroll: value })}
										min={-200} max={200}
										responsive unit={['px', 'em', '%']}
										device={device}
										onDeviceChange={value => this.setState({ device: value })}
									/>
									<Range
										label={__('Vertical Position')}
										value={arrowPosition} onChange={(value) => setAttributes({ arrowPosition: value })}
										min={1} max={200}
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
											<Color label={__('Arrow Color')} value={arrowHoverColor} onChange={(value) => setAttributes({ arrowHoverColor: value })} />
											<ColorAdvanced label={__('Shape Color')} value={arrowShapeHoverColor} onChange={val => setAttributes({ arrowShapeHoverColor: val })} />
											<Border label={__('Border')} value={arrowBorderHover} onChange={val => setAttributes({ arrowBorderHover: val })} />
											<Range
												label={__('Corner Radius')}
												value={cornerHoverRadius} onChange={(value) => setAttributes({ cornerHoverRadius: value })}
												min={1} max={100}
												responsive unit={['px', 'em', '%']}
												device={device}
												onDeviceChange={value => this.setState({ device: value })}
											/>
										</Tab>
									</Tabs>


								</PanelBody>
							}

							{dots &&
								<PanelBody title={__('Dot Settings')} initialOpen={false}>

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
									<Range
										label={__('Vertical Position')}
										value={dotsPosition} onChange={(value) => setAttributes({ dotsPosition: value })}
										min={-200} max={200}
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

								</PanelBody>
							}
							<PanelBody title={__('Image')} initialOpen={false}>
								<Toggle label={__('Show Image')} value={showAvatar} onChange={val => setAttributes({ showAvatar: val })} />

								{showAvatar &&
									<Fragment>

										<RadioAdvanced
											label={__('Image Size')}
											options={[
												{ label: 'S', value: '60px', title: 'Small' },
												{ label: 'M', value: '100px', title: 'Medium' },
												{ label: 'L', value: '140px', title: 'Large' },
												{ icon: 'fas fa-cog', value: 'custom', title: 'Custom' }
											]}
											value={avatarSize}
											onChange={(value) => setAttributes({ avatarSize: value })}
										/>
										{avatarSize == 'custom' &&
											<Fragment>
												<Range
													label={__('Image Width')}
													value={avatarWidth}
													onChange={(value) => setAttributes({ avatarWidth: value })}
													unit={['px', 'em', '%']}
													max={avatarWidth.unit === '%' ? 100 : 300}
													min={0}
													responsive
													device={device}
													onDeviceChange={value => this.setState({ device: value })}
												/>
												<Range
													min={0}
													responsive
													device={device}
													value={avatarHeight}
													unit={['px', 'em', '%']}
													label={__('Image Height')}
													max={avatarHeight.unit === '%' ? 100 : 300}
													onDeviceChange={value => this.setState({ device: value })}
													onChange={(value) => setAttributes({ avatarHeight: value })}
												/>
											</Fragment>
										}
										<BorderRadius
											label={__('Radius')}
											value={avatarBorderRadius} onChange={(value) => setAttributes({ avatarBorderRadius: value })}
											min={0}
											max={100}
											unit={['px', 'em', '%']}
											responsive
											device={device}
											onDeviceChange={value => this.setState({ device: value })} />
										<Border
											label={__('Border')}
											value={avatarBorder}
											onChange={(value) => setAttributes({ avatarBorder: value })}
											unit={['px', 'em', '%']}
											responsive
											device={device}
											onDeviceChange={value => this.setState({ device: value })}
										/>
										{
											layout !== 2 &&
											<Range
												label={__('Spacing')}
												min={0}
												max={200}
												unit={['px', 'em', '%']}
												responsive
												device={device}
												onDeviceChange={value => this.setState({ device: value })}
												value={layout === 1 ? avatarVerticalSpacing : avatarHorizontalSpacing}
												onChange={(value) => setAttributes(layout === 1 ? { avatarVerticalSpacing: value } : { avatarHorizontalSpacing: value })}
											/>
										}
									</Fragment>
								}
							</PanelBody>

							<PanelBody title={__('Name')} initialOpen={false}>
								<Toggle label={__('Enable Name')} value={enablename} onChange={value => setAttributes({ enablename: value })} />
								<Color
									label={__('Color')}
									value={nameColor} onChange={(value) => setAttributes({ nameColor: value })}
								/>
								<Typography
									label={__('Typography')}
									value={nameTypo}
									onChange={(value) => setAttributes({ nameTypo: value })}
									device={device} onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Spacing')}
									value={nameSpacing} onChange={(value) => setAttributes({ nameSpacing: value })}
									unit={['px', 'em', '%']} max={300}
									min={0}
									responsive
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
							</PanelBody>

							<PanelBody title={__('Designation')} initialOpen={false}>
								<Toggle label={__('Enable Designation')} value={enableDesignation} onChange={value => setAttributes({ enableDesignation: value })} />
								<Color
									label={__('Color')}
									value={designationColor} onChange={(value) => setAttributes({ designationColor: value })}
								/>
								<Typography
									label={__('Typography')}
									value={designationTypo}
									onChange={(value) => setAttributes({ designationTypo: value })}
									device={device} onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Spacing')}
									value={designationSpacing} onChange={(value) => setAttributes({ designationSpacing: value })}
									unit={['px', 'em', '%']} max={300}
									min={0}
									responsive
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
							</PanelBody>

							<PanelBody title={__('Social')} initialOpen={false}>
								<Toggle label={__('Show Social-links')} value={showSociallinks} onChange={val => setAttributes({ showSociallinks: val })} />
								{
									showSociallinks &&
									<Fragment>
										<TextControl label={__('Facebook')} value={facebook} onChange={val => setAttributes({ facebook: val })} />
										<TextControl label={__('Twitter')} value={twitter} onChange={val => setAttributes({ twitter: val })} />
										<TextControl label={__('Instagram')} value={instagram} onChange={val => setAttributes({ instagram: val })} />
										<TextControl label={__('Linkedin')} value={linkedin} onChange={val => setAttributes({ linkedin: val })} />
										<TextControl label={__('Youtube')} value={youtube} onChange={val => setAttributes({ youtube: val })} />
										<TextControl label={__('Github')} value={github} onChange={val => setAttributes({ github: val })} />
										<TextControl label={__('Flickr')} value={flickr} onChange={val => setAttributes({ flickr: val })} />
										<TextControl label={__('Pinterest')} value={pinterest} onChange={val => setAttributes({ pinterest: val })} />
										<TextControl label={__('Dribbble')} value={dribbble} onChange={val => setAttributes({ dribbble: val })} />
										<TextControl label={__('Behance')} value={behance} onChange={val => setAttributes({ behance: val })} />
										<Separator />
										<Styles label={__('Icon Style')} value={iconStyle} onChange={val => setAttributes({ iconStyle: val })}
											options={[
												{ value: 'fill', svg: icons.social_fill, label: __('Fill') },
												{ value: 'normal', svg: icons.social_normal, label: __('Normal') },
											]}
										/>
										<RadioAdvanced label={__('Icon Size')} value={iconSize} onChange={(value) => setAttributes({ iconSize: value })}
											options={[
												{ label: 'S', value: '14px', title: 'Small' },
												{ label: 'M', value: '18px', title: 'Medium' },
												{ label: 'L', value: '24px', title: 'Large' },
												{ icon: 'fas fa-cog', value: 'custom', title: 'Custom' }
											]}
										/>
										{iconSize == 'custom' &&
											<Range label={__('Custom Size')} value={iconSizeCustom} onChange={val => setAttributes({ iconSizeCustom: val })} min={12} max={300} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
										}
										{iconStyle == 'fill' &&
											<BorderRadius
												label={__('Corner Radius')}
												value={iconBorderRadius}
												onChange={(value) => setAttributes({ iconBorderRadius: value })}
												min={0}
												max={100} unit={['px', 'em', '%']}
												responsive
												device={device}
												onDeviceChange={value => this.setState({ device: value })} />
										}

										<Range label={__('Gutter')} value={iconGutter} onChange={val => setAttributes({ iconGutter: val })} min={0} max={40} unit={['px', 'em']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
										<Range label={__('Spacing')} value={iconSpacing} onChange={val => setAttributes({ iconSpacing: val })} min={0} max={60} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
										<Toggle label={__('Default Styles')} value={iconUseDefaultStyle} onChange={val => setAttributes({ iconUseDefaultStyle: val })} />

										{!iconUseDefaultStyle &&
											<Tabs>
												<Tab tabTitle={__('Normal')}>
													<Color label={__('Color')} value={iconColor} onChange={(value) => setAttributes({ iconColor: value })} />
													{iconStyle == 'fill' &&
														<Fragment>
															<Color label={__('Background Color')} value={iconBackground} onChange={(value) => setAttributes({ iconBackground: value })} />
															<Border label={__('Border')} value={iconBorder} onChange={(value) => setAttributes({ iconBorder: value })} />
														</Fragment>
													}
												</Tab>
												<Tab tabTitle={__('Hover')}>
													<Color label={__('Color')} value={iconColorHover} onChange={(value) => setAttributes({ iconColorHover: value })} />
													{iconStyle == 'fill' &&
														<Fragment>
															<Color label={__('Background Color')} value={iconBackgroundHover} onChange={(value) => setAttributes({ iconBackgroundHover: value })} />
															<Color label={__('Border Color')} value={iconBorderColorHover} onChange={(value) => setAttributes({ iconBorderColorHover: value })} />
														</Fragment>
													}
												</Tab>
											</Tabs>
										}
									</Fragment>
								}
							</PanelBody>


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
									value={bgPadding}
									onChange={(value) => setAttributes({ bgPadding: value })}
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
								{layout == 3 &&
									<Range
										label={__('Content Spacing')}
										value={contentSpacing}
										onChange={(value) => setAttributes({ contentSpacing: value })}
										unit={['px', 'em', '%']} max={300}
										min={0}
										responsive
										device={device}
										onDeviceChange={value => this.setState({ device: value })} />
								}
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
						</InspectorTab>
						<InspectorTab key={'advance'}>
							{animationSettings(uniqueId, animation, setAttributes)}
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
					<div className={`qubely-block-team-carousel qubely-layout-style`} onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>
						<Carousel options={carouselSettings}>
							{this.renderTeams()}
						</Carousel>
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