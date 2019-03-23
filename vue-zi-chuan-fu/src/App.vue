<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <!-- 接收自定义事件  @incre  @decre  监听（任意名称：自己定义）事件-->
    <v-counter :num='num' @incre='increment' @decre='decrement'></v-counter>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
export default {
  components: {
    'v-counter': Counter
  },
  data () {
    return {
      num: 6
    }
  },
  methods: {
    increment() {
      this.num++
    },
    decrement() {
      this.num--
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
