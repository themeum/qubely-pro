const { Component } = wp.element
const { RichText } = wp.editor
const { HelperFunction: { animationAttr } } = wp.qubelyComponents
class Save extends Component {
  renderAvatar = (avatar, avatarAlt) => {
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
  // social share
  renderSocialShare = () => {
		const { attributes: { 
			showSociallinks,
            facebook,
            twitter,
            instagram,
            linkedin,
            youtube,
            github,
            flickr,
            pinterest,
            dribbble,
            behance,
		} } = this.props
		return (
			<div className="social-share">
				{showSociallinks && (facebook || twitter || instagram || linkedin || youtube || github || flickr || pinterest || dribbble || behance) &&
					<div className={`qubely-team-social-links`} onClick={() => this.handlePanelOpenings('Social')}>
						{facebook &&
							<a className="qubely-team-social-facebook"><i className="fab fa-facebook" /></a>
						}
						{twitter &&
							<a className="qubely-team-social-twitter"><i className="fab fa-twitter" /></a>
						}
						{instagram &&
							<a className="qubely-team-social-instagram"><i className="fab fa-instagram" /></a>
						}
						{linkedin &&
							<a className="qubely-team-social-linkedin"><i className="fab fa-linkedin" /></a>
						}
						{youtube &&
							<a className="qubely-team-social-youtube"><i className="fab fa-youtube" /></a>
						}
						{github &&
							<a className="qubely-team-social-github"><i className="fab fa-github" /></a>
						}
						{flickr &&
							<a className="qubely-team-social-flickr"><i className="fab fa-flickr" /></a>
						}
						{pinterest &&
							<a className="qubely-team-social-pinterest"><i className="fab fa-pinterest" /></a>
						}
						{dribbble &&
							<a className="qubely-team-social-dribbble"><i className="fab fa-dribbble" /></a>
						}
						{behance &&
							<a className="qubely-team-social-behance"><i className="fab fa-behance" /></a>
						}
					</div>
				}
			</div>
		)
	}

  renderAuthorInfo = (item, index) => {
    const { attributes: { layout } } = this.props
    const { author, designation, avatar } = item
    console.log('layout', layout)

    return (
      <div className={`qubely-team-author`}>
          { /* Layout 1 */
            (layout == 1) &&
            <div className={`qubely-team-${layout}`}>
              {this.renderAvatar(avatar, index)}
              <div className="qubely-team-author-info">
                  <div className="qubely-team-author-name"><RichText.Content value={author} /></div>
                  <div className="qubely-team-author-designation"><RichText.Content value={designation} /></div>
                  { this.renderSocialShare()  /* Social share callback function */ }
              </div>
            </div>
          }

          { /* Layout 2 */ 
					(layout == 2) &&
					<div className={`qubely-team-${layout}`}>
						{this.renderAvatar(avatar, index)}
						<div className="qubely-team-author-info">
                <div className="qubely-team-author-name"><RichText.Content value={author} /></div>
                <div className="qubely-team-author-designation"><RichText.Content value={designation} /></div>
							  { this.renderSocialShare()  /* Social share callback function */}
						</div>
					</div>
				}

				{ /* Layout 3 */
					(layout == 3) &&
					<div className={`qubely-team-${layout}`}>
						{this.renderAvatar(avatar, index)}
						<div className="qubely-team-author-info">
                <div className="qubely-team-author-name"><RichText.Content value={author} /></div>
                <div className="qubely-team-author-designation"><RichText.Content value={designation} /></div>
							  { this.renderSocialShare()  /* Social share callback function */}
						</div>
					</div>
				}
      </div>
    )
  }
  renderTeam() {
    const { attributes: { carouselItems } } = this.props
    return (carouselItems.map((item, index) => {
      return (
        <div key={index} className={`qubely-carousel-extended-item${index === 0 ? ' active' : ''}`} >
          <div className={`qubely-team-carousel-item`}>
            { this.renderAuthorInfo(item)}
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
            {this.renderTeam()}
          </div>
        </div>
      </div>
    )
  }
}

export default Save