import { defineConfig } from "vite";
import path from "path";
// vue支持
import vue from "@vitejs/plugin-vue";
// vuejsx支持
import vueJsx from "@vitejs/plugin-vue-jsx";

// 按需加载包
import vitePluginBabelImport from "vite-plugin-babel-import";

const resolve = (dir) => path.resolve(__dirname, dir);
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  server: {
    port: 8080, //项目启动端口
    open: true, //项目启动时是否自动打开浏览器
    proxy: {
      // 代理
      "/foo": "http://localhost:4567/", //代理方式 /foo --> http://localhost:4567/foo
      // 选项写法
      "/api": {
        target: "http://123.456.com", //代理方式 /api --> http://123.456.com
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: resolve("./dist1"), // 打包输出目录， 默认dist
  },
  clearScreen: false,
  plugins: [
    vue(),
    vueJsx(),
    vitePluginBabelImport([
      {
        libraryName: "element-plus",
        libraryDirectory: "es",
        style(name) {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ]),
  ],
});
