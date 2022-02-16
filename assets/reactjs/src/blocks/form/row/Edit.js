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
    withCSSGenerator,
    InspectorTabs,
    InspectorTab
} = wp.qubelyComponents

function Edit(props) {
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

    return (
        <Fragment>
            <InspectorControls key="inspector">
                <InspectorTabs tabs={['style', 'advance']}>
                    <InspectorTab key={'style'}>
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
                    </InspectorTab>
                    <InspectorTab key={'advance'}>
                    </InspectorTab>
                </InspectorTabs>

            </InspectorControls>
            <div className={`qubely-block-${uniqueId}${className ? ` ${className}` : ''}`}>
                <div className={`qubely-form-row qubely-backend`}>
                    <InnerBlocks allowedBlocks={['qubely/formfield-column']} />
                </div>
            </div>
        </Fragment>
    )
}

export default withCSSGenerator()(Edit);