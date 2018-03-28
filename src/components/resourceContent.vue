<template>
	<div class='resourceContent cus-100percent-h'>
		<div class='breadCrumbsWrap'>
			<ul class='crumbUl'>
				<li v-for='(crumb,index) in $store.state.parents'>
					<a @click='jump(crumb)'>{{crumb.text}}</a>
					<span > / &nbsp;</span>
				</li>
				<li>
					{{$store.state.text}}
				</li>
			</ul>
		</div>
		<div class='operationBtns'>
			<!-- <resource-btn-group></resource-btn-group> -->
			<btnGroups></btnGroups>
		</div>
		<div class='resourceTabs' style='height:calc(100% - 70px)'>
			<resource-tab :tabData='$store.state.viewTab'></resource-tab>
		</div>
	</div>

</template>
<script>
	import btnGroups from './btnGroup'
	import resourceTab from './resourceTab'
	
	export default{
		name:'resourceContent',
		mounted(){
			
		},
		methods:{
			jump(node){
				
				this.$router.push({path:'../' + node.type + '/' + node.id,replace:true});
				this.$parent.$refs.lefttree.$refs.vtree.setSelectedNode({id:node.id},true);
				
			}
		},
		data(){
			return {
				
			}
		},
		components:{btnGroups,resourceTab}

	}
</script>

<style>
	.cus-100percent-h{
		height:100%
	}
	.resourceContent{
		padding:0px 10px;
	}
	.resourceContent .breadCrumbsWrap{
		height:30px;
	}
	.breadCrumbsWrap .crumbUl{
		padding-left:0px;
	}

	.breadCrumbsWrap .crumbUl li{
		list-style:none;
		float:left
	}
	.breadCrumbsWrap .crumbUl li a:hover{
		cursor: pointer;
		color:#337ab7
	}
	.resourceContent .operationBtns{
		clear:both;
		height:30px;
		margin-bottom:10px;
	}
	.resourceContent .resourceTabs{
		clear:both;
		
	}
</style>