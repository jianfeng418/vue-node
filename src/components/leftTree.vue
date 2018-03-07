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
			this.$refs.vtree.setSelectedNode({id:'1'});
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
			modifyTreeData(newValue,oldValue){
				var sourceType = newValue.path.split('/')[2];
				
				this.$http.get('/api/treeData',{params:{source:sourceType}})
					.then( (req)=> {
						if(req.body){
							this.datas = req.body;
						}
					})
					.then( (req)=> {

					})
			},
		},
		watch:{
			$route:'modifyTreeData',
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

		                  },{text:'1-1-2',
		                    id:'1-1-2',
		                    icon:'file'

		                  }]
		              
		              }]
		        },
		      
		       
		        ],
		    }
		  },
		components:{vTree}
	}
</script>