module.exports.poems = function(req, res) {
  res.render('poems', {title: 'Poems'});
};
module.exports.about = function(req, res) {
  res.render('about', {title: 'About'});
};
module.exports.contact = function(req, res) {
  res.render('contact', {title: 'Contact'});
};
