$(function(){
	function tip(){
			$.get('index.php?id=tip', function(data){
				$('#tip').html(data, function(){
					// $.trigger('display');
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