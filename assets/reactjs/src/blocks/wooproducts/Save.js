
const { __ } = wp.i18n
const { RichText } = wp.editor
const { Fragment } = wp.element

export default function Save(props) {

	const {
		attributes: {
			uniqueId,
		}
	} = props

	return (
		<div className={`qubely-block-${uniqueId}`}>
			<div className={`qubely-woo__product_wrapper`}>
				<p>Init woo prodructs block</p>
			</div>
		</div>
	)

}

