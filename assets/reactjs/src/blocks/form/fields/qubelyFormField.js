
const { __ } = wp.i18n
const { InspectorControls, RichText } = wp.editor
const { useEffect, Fragment } = wp.element
const { PanelBody, RangeControl } = wp.components

const {
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

    const {
        name,
        clientId,
        attributes,
        setAttributes,
        attributes: {
            uniqueId,
            width,
            type,
            label,
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
                        <input className={`qubely-form-field qubely-form-${type}`} type={type} placeholder={__(placeHolder)} required={required} />
                }
            </Fragment>
        )
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
