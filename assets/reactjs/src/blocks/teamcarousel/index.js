const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const {
	HelperFunction: { animationAttr },
} = wp.qubelyComponents;
import "./style.scss";
import Edit from "./Edit";
import Save from "./Save";
import attributes from "./attributes";

registerBlockType("qubely/teamcarousel", {
	title: __("Team Carousel"),
	description: __("Design and showcase Qubely Team Carousel block"),
	icon: (
		<img
			src={qubely_pro_admin.plugin + "assets/img/blocks/block-team-carousel.svg"}
			alt={__("Team Carousel Block")}
		/>
	),
	category: "qubely",
	keywords: [__("Team"), __("Carousel")],
	supports: {
		align: ["center", "wide", "full"],
	},
	example: {
		attributes: {},
	},
	attributes: attributes,
	edit: Edit,
	save: Save,
	deprecated: [
		{
			attributes,
			save(props) {
				/* Author Avatar */
				const renderAvatar = (avatar, avatarAlt) => {
					return (
						<div className="qubely-single-img">
							{avatar.url != undefined ? (
								<img className="qubely-team-avatar" src={avatar.url} alt={avatarAlt} />
							) : (
								<div className="qubely-image-placeholder qubely-team-avatar">
									<i className="far fa-user" />
								</div>
							)}
						</div>
					);
				};

				/* Team Social Share. */
				const renderSocialShare = () => {
					const {
						attributes: {
							showSociallinks,
							iconStyle,
							iconUseDefaultStyle,
							facebook,
							twitter,
							instagram,
							linkedin,
							youtube,
							github,
							flickr,
							pinterest,
							dribbble,
							behance,
						},
					} = props;
					return (
						<div className="qubely-team-social-share">
							{showSociallinks &&
								(facebook ||
									twitter ||
									instagram ||
									linkedin ||
									youtube ||
									github ||
									flickr ||
									pinterest ||
									dribbble ||
									behance) && (
									<div
										className={`qubely-team-social-links qubely-team-icon-layout-${iconStyle} qubely-team-icon-style-${
											iconUseDefaultStyle == 1 ? "default" : "custom"
										}`}
										onClick={() => handlePanelOpenings("Social")}
									>
										{facebook && (
											<a className="qubely-team-social-facebook">
												<i className="fab fa-facebook-f" />
											</a>
										)}
										{twitter && (
											<a className="qubely-team-social-twitter">
												<i className="fab fa-twitter" />
											</a>
										)}
										{instagram && (
											<a className="qubely-team-social-instagram">
												<i className="fab fa-instagram" />
											</a>
										)}
										{linkedin && (
											<a className="qubely-team-social-linkedin">
												<i className="fab fa-linkedin" />
											</a>
										)}
										{youtube && (
											<a className="qubely-team-social-youtube">
												<i className="fab fa-youtube" />
											</a>
										)}
										{github && (
											<a className="qubely-team-social-github">
												<i className="fab fa-github" />
											</a>
										)}
										{flickr && (
											<a className="qubely-team-social-flickr">
												<i className="fab fa-flickr" />
											</a>
										)}
										{pinterest && (
											<a className="qubely-team-social-pinterest">
												<i className="fab fa-pinterest" />
											</a>
										)}
										{dribbble && (
											<a className="qubely-team-social-dribbble">
												<i className="fab fa-dribbble" />
											</a>
										)}
										{behance && (
											<a className="qubely-team-social-behance">
												<i className="fab fa-behance" />
											</a>
										)}
									</div>
								)}
						</div>
					);
				};

				/* Author information. */
				const renderAuthorInfo = (item, index) => {
					const {
						attributes: { layout, showAvatar, enablename, enableDesignation },
					} = props;
					const { author, designation, avatar } = item;
					return (
						<div className={`qubely-team-author`}>
							{showAvatar && renderAvatar(avatar, index) /* Author avater callback function */}
							<div className="qubely-team-author-info">
								<div className={`qubely-team-info-layout-${layout}`}>
									{enablename && (
										<div className="qubely-team-author-name">
											<RichText.Content value={author} />
										</div>
									)}
									{enableDesignation && (
										<div className="qubely-team-author-designation">
											<RichText.Content value={designation} />
										</div>
									)}
									{renderSocialShare() /* Social share callback function */}
								</div>
							</div>
						</div>
					);
				};
				
				/* Render Team informations. */
				const renderTeam = () => {
					const {
						attributes: { carouselItems, layout },
					} = props;
					return carouselItems.map((item, index) => {
						return (
							<div key={index} className={`qubely-carousel-item`}>
								<div className={`qubely-team-carousel-item`}>
									<div className={`qubely-team-${layout}`}>{renderAuthorInfo(item)}</div>
								</div>
							</div>
						);
					});
				}

				const {
					attributes: {
						uniqueId,
						items,
						sliderMargin,
						autoPlay,
						arrowStyle,
						infiniteLoop,
						activeFade,
						isCentered,
						dragable,
						nav,
						dots,
						dotIndicator,
						interval,
						speed,
						animation,
					},
				} = props;

				let options = JSON.stringify({
					autoplay: autoPlay,
					items: items,
					margin: sliderMargin,
					center: isCentered,
					dots: dots,
					dot_indicator: dotIndicator,
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
							items: items.md,
						},
						{
							viewport: 980,
							items: items.sm,
						},
						{
							viewport: 580,
							items: items.xs,
						},
					],
				});

				return (
					<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
						<div className={`qubely-block-team-carousel qubely-layout-style`}>
							<div
								className={`qubely-carousel qubely-carousel-wrapper${
									isCentered && activeFade ? " is-faded" : ""
								}`}
								data-options={options}
							>
								{renderTeam()}
							</div>
						</div>
					</div>
				);
			}
		}
	]
});
