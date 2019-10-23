const { Component } = wp.element
const { InnerBlocks } = wp.editor

class Save extends Component {

    render() {

        const {
            attributes: {
                uniqueId,
                fieldSize,
            }
        } = this.props
       
        return (
            <div className={`qubely-block-${uniqueId} qubely-form-field-front qubely-${fieldSize}`}>
                <div className={`qubely-form-column`} >
                    <InnerBlocks.Content />
                </div>
            </div>
        )
    }
}
export default Save