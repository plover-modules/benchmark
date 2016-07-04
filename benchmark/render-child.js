'use strict';


const util = require('./util');
const Suite = require('./suite');

const suite = new Suite();

const sPlaceHolder = '##PLOVER_' + Date.now() + '_';
const rPlaceHolder = new RegExp(sPlaceHolder + '(\\d+)', 'g');


function genFixture(size) {
  const list = [];
  const depends = [];
  for (let i = 0; i < size; i++) {
    list.push(util.randomString(util.random(10000)));
    depends.push(util.randomString(util.random(10000)));
  }

  return { list: list, depends: depends };
}


const fixture = genFixture(1000);


suite.mark('render with regexp', () => {
  const sPlaceHolder = '##PLOVER_' + Date.now() + '_';
  const rPlaceHolder = new RegExp(sPlaceHolder + '(\\d+)_', 'g');

  let content = '';
  suite.mark('prepare', () => {
    fixture.list.forEach((html, index) => {
      content += html;
      content += sPlaceHolder + index + '_';
    });
  });

  let count = 0;
  const depends = fixture.depends;
  suite.mark('replace', () => {
    const newContent = content.replace(rPlaceHolder, (all, key) => {
      const index = +key;
      count++;
      return depends[index];
    });
  });
  console.log(count);
});


suite.mark('render with substr', () => {
  const sPlaceHolder = '##PLOVER_' + Date.now() + '_';

  let content = '';
  suite.mark('prepare', () => {
    fixture.list.forEach((html, index) => {
      content += html;
      content += sPlaceHolder + toFixed(index, 10);
    });
  });

  let count = 0;
  const depends = fixture.depends;
  suite.mark('replace', function() {
    let last = 0;
    let pos = content.indexOf(sPlaceHolder, last);
    let skip = sPlaceHolder.length + 10;
    let result = '';
    while (pos !== -1) {
      result += content.substring(last, pos);
      last = pos + skip + 1;
      pos = content.indexOf(sPlaceHolder, last);
      const index = +content.substr(pos + sPlaceHolder.length, 10);
      result += depends[index];
      count++;
    }
  });

  console.log(count);
});


function toFixed(num, len) {
  let prefix = '';
  const str = '' + num;
  let count = len - str.length;
  while (count > 0) {
    prefix += '0';
    count--;
  }
  return prefix + str;
}


suite.report();
