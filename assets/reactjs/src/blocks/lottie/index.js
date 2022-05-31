const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	gloalSettings: { globalAttributes },
} = wp.qubelyComponents;
import Edit from "./Edit";
import Save from "./Save";

registerBlockType("qubely/lottie", {
	title: __("Lottie"),
	category: "qubely",
	description: __("Display lightweight Lottie animations with advanced customization features."),
	icon: <img src={qubely_pro_admin.plugin + "assets/img/blocks/block-lottie.svg"} alt={__("Lottie")} />,
	keywords: [__("Lottie"), __("Animation")],
	supports: {
		align: ["center", "wide", "full"],
	},

	attributes: {
		uniqueId: { type: "string", default: "" },
		spacer: {
			type: "object",
			default: {
				spaceTop: {
					md: "10",
					unit: "px",
				},
				spaceBottom: {
					md: "10",
					unit: "px",
				},
			},
			style: [{ selector: "{{QUBELY}}" }],
		},

		lottieSource: {
			type: "string",
			default: "external",
		},

		lottieFileSelf: {
			type: "string",
			default: "",
		},

		lottieFileExternal: {
			type: "string",
			default: "https://assets9.lottiefiles.com/packages/lf20_e4wr20hj.json",
		},

		maxWidth: {
			type: "object",
			default: {
				md: "400",
				unit: "px",
			},
			style: [
				{
					selector: "{{QUBELY}} .qubely-lottie-player {max-width: {{maxWidth}};}",
				},
			],
		},

		mode: {
			type: "string",
			default: "viewport",
		},

		autoPlay: {
			type: "boolean",
			default: true,
		},

		loop: {
			type: "boolean",
			default: false,
		},

		hover_out: {
			type: "string",
			default: "default",
		},

		speed: {
			type: "number",
			default: "1",
		},

		viewport_top: {
			type: "float",
			default: "0",
		},

		viewport_bottom: {
			type: "float",
			default: "1",
		},

		frame_start: {
			type: "number",
			default: "0",
		},

		frame_end: {
			type: "number",
			default: "100",
		},

		direction: {
			type: "string",
			default: "forward",
		},
		showGlobalSettings: { type: "boolean", default: true }, // Global Settings
		showContextMenu: { type: "boolean", default: true },
		...globalAttributes,
	},
	edit: Edit,
	save: Save,
});
