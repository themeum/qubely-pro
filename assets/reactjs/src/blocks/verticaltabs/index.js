import "./style.scss";
import Save from "./Save";
import Edit from "./Edit";
import attributes from "./attributes";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText } = wp.blockEditor;
const {
	HelperFunction: { animationAttr, IsInteraction },
} = wp.qubelyComponents;

const supports = {
	html: false,
	className: false,
	align: ["center", "wide", "full"],
};

registerBlockType("qubely/verticaltabs", {
	title: __("Vertical Tabs"),
	category: "qubely",
	icon: (
		<img
			src={qubely_pro_admin.plugin + "assets/img/blocks/block-verticaltabs.svg"}
			alt={__("Vertical Tabs Block")}
		/>
	),
	description: __("Showcase features in beautiful pre-designed tabs with Qubely Tabs."),
	supports: supports,
	example: {
		attributes: {
			tabTitles: [{ title: "Tab 1" }, { title: "Tab 2" }, { title: "Tab 3" }],
		},
		innerBlocks: [
			{
				name: "qubely/tab",
				innerBlocks: [
					{
						name: "qubely/heading",
						attributes: {
							content: "Qubely - A Full-fledged Gutenberg Builder",
							alignment: { md: "center" },
						},
					},
				],
			},
		],
	},
	attributes: attributes,
	edit: Edit,
	save: Save,
	deprecated: [
		{
			attributes,
			supports,
			save(props) {

				const renderTabTitles = () => {
					const {
						tabTitles,
						iconPosition,
						navText,
						navLayout,
						navSubHeading,
						iconType,
						enableIcon,
						navTextAlignment
					} = props.attributes;
					
					return tabTitles.map((title, index) => {
						const buttonClass = `qubely-vertical-tab-item-button ${
							enableIcon ? "qubely-has-icon-" + iconPosition : ""
						}`;
						const hasIcon =
							title.iconName !== 0 && title.iconName !== undefined && title.iconName.toString().trim() !== "";
						const IconImage = () => {
							return (
								<div
									className={
										"qubely-icon-image qubely-vertical-tab-icon " +
										(title.image !== undefined && title.image.url ? "" : "qubely-vertical-placeholder")
									}
								>
									{title.image !== undefined && title.image.url ? (
										<img
											className="qubely-vertical-tab-image"
											src={title.image.url}
											alt={title.imageAlt && title.imageAlt}
											srcSet={
												title.image2x !== undefined && title.image2x.url
													? title.image.url + " 1x, " + title.image2x.url + " 2x"
													: ""
											}
										/>
									) : (
										<span className="far fa-image" />
									)}
								</div>
							);
						};
						const IconFont = () => (hasIcon ? <span className={`qubely-vertical-tab-icon ${title.iconName}`} /> : "");
						const Icon = () => (enableIcon ? iconType === 1 ? <IconFont /> : <IconImage /> : "");
						return (
							<div class={`qubely-vertical-tab-item ${index === 0 ? "qubely-vertical-active" : ""}`}>
								<div className={buttonClass}>
									{navLayout === 2 && iconPosition === "left" && <Icon />}
									<div
										className={`qubely-vertical-tab-item-content ${
											navTextAlignment === "right" ? "qubely-text-right" : ""
										}`}
									>
										<h5 className="qubely-vertical-tab-title">
											{navLayout === 1 && iconPosition === "left" && <Icon />}
			
											<RichText.Content tagName="div" value={title.title} />
											{navLayout === 1 && iconPosition === "right" && <Icon />}
										</h5>
										{navSubHeading && (
											<RichText.Content
												tagName="h6"
												className="qubely-vertical-tab-nav-sub-heading"
												value={title.navSubHeading}
											/>
										)}
										{navText && (
											<RichText.Content
												tagName="p"
												className="qubely-vertical-tab-nav-text"
												value={title.navText}
												style={index !== 0 ? { display: "none" } : {}}
											/>
										)}
									</div>
									{navLayout === 2 && iconPosition === "right" && <Icon />}
								</div>
							</div>
						);
					});
				};

				const { uniqueId, tabs, tabStyle, navAlignment, animation, interaction, enableArrow } = props.attributes;
				const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";
				let iterator = [],
					index = 0;
				while (index < tabs) {
					iterator.push(index);
					index++;
				}
				return (
					<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
						<div
							className={`qubely-block-vertical-tab ${interactionClass} qubely-vertical-tab-style-${tabStyle} qubely-alignment-${navAlignment} ${
								enableArrow === true ? "qubely-block-has-arrow" : ""
							}`}
						>
							<div className={`qubely-vertical-tab-nav`}>{renderTabTitles(iterator)}</div>
							<div className={`qubely-vertical-tab-body`}>
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				);
			}
		}
	]
});
