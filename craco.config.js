const path = require("path");
module.exports = {
    //针对antd实现按需打包：根据import打包（使用babel-plugin-import）
    babel: {
        plugins: [
            [
                "import",
                {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: "css", //自动打包相关的样式
                },
            ],
        ],
    },
    webpack: {
        alias: {
            "@": path.join(__dirname, "src"),
        },
    },
};
