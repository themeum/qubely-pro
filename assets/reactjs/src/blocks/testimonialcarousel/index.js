
import './style.scss';
import Edit from './Edit';
import Save from './Save';
import attributes from './attributes';
import {
	renderAuthorInfo
} from './helpers';

const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;
const { registerBlockType } = wp.blocks;
const {
	HelperFunction: {
		animationAttr
	}
} = wp.qubelyComponents;


registerBlockType('qubely/testimonialcarousel', {
	title: __('Testimonial Carousel'),
	description: __('Design and showcase customer reviews, remarks as testimonials with Qubely Testimonial Carousel block'),
	icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg'} alt={__('Team Block')} />,
	category: 'qubely',
	keywords: [
		__('Testimonial', 'qubely'),
		__('Carousel', 'qubely')
	],
	supports: {
		align: ['center', 'wide', 'full'],
	},
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
				const {
					attributes: {
						uniqueId,
						layout,
						items,
						sliderItemMargin,
						autoPlay,
						arrowStyle,
						infiniteLoop,
						activeFade,
						isCentered,
						dragable,
						nav,
						dots,
						dotIndicator,
						interval,
						speed,
						animation
					}
				} = props;

				let options = JSON.stringify({
					autoplay: autoPlay,
					items: items,
					margin: sliderItemMargin,
					center: isCentered,
					dots: dots,
					dot_indicator: dotIndicator,
					nav: nav,
					speed: speed,
					interval: interval,
					dragable: dragable,
					infiniteLoop: infiniteLoop,
					activeFade: activeFade,
					arrowStyle: arrowStyle,
					responsive: [
						{
							viewport: 1170,
							items: items.md
						},
						{
							viewport: 980,
							items: items.sm
						},
						{
							viewport: 580,
							items: items.xs
						}
					],
				});

				const renderTestimonial = () => {
					const { attributes: { carouselItems, showRatings, layout, quoteIcon } } = props

					return (carouselItems.map((item, index) => {
						const { message, ratings } = item
						return (
							<div key={index} className={`qubely-carousel-item`}>
								<div className={`qubely-tesitmonial-item qubely-tesitmonial-item-layout-${layout}`}>
									{layout == 2 && renderAuthorInfo(item, props.attributes)}
									{(quoteIcon && layout == 1) &&
										<div className="qubely-testimonial-quote">
											<span className={`qubely-quote-icon ${quoteIcon}`} />
										</div>
									}
									<div className={`qubely-testimonial-carousel-content-wrapper`}>
										{(showRatings && ratings > 0 && layout !== 1) &&
											<div className="qubely-testimonial-ratings" data-qubelyrating={ratings}></div>
										}
										<div className="qubely-testimonial-content"><RichText.Content value={message} /></div>
										{(showRatings && ratings > 0 && layout == 1) && <div className="qubely-testimonial-ratings" data-qubelyrating={ratings} />}
									</div>
									{layout !== 2 && renderAuthorInfo(item, props.attributes)}
									{(quoteIcon && layout == 2) &&
										<div className="qubely-testimonial-quote qubely-position-bottom">
											<span className={`qubely-quote-icon ${quoteIcon}`} />
										</div>
									}
								</div>
							</div>
						)
					}))
				}

				return (
					<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
						<div className={`qubely-block-testimonial-carousel qubely-testimonial-carousel-layout-${layout}`}>
							<div className={`qubely-carousel qubely-carousel-wrapper${isCentered && activeFade ? ' is-faded' : ''}`} data-options={options} >
								{renderTestimonial()}
							</div>
						</div>
					</div>
				);
			}
		}
	]
});
