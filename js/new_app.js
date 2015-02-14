/*
 * Main script
 * Its jobs is to react to the different user interactions :
 *   - Return Key pressed
 *   - A click is made on the buttons
 *   - The user is scrolling
 *
 * Difficulty : wait for the end of the section animations to enable the next animation.
 */
$(function() {

    // The state is the number of section that are visible
    var state = 0;

    // The clickTargets are the tags the will update the state
    var clickTargets = ['#aside-exp', '#aside-hob'];

    // The hiddenSections are the section that need to be visible on the view port to enable the  update when the user scrolls
    // The sections need to have their visibility set to hidden
    var section = ['#second-section'];

    // We want the initial state to be one
    state = $(document).update(state);


    // When the return key is pressed
    $(document).keypress(function(e) {

        if  (e.which == 13)
            state = $(document).update(state);

    });


    // When the clickTargets are clicked 
    $(clickTargets.toString()).click(function() {

        state = $(document).update(state);

    });

    // When the user scrolls

    var scrollEventTimout = true;
    //$(window).scroll(function() {
        //// if the device is a wide screen
        //if ( !isOnMobile ) {

            //// if what we want to display is on the viewport
            //if ( ($(section.toString()).visible(true, false)) && !updateLocked ) {
                //// We trigger the 2 last states because I want it to behave this way for the moment
                //state = $(document).update(state);
                //scrollEventTimout = false;
                //setTimeout(function() { scrollEventTimout = true; }, 500); 
            //}

        //}

    //});
});

/*
 * This function has to deal with all the things that need to be visible or hidden, the viewport movements.
 * It also triggers the section animations and disable itself until they are complete.
 *
 * param : state is an int in [0, 1, 2]
 */
$.fn.update = function(state, callBack) {

    var sections = ['first-section','second-section','third-section'];

    /*
     * For each updates, we want to :
     *   0. Lock the function
     *   1. Display the next section
     *   2. Move To this section
     *   3. Trigger the animation
     *   4. Unlock the function
     */

    if (updateLocked === false) {
        // Locker
        updateLocked = true;

        $(document).mShow("#" + sections[state]);

        if ( (state != 0) && !($(document).isOnMobile()) )
            $(document).moveTo(sections[state]);

        $(document).animateSection(state);

        // Unlocker
        updateLocked = false;

        state = state + 1;
    }

    return state;

};


/*
 * This function is just a layer for the scrollTo function
 */
$.fn.moveTo = function(tag) {

    var scrollToSettings = {
        offsetTop : '3px',
        easing    : 'swing',
        duration  : '1s'
    };

    var target = "#" + tag;
    $('html, body').scrollTo(target, scrollToSettings);
};

$.fn.animateSection = function(state) {

    var tags;

    if (state === 0 )
                //0        , 1                , 2              , 3            , 4              , 5
        tags =  [ "#exp" , "cat daily_life" , "#section-exp" , "#aside-exp" , "#first-enter" , "null" ];


    if (state === 1 )
                //0     , 1                , 2              , 3            , 4               , 5              , 6
        tags = [ "#hob" , "cat cool_stuff" , "#section-hob" , "#aside-hob" , "#second-enter" , "#first-enter" , "#aside-exp" ];


    if (state === 2 )
                //0     , 1             , 2              , 3      , 4      , 5               , 6
        tags = [ "#con" , "ls contacts" , "#section-con" , "null" , "null" , "#second-enter" , "#aside-hob" ];

    $(document).mHide(tags[5]);
    $(document).mHide(tags[6]);

    $(tags[0]).typed({
        strings    : [tags[1]],
        typeSpeed  : 0,
        startDelay : 1,
        showCursor : true,
        callback   : function() {
            $(document).mShow(tags[2]);
            $(document).mShow(tags[3]);
            $(document).mShow(tags[4]);
        }
    });

};

/*
 * The global variable used to lock the update function
 */
var updateLocked = false;

/*
 * Utils 
 */
$.fn.mShow = function(tag) {
    if (!(tag === "null"))
        $(tag).css('visibility', 'visible');
};
$.fn.mHide = function(tag) {
    if (!(tag === "null"))
        $(tag).css('visibility', 'hidden');
};

$.fn.isOnMobile = function() {
    // By default we consider the device is a wide screen
    var result = false;

    // But we check thanks to media queries in css
    if( $(".enter").css("display") == "none")
       result = true;
    return result;


}
