import "./style.scss";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("qubely/countdown", {
	title: __("Countdown"),
	description: __("Create under construction banners, announce release and more with the countdown block."),
	category: "qubely",
	icon: <img src={qubely_pro_admin.plugin + "assets/img/blocks/block-countdown.svg"} alt={__("Countdown Block")} />,
	supports: {
		align: ["center", "wide", "full"],
	},
	keywords: [__("countdown"), __("count"), __("timer")],
	example: {
		attributes: {},
	},
	attributes,
	edit: Edit,
	save: Save,
});
