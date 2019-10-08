
jQuery(document).ready(function ($) {

    if ($('.qubely-datepicker').length > 0) {
        $('.qubely-datepicker').datepicker({
            dateFormat: "dd-mm-yy",
            duration: "fast",
            changeMonth: true,
            changeYear: true,
        });
    }


    //Time Picker BLOCK
    $('.qubely-time-picker').on('click', function (event) {

        let $qubelyTimePicker = $(this).parent();
        if ($qubelyTimePicker.find('.qubely-form-timepicker.qubely-active').length > 0) {
            $qubelyTimePicker.find('.qubely-form-timepicker.qubely-active').removeClass('qubely-active');
        } else {
            $qubelyTimePicker.find('.qubely-form-timepicker').addClass('qubely-active');
        }

    });

    $('.qubely-hourformat-button').on('click', function (event) {
        let $qubelyTimePickerFormat = $(this).parent();
        let currentHourFormat = $qubelyTimePickerFormat.find('.qubely-form-time-format')[0].innerText
        $qubelyTimePickerFormat.find('.qubely-form-time-format')[0].innerText = currentHourFormat === 'PM' ? 'AM' : 'PM'

    })



    $('.qubely-minute-button-up').on('click', function (event) {
        let $qubelyTimePickerFormat = $(this).parent();
        let $qubelyTimePickerWrapper = $qubelyTimePickerFormat.parent()

        const {
            minuteInterval,
            timeFormatType
        } = JSON.parse($qubelyTimePickerWrapper[0].dataset.options)

        let minute = $qubelyTimePickerFormat.find('.qubely-form-timepicker-minute')[0].innerText
        let currentHourFormat = $qubelyTimePickerWrapper.find('.qubely-form-time-format')[0].innerText
        let hour = parseInt($qubelyTimePickerWrapper.find('.qubely-form-timepicker-hour')[0].innerText)

        if (minute >= 60 - parseInt(minuteInterval)) {

            if (timeFormatType === 12 && hour === 11) {
                $qubelyTimePickerWrapper.find('.qubely-form-time-format')[0].innerText = currentHourFormat === 'AM' ? 'PM' : 'AM'
            }
            $qubelyTimePickerWrapper.find('.qubely-form-timepicker-hour')[0].innerText = hour === timeFormatType ? (timeFormatType === 12 ? 1 : 0) : hour + 1
            $qubelyTimePickerFormat.find('.qubely-form-timepicker-minute')[0].innerText = (parseInt(minute) + parseInt(minuteInterval)) % 60

        } else {
            $qubelyTimePickerFormat.find('.qubely-form-timepicker-minute')[0].innerText = parseInt(minute) + parseInt(minuteInterval)
        }
    });

    $('.qubely-minute-button-down').on('click', function (event) {

        let $qubelyTimePickerFormat = $(this).parent();
        let $qubelyTimePickerWrapper = $qubelyTimePickerFormat.parent()

        const {
            minuteInterval,
            timeFormatType
        } = JSON.parse($qubelyTimePickerWrapper[0].dataset.options)

        let minute = $qubelyTimePickerFormat.find('.qubely-form-timepicker-minute')[0].innerText
        let currentHourFormat = $qubelyTimePickerWrapper.find('.qubely-form-time-format')[0].innerText
        let hour = parseInt($qubelyTimePickerWrapper.find('.qubely-form-timepicker-hour')[0].innerText)

        if (minute < parseInt(minuteInterval)) {

            if (timeFormatType === 12 && hour === 12) {
                $qubelyTimePickerWrapper.find('.qubely-form-time-format')[0].innerText = currentHourFormat === 'AM' ? 'PM' : 'AM'
            }
            $qubelyTimePickerWrapper.find('.qubely-form-timepicker-hour')[0].innerText = timeFormatType === 12 ? (hour === 1 ? timeFormatType : hour - 1) : (hour === 0 ? timeFormatType : hour - 1)
            $qubelyTimePickerFormat.find('.qubely-form-timepicker-minute')[0].innerText = (minute - minuteInterval) === 0 ? 0 : 60 + (minute - minuteInterval)

        } else {
            $qubelyTimePickerFormat.find('.qubely-form-timepicker-minute')[0].innerText = parseInt(minute) - parseInt(minuteInterval)
        }

    })

    //hour 
    $('.qubely-hour-button-up').on('click', function (event) {

        let $qubelyTimePickerFormat = $(this).parent();
        let $qubelyTimePickerWrapper = $qubelyTimePickerFormat.parent()

        const {
            timeFormatType
        } = JSON.parse($qubelyTimePickerWrapper[0].dataset.options)

        let currentHourFormat = $qubelyTimePickerWrapper.find('.qubely-form-time-format')[0].innerText
        let hour = parseInt($qubelyTimePickerWrapper.find('.qubely-form-timepicker-hour')[0].innerText)

        if (timeFormatType === 12 && hour === 11) {
            $qubelyTimePickerWrapper.find('.qubely-form-time-format')[0].innerText = currentHourFormat === 'AM' ? 'PM' : 'AM'
        }
        $qubelyTimePickerWrapper.find('.qubely-form-timepicker-hour')[0].innerText = hour === timeFormatType ? (timeFormatType === 12 ? 1 : 0) : hour + 1

    })
    $('.qubely-hour-button-down').on('click', function (event) {

        let $qubelyTimePickerFormat = $(this).parent();
        let $qubelyTimePickerWrapper = $qubelyTimePickerFormat.parent()

        const {
            timeFormatType
        } = JSON.parse($qubelyTimePickerWrapper[0].dataset.options)

        let currentHourFormat = $qubelyTimePickerWrapper.find('.qubely-form-time-format')[0].innerText
        let hour = parseInt($qubelyTimePickerWrapper.find('.qubely-form-timepicker-hour')[0].innerText)

        if (timeFormatType === 12 && (hour === 12 || hour === 1)) {
            $qubelyTimePickerWrapper.find('.qubely-form-time-format')[0].innerText = currentHourFormat === 'AM' ? 'PM' : 'AM'
        }
        $qubelyTimePickerWrapper.find('.qubely-form-timepicker-hour')[0].innerText = ((timeFormatType === 12 && hour === 1) || (timeFormatType === 23 && hour === 0)) ? timeFormatType : hour - 1

    })
})
