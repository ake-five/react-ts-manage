// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from 'vite-plugin-windicss'
const { REACT_APP_PUBLIC_PATH } = process.env
import path from "path";
console.log(process.env);


export default defineConfig({
    base: REACT_APP_PUBLIC_PATH && `${REACT_APP_PUBLIC_PATH}/`,
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
