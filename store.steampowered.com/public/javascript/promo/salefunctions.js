
function fnRenderHeroCapsule( oItem )
{
	let rgItemData = null;
	let purchaseAction = null;
	let itemID = null;
	let url = null
	let appids = null;
	if ( oItem.appid )
	{
		rgItemData = GStoreItemData.rgAppData[ oItem.appid ];
		purchaseAction = 'addToCart( %subid% )'.replace( '%subid%', rgItemData.pricing_subid );
		itemID = oItem.appid;
		url = GStoreItemData.GetAppURL( itemID, 'sale_hero' );
		appids = itemID;
	}
	else if ( oItem.bundleid )
	{
		rgItemData = GStoreItemData.rgBundleData[ oItem.bundleid ];
		purchaseAction = 'addBundleToCart( %bundleid% )'.replace( '%bundleid%', oItem.bundleid );
		itemID = oItem.bundleid;
		url = GStoreItemData.GetBundleURL(  itemID, 'sale_hero' );
		if ( rgItemData.appids )
			appids = rgItemData.appids.join( "," );
	}
	else if ( oItem.packageid )
	{
		rgItemData = GStoreItemData.rgPackageData[ oItem.packageid ];
		purchaseAction = 'addToCart( %subid% )'.replace( '%subid%', oItem.packageid );
		itemID = oItem.packageid;
		url = GStoreItemData.GetPackageURL(  itemID, 'sale_hero' );
		if ( rgItemData.appids )
			appids = rgItemData.appids.join( "," );
	}

	if ( !rgItemData )
		return;

	var $Cap = $J( '<div/>', {'class': 'hero_capsule', 'data-ds-appid': appids, 'data-panel': '{"clickOnActivate":"firstChild","onOptionsActionDescription":"Add to Cart","onOptionsButton":"%onOptionsButton%","flow-children":"column"}'.replace( '%onOptionsButton%', purchaseAction ) } );
	$Cap.append( $J('<a/>', {'class': 'hero_click_overlay', 'href': url, 'aria-label': rgItemData.name } ) );
	$Cap.append( $J('<img/>', {'class': 'hero_capsule_img', 'alt': rgItemData.name, 'style': 'max-height: 450px', src: 'https://store.fastly.steamstatic.com/public/images/v6/home/hero_placeholder_374x448.gif', 'data-image-url': rgItemData[ 'hero_capsule' ] ?? rgItemData[ 'main_capsule' ] } ) );

	if ( rgItemData.has_live_broadcast )
	{
		$J('<div/>', {'class': 'broadcast_live_stream_icon', 'style': 'z-index:unset' } ).append( 'Live')
	}

	let ScreenshotsCtn = $J( '<div/>', {'class': 'capsule_hover_screenshots' } );
	let VideoCtn = $J( '<div/>', {'class': 'hover_video_container hero_screenshot_load', 'data-background': 'url(' + rgItemData.main_capsule + ')' } );

	if ( rgItemData.microtrailer && !GDynamicStore.s_preferences.disable_microtrailers )
	{
		var Video = $J( '<video/>', {'class': 'hero_video', 'loop': true, 'preload': 'none', 'playsinline': true } ).prop("muted", true ).append( $J( '<source/>', { 'src': rgItemData.microtrailer, 'type': 'video/webm' } ) );
		VideoCtn.append( Video );
	}
	else if ( rgItemData.screenshots )
	{
		for ( let i = 0; i < rgItemData.screenshots.length && i < 4; i++ )
		{
			const screenshot = $J( '<div/>', { 'class': 'screenshot hero_screenshot_load', 'data-background': 'url(' + GetScreenshotURL( rgItemData.screenshots[i].appid, rgItemData.screenshots[i].filename, '.600x338' ) + ')' } );
			ScreenshotsCtn.append( screenshot )
		}
	}

	ScreenshotsCtn.append( VideoCtn );
	$Cap.append( ScreenshotsCtn );

	var HeroData = $J( '<div/>', {'class': 'hero_data' } );
	var HeroContent = $J( '<div/>', {'class': 'hero_data_content' } )
	HeroContent.append( $J( '<div/>', {'class': 'hero_name' } ).text( rgItemData.name ) );

	if ( rgItemData.review_summary )
	{
		var pref = ( !GDynamicStore.s_preferences['review_score_preference'] ? 0 : GDynamicStore.s_preferences['review_score_preference'] );
		var reviewSummary = pref !== 1 ? rgItemData.review_summary_filtered : rgItemData.review_summary;
		var $elReviewData = $J('<div>', {'class': 'hero_stat', "data-tooltip-html": reviewSummary['sReviewScoreTooltip'] } );
		$elReviewData.append( $J('<span>', {'class': 'game_review_summary ' + reviewSummary['sReviewSummaryClass']}).text(reviewSummary['reviewSummaryDesc']) );
		if ( reviewSummary['reviewScore'] > 0 )
		{
			$elReviewData.append( $J('<span>').html('&nbsp;(' + v_numberformat( reviewSummary['cReviews'] ) + ')') );
		}
		if ( rgItemData['review_anomaly'] )
		{
			$elReviewData.append( $J( '<span class="review_anomaly_icon">&nbsp;*</span>' ) );
		}

		HeroContent.append( $elReviewData );
	}

	if( rgItemData.tags )
	{
		var $elTagContainer = $J('<div>',{'class': 'hero_tags_ctn'});
		for( var i=0; i < rgItemData.tags.length; i++)
		{
			$elTagContainer.append($J('<div>', {'class': 'hero_tag'}).text( rgItemData.tags[i] ));
		}
		HeroContent.append($elTagContainer);
	}
	HeroData.append( HeroContent );

	var AddToCartCtn = $J( '<div/>', {'class': 'hero_add_to_cart' } );
	AddToCartCtn.append( $J( '<button/>', {'class': 'btn_green_steamui btn_medium', } ).click( function( e ){ eval( purchaseAction ); } ).append( $J( '<span/>' ).text( 'Add to Cart' )  ) );
	HeroData.append( AddToCartCtn );

	$Cap.append( HeroData );

	$Cap.append( $J( rgItemData.discount_block ).addClass( 'discount_block_inline hero_discount' ) );

	return $Cap;
}

