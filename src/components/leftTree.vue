<template>
	<div>
		<v-tree  :treeData='datas' ref='vtree' :clickFun='clickNode' ></v-tree>
	</div>
</template>
<script>
	import vTree from './commons/v-tree/v-tree.vue'
		import hosts from './hosts'
		import mains from './mains'

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
				console.log('click')
				var targetNode = JSON.parse(target);
				var parentsArr = this.$refs.vtree.getParentNodesArr(targetNode);
				
				this.refreshResource(targetNode);	//更新当前选中项
				
				this.updataUrl(targetNode);	//更新url

				this.$emit('clickTreeNode',target,parentsArr);//上传点击事件给父组件
			},
			refreshResource(node){
				var resourceType = node.type;

				var parentsArrs;

				//type赋值
				switch (resourceType){
					case 'icenter':
						node.viewTab = [{href:'11',name:'s',view:hosts},{href:'22',name:'is',view:mains},{href:'33',name:'Vb',view:hosts},{href:'44',name:'java',view:mains}];
						break;
					case 'dc':
						node.viewTab = [{href:'11',name:'svn',view:hosts},{href:'33',name:'Vb',view:mains},{href:'44',name:'java',view:hosts}];
						break;
					default:
						node.viewTab = [{href:'11',name:'svn',view:hosts},{href:'33',name:'Vb',view:mains}];

				};
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
				
				if(oldValue && newValue.path.split('/')[2] === oldValue.path.split('/')[2]){
					return ;
				}
				var sourceType = newValue.path.split('/')[2];

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

			if(locationId && this.$refs.vtree){
				var locationNode = this.$refs.vtree.setSelectedNode({id:locationId});
				
				if(!locationNode){
					var rootId = this.$refs.vtree.getRoot().id;
					this.$refs.vtree.setSelectedNode({id:rootId},true);
					
				}
				var seletedNode = this.$refs.vtree.getSelectedNode();
				if(seletedNode.id !== this.$store.state.id){
					this.$refs.vtree.setSelectedNode({id:seletedNode.id},true);
					
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