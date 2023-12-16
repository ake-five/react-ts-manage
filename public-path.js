if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
//  __webpack_public_path__ ：在入口文件中导入public-path.js文件以后，
//  webpack5需要在package.json中改为全局变量，要不这块会显示未找到的错误。
//  修改为package.json文件如下即可。
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ],
    "globals": {
    "__webpack_public_path__": true
  }
}
