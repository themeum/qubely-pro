
const { apiFetch } = wp

export default function getProducts(queryArgs) {

    return apiFetch({
        path:
            '/wc/blocks/products/categories/33',
    }).then((response) => {
        console.log('response : ', response)
        return response.map(({ count, id, name }) => {
            return (
                {
                    count,
                    id,
                    name
                }
            )
        })
    });
};
