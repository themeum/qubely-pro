
const { __ } = wp.i18n
const { RichText } = wp.editor
const { Fragment } = wp.element



export default function Save(props) {

    const {
        attributes: {
            uniqueId,
            label,
            fieldSize,
            type,
            options,
            width,
            placeHolder,
            required,
            columns,
            hour,
            minute,

            //email
            emailConformation,
            conformationEmailLabel,

            //date
            dateFormat,

            minuteInterval,
            timeFormatType,

            //settings
            fieldName
        }
    } = props

    // let style;
    // if (Number.isFinite(width)) {
    //     style = { width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `90%` : width + '%' }
    // }

    const renderLabel = () => {
        return (
            <label className="qubely-form-label">
                <RichText.Content value={label} />
                {required && '*'}
            </label>
        )
    }

    const renderOptions = () => {
        return (
            <div className={`qubely-form-field qubely-form-${type} qubely-${type}-${columns}`} >
                {options.map((option, index) => {
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
                            placeholder={__('Confirmation Email')}
                            className={`qubely-form-field-label`}
                            value={conformationEmailLabel}
                        />
                        <input className={`qubely-form-field qubely-form-confirmation-email`} type={'email'} placeholder={__(placeHolder)} required={required} />
                    </Fragment>
                }
            </Fragment>
        )
    }


    const renderDatePicker = () => {
        let options = JSON.stringify({
            dateFormat: dateFormat,
        })
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
            <Fragment>
                <input type="text" className="qubely-time-picker" value={`12 : 00`} name={fieldName} />
                <div className={`qubely-form-timepicker`} data-options={options}>

                    <div className={`qubely-timePicker-hour`}>
                        <div className="qubely-timePicker-button qubely-hour-button-up"  >
                            <i className="fas fa-angle-up"></i>
                        </div>
                        <div className="qubely-form-timepicker-hour">12</div>

                        <div className="qubely-timePicker-button qubely-hour-button-down"   >
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </div>
                    <div className={`qubely-timePicker-minute`} >
                        <div className="qubely-timePicker-button qubely-minute-button-up"  >
                            <i className="fas fa-angle-up"></i>
                        </div>

                        <div className="qubely-form-timepicker-minute" >0</div>

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

                            <div className="qubely-form-time-format">PM</div>

                            <div className="qubely-timePicker-button qubely-hourformat-button"  >
                                <i className="fas fa-angle-down"></i>
                            </div>
                        </div>
                    }

                </div>
            </Fragment>
        )
    }

    const renderInput = () => {
        return (
            <Fragment>
                {
                    type === 'textarea' ?
                        <textarea className={`qubely-form-field qubely-form-textarea`} placeholder={__(placeHolder)} name={fieldName} required={required} />
                        :
                        type === 'dropdown' ?
                            <select className={`qubely-form-field qubely-form-${type}`} name={fieldName} >
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
            </Fragment>
        )
    }

    return (
        // <div className={`qubely-block-${uniqueId}`} style={style}>
        <div className={`qubely-block-${uniqueId}`}>
            <div className={`qubely-form-field-wrapper`}>

                {renderLabel()}
                {renderInput()}
            </div>
        </div>
    )

}

