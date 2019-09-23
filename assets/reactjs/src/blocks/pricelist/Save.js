const { Component } = wp.element
const { RichText } = wp.editor
const { HelperFunction: { animationAttr } } = wp.qubelyComponents
class Save extends Component {

  renderPricelist = () => {
	const { attributes: { pricelistContents, enableContentBorder, headingLevel, enableImage } } = this.props

	const titleTagName = 'h' + headingLevel;

    return (pricelistContents.map(({ title, description, image }, index) => {
      	return (
			<div key={index} className={`qubely-pricelist-item`}>
				<div className={`qubely-pricelist-content`}>
					{(enableImage == 1 && (image != undefined && image.url != undefined)) &&
						<div className={`qubely-pricelist-image-container`}>
							<img src={image.url} alt={title}/>
						</div>
					}
					<div className="qubely-pricelist-description-wrapper">
						<RichText.Content tagName={titleTagName} className="qubely-pricelist-title" value={title} />
						<RichText.Content tagName='div' className="qubely-pricelist-description-wrapper" value={description} />
					</div>
				</div>
			</div>
    	)
    }))
  }

  render() {
    const { attributes: { uniqueId, animation } } = this.props
    return (
      	<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
        	<div className={`qubely-block-pricelist`}>
				<div className={`qubely-pricelist-items`}>
					{this.renderPricelist()}
				</div >
        	</div >
    	</div>
    )}
}

export default Save