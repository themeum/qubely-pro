jQuery(document).ready(function ($) {
    if ($('.qubely-carousel.qubely-carousel-wrapper').length > 0) {
        const counterElement = $('.qubely-carousel-wrapper')
        let indexOfCounterElement = 0
        while (indexOfCounterElement < counterElement.length) {
            let currentElement = counterElement[indexOfCounterElement]
            const { autoplay, interval, speed, dots, dot_indicator, centerPadding, center, dragable, arrowStyle, infiniteLoop, nav, responsive } = JSON.parse(currentElement.dataset.options)

            console.log(autoplay, interval, speed, dots, dot_indicator, centerPadding, center, dragable, arrowStyle, infiniteLoop, nav, responsive)
            
            $(".qubely-carousel-wrapper").qubelyCarousel({
                nav: nav,
                margin: 10,
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



});
