module.exports.home = function(req, res) {
  res.render('index', {title: 'Home'});
};
module.exports.poems = function(req, res) {
  res.render('index', {title: 'Poems'});
};
module.exports.about = function(req, res) {
  res.render('index', {title: 'About'});
};
module.exports.books = function(req, res) {
  res.render('index', {title: 'Books'});
};

// module.exports.about = function (req, res) {
//     res.render('index', {title: 'About'});
// };
