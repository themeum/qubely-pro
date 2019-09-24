jQuery(document).ready(function ($) {
    if ($('.qubely-carousel.qubely-carousel-wrapper').length > 0) {
        const counterElement = $('.qubely-carousel-wrapper')
        let indexOfCounterElement = 0
        while (indexOfCounterElement < counterElement.length) {
            let currentElement = counterElement[indexOfCounterElement]

            const { items, autoplay, interval, speed, dots, dot_indicator, centerPadding, center, dragable, arrowStyle, infiniteLoop, nav, responsive } = JSON.parse(currentElement.dataset.options)

            $(".qubely-carousel-wrapper").qubelyCarousel({
                autoplay: autoplay,
                interval: interval,
                dragable: dragable,
                center: center,
                speed: speed,
                margin: 10,
                dots: dots,
                nav: nav,
                dot_indicator: dot_indicator,
                centerPadding: centerPadding,
                responsive: [...responsive],
                infiniteLoop: infiniteLoop,
                arrowStyle: arrowStyle,
                onChange: function (item) {
                    // console.log("test: ", item)
                }
            })
            indexOfCounterElement++
        }
    }



});
