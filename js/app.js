/*
 * Aims to simplify the calls to the plugin
 */
$.fn.easyTyped = function(tag) {

    var state = 0;
    if (state === 0 )
        tags =  [ "#exp", "cat daily_life", "#section-exp", "#aside-exp", "#first-enter", "null" ];


    if (state === 1 )
        tags = [ "#hob", "cat cool_stuff", "#section-hob", "#aside-hob", "#second-enter", "#first-enter", ];


    if (state === 2 )
        tags = [ "#con", "ls contacts", "#section-con", "null", "null", "#second-enter", ];

    alert(tags[1]);
    $(tags[0]).typed({
        strings    : [tags[1]],
        typeSpeed  : 0,
        startDelay : 1,
        showCursor : true,
        callback   : function() {
            $(document).mShow(tags[2]);
            $(document).mShow(tags[3]);
            $(document).mShow(tags[4]);
            //$(document).mHide(tags[5]);
        }
    });
/*
 *    // Experience section
 *    if (tag === "exp") {
 *        var text           = "cat daily_life";
 *        var target         = "#exp";
 *        var subsection     = "#section-exp";
 *        var subaside       = "#aside-exp";
 *        var enterToDisplay = "#first-enter";
 *        var enterToHide    = "null";
 *    }
 *
 *    // Hobbies section
 *    else if(tag == "hob") {
 *        var target         = "#hob";
 *        var text           = "cat cool_stuff";
 *        var subsection     = "#section-hob";
 *        var subaside       = "#aside-hob";
 *        var enterToDisplay = "#second-enter";
 *        var enterToHide    = "#first-enter";
 *    }
 *
 *    // Contact section
 *    else if(tag == "con") {
 *        var target         = "#con";
 *        var text           = "ls contacts";
 *        var subsection     = "#section-con";
 *        var subaside       = "null";
 *        var enterToDisplay = "null";
 *        var enterToHide    = "#second-enter";
 *    }
 *
 *    // We hide the last Enter button
 *    // TODO Refactor outsie : this just deal with the type.
 *    if ( !(enterToHide === "null") )
 *        $(enterToHide).css('visibility', 'hidden');
 *
 *    // Abstrac call to the plugin 
 *    $(target).typed({
 *        // TODO refactor outside the function
 *        strings    : [text],
 *        typeSpeed  : 0,
 *        startDelay : 1,
 *        showCursor : true,
 *        callback   : function() {
 *
 *            // refactor this function outside
 *            // We display the Enter button
 *            // for the  current title typed
 *            //
 *            if ( !(enterToDisplay === "null") )
 *                $(enterToDisplay).css('visibility', 'visible');
 *
 *            // We display the text
 *            $(subsection).delay(100).css('visibility', 'visible');
 *
 *            $(subaside).css('visibility', 'visible');
 *            // We display the Next button
 *            // Delete that ?
 *            //setTimeout( function() {
 *            //if ( !(subaside === "null") )
 *            //$(subaside).css('visibility', 'visible');
 *            //}, 500);
 *        }
 *    });
 */
};

/*
 * Trigger the events corresponding to the thing to display.
 * This is called when <Enter> is pressed, or when the good element is clicked.
 */
$.fn.triggerEvent = function(number, viewport, callBackFunction) {

    // Default setting for the ScrollTo lib
    var scrollToSettings = {offsetTop : '3px', easing : 'swing', duration : '1s'};

    // The first time, we display the experience section
    if ( number === 0 ) {
        $(document).easyTyped("exp");
    }

    // TODO there can be a way  to refactor the two following statements (arrays ?)
    // And put here the enters buttons in here too
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
        //$('#second_Trigger').css('visibility', 'hidden');
        $(document).mShow('#second_Trigger');

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

    if (callBackFunction == "function") callBackFunction(number);

    return number;
};

$.fn.mShow = function(tag) {
    $(tag).css('visibility', 'visible');
}
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

    $(document).ready( function () {
        $('html, body').scrollTo('body');
    });


    // First we trigger the first typed. It will display the section about my experience
    counter = $(document).triggerEvent(counter);
    setTimeout(function() { timeout = true; },delay);

    // Next the events are triggered by pressing enter or clicking on a "link"
    // Here we deal with the keyboard triggers
    $(document).keypress(function(e) {
        if ((e.which == 13) && (timeout)) {
            // refactor this line
            counter = $(document).triggerEvent(counter, viewport);
            timeout = false;
            setTimeout(function() { timeout = true; }, delay); 
        }
    });

    // Here we deal with the click triggers

    var clickTarget = ['#aside-exp', '#aside-hob'];
    $(clickTarget.toString()).click(function() {
        // refactor this line
        counter = $(document).triggerEvent(counter, viewport);
        timeout = false;
        setTimeout(function() { timeout = true; }, delay); 
    });

    // Here we deal with the scroll triggers
    $(window).scroll(function(){
        if ( ($("#second-section").visible(true, false)) && timeout ) {
            // refactor this line
            counter = $(document).triggerEvent(counter, viewport, function(counter) {
                counter = $(document).triggerEvent(counter, viewport);
            });
            //counter = $(document).triggerEvent(counter, viewport);
            //setTimeout(function() {
                //counter = $(document).triggerEvent(counter, viewport);
                //}, 600); 
            timeout = false;
            setTimeout(function() { timeout = true; }, delay); 
        }
    });
});
