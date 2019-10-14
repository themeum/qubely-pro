const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { InnerBlocks } = wp.editor
const { compose } = wp.compose
const { createBlock } = wp.blocks
const { Dropdown, PanelBody, TextControl, Toolbar, TextareaControl } = wp.components
const { select, dispatch, withSelect, withDispatch } = wp.data
class Edit extends Component {

    renderFormFieldTypes = () => {

        const { clientId, hasInnerBlocks, hasChildBlocks, insertBlock } = this.props

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
        const { hasInnerBlocks } = this.props

        return (
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