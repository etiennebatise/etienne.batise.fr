$(function(){
	// Fonction qui permet de récuperer une tip grâce au module tip.
	function tip(){
		// On fait une requête get vers le module tip.
		$.get('index.php?id=tip', function(data){
			// On récupère la reponse à la requête get.

			if(data.length > 20){
				$('#tip').css('font-size',' 170%');
				$('#tip').html(data); 
			}
			else{
				$('#tip').css('font-size',' 200%');
				$('#tip').html(data); 
			}
		});
	}
	function loop(){
		// On fadeout le bloc tip
		$("#tip").fadeOut(700, 'linear', function(){
			// On rappelle la fonction tip()
			tip();
		});
		// On fadein le bloc tip
		$("#tip").fadeIn(700, 'swing', false);
	}
	tip();
	setInterval(loop, 10000);

});