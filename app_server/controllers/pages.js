module.exports.poems = function(req, res) {
  res.render('poems', {title: 'Poems'});
};
module.exports.about = function(req, res) {
  res.render('about', {title: 'About'});
};
