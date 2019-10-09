const { Component } = wp.element
const { RichText } = wp.editor
const { HelperFunction: { animationAttr } } = wp.qubelyComponents
class Save extends Component {

  renderPricelist = () => {
	const { attributes: { galleryContents,imageAnimation, showCaption, enableCaption } } = this.props

    return (galleryContents.map(({ title, image }, index) => {
      	return (
			<div key={index} className={`qubely-gallery-item`}>
				<div className={`qubely-gallery-content`}>
                    {(image != undefined && image.url != undefined) &&
						<div className={`qubely-gallery-image-container`}>
                            <div className={`qubely-gallery-content-image qubely-gallery-image-${imageAnimation}`}>
                                <img src={image.url} alt={title}/>
                            </div>
                            { enableCaption == 1 &&  
                            <div className={`qubely-gallery-caption-wrapper ${(showCaption === 'onHover') ? 'qubely-gallery-caption-onHover' : ''}`}>
                                <RichText.Content tagName='div' className="qubely-gallery-caption" value={title} />
                            </div>
                            }
						</div>
                    }

				</div>
			</div>
    	)
    }))
  }

  render() {
    const { attributes: { uniqueId, animation, style, column } } = this.props
    return (
      	<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
        	<div className={`qubely-block-gallery qubely-gallery-item-${style}`}>
				<div className={`qubely-gallery-items ${'qubely-column-grid qubely-column-grid-md' + column.md + ' ' + 'qubely-column-grid-sm' + column.sm + ' ' + 'qubely-column-grid-xs' + column.xs}`}>
					{this.renderPricelist()}
				</div >
        	</div >
    	</div>
    )}
}

export default Save