<template>
  <div id="app">
    <Main/>
    <MainContain/>
  </div>
</template>

<script>
import Main from './components/Bar.vue'
import MainContain from './components/MainContain.vue'

export default {
  name: 'app',
  components: {
    Main,
    MainContain
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
}
</style>
