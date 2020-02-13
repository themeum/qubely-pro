import icons from '../../../../helpers/icons';
const { __ } = wp.i18n
const {
    Fragment,
    useState,
    useEffect
} = wp.element

const { InnerBlocks, InspectorControls } = wp.blockEditor
const { compose } = wp.compose
const { createBlock } = wp.blocks
const { Dropdown, PanelBody } = wp.components
const { withSelect, withDispatch } = wp.data

const {
    Range,
    RadioAdvanced,
    withCSSGenerator
} = wp.qubelyComponents


function Edit(props) {
    const [device, setDevice] = useState('md')
    const [hideDropdown, setDropdown] = useState(null)
    const {
        hasInnerBlocks,
        setAttributes,
        attributes,
        clientId,
        insertBlock,
        rowIndex,
        columnIndex,
        attributes: {
            uniqueId,
            className,
            fieldSize,
            width,
            parentClientId
        }
    } = props

    const currentField = $(`#block-${clientId}`)
    let currentDevice = window.innerWidth <= 1199 ? window.innerWidth <= 991 ? 'xs' : 'sm' : 'md'

    useEffect(() => {
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }

        currentField.css(
            {
                width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `100%` : width[currentDevice] + '%',
            }
        )
    })

    useEffect(() => {
        currentField.css(
            {
                width: fieldSize === 'small' ? `30%` : fieldSize === 'medium' ? `50%` : fieldSize === 'large' ? `100%` : width[device] + '%',
            }
        )
    }, [attributes])


    const renderFormFieldTypes = () => {

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
                            onClick={() => {
                                insertBlock(createBlock(`qubely/formfield-${type}`, { parentClientId, fieldName: `${type}-${rowIndex + 1}${columnIndex + 1}` }), undefined, clientId)
                            }}
                        >
                            {icons.from_fields[type]} {fieldName}
                        </div>
                    )
                })}
            </div>
        )


    }

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
                            device={device}
                            label={__('Width')}
                            onChange={value => setAttributes({ width: value })}
                            onDeviceChange={value => setDevice(value)}
                        />
                    }

                </PanelBody>
            </InspectorControls>

            <div className={`qubely-block-${uniqueId}  qubely-${fieldSize}${className ? ` ${className}` : ''}`}>
                <div className={`qubely-form-column`}>

                    {
                        hasInnerBlocks ?
                            <InnerBlocks
                                allowedBlocks={
                                    [
                                        'qubely/formfield-text',
                                        'qubely/formfield-number',
                                        'qubely/formfield-email',
                                        'qubely/formfield-textarea',
                                        'qubely/formfield-radio',
                                        'qubely/formfield-dropdown',
                                        'qubely/formfield-checkbox',
                                        'qubely/formfield-date',
                                        'qubely/formfield-time',
                                    ]
                                }
                            />
                            :
                            <Dropdown
                                className={"qubely-action-add-form-field"}
                                contentClassName={"qubely-form-field-picker"}
                                position="bottom center"
                                renderToggle={({ isOpen, onToggle }) =>
                                    <div onClick={onToggle} aria-expanded={isOpen} className="qubely-action-add-form-item">
                                        <div className="qubely-action-add-form-empty">
                                            <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-insert" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>
                                        </div>
                                    </div>
                                }
                                renderContent={() => renderFormFieldTypes()}
                            />

                    }


                </div>

            </div>
        </Fragment>
    )
}

export default compose([
    withSelect((select, { clientId }) => {
        const {
            getBlock,
            getBlockOrder,
            getBlockIndex,
            getBlockRootClientId
        } = select('core/block-editor');

        const block = getBlock(clientId);
        const rootClientId = getBlockRootClientId(clientId)
        return {
            hasInnerBlocks: !!(block && block.innerBlocks.length),
            rowIndex: getBlockIndex(rootClientId, getBlockRootClientId(rootClientId)),
            columnIndex: getBlockIndex(clientId, rootClientId),
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
    withCSSGenerator()
])(Edit)