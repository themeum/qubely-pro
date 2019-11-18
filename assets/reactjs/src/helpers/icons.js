const { __ } = wp.i18n;
const img_path = qubely_pro_admin.plugin + 'assets/img/blocks'
const free_img_path = qubely_admin.plugin + 'assets/img/blocks'

const icons = {

    //form 
    form_classic: <img src={`${img_path}/form/classic.svg`} alt={__('Classic')} />,
    form_material: <img src={`${img_path}/form/material.svg`} alt={__('Material')} />,
    form_material_dark: <img src={`${img_path}/form/materialdark.svg`} alt={__('Material dark')} />,

    from_fields: {
        column: <img src={`${img_path}/form/column.svg`} alt={__('qubely form Column')} />,
        text: <img src={`${img_path}/form/text.svg`} alt={__('qubely form text-field')} />,
        number: <img src={`${img_path}/form/number.svg`} alt={__('qubely form number-field')} />,
        textarea: <img src={`${img_path}/form/textarea.svg`} alt={__('qubely form textarea-field')} />,
        checkbox: <img src={`${img_path}/form/checkbox.svg`} alt={__('qubely form checkbox-field')} />,
        date: <img src={`${img_path}/form/calendar.svg`} alt={__('qubely form date-field')} />,
        dropdown: <img src={`${img_path}/form/dropdown.svg`} alt={__('qubely form dropdown-field')} />,
        email: <img src={`${img_path}/form/email.svg`} alt={__('qubely form email-field')} />,
        radio: <img src={`${img_path}/form/radio.svg`} alt={__('qubely form radio-field')} />,
        time: <img src={`${img_path}/form/time.svg`} alt={__('qubely form time-field')} />,
    },

    // Testimonial Carousel icon.
    testimonial_1: <img src={`${img_path}/testimonial/1.svg`} alt={__('Testimonial 1')} />,
    testimonial_2: <img src={`${img_path}/testimonial/2.svg`} alt={__('Testimonial 2')} />,
    testimonial_3: <img src={`${img_path}/testimonial/3.svg`} alt={__('Testimonial 3')} />,

    // Team Carousel Icon
    teamcarousel_1: <img src={`${img_path}/teamcarousel/1.svg`} alt={__('Team Carousel 1')} />,
    teamcarousel_2: <img src={`${img_path}/teamcarousel/2.svg`} alt={__('Team Carousel 2')} />,
    teamcarousel_3: <img src={`${img_path}/teamcarousel/3.svg`} alt={__('Team Carousel 3')} />,
    testimonial_avatar: {
        left: <img src={`${img_path}/teamcarousel/avatars/1.svg`} alt={__('Avatar Left')} />,
        right: <img src={`${img_path}/teamcarousel/avatars/2.svg`} alt={__('Avatar Right')} />,
        top: <img src={`${img_path}/teamcarousel/avatars/3.svg`} alt={__('Avatar Top')} />,
        bottom: <img src={`${img_path}/teamcarousel/avatars/4.svg`} alt={__('Avatar Bottom')} />,
    },

    // Social Share Icons Style.
    social_normal: <img src={`${img_path}/socialicon/normal.svg`} alt={__('Normal')} />,
    social_fill: <img src={`${img_path}/socialicon/fill.svg`} alt={__('Fill')} />,

    // PostGrid Icon
    postgrid_1: <img src={`${img_path}/postgrid/1.svg`} alt={__('Layout 1')} />,
    postgrid_2: <img src={`${img_path}/postgrid/2.svg`} alt={__('Layout 2')} />,
    postgrid_3: <img src={`${img_path}/postgrid/3.svg`} alt={__('Layout 3')} />,
    postgrid_4: <img src={`${img_path}/postgrid/4.svg`} alt={__('Layout 4')} />,
    postgrid_5: <img src={`${img_path}/postgrid/5.svg`} alt={__('Layout 5')} />,

    // Postgrid design 
    postgrid_design_1: <img src={`${img_path}/postgrid/11.svg`} alt={__('Design 1')} />,
    postgrid_design_2: <img src={`${img_path}/postgrid/12.svg`} alt={__('Design 2')} />,
    postgrid_design_3: <img src={`${img_path}/postgrid/13.svg`} alt={__('Design 3')} />,
    postgrid_design_4: <img src={`${img_path}/postgrid/14.svg`} alt={__('Design 4')} />,
    postgrid_design_5: <img src={`${img_path}/postgrid/15.svg`} alt={__('Design 5')} />,
    postgrid_design_6: <img src={`${img_path}/postgrid/16.svg`} alt={__('Design 6')} />,

    // Image Carousel
    imagecarousel_1: <img src={`${img_path}/imagecarousel/layout1.svg`} alt={__('Design 1')} />,
    imagecarousel_2: <img src={`${img_path}/imagecarousel/layout2.svg`} alt={__('Design 2')} />,
    imagecarousel_3: <img src={`${img_path}/imagecarousel/layout3.svg`} alt={__('Design 3')} />,
    imagecarousel_4: <img src={`${img_path}/imagecarousel/layout4.svg`} alt={__('Design 4')} />,
    imagecarousel_5: <img src={`${img_path}/imagecarousel/layout5.svg`} alt={__('Design 5')} />,
    imagecarousel_6: <img src={`${img_path}/imagecarousel/layout6.svg`} alt={__('Design 6')} />,

    // Gallery.
    gallery_1: <img src={`${img_path}/gallery/layout1.svg`} alt={__('Design 1')} />,
    gallery_2: <img src={`${img_path}/gallery/layout2.svg`} alt={__('Design 2')} />,

    //button outline
    btn_fill: <img src={`${free_img_path}/button/fill.svg`} alt={__('Fill')} />,
    btn_outline: <img src={`${free_img_path}/button/outline.svg`} alt={__('Outline')} />,

    // Media Card.
    mediacard_1: <img src={`${img_path}/mediacard/1.svg`} alt={__('Design 1')} />,
    mediacard_2: <img src={`${img_path}/mediacard/2.svg`} alt={__('Design 2')} />,
    mediacard_3: <img src={`${img_path}/mediacard/3.svg`} alt={__('Design 3')} />,
    mediacard_4: <img src={`${img_path}/mediacard/4.svg`} alt={__('Design 4')} />,
    mediacard_5: <img src={`${img_path}/mediacard/5.svg`} alt={__('Design 5')} />,


    leftArrow: <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8.70002L10.6 14.4L12 12.9L7.8 8.70002L12 4.50002L10.6 3.00002L5 8.70002Z" />
    </svg>,

    rightArrow: <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8.7L7.4 3L6 4.5L10.2 8.7L6 12.9L7.4 14.4L13 8.7Z" />
        </svg>



}


export default icons;