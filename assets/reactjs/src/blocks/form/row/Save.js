const { Component } = wp.element
const { InnerBlocks } = wp.editor
class Save extends Component {
    render() {
        return (
            <div className={`qubely-form-row`}>
                <InnerBlocks.Content />
            </div>
        )
    }
}
export default Save