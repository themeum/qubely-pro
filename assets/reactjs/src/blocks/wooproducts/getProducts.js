
const { apiFetch } = wp

export default function getProducts(queryArgs ) {
    const args = {
        catalog_visibility: 'visible',
        status: 'publish',
        ...queryArgs,
    };
    
    console.log('/wc/blocks/products?' +
    Object.entries(args)
        .map((arg) => arg.join('='))
        .join('&'))

    return apiFetch({
        path:
            '/wc/blocks/products?' +
            Object.entries(args)
                .map((arg) => arg.join('='))
                .join('&'),
        parse: false,
    }).then((response) => {
        return response.json().then((products) => {
            const totalProducts = parseInt(
                response.headers.get('x-wp-total'),
                10
            );
            return { products, totalProducts };
        });
    });
};
