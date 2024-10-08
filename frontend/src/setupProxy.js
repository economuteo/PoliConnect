const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            // target: "http://localhost:8080/api",
            target: "http://192.168.56.1:8080/api",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
