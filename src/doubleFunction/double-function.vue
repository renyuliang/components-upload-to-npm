<template>
  <div class="calculate">
    <input type="text" v-model="a" class="thisInput" @blur="sumFunc"/>
    <span class="symbol">*</span>
    <input type="text" v-model="b" class="thisInput" @blur="sumFunc"/>
    <span class="symbol" @click="sumFunc"> = </span>
    <span class="item">{{sum}}</span>
  </div>
</template>
<script>
  export default({
    name:'addFunc',
    props:['num1','num2'],
    data() {
      return{
        a: this.num1 ? this.num1 : 0,
        b: this.num2 ? this.num2 : 0,
        sum: 0
      }
    },
    mounted() {
      this.sumFunc();
    },
    methods:{
      sumFunc() {

        let a = Number(this.a);
        let b = Number(this.b);
        if(isNaN(a) || isNaN(b)) {

          return;
        }else{
          this.sum = a * b;
          this.$emit('getDoubleFromChild',this.sum);
        }
      }
    }
  })
</script>
<style>
  .thisInput{
    border:1px solid #ccc;
    width: 50px;
    text-align: center;
    padding: 6px 0;
  }
  .thisInput:focus{
    border:1px solid #ffff00;
    outline: none;
  }
</style>
