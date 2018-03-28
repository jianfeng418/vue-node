<template>
	<div class='home-content'>
		<div class='home-content-head'>
			<vhead :navList = navLists></vhead>
		</div>
		<div class='home-content-body'>
			<div class='home-content-body-left'>
				<left-tree ref='lefttree' @clickTreeNode='clickNode'></left-tree>
			</div>
			<div class='home-content-body-center cus-100percent-h'>
				<router-view name='contents'></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import VueRouter from 'vue-router'
	import mains from './mains.vue'
	import resourceContent from './resourceContent'
	import leftTree from './leftTree'
	import vhead from './head'

	export default{
		name:'homes',
		//router,
		data(){
			return {
				navLists:[
					{text:'main',link:'/homes/mains'},
					{text:'head',link:'/homes/vms'},
					{text:'hand',link:'/homes/hosts'},
					{text:'body',link:'/homes/stores'},
					{text:'knee',link:'/homes/networks'},
					{text:'foot',link:'/homes/sdns'}
				],
				treeNode:null,
			}
		},
		mounted(){

		},
		methods:{
			clickNode(target,parents){
				this.treeNode = JSON.parse(target);
				
			},
	
		},
		components:{leftTree,vhead}

	}

</script>
<style>
	.cus-100percent-h{
		height:100%;
	}
	.home-content{
		height:100%
	}
	.home-content .home-content-head{
		height:80px;
		width:100%;
		background:url('../images/systembac.jpg');
		border:1px solid black;
		position:absolute;
	}
	.home-content .home-content-head ul{
		float:left;
	}
	.home-content .home-content-head ul li{
		list-style-type:none;
		float:left;
		margin:10px 10px;
		font-size:20px;
		color:white;
	}
	.home-content .home-content-body{
		position:absolute;
		top:80px;
		width:100%;
		bottom:10px;
	}
	.home-content .home-content-body .home-content-body-left{
		width:20%;
		border:1px solid black;
		background:#f0f0f0;
		height:100%;
		float:left
	}
	.home-content .home-content-body .home-content-body-center{
		border:1px solid black;
		margin-left:20px;
		float:left;
		width:calc(80% - 20px);
		height:100%;
	}
	button.btn.btn-default{
		background-color:#1d92af;
		border-color:#1d92af;
		border-radius:0px;
		color:white;
	}
	button.btn.btn-default:hover{
		background-color:#39ace5;
	}
	button.btn.btn-default:active{
		color:white;
	}
</style>