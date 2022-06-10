const { __ } = wp.i18n;
const { Fragment, Component, createRef } = wp.element;
const { PanelBody, TextControl, Toolbar } = wp.components;
const { InspectorControls, BlockControls, InnerBlocks } = wp.blockEditor;
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
	gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
	Inline: { InlineToolbar },
	withCSSGenerator,
	ContextMenu: { ContextMenu, handleContextMenu },
	InspectorTabs,
	InspectorTab,
} = wp.qubelyComponents;

import icons from "../../helpers/icons";
import ExternalVideo from "./externalVideo";
// import templates from './templates.json';

const mediaOptions = [
	{ icon: "fas fa-image", label: __("Image"), value: "image", title: __("Image") },
	{ icon: "fas fa-video", label: __("Video"), value: "video", title: __("Video") },
];
const videoSources = [
	{ label: __("Local"), value: "local", title: __("Local") },
	{ label: __("External"), value: "external", title: __("External") },
];
class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			device: "md",
			selector: true,
			spacer: true,
			// qubelyBlocks: []
		};
		this.qubelyContextMenu = createRef();
	}

	render() {
		const {
			name,
			clientId,
			attributes,
			// blockTypes,
			setAttributes,
			attributes: {
				uniqueId,
				className,
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
				autoplay,
				videoWidth,
				videoFallback,
				customImagePosition,
				imagePositionX,
				imagePositionY,
				imageBorderRadius,
				mediaSpacing,
				image,
				image2x,
				imgAlt,
				imageWidth,

				//content
				title,
				content,

				//Card
				cardBgColor,
				overlayTextColor,
				bgImage,
				cardBgBorder,
				cardBgPadding,
				cardBgBorderRadius,
				cardBgShadow,
				contentPosition,
				contentHorizontalPosition,
				contentHorizontalPosition7,

				//Global
				enablePosition,
				selectPosition,
				positionXaxis,
				positionYaxis,
				globalZindex,
				hideDesktop,
				hideTablet,
				hideMobile,
				globalCss,
				animation,
				interaction,

				//Stack
				stackBg,
				stackWidth,
				stackWidth7,
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
			},
		} = this.props;

		const { device } = this.state;

		return (
			<Fragment>
				<InspectorControls key="inspector">
					<InspectorTabs tabs={["style", "advance"]}>
						<InspectorTab key={"style"}>
							<PanelBody title="">
								<Styles
									columns={3}
									value={layout}
									options={[
										{ value: 1, svg: icons.mediacard_1, label: __("") },
										{ value: 2, svg: icons.mediacard_2, label: __("") },
										{ value: 3, svg: icons.mediacard_3, label: __("") },
										{ value: 4, svg: icons.mediacard_4, label: __("") },
										{ value: 5, svg: icons.mediacard_5, label: __("") },
										{ value: 6, svg: icons.mediacard_6, label: __("") },
										{ value: 7, svg: icons.mediacard_7, label: __("") },
									]}
									onChange={(newLayout) =>
										setAttributes(
											newLayout === 3 || newLayout === 6 || newLayout === 7
												? {
														layout: newLayout,
														bgImage: {
															...bgImage,
															...(bgImage.bgImage && bgImage.bgImage.url
																? {
																		bgType: "image",
																		openBg: 1,
																  }
																: {
																		bgType: "image",
																		openBg: 1,
																		bgImage: {
																			url: "http://qubely.io/wp-content/uploads/qubely-assets/demo/image8.jpg",
																		},
																  }),
														},
												  }
												: { layout: newLayout }
										)
									}
								/>
							</PanelBody>

							{layout != 5 && layout != 4 && (
								<PanelBody title={__("Card Settings")} initialOpen={false}>
									{layout == 1 && (
										<Alignment
											responsive
											disableJustify
											device={device}
											value={alignment}
											label={__("Alignment")}
											alignmentType="content"
											onChange={(val) => setAttributes({ alignment: val })}
											onDeviceChange={(value) => this.setState({ device: value })}
										/>
									)}
									{layout == "7" && (
										<RadioAdvanced
											label={__("Stack Position")}
											options={[
												{ value: "left", label: __("Left") },
												{ value: "middle", label: __("Middle") },
												{ value: "right", label: __("Right") },
											]}
											value={contentHorizontalPosition7}
											onChange={(val) => setAttributes({ contentHorizontalPosition7: val })}
										/>
									)}
									{(layout == "3" || layout == "6") && (
										<RadioAdvanced
											label={__("Stack Position")}
											options={[
												{ value: "top", label: __("Top") },
												{ value: "middle", label: __("Middle") },
												{ value: "bottom", label: __("Bottom") },
											]}
											value={contentPosition}
											onChange={(val) => setAttributes({ contentPosition: val })}
										/>
									)}
									{layout === 3 && (
										<Color
											label={__("Text Color")}
											value={overlayTextColor}
											onChange={(value) => setAttributes({ overlayTextColor: value })}
										/>
									)}

									{(layout == "3" || layout == "6" || layout == "7") && (
										<Background
											label={__("Background")}
											sources={["image", "gradient"]}
											parallax
											value={bgImage}
											onChange={(val) => setAttributes({ bgImage: val })}
										/>
									)}
									{(layout == "1" || layout == "2") && (
										<ColorAdvanced
											label={__("Background")}
											value={cardBgColor}
											onChange={(val) => setAttributes({ cardBgColor: val })}
										/>
									)}

									{(layout == "1" ||
										layout == "2" ||
										layout == "3" ||
										layout == "6" ||
										layout == "7") && (
										<Fragment>
											<Border
												label={__("Border")}
												value={cardBgBorder}
												onChange={(val) => setAttributes({ cardBgBorder: val })}
												min={0}
												max={10}
												unit={["px", "em", "%"]}
												responsive
												device={device}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
											<BorderRadius
												label={__("Corner")}
												value={cardBgBorderRadius}
												onChange={(value) => setAttributes({ cardBgBorderRadius: value })}
												min={0}
												max={100}
												unit={["px", "em", "%"]}
												responsive
												device={device}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
											<Padding
												label={__("Padding")}
												value={cardBgPadding}
												onChange={(val) => setAttributes({ cardBgPadding: val })}
												min={0}
												max={200}
												unit={["px", "em", "%"]}
												responsive
												device={device}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
											<BoxShadow
												label={__("Shadow")}
												value={cardBgShadow}
												onChange={(value) => setAttributes({ cardBgShadow: value })}
											/>
										</Fragment>
									)}

									{(layout == "3" || layout == "6" || layout == "7") && (
										<Fragment>
											<Toggle
												label={__("Fixed Height")}
												value={enableFixedHeight}
												onChange={(value) => setAttributes({ enableFixedHeight: value })}
											/>
											{enableFixedHeight && (
												<Range
													label={__("Height")}
													value={fixedHeight}
													onChange={(value) => setAttributes({ fixedHeight: value })}
													unit={["px", "em", "%"]}
													min={10}
													max={1000}
													responsive
													device={device}
													onDeviceChange={(value) => this.setState({ device: value })}
												/>
											)}
										</Fragment>
									)}
									{layout == "3" && (
										<Fragment>
											<Toggle
												label={__("Enable Overlay")}
												value={enableOverlay}
												onChange={(val) => setAttributes({ enableOverlay: val })}
											/>
											{enableOverlay == 1 && (
												<Fragment>
													<Tabs>
														<Tab tabTitle={__("Normal")}>
															<ColorAdvanced
																label={__("Background")}
																value={overlayBg}
																onChange={(value) =>
																	setAttributes({ overlayBg: value })
																}
															/>
														</Tab>
														<Tab tabTitle={__("Hover")}>
															<ColorAdvanced
																label={__("Background")}
																value={overlayHoverBg}
																onChange={(value) =>
																	setAttributes({ overlayHoverBg: value })
																}
															/>
														</Tab>
													</Tabs>

													<Select
														label={__("Blend Mode")}
														options={[
															["normal", __("Normal")],
															["multiply", __("Multiply")],
															["screen", __("Screen")],
															["overlay", __("Overlay")],
															["darken", __("Darken")],
															["lighten", __("Lighten")],
															["color-dodge", __("Color Dodge")],
															["saturation", __("Saturation")],
															["luminosity", __("Luminosity")],
															["color", __("Color")],
															["color-burn", __("Color Burn")],
															["exclusion", __("Exclusion")],
															["hue", __("Hue")],
														]}
														value={overlayBlend}
														onChange={(val) => setAttributes({ overlayBlend: val })}
													/>
												</Fragment>
											)}
										</Fragment>
									)}
								</PanelBody>
							)}
							{(layout === 1 || layout === 2 || layout === 4 || layout === 5) && (
								<PanelBody title={__("Media Settings")} initialOpen={false}>
									{(layout == "1" || layout == "4") && (
										<RadioAdvanced
											label={__("Media Position")}
											options={[
												{ value: "top", label: __("Top") },
												{ value: "bottom", label: __("Bottom") },
											]}
											value={imagePosition}
											onChange={(val) => setAttributes({ imagePosition: val })}
										/>
									)}
									{(layout == "2" || layout == "5") && (
										<RadioAdvanced
											label={__("Media Position")}
											options={[
												{ value: "left", label: __("Left") },
												{ value: "right", label: __("Right") },
											]}
											value={imagePositionHorizontal}
											onChange={(val) => setAttributes({ imagePositionHorizontal: val })}
										/>
									)}
									<RadioAdvanced
										label={__("Type")}
										value={mediaType}
										options={mediaOptions}
										onChange={(val) => setAttributes({ mediaType: val })}
									/>
									{mediaType == "image" ? (
										<Fragment>
											<Media
												panel
												value={image}
												multiple={false}
												type={["image"]}
												label={__("Image")}
												onChange={(val) => setAttributes({ image: val })}
											/>
											<Media
												panel
												value={image2x}
												multiple={false}
												type={["image"]}
												label={__("Retina Image")}
												onChange={(val) => setAttributes({ image2x: val })}
											/>
											{image.url && (
												<TextControl
													value={imgAlt}
													label={__("Alt Text")}
													onChange={(val) => setAttributes({ imgAlt: val })}
												/>
											)}
											{layout !== 3 && layout !== 4 && (
												<Fragment>
													<Range
														min={0}
														max={2000}
														responsive
														device={device}
														value={imageWidth}
														unit={["px", "em", "%"]}
														label={__("Image Width")}
														onChange={(val) => setAttributes({ imageWidth: val })}
														onDeviceChange={(value) => this.setState({ device: value })}
													/>
													<Range
														label={__("Image Position X")}
														value={imagePositionX}
														onChange={(value) => setAttributes({ imagePositionX: value })}
														unit={["px", "em", "%"]}
														min={-500}
														max={500}
														responsive
														device={device}
														onDeviceChange={(value) => this.setState({ device: value })}
													/>
													<Range
														label={__("Image Position Y")}
														value={imagePositionY}
														onChange={(value) => setAttributes({ imagePositionY: value })}
														unit={["px", "em", "%"]}
														min={-500}
														max={500}
														responsive
														device={device}
														onDeviceChange={(value) => this.setState({ device: value })}
													/>
													<BorderRadius
														min={0}
														max={100}
														responsive
														device={device}
														label={__("Radius")}
														unit={["px", "em", "%"]}
														value={imageBorderRadius}
														onDeviceChange={(value) => this.setState({ device: value })}
														onChange={(val) => setAttributes({ imageBorderRadius: val })}
													/>
												</Fragment>
											)}

											{/* commented waiting for free plugin update */}

											{/* <Range
                                            max={500}
                                            min={-500}
                                            responsive
                                            value={customImagePosition.translateX}
                                            device={device}
                                            label={__('Image Position X')}
                                            unit={['px', 'em', '%']}
                                            onChange={value => {
                                                let newObject = { ...customImagePosition.translateX }
                                                if (value.md)
                                                    newObject.md = value.md
                                                if (value.sm)
                                                    newObject.sm = value.sm
                                                if (value.xs)
                                                    newObject.xs = value.xs
                                                setAttributes(
                                                    {
                                                        customImagePosition: {
                                                            openTransfrom: true,
                                                            unit: value.unit,
                                                            translateY: { ...customImagePosition.translateY ? customImagePosition.translateY : {} },
                                                            translateX: {
                                                                ...newObject
                                                            }
                                                        }
                                                    }
                                                )
                                            }}
                                            onDeviceChange={value => this.setState({ device: value })}
                                        />
                                        <Range
                                            max={500}
                                            min={-500}
                                            responsive
                                            value={customImagePosition.translateY}
                                            device={device}
                                            label={__('Image Position Y')}
                                            unit={['px', 'em', '%']}
                                            onChange={value => {
                                                let newObject = { ...customImagePosition.translateY }
                                                if (value.md)
                                                    newObject.md = value.md
                                                if (value.sm)
                                                    newObject.sm = value.sm
                                                if (value.xs)
                                                    newObject.xs = value.xs
                                                setAttributes(
                                                    {
                                                        customImagePosition: {
                                                            openTransfrom: true,
                                                            unit: value.unit,
                                                            translateX: { ...customImagePosition.translateX ? customImagePosition.translateX : {} },
                                                            translateY: {
                                                                ...newObject
                                                            }
                                                        }
                                                    }
                                                )
                                            }}
                                            onDeviceChange={value => this.setState({ device: value })}
                                        /> */}
											{(layout === 1 || layout === 2 || layout === 4 || layout === 5) && (
												<Range
													min={0}
													max={200}
													responsive
													device={device}
													value={mediaSpacing}
													label={__("Spacing")}
													unit={["px", "em", "%"]}
													onChange={(val) => setAttributes({ mediaSpacing: val })}
													onDeviceChange={(value) => this.setState({ device: value })}
												/>
											)}
										</Fragment>
									) : (
										<Fragment>
											<RadioAdvanced
												label={__("Video Source")}
												value={videoSource}
												options={videoSources}
												onChange={(val) => setAttributes({ videoSource: val })}
											/>
											{videoSource == "external" ? (
												<Fragment>
													<TextControl
														label={__("Url")}
														value={videoUrl}
														onChange={(val) => setAttributes({ videoUrl: val })}
													/>
													<Toggle
														label={__("Autoplay")}
														value={autoplay}
														onChange={(val) => setAttributes({ autoplay: val })}
													/>
												</Fragment>
											) : (
												<Fragment>
													<Media
														panel={true}
														multiple={false}
														type={["video"]}
														value={localVideo}
														label={__("Local Video")}
														onChange={(value) => setAttributes({ localVideo: value })}
													/>
													<Media
														label={__("Fallback Image (Poster)")}
														multiple={false}
														type={["image"]}
														panel={true}
														value={videoFallback}
														onChange={(val) => setAttributes({ videoFallback: val })}
													/>
												</Fragment>
											)}

											{(layout === 1 || layout === 2 || layout === 4 || layout === 5) && (
												<Range
													min={0}
													max={200}
													responsive
													device={device}
													value={mediaSpacing}
													label={__("Spacing")}
													unit={["px", "em", "%"]}
													onChange={(val) => setAttributes({ mediaSpacing: val })}
													onDeviceChange={(value) => this.setState({ device: value })}
												/>
											)}
											{layout !== 3 && layout !== 4 && (
												<Fragment>
													<Range
														min={0}
														max={2000}
														responsive
														device={device}
														value={imageWidth}
														unit={["px", "em", "%"]}
														label={__("Media Width")}
														onChange={(val) => setAttributes({ imageWidth: val })}
														onDeviceChange={(value) => this.setState({ device: value })}
													/>
													<BorderRadius
														min={0}
														max={100}
														responsive
														device={device}
														label={__("Radius")}
														unit={["px", "em", "%"]}
														value={imageBorderRadius}
														onDeviceChange={(value) => this.setState({ device: value })}
														onChange={(val) => setAttributes({ imageBorderRadius: val })}
													/>
												</Fragment>
											)}
										</Fragment>
									)}
								</PanelBody>
							)}
							{(layout === 4 || layout === 5 || layout === 6 || layout === 7) && (
								<PanelBody title={__("Stack Style")} initialOpen={true}>
									{layout == "4" && (
										<RadioAdvanced
											label={__("Stack Position")}
											options={[
												{ value: "left", label: __("Left") },
												{ value: "middle", label: __("Middle") },
												{ value: "right", label: __("Right") },
											]}
											value={contentHorizontalPosition}
											onChange={(val) => setAttributes({ contentHorizontalPosition: val })}
										/>
									)}
									<ColorAdvanced
										value={stackBg}
										label={__("Stack Background")}
										onChange={(value) => setAttributes({ stackBg: value })}
									/>
									<Range
										min={50}
										max={1000}
										responsive
										device={device}
										value={layout != "7" ? stackWidth : stackWidth7}
										label={__("Stack Size")}
										unit={["px", "em", "%"]}
										onChange={(value) =>
											setAttributes(
												layout != "7" ? { stackWidth: value } : { stackWidth7: value }
											)
										}
										onDeviceChange={(value) => this.setState({ device: value })}
									/>
									<BorderRadius
										min={0}
										max={100}
										responsive
										device={device}
										unit={["px", "em", "%"]}
										value={stackBorderRadius}
										label={__("Stack Corner")}
										onDeviceChange={(value) => this.setState({ device: value })}
										onChange={(value) => setAttributes({ stackBorderRadius: value })}
									/>
									<Padding
										min={0}
										max={60}
										responsive
										device={device}
										value={stackPadding}
										unit={["px", "em", "%"]}
										label={__("Stack Padding")}
										onChange={(val) => setAttributes({ stackPadding: val })}
										onDeviceChange={(value) => this.setState({ device: value })}
									/>
									<BoxShadow
										value={stackBoxShadow}
										label={__("Stack Box Shadow")}
										onChange={(value) => setAttributes({ stackBoxShadow: value })}
									/>
								</PanelBody>
							)}
							<PanelBody title={__("Badge")} initialOpen={false}>
								<Fragment>
									<Toggle
										label={__("State")}
										value={badgeStyle}
										onChange={(value) => setAttributes({ badgeStyle: value })}
									/>
									{badgeStyle == 1 && (
										<Fragment>
											<Select
												label={__("Badge Position")}
												options={[
													["aboveTitle", __("Above Title")],
													["leftTop", __("Left Top")],
													["rightTop", __("Right Top")],
													["leftBottom", __("Left Bottom")],
													["rightBottom", __("Right Bottom")],
												]}
												value={badgePosition}
												onChange={(value) => setAttributes({ badgePosition: value })}
											/>

											<Color
												label={__("Background color")}
												value={badgeBg}
												onChange={(val) => setAttributes({ badgeBg: val })}
											/>
											<Color
												label={__("Text color")}
												value={badgeColor}
												onChange={(val) => setAttributes({ badgeColor: val })}
											/>
											<Typography
												value={badgeTypography}
												disableLineHeight
												onChange={(val) => setAttributes({ badgeTypography: val })}
												device={device}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
											<Padding
												min={0}
												max={60}
												responsive
												device={device}
												value={badgePadding}
												unit={["px", "em", "%"]}
												label={__("Padding")}
												onChange={(val) => setAttributes({ badgePadding: val })}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
											<Margin
												min={-200}
												max={300}
												responsive
												device={device}
												value={badgeMargin}
												unit={["px", "em", "%"]}
												label={__("Margin")}
												onChange={(val) => setAttributes({ badgeMargin: val })}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
											<BorderRadius
												min={0}
												max={100}
												responsive
												device={device}
												unit={["px", "em", "%"]}
												value={badgeBorderRadius}
												label={__("Corner")}
												onDeviceChange={(value) => this.setState({ device: value })}
												onChange={(value) => setAttributes({ badgeBorderRadius: value })}
											/>
										</Fragment>
									)}
								</Fragment>
							</PanelBody>
						</InspectorTab>
						<InspectorTab key={"advance"}>
							{animationSettings(uniqueId, animation, setAttributes)}
							{interactionSettings(uniqueId, interaction, setAttributes)}
						</InspectorTab>
					</InspectorTabs>
				</InspectorControls>
				<BlockControls>
					<Toolbar>
						<InlineToolbar
							data={[{ name: "InlineSpacer", key: "spacer", responsive: true, unit: ["px", "em", "%"] }]}
							{...this.props}
							prevState={this.state}
						/>
					</Toolbar>
				</BlockControls>

				{globalSettingsPanel({
					enablePosition,
					selectPosition,
					positionXaxis,
					positionYaxis,
					globalZindex,
					hideDesktop,
					hideTablet,
					hideMobile,
					globalCss,
					setAttributes
				})}
				<div className={`qubely-block-${uniqueId}${className ? ` ${className}` : ""}`}>
					<div
						className={`qubely-block-mediacard qubely-mediacard-layout-${layout} ${
							imagePosition != "" ? "qubely-mediacard-image-position-" + imagePosition : ""
						} ${
							imagePositionHorizontal != ""
								? "qubely-mediacard-image-position-" + imagePositionHorizontal
								: ""
						}`}
						onContextMenu={(event) => handleContextMenu(event, this.qubelyContextMenu.current)}
					>
						<div className={`qubely-block-mediacard-wrapper`}>
							{(layout === 1 || layout === 2 || layout === 4 || layout === 5) && (
								<div className={`qubely-mediacard-media_wrapper qubely-mediacard-${mediaType}`}>
									{mediaType == "video" && (
										<Fragment>
											{videoSource === "external" ? (
												<ExternalVideo videoUrl={videoUrl} autoPlay={autoplay} />
											) : localVideo.url ? (
												<div className={`qubely-mediacard-video qubely-local-video`}>
													{localVideo.url
														? localVideo.url && (
																<video
																	controls
																	src={localVideo.url}
																	autoPlay
																	muted
																	loop
																/>
														  )
														: videoFallback.url && (
																<img
																	src={videoFallback.url}
																	title={_(
																		"Your browser does not support the <video> tag"
																	)}
																/>
														  )}
												</div>
											) : (
												""
											)}
										</Fragment>
									)}

									{mediaType === "image" && (
										<Fragment>
											{image && image.url ? (
												<img
													src={image.url}
													{...(imgAlt && { alt: imgAlt })}
													srcset={
														image2x.url != undefined
															? image.url + " 1x, " + image2x.url + " 2x"
															: ""
													}
												/>
											) : (
												<div className="qubely-mediacard-image qubely-image-placeholder">
													<i className="far fa-image" />
												</div>
											)}
										</Fragment>
									)}
									{badgeStyle &&
										badgePosition != "aboveTitle" &&
										(layout == 1 || layout == 2 || layout == 4 || layout == 5) && (
											<span
												className={`${
													badgeStyle == 1
														? "qubely-mediacard-badge qubely-mediacard-badge-position qubely-badge-style-" +
														  badgePosition
														: "qubely-mediacard-badge"
												}`}
												contentEditable={true}
												suppressContentEditableWarning={true}
												onBlur={(e) => setAttributes({ badge: e.target.innerText })}
											>
												{badge}
											</span>
										)}
								</div>
							)}
							{badgeStyle &&
								badgePosition != "aboveTitle" &&
								(layout == 3 || layout == 6 || layout == 7) && (
									<span
										className={`${
											badgeStyle == 1
												? "qubely-mediacard-badge qubely-mediacard-badge-position qubely-badge-style-" +
												  badgePosition
												: "qubely-mediacard-badge"
										}`}
										contentEditable={true}
										suppressContentEditableWarning={true}
										onBlur={(e) => setAttributes({ badge: e.target.innerText })}
									>
										{badge}
									</span>
								)}
							<div className="qubely-mediacard-content-wrapper">
								{badgeStyle && badgePosition == "aboveTitle" && (
									<span
										className={`${
											badgeStyle == 1
												? "qubely-mediacard-badge qubely-mediacard-badge-position qubely-badge-style-" +
												  badgePosition
												: "qubely-mediacard-badge"
										}`}
										contentEditable={true}
										suppressContentEditableWarning={true}
										onBlur={(e) => setAttributes({ badge: e.target.innerText })}
									>
										{badge}
									</span>
								)}
								<div className={`qubely-mediacard-innerBlocks`}>
									<InnerBlocks
										// allowedBlocks={qubelyBlocks}
										templateInsertUpdatesSelection={false}
										template={[
											[
												"qubely/text",
												{
													title: __(title),
													content: __(content),
												},
											],
										]}
										renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
									/>
								</div>
							</div>
						</div>
						{showContextMenu && (
							<div ref={this.qubelyContextMenu} className={`qubely-context-menu-wraper`}>
								<ContextMenu
									name={name}
									clientId={clientId}
									attributes={attributes}
									setAttributes={setAttributes}
									qubelyContextMenu={this.qubelyContextMenu.current}
								/>
							</div>
						)}
					</div>
				</div>
			</Fragment>
		);
	}
}
export default withCSSGenerator()(Edit);
