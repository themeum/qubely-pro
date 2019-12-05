const { Fragment, Component } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor
const { HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents;

class Save extends Component {
	render() {
		const {
			uniqueId,
			layout,
			mediaType,
			videoUrl,
			videoSource,
			vimeoId,
			youtubeId,
			autoplay,
			title,
			separatorStyle,
			separatorPosition,
			enableContent,
			content,
			image,
			image2x,
			imgAlt,

			//Badge
			enableBadge,
			badge,
			badgeStyle,
			badgeSize,

			animation,
			useMediaBg,
			interaction
		} = this.props.attributes

		let autoPlay = autoplay ? '1' : '0';

		const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';

		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
				<div className={`qubely-block-mediacard qubely-mediacard-layout-${layout} ${interactionClass}`}>
					{enableBadge && <span className={`qubely-mediacard-badge qubely-badge-style-${badgeStyle} qubely-badge-size-${badgeSize}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}><span>{badge}</span></span>}
					<div className={`qubely-block-mediacard-wrapper`}>
						<div className={`qubely-mediacard-media_wrapper qubely-mediacard-${mediaType}`}>
							{mediaType == 'video' &&
								// <video controls src={videoUrl} />
								<Fragment>
									{(videoSource == 'vimeo') ?
										<iframe src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay}&loop=1&autopause=0`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
										:
										<iframe src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay}&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html"></iframe>
									}
								</Fragment>
							}

							{mediaType === 'image' &&
								<Fragment>
									{
										(image && image.url) ?
											<img
												src={image.url}
												{...(imgAlt && { alt: imgAlt })}
												className="qubely-mediacard-image"
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
						<div className="qubely-mediacard-content-wrapper">
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