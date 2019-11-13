<?php
/**
 * Registers the `qubely/postgrid` block on server.
 *
 * @since 1.1.0
 */
function register_block_qubely_instagramfeed_pro()
{
	// Check if the register function exists.
	if (!function_exists('register_block_type')) {
		return;
	}
	register_block_type(
		'qubely/instagramfeed',
		array(
			'attributes' => array(

				'uniqueId' => array(
					'type' => 'string',
				),
				'token' 	=> array(
					'type' 		=> 'string',
					'default' 	=> ''
				),
				'column' => array(
					'type' 		=> 'number',
					'default' 	=> 3,
				),
				'numberimages' => array(
					'type' 		=> 'number',
					'default' 	=> 9
				),
				
				'gutter' => array(
					'type' => 'object',
					'default' => (object) array(
						'md' => 5,
						'unit' => 'px'
					),
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-instagram-image { padding: {{gutter}}; } {{QUBELY}} .qubely-instagramfeed-row { margin: -{{gutter}}; }'
					]]
				),
				'showProfile'	=> array(
					'type'		=> 'boolean',
					'default'	=> false
				),
				'showCount' 	=> array(
					'type'		=> 'boolean',
					'default'	=> true
				),
				'showCaption' 	=> array(
					'type'		=> 'boolean',
					'default'	=> true
				),

				# Settings
				'equalimagesize' => array(
					'type' 			=> 'boolean',
					'default' 		=> false
				),
				'imageWidth' => array(
					'type' => 'object',
					'default' => (object) array(
						'md' => 100,
						'unit' => '%'
					),
					'style' => [
						(object) [
							'selector' => '{{QUBELY}} .qubely-instagramfeed-row .qubely-instagram-image.equal-images .qubely-instagram-image-wrap {width: {{imageWidth}};}'
						]
					]
				),
				'imageHeight' => array(
					'type' => 'object',
					'default' => (object) array(
						'md' => 300,
						'unit' => 'px'
					),
					'style' => [
						(object) [
							'selector' => '{{QUBELY}} .qubely-instagramfeed-row .qubely-instagram-image.equal-images .qubely-instagram-image-wrap {height: {{imageHeight}};}'
						]
					]
				),


				'imageAnimation' => array(
					'type' => 'string',
					'default' => 'zoom-in'
				),
				'textcolor' => array(
					'type'    => 'string',
					'default' => '#fff',
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-instagramfeed-row .qubely-image-overlay {color: {{textcolor}};}'
					]]
				),
				'textTypography' => array(
					'type' => 'object',
					'default' => (object) [
						'openTypography' => 1,
						'family' => "Roboto",	
						'type' => "sans-serif",
						'size' => (object) ['md' => 20, 'unit' => 'px'],
					],
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-image-overlay .qubely-listing .qubely-count'
					]]
				),

				# Caption
				'captioncolor' => array(
					'type'    => 'string',
					'default' => '#fff',
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-instagramfeed-row .qubely-image-overlay ul li.qubely-caption p.caption-title {color: {{captioncolor}};}'
					]]
				),
				'captionTypography' => array(
					'type' 		=> 'object',
					'default' 	=> (object) [
						'openTypography' => 1,
						'family' => "Raleway",	
						'type' 	=> "sans-serif",
						'size' 	=> (object) ['md' => 14, 'unit' => 'px'],
					],
					'style' => [(object) [
						'selector' => '{{QUBELY}} .qubely-instagramfeed-row .qubely-image-overlay ul li.qubely-caption p.caption-title'
					]]
				),
			),
			'render_callback' => 'render_block_qubely_pro_instagramfeed'
		)
	);
}



function qubely_instagram_block_fetchData($url) {
	$request = wp_remote_get( $url );
	if(is_wp_error( $request )) {
		return false;
	}
	return wp_remote_retrieve_body( $request );
}

function qubely_instagram_block_add_to_cache( $result, $suffix = '' ) {
	$expire = 6 * 60 * 60;
	set_transient( 'qubely_instagram_block-api_'.$suffix, $result, '', $expire );
}

function qubely_instagram_block_get_from_cache( $suffix = '' ) {
	return get_transient( 'qubely_instagram_block-api_'.$suffix );
}

