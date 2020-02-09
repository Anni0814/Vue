import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
var store=new vuex.Store({
    state:{
        cart:[]
    },
    mutations:{
        addCart(state,arr){
            state.cart=arr
        },
        add(state,k){
            state.cart[k].flag=true
        },
        clear(state){
            for(var i in state.cart){
                state.cart[i].flag=false
            }
        },
        addnum(state,k){
                state.cart[k].count++
        }
    }
})
export default store