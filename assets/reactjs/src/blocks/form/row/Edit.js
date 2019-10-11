const { Component } = wp.element
const { InnerBlocks } = wp.editor
const { compose } = wp.compose
const { select, dispatch, withSelect, withDispatch } = wp.data
class Edit extends Component {

    getFormColumn = () => {
        return [0, 1, 2].map((data, index) => {
            return ['qubely/form-column', {}]
        })
    }

    render() {
        const { hasInnerBlocks, hasChildBlocks } = this.props

        return (
            <div className={`qubely-form-row`}>
                <InnerBlocks
                    template={this.getFormColumn()}
                    allowedBlocks={['qubely/formfield-column']}
                    renderAppender={!hasInnerBlocks && InnerBlocks.ButtonBlockAppender()}
                />
            </div>
        )
    }
}
export default compose([
    withSelect((select, { clientId }) => {
        const {
            getBlock
        } = select('core/block-editor')

        const block = getBlock(clientId)
        const { getBlockOrder } = select('core/block-editor')

        return {
            hasInnerBlocks: !!(block && block.innerBlocks.length),
            hasChildBlocks: getBlockOrder(clientId).length > 0,
        }
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