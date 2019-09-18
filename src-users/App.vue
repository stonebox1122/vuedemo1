<template>
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>

<script>
  import axios from 'axios'
  import Search from './components/Search'
  import Main from './components/Main'
  export default {
    name: 'App',
    components: {
      Search,
      UserMain: Main
    }
  }
</script>

<style scoped>

</style>
