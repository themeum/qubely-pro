const { __ } = wp.i18n;
const { Fragment, Component, createRef } = wp.element;
const { PanelBody, Tooltip, Toolbar } = wp.components;
const { InspectorControls, RichText, BlockControls, MediaUpload } = wp.blockEditor;
const {
	Inline: { InlineToolbar },
	Background,
	RadioAdvanced,
	ColorAdvanced,
	Select,
	Tabs,
	Tab,
	Range,
	Color,
	Styles,
	Typography,
	Toggle,
	Separator,
	BorderRadius,
	BoxShadow,
	Alignment,
	Padding,
	Headings,
	withCSSGenerator,
	gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
	ContextMenu: { ContextMenu, handleContextMenu },
	InspectorTabs,
	InspectorTab,
} = wp.qubelyComponents;
import icons from "../../helpers/icons";

class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			device: "md",
			spacer: true,
		};
		this.qubelyContextMenu = createRef();
	}

	updatePricelistContent = (key, value, index) => {
		const {
			setAttributes,
			attributes: { pricelistItems, pricelistContents },
		} = this.props;
		if (key === "add" || key === "delete") {
			let updatedAttributes =
				key === "add"
					? [
							...pricelistContents,
							{
								title: "Pricelist Block",
								date: "January 1, 2021",
								description: "Include detailed for your products, company, etc with Qubely Pricelist.",
							},
					  ]
					: pricelistContents.slice(0, pricelistItems - 1);
			setAttributes({
				pricelistContents: updatedAttributes,
				pricelistItems: key === "add" ? pricelistItems + 1 : pricelistItems - 1,
			});
		} else {
			let updatedAttributes = pricelistContents.map((data, itemIndex) => {
				if (index === itemIndex) {
					return { ...data, [key]: value };
				} else {
					return data;
				}
			});
			setAttributes({ pricelistContents: updatedAttributes });
		}
	};

	removePricelistItem = (index) => {
		const {
			setAttributes,
			attributes: { pricelistContents },
		} = this.props;
		let newPricelistItems = JSON.parse(JSON.stringify(pricelistContents));
		newPricelistItems.splice(index, 1);
		setAttributes({ pricelistContents: newPricelistItems });
	};

	renderPricelist = () => {
		const {
			attributes: {
				pricelistContents,
				contentAlign,
				headingLevel,
				mediaType,
				enableMedia,
				enableBadge,
				enablePrice,
				enableDiscount,
				enableDescription,
				enableLine,
				priceAfterTitle,
			},
		} = this.props;
		const titleTagName = "h" + headingLevel;
		return pricelistContents.map(({ title, description, image, price, digitText, discount, badge }, index) => {
			return (
				<div key={index} className={`qubely-pricelist-item qubely-pricelist-item-${contentAlign}`}>
					<Tooltip text={__("Delete this item")}>
						<span
							className="qubely-repeatable-action-remove"
							role="button"
							onClick={() => this.removePricelistItem(index)}
						>
							<span class="dashicons dashicons-no-alt" />
						</span>
					</Tooltip>
					<div className={`qubely-pricelist-content qubely-backend`}>
						{enableMedia == 1 && mediaType == "image" && (
							<div className={`qubely-pricelist-image-container`}>
								<div
									className={`qubely-pricelist-content-image${
										image != undefined && image.url != undefined ? "" : " qubely-empty-image"
									}`}
								>
									<MediaUpload
										onSelect={(value) => this.updatePricelistContent("image", value, index)}
										allowedTypes={["image"]}
										multiple={false}
										value={image}
										render={({ open }) => (
											<Fragment>
												{image != undefined && image.url != undefined ? (
													<div className="qubely-pricelist-content-image-editor">
														<img src={image.url} alt={__("image")} />
														<div className="qubely-media-actions qubely-field-button-list">
															<Tooltip text={__("Edit")}>
																<button
																	className="qubely-button"
																	aria-label={__("Edit")}
																	onClick={open}
																	role="button"
																>
																	<span
																		aria-label={__("Edit")}
																		className="fas fa-pencil-alt fa-fw"
																	/>
																</button>
															</Tooltip>
															<Tooltip text={__("Remove")}>
																<button
																	className="qubely-button"
																	aria-label={__("Remove")}
																	onClick={() =>
																		this.updatePricelistContent("image", "", index)
																	}
																	role="button"
																>
																	<span
																		aria-label={__("Close")}
																		className="far fa-trash-alt fa-fw"
																	/>
																</button>
															</Tooltip>
														</div>
													</div>
												) : (
													<a className="qubely-insert-image" href="#" onClick={open}>
														<svg
															aria-hidden="true"
															role="img"
															focusable="false"
															class="dashicon dashicons-insert"
															xmlns="http://www.w3.org/2000/svg"
															width="20"
															height="20"
															viewBox="0 0 20 20"
														>
															<path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path>
														</svg>
														<span>{__("Insert")}</span>
													</a>
												)}
											</Fragment>
										)}
									/>
									{enableBadge && (
										<div className="qubely-pricelist-badge">
											<RichText
												placeholder={__("Badge")}
												tagName="div"
												value={badge}
												onChange={(value) => this.updatePricelistContent("badge", value, index)}
												keepPlaceholderOnFocus
											/>
										</div>
									)}
								</div>
							</div>
						)}
						{enableMedia == 1 && mediaType == "digit" && (
							<div className="qubely-pricelist-media-digit">
								<div className="qubely-pricelist-digit">
									<RichText
										placeholder={__("01")}
										tagName="div"
										className="qubely-pricelist-digit"
										value={digitText}
										onChange={(value) => this.updatePricelistContent("digitText", value, index)}
										keepPlaceholderOnFocus
									/>
								</div>
							</div>
						)}
						<div className="qubely-pricelist-description-wrapper">
							<div className="qubely-pricelist-description">
								<div className="qubely-pricelist-title-wrapper">
									<RichText
										placeholder={__("Add title")}
										tagName={titleTagName}
										className="qubely-pricelist-title"
										value={title}
										onChange={(value) => this.updatePricelistContent("title", value, index)}
										keepPlaceholderOnFocus
									/>
									{enableLine && priceAfterTitle == 0 && <span className="qubely-pricelist-line" />}
									<div className="qubely-pricelist-price-wrapper">
										{enableDiscount && (
											<RichText
												placeholder={__("Discount Price")}
												tagName="div"
												className="qubely-pricelist-discount"
												value={discount}
												onChange={(value) =>
													this.updatePricelistContent("discount", value, index)
												}
												keepPlaceholderOnFocus
											/>
										)}
										{enablePrice && (
											<RichText
												placeholder={__("Add Price")}
												tagName="div"
												className="qubely-pricelist-price"
												value={price}
												onChange={(value) => this.updatePricelistContent("price", value, index)}
												keepPlaceholderOnFocus
											/>
										)}
									</div>
								</div>
								{enableDescription && (
									<RichText
										placeholder={__("Add description")}
										tagName="div"
										className="qubely-pricelist-introtext"
										value={description}
										onChange={(value) => this.updatePricelistContent("description", value, index)}
										keepPlaceholderOnFocus
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			);
		});
	};
	render() {
		const {
			name,
			clientId,
			attributes,
			setAttributes,
			attributes: {
				uniqueId,
				className,
				pricelistItems,
				style,
				column,
				columnGap,
				headingLevel,
				priceAfterTitle,
				headingTypography,
				headingColor,
				headingWhiteColor,
				headingSpacing,
				contentBg,
				enableContentBorder,
				contentBorderWidth,
				contentBorderColor,
				contentPadding,
				contentBorderRadius,
				contentBoxShadow,
				contentSpacing,
				contentAlign,
				overlayContentBg,
				overlayHoverBg,
				overlayBg,
				height,
				enableLine,
				lineBorderWidth,
				lineBorderColor,
				lineBorderStyle,
				badgePosition,
				enableMedia,
				mediaType,
				imagePosition,
				imageBorderRadius,
				imageSize,
				imageSpacing,
				enableBadge,
				badgePadding,
				badgeBorderRadius,
				badgeBg,
				badgeColor,
				digitColor,
				digitBg,
				digitSize,
				digitBorderRadius,
				digitSpacing,
				digitTypography,
				enablePrice,
				priceTypography,
				priceColor,
				priceWhiteColor,
				enableDescription,
				descriptionTypography,
				descriptionColor,
				descriptionWhiteColor,
				enableDiscount,
				discountTypography,
				discountColor,
				discountWhiteColor,
				globalZindex,
				enablePosition,
				selectPosition,
				positionXaxis,
				positionYaxis,
				hideDesktop,
				hideTablet,
				hideMobile,
				globalCss,
				animation,
				interaction,
			},
		} = this.props;

		const { device } = this.state;

		return (
			<Fragment>
				<InspectorControls key="inspector">
					<InspectorTabs tabs={["style", "advance"]}>
						<InspectorTab key={"style"}>
							<PanelBody title={__("General Settings")}>
								<Range
									min={2}
									max={100}
									label={__("Number of Items")}
									value={pricelistItems}
									onChange={(value) =>
										this.updatePricelistContent(value > pricelistItems ? "add" : "delete")
									}
								/>
								<Range
									label={__("Select Column")}
									value={column}
									onChange={(value) => setAttributes({ column: value })}
									min={1}
									step={1}
									max={3}
									responsive
									device={device}
									onDeviceChange={(value) => this.setState({ device: value })}
								/>
								<Range
									label={__("Column Gap")}
									value={columnGap}
									onChange={(value) => setAttributes({ columnGap: value })}
									unit={["px", "em", "%"]}
									min={0}
									max={100}
									responsive
									device={device}
									onDeviceChange={(value) => this.setState({ device: value })}
								/>
								<Toggle
									label={__("Price After Title")}
									value={priceAfterTitle}
									onChange={(val) => setAttributes({ priceAfterTitle: val })}
								/>
							</PanelBody>

							<PanelBody title={__("Price List Layouts")} initialOpen={false}>
								{enableMedia == 1 && mediaType == "image" ? (
									<Styles
										columns={3}
										value={style}
										onChange={(val) => setAttributes({ style: val })}
										options={[
											{ value: 1, svg: icons.postgrid_design_1 },
											{ value: 2, svg: icons.postgrid_design_3 },
											{ value: 3, svg: icons.postgrid_design_6 },
										]}
									/>
								) : (
									<Styles
										columns={2}
										value={style}
										onChange={(val) => setAttributes({ style: val })}
										options={[
											{ value: 1, svg: icons.postgrid_design_1 },
											{ value: 2, svg: icons.postgrid_design_3 },
										]}
									/>
								)}
								<Alignment
									label={__("Alignment")}
									value={contentAlign}
									onChange={(val) => setAttributes({ contentAlign: val })}
									alignmentType="content"
									disableJustify
								/>
								{style != 3 && (
									<Fragment>
										<Background
											label={__("Background")}
											sources={["image", "gradient"]}
											parallax
											value={contentBg}
											onChange={(val) => setAttributes({ contentBg: val })}
										/>
										{style == 2 && (
											<ColorAdvanced
												label={__("Overlay")}
												value={overlayContentBg}
												onChange={(value) => setAttributes({ overlayContentBg: value })}
											/>
										)}
										<Toggle
											label={__("Enable Border")}
											value={enableContentBorder}
											onChange={(val) => setAttributes({ enableContentBorder: val })}
										/>
										{enableContentBorder == 1 && (
											<Fragment>
												<Range
													label={__("Border Width")}
													value={contentBorderWidth}
													onChange={(val) => setAttributes({ contentBorderWidth: val })}
													min={1}
													max={5}
													responsive
													device={device}
													unit={["px"]}
													onDeviceChange={(value) => this.setState({ device: value })}
												/>
												<Color
													label={__("Border Color")}
													value={contentBorderColor}
													onChange={(value) => setAttributes({ contentBorderColor: value })}
												/>
												<Separator />
											</Fragment>
										)}
									</Fragment>
								)}
								{enableMedia == 1 && mediaType == "image" && style === 3 && (
									<Tabs>
										<Tab tabTitle={__("Normal")}>
											<ColorAdvanced
												label={__("Overlay")}
												value={overlayBg}
												onChange={(value) => setAttributes({ overlayBg: value })}
											/>
										</Tab>
										<Tab tabTitle={__("Hover")}>
											<ColorAdvanced
												label={__("Hover Overlay")}
												value={overlayHoverBg}
												onChange={(value) => setAttributes({ overlayHoverBg: value })}
											/>
										</Tab>
									</Tabs>
								)}
								{enableMedia == 1 && mediaType == "image" && style === 3 && (
									<Range
										label={__("Height")}
										value={height}
										onChange={(val) => setAttributes({ height: val })}
										min={0}
										max={500}
										responsive
										unit={["px", "em", "%"]}
										device={device}
										onDeviceChange={(value) => this.setState({ device: value })}
									/>
								)}
								<BorderRadius
									label={__("Radius")}
									value={contentBorderRadius}
									onChange={(val) => setAttributes({ contentBorderRadius: val })}
									min={0}
									max={100}
									unit={["px", "em", "%"]}
									responsive
									device={device}
									onDeviceChange={(value) => this.setState({ device: value })}
								/>
								<BoxShadow
									label={__("Box-Shadow")}
									value={contentBoxShadow}
									onChange={(val) => setAttributes({ contentBoxShadow: val })}
									disableInset
								/>
								<Range
									label={__("Spacing")}
									value={contentSpacing}
									onChange={(val) => setAttributes({ contentSpacing: val })}
									min={0}
									max={100}
									responsive
									unit={["px", "em", "%"]}
									device={device}
									onDeviceChange={(value) => this.setState({ device: value })}
								/>
								<Padding
									label={__("Padding")}
									value={contentPadding}
									onChange={(val) => setAttributes({ contentPadding: val })}
									min={0}
									max={200}
									unit={["px", "em", "%"]}
									responsive
									device={device}
									onDeviceChange={(value) => this.setState({ device: value })}
								/>
							</PanelBody>
							{priceAfterTitle == 0 && (
								<PanelBody title={__("Line Style")} initialOpen={false}>
									<Toggle
										label={__("Enable Line")}
										value={enableLine}
										onChange={(val) => setAttributes({ enableLine: val })}
									/>
									{enableLine == 1 && (
										<Fragment>
											<Range
												label={__("Border Width")}
												value={lineBorderWidth}
												onChange={(val) => setAttributes({ lineBorderWidth: val })}
												min={1}
												max={5}
												responsive
												device={device}
												unit={["px"]}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
											<Color
												label={__("Border Color")}
												value={lineBorderColor}
												onChange={(value) => setAttributes({ lineBorderColor: value })}
											/>
											<Select
												label={__("Position")}
												options={["solid", "dotted", "dashed"]}
												value={lineBorderStyle}
												onChange={(value) => setAttributes({ lineBorderStyle: value })}
											/>
										</Fragment>
									)}
								</PanelBody>
							)}

							<PanelBody title={__("Media")} initialOpen={false}>
								<Toggle
									label={__("Enable")}
									value={enableMedia}
									onChange={(val) => setAttributes({ enableMedia: val })}
								/>
								{enableMedia == 1 && (
									<RadioAdvanced
										label={__("Media Type")}
										value={mediaType}
										onChange={(value) => setAttributes({ mediaType: value })}
										options={[
											{ label: __("Image"), value: "image", title: __("Image") },
											{ label: __("Digit"), value: "digit", title: __("Digit") },
										]}
									/>
								)}
								{enableMedia == 1 && style != 3 && (
									<Fragment>
										<RadioAdvanced
											label={__("Position")}
											value={imagePosition}
											onChange={(value) => setAttributes({ imagePosition: value })}
											options={[
												{ label: __("Left"), value: "left", title: __("Left") },
												{ label: __("Top"), value: "top", title: __("Top") },
											]}
										/>
										{enableMedia == 1 && mediaType == "image" && (
											<Fragment>
												<Range
													label={__("Size")}
													value={imageSize}
													onChange={(val) => setAttributes({ imageSize: val })}
													min={0}
													max={500}
													responsive
													unit={["px", "em", "%"]}
													device={device}
													onDeviceChange={(value) => this.setState({ device: value })}
												/>
												<BorderRadius
													label={__("Radius")}
													value={imageBorderRadius}
													onChange={(val) => setAttributes({ imageBorderRadius: val })}
													min={0}
													max={100}
													unit={["px", "em", "%"]}
													responsive
													device={device}
													onDeviceChange={(value) => this.setState({ device: value })}
												/>
												<Range
													label={__("Spacing")}
													value={imageSpacing}
													onChange={(val) => setAttributes({ imageSpacing: val })}
													min={0}
													max={100}
													responsive
													unit={["px", "em", "%"]}
													device={device}
													onDeviceChange={(value) => this.setState({ device: value })}
												/>
											</Fragment>
										)}
									</Fragment>
								)}
								{enableMedia == 1 && mediaType == "digit" && (
									<Fragment>
										<Typography
											label={__("Typography")}
											value={digitTypography}
											onChange={(val) => setAttributes({ digitTypography: val })}
											device={device}
											onDeviceChange={(value) => this.setState({ device: value })}
										/>
										<Color
											label={__("Color")}
											value={digitColor}
											onChange={(value) => setAttributes({ digitColor: value })}
										/>
										<Color
											label={__("Background Color")}
											value={digitBg}
											onChange={(value) => setAttributes({ digitBg: value })}
										/>
										<Range
											label={__("Size")}
											value={digitSize}
											onChange={(val) => setAttributes({ digitSize: val })}
											min={0}
											max={500}
											responsive
											unit={["px", "em", "%"]}
											device={device}
											onDeviceChange={(value) => this.setState({ device: value })}
										/>
										<BorderRadius
											label={__("Radius")}
											value={digitBorderRadius}
											onChange={(val) => setAttributes({ digitBorderRadius: val })}
											min={0}
											max={100}
											unit={["px", "em", "%"]}
											responsive
											device={device}
											onDeviceChange={(value) => this.setState({ device: value })}
										/>
										<Range
											label={__("Spacing")}
											value={digitSpacing}
											onChange={(val) => setAttributes({ digitSpacing: val })}
											min={0}
											max={100}
											responsive
											unit={["px", "em", "%"]}
											device={device}
											onDeviceChange={(value) => this.setState({ device: value })}
										/>
									</Fragment>
								)}
							</PanelBody>

							{enableMedia == 1 && mediaType == "image" && (
								<PanelBody title={__("Badge")} initialOpen={false}>
									<Toggle
										label={__("Enable")}
										value={enableBadge}
										onChange={(val) => setAttributes({ enableBadge: val })}
									/>
									{enableBadge == 1 && (
										<Fragment>
											<RadioAdvanced
												label={__("Position")}
												value={badgePosition}
												onChange={(value) => setAttributes({ badgePosition: value })}
												options={[
													{ label: __("Left Top"), value: "left", title: __("Left Top") },
													{ label: __("Right Top"), value: "right", title: __("Right Top") },
												]}
											/>
											<Color
												label={__("Color")}
												value={badgeColor}
												onChange={(value) => setAttributes({ badgeColor: value })}
											/>
											<Color
												label={__("Background Color")}
												value={badgeBg}
												onChange={(value) => setAttributes({ badgeBg: value })}
											/>
											<BorderRadius
												label={__("Radius")}
												value={badgeBorderRadius}
												onChange={(val) => setAttributes({ badgeBorderRadius: val })}
												min={0}
												max={100}
												unit={["px", "em", "%"]}
												responsive
												device={device}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
											<Padding
												label={__("Padding")}
												value={badgePadding}
												onChange={(val) => setAttributes({ badgePadding: val })}
												min={0}
												max={200}
												unit={["px", "em", "%"]}
												responsive
												device={device}
												onDeviceChange={(value) => this.setState({ device: value })}
											/>
										</Fragment>
									)}
								</PanelBody>
							)}

							<PanelBody title={__("Content")} initialOpen={false}>
								<Headings
									label={__("Heading Tag")}
									selectedLevel={headingLevel}
									onChange={(value) => setAttributes({ headingLevel: value })}
								/>
								<Typography
									label={__("Heading Typography")}
									value={headingTypography}
									onChange={(val) => setAttributes({ headingTypography: val })}
									device={device}
									onDeviceChange={(value) => this.setState({ device: value })}
								/>
								<Color
									label={__("Heading Color")}
									value={style != "3" ? headingColor : headingWhiteColor}
									onChange={(val) =>
										setAttributes(style != "3" ? { headingColor: val } : { headingWhiteColor: val })
									}
								/>
								<Range
									label={__("Heading Spacing")}
									value={headingSpacing}
									onChange={(val) => setAttributes({ headingSpacing: val })}
									min={0}
									max={100}
									responsive
									unit={["px", "em", "%"]}
									device={device}
									onDeviceChange={(value) => this.setState({ device: value })}
								/>
								<Separator />

								<Toggle
									label={__("Enable Description")}
									value={enableDescription}
									onChange={(val) => setAttributes({ enableDescription: val })}
								/>
								{enableDescription == 1 && (
									<Fragment>
										<Typography
											label={__("Description Typography")}
											value={descriptionTypography}
											onChange={(val) => setAttributes({ descriptionTypography: val })}
											device={device}
											onDeviceChange={(value) => this.setState({ device: value })}
										/>
										<Color
											label={__("Description Color")}
											value={style != "3" ? descriptionColor : descriptionWhiteColor}
											onChange={(val) =>
												setAttributes(
													style != "3"
														? { descriptionColor: val }
														: { descriptionWhiteColor: val }
												)
											}
										/>
									</Fragment>
								)}

								<Separator />
								<Toggle
									label={__("Enable Price")}
									value={enablePrice}
									onChange={(val) => setAttributes({ enablePrice: val })}
								/>
								{enablePrice == 1 && (
									<Fragment>
										<Typography
											label={__("Price Typography")}
											value={priceTypography}
											onChange={(val) => setAttributes({ priceTypography: val })}
											device={device}
											onDeviceChange={(value) => this.setState({ device: value })}
										/>
										<Color
											label={__("Price Color")}
											value={style != "3" ? priceColor : priceWhiteColor}
											onChange={(val) =>
												setAttributes(
													style != "3" ? { priceColor: val } : { priceWhiteColor: val }
												)
											}
										/>
									</Fragment>
								)}

								<Toggle
									label={__("Enable Discount")}
									value={enableDiscount}
									onChange={(val) => setAttributes({ enableDiscount: val })}
								/>
								{enableDiscount == 1 && (
									<Fragment>
										<Typography
											label={__("Discount Typography")}
											value={discountTypography}
											onChange={(val) => setAttributes({ discountTypography: val })}
											device={device}
											onDeviceChange={(value) => this.setState({ device: value })}
										/>
										<Color
											label={__("Discount Color")}
											value={style != "3" ? discountColor : discountWhiteColor}
											onChange={(val) =>
												setAttributes(
													style != "3" ? { discountColor: val } : { discountWhiteColor: val }
												)
											}
										/>
									</Fragment>
								)}
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
						className={`qubely-block-pricelist qubely-pricelist-item-${style}`}
						onContextMenu={(event) => handleContextMenu(event, this.qubelyContextMenu.current)}
					>
						<div className={`qubely-pricelist-items`}>{this.renderPricelist()}</div>
						<div ref={this.qubelyContextMenu} className={`qubely-context-menu-wraper`}>
							<ContextMenu
								name={name}
								clientId={clientId}
								attributes={attributes}
								setAttributes={setAttributes}
								qubelyContextMenu={this.qubelyContextMenu.current}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withCSSGenerator()(Edit);
