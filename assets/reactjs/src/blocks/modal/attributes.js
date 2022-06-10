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
	modalTitleText: {
		type: "string",
		default: "See More"
	},
	zIndex: {
		type: "string",
		default: "1",
		style: [{ selector: "{{QUBELY}} {z-index:1;}" }],
	},
	showModal: {
		type: "boolean",
		default: true
	},
	// setShowModal: {
	// 	type: "boject"
	// },
	overlayColor: {
		type: "string",
		default: "#000",
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
				selector: "{{QUBELY}} .qubely-modal-popup { align-itemst:center; }",
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
};

export default attributes;
