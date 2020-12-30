jQuery(function ($) {
    'use strict';

    $(document).on('click', '.install-qubely-button', function(e){
        e.preventDefault();
        var $btn = $(this);
        $.ajax({
            type: 'POST',
            url: ajaxurl,
            data: {install_plugin: 'qubely', action: 'install_qubely_plugin'},
            beforeSend: function(){
                $btn.addClass('updating-message');
            },
            success: function (data) {
                $('.install-qubely-button').remove();
                $('#qubely_install_msg').html(data);
            },
            complete: function () {
                $btn.removeClass('updating-message');
            }
        });
    });
});
