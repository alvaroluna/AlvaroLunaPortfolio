function Footer() {
    // <footer> tag
    var footerTag = $("<footer>");
    footerTag.addClass("py-5 fixed-bottom")

    // <div> tag
    var divTag = $("<p>");
    divTag.addClass("container");

    // first <p> tag
    var pTopTag = $("<p>");
    pTopTag.addClass("m-0 text-center small");
    pTopTag.attr("id", "insertTopRowFooter");

    var pBtmTag = $("<p>");
    pBtmTag.addClass("m-0 text-center small");
    pBtmTag.attr("id", "insertBtmRowFooter");


    // data to populate <a> tags
    var footerData = {
        name: {
            text: "Alvaro Luna |"
        },
        email: {
            text: " luna.alvaro3@gmail.com |",
            href: "mailto:luna.alvaro3@gmail.com",
        },
        phoneNumber: {
            text: " 630 520 5943"
        }
    };

    var footerData2 = {
        gitHub: {
            text: "GitHub |",
            href: "https://github.com/alvaroluna",
        },
        linkedIn: {
            text: " LinkedIn |",
            href: "https://www.linkedin.com/in/aalvarolunaa/",
        },
        resume: {
            text: " Resume",
            href: "assets/pdf/Resume.pdf",
        },
    };

    // create <a> tags using footerData
    for (var key in footerData) {

        var aTag = $("<a>");
        if (footerData[key].href) {
            aTag.attr("href", footerData[key].href);
            aTag.attr("target", "_blank");
        }
        aTag.text(footerData[key].text);

        // append <a> to <p>
        pTopTag.append(aTag);
    }

    // create <a> tags using footerData2
    for (var key in footerData2) {

        var aTag2 = $("<a>");
        if (footerData2[key].href) {
            aTag2.attr("href", footerData2[key].href);
            aTag2.attr("target", "_blank");
        }
        aTag2.text(footerData2[key].text);

        // append <a> to <p>
        pBtmTag.append(aTag2);
    }

    // append <p> tags to <div> tag
    divTag.append(pTopTag);
    divTag.append(pBtmTag);

    // append <div> to <footer>
    footerTag.append(divTag)

    // append <footer> to <div class="col-md-6" id="insertFooter">
    $("#insertFooter").append(footerTag);

}


Footer();


{
    /* 
        <footer class="py-5 fixed-bottom">
          <div class="container">
            <p class="m-0 text-center small">
              <a href="">Alvaro Luna |</a>
              <a href="mailto:luna.alvaro3@gmail.com">luna.alvaro3@gmail.com </a>
              <a>| 630 520 5943</a>
            </p>
            <p>
              <a href="https://github.com/alvaroluna">GitHub</a> |
              <a href="https://www.linkedin.com/in/aalvarolunaa/">LinkedIn |</a>
              <a href="assets/pdf/Resume.pdf">Resume</a>
            </p>
          </div>
        </footer>
    */
}