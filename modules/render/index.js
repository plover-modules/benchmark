exports.single = async (ctx) => {
  await sleep(100);
  ctx.layout = false;
  ctx.render();
};


exports.view = async (ctx) => {
  ctx.layout = {
    name: 'layout',
    data: {
      title: '淘宝 - 特色中国，再一次发现中国！发现最正宗的特色、美食、工艺品、老字号。'
    }
  };

  await sleep(20);
  const data = {
    list: [
      'A',
      'B',
      'C'
    ],

    obj: {
      name: 'test',
      age: 123,
      value: 'keyblue'
    },


    books: [
      { name: 'A' },
      { name: 'B' },
      { name: 'C' },
      { name: 'D' }
    ]
  };

  ctx.render(data);
};


exports.layout = async (ctx) => {
  const data = {
    spm: {
      id: 'a216r',
      value: '8181401'
    }
  };
  await sleep(20);
  ctx.render(data);
};


exports.header = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.footer = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.banner = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.todayRecommend = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.newRoom = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.cats = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.likeRecommend = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.darenRecommend = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.newBlock = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.oldBlock = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.city = async (ctx) => {
  await sleep(20);
  ctx.render();
};


exports.bottom = async (ctx) => {
  await sleep(20);
  ctx.render();
};


function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
