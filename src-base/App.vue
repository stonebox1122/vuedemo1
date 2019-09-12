<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-view/>
    <!--3.使用组件标签-->
    <helloword1/>
  </div>
</template>

<script>
  // 1.引入组件
  import helloword1 from './components/helloworld1'
  export default {
    name: 'App',
    // 2.映射组件标签
    components: {
      helloword1
    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .logo {
    width: 200px;
    height: 200px;
  }
</style>
