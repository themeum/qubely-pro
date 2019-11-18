
const { __ } = wp.i18n
const { RichText } = wp.editor
const { Fragment } = wp.element

export default  function Save(props) {

	const {
		attributes: {
			uniqueId,
		}
	} = props

	let prodructs
	 function asyncfunction() {
		 wp.apiFetch({ path: '/wc/blocks/products/categories' }).then(Response => prodructs = Response)

		return (
			<div>
				{
					prodructs.map(({ name }) => <span>{name}</span>)
				}
			</div>

		)

	}
	 asyncfunction()

	return (
		<div className={`qubely-block-${uniqueId}`}>
			{test}
			<div className={`qubely-woo__product_wrapper`}>
				<p>Init woo prodructs block</p>
				<p>tesds t</p>
			</div>

		</div>
	)

}

