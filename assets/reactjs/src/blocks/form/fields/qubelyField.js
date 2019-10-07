
const { __ } = wp.i18n
const { InspectorControls, RichText } = wp.editor
const { useState, useEffect, useRef, Fragment } = wp.element
const {
    DatePicker,
    DateTimePicker,
    Dropdown,
    TimePicker,
    PanelBody,
    TextControl,
    TextareaControl,
    RangeControl,
    Tooltip
} = wp.components


const {
    RadioAdvanced,
    Range,
    Separator,
    Toggle,
    CssGenerator: { CssGenerator }
} = wp.qubelyComponents



import './style.scss'

import FieldDefaults from './formDefaults'


const settings = {
    ...FieldDefaults,
    icon: 'forms',
    edit: props => Edit(props),
    save: props => Save(props)
}


const Edit = (props) => {

    // let newDate = new Date()
    const [device, changeDevice] = useState('md')
    const datePicker = useRef(null);
    const [date, setDate] = useState(new Date())
    const [year, setYear] = useState(date.getFullYear())
    // const [month, setMonth] = useState(newDate.getMonth() + 1)
    // const [day, setDay] = useState(date.getDate())
    const [dateString, setDateString] = useState()
    const [showTimePicker, setTimePicker] = useState(false)

    // const [dateSeparator, setDateSeparator] = useState('-')
    // const [olddate, setOldDate] = useState("2018-07-22")

    const [hour, setHour] = useState(12)
    const [minute, setMinute] = useState(0)
    // const [timeFormatType, changeTimeFormat] = useState('12Hours')
    const [seletedTimeFormat, changeseletedTimeFormat] = useState('PM')

    const [draggedItem, setDraggedItem] = useState(-1)
    const [draggedOverItem, setDraggedOverItem] = useState(-1)
    const [dropdownValue, setDropdownValue] = useState('')


    const {
        name,
        clientId,
        attributes,
        setAttributes,
        attributes: {
            uniqueId,
            fieldName,
            fieldSize,
            width,
            height,
            type,
            label,
            instruction,
            options,
            placeHolder,
            required,
            minuteInterval,
            timeFormatType,
        }
    } = props

    useEffect(() => {
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }

        $('.qubely-datepicker').datepicker({
            dateFormat: "dd-mm-yy",
            yearRange: `${year - 50}:${year + 10}`,
            duration: "fast",
            changeMonth: true,
            changeYear: true,
        });
        const currentField = $(`#block-${clientId}`)
        currentField.css({ width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `90%` : width + '%' })

    })

    const updateOptions = (type, index, newValue) => {
        let newOptions = [...options]
        if (type === 'add') {
            newOptions.push('New option')
        } else if (type === 'delete') {
            newOptions.splice(index, 1)
        } else if (type === 'update') {
            newOptions[index] = newValue
        }
        setAttributes({ options: newOptions })
    }

    const renderOptions = () => {
        return (
            <div className={`qubely-form-field qubely-form-${type}`} >
                {options.map((option, index) => {
                    return (
                        <div className={`qubely-form-field-${type}-option`}>
                            <input type={type} id={option} value={option} />
                            <RichText
                                placeholder={__('option')}
                                className={`qubely-${type}-option`}
                                value={option}
                                onChange={value => updateOptions('update', index, value)}
                            />
                            <Tooltip text={__('Delete this option')}>
                                <span className="qubely-action-remove-option" role="button" onClick={() => updateOptions('delete', index)}><i class="fas fa-times"></i></span>
                            </Tooltip>
                        </div>
                    )
                })}
                <div className={`qubely-action-add-option`} onClick={() => updateOptions('add')}>
                    <span class="qubely-option-add-icon">
                        <i className="fas fa-plus" />
                    </span>
                    <span className={`qubely-action-add-text`} > Add another </span>
                </div>
            </div>
        )
    }

    const renderDatePicker = () => {
        return (
            <div class="qubely-date-picker-wrapper">

                {/* <input
                    type="date"
                    id="qubely-form-date"
                    name="qubely-form-date"
                    value={dateString}
                    onChange={newDate => setDateString(newDate.target.value)}
                /> */}
                <input type="text" className="qubely-datepicker" ref={datePicker} autocomplete="off"></input>
            </div>
        )
    }

    const handleHourChange = () => {

    }

    const handleTimePicker = (type, actionType) => {

        if (type === 'hour') {
            if (actionType === 'increase') {

                (timeFormatType === 12 && hour === 11) && changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM')
                setHour(hour === 12 ? 1 : hour + 1)
            } else {
                (timeFormatType === 12 && (hour === 12 || hour === 1)) && changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM')
                setHour(hour === 1 ? 12 : hour - 1)
            }

        } else if (type === 'minute') {

            if (actionType === 'increase') {
                if (minute >= 60 - minuteInterval) {
                    (timeFormatType === 12 && hour === 11) && changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM')
                    setHour(hour + 1)
                    setMinute((minute + minuteInterval) % 60)

                } else {
                    setMinute(minute + minuteInterval)
                }
            } else {
                if (minute < minuteInterval) {
                    (timeFormatType === 12 && hour === 12) && changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM')
                    setHour(hour - 1)
                    setMinute((minute - minuteInterval) === 0 ? 0 : 60 + (minute - minuteInterval))
                } else {
                    setMinute(minute - minuteInterval)
                }
            }
        }
    }
    const renderTimePicker = () => {
        return (
            <Fragment>
                <input type="text" className="qubely-time-picker" onClick={() => setTimePicker(!showTimePicker)} />
                <div className={`qubely-form-timepicker${showTimePicker ? ' active' : ''}`}>

                    <div className={`qubely-timepiker-hour`}>
                        <div className="qubely-timepiker-button button-up"
                            onClick={() => handleTimePicker('hour', 'increase')}
                        >
                            <i className="fas fa-angle-up"></i>
                        </div>
                        <div className="qubely-form-timepicker-hour">{hour}</div>

                        <div className="qubely-timepiker-button button-down"
                            onClick={() => handleTimePicker('hour', 'decrease')}
                        >
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </div>
                    <div className={`qubely-timepiker-minute`}   >
                        <div className="qubely-timepiker-button button-up"
                            onClick={() => handleTimePicker('minute', 'increase')}
                        >
                            <i className="fas fa-angle-up"></i>
                        </div>

                        <div className="qubely-form-timepicker-minute" >{minute}</div>

                        <div className="qubely-timepiker-button button-down"
                            onClick={() => handleTimePicker('minute', 'decrease')}
                        >
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </div>

                    {
                        timeFormatType === 12 &&
                        <div className={`qubely-timepiker-time-format`}>
                            <div className="qubely-timepiker-button button-up"
                                onClick={() => changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM')}
                            >
                                <i className="fas fa-angle-up"></i>
                            </div>

                            <div className="qubely-form-time-format">{seletedTimeFormat}</div>

                            <div className="qubely-timepiker-button button-down"
                                onClick={() => changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM')}
                            >
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

                        <textarea className={`qubely-form-field qubely-form-textarea`} placeholder={__(placeHolder)} required={required} />
                        :
                        type === 'dropdown' ?
                            <select className={`qubely-form-field qubely-form-dropdown`} value={dropdownValue} onChange={event => setDropdownValue(event.target.value)}>
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
                                        <input className={`qubely-form-field qubely-form-${type}`} type={type} placeholder={__(placeHolder)} required={required} />
                }
            </Fragment>
        )
    }

    const renderCommonSettings = () => {
        return (
            <Fragment>
                <TextControl
                    label={__('Label')}
                    value={label}
                    onChange={value => setAttributes({ label: value })}
                />
                <TextareaControl
                    label={__('Instructions')}
                    value={instruction}
                    onChange={value => setAttributes({ instruction: value })}
                />
                <TextControl
                    label={__('Name')}
                    value={fieldName}
                    onChange={value => setAttributes({ fieldName: value })}
                    help={__('You must write field name with hyphen(-) with lowercase. No space, UPPERCASE, Capitalize is not allowed. This name should match with Form template value. Never keep empty this name.')}
                />
            </Fragment>
        )
    }



    const handleDragEnd = () => {
        let newOptions = [...options]

        newOptions[draggedOverItem] = options[draggedItem]
        newOptions[draggedItem] = options[draggedOverItem]

        setAttributes({ options: newOptions })
        setDraggedItem(-1)
        setDraggedOverItem(-1)
    }

    const blockname = name.split('/')[1]

    if (uniqueId) { CssGenerator(attributes, blockname, uniqueId) }
    return (
        <Fragment>

            <InspectorControls>
                <PanelBody title={__('Form-field Settings')} opened={true}>
                    {
                        name === 'qubely/formfield-textarea' &&
                        <Range
                            min={50}
                            max={600}
                            responsive
                            value={height}
                            device={device}
                            label={__('Height')}
                            unit={['px', 'em', '%']}
                            onChange={value => setAttributes({ height: value })}
                            onDeviceChange={value => changeDevice(value)} />
                    }
                </PanelBody>
                {
                    name === 'qubely/formfield-dropdown' &&
                    <PanelBody title={__('Dropdown')} initialOpen={true}>
                        {renderCommonSettings()}

                        <RadioAdvanced
                            label={__('Field Size')}
                            options={[
                                { label: 'S', value: 'small', title: 'Small' },
                                { label: 'M', value: 'medium', title: 'Medium' },
                                { label: 'L', value: 'large', title: 'Large' },
                                { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }
                            ]}
                            value={fieldSize}
                            onChange={value => setAttributes({ fieldSize: value })} />

                        {
                            fieldSize === 'custom' &&
                            <RangeControl
                                label={__('Percentage width')}
                                value={width || ''}
                                onChange={value => setAttributes({ width: value })}
                                min={0}
                                max={100}
                                required
                                allowReset
                            />}

                        <Fragment>
                            <label className={`qubely-form-field`}>Dropdown Options</label>
                            {options.map((option, index) => {
                                return (
                                    <div
                                        draggable
                                        onDragEnd={() => handleDragEnd()}
                                        onDragOver={() => setDraggedOverItem(index)}
                                        onDragqubely-form-date={() => setDraggedItem(index)}
                                        className={`qubely-dropdown-field-option qubely-option-${index}`}
                                    >
                                        <span class="qubely-option-move-icon">
                                            <i className="fa fa-bars" />
                                        </span>

                                        <RichText
                                            placeholder={__('option')}
                                            className={`qubely-option`}
                                            value={option}
                                            onChange={value => updateOptions('update', index, value)}
                                        />
                                    </div>
                                )
                            })}
                            <div className={`qubely-dropdown-add-field-option`}  >
                                <span class="qubely-option-move-icon">
                                    <i className="fas fa-plus-circle" />
                                </span>

                                <span className={`qubely-action-add-option`} onClick={() => updateOptions('add')}>  Add new item </span>
                            </div>

                        </Fragment>

                        <Separator />

                        < Toggle
                            label={__('Required')}
                            value={required}
                            onChange={value => setAttributes({ required: value })} />

                    </PanelBody>

                }



            </InspectorControls>

            <div className={`qubely-block-${uniqueId}`}>
                <div className={`qubely-form-field-wrapper`}>
                    <RichText
                        placeholder={__('Input label')}
                        className={`qubely-form-field-label`}
                        value={label}
                        onChange={value => setAttributes({ label: value })}
                    />
                    {renderInput()}
                </div>
            </div>

        </Fragment>
    )

}

const Save = (props) => {

    const {
        attributes: {
            uniqueId,
            label,
            fieldSize,
            type,
            options,
            width,
            placeHolder,
            required
        }
    } = props

    let date = `2019-10-09`
    let style;
    if (Number.isFinite(width)) {
        style = { width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `90%` : width + '%' }
    }

    const renderInput = () => {
        return (
            <Fragment>
                {
                    type === 'textarea' ?
                        <textarea className={`qubely-form-field qubely-form-textarea`} placeholder={__(placeHolder)} required={required} />
                        :
                        type === 'dropdown' ?
                            <select className={`qubely-form-field qubely-form-${type}`} >
                                {options.map(option => <option value={option}>{option}</option>)}
                            </select>
                            :
                            (type === 'radio' || type === 'checkbox') ?
                                renderOptions()
                                :
                                type === 'date' ?
                                    renderDatePicker()
                                    :
                                    <input className={`qubely-form-field qubely-form-${type}`} type={type} placeholder={__(placeHolder)} required={required} />
                }
            </Fragment>
        )
    }

    const renderDatePicker = () => {
        return (

            <input type="text" className="qubely-datepicker" autocomplete="off"></input>

        )
    }
    return (
        <div className={`qubely-block-${uniqueId}`} style={style}>
            <RichText.Content tagName={'label'} className={`qubely-form-field-label`} value={label} />
            {renderInput()}
        </div>
    )

}


export { settings }
