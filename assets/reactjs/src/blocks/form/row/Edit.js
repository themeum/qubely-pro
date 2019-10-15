const { Component } = wp.element
const { InnerBlocks } = wp.editor
class Edit extends Component {
    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }
    }
    render() {
        const { attributes: { uniqueId, parentClientId } } = this.props
        // console.log('in row : ', parentClientId)

        return (
            <div className={`qubely-block-${uniqueId}`}>
                <div className={`qubely-form-row`}>
                    <InnerBlocks
                        allowedBlocks={['qubely/formfield-column']} />
                </div>
            </div>
        )
    }
}
export default Edit