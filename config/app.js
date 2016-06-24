'use strict';


/* eslint no-process-env: 0 */


const pathUtil = require('path');


exports = module.exports = {

  /**
   * 应用根目录
   */
  applicationRoot: pathUtil.join(__dirname, '..'),

  /**
   * 环境
   */
  env: process.env.NODE_ENV,

  /**
   * 配置根目录
   */
  configRoot: __dirname
};


/**
 * 服务器相关配置
 */
exports.server = {
  port: 4000
};


/**
 * 路由规则
 */
exports.routes = {
};


/**
 * 中间件
 */
exports.middlewares = [
];


/**
 * 服务
 */
exports.services = {
};


/**
 * 模板帮助方法
 */
exports.helpers = {
};


/**
 * web中间件相关配置
 */
exports.web = {
  // 用于设置app.keys, 实际应用需要重新产生一个
  keys: ['17e6b6bc6129097383dcad4fa1602233'],

  // https://github.com/koajs/favicon
  // favicon: pathUtil.join(__dirname, '../public/favicon.ico'),

  // https://github.com/koajs/response-time
  rtime: {}
};


/**
 * 安全相关配置
 */
exports.security = {
};


/**
 * plover-assets插件相关配置
 */
exports.assets = {
  // 是否启用plover-assets中间件模块
  // 启动时静态资源由plover应用处理
  // 用于不将前端资源交给cdn处理的简单应用场景
  // 在开发模式下总是开启的，方便开发。
  enableMiddleware: true,

  // 是否开启urlConcat功能，生效于非开发环境
  enableConcat: true,


  // 当打开urlConcat功能时使用
  concatItems: [
    { match: /^\/g\/(.*)$/, prefix: '/g/??' }
  ]
};


/**
 * xview插件相关配置
 */
exports.xview = {
};


/**
 * arttemplate配置
 */
exports.arttemplate = {
  // 压缩，去掉html前置多余的空格
  //compress: true
};
