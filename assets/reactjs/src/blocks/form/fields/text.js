
const { __ } = wp.i18n
const { useEffect } = wp.element


const {
    CssGenerator: { CssGenerator }
} = wp.qubelyComponents



import './style.scss'

import FieldDefaults from './formDefaults'

const blockName = 'qubely/formfield-name'

const settings = {
    ...FieldDefaults,
    title: __('Name'),
    description: __('Text field for Qubely Form'),
    icon: 'forms',
    edit: props => Edit(props),
    save: props => Save(props)
}

const Edit = (props) => {

    useEffect(() => {
        const { setAttributes, clientId, attributes: { uniqueId } } = props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }
    })
    const { attributes, attributes: { uniqueId, id, type, inputSize, placeHolder, required } } = props

    if (uniqueId) { CssGenerator(attributes, 'formfield-name', uniqueId) }

    return (
        <div className={`qubely-block-${uniqueId}`}>
            <span>{id}</span>
            <input className={`qubely-form-field is-${inputSize}`} type={type} placeholder={__(placeHolder)} required={required} disabled />
        </div>
    )

}
const Save = (props) => {

    const { attributes: { uniqueId, id, type, inputSize, placeHolder, required } } = props

    return (
        <div className={`qubely-block-${uniqueId}`}>
            <span>{id}</span>
            <input className={`qubely-form-field qubely-form-text  is-${inputSize}`} type={type} placeholder={__(placeHolder)} required={required} />
        </div>
    )

}


export { blockName, settings }
