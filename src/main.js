// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import $ from 'jquery'

import Validator from 'easiest-js-validator';
import vDialogJf from 'vue-dialog-jf'
import vuetable from 'vuetable-2'

import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min'

Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(vDialogJf);
Vue.use(vuetable)
Vue.component("vuetable", vuetable);

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
    var cval = Vue.prototype.getCookie(name);
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
    btnGroup:null,
    viewTab:null,
    currentView:null,
  },
  mutations: {
    updateCurNode(state,newTarget) {
      state.id = newTarget.id;
      state.type = newTarget.type;
      state.text = newTarget.text;
      state.children = newTarget.children;
      state.parents = newTarget.parents;
      state.btnGroup = newTarget.btnGroup;
      state.viewTab = newTarget.viewTab;
      state.currentView = newTarget.currentView;
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
  components: { App,vuetable },
  template: '<App/>',
  methods:{
  	checkLogin(){
  		
  		if(this.getCookie('session')){

        var histroy = location.hash.split('#')[1];
        if(!histroy){
          histroy = '/home';
        }
  			this.$router.push({path:histroy});
  		}else{
  			this.$router.push({path:'/login'})
  		}
  	}
  },
})
