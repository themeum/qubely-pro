const { Component } = wp.element;
const { HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents;
class Save extends Component {
	render() {
		const { attributes: { uniqueId, lottieFileExternal, animation, autoPlay, loop, mode, hover_out, viewport_top, viewport_bottom, direction, speed, frame_start, frame_end, interaction } } = this.props;
		const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
				<div className={`qubely-block-lottie ${interactionClass}`}>
					<lottie-player
						className="qubely-lottie-player"
						id={`qubely-lottie-player-${uniqueId}`}
						data-type={mode}
						{...(((mode == 'viewport' || mode == 'scroll') && viewport_top) && { 'data-viewport_top': parseFloat(viewport_top) })}
						{...(((mode == 'viewport' || mode == 'scroll') && viewport_bottom) && { 'data-viewport_bottom': parseFloat(viewport_bottom) })}
						data-frame_start={parseInt(frame_start)}
						data-frame_end={parseInt(frame_end)}
						src={lottieFileExternal}
					></lottie-player>
				</div>
			</div>
		)
	}
}
		
export default Save