function HomeSaleFilterHeroes( $Parent, rgHeroItems )
{
	if ( !rgHeroItems.length )
		return;

	var Settings = { games_already_in_library: false, localized: true, only_current_platform: true, enforce_minimum: true };

	var $HeroItemCtn = $Parent.find('.carousel_items' );

	
	let rgHeros = GHomepage.FilterItemsForDisplay( rgHeroItems, 'home', 3, 42, Settings );
	let rgPrioritizedHeros = SortItemListByPriorityList( rgHeros, 'tier1' );

	
	GDynamicStore.MarkItemsAsDisplayed( rgPrioritizedHeros.slice( 0, 3 ) );

	// generate carousel based on sorted and filtered hero capsules
	GHomepage.FillPagedCapsuleCarousel( rgPrioritizedHeros, $Parent.find('.carousel_container'), function( oItem, strFeature, rgOptions ) { return fnRenderHeroCapsule( oItem ); }, 'sale-hero', 3 );

	$HeroItemCtn.find('.hero_capsule:not(.hidden)').children('a').each( function() {
		ModifyLinkSNR( $J(this), function( snr ) { return GStoreItemData.rgNavParams['sale_heroes_priority'] } );
	});

	$J('.hero_capsule').on( 'mouseenter vgp_onfocus', function() {
		if ( window.UseTouchFriendlyMode() && !window.UseGamepadScreenMode() )
			return;

		$J(this).addClass( 'hover_active' );
		$J(this).find('.hero_screenshot_load').each( function() { $J(this).css( 'backgroundImage', $J(this).data('background') ); } );
	} );

	$J('.hero_capsule:not(.valveindex)').on( 'mouseenter vgp_onfocus', function() {
		if ( window.UseTouchFriendlyMode() && !window.UseGamepadScreenMode() )
			return;

		if ( $J(this).find('video.hero_video').length )
			$J(this).find('video.hero_video')[0].play();
	} );

	$J('.hero_capsule:not(.valveindex)').on( 'mouseleave vgp_onblur', function() {
		if ( window.UseTouchFriendlyMode() && !window.UseGamepadScreenMode() )
			return;

		$J(this).removeClass( 'hover_active' );
		if ( $J(this).find('video.hero_video').length )
			$J(this).find('video.hero_video')[0].pause();
	} );

	$Parent.show();
	$Parent.css('minHeight', '' );
}

function HomeSaleSteamAwardWinners( $Parent, rgSteamAwardWinners, rgSteamAwardDefs )
{
	const rgSteamAwardWinnerFiltered = GHomepage.FilterItemsForDisplay( rgSteamAwardWinners, 'home', 0, 11, { localized: false, displayed_elsewhere: false, only_current_platform: false, virtual_reality: true } );
	GDynamicStore.MarkAppDisplayed( rgSteamAwardWinnerFiltered );

	if ( !rgSteamAwardWinnerFiltered.length )
	{
		$Parent.hide();
		return;
	}

	
	const mapFilteredAppIDs = new Map();
	for( let i = 0; i < rgSteamAwardWinnerFiltered.length; i++ )
	{
		const item = rgSteamAwardWinnerFiltered[i];
		mapFilteredAppIDs.set( item.appid, true );
	}

	let $WinnerCapsules = $Parent.find('.winner_grid' );

	rgSteamAwardDefs.forEach( function ( def, i )  {
		if ( !def.winner_appid )
			return;

		if ( !mapFilteredAppIDs.has( def.winner_appid ) )
			return;

		let params = { 'class': 'winner_ctn' };
		const rgItemData = GStoreItemData.GetCapParams( 'sale_steamawards', def.winner_appid, null, null, params );
		if ( !rgItemData )
			return;

		let purchaseAction = 'addToCart( %subid% )'.replace( '%subid%', rgItemData.pricing_subid );
		let $Cap = $J( '<div/>', {'class': 'winner_ctn', 'data-panel': '{"clickOnActivate":"firstChild","onOptionsActionDescription":"Add to Cart","onOptionsButton":"%onOptionsButton%","flow-children":"column"}'.replace( '%onOptionsButton%', purchaseAction ) } );
		$Cap.append( $J('<a/>', {'class': 'hero_click_overlay', 'href': params['href'], 'aria-label': rgItemData.name } ) );
		$Cap.append( $J('<div/>', {'class': 'category_background', 'style': 'background-image: url( \'https://cdn.fastly.steamstatic.com/store/promo/steamawards2024/backgrounds/' + def.internal_name +'.jpg\');' } ) );

		let $Content = $J('<div/>', {'class': 'category_content' } );
		$Content.append( $J('<div/>', {'class': 'category_title' } ).append( def.localization.title_linebreak.replace( '<1></1>', '<br/>' ).replace( '<2></2>', '<br/>' ) ) );

		let $Images = $J('<div/>', {'class': 'game_capsule' } );
		$Images.append( $J('<img/>', {'src': rgItemData.hero_capsule } ) );
		$Images.append( $J('<img/>', {'src': rgItemData.main_capsule } ) );

		$Content.append( $Images );
		$Cap.append( $Content );

		$Cap.append( $J( rgItemData.discount_block ).addClass( 'discount_block_inline' ) );

		$WinnerCapsules.append( $Cap );
	} );
}

