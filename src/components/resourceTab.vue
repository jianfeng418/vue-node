<template>
	<div>
		<ul class='nav nav-tabs '>
			<li v-for='(tab,index) in tabData' :class='{"active":tab.active === true}'>
				<a href = 'JavaScript:void(0)' @click='clickTab(tab)'>{{tab.name}}</a>
			</li>
		</ul>
		<div id='resource-contentInfo' class='resource-contentInfo'>
			11<component v-bind:is='currentView'></component>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import hosts from './hosts'

	export default{
		name:'resourceTab',
		data(){
			return {
				currentView: null,
			}
		},
		updated(){
			//加载不同的tab时初始化选中第一个
			if(this.tabData && !this.tabData[0].hasOwnProperty('active')){
				this.tabData.forEach( (m,index)=> {
					if(index === 0){
						Vue.set(m,'active',true);
						this.currentView = m.view;
					}else{
						Vue.set(m,'active',false);
					}
				})
			}
		},
		props:['tabData'],
		methods:{
			clickTab(tab){
				//切换tab内容
				this.currentView = tab.view;

				//切换选中类
				this.tabData.forEach( (m)=> {
					if(m.href === tab.href){
						m.active = true;
					}else{
						m.active = false;
					}
				})
			}
		},
	
	}
</script>