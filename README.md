# andy-redux


## 一、如何使用
## 1. 安装 
### npm i andy-redux

## 2. 引入方式 
### import { createStore, applyMiddleware, Provider, connect, thunk, creators } from 'andy-redux'


## 二、提供的功能
### 1. 提供 redux 及 react-redux 的基础功能，包括 createStore、Provider、connect、middleware
### 2. 提供 middleware 自定义扩展，允许多个中间件的 chain
### 3. 提供 thunk 功能
### 4. 提供自定义中间件 creators，作用为提供绑定一个控件事件可以执行多个不同的 action creator


## ⚠️ 使用 connect 装饰器模式注意事项
### 1. 如使用 create-react-app 创建骨架代码使用 connect 装饰器时，要先展开 npm run eject 后 npm i -D babel-plugin-transform-decorators-legacy，否则会报 Syntax error: Unexpected token

### 2. 要在 package.json 中把 babel-plugin-transform-decorators-legacy 配置到 babel 的 plugins 中


## ⚠️ 非 create-react-app 方式搭建的项目工程，现主要采用 npm init + roadhog
Demo URL: https://github.com/Yashiro/andy-redux-demo

## ⚠️ Demo 效果如下图
### 其中特色功能即 Apply Two Gun And Delay Apply Gun 可以一个按钮产生同步和异步多种事件
### 此功能对某些特殊场景有实际意义
### 如果喜欢这款 HOC 的话，给加一个 star 哦！😋
![](http://images.cnblogs.com/cnblogs_com/andy-zhou/1253642/o_andy-redux.gif "Andy Redux")