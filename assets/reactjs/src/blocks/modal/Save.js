import classnames from "classnames";
const { RichText, InnerBlocks } = wp.blockEditor;
const {
    HelperFunction: { animationAttr, IsInteraction },
} = wp.qubelyComponents;

const Save = (props) => {
    const {
        uniqueId,
        customClassName,
        animation,
        interaction,
        buttonSize,
        modalLinkText,
        modalTitle,
        enableTitle,
        titleLevel,
        enableCloseButton,
        boxOpenAnimation,
        boxCloseAnimation,
    } = props.attributes;
    const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";
    const classNames = classnames({ [`qubely-block-${uniqueId}`]: uniqueId }, customClassName);

    const titleTagName = 'h' + titleLevel;

    return (
        <div className={classNames} {...animationAttr(animation)}>
            <div className={`qubely-block-modal-wrapper ${interactionClass}`}>
                <div className={`qubely-block-modal`}>
                    <div className={`qubely-block-modal-link-wrap`}>
                        <button className={`qubely-block-modal-link is-${buttonSize}`}>
                            <RichText.Content
                                value={modalLinkText}
                                className="qubely-modal-link-text"
                            />
                        </button>
                    </div>
                    <div className={`qubely-modal-popup`}>
                        <div
                            className={`qubely-modal-box`}
                            role="dialog"
                            aria-labelledby={`modal-title-${uniqueId}`}
                            aria-describedby={`modal-description-${uniqueId}`}
                            style={`animation-name: ${boxOpenAnimation}`} closeAnimation={boxCloseAnimation}
                        >
                            {enableCloseButton && (
                                <button className={`qubely-block-modal-close-btn`} aria-label="close">
                                    <i className={`qubely-btn-icon fas fa-times`} />
                                </button>
                            )}
                            <div className={`qubely-block-modal-inner-blocks`}>
                                {enableTitle == 1 && (
                                    <div className="qubely-block-modal-title-wrapper">
                                        <div className="qubely-block-modal-title-inner" id={`modal-title-${uniqueId}`}>
                                            <RichText.Content
                                                tagName={titleTagName}
                                                className="qubely-block-modal-title"
                                                value={modalTitle}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className={`qubely-block-modal-content`} id={`modal-description-${uniqueId}`}>
                                    <InnerBlocks.Content />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Save;
