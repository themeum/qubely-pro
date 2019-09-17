const { Component, Fragment } = wp.element
const { RichText } = wp.editor
const { HelperFunction: { animationAttr } } = wp.qubelyComponents
class Save extends Component {
  renderAvatar = (sliderimage, sliderimageAlt) => {
    return (
      <div className="qubely-single-img">
        {sliderimage.url != undefined ?
          <img className="qubely-image-sliderimage" src={sliderimage.url} alt={sliderimageAlt} />
          :
          <div className="qubely-image-placeholder qubely-image-sliderimage"><i className="far fa-user"></i></div>
        }
      </div>
    )
  }
  renderAuthorInfo = (item) => {
    const { attributes: { layout, showAvatar, sliderimageAlt, sliderimageLayout } } = this.props
    const { slidertitle, subtitle, sliderimage } = item

    return (
      <div className={`qubely-image-slidertitle`}>

        {(layout === 3 && showAvatar) && this.renderAvatar(sliderimage, sliderimageAlt)}

        <div className={showAvatar ? `qubely-image-sliderimage-layout-${sliderimageLayout}` : ``}>

          {(layout !== 3 && showAvatar && (sliderimageLayout == 'left' || sliderimageLayout == 'top')) && this.renderAvatar(sliderimage, sliderimageAlt)}

          <div className="qubely-image-slidertitle-info">
            <div className="qubely-image-slidertitle-name"><RichText.Content value={slidertitle} /></div>
            <div className="qubely-image-slidertitle-subtitle"><RichText.Content value={subtitle} /></div>
          </div>

          {(layout !== 3 && showAvatar && (sliderimageLayout == 'right' || sliderimageLayout == 'bottom')) && this.renderAvatar(sliderimage, sliderimageAlt)}
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