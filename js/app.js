$.fn.easyTyped = function(tag) {
    if (tag === "exp") {
        var text       = "cat my_experience";
        var target     = "#exp";
        var subsection = "#sectionExp";
        var subaside   = "#asideExp";
    }
    else if(tag == "hob") {
        var target     = "#hob";
        var text       = "cat cool_stuff";
        var subsection = "#sectionHob";
        var subaside   = "#asideHob";
    }

    $(target).typed({
        strings    : [text],
        typeSpeed  : 0,
        startDelay : 1,
        showCursor : true,
        callback   : function() {
            $(subsection).delay(500).show(0);
            setTimeout( function() {
                $(subaside).css('visibility', 'visible');
            }, 500);
        }
    });
};

$.fn.triggerEvent = function(number) {
    
    // If the key is 'Enter' and we can still display things
    if ((number < 2)) {

        $('body').css('height', '200%');

        // The first time, we display the cool stuff section
        if( number === 0 ) {
            $('#secondSection').css('visibility', 'visible');
            $('html, body').scrollTo('#secondSection');
            $(document).easyTyped("hob");

        }

        // The second time we display the contact section
        else if ( number === 1 ) {
            alert('todo contact');
        }

        number++;
    }

    // Then when it is over, we resize the body to make sure
    // it's not possible to scroll again in the 
    if (number === 2) {
        setTimeout( function() {
            $('body').css('height', 'auto');
        }, 1900);
    }

    return number;

};

// Main js script
$(function() {
    // A counter of events triggered 
    var counter = 0;

    // First we trigger the first typed. It will display the section about my experience
    $(document).easyTyped("exp");

    // Next the events are triggered by pressing enter or clicking on a "link"
    $(document).keypress(function(e) {
        if (e.which == 13) {
            counter = $(document).triggerEvent(counter);
        }
    });

    $('#asideExp, #asideHob').click(function() {
            counter = $(document).triggerEvent(counter);
    });
});
