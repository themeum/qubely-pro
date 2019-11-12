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


export default function Edit(props) {
    const [mounting, changeMountFlag] = useState(true)
    const [products, setProducts] = useState(null)
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

    const loadProducts = () => {
        setProducts([])
        setLoading(true)
        const args = {
            // ...this.getSortArgs(sortValue),
            // per_page: attributes.columns * attributes.rows,
            // page: currentPage,
            per_page: 10,
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


