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

    function isADirectionKey(e){
        return ((e.which == 37) || (e.which == 39) || (e.which == 38) || (e.which == 40)) 
    }
    $(document).keydown(function(e){
        // On arrête toute les annimations du perso
        // Attention en cas de nouvelles animations.
        if (isADirectionKey(e))
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