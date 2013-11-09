	$(function() {
		$('#home').click(function(){
			$('#content, section, footer').fadeOut(function(){
				$('#content').load('home/home.php', function(){
					$('content, section, footer').fadeIn();
				});
			});
		});
	});