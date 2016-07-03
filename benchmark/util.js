'use strict';


exports.random = random;


exports.randomString = function(len) {
  function code(c) {
    return c.charCodeAt(0);
  }

  const items = [
    [code('a'), 26],
    [code('A'), 26],
    [code('0'), 10]
  ];

  let str = '';
  for (let i = 0; i < len; i++) {
    const item = items[random(3)];
    str += String.fromCharCode(item[0] + random(item[1]));
  }
  return str;
};


function random(n) {
  return Math.floor(Math.random() * n);
}
