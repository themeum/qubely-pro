const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
import './style.scss'
import Edit from './Edit'
import Save from './Save'

registerBlockType('qubely/imagecarousel', {
	title: __('Image Carousel'),
	description: __('Insert images and beautify them with Qubely Image Carousel Block'),
	icon: 'carrot',
	category: 'qubely',
	keywords: [
		__('Image'),
		__('Carousel')
	],
	attributes: {
		uniqueId: { type: 'string', default: '' },
		layout: { type: 'number', default: 1 },
		items: { 
			type: 'object', 
			default: { md: '1', sm: '1', xs: '1' } 
		},
		itemthree: { 
			type: 'object', 
			default: { md: '3', sm: '3', xs: '1' } 
		},
		autoPlay: { type: 'boolean', default: false },
		dots: { type: 'boolean', default: true },
		dragable: { type: 'boolean', default: true },
		dotIndicator: { type: 'boolean', default: true },
		nav: { type: 'boolean', default: true },
		interval: { type: 'number', default: 3000 },
		speed: { type: 'number', default: 800 },
		carouselItems: {
			type: 'array',
			default: [
				{
					slidertitle: 'Wordcamp Dhaka',
					subtitle: '28 September 2019',
					message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit.”',
					ratings: '5',
					sliderimage: {}
				},
				{
					slidertitle: 'Welcome to Wordcamp Dhaka',
					subtitle: 'Everything related to WordPress',
					message: '“WordCamp Dhaka is officially on the calendar!”',
					ratings: '4.5',
					sliderimage: {}
				},
				{
					slidertitle: 'Accommodation to Dhaka',
					subtitle: 'Dhaka being a crowded city',
					message: '“Dhaka Regency Hotel & Resort Limited”',
					ratings: '4.5',
					sliderimage: {}
				},
				{
					slidertitle: 'International Convention City, Bashundhara',
					subtitle: 'Including speaker submissions',
					message: '““Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit.””',
					ratings: '5',
					sliderimage: {}
				},
				{
					slidertitle: 'Mark Your Calendar',
					subtitle: 'WordCamp Dhaka will be happening on 28th September',
					message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit.”',
					ratings: '5',
					sliderimage: {}
				},
				
			]
		},

		/*---------------------------------------------------
		* 	Image Layouts:  common/style attributes
		* --------------------------------------------------- */
		alignment: { type: 'object', default: { md: 'center' }, style: [{ selector: '{{QUBELY}} .qubely-image-item {text-align: {{alignment}};}' }] },
		spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },

		// Number of slider.
		sliderNumber: { type: 'number', default: 5 },
		// Item per Slider  
		itemPerSlides: { type: 'string', default: '2' },
		// Infinite Loop
		infiniteLoop: { type: 'boolean', default: true },
		isCentered: { type: 'boolean', default: true },
		notCentered: { type: 'boolean', default: false },
		activeFade: { type: 'boolean', default: false },
		activeDescription: { type: 'boolean', default: false },

		/*------------------------------------
		* 			Slider Settings 			
		-------------------------------------- */
		arrowStyle: { type: 'string', default: 'arrowright' },
		horizontalScroll: {
			type: 'object',
			default: { md: 0, unit: '%' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} }  ' }
			]
		},
		// arrowPosition: {type: 'string', default: 'center' },
		arrowPosition: {
			type: 'object',
			default: { md: 49, unit: '%' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control { bottom: {{arrowPosition}}; } ' }
			]
		},
		cornerRadius: {
			type: 'object',
			default: { md: 10, unit: 'px' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control { border-radius: {{cornerRadius}}; } ' }
			]
		},
		cornerHoverRadius: {
			type: 'object',
			default: { md: 50, unit: '%' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover { border-radius: {{cornerHoverRadius}}; } ' }
			]
		},
		sizeWidth: {
			type: 'string',
			default: { md: 12, unit: 'px' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control { padding: {{sizeWidth}}; } ' }
			]
		},
		arrowSize: {
			type: 'object',
			default: { md: 20, unit: 'px' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control .dashicons { font-size: {{arrowSize}}; } ' }
			]
		},
		// Section Arrow 
		arrowColor: {
			type: 'string',
			default: '#1066CC',
			style: [{ selector: '{{QUBELY}} .qubely-block-image-carousel .nav-control .dashicons { color:{{arrowColor}}; }' }]
		},
		// Arrow background color
		arrowShapeColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#fafafa' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' },
			],
		},
		// Arrow Border Color
		arrowBorderColor: {
			type: 'object',
			default: {},
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' }]
		},
		// Arrow Hover Color.
		arrowHoverColor: {
			type: 'string', default: '#ffffff',
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover .dashicons { color:{{arrowHoverColor}}; }' }]
		},
		// Arrow background Hover Color.
		arrowShapeHoverColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#1066CC' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover ' },
			],
		},
		// Arroe Border Hover Color.
		arrowBorderHoverColor: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover' }]
		},
		// Dot Navigation.
		dotwidth: {
			type: 'string',
			default: { md: 30, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { width: {{dotwidth}} }' }]
		},
		dotHeight: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { height: {{dotHeight}} }' }]
		},
		dotBorderRadius: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { border-radius: {{dotBorderRadius}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator { border-radius: {{dotBorderRadius}} }' }]
		},
		// Dot
		dotColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#f4f4f4' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li' }]
		},
		// Dot Active Color
		dotActiveColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#1066CC' },
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator' }
			]
		},
		//Name
		nameColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-image-title { color:{{nameColor}}; }' }] },
		nameTypo: { type: 'object', default: { openTypography: 1, weight: 700, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-image-title' }] },
		nameSpacing: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-image-title {margin-bottom: {{nameSpacing}};}' }] },

		//Designation
		subtitleColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-image-subtitle { color:{{subtitleColor}}; }' }] },
		subtitleTypo: { type: 'object', default: { openTypography: 1, size: { md: 14, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-image-subtitle' }] },

		/*------------------------------------
		* 			Messsage 
		* ------------------------------------ */
		messagePosition: { type: 'string', default: 'top' },
		messageTypo: {
			type: 'object',
			default: {
				openTypography: 1,
				size: { md: 16, unit: 'px' }
			},
			style: [{ selector: '{{QUBELY}} .qubely-image-content' }]
		},
		messageSpacingTop: { type: 'object', default: { md: 0, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-image-content {margin-top: {{messageSpacingTop}};}' }] },
		messageSpacingBottom: { type: 'object', default: { md: 5, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-image-content {margin-bottom: {{messageSpacingBottom}};}' }] },

		/* ------------------------------------
		* 			Design 
		* ------------------------------------- */
		textColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-image-carousel-content-wrapper { color:{{textColor}}; }' }] },
		bgPadding: {
			type: 'object',
			default: {},
			style: [
				{
					condition: [
						{ key: 'layout', relation: '==', value: '1' }
					],
					selector: '{{QUBELY}} .qubely-layout-1 .qubely-image-item'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '2' }
					],
					selector: '{{QUBELY}} .qubely-layout-2 .qubely-image-item'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '3' }
					],
					selector: '{{QUBELY}} .qubely-layout-3 .qubely-image-carousel-content-wrapper'
				}
			]
		},
		// Background Color
		bgColor: {
			type: 'string',
			default: '',
			style: [
				{
					selector: '{{QUBELY}} .qubely-image-item.layout-1 {background-color: {{bgColor}};} {{QUBELY}} .qubely-image-item.layout-2 {background-color: {{bgColor}};}'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '3' }
					],
					selector: '{{QUBELY}} .layout-3 .qubely-image-carousel-content-wrapper {background-color: {{bgColor}};} {{QUBELY}} .layout-3 .qubely-image-carousel-content-wrapper:before {border-color: {{bgColor}} transparent transparent transparent;}'
				}
			]
		},
		// Border radius
		bgBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: 20 },
				unit: 'px'
			},
			style: [
				{ selector: '{{QUBELY}} .qubely-layout-1 .qubely-image-item, {{QUBELY}} .qubely-layout-2 .qubely-image-item, {{QUBELY}} .qubely-layout-3 .qubely-image-carousel-content-wrapper' }
			]
		},
		border: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [
				{ selector: '{{QUBELY}} .qubely-image-item.layout-1, {{QUBELY}} .qubely-image-item.layout-2, {{QUBELY}} .qubely-image-item.layout-3 .qubely-image-carousel-content-wrapper' }]
		},
		boxShadow: {
			type: 'object', default: {},
			style: [
				{ selector: '{{QUBELY}} .qubely-image-item.layout-1, {{QUBELY}} .qubely-image-item.layout-2, {{QUBELY}} .qubely-image-item.layout-3 .qubely-image-carousel-content-wrapper' }
			]
		},
		boxShadowHover: {
			type: 'object', default: {},
			style: [
				{ selector: '{{QUBELY}} .qubely-image-item.layout-1:hover, {{QUBELY}} .qubely-image-item.layout-2:hover, {{QUBELY}} .qubely-image-item.layout-3 .qubely-image-carousel-content-wrapper:hover' }
			]
		},
		showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
		//showContextMenu: { type: 'boolean', default: true }, 
	},
	edit: Edit,
	save: Save
});
