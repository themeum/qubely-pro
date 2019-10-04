const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { withSelect } = wp.data
const { dateI18n, __experimentalGetSettings } = wp.date
const { addQueryArgs } = wp.url
const { RangeControl, PanelBody, Toolbar, Spinner, TextControl, SelectControl } = wp.components;
const { InspectorControls, BlockControls } = wp.editor
const { Range, ButtonGroup, Inline: { InlineToolbar }, Toggle, Dropdown, Select, Separator, ColorAdvanced, Carousel, Typography, Color, Border, BorderRadius, Padding, BoxShadow, Styles, Tabs, Tab, RadioAdvanced, gloalSettings: { globalSettingsPanel, animationSettings }, CssGenerator: { CssGenerator }, ContextMenu: { ContextMenu, handleContextMenu }, } = wp.qubelyComponents

import icons from '../../helpers/icons'

const CATEGORIES_LIST_QUERY = { per_page: -1 };

class Edit extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			device: 'md',
			spacer: true,
			categoriesList: [],
		};
	}

	componentDidMount() {
		const { setAttributes, clientId, attributes: { uniqueId } } = this.props
		this.isStillMounted = true;
		this.fetchRequest = wp.apiFetch({
			path: addQueryArgs(`/wp/v2/categories`, CATEGORIES_LIST_QUERY),
		}).then(
			(categoriesList) => {
				if (this.isStillMounted) {
					this.setState({ categoriesList });
				}
			}
		).catch(
			() => {
				if (this.isStillMounted) {
					this.setState({ categoriesList: [] });
				}
			}
		);
		const _client = clientId.substr(0, 6)
		if (!uniqueId) {
			setAttributes({ uniqueId: _client });
		} else if (uniqueId && uniqueId != _client) {
			setAttributes({ uniqueId: _client });
		}
	}
	componentWillUnmount() {
		this.isStillMounted = false;
	}
	truncate(value, limit) {
		return value.split(' ').splice(0, limit).join(' ');
	}

	renderFeaturedImage = (post) => {
		const { attributes: { layout, style, imgSize, imageAnimation, showCategory, categoryPosition } } = this.props
		return (
			<div className={`${layout === 1 ? 'qubely-post-list-img' : 'qubely-post-grid-img'} qubely-post-img qubely-post-img-${imageAnimation}`}>
				<img className="qubely-post-image" src={post.qubely_featured_image_url && post.qubely_featured_image_url[imgSize][0]} />
				{ (showCategory == 'badge' && style !== 4) &&
					<div className={`qubely-postcarousel-cat-position qubely-postcarousel-cat-position-${categoryPosition}`}>
						<span className="qubely-postcarousel-category qubely-backend" dangerouslySetInnerHTML={{ __html: post.qubely_category }} />
					</div>
				}
			</div>
		)
	}

	renderCardContent = (post) => {
		const { attributes: { contentPosition, style, readmoreStyle, showCategory, categoryPosition, showTitle, titlePosition, showAuthor, showDates, showComment, showExcerpt, excerptLimit, showReadMore, buttonText, readmoreSize } } = this.props
		let title = <h3 className="qubely-postcarousel-title"><a>{post.title.rendered}</a></h3>

		return (
			<div className={`qubely-post-grid-content align-${contentPosition}`}>
				{(showCategory === 'default') && <span className="qubely-postcarousel-category qubely-backend" dangerouslySetInnerHTML={{ __html: post.qubely_category }} />}

				{ (showCategory == 'badge' && style === 4) &&
					<div className={`qubely-postcarousel-cat-position qubely-postcarousel-cat-position-${categoryPosition}`}>
						<span className="qubely-postcarousel-category qubely-backend" dangerouslySetInnerHTML={{ __html: post.qubely_category }} />
					</div>
				}

				{showTitle && (titlePosition == true) && title}

				{(showAuthor || showDates || showComment) &&
					<div className="qubely-postcarousel-meta">
						{showAuthor && <span><i className="fas fa-user"></i> {__('By')} <a >{post.qubely_author.display_name}</a></span>}
						{showDates && <span><i className="far fa-calendar-alt"></i> {dateI18n(__experimentalGetSettings().formats.date, post.date_gmt)}</span>}
						{showComment && <span><i className="fas fa-comment"></i> {(post.qubely_comment ? post.qubely_comment : '0')}</span>}
					</div>
				}

				{showTitle && (titlePosition == false) && title}
				{showExcerpt && <div className="qubely-postcarousel-intro" dangerouslySetInnerHTML={{ __html: this.truncate(post.excerpt.rendered, excerptLimit) }} />}
				{showReadMore && <div className="qubely-postcarousel-btn-wrapper"><a className={`qubely-postcarousel-btn qubely-button-${readmoreStyle} is-${readmoreSize}`}>{buttonText}</a></div>}
			</div>
		)
	}

	parseResponsiveViewPort = () => {
		const { attributes: { postitems } } = this.props
		let responsive = [
			{ viewport: 1170, items: postitems.md },
			{ viewport: 980, items: postitems.sm },
			{ viewport: 580, items: postitems.xs }
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
		const {
			name,
			clientId,
			attributes,
			setAttributes,
			posts,
			taxonomyList,
			attributes: {
				uniqueId,
				//general
				taxonomy,
				categories,
				tags,
				order,
				orderBy,
				postsToShow,

				//image
				showImages,
				imgSize,
				enableFixedHeight,
				fixedHeight,
				imageRadius,
				imageAnimation,

				//card
				cardBackground,
				cardBorder,
				cardBorderRadius,
				cardPadding,
				cardSpace,

				//scart
				stackBg,
				stackWidth,
				stackSpace,
				stackBorderRadius,
				stackPadding,
				stackBoxShadow,

				//readmore link
				readmoreStyle,
				buttonText,
				readmoreSize,
				readmoreCustomSize,
				readmoreTypography,
				readmoreBg,
				readmoreHoverBg,
				readmoreBorder,
				readmoreBorderRadius,
				readmoreBoxShadow,
				readmoreColor,
				readmoreColor2,
				readmoreHoverColor,

				//content
				style,
				showDates,
				showComment,
				showAuthor,
				showCategory,
				categoryPosition,
				showExcerpt,
				excerptLimit,
				showReadMore,
				showTitle,
				titlePosition,

				//typography
				titleTypography,
				metaTypography,
				excerptTypography,
				categoryTypography,

				//colors
				titleColor,
				titleOverlayColor,
				metaColor,
				metaOverlayColor,
				titleHoverColor,
				excerptColor,
				excerptColor2,
				categoryColor,
				categoryColor2,
				categoryHoverColor,
				categoryHoverColor2,
				categoryBackground,
				categoryHoverBackground,
				categoryRadius,
				categoryPadding,
				badgePosition,
				badgePadding,

				//design
				bgColor,
				border,
				borderRadius,
				
				boxShadow,
				contentPosition,
				girdContentPosition,

				//overlay
				overlayBg,
				overlayHoverBg,
				overlayBlend,
				overlayHeight,
				overlaySpace,
				overlayBorderRadius,

				//spacing
				contentPadding,
				titleSpace,
				categorySpace,
				metaSpace,
				excerptSpace,

				//animation
				animation,
				//global
				globalZindex,
				hideTablet,
				hideMobile,
				globalCss,	

				//  ---
				autoPlay,
				postitems,
				isCentered,
				speed,
				interval,
				dragable,
				activeFade,

				// Slider settings
				nav,
				arrowStyle,
				horizontalPosition,
				verticalPosition,
				shapeWidth,
				navSize,
				navColor,
				navShapeColor,
				navBorderColor,
				navigationRadius,
				navHoverColor,
				navShapeHoverColor,
				navBorderHoverColor,
			    navHoverRadius,

				// // Dot Navigation.
				dots,
				dotwidth,
				dotHeight,
				dotBorderRadius,
				dotColor,
				dotActiveColor,

				gutterspace
				
			}
		} = this.props
		const { device } = this.state

		if ( uniqueId ) { CssGenerator(this.props.attributes, 'postcarousel', uniqueId) }
		
		const carouselSettings = {
			nav: nav,
			dots: dots,
			margin: 15,
			speed: speed,
			items: postitems,
			autoplay: autoPlay,
			interval: interval,
			center: isCentered,
			arrowStyle: arrowStyle,
			arrowPosition: verticalPosition,
			responsive: [
				{ 
					viewport: 1170,
					items:  postitems.md
				},
				{
					viewport: 980,
					items: postitems.sm
				},
				{
					viewport: 580,
					items: postitems.xs
				},
			],
		};

		return (
			<Fragment>
				<InspectorControls key="inspector">
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
							value={isCentered} 
							onChange={value => setAttributes({ isCentered: value })}
						/>
						{ isCentered &&
							<Toggle label={__('Fade Deactivated Items')} value={activeFade} onChange={value => setAttributes({ activeFade: value })} />
						}
						<Range
							label={__('Number of Columns')}
							min={1} max={20} responsive device={device}
							device={this.state.device}
							value={ postitems }
							onChange={value => setAttributes({ postitems: value })}
							onDeviceChange={value => this.setState({ device: value })}
						/>	
					</PanelBody>

					<PanelBody title={__('Slider Settings')} initialOpen={false}>
						
						<Toggle label={__('Show Arrow Navigation')} value={nav} onChange={value => setAttributes({ nav: value })} />
					
						{nav &&
							<Fragment>
								<ButtonGroup
									label={__('Navigation Style')}
									options={[[<span className="dashicons dashicons-arrow-right-alt"></span>, 'arrowright'], [<span className="dashicons dashicons-arrow-right-alt2"></span>, 'arrowright2']]}
									value={arrowStyle}
									onChange={value => setAttributes({ arrowStyle: value })}
								/>
								<Range
									label={__('Horizontal Position')}
									value={horizontalPosition} onChange={(value) => setAttributes({ horizontalPosition: value })}
									min={-100} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Vertical Position')}
									value={verticalPosition} onChange={(value) => setAttributes({ verticalPosition: value })}
									min={1} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Shape Size')}
									value={shapeWidth} onChange={(value) => setAttributes({ shapeWidth: value })}
									min={1} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={__('Arrow Size')}
									value={navSize} onChange={(value) => setAttributes({ navSize: value })}
									min={0} max={100}
									responsive unit={['px', 'em', '%']}
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Tabs>
									<Tab tabTitle={__('Normal')}>
										<Color label={__('Navigation Color')} value={navColor} onChange={(value) => setAttributes({ navColor: value })} />
										<Color label={__('Navigation Shape Color')} value={navShapeColor} onChange={val => setAttributes({ navShapeColor: val })} />
										<Border label={__('Navigation Border')} value={navBorderColor} onChange={val => setAttributes({ navBorderColor: val })} />
										<BorderRadius
											min={0}
											max={100}
											responsive
											device={device}
											label={__('Navigation Corner')}
											value={navigationRadius}
											unit={['px', 'em', '%']}
											onChange={value => setAttributes({ navigationRadius: value })}
											onDeviceChange={value => this.setState({ device: value })} 
										/>

									</Tab>
									<Tab tabTitle={__('Hover')}>
										<Color label={__('Navigation Hover Color')} value={navHoverColor} onChange={(value) => setAttributes({ navHoverColor: value })} />
										<Color label={__('Shape Hover Color')} value={navShapeHoverColor} onChange={val => setAttributes({ navShapeHoverColor: val })} />
										<Border label={__('Border Hover Color')} value={navBorderHoverColor} onChange={val => setAttributes({ navBorderHoverColor: val })} />
										<BorderRadius
											label={__('Corner Hover Radius')}
											value={navHoverRadius} onChange={(value) => setAttributes({ navHoverRadius: value })}
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

					<PanelBody title={__('Post Design')} initialOpen={true}>
						<Styles columns={4} value={style} onChange={val => setAttributes({ style: val })}
							options={[
								{ value: 1, svg: icons.postgrid_design_1 },
								{ value: 2, svg: icons.postgrid_design_2 },
								{ value: 3, svg: icons.postgrid_design_4 },
								{ value: 4, svg: icons.postgrid_design_6 },
							]}
						/>
						<ButtonGroup
							label={__('Content Align')}
							options={[[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']] }
							value={ contentPosition }
							onChange={value => setAttributes({ contentPosition: value })}
						/>
						
						{style != 2 &&
							<Range 
								label={__('Gutter Space')} 
								value={gutterspace} 
								onChange={value => setAttributes({ gutterspace: value })} 
								unit={['px', 'em', '%']} min={10} max={100} 
								responsive device={device} 
								onDeviceChange={value => this.setState({ device: value })} 
							/>
						}


						<Padding 
							label={__('Content Padding')} 
							value={contentPadding} 
							onChange={val => setAttributes({ contentPadding: val })} 
							min={0} max={100} 
							unit={['px', 'em', '%']} 
							responsive device={device} 
							onDeviceChange={value => this.setState({ device: value })} 
						/>
						<Separator /> 
						
						{ (style != 4) || (style != 2 ) && 
							<Fragment>
								<ColorAdvanced label={__('Background')} value={bgColor} onChange={(value) => setAttributes({ bgColor: value })} />	
								<Border 
									label={__('Border')} 
									value={border} 
									onChange={val => setAttributes({ border: val })} 
									min={0} max={10} unit={['px', 'em', '%']} 
									responsive device={device} 
									onDeviceChange={value => this.setState({ device: value })} 
								/>

								{ (style != 2) &&
									<BorderRadius min={0} max={100} responsive device={device} label={__('Corner')} value={borderRadius} unit={['px', 'em', '%']} onChange={value => setAttributes({ borderRadius: value })} onDeviceChange={value => this.setState({ device: value })} />
								}
								{ (style != 1) &&
									<BoxShadow label={__('Box-Shadow')} value={boxShadow} onChange={(value) => setAttributes({ boxShadow: value })} />
								}
							</Fragment>
						}

						{(style === 2) &&
							<Fragment>
								<ColorAdvanced label={__('Card Background')} value={cardBackground} onChange={(value) => setAttributes({ cardBackground: value })} />
								
								<Border label={__('Card Border')} value={cardBorder} onChange={val => setAttributes({ cardBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
								
								<BorderRadius min={0} max={100} responsive device={device} label={__('Card Corner')} value={cardBorderRadius} unit={['px', 'em', '%']} onChange={value => setAttributes({ cardBorderRadius: value })} onDeviceChange={value => this.setState({ device: value })} />
								
								
								
								<Range label={__('Card Space')} value={cardSpace} onChange={value => setAttributes({ cardSpace: value })} unit={['px', 'em', '%']} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
								
								<Padding label={__('Card Padding')} value={cardPadding} onChange={val => setAttributes({ cardPadding: val })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
							</Fragment>
						}

						{/* Overlay */}
						{(style === 4) &&
							<Fragment>
								<Range label={__('Overlay Height')} value={overlayHeight} onChange={value => setAttributes({ overlayHeight: value })} unit={['px', 'em', '%']} min={50} max={700} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />

								
								<BorderRadius min={0} max={100} responsive device={device} label={__('Overlay Corner')} value={overlayBorderRadius} unit={['px', 'em', '%']} onChange={value => setAttributes({ overlayBorderRadius: value })} onDeviceChange={value => this.setState({ device: value })} />
								<Tabs>
									<Tab tabTitle={__('Normal')}>
										<ColorAdvanced label={__('Overlay')} value={overlayBg} onChange={(value) => setAttributes({ overlayBg: value })} />
									</Tab>
									<Tab tabTitle={__('Hover')}>
										<ColorAdvanced label={__('Hover Overlay')} value={overlayHoverBg} onChange={(value) => setAttributes({ overlayHoverBg: value })} />
									</Tab>
								</Tabs>
								<Select label={__('Blend Mode')} options={[['normal', __('Normal')], ['multiply', __('Multiply')], ['screen', __('Screen')], ['overlay', __('Overlay')], ['darken', __('Darken')], ['lighten', __('Lighten')], ['color-dodge', __('Color Dodge')], ['saturation', __('Saturation')], ['luminosity', __('Luminosity')], ['color', __('Color')], ['color-burn', __('Color Burn')], ['exclusion', __('Exclusion')], ['hue', __('Hue')]]} value={overlayBlend} onChange={val => setAttributes({ overlayBlend: val })} />
							</Fragment>
						}

						{(style === 3) &&
							<Fragment>
								<ColorAdvanced label={__('Stack Background')} value={stackBg} onChange={(value) => setAttributes({ stackBg: value })} />
								<BorderRadius min={0} max={100} responsive device={device} label={__('Stack Corner')} value={stackBorderRadius} unit={['px', 'em', '%']} onChange={value => setAttributes({ stackBorderRadius: value })} onDeviceChange={value => this.setState({ device: value })} />
								<BoxShadow label={__('Stack Box Shadow')} value={stackBoxShadow} onChange={(value) => setAttributes({ stackBoxShadow: value })} />
							</Fragment>
						}
					</PanelBody>



					<PanelBody title={__('Post Query')} initialOpen={false}>
						<ButtonGroup
							label={__('Taxonomy')}
							options={[[__('Categories'), 'categories'], [__('Tags'), 'tags']]}
							value={taxonomy}
							onChange={value => setAttributes({ taxonomy: value })}
						/>
						<Dropdown
							label={taxonomy === 'categories' ? __('Categories') : __('Tags')}
							enableSearch
							defaultOptionsLabel="All"
							options={[{ value: 'all', label: __('All') }, ...taxonomyList]}
							value={taxonomy === 'categories' ? categories : tags}
							onChange={value => setAttributes(taxonomy === 'categories' ? { categories: value.length && value[value.length - 1].label === 'All' ? [] : value } : { tags: value.length && value[value.length - 1].label === 'All' ? [] : value })}
						/>
						<Range label={__('Number of Items')} value={postsToShow} onChange={value => setAttributes({ postsToShow: parseInt(value) })} min={0} max={15} />

						<SelectControl
							label={__("Order By")}
							value={orderBy}
							options={[
								{ label: __('Date'), value: 'date' },
								{ label: __('Title'), value: 'title' },
								{ label: __('Random'), value: 'rand' },
								{ label: __('Menu Order'), value: 'menu_order' },
							]}
							onChange={value => setAttributes({ orderBy: value })}
						/>
						<ButtonGroup
							label={__('Order')}
							options={[[__('Ascending'), 'asc'], [__('Descending'), 'desc',]]}
							value={order}
							onChange={value => setAttributes({ order: value })}
						/>
					</PanelBody>

					<PanelBody title={__('Image Settings')} initialOpen={false}>
						<Toggle label={__('Show Featured Image')} value={showImages} onChange={value => setAttributes({ showImages: value })} />
						<Toggle label={__('Fixed Image Height')} value={enableFixedHeight} onChange={value => setAttributes({ enableFixedHeight: value })} />
						{enableFixedHeight && <Range label={__('')} value={fixedHeight} onChange={value => setAttributes({ fixedHeight: value })} unit={['px', 'em', '%']} min={10} max={600} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />}
						<SelectControl
							label={__("Image Sizes")}
							value={imgSize}
							onChange={(value) => setAttributes({ imgSize: value })}
							options={qubely_admin.image_sizes}
						/>
						<BorderRadius
							min={0}
							max={100}
							responsive
							device={device}
							label={__('Image Corner')}
							value={imageRadius}
							unit={['px', 'em', '%']}
							onChange={value => setAttributes({ imageRadius: value })}
							onDeviceChange={value => this.setState({ device: value })} />

						<Select label={__('Hover Effect')} options={[['none', __('No Animation')], ['slide-top', __('Slide From Top')], ['slide-right', __('Slide From Right')], ['slide-bottom', __('Slide From Bottom')], ['slide-left', __('Slide From Left')], ['zoom-in', __('Zoom In')], ['zoom-out', __('Zoom Out')]]} value={imageAnimation} onChange={val => setAttributes({ imageAnimation: val })} />
					</PanelBody>
					
					<PanelBody title={__('Title Settings')} initialOpen={false}>
						<Typography label={__('Title')} value={titleTypography} onChange={value => setAttributes({ titleTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />
						<Separator />
						<Typography label={__('Meta')} value={metaTypography} onChange={value => setAttributes({ metaTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />
						<Separator />
						<Typography label={__('Excerpt')} value={excerptTypography} onChange={value => setAttributes({ excerptTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />
					</PanelBody>

					<PanelBody title='Content Settings' initialOpen={false}>
						<Toggle label={__('Show Title')} value={showTitle} onChange={value => setAttributes({ showTitle: value })} />
						<Toggle label={__('Show Excerpt')} value={showExcerpt} onChange={value => setAttributes({ showExcerpt: value })} />
						<RangeControl label={__('Excerpt Limit')} min={1} max={100} step={1} value={excerptLimit} onChange={val => setAttributes({ excerptLimit: val })} />
						<Separator />
						<Toggle label={__('Title Below Meta')} value={titlePosition} onChange={value => setAttributes({ titlePosition: value })} />
						<Toggle label={__('Show date')} value={showDates} onChange={value => setAttributes({ showDates: value })} />
						<Toggle label={__('Show Comment')} value={showComment} onChange={value => setAttributes({ showComment: value })} />
						<Toggle label={__('Show Author')} value={showAuthor} onChange={value => setAttributes({ showAuthor: value })} />
					</PanelBody>

					<PanelBody title={__('Category settings')} initialOpen={false}>
						<RadioAdvanced
							label={__('Category')}
							options={[
								{ icon: 'fas fa-ban', value: 'none', label: __('None'), },
								{ value: 'default', label: __('Default'), },
								{ value: 'badge', label: __('Badge'), }
							]}
							value={showCategory}
							onChange={val => setAttributes({ showCategory: val })}
						/>
						{showCategory !== 'none' &&
							<Fragment>
                                {( showCategory == 'badge') &&
                                    <Fragment>
                                        <Select
                                            label={__("Badge Position")}
                                            options={[['leftTop', __('Left Top')], ['rightTop', __('Right Top')], ['leftBottom', __('Left Bottom')], ['rightBottom', __('Right Bottom')]]}
                                            value={categoryPosition}
                                            onChange={value => setAttributes({ categoryPosition: value })}
                                        />
                                        <Padding label={__('Advanced')} value={badgePadding} onChange={val => setAttributes({ badgePadding: val })} min={0} max={60} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                    </Fragment>
                                }

								<Typography label={__('Typography')} value={categoryTypography} onChange={value => setAttributes({ categoryTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />
								<Tabs>
									<Tab tabTitle={__('Normal')}>
										<Color label={__('Category Color')} value={showCategory == 'badge' ? categoryColor2 : categoryColor} onChange={value => setAttributes(showCategory == 'badge' ? { categoryColor2: value } : { categoryColor: value })} />
										{showCategory == 'badge' && <Color label={__('Category Background')} value={categoryBackground} onChange={value => setAttributes({ categoryBackground: value })} />}
									</Tab>
									<Tab tabTitle={__('Hover')}>
										<Color label={__('Category Hover Color')} value={showCategory == 'badge' ? categoryHoverColor2 : categoryHoverColor} onChange={value => setAttributes(showCategory == 'badge' ? { categoryHoverColor2: value } : { categoryHoverColor: value })} />
										{showCategory == 'badge' && <Color label={__('Category Background')} value={categoryHoverBackground} onChange={value => setAttributes({ categoryHoverBackground: value })} />}
									</Tab>
								</Tabs>
								<BorderRadius
									min={0}
									max={100}
									responsive
									device={device}
									label={__('Corner')}
									value={categoryRadius}
									unit={['px', 'em', '%']}
									onChange={value => setAttributes({ categoryRadius: value })}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								{showCategory == 'badge' && <Padding label={__('Padding')} value={categoryPadding} onChange={val => setAttributes({ categoryPadding: val })} min={0} max={60} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />}
							</Fragment>
						}
					</PanelBody>

					<PanelBody title={__('Read More Link')} initialOpen={false}>
						<Toggle label={__('Show Read More Link')} value={showReadMore} onChange={value => setAttributes({ showReadMore: value })} />
						{
							showReadMore &&
							<Fragment>
								<Styles
									options={
										[
											{ value: 'fill', svg: icons.btn_fill, label: __('Fill') },
											{ value: 'outline', svg: icons.btn_outline, label: __('Outline') }
										]}
									value={readmoreStyle}
									onChange={val => setAttributes({ readmoreStyle: val })}
								/>
								<TextControl label={__('Button Text')} value={buttonText} onChange={val => setAttributes({ buttonText: val })} />
								<Typography label={__('Typography')} value={readmoreTypography} onChange={value => setAttributes({ readmoreTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />

								{
									readmoreStyle === 'fill' &&
									<Fragment>
										<RadioAdvanced
											label={__('Button Size')}
											options={[
												{ label: 'S', value: 'small', title: 'Small' },
												{ label: 'M', value: 'medium', title: 'Medium' },
												{ label: 'L', value: 'large', title: 'Large' },
												{ icon: 'fas fa-cog', value: 'custom', title: 'Custom' }
											]}
											value={readmoreSize}
											onChange={(value) => setAttributes({ readmoreSize: value })} />
										{readmoreSize == 'custom' &&
											<Padding
												label={__('Custom Size')}
												value={readmoreCustomSize}
												onChange={(value) => setAttributes({ readmoreCustomSize: value })}
												unit={['px', 'em', '%']}
												max={150}
												min={0}
												responsive
												device={device}
												onDeviceChange={value => this.setState({ device: value })} />
										}


										<Border label={__('Border')} value={readmoreBorder} onChange={val => setAttributes({ readmoreBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
										{
											(readmoreBorder.openBorder || readmoreStyle === 'fill') &&
											<BorderRadius
												min={0}
												max={100}
												responsive
												device={device}
												label={__('Corner')}
												value={readmoreBorderRadius}
												unit={['px', 'em', '%']}
												onChange={value => setAttributes({ readmoreBorderRadius: value })}
												onDeviceChange={value => this.setState({ device: value })}
											/>
										}
										<BoxShadow label={__('Box-Shadow')} value={readmoreBoxShadow} onChange={(value) => setAttributes({ readmoreBoxShadow: value })} />
									</Fragment>
								}
								<Tabs>
									<Tab tabTitle={__('Normal')}>
										<Color label={__('Text Color')} value={readmoreStyle === 'fill' ? readmoreColor : readmoreColor2} onChange={value => setAttributes(readmoreStyle === 'fill' ? { readmoreColor: value } : { readmoreColor2: value })} />
										{readmoreStyle === 'fill' && <ColorAdvanced label={__('Background')} value={readmoreBg} onChange={(value) => setAttributes({ readmoreBg: value })} />}
									</Tab>
									<Tab tabTitle={__('Hover')}>
										<Color label={__('Text Color')} value={readmoreHoverColor} onChange={value => setAttributes({ readmoreHoverColor: value })} />
										{readmoreStyle === 'fill' && <ColorAdvanced label={__('Background')} value={readmoreHoverBg} onChange={(value) => setAttributes({ readmoreHoverBg: value })} />}
									</Tab>
								</Tabs>
							</Fragment>
						}
					</PanelBody>

					<PanelBody title={__('Spacing')} initialOpen={false}>
						{(showCategory == 'default') &&
							<Range label={__('Category')} value={categorySpace} onChange={value => setAttributes({ categorySpace: value })} unit={['px', 'em', '%']} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
						}
						<Range label={__('Title')} value={titleSpace} onChange={value => setAttributes({ titleSpace: value })} unit={['px', 'em', '%']} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
						<Range label={__('Meta')} value={metaSpace} onChange={value => setAttributes({ metaSpace: value })} unit={['px', 'em', '%']} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
						<Range label={__('Excerpt')} value={excerptSpace} onChange={value => setAttributes({ excerptSpace: value })} unit={['px', 'em', '%']} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
					</PanelBody>

					<PanelBody title={__('Colors')} initialOpen={false}>
						<Color label={__('Title')} value={style !== 4 ? titleColor : titleOverlayColor} onChange={value => setAttributes(style !== 4 ? { titleColor: value } : { titleOverlayColor: value })} />
						<Color label={__('Title Hover')} value={titleHoverColor} onChange={value => setAttributes({ titleHoverColor: value })} />
						<Color label={__('Meta')} value={style !== 4 ? metaColor : metaOverlayColor} onChange={value => setAttributes(style !== 4 ? { metaColor: value } : { metaOverlayColor: value })} />
						<Color label={__('Excerpt')} value={style !== 4 ? excerptColor : excerptColor2} onChange={value => setAttributes(style !== 4 ? { excerptColor: value } : { excerptColor2: value })} />
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

				{globalSettingsPanel(globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

				<div className={`qubely-block-${uniqueId}`}>
					{ (posts && posts.length) ?
						<div className={`qubely-block-image-carousel qubely-postcarousel-wrapper layout-${style}`}>
							<Carousel options={carouselSettings}>
								{ posts && posts.map(post => {
									return (
										<div className={`qubely-carousel-item`}>
											<div className={`qubely-post-grid-view qubely-postgrid-style-${style}`}>
												<div className={`qubely-post-grid-wrapper qubely-post-grid-center`}>
													{showImages && post.qubely_featured_image_url && this.renderFeaturedImage(post)}
													{this.renderCardContent(post)}
												</div>
											</div>
										</div>
									)
								}) }
							</Carousel>
						</div>
						:
						<div className="qubely-postcarousel-is-loading">
							<Spinner />
						</div>
					}
				</div>
			</Fragment >
		);
	}
}

export default withSelect((select, props) => {
	const { getEntityRecords } = select('core')
	const { attributes: { taxonomy, order, orderBy, categories, tags, postsToShow } } = props

	let allTaxonomy = qubely_admin.all_taxonomy
	let seletedTaxonomy = taxonomy === 'categories' ? 'categories' : 'tags'
	let activeTaxes = taxonomy === 'categories' ? categories : tags

	let query = {
		order: order,
		orderby: orderBy,
		per_page: postsToShow,
		[seletedTaxonomy]: activeTaxes.map(({ value, label }) => value),
	}

	return {
		posts: getEntityRecords('postType', 'post', query),
		taxonomyList: allTaxonomy.post.terms ? allTaxonomy.post.terms[taxonomy === 'categories' ? 'category' : 'post_tag'] ? allTaxonomy.post.terms[taxonomy === 'categories' ? 'category' : 'post_tag'] : [] : [],
	};

})

(Edit)
