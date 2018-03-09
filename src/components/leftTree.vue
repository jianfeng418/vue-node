<template>
	<div>
		<v-tree  :treeData='datas' ref='vtree' :clickFun='clickNode' ></v-tree>
	</div>
</template>
<script>
	import vTree from './commons/v-tree/v-tree.vue'
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
				targetNode.parents = parentsArr.reverse();
				//更改$store状态
				
				this.$store.commit('updateCurNode',targetNode);
				this.$emit('clickTreeNode',target,parentsArr)
			},
			modifyTreeData(newValue){	//根据url获取判断资源类型，获取左侧树
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
			//加载完数据选中第一条

			this.$refs.vtree.setSelectedNode({id:'1'});
			var seletedNode = this.$refs.vtree.getSelectedNode();
			this.$store.commit('updateCurNode',seletedNode);
			
		},
		data(){
		    return {
		      msg: 'Welcome to Your vtree App',
		      checkbox:true,
		     datas:[
		        {text:'xiaoming',
		          id:'1',
		          icon:'folder',
		          children:[
		              {text:'1-1',
		                id:'1-1',
		                icon:'folder',
		                children:[
		                  {text:'1-1-1',
		                    id:'1-1-1',
		                    icon:'file',

		                  }]
		              
		              }]
		        },
		      
		       
		        ],
		    }
		  },
		components:{vTree}
	}
</script>