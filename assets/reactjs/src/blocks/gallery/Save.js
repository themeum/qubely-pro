const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;
import classnames from "classnames";
const {
	HelperFunction: { animationAttr, IsInteraction },
} = wp.qubelyComponents;
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
				enablePopupIcon,
			},
		} = this.props;

		const contentClassName = classnames("qubely-gallery-image-container", {
			"qubely-gallery-overlay": enableOverlay,
		});
		const captionClassName = classnames("qubely-gallery-caption-wrapper", {
			"qubely-gallery-caption-onHover": showCaption === "onHover",
		});

		return (
			<Fragment>
				{galleryContents.map(({ title, image }, index) => {
					let href;
					switch (linkTo) {
						case "media":
							href = image.fullUrl || image.url;
							break;
						case "attachment":
							href = image.link;
							break;
					}
					const renderContent = (
						<div className={contentClassName}>
							<div className={`qubely-gallery-content-image qubely-gallery-image-${imageAnimation}`}>
								{enablePopup && (
									<div className={"qubely-gallery-pupup-icon"}>
										{enablePopupIcon && <i class="fas fa-plus"></i>}
									</div>
								)}
								<img src={image.url} alt={image.alt} />
							</div>
							{enableCaption == 1 && (
								<div className={captionClassName}>
									<RichText.Content tagName="div" value={title} className="qubely-gallery-caption" />
								</div>
							)}
						</div>
					);

					return (
						<div key={index} className={`qubely-gallery-item`}>
							<div className={`qubely-gallery-content  ${enablePopup ? "qubely-gallery-pupup" : ""}`}>
								{!enablePopup && typeof href !== "undefined" ? (
									<a href={href}>{renderContent}</a>
								) : (
									renderContent
								)}
							</div>
						</div>
					);
				})}
			</Fragment>
		);
	};

	render() {
		const {
			attributes: { uniqueId, animation, style, column, interaction },
		} = this.props;

		const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";

		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
				<div className={`qubely-block-gallery ${interactionClass} qubely-gallery-item-${style}`}>
					<div
						className={`qubely-gallery-items ${
							"qubely-column-grid qubely-column-grid-md" +
							column.md +
							" " +
							"qubely-column-grid-sm" +
							column.sm +
							" " +
							"qubely-column-grid-xs" +
							column.xs
						}`}
					>
						{this.renderGallery()}
					</div>
				</div>
			</div>
		);
	}
}

export default Save;
