const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            // target: "http://localhost/api",
            target: "http://localhost/api",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
