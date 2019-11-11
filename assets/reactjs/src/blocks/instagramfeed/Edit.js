// const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, BlockControls } = wp.editor;
const { PanelBody, TextControl, RangeControl, Spinner, Toolbar } = wp.components;
// import icons from '../../helpers/icons'

const { 
	Range, Toggle, Select,
	Separator, 
	Typography, 
	Color,  
	CssGenerator: { CssGenerator }, 
	gloalSettings: { globalSettingsPanel, animationSettings }, 
	Inline: { InlineToolbar } 
} = wp.qubelyComponents

const { __ } = wp.i18n;


export default class InstagramEdit extends Component {
	state = {
		loading: true,
		apiResponseCode: 200,
		apiErrorMessage: '',
	};

	componentDidMount() {
		this.fetchPhotos();
		this.fetchBio();

		const { setAttributes, clientId, attributes: { uniqueId } } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }
	}

	fetchPhotos( count, token ) {
		const _COUNT = count ? count : this.props.attributes.numberimages;
		const _TOKEN = token ? token : this.props.attributes.token;

		if ( ! _TOKEN ) {
			return false;
		}

		return fetch(
			`https://api.instagram.com/v1/users/self/media/recent/?access_token=${ _TOKEN }&count=${ _COUNT }`
		)

		.then( res => res.json() )
		.then( json => {
			console.log( json );

			if ( json.meta ) {
				this.setState( {
					apiResponseCode: json.meta.code,
					loading: false,
				} );

				if ( json.meta.code === 200 ) {
					this.props.setAttributes( {
						thumbs: json.data,
					} );
				} else {
					this.props.setAttributes( {
						thumbs: [],
					} );

					this.setState( {
						apiErrorMessage: json.meta.error_message,
					} );
				}
			}
		} );
	}

	fetchBio() {
		const _TOKEN = this.props.attributes.token;

		if ( ! _TOKEN ) {
			return false;
		}

		return fetch(
			`https://api.instagram.com/v1/users/self/?access_token=${ _TOKEN }`
		)
        .then( res => res.json() )
        .then( json => {
            if ( json.meta && json.meta.code === 200 ) {
                this.props.setAttributes( {
                    profile: json.data,
                } );
            } else {
                this.props.setAttributes( {
                    profile: [],
                } );
            }
        } );
	}

	onChangeToken = token => {
		this.props.setAttributes( {
			token,
		} );
		this.fetchPhotos( this.props.attributes.numberimages, token );
	};

	onChangeImages = numberimages => {
		this.props.setAttributes( {
			numberimages,
		} );
		this.fetchPhotos( numberimages );
	};

	onChangeShowProfile = showProfile => {
		this.props.setAttributes( {
			showProfile,
		} );
		this.fetchBio();
	};

	render() {
		const {
			attributes: {
				uniqueId,
				token,
				column,
				numberimages,
				equalimagesize,
				thumbs,
				gutter,
				showProfile,
				profile,

				textTypography,
				textcolor,
				captioncolor, 
				captionTypography,

				imageAnimation,
				imageWidth, 
				imageHeight,
				showCount,
				showCaption,
			},
			className,
			setAttributes,
		} = this.props;

		const { device, apiResponseCode, apiErrorMessage, loading } = this.state;

		if (uniqueId) { CssGenerator(this.props.attributes, 'instagramfeed', uniqueId) }
        
        let instagramImagerender;
		let profileImage;
		
		if( profile != undefined ){
			console.log('InsProfile', profile);
		}
		
        profileImage = (showProfile) ? (
			((profile != undefined) ? (
				<div className="qubely-instagram-profile-bio-container">
					<div className="qubely-instagram-profile-image">
						<img className="instagram-profile-image" src={ profile.profile_picture } alt={ profile.full_name }/>
					</div>
					<div className="qubely-instagram-profile-bio-info">
						<div className="qubely-instagram-bio">
							<h1 className="qubely-instagram-username">{ profile.username }</h1>
						</div>
						<ul className="qubely-instagram-notifications">
							<li>
								<span className="qubely-instagram-post-count"><span className="qubely-post-number">{profile.counts.media}</span> posts</span>
							</li>
							<li>
								<a className="qubely-followers" href="#">
									<span className="qubely-followers-count" title={profile.counts.follows}>{profile.counts.follows}</span> followers</a>
								</li>
							<li>
								<a className="qubely-followers" href="#">
									<span className="qubely-followers-count">{profile.counts.followed_by}</span>following</a>
							</li>
						</ul>
						<div className="qubely-instagram-profile-name">
							<span className="profile-name">{ profile.full_name }</span>
							<span className="profile-bio">{ profile.bio }</span>
							<span className="profile-bio">{ profile.website }</span>
						</div>
					</div>
				</div>
			) : '')
        ) : '';

        if ( token && apiResponseCode === 200 ) {
            if ( loading ) {
                instagramImagerender = (
                    <p className={ className }>
                        <Spinner />
                        { __( 'Loading feed' ) }
                    </p>
                );
            } else {
                instagramImagerender = (
					<div className={`qubely-instagramfeed-wrap qubely-block-${uniqueId}`}>
                        <div className="qubely-instagramfeed-row">

                            { profileImage }

                            { thumbs &&
                                thumbs.map( photo => {
                                    return (
                                        <div className={`qubely-instagram-image qubely-col-${column} ${equalimagesize ? 'equal-images' : ''}`} key={ photo.id } >  
											<div className={`qubely-instagram-image-wrap qubely-post-img-${imageAnimation}`}>
												<img src={ photo.images.standard_resolution.url } />
												<div className="qubely-image-overlay">
													<ul>
														{showCount &&
															<li className="qubely-listing">
																<span className="dashicons dashicons-heart"></span>
																<span className="qubely-count qubely-like-count">{photo.likes.count}</span>
															</li>
														}
														{showCount &&
															<li className="qubely-listing">
																<span className="dashicons dashicons-admin-comments"></span>
																<span className="qubely-count qubely-comments-count">{photo.comments.count}</span>
															</li>
														}
														{showCaption &&
															<li className="qubely-caption">
																{photo.caption != null && 
																	<p className="caption-title">{photo.caption.text}</p>
																}
															</li>
														}
													</ul>
												</div>
											</div>
                                        </div>
                                    );
                                } ) 
                            }
                        </div>
                    </div>
                );
            }
        } else if ( apiResponseCode !== 200 ) {
            instagramImagerender = <div>Something is wrong: { apiErrorMessage }</div>;
        } else {
            instagramImagerender = (
                <div className={ className }>
                    To get Instagram Access Token.{ ' ' }
                    <a target="_blank" href="https://outofthesandbox.com/pages/instagram-access-token" >click here.</a>
                </div>
            );
        }

		return (
			<Fragment>
				<InspectorControls>
					
					<PanelBody title='Instagram Settings' initialOpen={true}>
						<TextControl
							label={ __( 'Instagram Access Token' ) }
							value={ token }
                            help={'To get your token use this link https://outofthesandbox.com/pages/instagram-access-token'}
							onChange={ this.onChangeToken }
						/>
						
						<Range 
							label={__('Column number')} 
							value={column} min={0} max={6}
							onChange={value => setAttributes({ column: parseInt(value) })} />

						{/* <Range 
							label={__('Number of Images')} 
							value={numberimages} 
							min={ 1 } max={ 60 } step={ 1 }
							onChange={value => setAttributes({ numberimages: parseInt(value) })} 
						/> */}

						{/* <Range 
							label={__('Number of Images')} 
							value={numberimages} min={0} max={60}
							onChange={value => setAttributes({ numberimages: parseInt(value) })} /> */}

						<RangeControl
							value={ numberimages }
							onChange={ this.onChangeImages }
							min={ 1 } max={ 20 } step={ 1 }
							label={ __( 'Number of Images' ) }
						/>

						<Range 
							label={__('Image spacing')} 
							value={gutter} 
							onChange={value => setAttributes({ gutter: value })} 
							unit={['px', 'em', '%']} 
							min={1} max={60}
							responsive device={device} 
							onDeviceChange={value => this.setState({ device: value })} 
						/>

						<Toggle label={__('Show Profile')} value={showProfile} onChange={value => setAttributes({ showProfile: value })} />
						
					</PanelBody>


					<PanelBody title={__('Settings')} initialOpen={false}>
						<Toggle 
							label={__('Equal Image Height')} 
							value={equalimagesize} 
							onChange={value => setAttributes({ equalimagesize: value })} 
						/>
						{ equalimagesize &&
							<Fragment>
								<Range
									label={<span className="dashicons dashicons-leftright" title="Width" />}
									value={imageWidth} 
									onChange={(value) => setAttributes({ imageWidth: value })}
									unit={['px', 'em', '%']}
									max={300}
									min={0}
									responsive
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
								<Range
									label={<span className="dashicons dashicons-sort" title="Height" />}
									value={imageHeight}
									onChange={(value) => setAttributes({ imageHeight: value })}
									unit={['px', 'em', '%']}
									max={300}
									min={0}
									responsive
									device={device}
									onDeviceChange={value => this.setState({ device: value })}
								/>
							</Fragment>
						}
						<Select 
							label={__('Image Hover Effect')} 
							options={[
								['none', __('No Animation')], 
								['slide-top', __('Slide From Top')], 
								['slide-right', __('Slide From Right')], 
								['slide-bottom', __('Slide From Bottom')], 
								['slide-left', __('Slide From Left')], 
								['zoom-in', __('Zoom In')], 
								['zoom-out', __('Zoom Out')]]} 
							value={imageAnimation} onChange={val => setAttributes({ imageAnimation: val })} />
						<Separator />

					</PanelBody>

					
					<PanelBody title={__('Data Count Typography')} initialOpen={false}>
						<Toggle label={__('Show Counter')} value={showCount} onChange={value => setAttributes({ showCount: value })} />
						{showCount &&
							<Fragment>
								<Color 
									label={__('Color')} 
									value={textcolor} 
									onChange={value => setAttributes({ textcolor: value }) } 
								/>
								<Typography 
									label={__('Typography')} 
									value={textTypography} 
									onChange={value => setAttributes({ textTypography: value })} 
									device={device} 
									onDeviceChange={value => this.setState({ device: value })} 
								/>
							</Fragment>
						}
					</PanelBody>

					<PanelBody title={__('Caption Typography')} initialOpen={false}>
						<Toggle label={__('Show Caption')} value={showCaption} onChange={value => setAttributes({ showCaption: value })} />
						{showCaption &&
							<Fragment>
								<Color 
									label={__('Color')} 
									value={captioncolor} 
									onChange={value => setAttributes({ captioncolor: value }) } 
								/>
								<Typography 
									label={__('Typography')} 
									value={captionTypography} 
									onChange={value => setAttributes({ captionTypography: value })} 
									device={device} 
									onDeviceChange={value => this.setState({ device: value })} 
								/>
							</Fragment>
						}
					</PanelBody>

				</InspectorControls>

				<BlockControls>
					<Toolbar>
						<InlineToolbar
							data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
							{...this.props}
							prevState={this.state}
						/>
					</Toolbar>
				</BlockControls> 

				{ globalSettingsPanel( setAttributes ) }

                {instagramImagerender}
            </Fragment>
		);
	}
}

