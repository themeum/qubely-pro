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
                $(this).addClass('loading');
            },
            success: (response) => {
                console.log(response);
                let { quantity } = $(this)[0].dataset;
                
                if (typeof quantity === 'undefined') {
                    quantity = 0;
                }
                quantity = parseInt(quantity) + 1;
                $(this).data('quantity', quantity);
                $(this).removeClass('loading');
                $(this).html(`${quantity} in Cart`);;
            },
            error: (jqxhr, textStatus, error) => console.log(jqxhr, textStatus, error),
        });
    });
})