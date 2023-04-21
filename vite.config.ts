// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "fs";
import path from "path";

const packageJson = JSON.parse(
    readFileSync("./package.json", { encoding: "utf-8" })
);

const globals = {
    ...(packageJson?.dependencies || {}),
};

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ["@babel/plugin-transform-react-jsx"],
            },
        }),
        // typescript({
        //     target: "es5",
        //     rootDir: path.resolve("src/"),
        //     declaration: true,
        //     declarationDir: path.resolve("dist"),
        //     exclude: path.resolve("node_modules/**"),
        //     allowSyntheticDefaultImports: true,
        // }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },

    server: {
        // ← ← ← ← ← ←
        port: 2023,
        host: "0.0.0.0", // ← 新增内容 ←
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `@import "${path.resolve(
                    __dirname,
                    "src/theme.module.less"
                )}";`,
                javascriptEnabled: true,
            },
        },
    },

    // build: {
    //     // 输出文件夹
    //     outDir: "dist",
    //     lib: {
    //         // 组件库源码的入口文件
    //         entry: path.resolve("src/index.jsx"),
    //         // 组件库名称
    //         name: "dome-design",
    //         // 文件名称, 打包结果举例: suemor.cjs
    //         fileName: "mian",
    //         // 打包格式
    //         formats: ["es", "cjs"],
    //     },
    //     rollupOptions: {
    //         //排除不相关的依赖
    //         external: ["react", "react-dom", ...Object.keys(globals)],
    //     },
    // },
});
