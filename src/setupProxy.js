const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://47.96.0.221:9000",
            changeOrigin: true,
            pathRewrite: { "^/api": "" },
        })
    );
};
