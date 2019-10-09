jQuery(document).ready(function ($) {
    $.fn.themeum_qubely_carousel = function () {
        let indexOfCounterElement = 0

        if ($('.qubely-carousel.qubely-carousel-wrapper').length > 0) {

            const qubelyCarouselWrapper = $('.qubely-carousel.qubely-carousel-wrapper')

            while (indexOfCounterElement < qubelyCarouselWrapper.length) {

                let currentElement = qubelyCarouselWrapper[indexOfCounterElement]

                const {
                    nav,
                    dots,
                    speed,
                    margin,
                    center,
                    dragable,
                    autoplay,
                    interval,
                    responsive,
                    arrowStyle,
                    infiniteLoop,
                    dot_indicator,
                    centerPadding,
                } = JSON.parse(currentElement.dataset.options)


                $('.qubely-carousel.qubely-carousel-wrapper').eq(indexOfCounterElement).qubelyCarousel({
                    nav: nav,
                    margin: margin,
                    dots: dots,
                    speed: speed,
                    center: center,
                    dragable: dragable,
                    interval: interval,
                    autoplay: autoplay,
                    arrowStyle: arrowStyle,
                    infiniteLoop: infiniteLoop,
                    responsive: [...responsive],
                    centerPadding: centerPadding,
                    dot_indicator: dot_indicator,
                    onChange: function (item) {
                        // console.log("test: ", item)
                    }
                })
                indexOfCounterElement++
            }
        }
    };
    $('.qubely-carousel.qubely-carousel-wrapper').themeum_qubely_carousel()

});
