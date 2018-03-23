<template>
	<div>
		<img style='float:left' src='../images/vue1.png' ></img>
			<ul class='head-nav-wrapUl'>
				<li v-for ='(nav,index) in navList' :class='{active:nav.active}' @click='clickLiNav(index)'>
					<router-link  v-bind:to=nav.link >{{nav.text}}</router-link>
				</li>
			</ul>
			<div class='userInfoDiv'>
				<ul>
					<li></li>
				</ul>
			</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default{
		name:'vhead',
		data(){
			return {
			}
		},
		mounted(){
			var path = location.hash.split('/')[2];
			var curIndex;
			if(this.navList){
				$.each(this.navList,function(index,nav){
					if(nav.link.split('/')[2] === path){
						curIndex = index;
						return false;
					}
				})
				this.resetActive(this.navList,curIndex);
			}
		},
		watch:{
			$route:'updateNavActive',
		},
		
		methods:{
			clickLiNav(liIndex){
				this.resetActive(this.navList,liIndex);
			},
			updateNavActive(newVal,oldVal){
				//头部导航没变，返回，不更新
				if(oldVal && newVal.path.split('/')[2] === oldVal.path.split('/')[2]){
					return;
				}

				var type = location.hash.split('/')[2];
				var curIndex;
				$.each(this.navList,function(index,m){
					if(m.link.split('/')[2] === type){
						curIndex = index;
						return false;
					}
				});
				this.resetActive(this.navList,curIndex);

			},
			resetActive(data,index){
				var activeIndex = index || 0;
				if(data instanceof Array){
					data.forEach( (m,index)=> {
						if(index === activeIndex ){
							Vue.set(m,'active',true);
						}else{
							Vue.set(m,'active',false);
						}
					})
				}

			}
		},
		props:['navList']
}
</script>
<style>
	img{
		width:300px;
		height:80px;
		capacity:0.1
	}
	.head-nav-wrapUl li a{
		color:white;

	}
	.head-nav-wrapUl li a:focus, a:hover{
		text-decoration:none;
	}
	.head-nav-wrapUl li.active{
		border-bottom:1px solid white;
	}
</style>