jQuery(document).ready(function ($) {
    'use strict';

    $('.qubely-gallery-items .qubely-gallery-item .qubely-gallery-content-image > img').on('click', event => {

        let items = []
        let currentGallery = $(event.currentTarget).parents('.qubely-gallery-items')

        currentGallery.find('.qubely-gallery-item .qubely-gallery-content-image > img').each(function (idx, value) {
            let imgSrc = $(this).attr("src");
            items.push({ src: imgSrc })
        })

        $(event.currentTarget).magnificPopup({
            items: [...items],
            gallery: {
                enabled: true
            },
            type: 'image',
            cursor: 'mfp-zoom-out-cur', 
            tError: '<a href="%url%">The image</a> could not be loaded.'
        })

    })


})




