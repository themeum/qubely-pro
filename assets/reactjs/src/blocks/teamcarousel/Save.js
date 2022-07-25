const { Component } = wp.element;
const { RichText } = wp.blockEditor;
const {
	HelperFunction: { animationAttr },
} = wp.qubelyComponents;
class Save extends Component {
	/* Author Avatar */
	renderAvatar = (avatar, avatarAlt) => {
		return (
			<div className="qubely-single-img">
				{avatar.url != undefined ? (
					<img className="qubely-team-avatar" src={avatar.url} alt={avatarAlt} />
				) : (
					<div className="qubely-image-placeholder qubely-team-avatar">
						<i className="far fa-user" />
					</div>
				)}
			</div>
		);
	};

	/* Team Social Share. */
	renderSocialShare = () => {
		const {
			attributes: {
				showSociallinks,
				iconStyle,
				iconUseDefaultStyle,
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
			},
		} = this.props;
		return (
			<div className="qubely-team-social-share">
				{showSociallinks &&
					(facebook ||
						twitter ||
						instagram ||
						linkedin ||
						youtube ||
						github ||
						flickr ||
						pinterest ||
						dribbble ||
						behance) && (
						<div
							className={`qubely-team-social-links qubely-team-icon-layout-${iconStyle} qubely-team-icon-style-${
								iconUseDefaultStyle == 1 ? "default" : "custom"
							}`}
							onClick={() => this.handlePanelOpenings("Social")}
						>
							{facebook && (
								<a className="qubely-team-social-facebook">
									<i className="fab fa-facebook-f" />
								</a>
							)}
							{twitter && (
								<a className="qubely-team-social-twitter">
									<i className="fab fa-twitter" />
								</a>
							)}
							{instagram && (
								<a className="qubely-team-social-instagram">
									<i className="fab fa-instagram" />
								</a>
							)}
							{linkedin && (
								<a className="qubely-team-social-linkedin">
									<i className="fab fa-linkedin" />
								</a>
							)}
							{youtube && (
								<a className="qubely-team-social-youtube">
									<i className="fab fa-youtube" />
								</a>
							)}
							{github && (
								<a className="qubely-team-social-github">
									<i className="fab fa-github" />
								</a>
							)}
							{flickr && (
								<a className="qubely-team-social-flickr">
									<i className="fab fa-flickr" />
								</a>
							)}
							{pinterest && (
								<a className="qubely-team-social-pinterest">
									<i className="fab fa-pinterest" />
								</a>
							)}
							{dribbble && (
								<a className="qubely-team-social-dribbble">
									<i className="fab fa-dribbble" />
								</a>
							)}
							{behance && (
								<a className="qubely-team-social-behance">
									<i className="fab fa-behance" />
								</a>
							)}
						</div>
					)}
			</div>
		);
	};

	/* Author information. */
	renderAuthorInfo = (item, index) => {
		const {
			attributes: { layout, showAvatar, enablename, enableDesignation },
		} = this.props;
		const { author, designation, avatar } = item;
		return (
			<div className={`qubely-team-author`}>
				{showAvatar && this.renderAvatar(avatar, index) /* Author avater callback function */}
				<div className="qubely-team-author-info">
					<div className={`qubely-team-info-layout-${layout}`}>
						{enablename && (
							<div className="qubely-team-author-name">
								<RichText.Content value={author} />
							</div>
						)}
						{enableDesignation && (
							<div className="qubely-team-author-designation">
								<RichText.Content value={designation} />
							</div>
						)}
						{this.renderSocialShare() /* Social share callback function */}
					</div>
				</div>
			</div>
		);
	};
	/* Render Team informations. */
	renderTeam() {
		const {
			attributes: { carouselItems, layout },
		} = this.props;
		return carouselItems.map((item, index) => {
			return (
				<div key={index} className={`qubely-carousel-item`}>
					<div className={`qubely-team-carousel-item`}>
						<div className={`qubely-team-${layout}`}>{this.renderAuthorInfo(item)}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		const {
			attributes: {
				uniqueId,
				items,
				sliderMargin,
				autoPlay,
				arrowStyle,
				infiniteLoop,
				activeFade,
				isCentered,
				dragable,
				nav,
				dots,
				dotIndicator,
				interval,
				speed,
				animation,
			},
		} = this.props;

		let options = JSON.stringify({
			autoplay: autoPlay,
			items: items,
			margin: sliderMargin,
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
					items: items.md,
				},
				{
					viewport: 980,
					items: items.sm,
				},
				{
					viewport: 580,
					items: items.xs,
				},
			],
		});
		return (
			<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
				<div className={`qubely-block-team-carousel qubely-layout-style`}>
					<div
						className={`qubely-carousel qubely-carousel-wrapper${
							isCentered && activeFade ? " is-faded" : ""
						}`}
						data-options={encodeURIComponent(options)}
					>
						{this.renderTeam()}
					</div>
				</div>
			</div>
		);
	}
}

export default Save;
