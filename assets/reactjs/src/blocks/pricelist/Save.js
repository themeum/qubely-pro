const { Component } = wp.element
const { RichText } = wp.editor
const { HelperFunction: { animationAttr } } = wp.qubelyComponents
class Save extends Component {

  renderPricelist = () => {
	const { attributes: { pricelistContents, enableLine, headingLevel, enableImage, contentAlign, enableBadge, enableDiscount, enablePrice, enableDescription, priceAfterTitle } } = this.props

	const titleTagName = 'h' + headingLevel;

    return (pricelistContents.map(({ title, description, image, badge, discount, price }, index) => {
      	return (
			<div key={index} className={`qubely-pricelist-item qubely-pricelist-item-${contentAlign}`}>
				<div className={`qubely-pricelist-content`}>
                
                    {(enableImage == 1 && (image != undefined && image.url != undefined)) &&
						<div className={`qubely-pricelist-image-container`}>
							<img src={image.url} alt={title}/>
                            {enableBadge &&
                                <RichText.Content tagName='div' className="qubely-pricelist-badge" value={badge} />
                            }
						</div>
					}
					<div className="qubely-pricelist-description-wrapper">
                        <div className="qubely-pricelist-description">
                            <div className="qubely-pricelist-title-wrapper">
                                <RichText.Content tagName={titleTagName} className="qubely-pricelist-title" value={title} />
                                {enableLine && (priceAfterTitle==0) &&
                                <span className="qubely-pricelist-line"></span>
                                }
                                <div className="qubely-pricelist-price-wrapper">
                                    {enableDiscount &&
                                        <RichText.Content tagName='div' className="qubely-pricelist-discount" value={discount} />
                                    }
                                    {enablePrice &&
                                        <RichText.Content tagName='div' className="qubely-pricelist-price" value={price} />
                                    }
                                </div>
                            </div>
                            { enableDescription && 
                                <RichText.Content tagName='div' className="qubely-pricelist-introtext" value={description} />
                            }
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