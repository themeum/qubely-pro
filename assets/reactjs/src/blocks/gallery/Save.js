const { Component } = wp.element
const { RichText } = wp.editor
const { HelperFunction: { animationAttr } } = wp.qubelyComponents
class Save extends Component {

  renderPricelist = () => {
	const { attributes: { galleryContents } } = this.props

    return (galleryContents.map(({ title, image }, index) => {
      	return (
			<div key={index} className={`qubely-pricelist-item`}>
				<div className={`qubely-pricelist-content`}>
                
                    {(image != undefined && image.url != undefined) &&
						<div className={`qubely-pricelist-image-container`}>
							<img src={image.url} alt={title}/>
						</div>
					}
					<div className="qubely-pricelist-description-wrapper">
                        <div className="qubely-pricelist-description">
                            <div className="qubely-pricelist-title-wrapper">
                                <RichText.Content tagName='div' className="qubely-pricelist-title" value={title} />
                            </div>
                        </div>
					</div>
				</div>
			</div>
    	)
    }))
  }

  render() {
    const { attributes: { uniqueId, animation, style } } = this.props
    return (
      	<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
        	<div className={`qubely-block-pricelist qubely-pricelist-item-${style}`}>
				<div className={`qubely-pricelist-items`}>
					{this.renderPricelist()}
				</div >
        	</div >
    	</div>
    )}
}

export default Save