/* eslint-disable react/react-in-jsx-scope */
import "./style.scss";
import Edit from "./Edit";
import Save from "./Save";
import attributes from "./attributes";
import DepricatedSave from "./deprecated";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("qubely/table", {
	title: __("Table Builder"),
	description: __("Organize/focus data with Qubely table Builder."),
	category: "qubely",
	icon: <img src={qubely_pro_admin.plugin + "assets/img/blocks/block-table.svg"} alt={__("Table Builder")} />,
	supports: {
		align: ["center", "wide", "full"],
	},
	keywords: [__("Table"), __("Builder"), __("table builder")],
	example: {
		attributes: {},
	},
	attributes,
	edit: Edit,
	save: Save,
	deprecated: [
		{
			attributes,
			save(props) {
				return <DepricatedSave blockProps={props} />;
			},
		},
	],
});
