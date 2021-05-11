import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data1: "",
    data2: "",
  },
  mutations: {
    changeData1(state, payload) {
      state.data1 = payload;
    },
    changeData2(state, payload) {
      state.data2 = payload;
    },
  },
  actions: {
    async changeDataAction1(context) {
      let data1 = await axios.get("test1.json");
      context.commit("changeData1", data1);
    },
    async changeDataAction2(context) {
      let data2 = await axios.get("test2.json");
      context.commit("changeData2", data2);
    }
  },
});
