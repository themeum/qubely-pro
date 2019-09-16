const { Component } = wp.element
const { RichText } = wp.editor
const { HelperFunction: { animationAttr } } = wp.qubelyComponents
class Save extends Component {
  /** 
	 *  Author ImageSlider*/  
  renderImageSlider = (avatar, avatarAlt) => {
    return (
      <div className="qubely-single-img">
        {avatar.url != undefined ?
          <img className="qubely-team-avatar" src={avatar.url} alt={avatarAlt} />
          :
          <div className="qubely-image-placeholder qubely-team-avatar"><i className="far fa-user"></i></div>
        }
      </div>
    )
  }

  /** 
	 *  Author information. */
  renderAuthorInfo = (item, index) => {
    const { attributes: { layout, showImageSlider } } = this.props
    const { author, designation, avatar } = item
    return (
      <div className={`qubely-team-author`}>
        { showImageSlider && this.renderImageSlider(avatar, index) /* Author avater callback function */ }
				<div className="qubely-team-author-info">
					<div className={`layout-${layout}`}>
            <div className="qubely-team-author-name"><RichText.Content value={author} /></div>
            <div className="qubely-team-author-designation"><RichText.Content value={designation} /></div>
					</div> 
				</div>
      </div>
    )
  }
  /** 
	 *  Render Imagecarousel informations. */
  renderImagecarousel() {
    const { attributes: { carouselItems, layout } } = this.props
    return (carouselItems.map((item, index) => {
      return (
        <div key={index} className={`qubely-carousel-extended-item${index === 0 ? ' active' : ''}`} >
          <div className={`qubely-team-carousel-item`}>
            <div className={`qubely-team-${layout}`}>
              { this.renderAuthorInfo(item)}
            </div>
          </div>
        </div>
      )
    }))
  }

  render() {
    const { attributes: { uniqueId, items, autoPlay, arrowStyle, infiniteLoop, activeFade, isCentered, dragable, nav, dots, dotIndicator, interval, speed, animation } } = this.props
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
        <div className={`qubely-block-team-carousel qubely-layout-style`}>
          <div className={`qubely-carousel qubely-carousel-wrapper${isCentered && activeFade ? ' is-faded' : ''}`} data-options={options} id="qubelyCarousel1" >
            {this.renderImagecarousel()}
          </div>
        </div>
      </div>
    )
  }
}

export default Save