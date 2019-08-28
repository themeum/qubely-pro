const { __ } = wp.i18n;
const { Component } = wp.element;

class Save extends Component {

    render() {
        const { uniqueId, text } = this.props.attributes
        return (
            <div className={`qubely-block-${uniqueId}`}>
                {text}
            </div>
        )
    }
}
export default Save;