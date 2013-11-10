$(function(){
	function tip(){
			$.get('tip/view.php', function(data){
				$('#tip').html(data, function(){
				});
			});
	}
	function loop(){
		$("#tip").fadeOut(700, 'linear', function(){
			tip();
		});
		$("#tip").fadeIn(1000, 'linear');
	}
	tip();
	setInterval(loop, 10000);

});