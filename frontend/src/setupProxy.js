const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    const target =
        process.env.NODE_ENV === "production"
            ? "https://policonnect.onrender.com/api"
            : "http://192.168.1.136:8080/api";

    if (process.env.NODE_ENV !== "production") {
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
    }
};
