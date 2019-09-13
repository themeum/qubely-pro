const { __ } = wp.i18n;
const img_path = qubely_pro_admin.plugin + 'assets/img/blocks';

const icons = {
    // Testimonial Carousel icon.
    testimonial_1: <img src={`${img_path}/testimonial/1.svg`} alt={__('Testimonial 1')} />,
    testimonial_2: <img src={`${img_path}/testimonial/2.svg`} alt={__('Testimonial 2')} />,
    testimonial_3: <img src={`${img_path}/testimonial/3.svg`} alt={__('Testimonial 3')} />,

    // Team Carousel Icon
    teamcarousel_1: <img src={`${img_path}/teamcarousel/1.svg`} alt={__('Team Carousel 1')} />,
    teamcarousel_2: <img src={`${img_path}/teamcarousel/2.svg`} alt={__('Team Carousel 2')} />,
    teamcarousel_3: <img src={`${img_path}/teamcarousel/3.svg`} alt={__('Team Carousel 3')} />,

    // Social Share Icons Style.
    social_normal: <img src={`${img_path}/socialicon/normal.svg`} alt={__('Normal')} />,
    social_fill: <img src={`${img_path}/socialicon/fill.svg`} alt={__('Fill')} />,

}


export default icons;