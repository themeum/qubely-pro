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
            buttonSize,
            typography,
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
            modalTitleText,
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
        },
    } = props;

    const classNames = classnames({ [`qubely-block-${uniqueId}`]: uniqueId }, className);

    return (
        <Fragment>
            <InspectorControls key="inspector">
                <InspectorTabs>
                    <InspectorTab key="layout">
                        <InspectorSections block="modal" />
                    </InspectorTab>
                    <InspectorTab key="style">
                        <PanelBody title={__("Modal Overlay")} initialOpen={false}>
                            <Color
                                label={__("Overlay Background Color")}
                                value={overlayColor}
                                onChange={(value) => setAttributes({ overlayColor: value })}
                            />
                        </PanelBody>

                        <PanelBody title={__("Modal Animation")} initialOpen={false}>
                            Modal Animation
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
                            <div className={`qubely-block-modal-link`}>
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
                                <button className={`qubely-block-modal-close-btn`}><i className={`qubely-btn-icon far fa-window-close`} /></button>
                                <div className={`qubely-block-modal-inner-blocks`}>
                                    <div className={`qubely-block-modal-title`}>
                                    <RichText
                                        tagName="div"
                                        keepPlaceholderOnFocus
                                        className="qubely-modal-title-text"
                                        placeholder={__("Add Text...")}
                                        value={modalTitleText}
                                        onChange={(value) => setAttributes({ modalTitleText: value })}
                                    />
                                    </div>
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
