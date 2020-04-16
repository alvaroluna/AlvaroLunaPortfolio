function Footer() {
    // navigation tag
    var navTag = $("<nav>");
    navTag.addClass("navbar navbar-expand-lg navbar-light");

    // Alvaro 'Logo' in <a> tag
    var alvaroTag = $("<a>");
    alvaroTag.text("Alvaro Luna")
    alvaroTag.addClass("navbar-brand");
    alvaroTag.attr("href", "index.html");

    // standard upload options
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

    // append bottom row data
    for (var key in footerData) {

        var aTag = $("<a>");
        if (footerData[key].href) {
            aTag.attr("href", footerData[key].href);
            aTag.attr("target", "_blank");
        }
        aTag.text(footerData[key].text);

        // append <a> to <p>
        $("#insertTopRowFooter").append(aTag);
    }

    // append bottom row data
    for (var key in footerData2) {

        var aTag2 = $("<a>");
        if (footerData2[key].href) {
            aTag2.attr("href", footerData2[key].href);
            aTag2.attr("target", "_blank");
        }
        aTag2.text(footerData2[key].text);

        // append <a> to <p>
        $("#insertBtmRowFooter").append(aTag2);
    }

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