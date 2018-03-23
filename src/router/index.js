import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/components/login.vue'
import home from '@/components/home'
import mains from '@/components/mains.vue'
import resourceContent from '@/components/resourceContent'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/login'},
    {path:'/login',name:'login',components:{main:login}},
    {path:'/homes',name:'homes',components:{main:home},children:[
    	{
	      path: 'mains/:type?/:id?',
	      components: {
	        contents:mains
	      }
	    },{
	    	path:'vms/:type?/:id?',
	    	components:{
	    		contents:resourceContent
	    	},
	    	
	    },{
	    	path:'hosts/:type?/:id?',
	    	components:{
	    		contents:resourceContent
	    	},
	    	
	    },{
	    	path:'stores/:type?/:id?',
	    	components:{
	    		contents:resourceContent
	    	},
	    },{
	    	path:'networks/:type?/:id?',
	    	components:{
	    		contents:resourceContent
	    	},
	    	
	    },{
	    	path:'sdns/:type?/:id?',
	    	components:{
	    		contents:resourceContent
	    	},
	 
	    }

    ]},
     
  ]
})
