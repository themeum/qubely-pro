const { __ } = wp.i18n
const { apiFetch } = wp
const {
    useState,
    useEffect,
    Fragment,
    Component
} = wp.element
const {
    PanelBody,
    Tooltip,
    Toolbar,
    SelectControl,
    IconButton,
    Spinner,
    RangeControl
} = wp.components

const {
    InspectorControls,
    RichText,
    BlockControls,
    MediaUpload,
    MediaPlaceholder
} = wp.editor

const {
    RadioAdvanced,
    ColorAdvanced,
    Select,
    Tabs,
    Tab,
    Range,
    Color,
    Styles,
    Typography,
    Toggle,
    BorderRadius,
    BoxShadow,
    Alignment,
    Padding,
    Inline: { InlineToolbar },
    CssGenerator: { CssGenerator },
    gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
} = wp.qubelyComponents

import icons from '../../helpers/icons'
import getProducts from './getProducts'



export default function Edit(props) {
    const [mounting, changeMountFlag] = useState(true)
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [totalProducts, setTotalProducts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {
        name,
        clientId,
        attributes,
        setAttributes,
        attributes: {
            uniqueId,
            orderby,
            productsPerPage,
            productsStatus,
            selectedCatagories,
        }
    } = props

    const args = {
        catalog_visibility: 'visible',
        status: 'publish',
    };

    useEffect(() => {
        const _client = clientId.substr(0, 6)

        if (mounting) {
            apiFetch({
                path: '/wc/blocks/products/categories',
            }).then((response) => {
                return response.map(({ count, id, name }) => {
                    return (
                        {
                            count,
                            id,
                            name
                        }
                    )
                })
            }).then((productsData) => {
                setCategories([{ id: null, name: "All" }, ...productsData])
            })
                .catch(async (e) => {
                    console.log('could not retrieve product categories')
                });
            loadProducts()
            changeMountFlag(false)

        }
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }

    })

    useEffect(() => {
        setLoading(true)
        loadProducts()
    }, [productsStatus, productsPerPage, orderby, selectedCatagories])


    const loadProducts = () => {
        setProducts([])
        const args = {
            ...orderby === 'price' ?
                {
                    order: 'asc',
                    orderby: 'price',
                } : orderby === 'price-desc' ?
                    {
                        order: 'desc',
                        orderby: 'price',
                    } :
                    orderby === 'title' ?
                        {
                            order: 'asc',
                            orderby: orderby
                        } :
                        orderby === 'title-desc' ?
                            {
                                order: 'desc',
                                orderby: 'title',
                            } :
                            {
                                order: 'desc',
                                orderby: orderby
                            },

            ...productsStatus === 'on_sale' ? {
                on_sale: 1
            } : productsStatus === 'featured' ? {
                featured: 1
            } : {},
            category: selectedCatagories,
            per_page: productsPerPage,
            // page: currentPage,
        };

        getProducts(args)
            .then((productsData) => {
                setLoading(false)
                setError(null)
                setProducts(productsData.products)
                setTotalProducts(productsData.totalProducts)
            })
            .catch(async (e) => {
                setProducts([])
                setTotalProducts(0)
                setLoading(false)
                setError(null)
            });
    }


    if (uniqueId) { CssGenerator(attributes, 'wooproducts', uniqueId) }


    return (
        <Fragment>

            <InspectorControls>

                <PanelBody title={__('Query')} initialOpen={true}>

                    <SelectControl
                        label={__("Products Status")}
                        value={productsStatus}
                        options={[
                            {
                                label: __('All'),
                                value: 'all',
                            },
                            {
                                label: __('Featured'),
                                value: 'featured',
                            },
                            {
                                label: __('On Sale'),
                                value: 'on_sale',
                            },
                        ]}
                        onChange={value => setAttributes({ productsStatus: value })}
                    />

                    {
                        totalProducts &&
                        <RangeControl
                            label={__('Number of Products')}
                            value={productsPerPage}
                            min='1'
                            max={totalProducts}
                            onChange={val => setAttributes({ productsPerPage: val })} />

                    }

                    {
                        categories &&

                        <SelectControl
                            label={__("Products by Categories")}
                            value={selectedCatagories}
                            options={
                                categories.map(({ name, id }) => {
                                    return (
                                        {
                                            label: __(name),
                                            value: id
                                        }
                                    )
                                })
                            }
                            onChange={value => setAttributes({ selectedCatagories: value !== 'All' ? value : null })}
                        />
                    }
                    <SelectControl
                        label={__('Order Products By')}
                        value={orderby}
                        options={[
                            {
                                label: __('Newness - newest first'),
                                value: 'date',
                            },
                            {
                                label: __('Price - low to high'),
                                value: 'price',
                            },
                            {
                                label: __('Price - high to low'),
                                value: 'price-desc',
                            },
                            {
                                label: __('Rating - highest first'),
                                value: 'rating',
                            },
                            {
                                label: __('Sales - most first'),
                                value: 'popularity',
                            },
                            {
                                label: __('Menu Order'),
                                value: 'menu_order',
                            },
                            {
                                label: __('Title: Alphabetical'),
                                value: 'title',
                            },
                            {
                                label: __('Title: Alphabetical reversed'),
                                value: 'title-desc',
                            },
                        ]}
                        onChange={(orderby) => setAttributes({ orderby })}
                    />
                </PanelBody>


            </InspectorControls>

            <div className={`qubely-block-${uniqueId}`}>
                <div className={`qubely-woo__product_wrapper`}>
                    {
                        loading ?
                            <div className={`qubely-woo__product_loading`}>
                                <Spinner />
                            </div>
                            :
                            totalProducts && products.map(({ name, id, price, description, image }, index) => {
                                return (
                                    <div className={`qubely-woo__product`}>

                                        <span className={`qubely-woo__product-name`}>name : {name}</span>
                                        <span className={`qubely-woo__product-id`}>id : {id}</span>
                                        <span className={`qubely-woo__product-price`}>price {price}</span>
                                        <span
                                            className={`qubely-woo__product-description`}
                                            dangerouslySetInnerHTML={{
                                                __html: description,
                                            }}
                                        />
                                    </div>

                                )
                            })
                    }
                </div>
            </div>

        </Fragment>
    )

}


