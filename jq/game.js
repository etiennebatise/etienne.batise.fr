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
    function goLeft(){
        pX = parseInt($('#p').css('left'));
        if (pX > 20){
            $('#p').animate({
            left: '-=20'
            },
            100,
            'linear',
            function() {
                goLeft();
            });
        }
    }

    function goRight(){
        pX = parseInt($('#p').css('left'));
        // if (pX > 20){
            $('#p').animate({
                left: '+=20'
            },
            100,
            'linear',
            function() {
                goRight();
            });
        // }
    }
    
    function goUp(){
        pY = parseInt($('#p').css('top'));
        if (pY > 157) {
            $('#p').animate({
                top: '-=20'
            },
            100,
            'linear',
            function() {
                goUp();
            });
        }
    }

    function goDown(){
        pY = parseInt($('#p').css('top'));
        if (pY < 513){
            $('#p').animate({
            top: '+=20'
            },
            100,
            'linear',
            function() {
                goDown();
            });
        }
    }

    $(document).keydown(function(e){
        $('#p').stop(true, false);

        // DIRECTION GAUCHE
        if (e.which == 37) {
            goLeft();
        }

        // DIRECTION DROITE
        if (e.which == 39) {
            goRight();
        } 

        // DIRECTION HAUT
        if (e.which == 38) {
            goUp();
        }

        // DIRECTION BAS
        if (e.which == 40) {
            goDown();
        }
    });
});