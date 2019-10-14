const { Component } = wp.element
const { InnerBlocks } = wp.editor
class Edit extends Component {

    render() {
        return (
            <div className={`qubely-form-row`}>
                <InnerBlocks allowedBlocks={['qubely/formfield-column']} />
            </div>
        )
    }
}
export default Edit