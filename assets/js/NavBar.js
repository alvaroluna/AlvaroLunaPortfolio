//////////////////////
// HELPER FUNCTIONS //
//////////////////////

function ChangeActiveState(htmlTag) {
    $(".nav .nav-link").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });
}


//////////////////////////////
// MAIN NAVIGATION FUNCTION //
//////////////////////////////

function NavigationBar() {
    //////////////////
    // NAV BAR DATA //
    //////////////////
    var navLinksObj = {
        aboutMe: {
            text: "About Me",
            url: "index.html",
            justification: "left",
        },
        portfolio: {
            text: "Portfolio",
            url: "portfolio.html",
            justification: "left",
        },
        contact: {
            text: "Contact",
            url: "contact.html",
            justification: "left",
        },
    };


    //////////////////////
    // CREATE HTML TAGS //
    //////////////////////

    // navigation tag
    var navTag = $("<nav>");
    navTag.addClass("navbar navbar-expand-lg navbar-light LOGO");

    // Alvaro 'Logo' in <a> tag
    var aTagLOGO = $("<a>");
    // aTagLOGO.text("OBJ.APP")
    aTagLOGO.text("A.LUNA")
    aTagLOGO.addClass("navbar-brand LOGO");
    aTagLOGO.attr("id", "logo")
    aTagLOGO.attr("href", "home.html");

    // button behavior settings
    var button = $("<button>");
    button.addClass("navbar-toggler");
    button.attr("type", "button");
    button.attr("data-toggle", "collapse");
    button.attr("data-target", "#navbarSupportedContent");
    button.attr("aria-controls", "navbarSupportedContent");
    button.attr("aria-expanded", "false");
    button.attr("aria-label", "Toggle navigation");

    // span tag embedded in button behavior settings above
    var buttonEmbSpan = $("<span>");
    buttonEmbSpan.addClass("navbar-toggler-icon");

    // html links
    var divTagLinks = $("<div>");
    divTagLinks.addClass("collapse navbar-collapse order-3");
    divTagLinks.attr("id", "navbarSupportedContent");

    // unsorted list for html links
    var unsortedListTag = $("<ul>");
    unsortedListTag.addClass("navbar-nav mr-auto");

    // loop through nav links to create an li tag for each, append the total
    for (var key in navLinksObj) {
        console.log(navLinksObj[key].text);

        var listItemTag = $("<li>");
        listItemTag.addClass("nav-item");

        var aTag = $("<a>");
        aTag.addClass("nav-link");

        if (navLinksObj[key].url === "portfolio.html") {
            // highlight active page
            aTag.addClass("active");

            // also underline text
            // aTag.attr("style", "background-size: 1px 4em;box-shadow:inset 0 -0.175em white,inset 0 -0.2em #000;")
            // aTag.attr("style", "background: rgb(var(--bkgnd-gradTop));")
            aTag.attr("style", "background: yellow;")
        }


        aTag.attr("href", navLinksObj[key].url);
        aTag.text(navLinksObj[key].text);

        var aEmbeddedSpanTag = $("<span>");
        aEmbeddedSpanTag.addClass("sr-only");
        aEmbeddedSpanTag.text("(current)");

        // append <span> tag to <a> tag
        aTag.append(aEmbeddedSpanTag);

        // append <a> tag to <li> tag
        listItemTag.append(aTag);

        // append <li> tag to <ul> tag
        unsortedListTag.append(listItemTag);
    }


    ///////////////////////////////////////////
    // MOST OF THE APPENDING UPSTREAM TO DOM //
    ///////////////////////////////////////////

    // append span to button settings
    button.append(buttonEmbSpan);

    // append <ul> tag to <div> tag
    divTagLinks.append(unsortedListTag);

    // append <a>, <button>, and <div> tags to <nav> tag
    navTag.append(aTagLOGO);
    navTag.append(button);
    navTag.append(divTagLinks);

    // write new html to the DOM
    $("#insertNavBar").append(navTag);
}

// PROGRAM ENTRY POINT
NavigationBar();


{
    /* 
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">Alvaro Luna</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="index.html">About Me</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="portfolio.html">Portfolio<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
            </li>
        </ul>
        </div>
    </nav> 
    */
}