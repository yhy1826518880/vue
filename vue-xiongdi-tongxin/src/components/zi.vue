<template>
  <div>
    <h1>我是zi组件,我要把值传给zi-zi组件</h1>
    <button id="btn" @click="emitTozizi">点击我传值</button>
  </div>
</template>

<script>
//引入空js实列
import VueEvent from "../VueEvent.js";
export default {
  data:function() {
    return {
      //要传递的数据
      'title': "这是zi组件00000000000000000000"
    }
  },
  methods: {
    emitTozizi:function() {
      //$emit发射数据
      VueEvent.$emit("tozizi", this.title);
    }
  }
};
</script>

<style>
#btn {
  width: 100px;
  height: 50px;
  border: 1px solid red;
  background-color: chartreuse;
}
</style>
