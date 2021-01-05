import classnames from 'classnames';
const { __ } = wp.i18n;
const { apiFetch } = wp;
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
    Border,
    BorderRadius,
    BoxShadow,
    Alignment,
    Padding,
    Separator,
    Inline: {
        InlineToolbar
    },
    withCSSGenerator,
    gloalSettings: {
        globalSettingsPanel,
        animationSettings,
        interactionSettings
    },
    InspectorTabs,
    InspectorTab
} = wp.qubelyComponents

import icons from '../../helpers/icons'
import getProducts from './getProducts'



function Edit(props) {
    const [mounting, changeMountFlag] = useState(true)
    const [device, setDevice] = useState('md')
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
            excerptLimit,
            //query
            orderby,
            productsPerPage,
            productsStatus,
            selectedCatagories,

            //layout attributes
            layout,
            style,
            columns,

            //image
            imageSize,
            imageSizeCustom,
            imageHeight,
            imageCustomHeight,

            //other
            addToCartButtonText,
            buttonBgColor,
            buttonBorder,
            buttonBorderRadius,
            recreateStyles,
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
            <div className="qubely-woo_product-image-wrapper">
                {
                    images.length > 0 ?
                        images.map(({ src, alt }) => {
                            return (
                                <img className="qubely-woo_product-image" src={src} alt={alt} />
                            )
                        })
                        :
                        <div className="qubely-image-placeholder" />
                }
            </div>
        )
    }

    const truncate = (value) => {
        if (value && value.split(' ').length > excerptLimit) {
            return value.split(' ').splice(0, excerptLimit).join(' ');
        }
        return value;
    }
    console.log('products : ', products);
    const wrappeprClasses = classnames('qubely-woo_products_wrapper',
        { ['qubely_list_layout']: layout === 1 },
        { ['qubely_grid_layout']: layout === 2 },
        { [`qubely_${columns}columns`]: layout === 2 });
        
    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={['style', 'advance']}>
                    <InspectorTab key={'style'}>
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
                            <RangeControl label={__('Excerpt Limit')} min={1} max={100} step={1} value={excerptLimit} onChange={val => setAttributes({ excerptLimit: val })} />

                            <RadioAdvanced label={__('Width')} value={imageSize} onChange={(value) => setAttributes({ imageSize: value, recreateStyles: !recreateStyles })}
                                options={[
                                    { label: __('S'), value: '100px', title: __('Small') },
                                    { label: __('M'), value: '150px', title: __('Medium') },
                                    { label: __('L'), value: '250px', title: __('Large') },
                                    { icon: 'fas fa-cog', value: 'custom', title: __('Custom') },
                                ]}
                            />
                            {imageSize == 'custom' &&
                                <Fragment>
                                    <Range label={__('Custom Width')} value={imageSizeCustom} onChange={val => setAttributes({ imageSizeCustom: val })} min={10} max={1920} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => this.setState({ device: value })} />
                                    <Separator />
                                </Fragment>
                            }
                            <RadioAdvanced label={__('Image Height')} value={imageHeight} onChange={(value) => setAttributes({ imageHeight: value, recreateStyles: !recreateStyles })}
                                options={[
                                    { label: __('S'), value: '100px', title: __('Small') },
                                    { label: __('M'), value: '150px', title: __('Medium') },
                                    { label: __('L'), value: '250px', title: __('Large') },
                                    { label: __('Custom'), value: 'custom', title: __('Custom') },
                                ]}
                            />
                            {imageHeight == 'custom' &&
                                <Fragment>
                                    <Range label={__('Custom Height')} value={imageCustomHeight} onChange={val => setAttributes({ imageCustomHeight: val })} min={10} max={1920} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => this.setState({ device: value })} />
                                    <Separator />
                                </Fragment>
                            }
                        </PanelBody>
                        <PanelBody title={__('Button')} initialOpen={false}>
                            <ColorAdvanced
                                label={__('Background')}
                                value={buttonBgColor}
                                onChange={value => setAttributes({ buttonBgColor: value })}
                            />
                            <Border
                                min={0}
                                max={10}
                                responsive
                                device={device}
                                label={__('Border')}
                                value={buttonBorder}
                                unit={['px', 'em', '%']}
                                onDeviceChange={value => setDevice(value)}
                                onChange={val => setAttributes({ buttonBorder: val })}
                            />
                            <BorderRadius
                                min={0}
                                max={100}
                                responsive
                                device={device}
                                label={__('Corner')}
                                unit={['px', 'em', '%']}
                                value={buttonBorderRadius}
                                onDeviceChange={value => setDevice(value)}
                                onChange={value => setAttributes({ buttonBorderRadius: value })}
                            />
                            {/* <Padding label={__('Padding')} value={padding} onChange={val => setAttributes({ padding: val })} min={0} max={60} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                    <BoxShadow label={__('Box-Shadow')} value={boxShadow} onChange={(value) => setAttributes({ boxShadow: value })} /> */}
                        </PanelBody>

                    </InspectorTab>
                    <InspectorTab key={'advance'}>
                    </InspectorTab>
                </InspectorTabs>

            </InspectorControls>

            <div className={`qubely-block-${uniqueId}`}>
                <div className={wrappeprClasses}>
                    {
                        loading ?
                            <div className="qubely-woo_product_loading">
                                <Spinner />
                            </div>
                            :
                            totalProducts ? products.map(({ name, id, permalink, price, description, images, on_sale, regular_price, sale_price }) => (
                                <div className="qubely-woo_product" key={id}>
                                    {style === 1 && renderImages(images)}
                                    <a className="qubely-product-name" href={permalink}>{name}</a>
                                    {
                                        on_sale ?
                                            <div className="qubely-product-price">
                                                <div className="ws-regular-price"><s>${regular_price}</s></div>
                                                <div className="ws-sale-price">${sale_price}</div>
                                            </div>
                                            :
                                            <div className="qubely-product-price">${price}</div>
                                    }

                                    <div
                                        className="qubely-product-description"
                                        dangerouslySetInnerHTML={{
                                            __html: truncate(description, 20),

                                        }}
                                    />
                                    {style === 2 && renderImages(images)}
                                    <div className="qubely-addtocart-wrapper">
                                        <RichText
                                            keepPlaceholderOnFocus
                                            value={addToCartButtonText}
                                            placeholder={__('Add Text...')}
                                            className="qubely_aaddtocart_button"
                                            onChange={value => setAttributes({ addToCartButtonText: value })}
                                        />
                                    </div>
                                </div>

                            ))
                                :
                                <div className="qubely-woo_product-not-found">
                                    {__('No products found')}
                                </div>
                    }
                </div>
            </div>

        </Fragment >
    )

}


export default withCSSGenerator()(Edit);