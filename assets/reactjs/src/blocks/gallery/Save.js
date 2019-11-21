const { Component } = wp.element
const { RichText } = wp.blockEditor
const { HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents
class Save extends Component {

	renderGallery = () => {
		const {
			attributes: {
				galleryContents,
				imageAnimation,
				showCaption,
				enableCaption,
				linkTo,
                enableOverlay,
                enablePopup,
                enablePopupIcon
			}
		} = this.props

		return (galleryContents.map(({ title, image }, index) => {
			let href;
			switch (linkTo) {
				case 'media':
					href = image.fullUrl || image.url;
					break;
				case 'attachment':
					href = image.link;
					break;
			}
            const renderContent = <div className={`qubely-gallery-image-container${enableOverlay ? ' qubely-gallery-overlay' : ''}`}>
                    <div className={`qubely-gallery-content-image qubely-gallery-image-${imageAnimation}`}>
                        {enablePopup && <div className={'qubely-gallery-pupup-icon'}>{enablePopupIcon &&<i class="fas fa-plus"></i>}</div>}
                        <img src={image.url} alt={title} />
                    </div>
                    {enableCaption == 1 &&
                        <div className={`qubely-gallery-caption-wrapper ${(showCaption === 'onHover') ? 'qubely-gallery-caption-onHover' : ''}`}>
                            <RichText.Content tagName='div' className="qubely-gallery-caption" value={title} />
                        </div>
                    }
                </div>

			return (
				<div key={index} className={`qubely-gallery-item`}>
					<div className={`qubely-gallery-content  ${enablePopup ? 'qubely-gallery-pupup' : ''}`}>
                        {(!enablePopup && typeof (href) !== 'undefined') ? <a href={href}>{renderContent}</a> : renderContent}
					</div>
				</div>
			)
		}))
	}

	render() {
		const {
			attributes: {
				uniqueId,
				animation,
				style,
				column,
				interaction
			}
		} = this.props
		const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
				<div className={`qubely-block-gallery ${interactionClass} qubely-gallery-item-${style}`}>
					<div className={`qubely-gallery-items ${'qubely-column-grid qubely-column-grid-md' + column.md + ' ' + 'qubely-column-grid-sm' + column.sm + ' ' + 'qubely-column-grid-xs' + column.xs}`}>
						{this.renderGallery()}
					</div >
				</div >
			</div>
		)
	}
}

export default Save