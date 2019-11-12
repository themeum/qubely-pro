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
    IconButton
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


export default function Edit(props) {

    const {
        name,
        clientId,
        attributes,
        setAttributes,
        attributes: {
            uniqueId,
        }
    } = props

    useEffect(() => {
        const _client = clientId.substr(0, 6)

        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client })
        }

    })

    if (uniqueId) { CssGenerator(attributes, 'wooproducts', uniqueId) }

    return (
        <Fragment>

            <InspectorControls>



            </InspectorControls>

            <div className={`qubely-block-${uniqueId}`}>
                <p>Init woo prodructs block</p>
            </div>

        </Fragment>
    )

}


