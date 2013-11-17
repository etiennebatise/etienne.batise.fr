$(function(){
	// On rend tout ce qu'il y a en dessous de la bannière invisible
	$('#content, section, footer').css('visibility', 'hidden');
	// On le fadeout
	$('#content, section, footer').fadeOut(function(){
			// on le rend de nouveau visible
			$('#content, section, footer').css('visibility', 'visible');
		});
	// on le fadein
	$('#content, section, footer').fadeIn();
	
});
