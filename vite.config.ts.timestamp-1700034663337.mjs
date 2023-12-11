// vite.config.ts
import { defineConfig } from "file:///D:/%E9%A1%B9%E7%9B%AE/react-ts-manage/node_modules/vite/dist/node/index.js";
import react from "file:///D:/%E9%A1%B9%E7%9B%AE/react-ts-manage/node_modules/@vitejs/plugin-react/dist/index.mjs";
import WindiCSS from "file:///D:/%E9%A1%B9%E7%9B%AE/react-ts-manage/node_modules/vite-plugin-windicss/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\\u9879\u76EE\\react-ts-manage";
var vite_config_default = defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@babel/plugin-transform-react-jsx"]
      }
    }),
    WindiCSS()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    // ← ← ← ← ← ←
    port: 2023,
    host: "0.0.0.0"
    // ← 新增内容 ←
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(
          __vite_injected_original_dirname,
          "src/theme.module.less"
        )}";`,
        javascriptEnabled: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcXFxccmVhY3QtdHMtbWFuYWdlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcXFxccmVhY3QtdHMtbWFuYWdlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUvcmVhY3QtdHMtbWFuYWdlL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZS5jb25maWcudHNcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgV2luZGlDU1MgZnJvbSAndml0ZS1wbHVnaW4td2luZGljc3MnXHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgcmVhY3Qoe1xyXG4gICAgICAgICAgICBiYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luczogW1wiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcmVhY3QtanN4XCJdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFdpbmRpQ1NTKClcclxuICAgIF0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgICAgLy8gXHUyMTkwIFx1MjE5MCBcdTIxOTAgXHUyMTkwIFx1MjE5MCBcdTIxOTBcclxuICAgICAgICBwb3J0OiAyMDIzLFxyXG4gICAgICAgIGhvc3Q6IFwiMC4wLjAuMFwiLCAvLyBcdTIxOTAgXHU2NUIwXHU1ODlFXHU1MTg1XHU1QkI5IFx1MjE5MFxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbGVzczoge1xyXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiJHtwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgICAgICAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3JjL3RoZW1lLm1vZHVsZS5sZXNzXCJcclxuICAgICAgICAgICAgICAgICl9XCI7YCxcclxuICAgICAgICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLGNBQWM7QUFFckIsT0FBTyxVQUFVO0FBTGpCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxNQUNGLE9BQU87QUFBQSxRQUNILFNBQVMsQ0FBQyxtQ0FBbUM7QUFBQSxNQUNqRDtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsU0FBUztBQUFBLEVBQ2I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN4QztBQUFBLEVBQ0o7QUFBQSxFQUVBLFFBQVE7QUFBQTtBQUFBLElBRUosTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFDVjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0QscUJBQXFCO0FBQUEsTUFDakIsTUFBTTtBQUFBLFFBQ0YsZ0JBQWdCLFlBQVksS0FBSztBQUFBLFVBQzdCO0FBQUEsVUFDQTtBQUFBLFFBQ0o7QUFBQSxRQUNBLG1CQUFtQjtBQUFBLE1BQ3ZCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
