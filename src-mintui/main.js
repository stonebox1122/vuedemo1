// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口JS：创建Vue实例
import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'

// 注册成标签（全局）
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App }, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})
