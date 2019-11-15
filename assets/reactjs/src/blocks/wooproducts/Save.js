
const { __ } = wp.i18n
const { RichText } = wp.editor
const { Fragment } = wp.element

export default function Save(props) {

	const {
		attributes: {
			uniqueId,
		}
	} = props


	async function asyncfunction() {
		let prodructs
		await wp.apiFetch({ path: '/wc/blocks/products/categories' }).then(Response => prodructs = Response)
		console.log('prodructs : ', prodructs)
		return (
			<div>
				{
					prodructs.map(({ name }) => <span>{name}</span>)
				}
			</div>

		)

	}


	return (
		<div className={`qubely-block-${uniqueId}`}>
			{
				asyncfunction()
			}
			<div className={`qubely-woo__product_wrapper`}>
				<p>Init woo prodructs block</p>
				<p>test</p>
			</div>

		</div>
	)

}

