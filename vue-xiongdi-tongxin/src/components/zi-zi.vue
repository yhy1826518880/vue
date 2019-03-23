<template>
    <div>
        <h1>我是zi-zi组件</h1>
    </div>
</template>

<script>
//引入空vue实列
import VueEvent from '../VueEvent.js'
export default {
    //以下写法省略function会报错
    data:function () {
        return {
            'title': "这是zizi组件"
        }
    },
    // created:function() {
    //     this.bbtn();
    // },
    // methods: {
    //     bbtn:function() {
    //         VueEvent.$on("tozizi", (data) =>{
    //             this.title = data
    //             console.log(this.title)
    //         })
    //     }
    // }


    mounted () {
        //$on接收数据
        VueEvent.$on("tozizi", function(data) {
            this.title = data
            console.log(this.title)
        })
    }
}
</script>

<style>

</style>
