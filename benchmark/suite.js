/* eslint no-console: 0 */


class Suite {
  constructor() {
    this.items = [];
  }


  mark(name, fn) {
    const start = Date.now();
    const item = {
      name: name,
      start: start,
      cost: -1
    };
    this.items.push(item);

    const done = () => {
      item.cost = Date.now() - start;
    };

    if (fn) {
      fn();
      done();
    }

    return done;
  }


  report() {
    for (const item of this.items) {
      console.log(`${item.name} ${item.cost}\n`);
    }
  }
}


module.exports = Suite;
