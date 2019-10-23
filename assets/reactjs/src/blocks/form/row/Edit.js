const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { InnerBlocks, InspectorControls } = wp.editor
const { PanelBody } = wp.components

const {
    Range,
    CssGenerator: {
        CssGenerator
    }
} = wp.qubelyComponents

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = { device: 'md' }
    }

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
        const {
            attributes,
            setAttributes,
            attributes: {
                uniqueId,
                gutter,
                spacer
            }
        } = this.props

        const { device } = this.state

        if (uniqueId) { CssGenerator(attributes, 'form-row', uniqueId) }
        
        return (
            <Fragment>
                <InspectorControls key="inspector">

                    <PanelBody title={__('')} opened={true}>
                        <Range
                            min={0}
                            max={100}
                            responsive
                            value={gutter}
                            label={__('Gutter')}
                            unit={['px', 'em', '%']}
                            device={device}
                            onDeviceChange={value => this.setState({ device: value })}
                            onChange={value => setAttributes({ gutter: value })}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={`qubely-block-${uniqueId}`}>
                    <div className={`qubely-form-row qubely-backend`}>
                        <InnerBlocks allowedBlocks={['qubely/formfield-column']} />
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Edit