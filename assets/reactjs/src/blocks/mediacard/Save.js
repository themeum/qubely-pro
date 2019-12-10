const { Fragment, Component } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor
const { HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents;
import ExternalVideo from './externalVideo'
class Save extends Component {
	render() {
		const {
			uniqueId,
			layout,
			mediaType,
			videoType,
			videoSource,
			videoUrl,
			localVideo,
			vimeoId,
			youtubeId,
			autoplay,
			image,
			image2x,
			imgAlt,
			imagePosition,
			imagePositionHorizontal,

			//Badge
			badgePosition,
			badge,
			badgeStyle,

			animation,
			interaction
		} = this.props.attributes

		const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
				<div className={`qubely-block-mediacard qubely-mediacard-layout-${layout} ${(imagePosition != '') ? 'qubely-mediacard-image-position-' + imagePosition : ''} ${(imagePositionHorizontal != '') ? 'qubely-mediacard-image-position-' + imagePositionHorizontal : ''}`}>
					<div className={`qubely-block-mediacard-wrapper`}>
						{((layout === 1) || (layout === 2) || (layout === 4) || (layout === 5)) &&
							<div className={`qubely-mediacard-media_wrapper qubely-mediacard-${mediaType}`}>
								{
									mediaType == 'video' &&
									<Fragment>
										{
											videoSource === 'external' ?
												<ExternalVideo videoUrl={videoUrl} autoPlay={autoplay} />
												:
												<div className={`qubely-mediacard-video qubely-local-video`}>
													<video controls src={localVideo.url} autoPlay={autoplay}/>
												</div>
										}
									</Fragment>
								}

								{(mediaType === 'image') &&
									<Fragment>
										{
											(image && image.url) ?
												<img
													src={image.url}
													{...(imgAlt && { alt: imgAlt })}
													srcset={image2x.url != undefined ? image.url + ' 1x, ' + image2x.url + ' 2x' : ''}
												/>
												:
												<div className="qubely-mediacard-image-picker">
													<div className="qubely-mediacard-image qubely-image-placeholder"><i className="far fa-image" /></div>
												</div>
										}
									</Fragment>
								}
							</div>
						}
						{badgeStyle && (badgePosition != 'aboveTitle') && <span className={`${(badgeStyle == 1) ? 'qubely-mediacard-badge qubely-mediacard-badge-position qubely-badge-style-' + badgePosition : 'qubely-mediacard-badge'}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}>{badge}</span>}
						<div className="qubely-mediacard-content-wrapper">
							{badgeStyle && (badgePosition == 'aboveTitle') && <span className={`${(badgeStyle == 1) ? 'qubely-mediacard-badge qubely-mediacard-badge-position qubely-badge-style-' + badgePosition : 'qubely-mediacard-badge'}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}>{badge}</span>}
							<div className={`qubely-mediacard-innerBlocks`}>
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Save