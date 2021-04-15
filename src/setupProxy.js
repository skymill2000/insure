const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/v1.0',
    createProxyMiddleware({
      target: 'https://dev-gateway.dbins.co.kr:8903',
      changeOrigin: true,
    })
  );
};
