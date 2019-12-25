const { __ } = wp.i18n
const {
    Fragment,
    useState,
    useEffect
} = wp.element

const {
    InnerBlocks,
    InspectorControls
} = wp.blockEditor

const { PanelBody } = wp.components

const {
    Range,
    CssGenerator: {
        CssGenerator
    }
} = wp.qubelyComponents

export default function Edit(props) {
    const [device, setDevice] = useState('md')
    const {
        clientId,
        attributes,
        setAttributes,
        attributes: {
            uniqueId,
            className,
            gutter,
        }
    } = props

    useEffect(() => {
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }
    })


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
                        onDeviceChange={value => setDevice(value)}
                        onChange={value => setAttributes({ gutter: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <div className={`qubely-block-${uniqueId}${className ? ` ${className}` : ''}`}>
                <div className={`qubely-form-row qubely-backend`}>
                    <InnerBlocks allowedBlocks={['qubely/formfield-column']} />
                </div>
            </div>
        </Fragment>
    )
}