var poems = ['two_poems', 'three_poems', 'laura_speaks', 'anxiety_of_place', 'bryant_park', 'apache_junction', 'whatdhegetinto', 'oppen_poems', 'nick_saban'];

//Jquery code for hovering over poems
$(document).ready(function(event) {

  $('p.poem').hover(function() {
    el = this.getAttribute('id');
    for (var i = 0; i < poems.length; i++) {
      if (el[i]) {
        var img = 'p#image_' + el;
        $('img#author_photo').hide();
        $('p#author_photo_text').hide();
        $(img).show();
      }
    }
  }, function() {
    el = this.getAttribute('id');
    for (var i = 0; i < poems.length; i++) {
      if (el[i]) {
        var img = 'p#image_' + el;
        $(img).hide();
        $('img#author_photo').show();
        $('p#author_photo_text').show();
      }
    }
  });
});
