<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'helloworld1',
    data () {
      return {
        msg: 'hello vue component'
      }
    }
  }
</script>

<style scoped>
  .msg{
    color: red;
    font-size: 30px;
  }
</style>
