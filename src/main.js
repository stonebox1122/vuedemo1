// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口JS：创建Vue实例
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
// 配置对象的属性名都是一些确定的名称，不能随便修改
new Vue({
  el: '#app',
  components: { App }, // 映射组件标签
  template: '<App/>', // 指定需要渲染到页面的模板
  router
})
