
const { __ } = wp.i18n
const { InspectorControls, RichText } = wp.editor
const { useState, useEffect, Fragment } = wp.element
const { PanelBody, RangeControl, Dashicon, Draggable } = wp.components


const {
    Range,
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

    const [device, changeDevice] = useState('md')
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
            width,
            height,
            type,
            label,
            options,
            placeHolder,
            required,
        }
    } = props

    useEffect(() => {
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }
    })
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
                                <div className={`qubely-form-field qubely-form-${type}`} >
                                    {options.map(option => {
                                        return (
                                            <div className={`qubely-form-field-${type}-option`}>
                                                <input type={type} id={option} value={option} />
                                                <label for={option}>option</label>
                                            </div>
                                        )
                                    })}
                                </div>
                                :
                                <input className={`qubely-form-field qubely-form-${type}`} type={type} placeholder={__(placeHolder)} required={required} />
                }
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
    const updateOptions = (type, index, newValue) => {

        let newOptions = [...options]
        if (type === 'add') {
            newOptions.push('New option')
        } else {
            newOptions[index] = newValue
        }
        setAttributes({ options: newOptions })
    }


    const blockname = name.split('/')[1]

    if (uniqueId) { CssGenerator(attributes, blockname, uniqueId) }

    return (
        <Fragment>

            <InspectorControls>
                <PanelBody title={__('Form-field Settings')} opened={true}>
                    <RangeControl
                        label={__('Percentage width')}
                        value={width || ''}
                        onChange={value => setAttributes({ width: value })}
                        min={0}
                        max={100}
                        required
                        allowReset
                    />
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
                    {
                        name === 'qubely/formfield-dropdown' &&
                        <Fragment>
                            <label className={`qubely-form-field`}>Dropdown Options</label>
                            {options.map((option, index) => {
                                return (
                                    <div
                                        draggable
                                        onDragEnd={() => handleDragEnd()}
                                        onDragOver={() => setDraggedOverItem(index)}
                                        onDragStart={() => setDraggedItem(index)}
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
                    }


                </PanelBody>
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

    const { attributes: { uniqueId, label, type, width, placeHolder, required } } = props

    let style;
    if (Number.isFinite(width)) {
        style = { width: width + '%' };
    }

    return (
        <div className={`qubely-block-${uniqueId}`} style={style}>
            <RichText.Content className={`qubely-form-field-label`} value={label} />
            <input className={`qubely-form-field qubely-form-text`} type={'text'} placeholder={__(placeHolder)} required={required} />
        </div>
    )

}


export { settings }
