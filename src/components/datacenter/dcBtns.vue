<template>
	<div>
		<button class='btn btn-default' @click='createDc'>创建dc</button>
		<button class='btn btn-default' @click='editDc'>编辑dc</button>
	</div>
</template>
<script>
	import createDcCom from './createDc'
	import editDcCom from './editDc'
	export default{
		name:'networkBtns',
		methods:{
			createDc(){
				var dia = this.$v_dialog({
			        title:'创建账号',
			        width:'400px',
			        height:'300px',
			        multi:false,  //多步操作传true
			        render:createDcCom,
			        appData:{name:'ddsd',description:'good boy'},
			        complate:function(data){
			            //that.num = data
			            console.log(data);
			        },
			    }); 
			},
			editDc(){
				var that = this;
				var dia = this.$v_dialog({
			        title:'创建账号',
			        width:'600px',
			        height:'400px',
			        multi:true,  //多步操作传true
			        render:editDcCom,
			        appData:{name:that.$store.state.text,description:'good boy'},
			        complate:function(data){
			            //that.num = data
			            console.log(data);
			        },
			    }); 
			},
			modifyDc(){
				alert(this.$store.state.type+this.$store.state.id)
			}
		}
	}
</script>