function render_block_qubely_pro_instagramfeed($attributes) {

	$attributes = wp_parse_args(
		$attributes,
		[
			'uniqueId' 			=> '',
			'token'           	=> '',
			'equalimagesize'  	=> false,
			'numberimages'    	=> 6,
			'column' 			=> 3,
			'gutter'         	=> 0,
			'showProfile'     	=> false,
			'class'       		=> '',
		]
	);

	

	$uniqueId 		    = isset($attributes['uniqueId']) ? $attributes['uniqueId'] : '';
	$token          	= $attributes[ 'token' ]  ;
	$equalimagesize 	= $attributes[ 'equalimagesize' ] ? 'equal-images' : '';
	$numberimages   	= $attributes[ 'numberimages' ];
	$columnnumber     	= $attributes[ 'column' ];
	$gutter        		= $attributes[ 'gutter' ];
	$imageAnimation 	= isset($attributes['imageAnimation']) ? $attributes['imageAnimation'] : '';
	$showCount 			= isset($attributes['showCount']) ? $attributes['showCount'] : ''; 
	$showCaption 		= isset($attributes['showCaption']) ? $attributes['showCaption'] : '';

	$showProfile    	= $attributes[ 'showProfile' ];
	$user 				= substr($token, 0, stripos($token, '.'));
	$suffix 			= $user.'_'.$numberimages;
	
	if ( !qubely_instagram_block_get_from_cache() ) {
		$result = json_decode(qubely_instagram_block_fetchData("https://api.instagram.com/v1/users/self/media/recent/?access_token={$token}&count={$numberimages}"));
		if($showProfile) {
			$result->profile = json_decode(qubely_instagram_block_fetchData("https://api.instagram.com/v1/users/self?access_token={$token}"));
		}
		qubely_instagram_block_add_to_cache( $result, $suffix );
	} else {
		$result = qubely_instagram_block_get_from_cache( $suffix );
	}

	
	$thumbs 	= $result->data;
	$profile 	= $profileContainer = '';
	
	$output 	= '';
	$output .= '<div class="qubely-instagramfeed-wrap qubely-block-'.$uniqueId.'">';
		$output .= '<div class="qubely-instagramfeed-row">';
		
			if($showProfile) {
				$profile 	= $result->profile->data;

				$output .= '<div class="qubely-instagram-profile-bio-container">';
					$output .= '<div class="qubely-instagram-profile-image">';
						$output .= '<a href="https://instagram.com/'.$profile->username.'" target="_blank">';
							$output .= '<img class="instagram-profile-image" src="'.esc_attr($profile->profile_picture).'" alt="'.esc_attr($profile->full_name).'"/>';
						$output .= '</a>';
					$output .= '</div>';

					$output .= '<div class="qubely-instagram-profile-bio-info">';
						$output .= '<div class="qubely-instagram-bio">';
							$output .= '<a class="qubely-follow" href="https://instagram.com/'.$profile->username.'" target="_blank">';
								$output .= '<h1 class="qubely-instagram-username">'.$profile->username.'</h1>';
							$output .= '</a>';

							$output .= '<a class="qubely-follow" rel="nofollow" target="_blank" href="https://www.instagram.com/accounts/login/?next=%2F'.$profile->username.'%2Ffollowers%2F&source=followed_by_list">';
								$output .= '<button class="qubely-instagram-follow" type="button">Follow</button>';
							$output .= '</a>';

						$output .= '</div>';

						$output .= '<ul class="qubely-instagram-notifications">';
							$output .= '<li>';
								$output .= '<span class="qubely-instagram-post-count"><span class="qubely-post-number">'.$profile->counts->media.'</span> posts</span>';
							$output .= '</li>';
							$output .= '<li>';
								$output .= '<a class="qubely-followers" href="https://www.instagram.com/accounts/login/?next=%2F'.$profile->username.'%2F&source=followed_by_list" target="_blank">';
								$output .= '<span class="qubely-post-number" title="'.$profile->counts->follows.'">'.$profile->counts->follows.'</span> Followers</a>';
							$output .= '</li>';
							$output .= '<li>';
								$output .= '<a class="qubely-followers" href="https://www.instagram.com/accounts/login/?next=%2F'.$profile->username.'%2F&source=follows_list" target="_blank">';
								$output .= '<span class="qubely-post-number">'.$profile->counts->followed_by.'</span> Following</a>';
							$output .= '</li>';
						$output .= '</ul>';

						$output .= '<div class="qubely-instagram-profile-name">';
							$output .= '<span class="profile-name">'.$profile->full_name.'</span>';
							$output .= '<span class="profile-bio">'.$profile->bio.'</span>';
							$output .= '<span class="profile-bio">'.$profile->website.'</span>';
						$output .= '</div>';
					$output .= '</div>';
				$output .= '</div>';
			}

			if( is_array($thumbs) ) {
				foreach( $thumbs as $thumb ) {

					$image = esc_attr($thumb->images->standard_resolution->url);

					$output .= '<div class="qubely-instagram-image qubely-col-'.esc_attr($columnnumber).' '.(($equalimagesize) ? 'equal-images' : '').'">';
						$output .= '<div class="qubely-instagram-image-wrap qubely-post-img-'.esc_attr($imageAnimation).'">';
							$output .= '<a class="qubely-insblock-image-wrapper '.$equalimagesize.'" href="'.esc_attr($thumb->link).'" target="_blank">';
								$output .= '<img key="'.esc_attr($thumb->id).'" src="'.$image.'" />';
								$output .= '<div class="qubely-image-overlay">';
									$output .= '<ul>';
										
										if ($showCount) {
											$output .= '<li class="qubely-listing">';
												$output .= '<span class="dashicons dashicons-heart"></span>';
												$output .= '<span class="qubely-count qubely-like-count">'.$thumb->likes->count.'</span>';
											$output .= '</li>';
											
											$output .= '<li class="qubely-listing">';
												$output .= '<span class="dashicons dashicons-admin-comments"></span>';
												$output .= '<span class="qubely-count qubely-comments-count">'.$thumb->comments->count.'</span>';
											$output .= '</li>';
										}
										
										if ($showCaption == true && $thumb->caption != null) {
											$output .= '<li class="qubely-caption">';
												$output .= '<p class="caption-title">'.$thumb->caption->text.'</p>';
											$output .= '</li>';
										}
										
									$output .= '</ul>';
								$output .= '</div>';
							$output .= '</a>';
						$output .= '</div>';
					$output .= '</div>';
				}
			}
		$output .= '</div>';
	$output .= '</div>';
	
	wp_reset_postdata();
	
	return $output;

}
add_action('init', 'register_block_qubely_instagramfeed_pro', 100);
