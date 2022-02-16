const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;
class Edit extends Component {
	render() {
		return (
			<div>
				<InnerBlocks templateLock={false} renderAppender={() => <InnerBlocks.ButtonBlockAppender />} />
			</div>
		);
	}
}
export default Edit;
