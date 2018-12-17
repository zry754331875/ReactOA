const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/ygoa', { target: 'http://ygoa.yong-gang.cn' }));
};