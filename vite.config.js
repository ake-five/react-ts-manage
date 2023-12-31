// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from 'vite-plugin-windicss'
const { REACT_APP_PUBLIC_PATH } = process.env
import path from "path";
const packageName = require('./package.json').name;

export default defineConfig({
    // publicPath: REACT_APP_PUBLIC_PATH && `${REACT_APP_PUBLIC_PATH}/` || '',
    base: 'react-ts-manage',
    build: {
        outDir: "docs",
        // lib: {
        //     // entry: './src/main.js', // 指定微应用的入口文件
        //     name: `${packageName}-[name]`, // 输出的库名称
        //     fileName: (format) => `micro-app.${format}.js`, // 输出的文件名
        // },
        rollupOptions: {
            output: {
                library: `${packageName}-[name]`,
                libraryTarget: 'umd',
                jsonpFunction: `webpackJsonp_${packageName}`,
            },
        },
    },
    plugins: [
        react({
            babel: {
                plugins: ["@babel/plugin-transform-react-jsx"],
            },
        }),
        WindiCSS()
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
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
        },
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
});
