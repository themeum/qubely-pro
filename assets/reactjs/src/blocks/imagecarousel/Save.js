const { Component, Fragment } = wp.element
const { RichText } = wp.editor
const { HelperFunction: { animationAttr } } = wp.qubelyComponents
class Save extends Component {
  renderAvatar = (avatar, avatarAlt) => {
    return (
      <div className="qubely-single-img">
        {avatar.url != undefined ?
          <img className="qubely-image-avatar" src={avatar.url} alt={avatarAlt} />
          :
          <div className="qubely-image-placeholder qubely-image-avatar"><i className="far fa-user"></i></div>
        }
      </div>
    )
  }
  renderAuthorInfo = (item) => {
    const { attributes: { layout, showAvatar, avatarAlt, avatarLayout } } = this.props
    const { author, designation, avatar } = item

    return (
      <div className={`qubely-image-author`}>

        {(layout === 3 && showAvatar) && this.renderAvatar(avatar, avatarAlt)}

        <div className={showAvatar ? `qubely-image-avatar-layout-${avatarLayout}` : ``}>

          {(layout !== 3 && showAvatar && (avatarLayout == 'left' || avatarLayout == 'top')) && this.renderAvatar(avatar, avatarAlt)}

          <div className="qubely-image-author-info">
            <div className="qubely-image-author-name"><RichText.Content value={author} /></div>
            <div className="qubely-image-author-designation"><RichText.Content value={designation} /></div>
          </div>

          {(layout !== 3 && showAvatar && (avatarLayout == 'right' || avatarLayout == 'bottom')) && this.renderAvatar(avatar, avatarAlt)}
        </div>
      </div>
    )
  }
  renderImage() {
    const { attributes: { carouselItems, showRatings, layout, ratings, quoteIcon } } = this.props

    return (carouselItems.map((item, index) => {
      const { message } = item
      return (
        <div key={index} className={`qubely-carousel-extended-item${index === 0 ? ' active' : ''}`} >
          <div className={`qubely-image-item layout-${layout}`}>

            {layout == 2 && this.renderAuthorInfo(item)}
            {(quoteIcon && layout == 1) && <div className="qubely-image-quote">
              <span className={`qubely-quote-icon ${quoteIcon}`}></span>
            </div>
            }

            <div className={`qubely-image-carousel-content-wrapper`}>
              {(showRatings && ratings > 0 && layout !== 1) &&
                <div className="qubely-image-ratings" data-qubelyrating={ratings}></div>
              }
              <div className="qubely-image-content"> <RichText.Content value={message} /></div>
              {(showRatings && ratings > 0 && layout == 1) && <div className="qubely-image-ratings" data-qubelyrating={ratings} />}
            </div>

            {layout !== 2 && this.renderAuthorInfo(item)}

            {(quoteIcon && layout == 2) && <div className="qubely-image-quote qubely-position-bottom">
              <span className={`qubely-quote-icon ${quoteIcon}`}></span>
            </div>
            }

          </div>
        </div>
      )
    }))
  }

  render() {
    const { attributes: { uniqueId, layout, items, autoPlay, arrowStyle, infiniteLoop, activeFade, isCentered, dragable, nav, dots, dotIndicator, interval, speed, animation } } = this.props
    let options = JSON.stringify({
      autoplay: autoPlay,
      items: items,
      margin: 10,
      center: isCentered,
      dots: dots,
      dot_indicator: dotIndicator,
      nav: nav,
      speed: speed,
      interval: interval,
      dragable: dragable,
      infiniteLoop: infiniteLoop,
      activeFade: activeFade,
      arrowStyle: arrowStyle,
      responsive: [
        {
          viewport: 1170,
          items: items.md
        },
        {
          viewport: 980,
          items: items.sm
        },
        {
          viewport: 580,
          items: items.xs
        }
      ],
    }
    )
    return (
      <div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
        <div className={`qubely-block-image-carousel qubely-layout-${layout}`}>
          <div className={`qubely-carousel qubely-carousel-wrapper${isCentered && activeFade ? ' is-faded' : ''}`} data-options={options} id="qubelyCarousel1" >
            {this.renderImage()}
          </div>
        </div>
      </div>
    )
  }
}

export default Save