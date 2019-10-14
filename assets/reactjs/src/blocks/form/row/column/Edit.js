const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { InnerBlocks, InspectorControls } = wp.editor
const { compose } = wp.compose
const { createBlock } = wp.blocks
const { Dropdown, PanelBody } = wp.components
const { withSelect, withDispatch } = wp.data

const {
    Range,
    RadioAdvanced,
    CssGenerator: {
        CssGenerator
    },
    HelperFunction: {
        parseResponsiveViewPort
    },

} = wp.qubelyComponents

class Edit extends Component {

    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId, fieldSize, width, gutter } } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }
        const currentField = $(`#block-${clientId}`)
        currentField.css(
            {
                width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `90%` : width[parseResponsiveViewPort()] + '%',
                marginRight: `${gutter[parseResponsiveViewPort()]}${gutter.unit}`
            }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            clientId,
            attributes: {
                fieldSize,
                width,
                gutter
            }
        } = this.props

        const currentField = $(`#block-${clientId}`)
        currentField.css(
            {
                width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `90%` : width[parseResponsiveViewPort()] + '%',
                marginRight: `${gutter[parseResponsiveViewPort()]}${gutter.unit}`
            }
        )

    }

    renderFormFieldTypes = () => {

        const { clientId, insertBlock } = this.props

        const formFields = [
            [__('Text'), 'text'],
            [__('Number'), 'number'],
            [__('Email'), 'email'],
            [__('Radio'), 'radio'],
            [__('Checkbox'), 'checkbox'],
            [__('Textarea'), 'textarea'],
            [__('Date'), 'date'],
            [__('Time'), 'time'],
            [__('Dropdown'), 'dropdown'],
        ]
        return (
            <div className="qubely-form-field-types">
                {formFields.map(([fieldName, type], index) => {
                    return (
                        <div className="qubely-form-field-type"
                            onClick={() => insertBlock(createBlock(`qubely/formfield-${type}`, {}), undefined, clientId)}
                        >
                            {fieldName}
                        </div>
                    )
                })}
            </div>
        )


    }

    render() {
        const {
            hasInnerBlocks,
            setAttributes,
            attributes,
            attributes: {
                uniqueId,
                fieldSize,
                width,
                gutter
            }
        } = this.props

        if (uniqueId) { CssGenerator(attributes, 'form-column', uniqueId); }

        return (
            <Fragment>
                <InspectorControls key="inspector">

                    <PanelBody title={__('')} opened={true}>

                        <RadioAdvanced
                            label={__('Field Size')}
                            options={[
                                { label: 'S', value: 'small', title: 'Small' },
                                { label: 'M', value: 'medium', title: 'Medium' },
                                { label: 'L', value: 'large', title: 'Large' },
                                { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }
                            ]}
                            value={fieldSize}
                            onChange={value => setAttributes({ fieldSize: value })} />
                        {
                            fieldSize === 'custom' &&
                            <Range
                                min={20}
                                max={100}
                                responsive
                                value={width}
                                label={__('Width')}
                                onChange={value => setAttributes({ width: value })}
                            />
                        }

                        <Range
                            min={0}
                            max={60}
                            responsive
                            value={gutter}
                            label={__('Gutter')}
                            unit={['px', 'em', '%']}
                            onChange={value => setAttributes({ gutter: value })}
                        />

                    </PanelBody>
                </InspectorControls>

                <div className={`qubely-block-${uniqueId}  qubely-${fieldSize}`}>
                    <div className={`qubely-form-column`}>

                        {
                            hasInnerBlocks ?
                                <InnerBlocks templateLock={false} />
                                :
                                <Dropdown
                                    className={"qubely-action-add-form-field"}
                                    contentClassName={"qubely-form-field-picker"}
                                    position="bottom center"
                                    renderToggle={({ isOpen, onToggle }) =>
                                        <div onClick={onToggle} aria-expanded={isOpen} className="qubely-action-add-form-item">
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                    }
                                    renderContent={() => this.renderFormFieldTypes()}
                                />

                        }


                    </div>

                </div>
            </Fragment>
        )
    }
}
export default compose([
    withSelect((select, { clientId }) => {
        const {
            getBlock,
        } = select('core/block-editor');

        const block = getBlock(clientId);
        const { getBlockOrder } = select('core/block-editor');

        return {
            hasInnerBlocks: !!(block && block.innerBlocks.length),
            hasChildBlocks: getBlockOrder(clientId).length > 0,
        };
    }),
    withDispatch((dispatch) => {
        const { insertBlock, removeBlock, updateBlockAttributes, toggleSelection } = dispatch('core/editor')
        return {
            insertBlock,
            removeBlock,
            updateBlockAttributes,
            toggleSelection
        }
    }),
])(Edit)