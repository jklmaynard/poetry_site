const Travis = require('travis-ci');

const travis = new Travis({
  version: '2.0.0'
})

console.log(process.env);
console.log("you have deployed");
