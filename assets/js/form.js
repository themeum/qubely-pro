import flatpickr from "flatpickr";
jQuery(document).ready(function ($) {
    console.log('form script')
    if ($('.qubely-datepicker').length > 0) {
        $('.qubely-datepicker').datepicker({
            dateFormat: "dd-mm-yy",
            duration: "fast",
            changeMonth: true,
            changeYear: true,
        });
    }

    $(".flatpickr-input").flatpickr(
        {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        }
    );
});
