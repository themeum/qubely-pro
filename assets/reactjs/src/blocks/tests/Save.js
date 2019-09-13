const { __ } = wp.i18n;
const { Component } = wp.element;

class Save extends Component {

    render() {
        const { uniqueId, text } = this.props.attributes
        return (
            <div className={`qubely-block-${uniqueId}`}>
               <div className="test-block">{text}</div>
            </div>
        )
    }
}
export default Save;