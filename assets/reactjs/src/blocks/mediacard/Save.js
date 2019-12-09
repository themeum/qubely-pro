const { Fragment, Component } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor
const { HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents;

class Save extends Component {
	render() {
		const {
			uniqueId,
			layout,
			mediaType,
            videoType,
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

		let autoPlay = autoplay ? '1' : '0';
		const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
                <div className={`qubely-block-mediacard qubely-mediacard-layout-${layout} ${(imagePosition != '') ? 'qubely-mediacard-image-position-' + imagePosition : ''} ${(imagePositionHorizontal != '') ? 'qubely-mediacard-image-position-' + imagePositionHorizontal : ''}`}>
					<div className={`qubely-block-mediacard-wrapper`}>
                    {((layout === 1) || (layout === 2) || (layout === 4) || (layout === 5)) &&
						<div className={`qubely-mediacard-media_wrapper qubely-mediacard-${mediaType}`}>
							{ (mediaType == 'video') &&
								<Fragment>
									{(videoType == 'vimeo') ?
										<iframe src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay}&loop=1&autopause=0`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
										:
										<iframe src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay}&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html"></iframe>
									}
								</Fragment>
							}
							{ (mediaType === 'image') &&
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
                    {badgeStyle && (badgePosition!='aboveTitle') && <span className={`${(badgeStyle == 1) ? 'qubely-mediacard-badge qubely-mediacard-badge-position qubely-badge-style-' + badgePosition : 'qubely-mediacard-badge'}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}>{badge}</span>}
                    <div className="qubely-mediacard-content-wrapper">
                        {badgeStyle && (badgePosition=='aboveTitle') && <span className={`${(badgeStyle == 1) ? 'qubely-mediacard-badge qubely-mediacard-badge-position qubely-badge-style-' + badgePosition : 'qubely-mediacard-badge'}`} contenteditable="true" onBlur={(e) => setAttributes({ 'badge': e.target.innerText })}>{badge}</span>}
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