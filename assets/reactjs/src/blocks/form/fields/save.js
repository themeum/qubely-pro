
const { __ } = wp.i18n
const { RichText } = wp.editor
const { Fragment } = wp.element



export default function Save(props) {

    const {
        attributes: {
            uniqueId,
            label,
            type,
            options,
            placeHolder,
            required,
            columns,

            //email
            emailConformation,
            conformationEmailLabel,

            //date
            dateFormat,

            minuteInterval,
            timeFormatType,
            seletedTimeFormat,

            //settings
            fieldName
        }
    } = props



    const renderOptions = () => {
        return (
            <div className={`qubely-form-field qubely-form-${type} qubely-${type}-${columns}`} >
                {options.map(option => {
                    return (
                        <div className={`qubely-form-field-${type}-option`}>
                            <input type={type} id={option} value={option} />
                            <RichText.Content
                                placeholder={__('option')}
                                className={`qubely-${type}-option`}
                                value={option}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }


    const renderEmailField = () => {

        return (
            <Fragment>
                <input className={`qubely-form-field qubely-form-email`} type={'email'} placeholder={__(placeHolder)} required={required} name={fieldName} />
                {emailConformation &&
                    <Fragment>
                        <RichText.Content
                            className={`qubely-form-field-label`}
                            value={conformationEmailLabel}
                        />
                        <input className={`qubely-form-field qubely-form-confirmation-email`} type={'email'} placeholder={__(placeHolder)} required={required} name={`confirmation-${fieldName}`} />
                    </Fragment>
                }
            </Fragment>
        )
    }


    const renderDatePicker = () => {
        let options = JSON.stringify({ dateFormat: dateFormat })
        return (
            <div class="qubely-date-picker-wrapper" data-options={options}>
                <input type="text" className="qubely-form-field qubely-datepicker" autocomplete="off" placeholder={__(dateFormat)} name={fieldName} />
            </div>
        )
    }
    const renderTimePicker = () => {

        let options = JSON.stringify(
            {
                minuteInterval,
                timeFormatType
            }
        )
        return (
            <div className="qubely-form-timepicker-wrapper">
                <input type="text" className="qubely-time-picker" value={`12 : 00 ${timeFormatType === 12 ? `${seletedTimeFormat}` : ''}`} name={fieldName} />
                <div className={`qubely-form-timepicker`} data-options={options}>

                    <div className={`qubely-timePicker-hour`}>
                        <div className="qubely-timePicker-button qubely-hour-button-up"  >
                            <i className="fas fa-angle-up"></i>
                        </div>
                        <div className="qubely-form-timepicker-hour">{__('12')}</div>

                        <div className="qubely-timePicker-button qubely-hour-button-down"   >
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </div>
                    <div className={`qubely-timePicker-minute`} >
                        <div className="qubely-timePicker-button qubely-minute-button-up"  >
                            <i className="fas fa-angle-up"></i>
                        </div>

                        <div className="qubely-form-timepicker-minute" >{__('00')}</div>

                        <div className="qubely-timePicker-button qubely-minute-button-down"  >
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </div>

                    {
                        timeFormatType === 12 &&
                        <div className={`qubely-timePicker-time-format`}>
                            <div className="qubely-timePicker-button qubely-hourformat-button" >
                                <i className="fas fa-angle-up"></i>
                            </div>

                            <div className="qubely-form-time-format">{__('PM')}</div>

                            <div className="qubely-timePicker-button qubely-hourformat-button"  >
                                <i className="fas fa-angle-down"></i>
                            </div>
                        </div>
                    }

                </div>
            </div>
        )
    }


    return (
        <div className={`qubely-block-${uniqueId}`}>
            <div className={`qubely-form-field-wrapper`}>

                <label className="qubely-form-label">
                    <RichText.Content value={label} />
                    {required && <span className="qubely-from-field-required-sign">*</span>}
                </label>

                {/** input fields */}
                {
                    type === 'textarea' ?
                        <textarea className={`qubely-form-field qubely-form-textarea`} placeholder={__(placeHolder)} name={fieldName} required={required} />
                        :
                        type === 'dropdown' ?
                            <select className={`qubely-form-field qubely-form-dropdown`} name={fieldName} >
                                {options.map(option => <option value={option}>{option}</option>)}
                            </select>
                            :
                            (type === 'radio' || type === 'checkbox') ?
                                renderOptions()
                                :
                                type === 'date' ?
                                    renderDatePicker()
                                    :
                                    type === 'time' ?
                                        renderTimePicker()
                                        :
                                        type === 'email' ?
                                            renderEmailField()
                                            :
                                            <input className={`qubely-form-field qubely-form-${type}`} type={type} name={fieldName} placeholder={__(placeHolder)} required={required} />
                }
            </div>
        </div>
    )

}

