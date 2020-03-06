const { RichText } = wp.blockEditor;
const { Component } = wp.element;

const renderAuthorInfo = (item, attributes) => {
    const {
        layout,
        showAvatar,
        avatarAlt,
        avatarLayout
    } = attributes;

    const {
        author,
        designation,
        avatar
    } = item;

    const renderAvatar = (avatar, avatarAlt) => {
        return (
            <div className="qubely-testimonial-avatar-wrapper">
                {avatar.url != undefined ?
                    <img className="qubely-testimonial-avatar" src={avatar.url} alt={avatarAlt} />
                    :
                    <div className="qubely-image-placeholder qubely-testimonial-avatar"><i className="far fa-user" /></div>
                }
            </div>
        )
    }
    return (
        <div className={`qubely-testimonial-author`}>
            {(layout === 3 && showAvatar) && renderAvatar(avatar, avatarAlt)}
            <div className={showAvatar ? `qubely-testimonial-avatar-layout-${avatarLayout}` : ``}>
                {(layout !== 3 && showAvatar && (avatarLayout == 'left' || avatarLayout == 'top')) && renderAvatar(avatar, avatarAlt)}
                <div className="qubely-testimonial-author-info">
                    <div className="qubely-testimonial-author-name"><RichText.Content value={author} /></div>
                    <div className="qubely-testimonial-author-designation"><RichText.Content value={designation} /></div>
                </div>
                {(layout !== 3 && showAvatar && (avatarLayout == 'right' || avatarLayout == 'bottom')) && renderAvatar(avatar, avatarAlt)}
            </div>
        </div>
    )
}


export {
    renderAuthorInfo
}