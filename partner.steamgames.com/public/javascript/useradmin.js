/* <script type="text/javascript"> */


/* Confirmation messages that can be shown at the top of the next page load.
 * They live here rather than travelling in the 'loadnotice' cookie because that
 * cookie is untrusted -- anyone who can set one would otherwise be picking the
 * markup we render.  All the cookie carries is a key into this table plus an id
 * to fill into the message's link.  Set 'css' to make it not a happy green box.
 */
var k_rgNotices = {
	'useradded': {
		'title': "User has been added!",
		'message': "Now you may want to proceed to <a %1$s>Manage Groups<\/a> to add this user to a group in order to define specific editing permissions for applications.",
		'linkurl': '/pub/groups/%1$s/'
	},
	'groupadded': {
		'title': "Group Created",
		'message': "Now you can use the tools below to add applications and then users with specific permissions to edit, view, or modify those applications"	}
};

/* Adds a confirmation message at the top of the next page load.
 */
function SetNotice( strNoticeID, nLinkID )
{
	var val = { 'id': strNoticeID, 'linkid': nLinkID };
	return $J.cookie('loadnotice', JSON.stringify(val), {'path': '/'} );
}

function DisplayPendingNotice()
{
	var notice = null;
	try
	{
		notice = JSON.parse( jQuery.cookie('loadnotice') );
	}
	catch( e )
	{
		// a malformed cookie shouldn't take the rest of the page down with it
	}

	// clear it up front, so one we can't render doesn't come back every load
	$J.cookie('loadnotice', null, {'path': '/'}  );

	if( !notice || !k_rgNotices.hasOwnProperty( notice.id ) )
		return;

	var rgNotice = k_rgNotices[ notice.id ];
	var message = rgNotice.message;
	if( rgNotice.linkurl )
	{
		var url = rgNotice.linkurl.replace( '%1$s', parseInt( notice.linkid, 10 ) || 0 );
		message = message.replace( '%1$s', 'href="' + url + '"' );
	}

	var scope = $J('#UANotice');
	$J('.title', scope).text( rgNotice.title );
	$J('.message', scope).html( message );

	if( rgNotice.css )
		scope.addClass( rgNotice.css );

	scope.show();
}

function SetAppRightsFromResponse( rgResponse, prefix )
{
	if( rgResponse.rights.rightsbreakdown )
	{
		$J.each(rgResponse.rights.rightsbreakdown, function (i, j) {
			if( rgResponse.actorrights.rightsbreakdown != undefined && !rgResponse.actorrights.rightsbreakdown[i] )
				$J('#' + prefix + i).hide().next().hide().next().hide();
			else
				$J('#' + prefix + i).show().next().show().next().show();
				
			$J('#' + prefix + i).prop('checked', j);
		});
	}
	else
		$J('.a_rightsCheckboxes.').prop('checked', false);
}

