const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;
const { Fragment } = wp.element;

export default function Save(props) {
	const {
		attributes: {
			uniqueId,
			showLabel,
			label,
			labelAlignment,
			type,
			options,
			placeHolder,
			required,
			columns,
			emailConformation,
			conformationEmailLabel,
			dateFormat,
			minuteInterval,
			timeFormatType,
			fieldName,
		},
	} = props;

	const renderOptions = () => {
		return (
			<div className={`qubely-form-field qubely-form-${type} qubely-${type}-${columns}`} data-required={required}>
				{options.map((option, index) => {
					return (
						<div className={`qubely-form-field-${type}-option`}>
							<input
								type={type}
								id={`${uniqueId}${index}`}
								value={option}
								name={`qubely-form-input[${fieldName}${required ? "*" : ""}]`}
							/>
							<RichText.Content
								tagName="label"
								placeholder={__("option")}
								className={`qubely-${type}-option`}
								value={option}
								for={`${uniqueId}${index}`}
							/>
						</div>
					);
				})}
			</div>
		);
	};

	const renderEmailField = () => {
		return (
			<Fragment>
				<input
					className={`qubely-form-field qubely-form-email`}
					type={"email"}
					placeholder={__(placeHolder)}
					required={required}
					id={uniqueId}
					name={`qubely-form-input[${fieldName}${required ? "*" : ""}]`}
				/>
				{emailConformation && (
					<Fragment>
						<label className="qubely-form-label" for={`confirmation-${uniqueId}`}>
							<RichText.Content
								tagName="div"
								value={conformationEmailLabel}
								className="qubely-form-field-label qubely-confirmation-email"
							/>
							{required && <span className="qubely-from-field-required-sign">*</span>}
						</label>
						<input
							className={`qubely-form-field qubely-form-confirmation-email`}
							type={"email"}
							placeholder={__(placeHolder)}
							required={required}
							id={`confirmation-${uniqueId}`}
							name={`qubely-form-input[confirmation-${fieldName}${required ? "*" : ""}]`}
						/>
					</Fragment>
				)}
			</Fragment>
		);
	};

	const renderDatePicker = () => {
		let options = JSON.stringify({ dateFormat: dateFormat });
		return (
			<div className={`qubely-date-picker-wrapper`} data-options={encodeURIComponent(options)}>
				<input
					type="text"
					className="qubely-form-field qubely-datepicker"
					autocomplete="off"
					placeholder={__(placeHolder)}
					id={uniqueId}
					name={`qubely-form-input[${fieldName}${required ? "*" : ""}]`}
					readonly
				/>
			</div>
		);
	};
	const renderTimePicker = () => {
		let options = JSON.stringify({
			minuteInterval,
			timeFormatType,
		});
		return (
			<div className="qubely-form-timepicker-wrapper">
				<input
					type="text"
					className={`qubely-form-field qubely-time-picker`}
					placeholder={__(timeFormatType === 12 ? "12:00 PM" : "23:00")}
					id={uniqueId}
					name={`qubely-form-input[${fieldName}${required ? "*" : ""}]`}
					readonly
				/>
				<div className={`qubely-form-timepicker`} data-options={encodeURIComponent(options)}>
					<div className={`qubely-timePicker-hour`}>
						<div className="qubely-timePicker-button qubely-hour-button-up">
							<i className="fas fa-angle-up" />
						</div>
						<div className="qubely-form-timepicker-hour">{__("12")}</div>

						<div className="qubely-timePicker-button qubely-hour-button-down">
							<i className="fas fa-angle-down" />
						</div>
					</div>
					<div className={`qubely-timePicker-minute`}>
						<div className="qubely-timePicker-button qubely-minute-button-up">
							<i className="fas fa-angle-up" />
						</div>

						<div className="qubely-form-timepicker-minute">{__("00")}</div>

						<div className="qubely-timePicker-button qubely-minute-button-down">
							<i className="fas fa-angle-down" />
						</div>
					</div>

					{timeFormatType === 12 && (
						<div className={`qubely-timePicker-time-format`}>
							<div className="qubely-timePicker-button qubely-hourformat-button">
								<i className="fas fa-angle-up" />
							</div>

							<div className="qubely-form-time-format">{__("PM")}</div>

							<div className="qubely-timePicker-button qubely-hourformat-button">
								<i className="fas fa-angle-down" />
							</div>
						</div>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className={`qubely-block-${uniqueId}`}>
			<div className={`qubely-form-field-wrapper label-alignment-${labelAlignment}`}>
				{showLabel && (
					<label className="qubely-form-label" for={uniqueId}>
						<RichText.Content tagName="div" value={label} className="qubely-form-field-label" />
						{required && <span className="qubely-from-field-required-sign">*</span>}
					</label>
				)}

				{/** input fields */}
				{type === "textarea" ? (
					<textarea
						className={`qubely-form-field qubely-form-textarea`}
						placeholder={__(placeHolder)}
						id={uniqueId}
						name={`qubely-form-input[${fieldName}${required ? "*" : ""}]`}
						required={required}
					/>
				) : type === "dropdown" ? (
					<select
						className={`qubely-form-field qubely-form-dropdown`}
						id={uniqueId}
						name={`qubely-form-input[${fieldName}${required ? "*" : ""}]`}
					>
						{options.map((option) => (
							<option value={option}>{option}</option>
						))}
					</select>
				) : type === "radio" || type === "checkbox" ? (
					renderOptions()
				) : type === "date" ? (
					renderDatePicker()
				) : type === "time" ? (
					renderTimePicker()
				) : type === "email" ? (
					renderEmailField()
				) : (
					<input
						className={`qubely-form-field qubely-form-${type}`}
						type={type}
						id={uniqueId}
						name={`qubely-form-input[${fieldName}${required ? "*" : ""}]`}
						placeholder={__(placeHolder)}
						required={required}
					/>
				)}
			</div>
		</div>
	);
}
