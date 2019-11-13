const { __ } = wp.i18n

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
    Spinner
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
import test from './test'


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
            loadProducts()
            changeMountFlag(false)

        }
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }

    })

    const getSortArgs = (orderName) => {
        switch (orderName) {
            case 'menu_order':
            case 'popularity':
            case 'rating':
            case 'date':
            case 'price':
                return {
                    orderby: 'price',
                    order: 'asc',
                };
            case 'price-desc':
                return {
                    orderby: 'price',
                    order: 'desc',
                };
        }
    }
    const loadProducts = () => {
        setProducts([])
        setLoading(true)

        test()
            .then((productsData) => {
                console.log('productsData : ', productsData)
                setCategories(productsData)
            })
            .catch(async (e) => {
                console.log('eerrrr')
            });

        const args = {
            ...getSortArgs(orderby),
            // per_page: attributes.columns * attributes.rows,
            // page: currentPage,
        };

        getProducts(args)
            .then((productsData) => {
                setProducts(productsData.products)
                setTotalProducts(productsData.totalProducts)
                setLoading(false)
                setError(null)
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
                            onChange={value => setAttributes({ selectedCatagories: value })}
                        />
                    }
                    <SelectControl
                        label={__(
                            'Order Products By',
                            'woo-gutenberg-products-block'
                        )}
                        value={attributes.orderby}
                        options={[
                            {
                                label: __(
                                    'Newness - newest first',
                                    'woo-gutenberg-products-block'
                                ),
                                value: 'date',
                            },
                            {
                                label: __(
                                    'Price - low to high',
                                    'woo-gutenberg-products-block'
                                ),
                                value: 'price',
                            },
                            {
                                label: __(
                                    'Price - high to low',
                                    'woo-gutenberg-products-block'
                                ),
                                value: 'price-desc',
                            },
                            {
                                label: __(
                                    'Rating - highest first',
                                    'woo-gutenberg-products-block'
                                ),
                                value: 'rating',
                            },
                            {
                                label: __(
                                    'Sales - most first',
                                    'woo-gutenberg-products-block'
                                ),
                                value: 'popularity',
                            },
                            {
                                label: __(
                                    'Menu Order',
                                    'woo-gutenberg-products-block'
                                ),
                                value: 'menu_order',
                            },
                        ]}
                        onChange={(orderby) => setAttributes({ orderby })}
                    />
                </PanelBody>


            </InspectorControls>

            <div className={`qubely-block-${uniqueId}`}>
                <div className={`qubely-woo__product_wrapper`}>
                    {
                        totalProducts ? products.map(({ name, id, price, description, image }, index) => {
                            return (
                                <div className={`qubely-woo__product`}>

                                    <span className={`qubely-woo__product-name`}>{name}</span>
                                    <span className={`qubely-woo__product-id`}>{id}</span>
                                    <span className={`qubely-woo__product-price`}>{price}</span>
                                    <span
                                        className={`qubely-woo__product-description`}
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                </div>

                            )
                        })
                            :
                            <div className={`qubely-woo__product_loading`}>
                                <Spinner />
                            </div>
                    }
                </div>
            </div>

        </Fragment>
    )

}


