// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ["@babel/plugin-transform-react-jsx"],
            },
            build: {
                rollupOptions: {
                    input: [],
                },
            },
            optimizeDeps: {
                entries: [],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        // ← ← ← ← ← ←
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
