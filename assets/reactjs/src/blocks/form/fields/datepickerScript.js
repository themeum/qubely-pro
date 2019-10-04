jQuery(document).ready(function ($) {

    console.log('date picker edit : ', $('.qubely-datepicker'))

    $('.qubely-datepicker').datepicker({
        dateFormat: "dd-mm-yy",
        duration: "fast",
        changeMonth: true,
        changeYear: true,
    });

});
