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
        modalLinkText,
        modalTitle,
        enableTitle,
        titleLevel,
        enableCloseButton,
        showModal,
    } = props.attributes;
    const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";
    const classNames = classnames({ [`qubely-block-${uniqueId}`]: uniqueId }, customClassName);

    const titleTagName = 'h' + titleLevel;

    return (
        <div className={classNames} {...animationAttr(animation)}>
            <div className={`qubely-block-modal-wrapper ${interactionClass}`}>
                <div className={`qubely-block-modal`}>
                    <div className={`qubely-block-modal-link-wrap`}>
                        <button className={`qubely-block-modal-link`}>
                            <RichText.Content
                                value={modalLinkText}
                                className="qubely-modal-link-text"
                            />
                        </button>
                    </div>
                    <div className={`qubely-modal-popup ${showModal ? 'display-block' : 'display-none'}`}>
                        <div className={`qubely-modal-box`}>
                            {enableCloseButton && (
                                <button className={`qubely-block-modal-close-btn`}>
                                    <i className={`qubely-btn-icon far fa-window-close`} />
                                </button>
                            )}
                            <div className={`qubely-block-modal-inner-blocks`}>
                                {enableTitle == 1 && (
                                    <div className="qubely-block-modal-title-wrapper">
                                        <div className="qubely-block-modal-title-inner">
                                            <RichText.Content
                                                tagName={titleTagName}
                                                className="qubely-block-modal-title"
                                                value={modalTitle}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className={`qubely-block-modal-content`}>
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
