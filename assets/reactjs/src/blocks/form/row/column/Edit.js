const { Component } = wp.element
const { InnerBlocks } = wp.editor
const { compose } = wp.compose
const { select, dispatch, withSelect, withDispatch } = wp.data
class Edit extends Component {

    render() {
        const { hasInnerBlocks, hasChildBlocks } = this.props
        console.log('hasInnerBlocks : ', hasInnerBlocks)
        console.log('hasChildBlocks : ', hasChildBlocks)
        console.log('ButtonBlockAppender : ', <InnerBlocks.ButtonBlockAppender />)
        return (
            <div className={`qubely-form-column`}>
                {/* {
                    hasInnerBlocks ? */}
                <InnerBlocks
                    templateLock={false}
                    renderAppender={(
                        hasInnerBlocks ?
                            undefined :
                            () => { return <InnerBlocks.ButtonBlockAppender /> }
                    )}
                    allowedBlocks={
                        [
                            'core/paragraph',
                            'core/button',
                            'qubely/formfield-text',
                            // 'qubely/formfield-number',
                            // 'qubely/formfield-email',
                            // 'qubely/formfield-textarea',
                            // 'qubely/formfield-dropdown',
                            // 'qubely/formfield-radio',
                            // 'qubely/formfield-checkbox',
                            // 'qubely/formfield-date',
                            // 'qubely/formfield-time',
                        ]
                    }
                />
                {/* <span>bla bla bla</span>
                } */}

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