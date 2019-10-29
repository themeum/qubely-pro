jQuery(document).ready(function ($) {
    'use strict';

    $('.qubely-gallery-items .qubely-gallery-item .qubely-gallery-content-image > img').on('click', event => {
        $(event.currentTarget).magnificPopup({
            items: {
                src: $(event.currentTarget)[0].currentSrc
            },
            type: 'image'
        });

    });


})




