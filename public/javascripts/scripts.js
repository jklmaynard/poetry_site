var poems = ['two_poems', 'three_poems', 'laura_speaks', 'anxiety_of_place', 'bryant_park', 'apache_junction', 'whatdhegetinto', 'oppen_poems', 'nick_saban'];

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
        var img = 'p#image_' + el;
        $(img).show();
      }
    }
  }, function() {
    el = this.getAttribute('id');
    for (var i = 0; i < poems.length; i++) {
      if (el[i]) {
        var img = 'p#image_' + el;
        $(img).hide();
      }
    }
  });
});
