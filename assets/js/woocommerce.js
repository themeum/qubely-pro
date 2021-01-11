jQuery(function ($) {

    $(".qubely_adtocart_button").on('click', function (e) {
        e.preventDefault();
        let productId = $(this).attr('id');
        endPoint = qubely_urls.ajax + '?action=qubely_add_to_cart';
        jQuery.ajax({
            url: endPoint,
            type: "POST",
            data: {
                id: productId,
                quantity: 1,
            },
            beforeSend: () => {
                console.log('seindgin');
            },
            success: (response) => {
                console.log(response)
            },
            error: (jqxhr, textStatus, error) => console.log(jqxhr, textStatus, error),
        });
    });
})