<template>
	<div>
		<button class='btn btn-default' @click='createSdnNet'>创建storage</button>
		<button class='btn btn-default' @click='modifySdnNet'>编辑storage</button>
	</div>
</template>
<script>
	import createStorageCom from './createStorage'
	export default{
		name:'storageBtns',
		methods:{
			createSdnNet(){
				var dia = this.$v_dialog({
			        title:'创建账号',
			        width:'400px',
			        height:'300px',
			        multi:false,  //多步操作传true
			        render:createStorageCom,
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