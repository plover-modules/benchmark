const assert = require('assert');
const Suite = require('./suite');
const util = require('./util');
const suite = new Suite();


const list = [];
const NUM = 10000;
for (let i = 0; i < NUM; i++) {
  list.push(util.randomString(1000));
}


let resultA = '';
suite.mark('concat with Array.join', function() {
  resultA = list.join('');
});


let resultB = '';
suite.mark('concat with +=', function() {
  for (const item of list) {
    resultB += item;
  }
});

assert(resultA === resultB);

suite.report();
