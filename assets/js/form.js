
jQuery(document).ready(function ($) {

    if ($('.qubely-datepicker').length > 0) {
        let indexOfCounterElement = 0
        const datePickerlWrapper = $('.qubely-datepicker')

        while (indexOfCounterElement < datePickerlWrapper.length) {
            let dateFormat = JSON.parse($('.qubely-datepicker').eq(indexOfCounterElement).parent()[indexOfCounterElement].dataset.options).dateFormat

            $('.qubely-datepicker').eq(indexOfCounterElement).datepicker({
                dateFormat: dateFormat,
                duration: "fast",
                changeMonth: true,
                changeYear: true,
                separator: ' T '
            });
            indexOfCounterElement++
        }

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
<<<<<<< HEAD
=======


    //FORM BLOCK
    $('form.qubely-form:not(.qubely-form-ready)').each(function () {

        const $form = $(this);
        $form.addClass('qubely-form-ready');

        $form.find('input.qubely-form-field').on('keydown', (e) => {
            if (e.which === 13) { e.preventDefault(); return false; };
        });
        checkFormValidation($form, true); //add validation
        const reCaptcha = $form.find('input[name="recaptcha"]').val();
        const reCaptchaSiteKey = $form.find('input[name="recaptcha-site-key"]').val();
        if (reCaptcha == 'true') {
            const apiURL = 'https://www.google.com/recaptcha/api.js?onload=initGoogleReChaptcha&render=explicit';
            loadScriptAsync(apiURL).then(() => {
                window.initGoogleReChaptcha = () => {
                    const qubelyContactForms = document.querySelectorAll('.qubely-block-form form .qubely-google-recaptcha');
                    qubelyContactForms.forEach((form) => {
                        grecaptcha.render(form, {
                            sitekey: reCaptchaSiteKey
                        });
                    });
                };
            });
        }
        // FORM SUBMIT EVENT
        $form.submit((e) => {
            e.preventDefault();
            let formData = $form.serializeArray();
            const isRequired = checkFormValidation($form); //check validation
            if (!isRequired) {
                formData.push({ name: 'captcha', value: (typeof grecaptcha !== "undefined") ? grecaptcha.getResponse() : undefined });
                jQuery.ajax({
                    url: qubely_urls.ajax + '?action=qubely_send_form_data',
                    type: "POST",
                    data: formData,
                    beforeSend: () => {
                        $form.find('button[type="submit"]').addClass('disable').attr('disabled', true);
                        $form.find(".qubely-form-message").html('<div class="qubely-alert qubely-alert-info">Message sending...</div>');
                    },
                    success: (response) => {
                        $form.find('button[type="submit"]').removeClass('disable').attr('disabled', false);
                        $form.find(".qubely-form-message").html(`<div class="qubely-alert qubely-alert-success">${response.data.msg}</div>`);
                        setTimeout(() => $form.find('.qubely-form-message').html(''), 4000);
                        if (response.data.status == 1) $form.trigger("reset");
                    },
                    error: (jqxhr, textStatus, error) => {
                        $form.find('button[type="submit"]').removeClass('disable').attr('disabled', false);
                        $form.find(".qubely-form-message").html(`<div class="qubely-alert qubely-alert-danger">${textStatus} : ${error} - ${jqxhr.responseJSON}</div>`);
                    }
                });
            }
        });
    });

    //FORM VALIDATION
    function checkFormValidation($form) {
        const fieldErrorMessage = atob($form.find('input[name="field-error-message"]').val());
        let onChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        let isRequired = false;
        $form.find(' input[type=text],input[type=number], input[type=email], input[type=radio], input[type=checkbox], textarea, select').each(function () {
            if (onChange === true) {
                $(this).on('change keyup', function () {
                    isRequired = checkFields($(this), fieldErrorMessage);
                    if (isRequired) return false;
                });
            } else {
                isRequired = checkFields($(this), fieldErrorMessage);
                if (isRequired) return false;
            }
        });
        return isRequired;
    }

    function checkFields($field, fieldErrorMessage) {
        let isRequired = false;
        const $parent = $field.parents('.qubely-form-field-wrapper');
        fieldErrorMessage = `<p class="qubely-form-required-field">${fieldErrorMessage}</p>`;
        const hasNoError = $parent.find("p.qubely-form-required-field").length === 0;

        if (typeof $field.prop('required') !== 'undefined') {
            if ($field.attr('type') === 'email') {
                if (!validateEmail($field.val())) {
                    if (hasNoError) {
                        $parent.append(fieldErrorMessage);
                    }
                    return isRequired = true;
                }
            }
            if ($field.val().length === 0) {
                if (hasNoError) {
                    $parent.append(fieldErrorMessage);
                }
                isRequired = true;
            }
            if ($field.val().length > 0) {
                $parent.find("p.qubely-form-required-field").remove();
                isRequired = false;
            }
        }
        if ($field.attr('type') === 'radio' || $field.attr('type') === 'checkbox') {
            const parentElem = $field.parent().parent();
            if (parentElem.attr('data-required') == 'true') {
                if (parentElem.find('input:checked').length === 0) {
                    if (hasNoError) {
                        $parent.append(fieldErrorMessage);
                    }
                    isRequired = true;
                } else {
                    $parent.find("p.qubely-form-required-field").remove();
                    isRequired = false;
                }
            }
        }
        return isRequired;
    }

    function validateEmail(email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }




>>>>>>> 631a47b689b6e2cdf0e5aeed9c5bf4d1ac8333dd
})
