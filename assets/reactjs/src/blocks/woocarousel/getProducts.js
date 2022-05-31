const { apiFetch } = wp;
const { addQueryArgs } = wp.url;

export function getAllProducts(queryArgs) {
	return apiFetch({
		path:
			"/wc/v3/products?" +
			Object.entries(queryArgs)
				.map((arg) => arg.join("="))
				.join("&"),
		parse: false,
	}).then((response) => {
		return response.json().then((products) => {
			const totalProducts = parseInt(response.headers.get("x-wp-total"), 10);
			return { products, totalProducts };
		});
	});
}
export function getProducts({ productsStatus, orderby, page, productsPerPage, selectedCatagories }) {
	const query = addQueryArgs("/qubely/v1/get_woo_products", {
		status: productsStatus,
		orderby,
		page: -1,
		per_page: -1,
		catagories: selectedCatagories,
	});
	return apiFetch({ path: query }).then((products) => {
		return products;
	});
}
