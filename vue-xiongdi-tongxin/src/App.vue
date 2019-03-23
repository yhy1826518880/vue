<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 使用组件 -->
    <v-zi></v-zi>
    <br>
    <hr>
    <br>
    <v-zizi></v-zizi>
    <router-view/>
  </div>
</template>

<script>
//引入组件
import Zi from './components/zi.vue'
import Zizi from './components/zi-zi.vue'

export default {
  //注册组件
  components: {
    'v-zi': Zi,
    'v-zizi': Zizi
  },
  data:function () {
    return {

    }
  },
  name: 'App'
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
</style>
