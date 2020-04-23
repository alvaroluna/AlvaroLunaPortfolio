function Footer() {
    // <footer> tag
    var footerTag = $("<footer>");
    footerTag.addClass("py-5 fixed-bottom"); // fixed-bottom was here
    footerTag.attr("id", "footerBackground")

    // <div> tag
    var divTag = $("<p>");
    divTag.addClass("container");

    // first <p> tag
    var pTag = $("<p>");
    pTag.addClass("m-0 text-center");
    pTag.attr("id", "insertTopRowFooter");


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
            text: " 630 520 5943 |"
        },
        gitHub: {
            text: " GitHub |",
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
        pTag.append(aTag);
    }

    // append <p> tags to <div> tag
    divTag.append(pTag);

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