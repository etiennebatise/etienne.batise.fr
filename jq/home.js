$(function(){
	$
	$('#content, section, footer').css('visibility', 'hidden');
	$('#content, section, footer').fadeOut(function(){
			$('#content, section, footer').css('visibility', 'visible');
		});
	$('#content, section, footer').fadeIn();
	
});
