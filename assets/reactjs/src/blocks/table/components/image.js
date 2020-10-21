/* eslint-disable react/react-in-jsx-scope */
import classnames from 'classnames';
const { __ } = wp.i18n;
const {
    Fragment,
} = wp.element;
const {
    ResizableBox
} = wp.components;
const {
    MediaPlaceholder
} = wp.blockEditor;

const {

} = wp.qubelyComponents;

const Image = (props) => {
    const {
        imageSize: {
            width,
            height,
        },
        image,
        classes,
        onChange,
        noticeUI,
        isSelected,
        isSelectedCell,
        noticeOperations,
        onResize,
        device,
        imageAlignment,
        imageCommonSize,
        imageCustomSize,
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


    const renderImage = () => {
        let maxWidth, maxHeight;
        if (document.getElementsByClassName('is-qubely-active')[0]) {
            maxWidth = document.getElementsByClassName('is-qubely-active')[0].clientWidth;
            maxHeight = document.getElementsByClassName('is-qubely-active')[0].clientHeight;
        }

        return (
            <ResizableBox
                className="table-cell-image-resizer"
                size={
                    (typeof width !== 'undefined' ?
                        {
                            width,
                            height
                        } : {
                            width: parseInt(imageCommonSize.replace('px', '')),
                            // height: 'auto'
                        })
                }
                showHandle={isSelected && isSelectedCell}
                minWidth={10}
                maxWidth={maxWidth - 20}
                minHeight={10}
                // lockAspectRatio
                enable={{
                    top: false,
                    right: imageAlignment[device] === 'right' ? false : true,
                    bottom: true,
                    left: imageAlignment[device] === 'left' ? false : true,
                }}
                // onResizeStart={onResizeStart}
                onResizeStop={(event, direction, elt, delta) => {

                    let tempHeight = parseInt(elt.style.height.replace('px', ''));
                    // console.log('tempHeight : ', tempHeight);
                    // console.log('width : ', width);
                    if (typeof width !== 'undefined' && width !== null) {
                        onResize({
                            width: parseInt(width + delta.width, 10),
                            height: tempHeight,
                            // height: 'auto',
                        });
                    } else {
                        let tempWidth = parseInt(imageCommonSize.replace('px', ''));
                        onResize({
                            width: parseInt(tempWidth + delta.width, 10),
                            height: 'auto',
                        });
                    }
                }}
            >
                <Fragment>
                    <img
                        className="qubely-image"
                        src={image.url}
                        alt={'image-type-cell'}
                        style={{
                            height: maxHeight ? '100%' : 'auto',
                            width: '100%'
                        }}
                    />
                </Fragment>
            </ResizableBox>
        )
    }
    return (
        <div className={classNames}>
            {
                validImage ?
                    renderImage()
                    // <img className="qubely-image" src={image.url} alt={'image-type-cell'} style={{ height: '100px', width: '100px' }} />
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
                            title: __('Add Image'),
                            instructions: __(''),
                        }}
                        onSelect={media => onSelectImage(media)}
                        // onSelectURL={newUrl => onSelectURL(newUrl)}
                        disableMediaButtons={image.url}
                        value={{ id: image.id, src: image.src }}
                    />
            }
        </div>
    );
}

const ImageSave = (props) => {
    const {
        imageSize: {
            width,
            height,
        },
        imageCommonSize,
        imageCustomSize,
        image,
        classes,
    } = props;

    const classNames = classnames(
        'image-cell',
        'image-wrapper',
        classes
    );

    let validImage = false;
    if (typeof image.url !== 'undefined') {
        validImage = true;
    }

    let imageSize = {
        width: imageCommonSize,
        height: 'auto',
    };
    if (typeof width !== 'undefined' && width !== 'null') {
        imageSize = {
            height: `${height}px`,
            // height: 'auto',
            width: `${width}px`
        };
    }
    let img = (
        <img
            className="qubely-image"
            src={image.url}
            alt={'image-type-cell'}
            style={imageSize}
        />
    );

    return (
        <div className={classNames}>
            {
                validImage ?
                    img
                    :
                    <div>add image </div>
            }
        </div>
    );
}

export { Image, ImageSave };