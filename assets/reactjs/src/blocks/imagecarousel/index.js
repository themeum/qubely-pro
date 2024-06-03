import Edit from "./Edit";
import Save from "./Save";
import attributes from "./attributes";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { RichText } = wp.blockEditor;
const {
	HelperFunction: { animationAttr },
} = wp.qubelyComponents;

registerBlockType("qubely/imagecarousel", {
	title: __("Image Carousel"),
	description: __("Insert images and beautify them with Qubely Image Carousel Block"),
	icon: (
		<img
			src={qubely_pro_admin.plugin + "assets/img/blocks/block-testimonial-carousel.svg"}
			alt={__("Image Carousel Block")}
		/>
	),
	category: "qubely",
	keywords: [__("Image"), __("Carousel")],
	supports: {
		align: ["center", "wide", "full"],
	},
	example: {
		attributes: {
			carouselItems: [
				{
					sliderimage: {
						url: "",
					},
				},
				{
					sliderimage: {
						url: "",
					},
				},
				{
					sliderimage: {
						url: "",
					},
				},
			],
		},
	},
	attributes,

	edit: Edit,
	save: Save,
	deprecated: [
		{
			attributes,
			save(props) {
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
				} = props;
				
				const renderSlider = (sliderimage, sliderimageAlt) => {
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

				const renderSliderInfo = (item, index) => {
					const {
						attributes: { layout, sliderContent, activeDescription },
					} = props;
					const { slidertitle, subtitle, sliderimage, description } = item;

					return (
						<div className={`qubely-image-slider`}>
							{renderSlider(sliderimage, index)}
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

				const renderImage = () => {
					const {
						attributes: { carouselItems, layout, contentVerticalAlign },
					} = props;
					return carouselItems.map((item, index) => {
						return (
							<div key={index} className={`qubely-carousel-item qubely-carousel-item`}>
								<div className={`qubely-image-item qubely-image-layout-${layout} align-${contentVerticalAlign}`}>
									{renderSliderInfo(item)}
								</div>
							</div>
						);
					});
				}

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
								className={`qubely-carousel qubely-carousel-wrapper${isCentered && activeFade ? " is-faded" : " "
									}`}
								data-options={options}
								id="qubelyCarousel1"
							>
								{renderImage()}
							</div>
						</div>
					</div>
				);

			}
		},
		{
			attributes,
			save(props) {
				const {
					attributes: {
						uniqueId,
						layout,
						items,
						itemthree,
						itemfive,
						sliderMargin,
						autoPlay,
						speed,
						interval,
						animation,
						dragable,
						isCentered,
						notCentered,
						centerPadding,
						nav,
						arrowStyle,
						infiniteLoop,
						activeFade,
						dots,
						dotIndicator,
						carouselItems,
						contentVerticalAlign,
						sliderContent,
						activeDescription,
					},
				} = props;

				const renderSlider = (sliderimage, sliderimageAlt) => {
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

				const renderSliderInfo = (item, index) => {
					const { slidertitle, subtitle, sliderimage, description } = item;

					return (
						<div className={`qubely-image-slider`}>
							{renderSlider(sliderimage, index)}
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

				const renderImage = () => {
					return carouselItems.map((item, index) => {
						return (
							<div key={index} className={`qubely-carousel-item qubely-carousel-item`}>
								<div
									className={`qubely-image-item qubely-image-layout-${layout} align-${contentVerticalAlign}`}
								>
									{renderSliderInfo(item)}
								</div>
							</div>
						);
					});
				};

				let options = JSON.stringify({
					autoplay: autoPlay,
					items: layout != 2 ? (layout == 5 ? itemfive.md : items.md) : itemthree.md,
					margin: sliderMargin,
					center: layout === 3 || layout === 4 ? true : false,
					dots: dots,
					dot_indicator: dotIndicator,
					centerPadding: layout === 3 || layout === 4 ? centerPadding : 0,
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
						},
						{
							viewport: 980,
							items: layout != 2 ? (layout == 5 ? itemfive.sm : items.sm) : itemthree.sm,
						},
						{
							viewport: 580,
							items: layout != 2 ? (layout == 5 ? itemfive.xs : items.xs) : itemthree.xs,
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
								data-options={options}
								id="qubelyCarousel1"
							>
								{renderImage()}
							</div>
						</div>
					</div>
				);
			},
		},
	],
});
