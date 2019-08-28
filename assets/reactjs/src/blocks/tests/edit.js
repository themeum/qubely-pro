const { __ } = wp.i18n
const { Fragment, Component } = wp.element;
const { PanelBody, TextControl } = wp.components

const { Alignment } = wp.qubelyComponents

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
        const { uniqueId, text, alignment } = this.props.attributes
        const { setAttributes } = this.props

        console.log('wp->', wp )

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
                            disableToggle />

                    </PanelBody>
                </InspectorControls>

                <div className={`qubely-block-${uniqueId}`}>
                    {text}
                </div>

            </Fragment>
        )
    }
}
export default Edit