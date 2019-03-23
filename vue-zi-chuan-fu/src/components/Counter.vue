<template>
  <div>
    <button class="btn" @click="increment">+</button>
    <button class="btn" @click="dedrement">-</button>
    <p>{{num}}</p>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {};
  },
  //   methods: {
  //       //bug：子组件修改了父组件的值
  //     increment() {
  //       this.num++;
  //     },
  //     dedrement() {
  //       this.num--;
  //     }
  //   }

  methods: {
    increment() {
        // 用 $emit 重新赋值事件名儿，父组件需要接收事件名 incre decre
      this.$emit('incre');
    },
    dedrement() {
      this.$emit('incre');
    }
  }
};
</script>

<style>
.btn {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid red;
  background-color: gold;
  font-size: 40px;
}
</style>
