var poems = ['otis-sortie', 'otis', 'two_poems', 'three_poems', 'bryant_park', 'whatdhegetinto', 'oppen_poems', 'nick_saban'];

//Jquery code for hovering over poems
$(document).ready(function(event) {
  //hide author photo when entering div
  $('div#poems').hover(function() {
    $('div#author').hide();
  }, function() {
    $('div#author').fadeIn(1000);
  });
  //show sample of poem
  $('p.poem').hover(function() {
    el = this.getAttribute('id');
    for (var i = 0; i < poems.length; i++) {
      if (el[i]) {
        var img = 'div#image_' + el;
        $(img).show();
      }
    }
  }, function() {
    el = this.getAttribute('id');
    for (var i = 0; i < poems.length; i++) {
      if (el[i]) {
        var img = 'div#image_' + el;
        $(img).hide();
      }
    }
  });
});
//Google analytics
//Skip if working in dev environment
if (document.location.hostname !== "localhost") {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-97539543-1', 'auto');
  ga('send', 'pageview');
}
