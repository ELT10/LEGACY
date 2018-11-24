$(document)
    .ready(function() {

      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

    })
  ;

function inn() {
    var x = document.getElementById("neww");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('neww').scrollIntoView();
    } else {
        x.style.display = "none";
    }
}