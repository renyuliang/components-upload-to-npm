<template>
  <div id="app">
    <sum-function :num1="num1" :num2="num2" v-on:getSumFromChild="receiveChildSum"></sum-function>
    <double-function :num1="num1" :num2="num2" v-on:getDoubleFromChild="receiveChildDouble"></double-function>
    <sub-function :num1="10" :num2="2" v-on:getSubFromChild="receiveChildSub"></sub-function>
    <p>从子组件获取到的值,加法：{{sumFromChild}}</p>
    <p>从子组件获取到的值,乘法：{{doubleFromChild}}</p>
    <p>从子组件获取到的值,乘法：{{subFromChild}}</p>
  </div>
</template>

<script>
  import sumFunction from './sumFuntion/sum-function'; // 引入
  import subFunction from './subFunction/sub-function'; // 引入
  import doubleFunction from './doubleFunction/double-function'; // 引入
  export default {
    name: 'app',
    data () {
      return {
        num1: 4,
        num2: 5,
        sumFromChild:0,
        doubleFromChild:0,
        subFromChild:0
      }
    },
    components:{ //注册插件
      sumFunction,
      subFunction,
      doubleFunction
    },
    methods:{
      receiveChildSum(sum){ //自定义事件，接收子组件的和
        this.sumFromChild = sum;
      },
      receiveChildDouble(double) {
        this.doubleFromChild = double;
      },
      receiveChildSub(sub){
        this.subFromChild = sub;
      }
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
</style>
