const {
	gloalSettings: { globalAttributes },
} = wp.qubelyComponents;

const attributes = {
	uniqueId: {
		type: "string",
		default: "",
	},
	// Global
	...globalAttributes,
	modalLinkText: {
		type: "string",
		default: "See More"
	},
	buttonFillType: { type: "string", default: "fill" },
	buttonAlignment: {
		type: "object",
		default: { md: "center" },
		style: [{ selector: "{{QUBELY}} .qubely-block-modal-link-wrap {text-align: {{buttonAlignment}};}" }],
	},
	buttonSize: { type: "string", default: "large" },
	buttonPadding: {
		type: "object",
		default: {
			openPadding: 1,
			paddingType: "global",
			global: { md: 18 },
			unit: "px",
		},
		style: [
			{
				condition: [{ key: "buttonSize", relation: "==", value: "custom" }],
				selector: "{{QUBELY}} .qubely-block-modal-link",
			},
		],
	},
	buttonColor: {
		type: "string",
		default: "#fff",
		style: [
			{
				condition: [{ key: "buttonFillType", relation: "==", value: "fill" }],
				selector: "{{QUBELY}} .qubely-block-modal-link { color:{{buttonColor}}; }",
			},
		],
	},
	buttonColor2: {
		type: "string",
		default: "var(--qubely-color-1)",
		style: [
			{
				condition: [{ key: "buttonFillType", relation: "!=", value: "fill" }],
				selector: "{{QUBELY}} .qubely-block-modal-link { color:{{buttonColor2}}; }",
			},
		],
	},
	buttonHoverColor: {
		type: "string",
		default: "#fff",
		style: [
			{
				condition: [{ key: "buttonFillType", relation: "==", value: "fill" }],
				selector: "{{QUBELY}} .qubely-block-modal-link:hover { color:{{buttonHoverColor}}; }",
			},
		],
	},
	buttonHoverColor2: {
		type: "string",
		default: "var(--qubely-color-2)",
		style: [
			{
				condition: [{ key: "buttonFillType", relation: "!=", value: "fill" }],
				selector: "{{QUBELY}} .qubely-block-modal-link:hover { color:{{buttonHoverColor2}}; }",
			},
		],
	},
	buttonBgColor: {
		type: "object",
		default: {
			type: "color",
			openColor: 1,
			color: "var(--qubely-color-1)",
			gradient: {
				color1: "var(--qubely-color-2)",
				color2: "var(--qubely-color-1)",
				direction: 0,
				start: 0,
				stop: 100,
				type: "linear",
			},
		},
		style: [
			{
				condition: [{ key: "buttonFillType", relation: "==", value: "fill" }],
				selector: "{{QUBELY}} .qubely-block-modal-link",
			},
		],
	},
	buttonBgHoverColor: {
		type: "object",
		default: {
			type: "color",
			openColor: 1,
			color: "var(--qubely-color-2)",
			gradient: {
				color1: "#16d03e",
				color2: "#1f91f3",
				direction: 0,
				start: 0,
				stop: 100,
				type: "linear",
			},
		},
		style: [{ selector: "{{QUBELY}} .qubely-block-modal-link:before" }],
	},
	buttonBorder: {
		type: "object",
		default: {
			openBorder: 1,
			widthType: "global",
			global: { md: "1" },
			type: "solid",
			color: "var(--qubely-color-1)",
		},
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-link",
			},
		],
	},
	borderHoverColor: {
		type: "string",
		default: "var(--qubely-color-2)",
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-link:hover {border-color: {{borderHoverColor}};}",
			},
		],
	},
	buttonBorderRadius: {
		type: "object",
		default: {
			openBorderRadius: 1,
			radiusType: "global",
			global: { md: 4 },
			unit: "px",
		},
		style: [{ selector: "{{QUBELY}} .qubely-block-modal-link" }],
	},
	buttonShadow: {
		type: "object",
		default: {},
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-link",
			},
		],
	},
	buttonHoverShadow: {
		type: "object",
		default: {},
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-link:hover",
			},
		],
	},
	overlayColor: {
		type: "string",
		default: "#0000007d",
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-popup { background-color:{{overlayColor}}; }",
			},
			{
				selector: "{{QUBELY}} .qubely-modal-popup { background-color:{{overlayColor}}; }",
			},
		],
	},
	horizonalAlign: {
		type: "string",
		default: "center",
		style: [
			{
				condition: [{ key: "horizonalAlign", relation: "==", value: "Left" }],
				selector: "{{QUBELY}} .qubely-block-modal-popup { padding-left:20px; }",
			},
			{
				condition: [{ key: "horizonalAlign", relation: "==", value: "Right" }],
				selector: "{{QUBELY}} .qubely-block-modal-popup { padding-right:20px; }",
			},
			{
				condition: [{ key: "horizonalAlign", relation: "==", value: "Center" }],
				selector: "{{QUBELY}} .qubely-modal-popup { justify-content:center; }",
			},
			{
				condition: [{ key: "horizonalAlign", relation: "==", value: "Left" }],
				selector: "{{QUBELY}} .qubely-modal-popup { justify-content:left; }",
			},
			{
				condition: [{ key: "horizonalAlign", relation: "==", value: "Right" }],
				selector: "{{QUBELY}} .qubely-modal-popup { justify-content:right; }",
			},
		],
	},
	verticalAlign: {
		type: "string",
		default: "center",
		style: [
			{
				condition: [{ key: "verticalAlign", relation: "==", value: "Top" }],
				selector: "{{QUBELY}} .qubely-block-modal-popup { padding-top:20px; }",
			},
			{
				condition: [{ key: "verticalAlign", relation: "==", value: "Bottom" }],
				selector: "{{QUBELY}} .qubely-block-modal-popup { padding-bottom:20px; }",
			},
			{
				condition: [{ key: "verticalAlign", relation: "==", value: "Center" }],
				selector: "{{QUBELY}} .qubely-modal-popup { align-items:center; }",
			},
			{
				condition: [{ key: "verticalAlign", relation: "==", value: "Top" }],
				selector: "{{QUBELY}} .qubely-modal-popup { align-items:start; }",
			},
			{
				condition: [{ key: "verticalAlign", relation: "==", value: "Bottom" }],
				selector: "{{QUBELY}} .qubely-modal-popup { align-items:end; }",
			},
		],
	},
	modalBoxHeight: {
		type: "string",
		default: "Fit to Content",
		style: [
			{
				condition: [{ key: "modalBoxHeight", relation: "==", value: "Fit to Content" }],
				selector: "{{QUBELY}} .qubely-modal-box { height:auto; }",
			},
			{
				condition: [{ key: "modalBoxHeight", relation: "==", value: "Fit to Content" }],
				selector: "{{QUBELY}} .qubely-block-modal-box { height:auto; }",
			},
			{
				condition: [{ key: "modalBoxHeight", relation: "==", value: "Full Screen Height" }],
				selector: "{{QUBELY}} .qubely-modal-box { height:100%; }",
			},
			{
				condition: [{ key: "modalBoxHeight", relation: "==", value: "Full Screen Height" }],
				selector: "{{QUBELY}} .qubely-block-modal-box { height:100%; }",
			},
		]
	},
	modalBoxFixedHeight: {
		type: "object",
		default: { md: 200, unit: "px" },
		style: [
			{
				condition: [{ key: "modalBoxHeight", relation: "==", value: "Fixed Minimum Height" }],
				selector: "{{QUBELY}} .qubely-modal-box { min-height:{{modalBoxFixedHeight}}; }",
			},
			{
				condition: [{ key: "modalBoxHeight", relation: "==", value: "Fixed Minimum Height" }],
				selector: "{{QUBELY}} .qubely-block-modal-box { min-height:{{modalBoxFixedHeight}}; }",
			},
		]
	},
	modalBoxWidth: {
		type: "object",
		default: 100,
		style: [
			{
				selector: "{{QUBELY}} .qubely-modal-box { width:{{modalBoxWidth}}%; }",
			},
			{
				selector: "{{QUBELY}} .qubely-block-modal-box { width:{{modalBoxWidth}}%; }",
			},
		]
	},
	modalBoxMaxWidth: {
		type: "object",
		default: { md: 600, unit: "px" },
		style: [
			{
				selector: "{{QUBELY}} .qubely-modal-box { max-width:{{modalBoxMaxWidth}}; }",
			},
			{
				selector: "{{QUBELY}} .qubely-block-modal-box { max-width:{{modalBoxMaxWidth}}; }",
			},
		]
	},
	boxBgColor: {
		type: "string",
		default: "#fff",
		style: [
			{
				selector: "{{QUBELY}} .qubely-modal-box { background-color:{{boxBgColor}}; }",
			},
			{
				selector: "{{QUBELY}} .qubely-block-modal-box { background-color:{{boxBgColor}}; }",
			},
		],
	},
	boxBorder: {
		type: "object",
		default: {
			openBorder: 0,
			widthType: "global",
			global: { md: "0" },
			type: "solid",
			color: "var(--qubely-color-1)",
		},
		style: [
			{ selector: "{{QUBELY}} .qubely-modal-box" },
			{ selector: "{{QUBELY}} .qubely-block-modal-box" },
		],
	},
	boxBorderRadius: {
		type: "object",
		default: {
			openBorderRadius: 1,
			radiusType: "global",
			global: { md: 4 },
			unit: "px",
		},
		style: [
			{ selector: "{{QUBELY}} .qubely-modal-box" },
			{ selector: "{{QUBELY}} .qubely-block-modal-box" },
		],
	},
	modalBoxShadow: {
		type: "object",
		default: {},
		style: [
			{ selector: "{{QUBELY}} .qubely-modal-box" },
			{ selector: "{{QUBELY}} .qubely-block-modal-box" },
		],
	},
	boxOpenAnimation: {
		type: "string",
		default: "fadeCenter",
	},
	boxCloseAnimation: {
		type: "string",
		default: "fadeCenterOut",
	},
	enableTitle: { type: "boolean", default: 1 },
	modalTitle: {
		type: "string",
		source: "html",
		selector: ".qubely-block-modal-title",
		default: "Advanced Text Block",
	},
	titleAlignment: {
		type: "object",
		default: { md: "left" },
		style: [{ selector: "{{QUBELY}} .qubely-block-modal-title {text-align: {{titleAlignment}}; }" }],
	},
	titleLevel: { type: "number", default: 2 },
	titleTypography: {
		type: "object",
		default: {
			openTypography: 1,
			size: {
				md: 24,
				unit: "px",
			},
		},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-block-modal-title-wrapper .qubely-block-modal-title-inner .qubely-block-modal-title",
			},
		],
	},
	titleColor: {
		type: "string",
		default: "",
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-block-modal-title-wrapper .qubely-block-modal-title-inner .qubely-block-modal-title {color: {{titleColor}};}",
			},
		],
	},
	titleSpacing: {
		type: "object",
		default: { md: 10, unit: "px" },
		style: [{ selector: "{{QUBELY}} .qubely-block-modal-title-inner {margin-bottom: {{titleSpacing}};}" }],
	},
	enableCloseButton: { type: "boolean", default: 1 },
	closeButtonColor: {
		type: "string",
		default: "",
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-close-btn { color:{{closeButtonColor}}; }",
			},
		],
	},
	closeButtonBgColor: {
		type: "string",
		default: "",
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-close-btn { background-color:{{closeButtonBgColor}}; }",
			},
		],
	},
	closeButtonSize: {
		type: "number",
		default: 24,
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-close-btn { font-size:{{closeButtonSize}}px; }",
			},
		],
	},
	closeButtonPadding: {
		type: "number",
		default: 5,
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-close-btn { padding:{{closeButtonPadding}}px; }",
			},
		],
	},
	closeButtonRadius: {
		type: "number",
		default: 0,
		style: [
			{
				selector: "{{QUBELY}} .qubely-block-modal-close-btn { border-radius:{{closeButtonRadius}}px; }",
			},
		],
	},
};

export default attributes;
