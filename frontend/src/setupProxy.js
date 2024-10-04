const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            // target: "http://192.168.1.123:8080/api",
            target: "http://192.168.1.123:8080/api",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
