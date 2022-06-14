import icons from "../../helpers/icons";
import classnames from "classnames";
const { __ } = wp.i18n;
const { Fragment, createRef, useState } = wp.element;

// const { compose } = wp.compose;

// const {
// withSelect,
// withDispatch
// } = wp.data;

const { PanelBody } = wp.components;

const { RichText, InspectorControls, InnerBlocks } = wp.blockEditor;

const {
    Color,
    Select,
    Range,
    Border,
    BorderRadius,
    BoxShadow,
    Toggle,
    Alignment,
    Headings,
    Typography,
    Styles,
    RadioAdvanced,
    Padding,
    Tabs,
    Tab,
    ColorAdvanced,
	InspectorTab,
	InspectorTabs,
	withCSSGenerator,
	InspectorSections,
	gloalSettings: { animationSettings, interactionSettings, globalSettingsPanel },
	ContextMenu: { ContextMenu, handleContextMenu },
} = wp.qubelyComponents;

const Edit = (props) => {
    const [device, setDevice] = useState("md");
    const qubelyContextMenu = createRef();

    const {
        name,
        clientId,
        attributes,
        setAttributes,
        attributes: {
            uniqueId,
            className,
            animation,
            interaction,
            enablePosition,
            selectPosition,
            positionXaxis,
            positionYaxis,
            globalZindex,
            zIndex,
            hideDesktop,
            hideTablet,
            hideMobile,
            globalCss,
            modalLinkText,
            buttonFillType,
            buttonAlignment,
            buttonSize,
            buttonPadding,
            buttonColor,
            buttonColor2,
            buttonHoverColor,
            buttonHoverColor2,
            buttonBgColor,
            buttonBgHoverColor,
            buttonBorder,
            borderHoverColor,
            buttonBorderRadius,
            buttonShadow,
            buttonHoverShadow,
            overlayColor,
            horizonalAlign,
            verticalAlign,
            modalBoxHeight,
            modalBoxFixedHeight,
            modalBoxWidth,
            modalBoxMaxWidth,
            boxBgColor,
            boxBorder,
            boxBorderRadius,
            modalBoxShadow,
            enableTitle,
            modalTitle,
            titleAlignment,
            titleLevel,
            titleTypography,
            titleColor,
            titleSpacing,
            enableCloseButton,
            closeButtonColor,
            closeButtonBgColor,
            closeButtonSize,
            closeButtonPadding,
            closeButtonRadius,
        },
    } = props;

    const modalTitleTagName = "h" + titleLevel;

    const classNames = classnames({ [`qubely-block-${uniqueId}`]: uniqueId }, className);

    return (
        <Fragment>
            <InspectorControls key="inspector">
                <InspectorTabs>
                    <InspectorTab key="layout">
                        <InspectorSections block="modal" />
                    </InspectorTab>
                    <InspectorTab key="style">
                        <PanelBody title={__("Modal Button Style")} initialOpen={false}>
                            <Styles
                                value={buttonFillType}
                                onChange={(value) => setAttributes({ buttonFillType: value })}
                                options={[
                                    { value: "fill", svg: icons.btn_fill, label: __("Fill") },
                                    {
                                        value: "outline",
                                        svg: icons.btn_outline,
                                        label: __("Outline"),
                                    },
                                ]}
                            />
                            <Alignment
                                responsive
                                disableJustify
                                device={device}
                                value={buttonAlignment}
                                label={__("Alignment")}
                                alignmentType="content"
                                onChange={(val) => setAttributes({ buttonAlignment: val })}
                                onDeviceChange={(value) => setDevice(value)}
                            />
                            <RadioAdvanced
                                label={__("Button Size")}
                                options={[
                                    { label: "S", value: "small", title: "Small" },
                                    { label: "M", value: "medium", title: "Medium" },
                                    { label: "L", value: "large", title: "Large" },
                                    { icon: "fas fa-cog", value: "custom", title: "Custom" },
                                ]}
                                value={buttonSize}
                                onChange={(value) => setAttributes({ buttonSize: value })}
                            />
                            {buttonSize == "custom" && (
                                <Padding
                                    label={__("Padding")}
                                    value={buttonPadding}
                                    onChange={(value) => setAttributes({ buttonPadding: value })}
                                    unit={["px", "em", "%"]}
                                    max={150}
                                    min={0}
                                    responsive
                                    device={device}
                                    onDeviceChange={(value) => setDevice(value)}
                                />
                            )}
                            <Tabs>
                                <Tab tabTitle={__("Normal")}>
                                    <Color
                                        label={__("Text Color")}
                                        value={buttonFillType == "fill" ? buttonColor : buttonColor2}
                                        onChange={(value) =>
                                            buttonFillType == "fill"
                                                ? setAttributes({ buttonColor: value })
                                                : setAttributes({ buttonColor2: value })
                                        }
                                    />
                                    {buttonFillType == "fill" && (
                                        <ColorAdvanced
                                            label={__("Background")}
                                            value={buttonBgColor}
                                            onChange={(value) => setAttributes({ buttonBgColor: value })}
                                        />
                                    )}
                                    <Border
                                        label={__("Border")}
                                        value={buttonBorder}
                                        onChange={(val) => setAttributes({ buttonBorder: val })}
                                        min={0}
                                        max={10}
                                        unit={["px", "em", "%"]}
                                        responsive
                                        device={device}
                                        onDeviceChange={(value) => this.setState({ device: value })}
                                    />
                                    <BoxShadow
                                        label={__("Box-Shadow")}
                                        value={buttonShadow}
                                        onChange={(value) => setAttributes({ buttonShadow: value })}
                                    />
                                </Tab>
                                <Tab tabTitle={__("Hover")}>
                                    <Color
                                        label={__("Text Color")}
                                        value={buttonFillType == "fill" ? buttonHoverColor : buttonHoverColor2}
                                        onChange={(value) =>
                                            buttonFillType == "fill"
                                                ? setAttributes({ buttonHoverColor: value })
                                                : setAttributes({ buttonHoverColor2: value })
                                        }
                                    />
                                    <ColorAdvanced
                                        label={__("Background")}
                                        value={buttonBgHoverColor}
                                        onChange={(value) => setAttributes({ buttonBgHoverColor: value })}
                                    />
                                    <Color
                                        label={__("Border Color")}
                                        value={borderHoverColor}
                                        onChange={(value) => setAttributes({ borderHoverColor: value })}
                                    />
                                    <BoxShadow
                                        label={__("Box-Shadow")}
                                        value={buttonHoverShadow}
                                        onChange={(value) => setAttributes({ buttonHoverShadow: value })}
                                    />
                                </Tab>
                            </Tabs>
                            <BorderRadius
                                label={__("Radius")}
                                value={buttonBorderRadius}
                                onChange={(value) => setAttributes({ buttonBorderRadius: value })}
                                min={0}
                                max={100}
                                unit={["px", "em", "%"]}
                                responsive
                                device={device}
                                onDeviceChange={(value) => this.setState({ device: value })}
                            />
                        </PanelBody>

                        <PanelBody title={__("Modal Overlay")} initialOpen={false}>
                            <Color
                                label={__("Overlay Background Color")}
                                value={overlayColor}
                                onChange={(value) => setAttributes({ overlayColor: value })}
                            />
                        </PanelBody>

                        <PanelBody title={__("Modal Position")} initialOpen={false}>
                            <Select
                                label={__("Modal Box Horizonal Align")}
                                options={["Center", "Left", "Right"]}
                                value={horizonalAlign}
                                onChange={(value) => setAttributes({ horizonalAlign: value })}
                            />
                            <Select
                                label={__("Modal Box Vertical Align")}
                                options={["Center", "Top", "Bottom"]}
                                value={verticalAlign}
                                onChange={(value) => setAttributes({ verticalAlign: value })}
                            />
                        </PanelBody>

                        <PanelBody title={__("Modal Box Size")} initialOpen={false}>
                            <Select
                                label={__("Box Height")}
                                options={["Fit to Content", "Fixed Minimum Height", "Full Screen Height"]}
                                value={modalBoxHeight}
                                onChange={(value) => setAttributes({ modalBoxHeight: value })}
                            />
                            
                            { modalBoxHeight === "Fixed Minimum Height" && (
                                <Range
                                    label={__("Minimum Height")}
                                    value={modalBoxFixedHeight}
                                    onChange={(value) => setAttributes({ modalBoxFixedHeight: value })}
                                    unit={["px", "em", "%"]}
                                    min={modalBoxFixedHeight.unit === "%" ? 5 : 200}
                                    max={modalBoxFixedHeight.unit === "%" ? 100 : 1000}
                                    responsive
                                    device={device}
                                    onDeviceChange={(value) => setDevice(value)}
                                />
                            )}

                            <Range
                                label={__("Box Width (%)")}
                                value={modalBoxWidth}
                                onChange={(value) => setAttributes({ modalBoxWidth: value })}
                                min={5}
                                max={100}
                            />
                            
                            <Range
                                label={__("Box Max Width")}
                                value={modalBoxMaxWidth}
                                onChange={(value) => setAttributes({ modalBoxMaxWidth: value })}
                                unit={["px", "em", "%"]}
                                min={modalBoxMaxWidth.unit === "%" ? 5 : 200}
                                max={modalBoxMaxWidth.unit === "%" ? 100 : 1000}
                                responsive
                                device={device}
                                onDeviceChange={(value) => setDevice(value)}
                                />
                        </PanelBody>

                        <PanelBody title={__("Modal Box Style")} initialOpen={false}>
                            <Color
                                label={__("Background Color")}
                                value={boxBgColor}
                                onChange={(value) => setAttributes({ boxBgColor: value })}
                            />

                            <Border
                                label={__("Border")}
                                value={boxBorder}
                                onChange={(val) => setAttributes({ boxBorder: val })}
                                min={0}
                                max={10}
                                unit={["px", "em", "%"]}
                                responsive
                                device={device}
                                onDeviceChange={(value) => setDevice(value)}
                            />

                            <BorderRadius
                                label={__("Radius")}
                                value={boxBorderRadius}
                                onChange={(value) => setAttributes({ boxBorderRadius: value })}
                                min={0}
                                max={100}
                                unit={["px", "em", "%"]}
                                responsive
                                device={device}
                                onDeviceChange={(value) => setDevice(value)}
                            />

                            <BoxShadow
                                label={__("Box-Shadow")}
                                value={modalBoxShadow}
                                onChange={(value) => setAttributes({ modalBoxShadow: value })}
                            />
                        </PanelBody>

                        <PanelBody title={__("Modal Title Style")} initialOpen={false}>
                            <Toggle
                                label={__("Enable")}
                                value={enableTitle}
                                onChange={(val) => setAttributes({ enableTitle: val })}
                            />
                            {enableTitle == 1 && (
                                <Fragment>
                                    <Alignment
                                        label={__("Alignment")}
                                        value={titleAlignment}
                                        onChange={(val) => setAttributes({ titleAlignment: val })}
                                        responsive
                                        device={device}
                                        onDeviceChange={(value) => setDevice(value)}
                                    />
                                    <Headings
                                        selectedLevel={titleLevel}
                                        onChange={(value) => setAttributes({ titleLevel: value })}
                                    />
                                    <Typography
                                        label={__("Typography")}
                                        value={titleTypography}
                                        onChange={(value) => setAttributes({ titleTypography: value })}
                                        device={device}
                                        onDeviceChange={(value) => setDevice(value)}
                                    />
                                    <Color
                                        label={__("Color")}
                                        value={titleColor}
                                        onChange={(value) => setAttributes({ titleColor: value })}
                                    />
                                    <Range
                                        label={
                                            <span>
                                                {__("Spacing")}{" "}
                                                <span className="dashicons dashicons-sort" title="Y Spacing" />
                                            </span>
                                        }
                                        value={titleSpacing}
                                        onChange={(val) => setAttributes({ titleSpacing: val })}
                                        min={0}
                                        max={200}
                                        unit={["px", "em", "%"]}
                                        responsive
                                        device={device}
                                        onDeviceChange={(value) => setDevice(value)}
                                    />
                                </Fragment>
                            )}
                        </PanelBody>

                        <PanelBody title={__("Modal Close Button")} initialOpen={false}>
                            <Toggle
                                label={__("Enable")}
                                value={enableCloseButton}
                                onChange={(val) => setAttributes({ enableCloseButton: val })}
                            />
                            <Color
                                label={__("Color")}
                                value={closeButtonColor}
                                onChange={(value) => setAttributes({ closeButtonColor: value })}
                            />
                            <Color
                                label={__("Background Color")}
                                value={closeButtonBgColor}
                                onChange={(value) => setAttributes({ closeButtonBgColor: value })}
                            />
                            <Range
                                label={__("Button Size")}
                                value={closeButtonSize}
                                onChange={(value) => setAttributes({ closeButtonSize: value })}
                                min={10}
                                max={100}
                            />
                            <Range
                                label={__("Button Padding")}
                                value={closeButtonPadding}
                                onChange={(value) => setAttributes({ closeButtonPadding: value })}
                                min={0}
                                max={100}
                            />
                            <Range
                                label={__("Button Radius")}
                                value={closeButtonRadius}
                                onChange={(value) => setAttributes({ closeButtonRadius: value })}
                                min={0}
                                max={100}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key="advance">
                        {animationSettings(uniqueId, animation, setAttributes)}
                        {interactionSettings(uniqueId, interaction, setAttributes)}
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>

            {globalSettingsPanel({
                enablePosition,
                selectPosition,
                positionXaxis,
                positionYaxis,
                globalZindex,
                zIndex,
                hideDesktop,
                hideTablet,
                hideMobile,
                globalCss,
                setAttributes
            })}

            <div className={classNames}>
                <div
                    className="qubely-block-modal-wrapper"
                    onContextMenu={(event) => handleContextMenu(event, qubelyContextMenu.current)}
                >
                    <div className={`qubely-block-modal`}>
                        <div className={`qubely-block-modal-link-wrap`}>
                            <div className={`qubely-block-modal-link is-${buttonSize}`}>
                                <RichText
									tagName="div"
									keepPlaceholderOnFocus
									className="qubely-modal-link-text"
									placeholder={__("Add Text...")}
									value={modalLinkText}
									onChange={(value) => setAttributes({ modalLinkText: value })}
								/>
                            </div>
                        </div>
                        <div className={`qubely-block-modal-popup`}>
                            <div className={`qubely-block-modal-popup-content`}>Popup Content</div>
                            <div className={`qubely-block-modal-box`}>
                                {enableCloseButton && (
                                    <button className={`qubely-block-modal-close-btn`}>
                                        <i className={`qubely-btn-icon far fa-window-close`} />
                                    </button>
                                )}
                                <div className={`qubely-block-modal-inner-blocks`}>
                                    {enableTitle == 1 && (
                                        <div className={`qubely-block-modal-title-wrapper`}>
                                            <div className="qubely-block-modal-title-inner">
                                                <RichText
                                                    key="editable"
                                                    tagName={modalTitleTagName}
                                                    className="qubely-block-modal-title"
                                                    keepPlaceholderOnFocus
                                                    placeholder={__("Add Text...")}
                                                    onChange={(value) => setAttributes({ modalTitle: value })}
                                                    value={modalTitle}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className={`qubely-block-modal-content`}>
                                        <InnerBlocks templateLock={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={qubelyContextMenu} className={`qubely-context-menu-wraper`}>
                        <ContextMenu
                            name={name}
                            clientId={clientId}
                            attributes={attributes}
                            setAttributes={setAttributes}
                            qubelyContextMenu={qubelyContextMenu.current}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default withCSSGenerator()(Edit);
