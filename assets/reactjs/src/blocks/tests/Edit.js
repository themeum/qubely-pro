const { __ } = wp.i18n
const { Fragment, Component } = wp.element;
const { PanelBody, TextControl } = wp.components

const { Alignment, Color } = wp.qubelyComponents

const { InspectorControls } = wp.editor


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
        const { uniqueId, text, alignment, testColor, testBg } = this.props.attributes
        const { setAttributes } = this.props

        return (
            <Fragment>
                <InspectorControls key="inspector">
                    <PanelBody initialOpen={true}>
                        <TextControl
                            label={__('Text')}
                            value={text}
                            onChange={val => setAttributes({text:val})}
                            placeholder={__('Input Text')} />

                        <Alignment 
                            label={__('Alignment')} 
                            alignmentType="content" 
                            value={alignment} 
                            onChange={val => setAttributes({ alignment: val })} 
                            disableJustify 
                            disableToggle 
                        />
                        <Color label={__('Color')} value={testColor} onChange={(value) => setAttributes({ testColor: value })} />
                        <Color label={__('Background')} value={testBg} onChange={(value) => setAttributes({ testBg: value })} />
                    </PanelBody>
                </InspectorControls>

                <div className={`qubely-block-${uniqueId}`}>
                    <div className="test-block">{text}</div>
                </div>
            </Fragment>
        )
    }
}
export default Edit