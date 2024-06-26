const {
	gloalSettings: { globalAttributes },
} = wp.qubelyComponents;

const attributes = {
	uniqueId: { type: "string", default: "" },
	layout: { type: "number", default: 1 },
	items: {
		type: "object",
		default: { md: "1", sm: "1", xs: "1" },
	},
	itemthree: {
		type: "object",
		default: { md: "3", sm: "3", xs: "1" },
	},
	itemfive: {
		type: "object",
		default: { md: "4", sm: "3", xs: "3" },
	},
	autoPlay: { type: "boolean", default: false },
	dragable: { type: "boolean", default: true },
	dotIndicator: { type: "boolean", default: true },
	interval: { type: "number", default: 3000 },
	speed: { type: "number", default: 800 },
	sliderMargin: {
		type: "number",
		default: 30,
	},
	sliderResponsiveMargin: {
		type: "object",
		default: {},
	},
	nav: { type: "boolean", default: true },
	dots: { type: "boolean", default: false },
	centerPadding: { type: "number", default: 210 },
	responsiveCenterPadding: {
		type: "object",
		default: {},
	},

	carouselItems: {
		type: "array",
		default: [],
	},

	/*---------------------------------------------------
	 * 	Image Layouts:  common/style attributes
	 * --------------------------------------------------- */

	spacer: {
		type: "object",
		default: { spaceTop: { md: "10", unit: "px" }, spaceBottom: { md: "10", unit: "px" } },
		style: [{ selector: "{{QUBELY}}" }],
	},
	sliderNumber: { type: "number", default: 5 },
	itemPerSlides: { type: "string", default: "2" },
	infiniteLoop: { type: "boolean", default: true },
	isCentered: { type: "boolean", default: true },
	notCentered: { type: "boolean", default: false },
	activeFade: { type: "boolean", default: false },
	activeDescription: { type: "boolean", default: false },
	sliderContent: { type: "boolean", default: false },
	sliderOffContent: { type: "boolean", default: false },

	/*------------------------------------
    * 			Slider Settings 			
    -------------------------------------- */
	arrowStyle: { type: "string", default: "arrowright2" },
	horizontalScroll: {
		type: "object",
		default: { md: -78, unit: "px" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} }  ",
			},
		],
	},
	arrowPosition: {
		type: "object",
		default: { md: 50, unit: "%" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-block-image-carousel .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control { top: {{arrowPosition}}; } ",
			},
		],
	},
	cornerRadius: {
		type: "object",
		default: { md: 10, unit: "px" },
		style: [
			{ selector: "{{QUBELY}} .qubely-carousel-nav-control .nav-control { border-radius: {{cornerRadius}}; } " },
		],
	},
	cornerHoverRadius: {
		type: "object",
		default: { md: 50, unit: "%" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover { border-radius: {{cornerHoverRadius}}; } ",
			},
		],
	},
	sizeWidth: {
		type: "object",
		default: { md: 20, unit: "px" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control .fas { width: {{sizeWidth}}; height: {{sizeWidth}}; line-height: {{sizeWidth}}; }",
			},
		],
	},
	arrowSize: {
		type: "object",
		default: { md: 20, unit: "px" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel-nav-control .nav-control .dashicons, {{QUBELY}} .qubely-carousel-nav-control .nav-control .fas { font-size: {{arrowSize}}; } ",
			},
		],
	},
	// Section Arrow
	arrowColor: {
		type: "string",
		default: "#1066CC",
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-block-image-carousel .nav-control .dashicons, {{QUBELY}} .qubely-block-image-carousel .nav-control .fas { color:{{arrowColor}}; }",
			},
		],
	},
	// Arrow background color
	arrowShapeColor: {
		type: "object",
		default: { type: "color", openColor: 1, color: "#fafafa" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control",
			},
		],
	},
	// Arrow Border Color
	arrowBorderColor: {
		type: "object",
		default: {},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control",
			},
		],
	},
	// Arrow Hover Color.
	arrowHoverColor: {
		type: "string",
		default: "#ffffff",
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover .dashicons, {{QUBELY}} .qubely-carousel-nav-control .nav-control:hover .fas { color:{{arrowHoverColor}}; }",
			},
		],
	},
	// Arrow background Hover Color.
	arrowShapeHoverColor: {
		type: "object",
		default: { type: "color", openColor: 1, color: "#1066CC" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover ",
			},
		],
	},
	// Arroe Border Hover Color.
	arrowBorderHoverColor: {
		type: "object",
		default: { openTy: 0, color: "#3373dc", width: { bottom: "1", left: "1", right: "1", top: "1", unit: "px" } },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover",
			},
		],
	},
	// Dot Navigation.
	dotsposition: {
		type: "string",
		default: { md: 80, unit: "px" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-block-image-carousel .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul { margin-top: {{dotsposition}} }",
			},
		],
	},
	dotwidth: {
		type: "object",
		default: { md: 30, unit: "px" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { width: {{dotwidth}} }",
			},
		],
	},
	dotHeight: {
		type: "object",
		default: { md: 4, unit: "px" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { height: {{dotHeight}} }",
			},
		],
	},
	dotBorderRadius: {
		type: "object",
		default: { md: 4, unit: "px" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { border-radius: {{dotBorderRadius}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator { border-radius: {{dotBorderRadius}} }",
			},
		],
	},
	// Dot
	dotColor: {
		type: "object",
		default: { type: "color", openColor: 1, color: "#f4f4f4" },
		style: [{ selector: "{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li" }],
	},
	// Dot Active Color
	dotActiveColor: {
		type: "object",
		default: { type: "color", openColor: 1, color: "#1066CC" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator",
			},
		],
	},

	/*------------------------------------
	 * 			Media
	 * ------------------------------------ */
	// carouselImageSize: {
	// 	type: 'string',
	// 	default: '1140px',
	// 	style: [
	// 		{
	// 			condition: [
	// 				{ key: 'carouselImageSize', relation: '!=', value: 'custom' }
	// 			],
	// 			selector: '{{QUBELY}} .qubely-block-image-carousel .qubely-image-item img { display: inline-block; width: {{carouselImageSize}}; height: auto; }'
	// 		}
	// 	]
	// },

	avatarHeight: {
		type: "object",
		default: { md: 500, unit: "px" },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-block-image-carousel .qubely-image-item img {width: 100%;object-fit: cover;height: {{avatarHeight}};}",
			},
		],
	},

	/*------------------------------------
	 * 			Title
	 * ------------------------------------ */
	nameColor: {
		type: "string",
		default: "",
		style: [{ selector: "{{QUBELY}} .qubely-image-title { color:{{nameColor}}; }" }],
	},
	nameTypo: {
		type: "object",
		default: { openTypography: 1, weight: 700, size: { md: 34, unit: "px" } },
		style: [{ selector: "{{QUBELY}} .qubely-image-title" }],
	},
	nameSpacing: {
		type: "object",
		default: {},
		style: [{ selector: "{{QUBELY}} .qubely-image-title {margin-bottom: {{nameSpacing}};}" }],
	},

	/*------------------------------------
	 * 			Subtitle
	 * ------------------------------------ */
	subtitleColor: {
		type: "string",
		default: "",
		style: [{ selector: "{{QUBELY}} .qubely-image-subtitle { color:{{subtitleColor}}; }" }],
	},
	subtitleTypo: {
		type: "object",
		default: { openTypography: 1, size: { md: 22, unit: "px" } },
		style: [{ selector: "{{QUBELY}} .qubely-image-subtitle, {{QUBELY}} .qubely-image-subtitle div" }],
	},

	/*------------------------------------
	 * 			Descriptions
	 * ------------------------------------ */
	descriptionColor: {
		type: "string",
		default: "",
		style: [{ selector: "{{QUBELY}} .qubely-slider-description { color:{{descriptionColor}}; }" }],
	},
	messagePosition: { type: "string", default: "top" },
	messageTypo: {
		type: "object",
		default: {
			openTypography: 1,
			size: { md: 18, unit: "px" },
		},
		style: [{ selector: "{{QUBELY}} .qubely-slider-description" }],
	},
	messageSpacingTop: {
		type: "object",
		default: { md: 0, unit: "px" },
		style: [{ selector: "{{QUBELY}} .qubely-slider-description {margin-top: {{messageSpacingTop}};}" }],
	},
	messageSpacingBottom: {
		type: "object",
		default: { md: 5, unit: "px" },
		style: [{ selector: "{{QUBELY}} .qubely-slider-description {margin-bottom: {{messageSpacingBottom}};}" }],
	},

	/* ----------------------------------
    * 			Content
    ------------------------------------- */
	contentPadding: {
		type: "object",
		default: {
			openPadding: 1,
			paddingType: "global",
			global: {
				md: 30,
			},
			unit: "px",
		},
		style: [{ selector: "{{QUBELY}} .qubely-image-slider .qubely-image-content" }],
	},
	contentVerticalAlign: {
		type: "string",
		default: "bottom",
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-image-content {-webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start;}",
			},
		],
	},
	contentAlignment: {
		type: "string",
		default: "center",
		style: [
			{
				condition: [
					{ key: "layout", relation: "!=", value: "1" },
					{ key: "contentAlignment", relation: "==", value: "left" },
				],
				selector:
					"{{QUBELY}} .qubely-image-content {-webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; text-align: left;}",
			},
			{
				condition: [
					{ key: "layout", relation: "!=", value: "1" },
					{ key: "contentAlignment", relation: "==", value: "center" },
				],
				selector:
					"{{QUBELY}} .qubely-image-content {-webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; text-align: center;}",
			},
			{
				condition: [
					{ key: "layout", relation: "!=", value: "1" },
					{ key: "contentAlignment", relation: "==", value: "right" },
				],
				selector:
					"{{QUBELY}} .qubely-image-content {-webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; text-align: right;}",
			},
		],
	},

	/* ------------------------------------
	 * 			Overlay
	 * ------------------------------------- */
	enableOverlay: {
		type: "boolean",
		default: true,
	},

	overlayBg: {
		type: "object",
		default: {
			openColor: 1,
			type: "gradient",
			color: "rgba(6, 80, 183, 0.7)",
			gradient: {
				color1: "rgba(0, 0, 0, 0.5)",
				color2: "rgba(6, 1, 14, 0.6)",
				direction: 45,
				start: 0,
				stop: 100,
				type: "linear",
			},
		},
		style: [
			{
				condition: [{ key: "enableOverlay", relation: "==", value: true }],
				selector: "{{QUBELY}} .qubely-image-item .qubely-image-slider .qubely-image-slider-text",
			},
		],
	},

	overlayHoverBg: {
		type: "object",
		default: {
			type: "gradient",
			color: "rgba(6, 80, 183, 0.85)",
			gradient: {
				color1: "rgba(0, 0, 0, 0.85)",
				color2: "rgba(72, 6, 196, 0.85)",
				direction: 45,
				start: 0,
				stop: 100,
				type: "linear",
			},
		},
		style: [
			{
				condition: [
					{ key: "layout", relation: "==", value: "2" },
					{ key: "enableOverlay", relation: "==", value: true },
				],
				selector: "{{QUBELY}} .qubely-image-layout-2 .qubely-image-slider-text:hover:before",
			},
			{
				condition: [
					{ key: "layout", relation: "==", value: "3" },
					{ key: "enableOverlay", relation: "==", value: true },
				],
				selector: "{{QUBELY}} .qubely-image-layout-3 .qubely-image-slider-text:hover:before",
			},
			{
				condition: [
					{ key: "layout", relation: "==", value: "4" },
					{ key: "enableOverlay", relation: "==", value: true },
				],
				selector: "{{QUBELY}} .qubely-image-layout-4 .qubely-image-slider-text:hover:before",
			},
			{
				condition: [
					{ key: "layout", relation: "==", value: "5" },
					{ key: "enableOverlay", relation: "==", value: true },
				],
				selector: "{{QUBELY}} .qubely-image-layout-5 .qubely-image-slider-text:hover:before",
			},
			{
				condition: [
					{ key: "layout", relation: "==", value: "6" },
					{ key: "enableOverlay", relation: "==", value: true },
				],
				selector: "{{QUBELY}} .qubely-image-layout-6 .qubely-image-slider-text:hover:before",
			},
		],
	},

	overlayBlend: {
		type: "string",
		default: "",
		style: [
			{
				condition: [
					{ key: "layout", relation: "==", value: "6" },
					{ key: "enableOverlay", relation: "==", value: true },
					{ key: "overlayBlend", relation: "!=", value: "normal" },
				],
				selector:
					"{{QUBELY}} .qubely-image-layout-6 .qubely-image-slider-text {mix-blend-mode: {{overlayBlend}};} {{QUBELY}} .qubely-image-layout-4 .qubely-image-slider-text {mix-blend-mode: {{overlayBlend}};}",
			},
		],
	},
	// Border radius
	bgBorderRadius: {
		type: "object",
		default: {
			openBorderRadius: 1,
			radiusType: "global",
			global: { md: 20 },
			unit: "px",
		},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-layout-1 .qubely-image-item, {{QUBELY}} .qubely-layout-2 .qubely-image-item, {{QUBELY}} .qubely-layout-3 .qubely-image-carousel-content-wrapper",
			},
		],
	},
	border: {
		type: "object",
		default: { openTy: 0, color: "#3373dc", width: { bottom: "1", left: "1", right: "1", top: "1", unit: "px" } },
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-image-item.qubely-image-layout-1, {{QUBELY}} .qubely-image-item.qubely-image-layout-2, {{QUBELY}} .qubely-image-item.qubely-image-layout-3 .qubely-image-carousel-content-wrapper",
			},
		],
	},
	boxShadow: {
		type: "object",
		default: {},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-image-item.qubely-image-layout-1, {{QUBELY}} .qubely-image-item.qubely-image-layout-2, {{QUBELY}} .qubely-image-item.qubely-image-layout-3 .qubely-image-carousel-content-wrapper",
			},
		],
	},
	boxShadowHover: {
		type: "object",
		default: {},
		style: [
			{
				selector:
					"{{QUBELY}} .qubely-image-item.qubely-image-layout-1:hover, {{QUBELY}} .qubely-image-item.qubely-image-layout-2:hover, {{QUBELY}} .qubely-image-item.qubely-image-layout-3 .qubely-image-carousel-content-wrapper:hover",
			},
		],
	},
	showGlobalSettings: { type: "boolean", default: true }, // Global Settings
	...globalAttributes,
};

export default attributes;
