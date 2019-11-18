
const { apiFetch } = wp

export default function getProducts(queryArgs) {
    return apiFetch({
        path:
            '/wc/blocks/products?' +
            Object.entries(queryArgs)
                .map((arg) => arg.join('='))
                .join('&'),
        parse: false,
    }).then((response) => {
        return response.json().then((products) => {
            const totalProducts = parseInt(response.headers.get('x-wp-total'), 10)
            return { products, totalProducts };
        });
    });
};
