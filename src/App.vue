<template>
  <div id="app">
<!--    <vue-particles 
      color="#7b7d7d" 
      :particleOpacity="0.7" 
      :particlesNumber="200" 
      shapeType="triangle" 
      :particleSize="1" 
      linesColor="#203c77" 
      :linesWidth="1" 
      :lineLinked="true" 
      :lineOpacity="0.4" 
      :linesDistance="100" 
      :moveSpeed="15" 
      :hoverEffect="true" 
      hoverMode="repulse" 
      :clickEffect="true" 
      clickMode="push" 
      class="lizi"
    >
    </vue-particles>-->
    <el-backtop visibility-height="150" :bottom="80" :right="30">
      <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
      UP
      </div>
    </el-backtop>
    <Main/>
    <MainContain/>
    <Dialog/>
  </div>
</template>

<script>
import Main from './components/Bar.vue'
import MainContain from './components/MainContain.vue'
import Dialog from './components/Dialog.vue'

export default {
  name: 'app',
  components: {
    Main,
    MainContain,
    Dialog
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

.lizi{
  position: absolute;
  z-index: -1000;
  width: 100%;
  height: 6000px;
}

</style>
