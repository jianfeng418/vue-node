<template>
	<div>
		<v-tree  :treeData='datas' ref='vtree' :clickFun='clickNode' ></v-tree>
	</div>
</template>
<script>
	import vTree from './commons/v-tree/v-tree.vue'
	import tabsInfo from './tabsInfo'

	export default{
		name:'left-tree',
		mounted(){
			//加载完成后，获取当前url，获取当前树的数据
			var histroy = location.hash.split('#')[1];
	        if(!histroy){
	          histroy = '/home';
	        }
	       
  			this.modifyTreeData({path:histroy})
		},
		methods:{
			clickNode(target){
				var targetNode = JSON.parse(target);
				var parentsArr = this.$refs.vtree.getParentNodesArr(targetNode);
				this.refreshResource(targetNode);	//更新当前选中项
				
				this.updataUrl(targetNode);	//更新url

				this.$emit('clickTreeNode',target,parentsArr);//上传点击事件给父组件
			},
			refreshResource(node){
				var resourceType = node.type;

				var parentsArrs;

				//viewTab
				node.viewTab = tabsInfo.methods.getTabs(resourceType);
				
				//树父级赋值
				parentsArrs = this.$refs.vtree.getParentNodesArr(node);
				node.parents = parentsArrs.reverse();

				//更改$store状态
				this.$store.commit('updateCurNode',node);

			},
			updataUrl(node){
			
				if(location.hash.split('/').length >= 5){
					this.$router.push({path:'../' +node.type+'/'+node.id,replace:true});
				}else if(location.hash.split('/').length === 3){
					this.$router.push({path:node.type+'/'+node.id,append:true});
				}
			},
			modifyTreeData(newValue,oldValue){	//根据url获取判断资源类型，获取左侧树
					
				var newPathArr = newValue.path.split('/');//
				var oldPathArr = oldValue ? oldValue.path.split('/') : [];

				if(newPathArr[4] && this.$refs.vtree){	//手动更改错乱的url时，
					var selectedNode = this.$refs.vtree.getSelectedNode();
					if(selectedNode && (newPathArr[4] !== selectedNode.id || newPathArr[3] !== selectedNode.type)){
						var manaual = this.$refs.vtree.findNode(newPathArr[4]);
						if(manaual && manaual.type === newPathArr[3]){
							this.$refs.vtree.setSelectedNode(manaual,true);
						}else{
							this.$refs.vtree.setSelectedNode(selectedNode,true);
						}
					}
					
				}

				//获取treedata部分
				if(oldValue && newPathArr[2] === oldPathArr[2]){
					if(newPathArr.length !== 3){
						return ;
					}
					
				}
				var sourceType = newPathArr[2] ? newPathArr[2]:'mains';
				this.$http.get('/api/treeData',{params:{source:sourceType}})
					.then( (req)=> {
						if(req.body){
							this.datas = req.body;
						}
					})
					.then( (req)=> {

					});
			},
		},
		watch:{
			$route:'modifyTreeData',
			datas:function(){
			}
		},
		updated(){
			//加载完数据选中当前项（无当前项则选中第一条）
			var locationHash = location.hash.split('/');
			var locationType = locationHash[3];
			var locationId = locationHash[4];
			console.log('trigger updated')
			if(locationId && this.$refs.vtree){
				var locationNode = this.$refs.vtree.setSelectedNode({id:locationId});
				
				if(!locationNode){
					var rootId = this.$refs.vtree.getRoot().id;
					this.$refs.vtree.setSelectedNode({id:rootId},true);
					
				}
				var seletedNode = this.$refs.vtree.getSelectedNode();
				if(seletedNode.id !== this.$store.state.id){
					this.$refs.vtree.setSelectedNode({id:seletedNode.id},true);
					console.log('this is todo')
				}
			}else if(locationHash.length === 3 && this.$refs.vtree){

				var rootId = this.$refs.vtree.getRoot().id;
				this.$refs.vtree.setSelectedNode({id:rootId},true);
				
			}
		
		},
		data(){
		    return {
		      msg: 'Welcome to Your vtree App',
		      checkbox:true,
		     datas:[       
		        ],
		    }
		  },
		components:{vTree}
	}
</script>

<style>
	ul.cus_tree_ul>li .cus_item_content{
		margin-left:-300px;
		padding-left:300px !important;
	}
</style>