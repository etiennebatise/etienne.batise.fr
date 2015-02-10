/*
 * Aims to simplify the calls to the plugin
 */
$.fn.easyTyped = function(tag) {

    // Experience section
    if (tag === "exp") {
        var text       = "cat daily_life";
        var target     = "#exp";
        var subsection = "#section-exp";
        var subaside   = "#aside-exp";
    }

    // Hobbies section
    else if(tag == "hob") {
        var target     = "#hob";
        var text       = "cat cool_stuff";
        var subsection = "#section-hob";
        var subaside   = "#aside-hob";
    }

    // Contact section
    else if(tag == "con") {
        var target     = "#con";
        var text       = "ls contacts";
        var subsection = "#section-con";
        var subaside   = "null";
    }


    // Abstrac call to the plugin 
    $(target).typed({
        strings    : [text],
        typeSpeed  : 0,
        startDelay : 1,
        showCursor : true,
        callback   : function() {
            $(subsection).delay(100).css('visibility', 'visible');
            // Delete that ?
            setTimeout( function() {
                if ( !(subaside === "null") )
                    $(subaside).css('visibility', 'visible');
            }, 500);
        }
    });
};

/*
 * Trigger the events corresponding to the thing to display.
 * This is called when <Enter> is pressed, or when the good element is clicked.
 */
$.fn.triggerEvent = function(number, viewport) {

    // Default setting for the ScrollTo lib
    var scrollToSettings = {offsetTop : '3px', easing : 'swing', duration : '1s'};

    // The first time, we display the experience section
    if ( number === 0 ) {
        $(document).easyTyped("exp");
    }

    // TODO there can be a way  to refactor the two following statements (arrays ?)
    // The second time, we display the cool stuff section
    if ( number === 1 ) {

        // We hide the first trigger "button" 
        $('#first_Trigger').css('visibility', 'hidden');

        // We make the following section visible
        $('#second-section').css('visibility', 'visible');

        // We scroll to that following section
        $('html, body').scrollTo('#second-section', scrollToSettings);

        // Then we start the next typing job
        $(document).easyTyped("hob");
    }

    // The third time we display the contact section
    else if ( number === 2 ) {

        // We hide the seccond trigger "button"
        $('#second_Trigger').css('visibility', 'hidden');

        // We make visible the following section
        $('#third-section').css('visibility', 'visible');

        // We scroll to that next section
        //$('html, body').scrollTo('#third-section',scrollToSettings);
        $.scrollTo('#third-section',scrollToSettings);

        // We start the last typing job
        $(document).easyTyped("con");
    }

    if ((number < 3)) {
        // We increment that amazingly named counter to know where we are
        number++;
    }
    return number;
};

/*
 * Main js script
 */
$(function() {
    //
    // A counter of events triggered 
    var counter = 0;
    var timeout = false;
    var delay   = 1500;
    var viewport = $(document).height();

    // First we trigger the first typed. It will display the section about my experience
    counter = $(document).triggerEvent(counter);
    setTimeout(function() { timeout = true; },delay);

    // Next the events are triggered by pressing enter or clicking on a "link"
    $(document).keypress(function(e) {
        if ((e.which == 13) && (timeout)) {
            counter = $(document).triggerEvent(counter, viewport);
            timeout = false;
            setTimeout(function() { timeout = true; }, delay); 
        }
    });

    $('#aside-exp, #aside-hob').click(function() {
            counter = $(document).triggerEvent(counter, viewport);
    });
});
