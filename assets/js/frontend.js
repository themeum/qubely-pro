jQuery(document).ready(function ($) {
    'use strict';
    $('.pages').click(function () {
        console.log('sending action');
        jQuery.ajax({
            type: "POST",
            url: `${qubely_pro_urls.plugin}core/blocks/postgrid.php`,
            data: { action: 'change_qurey_args' },
            success: function (html) {
                alert(html);
            }
        });
    })

})




