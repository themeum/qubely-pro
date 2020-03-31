jQuery(document).ready(function ($) {
    'use strict';
    $('.pages').click(function (e) {
        // console.log('sending action');
        // jQuery.ajax({
        //     type: "POST",
        //     url: `${qubely_pro_urls.plugin}core/blocks/postgrid.php`,
        //     data: { action: 'change_qurey_args' },
        //     success: function (html) {
        //         console.log('success');
        //     }
        // });
        e.preventDefault();
        var data = {
            action: 'process_reservation',
            newPage:'ds',
            nonce: postgrid_ajax.nonce
        };

        $.post( postgrid_ajax.url, data, function( response ) 
        {
            console.log('response : ',response);
            $('.pages').html( response.data );
        });
    })

})




