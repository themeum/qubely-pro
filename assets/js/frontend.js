jQuery(document).ready(function ($) {
    'use strict';

    $('.qubely-gallery-items .qubely-gallery-item .qubely-gallery-content-image > img').on('click', event => {

        let items = []
        let currentGallery = $(event.currentTarget).parents('.qubely-gallery-items')
        let imageWraper = $(event.currentTarget).parents('.qubely-gallery-item')

        let temp = imageWraper.index(), numOfgalleryItems = currentGallery.find('.qubely-gallery-item .qubely-gallery-content-image > img').length


        while (temp < numOfgalleryItems) {
            items.push({ src: currentGallery.children().eq(temp).find('.qubely-gallery-content-image > img').attr("src") })
            temp++
        }

        if (imageWraper.index() !== 0) {
            temp = 0
            while (temp <= imageWraper.index() - 1) {
                items.push({ src: currentGallery.children().eq(temp).find('.qubely-gallery-content-image > img').attr("src") })
                temp++
            }
        }


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




