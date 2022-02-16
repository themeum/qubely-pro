const { __ } = wp.i18n;
const { Fragment, Component, createRef } = wp.element;
const { PanelBody, TextControl, SelectControl, Toolbar } = wp.components;
const { InspectorControls, BlockControls, MediaUpload } = wp.blockEditor;
import lottie from "lottie-web/build/player/lottie_light";

const {
	Inline: { InlineToolbar },
	RadioAdvanced,
	Range,
	Toggle,
	withCSSGenerator,
	gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
	ContextMenu: { ContextMenu, handleContextMenu },
	InspectorTabs,
	InspectorTab,
} = wp.qubelyComponents;

class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			device: "md",
			spacer: true,
		};
		this.qubelyContextMenu = createRef();
		this.lottieRef = createRef();
		this.animation = null;
	}

	componentDidMount() {
		this.loadLottieAnimation();
	}

	componentDidUpdate(prevProps) {
		this.loadLottieAnimation();
	}

	loadLottieAnimation() {
		const {
			attributes: { lottieFileExternal },
		} = this.props;
		if (this.animation) {
			this.animation.destroy();
		}

		this.animation = lottie.loadAnimation({
			container: this.lottieRef.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			path:
				lottieFileExternal != ""
					? lottieFileExternal
					: "https://assets9.lottiefiles.com/packages/lf20_e4wr20hj.json",
		});
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
				lottieSource,
				lottieFileSelf,
				lottieFileExternal,
				maxWidth,
				mode,
				autoPlay,
				loop,
				hover_out,
				speed,
				viewport_top,
				viewport_bottom,
				frame_start,
				frame_end,
				direction,
				globalZindex,
				enablePosition,
				selectPosition,
				positionXaxis,
				positionYaxis,
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
								<TextControl
									value={lottieFileExternal}
									label={__("Lottie URL")}
									onChange={(val) => setAttributes({ lottieFileExternal: val })}
								/>

								<Range
									label={__("Max Width")}
									value={maxWidth}
									onChange={(val) => setAttributes({ maxWidth: val })}
									min={0}
									max={500}
									responsive
									unit={["px", "em", "%"]}
									device={device}
									onDeviceChange={(value) => this.setState({ device: value })}
								/>

								<SelectControl
									label={__("Mode")}
									value={mode}
									options={[
										{
											label: __("Viewport"),
											value: "viewport",
										},
										{
											label: __("On Click"),
											value: "click",
										},
										{
											label: __("On Hover"),
											value: "hover",
										},
										{
											label: __("Scroll"),
											value: "scroll",
										},
									]}
									onChange={(value) => setAttributes({ mode: value })}
								/>

								{(mode == "viewport" || mode == "scroll") && (
									<Fragment>
										<Range
											label={__("Viewport Top")}
											value={viewport_top}
											min={0}
											max={1}
											step={0.1}
											onChange={(val) => setAttributes({ viewport_top: val })}
										/>

										<Range
											label={__("Viewport Bottom")}
											value={viewport_bottom}
											min={0}
											max={1}
											step={0.1}
											onChange={(val) => setAttributes({ viewport_bottom: val })}
										/>
									</Fragment>
								)}

								<Range
									label={__("Frame Start")}
									value={frame_start}
									min={0}
									max={100}
									onChange={(val) => setAttributes({ frame_start: val })}
								/>

								<Range
									label={__("Frame End")}
									value={frame_end}
									min={0}
									max={100}
									onChange={(val) => setAttributes({ frame_end: val })}
								/>
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

				{globalSettingsPanel(
					enablePosition,
					selectPosition,
					positionXaxis,
					positionYaxis,
					globalZindex,
					hideTablet,
					hideMobile,
					globalCss,
					setAttributes
				)}

				<div className={`qubely-block-${uniqueId}${className ? ` ${className}` : ""}`}>
					<div
						className={`qubely-block-lottie`}
						onContextMenu={(event) => handleContextMenu(event, this.qubelyContextMenu.current)}
					>
						<div className="qubely-lottie-player" ref={this.lottieRef} />
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
