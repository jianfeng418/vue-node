<template>
	<div>
		<button class='btn btn-default' @click='createNetwork'>创建host</button>
		<button class='btn btn-default' @click='modifyIcenter'>编辑host</button>
	</div>
</template>
<script>
	import createNetworkCom from './createHost'
	export default{
		name:'networkBtns',
		methods:{
			createNetwork(){
				var dia = this.$v_dialog({
			        title:'创建账号',
			        width:'400px',
			        height:'300px',
			        multi:false,  //多步操作传true
			        render:createNetworkCom,
			        appData:{name:'ddsd',description:'good boy'},
			        complate:function(data){
			            //that.num = data
			            console.log(data);
			        },
			    }); 
			},
			
			modifyIcenter(){
				alert(this.$store.state.type+this.$store.state.id)
			}
		}
	}
</script>