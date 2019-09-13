const { __ } = wp.i18n
const { Fragment, Component } = wp.element;
const { PanelBody, TextControl } = wp.components
const { InspectorControls, RichText, MediaUpload } = wp.editor
import icons from '../../helpers/icons'
const { RadioAdvanced, Range, Color, Typography, Toggle, Separator, ColorAdvanced, Border, BorderRadius, BoxShadow, Styles, Alignment, Padding, Tabs, Tab, Carousel, ButtonGroup, CssGenerator: { CssGenerator } } = wp.qubelyComponents

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
				onChange={value => this.updateAtrributes('author', value, index)}
				value={name}
			/>
		)
	}
	renderDesignation = (designation, index) => {
		return (
			<RichText
				key="editable"
				placeholder={__('Add designation...')}
				formattingControls={['bold', 'italic', 'link', 'strikethrough']}
				keepPlaceholderOnFocus
				onChange={value => this.updateAtrributes('designation', value, index)}
				value={designation}
			/>
		)
	}
	/** 
	 *  Author Avatar*/  
	renderAvatar = (avatar, index) => {
		return (
			<MediaUpload
				onSelect={val => this.updateAtrributes('avatar', val, index)}
				allowedTypes={['image']}
				multiple={false}
				value={avatar}
				render={({ open }) => (
					<div className="qubely-single-img qubely-backend">
						{ (avatar && avatar.url) ? 
							<img onClick={open} className="qubely-team-avatar" src={avatar.url} /> 
							: 
							<div onClick={open} className="qubely-image-placeholder qubely-team-avatar" ><i className="far fa-image"></i></div> 
						}
					</div>
				)}
			/>

		)
	}

	/** 
	 *  Social Share callback function. */  
	renderSocialShare = () => {
		const { attributes: { 
			showSociallinks, iconStyle, iconUseDefaultStyle, facebook, twitter, instagram, linkedin, youtube, github, flickr, pinterest, dribbble, behance,
		} } = this.props
		return (
			<div className="social-share">

				

				{ showSociallinks && (facebook || twitter || instagram || linkedin || youtube || github || flickr || pinterest || dribbble || behance) &&
					
					<div className={`qubely-team-social-links qubely-team-icon-layout-${iconStyle} qubely-team-icon-style-${iconUseDefaultStyle == 1 ? 'default' : 'custom'}`} 
					onClick={() => this.handlePanelOpenings('Social')}>
                                        
						{ facebook && 
							<a className="qubely-team-social-facebook">
								<i class="fab fa-facebook-f"></i>
							</a> 
						}

						{ twitter && <a className="qubely-team-social-twitter"><i className="fab fa-twitter" /></a> }
						{ instagram && <a className="qubely-team-social-instagram"><i className="fab fa-instagram" /></a> }
						{ linkedin && <a className="qubely-team-social-linkedin"><i className="fab fa-linkedin" /></a> }
						{ youtube && <a className="qubely-team-social-youtube"><i className="fab fa-youtube" /></a> }
						{ github && <a className="qubely-team-social-github"><i className="fab fa-github" /></a> }
						{ flickr && <a className="qubely-team-social-flickr"><i className="fab fa-flickr" /></a> }
						{ pinterest && <a className="qubely-team-social-pinterest"><i className="fab fa-pinterest" /></a> }
						{ dribbble && <a className="qubely-team-social-dribbble"><i className="fab fa-dribbble" /></a> }
						{ behance && <a className="qubely-team-social-behance"><i className="fab fa-behance" /></a> }
					</div>
				}
			</div>
		)
	}

	/** 
	 *  Author information. */
	renderAuthorInfo = (item, index) => {
		const { attributes: { layout, showAvatar } } = this.props
		const { author, designation, avatar } = item

		return (
			<div className={`qubely-team-author`}>
				{ showAvatar && this.renderAvatar(avatar, index) /* Author avater callback function */}
				<div className="qubely-team-author-info">
					<div className={`layout-${layout}`}>
						<div className="qubely-team-author-name" >{this.renderName(author, index)}</div>
						<div className="qubely-team-author-designation" >{this.renderDesignation(designation, index)}</div>
						{ this.renderSocialShare()  /* Social share callback function */}
					</div> 
				</div>
			</div>
		)
	} 

	/** 
	 *  Render author informations. */
	renderTeams = () => {
		const { attributes: { items, layout, carouselItems } } = this.props
		return (
			carouselItems.map((item, index) => {
				return (
					<div key={index} className={`qubely-carousel-item ${index < items[this.parseResponsiveViewPort()] ? 'active' : ''}`} >
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
			uniqueId, items, autoPlay, interval, speed, nav, carouselItems, dragable,
			layout, nameColor, alignment, designationColor, showAvatar, avatarBorderRadius, avatarSize, avatarWidth, avatarHeight,
			avatarBorder, avatarSpacing, nameTypo, nameSpacing, designationTypo, bgPadding, textColor, bgColor, 
			bgBorderRadius, border, boxShadow, boxShadowHover, sliderItemsSpace, isCentered, activeFade,
			arrowStyle, arrowPosition, cornerRadius, cornerHoverRadius, arrowSize, sizeWidth, arrowColor, arrowShapeColor, arrowBorderColor, arrowHoverColor, arrowShapeHoverColor, arrowBorderHoverColor,
			dots, dotIndicator, dotwidth, dotHeight, dotBorderRadius, dotColor, dotActiveColor, horizontalScroll,

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

		} } = this.props

		const { device } = this.state

		const carouselSettings = {
			autoplay: autoPlay,
			items: items,
			margin: 10,
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

		if (uniqueId) { CssGenerator(this.props.attributes, 'teamcarousel', uniqueId) }

		console.log('ID', icons.teamcarousel_1);

		return (
			<Fragment>
				<InspectorControls key="inspector">

					<PanelBody title="Team Carousel" initialOpen={false}>
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
						<Range
							label={__('Padding')}
							min={1}
							max={80}
							responsive
							unit={['px', 'em', '%']}
							value={sliderItemsSpace}
							onChange={(value) => setAttributes({ sliderItemsSpace: value })}
							device={device}
							onDeviceChange={value => this.setState({ device: value })}
						/>
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

						<Toggle label={__('Centered Slides')} value={isCentered} onChange={value => setAttributes({ isCentered: value })} />
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
					
					<PanelBody title={__('Avatar')} initialOpen={false}>
						<Toggle label={__('Show Avatar')} value={showAvatar} onChange={val => setAttributes({ showAvatar: val })} />
						{showAvatar &&
							<Fragment>

								<RadioAdvanced
									label={__('Avatar Size')}
									options={[
										{ label: 'S', value: '48px', title: 'Small' },
										{ label: 'M', value: '64px', title: 'Medium' },
										{ label: 'L', value: '96px', title: 'Large' },
										{ icon: 'fas fa-cog', value: 'custom', title: 'Custom' }
									]}
									value={avatarSize}
									onChange={(value) => setAttributes({ avatarSize: value })}
								/>
								{avatarSize == 'custom' &&
									<Fragment>
										<Range
											label={__('Avatar Width')}
											value={avatarWidth}
											onChange={(value) => setAttributes({ avatarWidth: value })}
											unit={['px', 'em', '%']}
											max={300} min={0} responsive
											device={device}
											onDeviceChange={value => this.setState({ device: value })}
										/>
										<Range
											label={__('Avatar Height')}
											value={avatarHeight}
											onChange={(value) => setAttributes({ avatarHeight: value })}
											unit={['px', 'em', '%']}
											max={300}
											min={0}
											responsive
											device={device}
											onDeviceChange={value => this.setState({ device: value })}
										/>
									</Fragment>
								}
								<Fragment>
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
									<Range
										label={__('Spacing')}
										value={avatarSpacing}
										onChange={(value) => setAttributes({ avatarSpacing: value })}
										min={0}
										max={200}
										unit={['px', 'em', '%']}
										responsive
										device={device}
										onDeviceChange={value => this.setState({ device: value })} />
								</Fragment>
							</Fragment>
						}
					</PanelBody>
					
					<PanelBody title={__('Name')} initialOpen={false}>
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

					<PanelBody title={__('Designation')} initialOpen={false}>
						<Color
							label={__('Color')}
							value={designationColor} onChange={(value) => setAttributes({ designationColor: value })}
						/>
						<Typography
							label={__('Typography')}
							value={designationTypo}
							onChange={(value) => setAttributes({ designationTypo: value })}
							device={device} onDeviceChange={value => this.setState({ device: value })} />
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
					<div className={`qubely-block-team-carousel qubely-layout-style`}>
						<Carousel options={carouselSettings}>
							{this.renderTeams()}
						</Carousel>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Edit