module.exports.poems = function(req, res) {
  res.render('index', {title: 'Poems'});
};
module.exports.about = function(req, res) {
  res.render('index', {title: 'About'});
};
module.exports.contact = function(req, res) {
  res.render('index', {title: 'Contact'});
};
