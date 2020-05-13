const { createProxyMiddleware, Filter, Options, RequestHandler } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/!*',
        createProxyMiddleware({
            target: 'https://www.fastmock.site/mock/02e5a37115fa75c7c564bca4cb4d7829/',
            changeOrigin: true,
        })
    );
};
