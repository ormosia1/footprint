import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //定义商品列表
    goodsList:{
        // 超值特惠
        discounts:[
          {id:1,name:'超电磁炮手办1',price:999},
          {id:2,name:'超电磁炮手办2',price:998},
          {id:3,name:'超电磁炮手办3',price:997},
      ],
      // 猜你喜欢
      recommend:[
          {id:1,name:'新款泡泡马特盲盒1',price:57.8},
          {id:2,name:'新款泡泡马特盲盒2',price:56.8},
          {id:3,name:'新款泡泡马特盲盒3',price:56.9},
      ],

    },

    // 选中商品列表--足迹
    footprintGoods:[],
  },
  mutations: {
    getGoodsName(state,goods){
      state.footprintGoods = goods
    }
  },
  getters:{

  },
  actions: {
  },
  modules: {
  }
})
