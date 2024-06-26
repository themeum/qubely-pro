const {
	gloalSettings: { globalAttributes },
} = wp.qubelyComponents;

const attributes = {
	uniqueId: {
		type: "string",
		default: "",
	},
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
	layout: {
		type: "number",
		default: 1,
		style: [],
	},
	// Global
	...globalAttributes,
	date: {
		type: "string",
		default: null,
	},
	startDate: {
		type: "string",
		default: null,
	},
	sourceOfCopiedStyle: {
		type: "boolean",
		default: false,
	},

	justifyAlign: {
		type: "string",
		default: "flex-start",
		style: [
			{
				selector: "{{QUBELY}} .qubely-countdown{justify-content: {{justifyAlign}}}",
			},
		],
	},

	// Container or Circle
	strokeLinecap: {
		type: "string",
		default: "round",
		style: [
			{
				condition: [
					{
						key: "layout",
						relation: "==",
						value: 2,
					},
				],
				selector: "{{QUBELY}} .qubely-countdown-cirlce-forground{stroke-linecap: {{strokeLinecap}}}",
			},
		],
	},
	circleTransition: {
		type: "boolean",
		default: true,
		style: [
			{
				condition: [
					{
						key: "layout",
						relation: "==",
						value: 2,
					},
				],
				selector: "{{QUBELY}} .qubely-countdown-cirlce-forground{transition: stroke-dashoffset 300ms}",
			},
		],
	},
	background: {
		type: "object",
		default: {
			openBg: 1,
			bgType: "color",
			bgDefaultColor: "#f5f5f5",
		},
		style: [
			{
				condition: [
					{
						key: "layout",
						relation: "==",
						value: 1,
					},
				],
				selector: "{{QUBELY}} .qubely-countdown-item",
			},
		],
	},
	fill: {
		type: "object",
		default: {
			openColor: 1,
			type: "gradient",
			color: "#007bff",
			gradient: {
				type: "linear",
				color1: "#25b5e1",
				color2: "#45dbca",
				direction: "47",
				start: "0",
				stop: "100",
			},
		},
		style: [],
	},
	emptyFill: {
		type: "string",
		default: "#e1f2ff",
		style: [],
	},
	padding: {
		type: "object",
		default: {
			openPadding: 1,
			paddingType: "global",
			global: { md: "30" },
			custom: { md: "30 30 30 30" },
			unit: "px",
		},
		style: [
			{
				condition: [
					{
						key: "layout",
						relation: "==",
						value: 1,
					},
				],
				selector: "{{QUBELY}} .qubely-countdown-item",
			},
		],
	},

	minWidth: {
		type: "object",
		default: {
			md: 0,
			unit: "px",
		},
		style: [
			{
				selector: "{{QUBELY}} .qubely-countdown-item{min-width: {{minWidth}};} ",
			},
		],
	},
	spaceBetween: {
		type: "object",
		default: {
			md: 10,
			unit: "px",
		},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-countdown-item-outer{margin-left: {{spaceBetween}}; margin-bottom: {{spaceBetween}}} " +
					"{{QUBELY}} .qubely-countdown{margin-left: -{{spaceBetween}}}" +
					"{{QUBELY}} .qubely-countdown .qubely-countdown-item-outer::after{right: calc(-{{spaceBetween}} / 2) !important}",
			},
		],
	},
	borderRadius: {
		type: "object",
		default: {
			openBorderRadius: 1,
			radiusType: "global",
			global: {
				md: 4,
			},
			unit: "px",
		},
		style: [
			{
				condition: [
					{
						key: "layout",
						relation: "==",
						value: 1,
					},
				],
				selector: "{{QUBELY}} .qubely-countdown-item",
			},
		],
	},
	border: {
		type: "object",
		default: {},
		style: [
			{
				condition: [
					{
						key: "layout",
						relation: "==",
						value: 1,
					},
				],
				selector: "{{QUBELY}} .qubely-countdown-item",
			},
		],
	},
	boxShadow: {
		type: "object",
		default: {
			openShadow: 1,
			horizontal: 1,
			vertical: 1,
			blur: 2,
			color: "rgba(0, 0, 0, .2)",
			spread: 0,
		},
		style: [
			{
				condition: [
					{
						key: "layout",
						relation: "==",
						value: 1,
					},
				],
				selector: "{{QUBELY}} .qubely-countdown-item",
			},
		],
	},

	size: {
		type: "object",
		default: {
			md: 190,
		},
		style: [
			{
				condition: [
					{
						key: "layout",
						relation: "==",
						value: 2,
					},
				],
				selector: "{{QUBELY}} .qubely-countdown-svg-wrap{height: {{size}}px; width: {{size}}px}",
			},
		],
	},

	thickness: {
		type: "object",
		default: {
			md: 10,
		},
		style: [],
	},

	thicknessBg: {
		type: "object",
		default: {
			md: 25,
		},
		style: [],
	},

	//SEPARATOR
	separatorType: {
		type: "string",
		default: "none",
		style: [],
	},

	separatorSize: {
		type: "object",
		default: {
			md: 30,
		},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-countdown.qubely-item-separator-colon .qubely-countdown-item-outer::after{font-size: {{separatorSize}}px}" +
					"{{QUBELY}} .qubely-countdown.qubely-item-separator-line .qubely-countdown-item-outer::after{height: {{separatorSize}}%}",
			},
		],
	},
	separatorSizeX: {
		type: "object",
		default: {
			md: 2,
		},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-countdown.qubely-item-separator-line .qubely-countdown-item-outer::after{width: {{separatorSizeX}}px}",
			},
		],
	},
	separatorOffset: {
		type: "object",
		default: {
			md: 50,
		},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-countdown .qubely-countdown-item-outer::after{top: {{separatorOffset}}% !important}",
			},
		],
	},
	separatorColor: {
		type: "string",
		default: "#000",
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-countdown.qubely-item-separator-colon .qubely-countdown-item-outer::after{color: {{separatorColor}}}" +
					"{{QUBELY}} .qubely-countdown.qubely-item-separator-line .qubely-countdown-item-outer::after{background-color: {{separatorColor}}}",
			},
		],
	},
	//NUMBER
	numberColor: {
		type: "string",
		default: "#000",
		style: [
			{
				selector: "{{QUBELY}} .qubely-countdown-item h5  {color: {{numberColor}};}",
			},
		],
	},
	numberTypo: {
		type: "object",
		default: {
			openTypography: 1,
			size: {
				md: 60,
				unit: "px",
			},
		},
		style: [
			{
				selector: "{{QUBELY}} .qubely-countdown-item h5",
			},
		],
	},

	//LABEL
	enableLabel: {
		type: "boolean",
		default: true,
		style: [],
	},
	labelView: {
		type: "string",
		default: "inside",
		style: [],
	},
	labelPosition: {
		type: "string",
		default: "bottom",
		style: [],
	},
	enableDay: {
		type: "boolean",
		default: true,
		style: [],
	},
	enableHour: {
		type: "boolean",
		default: true,
		style: [],
	},
	enableMinute: {
		type: "boolean",
		default: true,
		style: [],
	},
	enableSecond: {
		type: "boolean",
		default: true,
		style: [],
	},
	dayText: {
		type: "string",
		default: "Days",
	},
	hourText: {
		type: "string",
		default: "Hours",
	},
	minuteText: {
		type: "string",
		default: "Minutes",
	},
	secondText: {
		type: "string",
		default: "Seconds",
	},
	labelSpacing: {
		type: "number",
		default: 10,
		style: [],
	},
	labelColor: {
		type: "string",
		default: "#000",
		style: [
			{
				selector: "{{QUBELY}} .qubely-countdown-item-outer p  {color: {{labelColor}};}",
			},
		],
	},
	labelTypo: {
		type: "object",
		default: {
			openTypography: 0,
			size: {
				unit: "px",
			},
		},
		style: [
			{
				selector: "{{QUBELY}} .qubely-countdown-item-outer p",
			},
		],
	},
	qubelyStyleAttributes: {
		type: "array",
		default: [
			"layout",
			"justifyAlign",
			"strokeLinecap",
			"circleTransition",
			"background",
			"fill",
			"emptyFill",
			"padding",
			"minWidth",
			"spaceBetween",
			"borderRadius",
			"border",
			"boxShadow",
			"size",
			"thickness",
			"thicknessBg",
			"separatorSize",
			"separatorType",
			"separatorSizeX",
			"separatorOffset",
			"separatorColor",
			"numberColor",
			"numberTypo",
			"enableLabel",
			"labelView",
			"labelPosition",
			"enableDay",
			"enableHour",
			"enableMinute",
			"enableSecond",
			"labelSpacing",
			"labelColor",
			"labelTypo",
		],
	},
};

export default attributes;
