const Travis = require('travis-ci');
const travis = new Travis({
  version: '2.0.0'
})

travis.authenticate({github_token: process.env.GH_TOKEN}, function(err, res) {
  if (err) {
    console.log(err);
  }
  console.log(res);
})
console.log("you have deployed");
