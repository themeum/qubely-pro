import classnames from 'classnames';
const { __ } = wp.i18n;
const { withSelect } = wp.data
const { compose } = wp.compose;
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
    Placeholder,
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
    Margin,
    Separator,
    Carousel,
    Inline: {
        InlineToolbar
    },
    withCSSGenerator,
    gloalSettings: {
        globalSettingsPanel,
        animationSettings,
        interactionSettings
    },
    Pagination,
    InspectorTabs,
    InspectorTab
} = wp.qubelyComponents

import icons from '../../helpers/icons'
import { getAllProducts, getProducts } from './getProducts'

function Edit(props) {
    const [currentPage, updateCurrentPage] = useState(1);
    const [totalProducts, updateTotalProducts] = useState(0);
    const [device, setDevice] = useState('md');
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState(null);
    const {
        name,
        clientId,
        attributes,
        setAttributes,
        attributes: {
            uniqueId,

            page,
            //query
            orderby,
            productsPerPage,
            productsStatus,
            selectedCatagories,

            //layout attributes
            style,

            //image
            imageSize,
            imageSizeCustom,
            imageHeight,
            imageCustomHeight,
            imageBorderRadius,

            //product card
            contentPosition,
            ContentPosition,
            gridInfoPadding,
            cardPadding,
            infoPadding,
            productBorderRadius,
            productBgColor,
            productBorder,
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
            gridStackWidth,
            stackSpace,
            stackBorderRadius,
            stackPadding,
            stackBoxShadow,
            cardSpace,
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
            //ratings
            showRatings,
            starsSize,
            ratingsColor,
            ratingsSpacing,
            showRatingsCount,
            ratingsCountSpacing,
            //pagination
            enablePagination,
            paginationType,
            pageAlignment,
            paginationTypography,
            pagesColor,
            pagesHoverColor,
            pagesActiveColor,
            pagesbgColor,
            pagesbgHoverColor,
            pagesbgActiveColor,
            pagesBorder,
            pagesHoverBorder,
            pagesActiveBorder,
            pagesShadow,
            pagesHoverShadow,
            pagesActiveShadow,
            pagesBorderRadius,
            pagePadding,
            pageMargin,
            //Carousel
            autoPlay,
            postitems,
            isCentered,
            speed,
            interval,
            dragable,
            activeFade,
            nav,
            arrowStyle,
            horizontalPosition,
            verticalPosition,
            shapeWidth,
            navSize,
            navColor,
            navShapeColor,
            navBorderColor,
            navigationRadius,
            navHoverColor,
            navShapeHoverColor,
            navBorderHoverColor,
            navHoverRadius,
            dotPosition,
            dots,
            dotwidth,
            dotHeight,
            dotBorderRadius,
            dotColor,
            dotActiveColor,
            sliderItemsSpace,
            sliderItemMargin,
            dotalignment,
            textalignment,
        }
    } = props


    useEffect(() => {
        const _client = clientId.substr(0, 6)
        getAllProducts({})
        .then((productsData) => {
            updateTotalProducts(productsData.totalProducts);
        })
        .catch(async (e) => {
            console.log('no products found');
        });

        loadProducts();

        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }

    }, [])


    useEffect(() => {
        setLoading(true);
        loadProducts();
    }, [currentPage]);

    useEffect(() => {
        updateCurrentPage(1);
        setLoading(true);
        loadProducts();
    }, [ productsStatus, orderby, productsPerPage, selectedCatagories]);

    const getCategoris = () => {
        apiFetch({
            path: '/wc/v3/products/categories',
        }).then((response) => {
            return response.map(({ count, id, name, slug }) => ({ count, id, name, slug, }));
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
    const setCatArgs = () => {
        let categoryArgs = {};
        categoryArgs = {
            category: selectedCatagories.map(({ value }) => value),
        }
        return (categoryArgs);
    }
    const loadProducts = () => {
        // const args = {
        //     ...setOderingQueryArgs(),
        //     ...setCatArgs(),
        //     ...(productsStatus === 'featured' && { featured: true }),
        //     ...(productsStatus === 'onsale' && { on_sale: true }),
        //     per_page: productsPerPage,
        //     page: currentPage,
        // };
        getProducts({ ...props.attributes, page: currentPage })
            .then((products) => {
                setLoading(false);
                setError(null);
                setProducts(products);
                updateTotalProducts(products[0].all_products);
            })
            .catch(async (e) => {
                setProducts([])
                setLoading(false)
                setError(null)
            });
    }

    
    const renderImages = (img_url, img_id) => {
        const className = classnames("qubely-woo_product-image-wrapper", { ['width-placeholder']: img_url });
        return (
            <div className={className}>
                {
                    img_url ? <img className="qubely-woo_product-image" src={img_url} alt={img_id} />
                        :
                        <div className="qubely-image-placeholder" />
                }
            </div>
        )
    }


    let pages = 0;
    if (totalProducts && totalProducts !== 0) {
        pages = Math.ceil(totalProducts / productsPerPage);
    }


    const carouselSettings = {
        nav: nav,
        dots: dots,
        margin: sliderItemMargin,
        speed: speed,
        items: {
            ...postitems,
            ...(totalProducts && totalProducts < postitems.md) && { md: totalProducts },
            ...(totalProducts && totalProducts < postitems.sm) && { sm: totalProducts },
            ...(totalProducts && totalProducts < postitems.xs) && { xs: totalProducts },
        },
        autoplay: autoPlay,
        interval: interval,
        center: isCentered,
        arrowStyle: arrowStyle,
        arrowPosition: verticalPosition,
        responsive: [
            {
                viewport: 1170,
                items: (totalProducts && totalProducts < postitems.md) ? totalProducts : postitems.md
            },
            {
                viewport: 980,
                items: (totalProducts && totalProducts < postitems.sm) ? totalProducts : postitems.sm
            },
            {
                viewport: 580,
                items: (totalProducts && totalProducts < postitems.xs) ? totalProducts : postitems.xs
            },
        ],
    }

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={['style', 'advance']}>
                    <InspectorTab key={'style'}>
                        <PanelBody title={__('')} opened={true}>
                            <Styles
                                columns={3}
                                value={style}
                                onChange={(style) => setAttributes({ style })}
                                options={[
                                    { value: 1, svg: icons.postgrid_design_1 },
                                    {
                                        value: 2,
                                        svg: icons.postgrid_design_2,
                                    },
                                    {
                                        value: 3,
                                        svg: icons.postgrid_design_4,
                                    }
                                ]}
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
                                        value: 'onsale',
                                    },
                                ]}
                                onChange={value => setAttributes({ productsStatus: value })}
                            />
                            {
                                categories ?
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
                                    :
                                    <Fragment>
                                        <div className="qubely-field"> {__('Products by Categories')}</div>
                                        <Spinner />
                                    </Fragment>

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
                            {
                                style === 3 && (
                                    <ButtonGroup
                                        label={__("Content Align")}
                                        options={
                                            [
                                                [__("Left"), "flex-start"],
                                                [__("Middle"), "center"],
                                                [__("Right"), "flex-end"],
                                            ]
                                        }
                                        value={ContentPosition}
                                        onChange={(value) => setAttributes({ ContentPosition: value })}
                                    />
                                )
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
                                        value={gridInfoPadding}
                                        onChange={val => setAttributes({ gridInfoPadding: val })}
                                        onDeviceChange={value => setDevice(value)}
                                    />
                                </Fragment>
                            }
                            {
                                style === 2 &&
                                <Fragment>
                                    <Padding
                                        min={0}
                                        max={300}
                                        responsive
                                        device={device}
                                        label={__('Card Padding')}
                                        unit={['px', 'em', '%']}
                                        value={cardPadding}
                                        onChange={val => setAttributes({ cardPadding: val })}
                                        onDeviceChange={value => setDevice(value)}
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
                                    <Range
                                        label={__("Stack Size")}
                                        unit={["px", "em", "%"]}
                                        min={50}
                                        max={600}
                                        responsive
                                        device={device}
                                        onDeviceChange={value => setDevice(value)}
                                        value={gridStackWidth}
                                        onChange={(value) => setAttributes({ gridStackWidth: value })}
                                    />

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
                            <ColorAdvanced
                                label={__("Product Background")}
                                value={productBgColor}
                                onChange={(value) => setAttributes({ productBgColor: value })}
                            />
                            <Border
                                label={__("Product Border")}
                                value={productBorder}
                                onChange={(val) => setAttributes({ productBorder: val })}
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
                                label={__("Product Corner")}
                                value={productBorderRadius}
                                unit={["px", "em", "%"]}
                                onChange={(value) =>
                                    setAttributes({ productBorderRadius: value })
                                }
                                onDeviceChange={(value) => setDevice(value)}
                            />
                        </PanelBody>
                        <PanelBody title={__('Carousel Settings')} initialOpen={false}>

                            <Toggle label={__('Show Arrow Navigation')} value={nav} onChange={value => setAttributes({ nav: value })} />
                            <Toggle label={__('Show Dot Navigation')} value={dots} onChange={value => setAttributes({ dots: value })} />


                            <Toggle label={__('Autoplay')} value={autoPlay} onChange={value => setAttributes({ autoPlay: value })} />
                            {autoPlay &&
                                <Fragment>
                                    <Range label={__('Speed (ms)')} value={speed} onChange={value => setAttributes({ speed: parseInt(value) })} min={500} max={5000} />
                                    <Range label={__('Interval (ms)')} value={interval} onChange={value => setAttributes({ interval: parseInt(value) })} min={500} max={5000} />
                                </Fragment>
                            }
                            {/* <Toggle
                                label={__('Centered Slides')}
                                value={isCentered}
                                onChange={value => setAttributes({ isCentered: value })}
                            /> */}
                            <Range
                                label={__('Number of Columns')}
                                min={1}
                                max={20}
                                responsive
                                device={device}
                                value={postitems}
                                onChange={value => setAttributes({ postitems: value })}
                                onDeviceChange={value => setDevice(value)}
                            />

                            <Range
                                min={0}
                                max={100}
                                label={__('Gutter')}
                                value={sliderItemMargin}
                                onChange={value => setAttributes({ sliderItemMargin: parseInt(value) })}
                            />
                        </PanelBody>

                        {nav &&
                            <PanelBody title={__('Arrow Settings')} initialOpen={false}>
                                <ButtonGroup
                                    label={__('Navigation Style')}
                                    options={[[<span className="dashicons dashicons-arrow-right-alt" />, 'arrowright'], [<span className="dashicons dashicons-arrow-right-alt2" />, 'arrowright2']]}
                                    value={arrowStyle}
                                    onChange={value => setAttributes({ arrowStyle: value })}
                                />
                                <Range
                                    label={__('Horizontal Position')}
                                    value={horizontalPosition}
                                    onChange={(value) => setAttributes({ horizontalPosition: value })}
                                    min={-100} max={100}
                                    responsive unit={['px', 'em', '%']}
                                    device={device}
                                    onDeviceChange={value => setDevice(value)}
                                />
                                <Range
                                    label={__('Vertical Position')}
                                    value={verticalPosition} onChange={(value) => setAttributes({ verticalPosition: value })}
                                    min={1} max={100}
                                    responsive unit={['px', 'em', '%']}
                                    device={device}
                                    onDeviceChange={value => setDevice(value)}
                                />
                                <Range
                                    label={__('Shape Size')}
                                    value={shapeWidth} onChange={(value) => setAttributes({ shapeWidth: value })}
                                    min={1} max={100}
                                    responsive unit={['px', 'em', '%']}
                                    device={device}
                                    onDeviceChange={value => setDevice(value)}
                                />
                                <Range
                                    label={__('Arrow Size')}
                                    value={navSize} onChange={(value) => setAttributes({ navSize: value })}
                                    min={0} max={100}
                                    responsive unit={['px', 'em', '%']}
                                    device={device}
                                    onDeviceChange={value => setDevice(value)}
                                />
                                <Tabs>
                                    <Tab tabTitle={__('Normal')}>
                                        <Color label={__('Navigation Color')} value={navColor} onChange={(value) => setAttributes({ navColor: value })} />
                                        <Color label={__('Navigation Shape Color')} value={navShapeColor} onChange={val => setAttributes({ navShapeColor: val })} />
                                        <Border label={__('Navigation Border')} value={navBorderColor} onChange={val => setAttributes({ navBorderColor: val })} />
                                        <BorderRadius
                                            min={0}
                                            max={100}
                                            responsive
                                            device={device}
                                            label={__('Navigation Corner')}
                                            value={navigationRadius}
                                            unit={['px', 'em', '%']}
                                            onChange={value => setAttributes({ navigationRadius: value })}
                                            onDeviceChange={value => setDevice(value)}
                                        />
                                    </Tab>
                                    <Tab tabTitle={__('Hover')}>
                                        <Color label={__('Navigation Color')} value={navHoverColor} onChange={(value) => setAttributes({ navHoverColor: value })} />
                                        <Color label={__('Shape Color')} value={navShapeHoverColor} onChange={val => setAttributes({ navShapeHoverColor: val })} />
                                        <Border label={__('Border Color')} value={navBorderHoverColor} onChange={val => setAttributes({ navBorderHoverColor: val })} />
                                        <BorderRadius
                                            label={__('Corner Radius')}
                                            value={navHoverRadius} onChange={(value) => setAttributes({ navHoverRadius: value })}
                                            min={1} max={100}
                                            responsive unit={['px', 'em', '%']}
                                            device={device}
                                            onDeviceChange={value => setDevice(value)}
                                        />
                                    </Tab>
                                </Tabs>

                            </PanelBody>
                        }
                        {dots &&
                            <PanelBody title={__('Dot Settings')} initialOpen={false}>
                                <Range
                                    label={__('Dot Position')}
                                    value={dotPosition} onChange={(value) => setAttributes({ dotPosition: value })}
                                    min={-200} max={200}
                                    responsive unit={['px', 'em', '%']}
                                    device={device}
                                    onDeviceChange={value => setDevice(value)}
                                />
                                <Range
                                    label={__('Dot Width')}
                                    value={dotwidth} onChange={(value) => setAttributes({ dotwidth: value })}
                                    min={1} max={100}
                                    responsive unit={['px', 'em', '%']}
                                    device={device}
                                    onDeviceChange={value => setDevice(value)}
                                />
                                <Range
                                    label={__('Dot Height')}
                                    value={dotHeight} onChange={(value) => setAttributes({ dotHeight: value })}
                                    min={1} max={100}
                                    responsive unit={['px', 'em', '%']}
                                    device={device}
                                    onDeviceChange={value => setDevice(value)}
                                />
                                <Range
                                    label={__('Dot Border Radius')}
                                    value={dotBorderRadius}
                                    onChange={(value) => setAttributes({ dotBorderRadius: value })}
                                    min={1} max={100}
                                    responsive unit={['px', 'em', '%']}
                                    device={device}
                                    onDeviceChange={value => setDevice(value)}
                                />
                                <ButtonGroup
                                    label={__('Dot Alignment')}
                                    options={[[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']]}
                                    value={dotalignment}
                                    onChange={value => setAttributes({ dotalignment: value })}
                                />
                                <Tabs>
                                    <Tab tabTitle={__('Normal')}>
                                        <ColorAdvanced label={__('Dot Color')} value={dotColor} onChange={val => setAttributes({ dotColor: val })} />
                                    </Tab>
                                    <Tab tabTitle={__('Active')}>
                                        <ColorAdvanced label={__('Dot Active Color')} value={dotActiveColor} onChange={val => setAttributes({ dotActiveColor: val })} />
                                    </Tab>
                                </Tabs>

                            </PanelBody>
                        }

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
                                    { label: __('S'), value: '150px', title: __('Small') },
                                    { label: __('M'), value: '250px', title: __('Medium') },
                                    { label: __('L'), value: '350px', title: __('Large') },
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
                        <PanelBody title={__('Ratings')} initialOpen={false}>

                            <Toggle label={__('Show Ratings')} value={showRatings} onChange={val => setAttributes({ showRatings: val })} />
                            {
                                showRatings && (
                                    <Fragment>
                                        <Color
                                            label={__('Color')}
                                            value={ratingsColor}
                                            onChange={(value) => setAttributes({ ratingsColor: value })} />
                                        <Range
                                            label={__('Stars Size')}
                                            value={starsSize}
                                            onChange={(value) => setAttributes({ starsSize: value })}
                                            unit={['px', 'em', '%']}
                                            min={10}
                                            max={48}
                                            responsive
                                            device={device}
                                            onDeviceChange={(value) => setDevice(value)}
                                        />
                                        <Range
                                            label={__('Spacing')}
                                            value={ratingsSpacing}
                                            onChange={(value) => setAttributes({ ratingsSpacing: value })}
                                            unit={['px', 'em', '%']}
                                            min={0}
                                            max={200}
                                            responsive
                                            device={device}
                                            onDeviceChange={(value) => setDevice(value)}
                                        />
                                        <Toggle label={__('Show Ratings Count')} value={showRatingsCount} onChange={val => setAttributes({ showRatingsCount: val })} />
                                        {
                                            showRatingsCount && (
                                                <Range
                                                    label={__('Count Spacing')}
                                                    value={ratingsCountSpacing}
                                                    onChange={(value) => setAttributes({ ratingsCountSpacing: value })}
                                                    unit={['px', '%']}
                                                    min={5}
                                                    max={100}
                                                    responsive
                                                    device={device}
                                                    onDeviceChange={(value) => setDevice(value)}
                                                />
                                            )
                                        }

                                    </Fragment>
                                )
                            }
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
                                    <Color label={__('Discount')} value={discount} onChange={(discount) => setAttributes({ discount })} />
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
                <div className="qubely_woo_carousel_wrapper">
                    {
                        loading ?
                            <div className="qubely_woo_product_loading">
                                <Spinner />
                            </div>
                            :
                            products && products.length > 1 ?
                                <Carousel options={carouselSettings}>
                                    {
                                        products.map(({ name, id, permalink, price, img_url, img_id, on_sale, regular_price, sale_price, average_rating, rating_count }) => (
                                            <div className="qubely-carousel-item" key={id}>
                                                <div className="qubely_woo_product_wrapper" key={id}>
                                                    <div className="qubely_woo_product">
                                                    {renderImages(img_url, img_id)}
                                                        <div className="qubely-product-info">
                                                            {
                                                                showRatings &&
                                                                <div className="qubely-product-ratings-wrapper">
                                                                    <div className="qubely-product-ratings" style={{ '--qubely-product-rating': `${average_rating * 20}%` }} />
                                                                    {(showRatingsCount && rating_count !== 0) && <span className="qubely-ratings-count">{__(`(${rating_count})`)}</span>}
                                                                </div>
                                                            }
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
                                            </div>
                                        ))
                                    }
                                </Carousel>
                                :
                                products && products.length === 1 ?
                                    <div className="qubely-woo_product-not-found">
                                        <Placeholder
                                            icon="admin-post"
                                            label={__('Insufficient Products for Carousel')}
                                       />
                                    </div>
                                    :
                                    <div className="qubely-woo_product-not-found">
                                        <Placeholder
                                            icon="admin-post"
                                            label={__('No products found')}
                                        >
                                            <Spinner />
                                        </Placeholder>
                                    </div>
                    }
                </div>
            </div>

        </Fragment>
    )

}


export default withCSSGenerator()(Edit);