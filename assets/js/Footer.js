function Main() {
  // create tags for footer
  var footerTag = $("<footer>");
  footerTag.addClass("py-5 fixed-bottom");

  var divTag = $("<div>");
  divTag.addClass("container");

  var p1Tag = $("<p>");
  p1Tag.addClass("m-0 text-center small");

  var p2Tag = $("<p>");

  var aTag_Git = $("<a>");
  aTag_Git.attr("href", "https://github.com/alvaroluna");
  aTag_Git.text("GitHub");

  var aTag_Link = $("<a>");
  aTag_Link.attr("href", "https://www.linkedin.com/in/aalvarolunaa/");
  aTag_Link.text("LinkedIn");

  var aTag_Resume = $("<a>");
  aTag_Link.attr("href", "assets/pdf/Resume.pdf");
  aTag_Link.text("Resume");

  // append to #insertFooter_js
}

Main();

{
  /* KEEP THIS AS REFERENCE

<footer class="py-5 fixed-bottom">
  <div class="container">
    <p class="m-0 text-center small">
      Alvaro Luna |
      <a href="mailto:luna.alvaro3@gmail.com">luna.alvaro3@gmail.com </a>| 630
      520 5943
    </p>
    <p>
      <a href="https://github.com/alvaroluna">GitHub</a> |
      <a href="https://www.linkedin.com/in/aalvarolunaa/">LinkedIn</a>|
      <a href="assets/pdf/Resume.pdf">Resume</a>
    </p>
  </div>
</footer>; 
*/
}
