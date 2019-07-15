module.exports.home = function(req, res) {
  res.render('home', {title: 'Home'});
};
module.exports.poems = function(req, res) {
  res.render('poems', {title: 'Poems'});
};
module.exports.books = function(req, res) {
  res.render('books', {title: 'Books'});
}
