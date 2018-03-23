<template>
	<div>
		<button class='btn btn-default' @click='createSdnNet'>创建sdnNet</button>
		<button class='btn btn-default' @click='modifySdnNet'>编辑sdnNet</button>
	</div>
</template>
<script>
	import createSdnCom from './createSdn'
	export default{
		name:'networkBtns',
		methods:{
			createSdnNet(){
				var dia = this.$v_dialog({
			        title:'创建账号',
			        width:'400px',
			        height:'300px',
			        multi:false,  //多步操作传true
			        render:createSdnCom,
			        appData:{name:'ddsd',description:'good boy'},
			        complate:function(data){
			            //that.num = data
			            console.log(data);
			        },
			    }); 
			},
			
			modifySdnNet(){
				alert(this.$store.state.type+this.$store.state.id)
			}
		}
	}
</script>