// $(function(){
// 	$(document).keydown(function(event) {
// 		if(e.which == 37){
// 			pX = parseInt($('#p').css('left'));
// 			if (pX > 0)
// 				$('#p').css('left', pX+2);
// 		}

// 		if(e.which == 39){
// 			pX = parseInt($('#p').css('left'));
// 			$('#p').css('left', pX-8); 
// 		}
// 	});
// });

$(function(){
	$(document).keydown(function(e){
        // DIRECTION GAUCHE
		if (e.which == 39) {
          pX = parseInt($('#p').css('left'));
          // if (pX < 280)
            $('#p').css('left', pX+10);
        }

        // DIRECTION DROITE
        if (e.which == 37) {
            pX = parseInt($('#p').css('left'));
            if (pX > 20)
                $('#p').css('left', pX-10);
        } 

        // DIRECTION HAUT
        if (e.which == 38) {
            pY = parseInt($('#p').css('top'));
            if (pY > 140)
                $('#p').css('top', pY-10);
        }

        // DIRECTION BAS
        if (e.which == 40) {
            pY = parseInt($('#p').css('top'));
            if (pY < 530)
                $('#p').css('top', pY+10);
        }
    });
});