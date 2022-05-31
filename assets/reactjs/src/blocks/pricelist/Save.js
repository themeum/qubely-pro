const { Component } = wp.element;
const { RichText } = wp.blockEditor;
const {
	HelperFunction: { animationAttr, IsInteraction },
} = wp.qubelyComponents;
class Save extends Component {
	renderPricelist = () => {
		const {
			attributes: {
				pricelistContents,
				enableLine,
				headingLevel,
				enableMedia,
				mediaType,
				contentAlign,
				enableBadge,
				enableDiscount,
				enablePrice,
				enableDescription,
				priceAfterTitle,
			},
		} = this.props;

		const titleTagName = "h" + headingLevel;

		return pricelistContents.map(({ title, description, image, badge, discount, digitText, price }, index) => {
			return (
				<div key={index} className={`qubely-pricelist-item qubely-pricelist-item-${contentAlign}`}>
					<div className={`qubely-pricelist-content`}>
						{enableMedia == 1 && mediaType == "image" && image != undefined && image.url != undefined && (
							<div className={`qubely-pricelist-image-container`}>
								<img src={image.url} alt={title} />
								{enableBadge && badge && (
									<RichText.Content tagName="div" className="qubely-pricelist-badge" value={badge} />
								)}
							</div>
						)}
						{enableMedia == 1 && mediaType == "digit" && digitText && (
							<div className="qubely-pricelist-media-digit">
								<div className="qubely-pricelist-digit">
									<RichText.Content
										tagName="div"
										className="qubely-pricelist-discount"
										value={digitText}
									/>
								</div>
							</div>
						)}
						<div className="qubely-pricelist-description-wrapper">
							<div className="qubely-pricelist-description">
								<div className="qubely-pricelist-title-wrapper">
									<RichText.Content
										tagName={titleTagName}
										className="qubely-pricelist-title"
										value={title}
									/>
									{enableLine && priceAfterTitle == 0 && <span className="qubely-pricelist-line" />}
									<div className="qubely-pricelist-price-wrapper">
										{enableDiscount && discount && (
											<RichText.Content
												tagName="div"
												className="qubely-pricelist-discount"
												value={discount}
											/>
										)}
										{enablePrice && price && (
											<RichText.Content
												tagName="div"
												className="qubely-pricelist-price"
												value={price}
											/>
										)}
									</div>
								</div>
								{enableDescription && description && (
									<RichText.Content
										tagName="div"
										className="qubely-pricelist-introtext"
										value={description}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			);
		});
	};

	render() {
		const {
			attributes: { uniqueId, animation, style, interaction },
		} = this.props;
		const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";
		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
				<div className={`qubely-block-pricelist ${interactionClass} qubely-pricelist-item-${style}`}>
					<div className={`qubely-pricelist-items`}>{this.renderPricelist()}</div>
				</div>
			</div>
		);
	}
}

export default Save;
