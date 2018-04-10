<template id="buycar">
  <div>
    <dl v-for="item in arr">
      <dt>商品名称: {{item.name}}</dt>
      <dd>单价: {{item.price  | currency(4,'RMB')}}</dd>
      <dd>数量: <input type="number" v-model="item.count"></dd>
      <dd>小计: {{item.price * item.count | currency}}</dd>
    </dl>
    <hr>
    总价: {{sum | currency(3,'$')}}
  </div>
</template>
<script>
  export default{
    template:'#buycar',
    data(){
      return {
        ipt:1,
        arr:[
          {name:'西红柿',price:1.2,count:2},
          {name:'鸡蛋',price:3.9,count:2.5},
          {name:'茄子',price:2.7,count:4.5},
          {name:'黄瓜',price:7.8,count:5}
        ]
      }
    },
    computed:{
      sum:function(){
        let result=0;
        this.arr.forEach((item,index)=>{
          result += item.price * item.count;
        });
        return result;
      }
    },
    filters:{
      'currency':function(input,digit=2,currency='￥'){
        return currency+input.toFixed(digit);
      }
    }
  };
</script>