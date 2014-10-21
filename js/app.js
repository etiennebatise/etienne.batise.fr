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
    else if(tag == "con") {
        var target     = "#con";
        var text       = "ls etienne/contact_options";
        var subsection = "#sectionCon";
        var subaside   = "null";
    }


    $(target).typed({
        strings    : [text],
        typeSpeed  : 0,
        startDelay : 1,
        showCursor : true,
        callback   : function() {
            $(subsection).delay(500).show(0);
            setTimeout( function() {
                if ( !(subaside === "null") )
                    $(subaside).css('visibility', 'visible');
                else {
                    $('#twitterLink').shuffleLetters({"text": "twitter.com/EtienneBatise"});
                    $('#githubLink').shuffleLetters({"text": "github.com/etiennebatise"});
                    $('#linkedinLink').shuffleLetters({"text": "linkedin.com/etiennebatise"});
                    $('#twitterAscii').shuffleLetters(
                            {
                                "text" : $("#tw").text(),
                                "step" : 4,
                                "fps" : 250
                            });
                    $('#githubAscii').shuffleLetters(
                            {
                                "text" : $("#gh").text(),
                                "step" : 2,
                                "fps" : 950
                            });
                    $('#linkedinAscii').shuffleLetters(
                            {
                                "text" : $("#in").text(),
                                "step" : 4,
                                "fps" : 250
                            });
                }
            }, 500);
        }
    });
};

$.fn.heightCss = function(coef) {
    var newHeight = $(window).height() * coef;
    var result    = newHeight.toString();
    result        = result +"px";
    return result;
}

$.fn.triggerEvent = function(number) {

    var viewport = $(document).height();
    var scrollToSettings = {offsetTop : '20', easing : 'swing'};
    // If the key is 'Enter' and we can still display things
    if ((number < 3)) {

        if ( number === 0 ) {
            $(document).easyTyped("exp");
        }

        // The first time, we display the cool stuff section
        if ( number === 1 ) {
            $('body').css('height', $(document).heightCss(1.95));
            $('#secondSection').css('visibility', 'visible');
            $('html, body').scrollTo('#secondSection', scrollToSettings);
            $(document).easyTyped("hob");
        }

        // The second time we display the contact section
        else if ( number === 2 ) {
            $('body').css('height', $().heightCss(2.65));
            $('#thirdSection').css('visibility', 'visible');
            $('html, body').scrollTo('#thirdSection',scrollToSettings);
            $(document).easyTyped("con");
        }
        number++;
    }
    return number;
};

// Main js script
$(function() {
    // A counter of events triggered 
    var counter = 0;
    var timeout = false;
    var delay   = 1500;

    // First we trigger the first typed. It will display the section about my experience
    counter = $(document).triggerEvent(counter);
    setTimeout(function() { timeout = true; },delay);

    // Next the events are triggered by pressing enter or clicking on a "link"
    $(document).keypress(function(e) {
        if ((e.which == 13) && (timeout)) {
            counter = $(document).triggerEvent(counter);
            timeout = false;
            setTimeout(function() { timeout = true; }, delay); 
        }
    });

    $('#asideExp, #asideHob').click(function() {
            counter = $(document).triggerEvent(counter);
    });
});
