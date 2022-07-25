const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;
const {
	HelperFunction: { animationAttr },
} = wp.qubelyComponents;
class Save extends Component {
	renderSlider = (sliderimage, sliderimageAlt) => {
		return (
			<div className="qubely-single-img">
				{sliderimage.url != undefined ? (
					<img className="qubely-image-sliderimage" src={sliderimage.url} alt={sliderimageAlt} />
				) : (
					<div className="qubely-image-placeholder qubely-image-sliderimage">
						<i className="dashicons dashicons-format-image" />
					</div>
				)}
			</div>
		);
	};

	renderSliderInfo = (item, index) => {
		const {
			attributes: { layout, sliderContent, activeDescription },
		} = this.props;
		const { slidertitle, subtitle, sliderimage, description } = item;

		return (
			<div className={`qubely-image-slider`}>
				{this.renderSlider(sliderimage, index)}
				{layout != 1 && (
					<Fragment>
						{(sliderContent || layout === 6) && (
							<div className={`qubely-image-slider-text`}>
								<div className="qubely-image-content">
									<div className="qubely-image-title">
										<RichText.Content value={slidertitle} />
									</div>
									<div className="qubely-image-subtitle">
										<RichText.Content value={subtitle} />
									</div>
									{activeDescription && (
										<div className="qubely-slider-description">
											<RichText.Content value={description} />
										</div>
									)}
								</div>
							</div>
						)}
					</Fragment>
				)}
			</div>
		);
	};

	renderImage() {
		const {
			attributes: { carouselItems, layout, contentVerticalAlign },
		} = this.props;
		return carouselItems.map((item, index) => {
			return (
				<div key={index} className={`qubely-carousel-item qubely-carousel-item`}>
					<div className={`qubely-image-item qubely-image-layout-${layout} align-${contentVerticalAlign}`}>
						{this.renderSliderInfo(item)}
					</div>
				</div>
			);
		});
	}

	render() {
		const {
			attributes: {
				uniqueId,
				layout,
				items,
				itemthree,
				itemfive,
				sliderMargin,
				sliderResponsiveMargin,
				autoPlay,
				speed,
				interval,
				animation,
				dragable,
				isCentered,
				notCentered,
				centerPadding,
				responsiveCenterPadding,
				nav,
				arrowStyle,
				infiniteLoop,
				activeFade,
				dots,
				dotIndicator,
			},
		} = this.props;

		let options = JSON.stringify({
			autoplay: autoPlay,
			items: layout != 2 ? (layout == 5 ? itemfive.md : items.md) : itemthree.md,
			margin: sliderMargin,
			center: layout === 3 || layout === 4 ? true : false,
			dots: dots,
			dot_indicator: dotIndicator,
			centerPadding: layout === 3 || layout === 4 ? centerPadding : 0,
			centerPaddingMode: layout === 3 || layout === 4,
			nav: nav,
			speed: speed,
			interval: interval,
			dragable: dragable,
			infiniteLoop: infiniteLoop,
			activeFade: activeFade,
			arrowStyle: arrowStyle,
			responsive: [
				{
					viewport: 1170,
					items: layout != 2 ? (layout == 5 ? itemfive.md : items.md) : itemthree.md,
					centerPadding:
						typeof responsiveCenterPadding["md"] === "undefined"
							? centerPadding
							: responsiveCenterPadding["md"],
					margin:
						typeof sliderResponsiveMargin["md"] === "undefined"
							? sliderMargin
							: sliderResponsiveMargin["md"],
				},
				{
					viewport: 980,
					items: layout != 2 ? (layout == 5 ? itemfive.sm : items.sm) : itemthree.sm,
					centerPadding:
						typeof responsiveCenterPadding["sm"] === "undefined"
							? centerPadding
							: responsiveCenterPadding["sm"],
					margin:
						typeof sliderResponsiveMargin["sm"] === "undefined"
							? sliderMargin
							: sliderResponsiveMargin["sm"],
				},
				{
					viewport: 580,
					items: layout != 2 ? (layout == 5 ? itemfive.xs : items.xs) : itemthree.xs,
					centerPadding:
						typeof responsiveCenterPadding["xs"] === "undefined" ? 0 : responsiveCenterPadding["xs"],
					margin:
						typeof sliderResponsiveMargin["xs"] === "undefined"
							? sliderMargin
							: sliderResponsiveMargin["xs"],
				},
			],
		});

		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
				<div className={`qubely-block-image-carousel qubely-layout-${layout}`}>
					<div
						className={`qubely-carousel qubely-carousel-wrapper${
							isCentered && activeFade ? " is-faded" : " "
						}`}
						data-options={encodeURIComponent(options)}
						id="qubelyCarousel1"
					>
						{this.renderImage()}
					</div>
				</div>
			</div>
		);
	}
}

export default Save;
