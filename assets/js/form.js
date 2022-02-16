jQuery(function ($) {
	$(document).click(function (event) {
		$target = $(event.target);
		if (
			!$target.parents(".qubely-form-timepicker.qubely-active").length &&
			!$target.hasClass("qubely-time-picker")
		) {
			$(".qubely-form-timepicker.qubely-active").removeClass("qubely-active");
		}
	});

	if ($(".qubely-datepicker").length > 0) {
		$(".qubely-datepicker").each(function () {
			let dateFormat = JSON.parse($(this).parent()[0].dataset.options).dateFormat;
			$(this).datepicker({
				dateFormat: dateFormat,
				duration: "fast",
				changeMonth: true,
				changeYear: true,
				separator: " T ",
			});
		});
	}

	//Time Picker BLOCK
	$(".qubely-time-picker").on("click", function (event) {
		let $qubelyTimePicker = $(this).parent();
		if ($qubelyTimePicker.find(".qubely-form-timepicker.qubely-active").length > 0) {
			$qubelyTimePicker.find(".qubely-form-timepicker.qubely-active").removeClass("qubely-active");
		} else {
			$qubelyTimePicker.find(".qubely-form-timepicker").addClass("qubely-active");
			changeTimepickerValue($(this));
		}
	});

	$(".qubely-hourformat-button").on("click", function (event) {
		let $qubelyTimePickerFormat = $(this).parent();
		let currentHourFormat = $qubelyTimePickerFormat.find(".qubely-form-time-format")[0].innerText;
		$qubelyTimePickerFormat.find(".qubely-form-time-format")[0].innerText =
			currentHourFormat === "PM" ? "AM" : "PM";

		changeTimepickerValue($qubelyTimePickerFormat);
	});

	//append zero when number <10
	function addZeroPrefix(number) {
		return number < 10 ? "0" + number : number;
	}

	//change timepicker input field value
	function changeTimepickerValue($element) {
		let $qubelyTimePicker = $element.parents(".qubely-form-timepicker-wrapper").find(".qubely-time-picker");
		let meridian = JSON.parse(
			$element.parents(".qubely-form-timepicker-wrapper").find(".qubely-form-timepicker")[0].dataset.options
		).timeFormatType;
		let hour = $element
			.parents(".qubely-form-timepicker-wrapper")
			.find(".qubely-form-timepicker-hour")[0].innerText;
		let min = $element
			.parents(".qubely-form-timepicker-wrapper")
			.find(".qubely-form-timepicker-minute")[0].innerText;
		let format =
			meridian === 12
				? $element.parents(".qubely-form-timepicker-wrapper").find(".qubely-form-time-format")[0].innerText
				: null;

		$qubelyTimePicker.val(`${hour}:${min}${meridian === 12 ? ` ${format}` : ""}`);
	}

	$(".qubely-minute-button-up").on("click", function (event) {
		let $qubelyTimePickerFormat = $(this).parent();
		let $qubelyTimePickerWrapper = $qubelyTimePickerFormat.parent();

		const { minuteInterval, timeFormatType } = JSON.parse($qubelyTimePickerWrapper[0].dataset.options);

		let minute = $qubelyTimePickerFormat.find(".qubely-form-timepicker-minute")[0].innerText;
		let currentHourFormat =
			timeFormatType === 12 ? $qubelyTimePickerWrapper.find(".qubely-form-time-format")[0].innerText : null;
		let hour = parseInt($qubelyTimePickerWrapper.find(".qubely-form-timepicker-hour")[0].innerText);

		if (minute >= 60 - parseInt(minuteInterval)) {
			if (timeFormatType === 12 && hour === 11) {
				$qubelyTimePickerWrapper.find(".qubely-form-time-format")[0].innerText =
					currentHourFormat === "AM" ? "PM" : "AM";
			}
			$qubelyTimePickerWrapper.find(".qubely-form-timepicker-hour")[0].innerText = addZeroPrefix(
				hour === timeFormatType ? (timeFormatType === 12 ? 1 : 0) : hour + 1
			);
			$qubelyTimePickerFormat.find(".qubely-form-timepicker-minute")[0].innerText = addZeroPrefix(
				(parseInt(minute) + parseInt(minuteInterval)) % 60
			);
		} else {
			$qubelyTimePickerFormat.find(".qubely-form-timepicker-minute")[0].innerText = addZeroPrefix(
				parseInt(minute) + parseInt(minuteInterval)
			);
		}

		changeTimepickerValue($qubelyTimePickerFormat);
	});

	$(".qubely-minute-button-down").on("click", function (event) {
		let $qubelyTimePickerFormat = $(this).parent();
		let $qubelyTimePickerWrapper = $qubelyTimePickerFormat.parent();

		const { minuteInterval, timeFormatType } = JSON.parse($qubelyTimePickerWrapper[0].dataset.options);

		let minute = $qubelyTimePickerFormat.find(".qubely-form-timepicker-minute")[0].innerText;
		let currentHourFormat =
			timeFormatType === 12 ? $qubelyTimePickerWrapper.find(".qubely-form-time-format")[0].innerText : null;
		let hour = parseInt($qubelyTimePickerWrapper.find(".qubely-form-timepicker-hour")[0].innerText);

		if (minute < parseInt(minuteInterval)) {
			if (timeFormatType === 12 && hour === 12) {
				$qubelyTimePickerWrapper.find(".qubely-form-time-format")[0].innerText =
					currentHourFormat === "AM" ? "PM" : "AM";
			}
			$qubelyTimePickerWrapper.find(".qubely-form-timepicker-hour")[0].innerText = addZeroPrefix(
				timeFormatType === 12
					? hour === 1
						? timeFormatType
						: hour - 1
					: hour === 0
					? timeFormatType
					: hour - 1
			);
			$qubelyTimePickerFormat.find(".qubely-form-timepicker-minute")[0].innerText = addZeroPrefix(
				minute - minuteInterval === 0 ? 0 : 60 + (minute - minuteInterval)
			);
		} else {
			$qubelyTimePickerFormat.find(".qubely-form-timepicker-minute")[0].innerText = addZeroPrefix(
				parseInt(minute) - parseInt(minuteInterval)
			);
		}

		changeTimepickerValue($qubelyTimePickerFormat);
	});

	//hour
	$(".qubely-hour-button-up").on("click", function (event) {
		let $qubelyTimePickerFormat = $(this).parent();
		let $qubelyTimePickerWrapper = $qubelyTimePickerFormat.parent();

		const { timeFormatType } = JSON.parse($qubelyTimePickerWrapper[0].dataset.options);

		let currentHourFormat =
			timeFormatType === 12 ? $qubelyTimePickerWrapper.find(".qubely-form-time-format")[0].innerText : null;
		let hour = parseInt($qubelyTimePickerWrapper.find(".qubely-form-timepicker-hour")[0].innerText);

		if (timeFormatType === 12 && hour === 11) {
			$qubelyTimePickerWrapper.find(".qubely-form-time-format")[0].innerText =
				currentHourFormat === "AM" ? "PM" : "AM";
		}
		$qubelyTimePickerWrapper.find(".qubely-form-timepicker-hour")[0].innerText = addZeroPrefix(
			hour === timeFormatType ? (timeFormatType === 12 ? 1 : 0) : hour + 1
		);

		changeTimepickerValue($qubelyTimePickerFormat);
	});

	$(".qubely-hour-button-down").on("click", function (event) {
		let $qubelyTimePickerFormat = $(this).parent();
		let $qubelyTimePickerWrapper = $qubelyTimePickerFormat.parent();

		const { timeFormatType } = JSON.parse($qubelyTimePickerWrapper[0].dataset.options);

		let currentHourFormat =
			timeFormatType === 12 ? $qubelyTimePickerWrapper.find(".qubely-form-time-format")[0].innerText : null;
		let hour = parseInt($qubelyTimePickerWrapper.find(".qubely-form-timepicker-hour")[0].innerText);

		if (timeFormatType === 12 && (hour === 12 || hour === 1)) {
			$qubelyTimePickerWrapper.find(".qubely-form-time-format")[0].innerText =
				currentHourFormat === "AM" ? "PM" : "AM";
		}
		$qubelyTimePickerWrapper.find(".qubely-form-timepicker-hour")[0].innerText = addZeroPrefix(
			(timeFormatType === 12 && hour === 1) || (timeFormatType === 23 && hour === 0) ? timeFormatType : hour - 1
		);

		changeTimepickerValue($qubelyTimePickerFormat);
	});

	//FORM BLOCK
	$(".qubely-block-form form.qubely-form:not(.qubely-form-ready)").each(function () {
		const $form = $(this);
		$form.addClass("qubely-form-ready");
		$form.find("input.qubely-form-field").on("keydown", (e) => {
			if (e.which === 13) {
				e.preventDefault();
				return false;
			}
		});
		checkFormValidation($form, true); //add validation

		// FORM SUBMIT EVENT
		$form.submit((e) => {
			e.preventDefault();
			let formData = $form.serializeArray();
			formData.push({ name: "security", value: qubely_urls.nonce });
			const isRequired = checkFormValidation($form); //check validation
			let mcListId,
				isNewsletter = false,
				isMailchimp = false,
				newsletterData = {
					email_address: "",
					data: {},
				},
				endPoint = qubely_urls.ajax + "?action=qubely_send_form_data";

			if ($form.hasClass("mailchimp")) {
				isNewsletter = true;
				isMailchimp = true;
			}
			if (isNewsletter && isMailchimp) {
				const {
					mailchimp,
					mailchimp: { mcFields },
				} = $form.data();
				mcListId = mailchimp.mcListId;
				endPoint = qubely_urls.ajax + "?action=qubely_mc_add_subs";

				formData
					.filter(({ name, value }) => name.includes("qubely-form-input"))
					.forEach(({ name, value }) => {
						let key;
						if (name.match(/\[(.*?)\]/)) {
							key = name.match(/\[(.*?)\]/)[1].replace("*", "");
						}
						if (typeof mcFields[key] !== "undefined") {
							if (mcFields[key] === "email") {
								newsletterData.email_address = value;
							} else {
								newsletterData.data[[mcFields[key]]] = value;
							}
						}
					});
			}

			const beforeSending = (msg) => {
				$form.find('button[type="submit"]').addClass("disable").attr("disabled", true);
				$form.find(".qubely-form-message").html(`<div class="qubely-alert qubely-alert-info">${msg}</div>`);
			};
			const onError = (jqxhr, textStatus, error) => {
				$form.find('button[type="submit"]').removeClass("disable").attr("disabled", false);
				$form
					.find(".qubely-form-message")
					.html(
						`<div class= "qubely-alert qubely-alert-danger" > ${textStatus} : ${error} - ${jqxhr.responseJSON}</div> `
					);
			};
			const onSuccess = (response) => {
				$form.find('button[type="submit"]').removeClass("disable").attr("disabled", false);
				setTimeout(() => $form.find(".qubely-form-message").html(""), 4000);
				if (response.success === true && response.data.status === 1) {
					$form.trigger("reset");
					$form
						.find(".qubely-form-message")
						.html(`<div class="qubely-alert qubely-alert-success">${response.data.msg}</div>`);
				} else {
					$form.find('button[type="submit"]').removeClass("disable").attr("disabled", false);
					$form
						.find(".qubely-form-message")
						.html(`<div class="qubely-alert qubely-alert-danger">${response.data.msg}</div>`);
				}
			};

			if (!isRequired) {
				formData.push({
					name: "captcha",
					value: typeof grecaptcha !== "undefined" ? grecaptcha.getResponse() : undefined,
				});

				if (isNewsletter) {
					var data = JSON.stringify({
						list: mcListId,
						fields: {
							status: "subscribed", // pending
							email_address: newsletterData.email_address,
							merge_fields: {
								...newsletterData.data,
							},
						},
					});

					$.ajax({
						url: endPoint,
						type: "post",
						dataType: "json",
						contentType: "application/json",
						success: function (data) {
							console.log("data : ", data);
						},
						data,
						beforeSend: () => beforeSending("Subscribing"),
						success: (response) => onSuccess(response),
						error: (jqxhr, textStatus, error) => onError(jqxhr, textStatus, error),
					});
				} else {
					jQuery.ajax({
						url: endPoint,
						type: "POST",
						data: formData,
						beforeSend: () => beforeSending("Message sending..."),
						success: (response) => onSuccess(response),
						error: (jqxhr, textStatus, error) => onError(jqxhr, textStatus, error),
					});
				}
			}
		});
	});

	//FORM VALIDATION
	function checkFormValidation($form) {
		const fieldErrorMessage = $form.find('input[name="field-error-message"]').val();
		let onChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		let isRequired = false;
		$form
			.find(
				" input[type=text],input[type=number], input[type=email], input[type=radio], input[type=checkbox], textarea, select"
			)
			.each(function () {
				if (onChange === true) {
					$(this).on("change keyup", function () {
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
		const $parent = $field.parents(".qubely-form-field-wrapper");
		fieldErrorMessage = `<p class="qubely-form-required-field"> ${fieldErrorMessage}</p>`;
		confirmEmailErrorMessage = "<p class='qubely-form-confirmation-email-error'> Email doesn't match</p>";

		const hasNoError = $parent.find("p.qubely-form-required-field").length === 0;

		if (typeof $field.prop("required") !== "undefined") {
			if ($field.attr("type") === "email") {
				const $parenField = $field.parents(".qubely-form-field-wrapper");

				if ($parenField.find(".qubely-form-confirmation-email").length > 0) {
					let confirmationEmailFlag = $parenField.find(".qubely-form-confirmation-email-error").length === 0;

					if (validateEmail($field.val())) {
						$parenField.find("p.qubely-form-required-field").remove();
					} else if (hasNoError) {
						$parent.append(fieldErrorMessage);
					}

					if ($parenField.find(".qubely-form-field.qubely-form-email")[0].value === $field[0].value) {
						$parenField.find("p.qubely-form-confirmation-email-error").remove();
						return (isRequired = false);
					} else {
						confirmationEmailFlag && $parent.append(confirmEmailErrorMessage);
						return (isRequired = true);
					}
				} else if (!validateEmail($field.val())) {
					hasNoError && $parent.append(fieldErrorMessage);
					return (isRequired = true);
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
		if ($field.attr("type") === "radio" || $field.attr("type") === "checkbox") {
			const parentElem = $field.parent().parent();
			if (parentElem.attr("data-required") == "true") {
				if (parentElem.find("input:checked").length === 0) {
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
		var regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	}
});
