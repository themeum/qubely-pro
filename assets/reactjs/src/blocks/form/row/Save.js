const { Component } = wp.element
const { InnerBlocks } = wp.blockEditor
class Save extends Component {
    render() {
        const { attributes: { uniqueId } } = this.props
        return (
            <div className={`qubely-block-${uniqueId}`}>
                <div className={`qubely-form-row qubely-frontend`}>
                    <InnerBlocks.Content />
                </div>
            </div>
        )
    }
}
export default Save