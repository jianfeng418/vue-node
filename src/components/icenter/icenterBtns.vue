<template>
	<div>
		<button class='btn btn-default' @click='createIcenter'>创建center</button>
		<button class='btn btn-default' @click='editIcenter'>编辑center</button>
	</div>
</template>
<script>
	import createIcenterCom from './createIcenter'
	import editIcenterCom from './editIcenter'
	export default{
		name:'networkBtns',
		methods:{
			createIcenter(){
				var dia = this.$v_dialog({
			        title:'创建账号',
			        width:'400px',
			        height:'300px',
			        multi:false,  //多步操作传true
			        render:createIcenterCom,
			        appData:{name:'ddsd',description:'good boy'},
			        complate:function(data){
			            //that.num = data
			            console.log(data);
			        },
			    }); 
			},
			editIcenter(){
				var that = this;
				var dia = this.$v_dialog({
			        title:'创建账号',
			        width:'600px',
			        height:'400px',
			        multi:true,  //多步操作传true
			        render:editIcenterCom,
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