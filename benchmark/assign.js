const assign = require('plover-util/lib/assign');

const Suite = require('./suite');
const suite = new Suite();



const NUM = 1 * 1000 * 1000;

const o = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10
};


suite.mark('Object.assign', () => {
  for (let i = 0; i < NUM; i++) {
    Object.assign({}, o);
  }
});


function forInAssign(des, src) {
  for (const k in src) {
    des[k] = src[k];
  }
}

suite.mark('for in', () => {
  for (let i = 0; i < NUM; i++) {
    forInAssign({}, o);
  }
});


function assignWithObjectKeys(des, src) {
  const keys = Object.keys(src);
  for (let i = 0, c = keys.length; i < c; i++) {
    const key = keys[i];
    des[key] = src[key];
  }
}


suite.mark('iter with Object.keys', () => {
  for (let i = 0; i < NUM; i++) {
    assignWithObjectKeys({}, o);
  }
});


suite.mark('plover-util/lib/assign', function() {
  for (let i = 0; i < NUM; i++) {
    assign({}, o);
  }
});


suite.report();
