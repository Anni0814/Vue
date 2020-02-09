<template>
  <div id="app">
      <table>
          <tr>
              <td>ID</td>
              <td>商品名称</td>
              <td>商品价格</td>
              <td>商品数量</td>
              <td>操作</td>
          </tr>
          <tr v-for="(item,key) in this.$store.state.cart" :key="key">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.price}}</td>
              <td><span v-show="item.flag">{{item.count}}</span></td>
              <td>
                <el-button type="primary" @click="add(key)" v-show="!item.flag">加入购物车</el-button>
                <span v-show="item.flag">
                    <el-button type="primary">+</el-button>
                    <el-button typr="primary">-</el-button>
                </span>
              </td>
          </tr>
      </table>
      <hr>
      <Cart></Cart>
  </div>
</template>

<script>
import axios from 'axios'
import Cart from '@/components/Cart'
export default {
  name: 'App',
  components:{Cart},
  data(){
    return{

    }
  },
  mounted(){
    axios.get("/static/data.json").then((res)=>{
      for(var i in res.data){
        res.data[i].flag=false
      }
      console.log(res.data)
      this.$store.commit("addCart",res.data)
    })
  },
  methods:{
    add(k){
      this.$store.commit("add",k)
    }
  }
}
</script>

<style>
</style>
