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
    RangeControl,
    ColorPicker
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
    ButtonGroup,
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
            imageBorderRadius,

            //product card
            contentPosition,
            girdContentPosition,
            cardPadding,
            gridInfoPadding,
            infoPadding,
            //Typograhy
            titleTypography,
            buttonTypography,
            priceTypo,
            discountTypo,

            //colors
            titleColor,
            discount,
            titleHoverColor,

            //Spacing
            titleSpace,
            priceSpacing,
            //other
            cardBorderRadius,
            cardBoxShadow,
            //stack
            stackBg,
            stackWidth,
            stackSpace,
            stackBorderRadius,
            stackPadding,
            stackBoxShadow,
            cardSpace,
            gridCardSpace,
            addToCartButtonText,
            buttonColor,
            buttonHoverColor,
            buttonPadding,
            buttonBgColor,
            buttonHoverBgColor,
            buttonBorder,
            buttonBorderRadius,
            recreateStyles,
            blockPadding,
            bgColor,
            border,
            borderRadius,
            boxShadow,
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
            case 'title-desc':
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
            case 'menu_order':
                orderbyArgs.orderby = 'menu_order';
                orderbyArgs.order = 'asc';
                break;
            default:
                orderbyArgs.orderby = orderby;

        }
        return (orderbyArgs)
    }

    const loadProducts = () => {
        const args = {
            ...setOderingQueryArgs(),
            per_page: productsPerPage,
            // page: currentPage,
        };

        // if (productsStatus === 'on_sale') {
        //     args.on_sale = 1;
        // } else if (productsStatus === 'featured') {
        //     args.featured = 1;
        // }

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

    console.log('products : ', products);



    const wrappeprClasses = classnames('qubely_woo_products_wrapper',
        { ['qubely_list_layout']: layout === 1 },
        { ['qubely_grid_layout']: layout === 2 },
        { [`md_has_${columns['md']}_columns`]: layout === 2 },
        { [`sm_has_${columns['sm']}_columns`]: layout === 2 },
        { [`xs_has_${columns['xs']}_columns`]: layout === 2 });

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
                            {
                                layout === 2 && <Fragment>
                                    <Range
                                        min={1}
                                        step={1}
                                        max={6}
                                        responsive
                                        device={device}
                                        value={columns}
                                        label={__("Select Columns")}
                                        onDeviceChange={value => setDevice(value)}
                                        onChange={(value) => setAttributes({ columns: value })}
                                    />
                                    <Range
                                        label={__("Card Space")}
                                        value={gridCardSpace}
                                        unit={["px", "em", "%"]}
                                        min={0}
                                        max={100}
                                        responsive
                                        device={device}
                                        onDeviceChange={(value) => setDevice(value)}
                                        onChange={(value) => setAttributes({ gridCardSpace: value })}
                                    />
                                </Fragment>
                            }
                        </PanelBody>
                        <PanelBody title={__('Query')} initialOpen={false} onToggle={() => !categories && getCategoris()}>

                            {/* <SelectControl
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
                            /> */}

                            {
                                totalProducts !== 0 &&
                                <RangeControl
                                    label={__('Number of Products')}
                                    value={productsPerPage}
                                    min='1'
                                    max={totalProducts}
                                    onChange={val => setAttributes({ productsPerPage: val })}
                                />

                            }


                            {/* {
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
                            } */}

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
                                        value: 'price_desc',
                                    },
                                    {
                                        label: __('Rating - highest first'),
                                        value: 'rating',
                                    },
                                    {
                                        label: __('Sales - poplular first'),
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



                        <PanelBody title={__('Product Card')} initialOpen={false}>
                            <Styles
                                columns={3}
                                value={style}
                                onChange={(style) => setAttributes({ style })}
                                options={[
                                    { value: 1, svg: icons.postgrid_design_1 },
                                    {
                                        value: 2,
                                        svg: layout === 1 ? icons.postgrid_design_3 : icons.postgrid_design_2,
                                    },
                                    {
                                        value: 3,
                                        svg: layout === 1 ? icons.postgrid_design_5 : icons.postgrid_design_4,
                                    }
                                ]}
                            />
                            <ButtonGroup
                                label={__("Content Align")}
                                options={
                                    layout === 2 ? [
                                        [__("Left"), "left"],
                                        [__("Middle"), "center"],
                                        [__("Right"), "right"],
                                    ]
                                        : [
                                            [__("Top"), "flex-start"],
                                            [__("Middle"), "center"],
                                            [__("Bottom"), "flex-end"],
                                        ]
                                }
                                value={layout === 1 ? contentPosition : girdContentPosition}
                                onChange={(value) => setAttributes(layout === 1 ? { contentPosition: value } : { girdContentPosition: value })}
                            />

                            {
                                (layout === 1 && style !== 3) &&
                                <Fragment>
                                    <Padding
                                        min={0}
                                        max={300}
                                        responsive
                                        value={cardPadding}
                                        device={device}
                                        label={__('Card Padding')}
                                        unit={['px', 'em', '%']}
                                        onChange={val => setAttributes({ cardPadding: val })}
                                        onDeviceChange={value => setDevice(value)}
                                    />
                                </Fragment>

                            }
                            {
                                style !== 3 &&
                                <Fragment>
                                    <Padding
                                        min={0}
                                        max={300}
                                        responsive
                                        device={device}
                                        label={__('Info Padding')}
                                        unit={['px', 'em', '%']}
                                        value={layout === 1 ? infoPadding : gridInfoPadding}
                                        onChange={val => setAttributes(layout === 1 ? { infoPadding: val } : { gridInfoPadding: val })}
                                        onDeviceChange={value => setDevice(value)}
                                    />
                                </Fragment>
                            }
                            {
                                style === 2 &&
                                <Fragment>
                                    <Range
                                        label={__("Card Space")}
                                        value={cardSpace}
                                        onChange={(value) => setAttributes({ cardSpace: value })}
                                        unit={["px", "em", "%"]}
                                        min={0}
                                        max={100}
                                        responsive
                                        device={device}
                                        onDeviceChange={(value) => setDevice(value)}
                                    />
                                    <BorderRadius
                                        min={0}
                                        max={100}
                                        responsive
                                        device={device}
                                        label={__("Card Radius")}
                                        value={cardBorderRadius}
                                        unit={["px", "em", "%"]}
                                        onChange={(cardBorderRadius) => setAttributes({ cardBorderRadius })}
                                        onDeviceChange={(value) => setDevice(value)}
                                    />
                                    <BoxShadow
                                        label={__("Card Box-Shadow")}
                                        value={cardBoxShadow}
                                        onChange={(value) => setAttributes({ cardBoxShadow: value })}
                                    />
                                </Fragment>
                            }
                            {style === 3 &&
                                <Fragment>
                                    <ColorAdvanced
                                        label={__("Stack Background")}
                                        value={stackBg}
                                        onChange={(value) => setAttributes({ stackBg: value })}
                                    />
                                    {layout === 2 && (
                                        <Range
                                            label={__("Stack Size")}
                                            value={stackWidth}
                                            onChange={(value) =>
                                                setAttributes({ stackWidth: value })
                                            }
                                            unit={["px", "em", "%"]}
                                            min={50}
                                            max={600}
                                            responsive
                                            device={device}
                                            onDeviceChange={value => setDevice(value)}
                                        />
                                    )}
                                    {layout === 1 && (
                                        <Range
                                            label={__("Stack Space")}
                                            value={stackSpace}
                                            onChange={(value) =>
                                                setAttributes({ stackSpace: value })
                                            }
                                            unit={["px", "em", "%"]}
                                            min={0}
                                            max={100}
                                            responsive
                                            device={device}
                                            onDeviceChange={value => setDevice(value)}
                                        />
                                    )}
                                    <BorderRadius
                                        min={0}
                                        max={100}
                                        responsive
                                        device={device}
                                        label={__("Stack Corner")}
                                        value={stackBorderRadius}
                                        unit={["px", "em", "%"]}
                                        onChange={(value) =>
                                            setAttributes({ stackBorderRadius: value })
                                        }
                                        onDeviceChange={value => setDevice(value)}
                                    />
                                    <Padding
                                        label={__("Stack Padding")}
                                        value={stackPadding}
                                        onChange={(val) => setAttributes({ stackPadding: val })}
                                        min={0}
                                        max={60}
                                        unit={["px", "em", "%"]}
                                        responsive
                                        device={device}
                                        onDeviceChange={value => setDevice(value)}
                                    />
                                    <BoxShadow
                                        label={__("Stack Box Shadow")}
                                        value={stackBoxShadow}
                                        onChange={(stackBoxShadow) => setAttributes({ stackBoxShadow })}
                                    />
                                </Fragment>
                            }
                        </PanelBody>

                        <PanelBody title={__('Image Settings')} initialOpen={false}>
                            <RadioAdvanced label={__('Image Width')} value={imageSize} onChange={(value) => setAttributes({ imageSize: value, recreateStyles: !recreateStyles })}
                                options={[
                                    { label: __('S'), value: '150px', title: __('Small') },
                                    { label: __('M'), value: '250px', title: __('Medium') },
                                    { label: __('L'), value: '350px', title: __('Large') },
                                    { icon: 'fas fa-cog', value: 'custom', title: __('Custom') },
                                ]}
                            />
                            {imageSize == 'custom' &&
                                <Fragment>
                                    <Range label={__('Custom Width')} value={imageSizeCustom} onChange={val => setAttributes({ imageSizeCustom: val })} min={50} max={600} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => setDevice(value)} />
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
                                    <Range label={__('Custom Height')} value={imageCustomHeight} onChange={val => setAttributes({ imageCustomHeight: val })} min={50} max={600} responsive unit={['px', 'em', '%']} device={device} onDeviceChange={value => setDevice(value)} />
                                    <Separator />
                                </Fragment>
                            }
                            <BorderRadius
                                min={0}
                                max={100}
                                responsive
                                device={device}
                                label={__("Image Radius")}
                                value={imageBorderRadius}
                                unit={["px", "em", "%"]}
                                onChange={(value) => setAttributes({ imageBorderRadius: value })}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                        </PanelBody>
                        <PanelBody title={__("Typography")} initialOpen={false}>
                            <Typography
                                label={__("Title")}
                                value={titleTypography}
                                device={device}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                            <Separator />
                            <Typography
                                label={__("Price")}
                                value={priceTypo}
                                device={device}
                                onChange={(value) => setAttributes({ priceTypo: value })}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                            <Separator />
                            <Typography
                                label={__("Discount")}
                                value={discountTypo}
                                device={device}
                                onChange={(value) => setAttributes({ discountTypo: value })}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                            <Separator />
                            <Typography
                                label={__("Button")}
                                value={buttonTypography}
                                device={device}
                                onChange={(value) => setAttributes({ buttonTypography: value })}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                            <Separator />
                        </PanelBody>

                        <PanelBody title={__("Colors")} initialOpen={false}>
                            <Tabs>
                                <Tab tabTitle={__('Normal')}>
                                    <Color label={__('Title')} value={titleColor} onChange={(titleColor) => setAttributes({ titleColor })} />
                                    <Color label={__('Discount')} value={discount} onChange={(titleColor) => setAttributes({ discount })} />
                                </Tab>
                                <Tab tabTitle={__('Hover')}>
                                    <Color label={__('Title Color')} value={titleHoverColor} onChange={(titleHoverColor) => setAttributes({ titleHoverColor })} />
                                </Tab>
                            </Tabs>
                        </PanelBody>

                        <PanelBody title={__("Spacing")} initialOpen={false}>
                            <Range
                                label={__("Title")}
                                value={titleSpace}
                                onChange={(value) => setAttributes({ titleSpace: value })}
                                unit={["px", "em", "%"]}
                                min={0}
                                max={100}
                                responsive
                                device={device}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                            <Range
                                label={__("Price")}
                                value={priceSpacing}
                                onChange={(value) => setAttributes({ priceSpacing: value })}
                                unit={["px", "em", "%"]}
                                min={0}
                                max={100}
                                responsive
                                device={device}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                        </PanelBody>

                        <PanelBody title={__('Button')} initialOpen={false}>
                            <Tabs>
                                <Tab tabTitle={__('Normal')}>
                                    <Color
                                        label={__('Text Color')}
                                        value={buttonColor}
                                        onChange={(buttonColor) => setAttributes({ buttonColor })}
                                    />
                                    <ColorAdvanced
                                        label={__('Background')}
                                        value={buttonBgColor}
                                        onChange={value => setAttributes({ buttonBgColor: value })}
                                    />   </Tab>
                                <Tab tabTitle={__('Hover')}>
                                    <Color
                                        label={__('Text Color')}
                                        value={buttonHoverColor}
                                        onChange={(buttonHoverColor) => setAttributes({ buttonHoverColor })}
                                    />
                                    <ColorAdvanced
                                        label={__('Background')}
                                        value={buttonHoverBgColor}
                                        onChange={value => setAttributes({ buttonHoverBgColor: value })}
                                    />
                                </Tab>
                            </Tabs>

                            <Padding
                                min={0}
                                max={300}
                                responsive
                                value={buttonPadding}
                                device={device}
                                label={__('Padding')}
                                unit={['px', 'em', '%']}
                                onChange={val => setAttributes({ buttonPadding: val })}
                                onDeviceChange={value => setDevice(value)}
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

                        </PanelBody>

                        <PanelBody title={__('Design')} initialOpen={false}>
                            <ColorAdvanced
                                label={__("Background")}
                                value={bgColor}
                                onChange={(value) => setAttributes({ bgColor: value })}
                            />
                            <Border
                                label={__("Border")}
                                value={border}
                                onChange={(val) => setAttributes({ border: val })}
                                min={0}
                                max={10}
                                unit={["px", "em", "%"]}
                                responsive
                                device={device}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                            <BorderRadius
                                min={0}
                                max={100}
                                responsive
                                device={device}
                                label={__("Corner")}
                                value={borderRadius}
                                unit={["px", "em", "%"]}
                                onChange={(value) =>
                                    setAttributes({ borderRadius: value })
                                }
                                onDeviceChange={(value) => setDevice(value)}
                            />
                            <Padding
                                min={0}
                                max={300}
                                responsive
                                value={blockPadding}
                                device={device}
                                label={__('Padding')}
                                unit={['px', 'em', '%']}
                                onChange={val => setAttributes({ blockPadding: val })}
                                onDeviceChange={value => setDevice(value)}
                            />
                            <BoxShadow
                                label={__("Box-Shadow")}
                                value={boxShadow}
                                onChange={(value) => setAttributes({ boxShadow: value })}
                            />
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
                            <div className="qubely_woo_product_loading">
                                <Spinner />
                            </div>
                            :
                            totalProducts ? products.map(({ name, id, permalink, price, description, images, on_sale, regular_price, sale_price }) => (
                                <div className="qubely_woo_product_wrapper" key={id}>
                                    <div className="qubely_woo_product">
                                        {renderImages(images)}
                                        <div className="qubely-product-info">
                                            <a className="qubely-product-name" href={permalink}>{name}</a>
                                            {
                                                on_sale ?
                                                    <div className="qubely-product-price">
                                                        <div className="qubely-regular-price"><s>${regular_price}</s></div>
                                                        <div className="qubely-sale-price">${sale_price}</div>
                                                    </div>
                                                    :
                                                    <div className="qubely-product-price">${price}</div>
                                            }
                                            <div className="qubely-addtocart-wrapper">
                                                <RichText
                                                    keepPlaceholderOnFocus
                                                    value={addToCartButtonText}
                                                    placeholder={__('Add Text...')}
                                                    className="qubely_adtocart_button"
                                                    onChange={value => setAttributes({ addToCartButtonText: value })}
                                                />
                                            </div>
                                        </div>
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