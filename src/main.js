// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import $ from 'jquery'



import './assets/bootstrap-3.3.7/dist/js/bootstrap.min.js'
import './assets/bootstrap-3.3.7/dist/css/bootstrap.min.css'

Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false

Vue.prototype.setCookie = (name,value,expiredays) => {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = name + '=' +escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
}
Vue.prototype.getCookie = (name) =>{
	var arr,reg = new RegExp('(^| )' +name + '=([^;]*)(;|$)');
	if(arr = document.cookie.match(reg)){
		return (arr[2]);
	}else{
		return null;
	}
}
//删除cookie
Vue.prototype.delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }

const store = new Vuex.Store({
  state: {
    id: null,
    type:null,
    text:null,
    children:null,
    parents:null,
  },
  mutations: {
    updateCurNode(state,newTarget) {
      state.id = newTarget.id;
      state.type = newTarget.type;
      state.text = newTarget.text;
      state.children = newTarget.children;
      state.parents = newTarget.parents
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created(){
  		this.checkLogin();
  },
  components: { App },
  template: '<App/>',
  methods:{
  	checkLogin(){
  		
  		if(this.getCookie('session')){
  			this.$router.push({path:'/homes'});
  		}else{
  			this.$router.push({path:'/login'})
  		}
  	}
  },
})
