const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    const target =
        process.env.NODE_ENV === "production"
            ? "https://policonnect.onrender.com/api"
            : "http://localhost:8080/api";

    app.use(
        "/api",
        createProxyMiddleware({
            target: target,
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
