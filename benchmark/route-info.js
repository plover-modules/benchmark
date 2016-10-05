const RouteInfo = require('plover-util/lib/route-info');

const Suite = require('./suite');
const suite = new Suite();



function parseWithIndexOf(parent, url) {
  let pos = url.indexOf('#');
  pos = pos !== -1 ? pos : url.indexOf(':');

  if (pos === -1) {
    return { module: parent.module, action: url };
  }

  return {
    module: url.substr(0, pos - 1),
    action: url.substr(pos + 1)
  }
}


const re = /^(?:([-\w\/]+)[#:])?([-\w]+)/;
function parseWithRegexp(parent, url) {
  const match = re.exec(url);
  return {
    module: match[1] || parent.module,
    action: match[2]
  };
}


const NUM = 1 * 1000 * 1000;

suite.mark('parse with indexOf', () => {
  for (let i = 0; i < NUM; i++) {
    parseWithIndexOf({ module: 'photos' }, 'users#show');
  }
  for (let i = 0; i < NUM; i++) {
    parseWithIndexOf({ module: 'photos' }, 'show');
  }
  for (let i = 0; i < NUM; i++) {
    parseWithIndexOf({ module: 'photos' }, 'admin/users:show');
  }
});


suite.mark('parse with regexp', () => {
  for (let i = 0; i < NUM; i++) {
    parseWithRegexp({ module: 'photos' }, 'users#show');
  }
  for (let i = 0; i < NUM; i++) {
    parseWithRegexp({ module: 'photos' }, 'show');
  }
  for (let i = 0; i < NUM; i++) {
    parseWithIndexOf({ module: 'photos' }, 'admin/users:show');
  }
});


suite.mark('RouteInfo.parse', () => {
  for (let i = 0; i < NUM; i++) {
    RouteInfo.parse({ module: 'photos' }, 'users#show');
  }
  for (let i = 0; i < NUM; i++) {
    RouteInfo.parse({ module: 'photos' }, 'show');
  }
  for (let i = 0; i < NUM; i++) {
    RouteInfo.parse({ module: 'photos' }, 'admin/users:show');
  }
});


suite.report();
