<template>
	<div>
		<button class='btn btn-default' @click='createVm'>创建vm</button>
		<button class='btn btn-default' @click='editVm'>编辑vm</button>
	</div>
</template>
<script>
	import createVmCom from './createVm'
	export default{
		name:'networkBtns',
		methods:{
			createVm(){
				var dia = this.$v_dialog({
			        title:'创建账号',
			        width:'600px',
			        height:'400px',
			        multi:true,  //多步操作传true
			        render:createVmCom,
			        appData:{name:'ddsd',description:'good boy'},
			        complate:function(data){
			            //that.num = data
			            console.log(data);
			        },
			    }); 
			},
			
			editVm(){
				alert(this.$store.state.type+this.$store.state.id)
			}
		}
	}
</script>