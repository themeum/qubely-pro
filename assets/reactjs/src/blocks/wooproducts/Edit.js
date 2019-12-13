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
} = wp.blockEditor

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
    Dropdown,
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

            //query
            orderby,
            productsPerPage,
            productsStatus,
            selectedCatagories,

            //layout attributes
            layout,
            style,
            columns,

            //other
            addToCartButtonText,
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

    useEffect(() => {
        setLoading(true)
        loadProducts()
    }, [productsStatus, productsPerPage, orderby, selectedCatagories])

    const getCategoris = () => {
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
    }
    const setOderingQueryArgs = () => {
        let orderbyArgs = {}
        switch (orderby) {
            case 'price':
                orderbyArgs.orderby = 'price';
                orderbyArgs.order = 'asc';
                break;
            case 'price_desc':
                orderbyArgs.orderby = 'price';
                orderbyArgs.order = 'desc';
                break;
            case 'title':
                orderbyArgs.orderby = 'title';
                orderbyArgs.order = 'asc';
                break;
            case 'title':
                orderbyArgs.orderby = 'title';
                orderbyArgs.order = 'desc';
                break;
            case 'date':
                orderbyArgs.orderby = 'date';
                orderbyArgs.order = 'asc';
                break;
            case 'date-desc':
                orderbyArgs.orderby = 'date';
                orderbyArgs.order = 'desc';
                break;
            default:
                orderbyArgs.orderby = orderby;

        }
        return (orderbyArgs)
    }

    const loadProducts = () => {

        const args = {
            ...setOderingQueryArgs(),
            category: selectedCatagories.map(({ value }) => value).join(),
            per_page: productsPerPage,
            // page: currentPage,
        };

        if (productsStatus === 'on_sale') {
            args.on_sale = true
        } else if (productsStatus === 'featured') {
            args.featured = true
        }

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

    const renderImages = (images) => {
        return (
            <span className={`qubely-woo__product-image-wrapper`}>
                {images.map(({ src, alt }) => {
                    return (
                        <span className={`qubely-woo__product-image`}>
                            <img src={src} alt={alt} />
                        </span>
                    )
                })}
            </span>
        )
    }

    if (uniqueId) { CssGenerator(attributes, 'wooproducts', uniqueId) }


    return (
        <Fragment>

            <InspectorControls>
                <PanelBody title='' initialOpen={true}>
                    <Styles
                        options={[
                            { value: 1, svg: icons.postgrid_1, label: __('') },
                            { value: 2, svg: icons.postgrid_2, label: __('') },
                        ]}
                        value={layout}
                        onChange={val => setAttributes({ layout: val })}
                    />
                </PanelBody>


                <PanelBody title={__('Query')} initialOpen={false} onToggle={() => !categories && getCategoris()}>

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
                        <Dropdown
                            label={__('Products by Categories')}
                            enableSearch
                            defaultOptionsLabel="All"
                            options={[
                                ...categories.map(({ name, id }) => {
                                    return (
                                        {
                                            label: __(name),
                                            value: id
                                        }
                                    )
                                })]}
                            value={selectedCatagories}
                            onChange={value => setAttributes({ selectedCatagories: value.length && value[value.length - 1].label === 'All' ? [] : value })}
                        />
                    }

                    <SelectControl
                        label={__('Order By')}
                        value={orderby}
                        options={[
                            {
                                label: __('Newness - newest first'),
                                value: 'date-desc',
                            },
                            {
                                label: __('Newness - oldest first'),
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

                <PanelBody title={__('Content')} initialOpen={false}>
                    <Styles
                        columns={2}
                        value={style}
                        options={[
                            { value: 1, svg: icons.postgrid_design_1 },
                            { value: 2, svg: icons.postgrid_design_4 },
                        ]}
                        onChange={value => setAttributes({ style: value })}
                    />

                    {
                        layout === 2 &&
                        <RangeControl
                            label={__('Columns')}
                            value={columns}
                            min='1'
                            max={10}
                            onChange={val => setAttributes({ columns: val })} />
                    }

                </PanelBody>
            </InspectorControls>

            <div className={`qubely-block-${uniqueId}`}>
                <div className={`qubely-woo__products_wrapper${layout === 2 ? ' qubely_woo__products_grid_layout' : ''}${layout === 2 ? ` qubely_${columns}columns` : ''}`}>
                    {
                        loading ?
                            <div className={`qubely-woo__product_loading`}>
                                <Spinner />
                            </div>
                            :
                            totalProducts ? products.map(({ name, id, price, description, images }, index) => {
                                return (
                                    <div className={`qubely-woo__product`}>

                                        {style === 1 && renderImages(images)}

                                        <div className={`qubely-woo-product-name`}>name : {name}</div>
                                        <div className={`qubely-woo-product-id`}>id : {id}</div>
                                        <div className={`qubely-woo-product-price`}>price {price}</div>
                                        <div
                                            className={`qubely-woo-product-description`}
                                            dangerouslySetInnerHTML={{
                                                __html: description,
                                            }}
                                        />
                                        {style === 2 && renderImages(images)}
                                        <div className={`qubely-woo-product-add-to-cart`}>
                                            <RichText
                                                keepPlaceholderOnFocus
                                                value={addToCartButtonText}
                                                placeholder={__('Add Text...')}
                                                className={'qubely_cart_button'}
                                                onChange={value => setAttributes({ addToCartButtonText: value })}
                                            />
                                        </div>
                                    </div>

                                )
                            })
                                :
                                <div className={`qubely-woo__product-not-found`}>
                                    {__('No products found')}
                                </div>
                    }
                </div>
            </div>

        </Fragment >
    )

}


