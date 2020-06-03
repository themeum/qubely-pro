import classnames from 'classnames';
const { __ } = wp.i18n;

const {
    MediaPlaceholder
} = wp.blockEditor;

const {

} = wp.qubelyComponents;

const Image = (props) => {
    const {
        image,
        classes,
        onChange,
        noticeUI,
        noticeOperations
    } = props;

    const classNames = classnames(
        'image-cell',
        'image-wrapper',
        classes
    )

    const onUploadError = (message) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(message);
    }
    const mediaPreview = !!image.url && (
        <img
            alt={__('Edit image')}
            title={__('Edit image')}
            className={'edit-image-preview'}
            src={image.url}
        />
    );
    const onSelectImage = (media) => {
        if (!media || !media.url) {
            return;
        }
        onChange({
            url: media.url,
            id: media.id,
            sizeSlug: typeof media.sizeSlug !== 'undefined' ? media.sizeSlug : 'large',
        });
    }
    const onSelectURL = (newURL) => {

        let currentImage = image;

        if (newURL !== currentImage.url) {
            currentImage = {
                ...currentImage,
                url: newURL,
                id: undefined,
                sizeSlug: 'large'
            }
        }
        onChange(currentImage);
    }
    let validImage = false;
    if (typeof image.url !== 'undefined') {
        validImage = true;
    }

    return (
        <div className={classNames}>
            {
                validImage ?
                    <img className="qubely-image" src={image.url} alt={'image-type-cell'} style={{ height: '100px', width: '100px' }} />
                    :
                    <MediaPlaceholder
                        accept="image/*"
                        multiple={false}
                        notices={noticeUI}
                        icon="format-image"
                        mediaPreview={mediaPreview}
                        allowedTypes={['image']}
                        onError={() => onUploadError()}
                        labels={{
                            title: __('Image type cell'),
                            instructions: __('Drag images, upload new ones or select files from your library.'),
                        }}
                        onSelect={media => onSelectImage(media)}
                        onSelectURL={newUrl => onSelectURL(newUrl)}
                        disableMediaButtons={image.url}
                        value={{ id: image.id, src: image.src }}
                    />
            }
        </div>
    );
}

export default Image;