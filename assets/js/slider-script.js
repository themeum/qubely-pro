jQuery(document).ready(function ($) {
    $.fn.themeum_qubely_carousel = function() {
        if ($('.qubely-carousel.qubely-carousel-wrapper').length > 0) {
            const qubelyCarousels = $('.qubely-carousel-wrapper')
            let indexOfCounterElement = 0

            // console.log('QQQ', qubelyCarousels.length)

            while (indexOfCounterElement < qubelyCarousels.length) {
                let currentElement = qubelyCarousels[indexOfCounterElement]
                const { 
                    nav, 
                    dots, 
                    speed, 
                    center, 
                    margin,
                    dragable, 
                    autoplay, 
                    interval, 
                    responsive, 
                    arrowStyle, 
                    infiniteLoop, 
                    dot_indicator, 
                    centerPadding, 
                } = JSON.parse(currentElement.dataset.options)

                qubelyCarousels.qubelyCarousel({
                    nav: nav,
                    dots: dots,
                    speed: speed,
                    margin: margin,
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
