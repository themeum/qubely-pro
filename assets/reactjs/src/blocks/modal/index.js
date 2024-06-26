import "./style.scss";
import Edit from "./Edit";
import Save from "./Save";
import attributes from "./attributes";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("qubely/modal", {
	title: __("Modal"),
	description: __("Create stylish modals with Qubely Modals."),
	category: "qubely",
	icon: <img src={qubely_pro_admin.plugin + "assets/img/blocks/block-modal.svg"} alt={__("Modal Block")} />,
	// supports: {
	// 	align: ["full", "wide", "center"],
	// },
	keywords: [__("modal"), __("popup")],
	example: {
		attributes: {},
	},
	attributes,
	edit: Edit,
	save: Save,
});
