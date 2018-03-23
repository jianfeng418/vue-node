<template>
	<div>
		<form>
			<div id='step1' class=''>
				this is step 1
			</div>
			<div id='step2' class='dialog-tabHide'>
				this is step 2
			</div>
			<div id='step3' class='dialog-tabHide'>
				this is step 3
			</div>
			<div id='step4' class='dialog-tabHide'>
				this is step 4
			</div>
		</form>
</div>
</template>
<script>
	export default{
		name:'createVm',
		props:{
			navList:{
				default(){
					return [
						{name:'1 step1',step:'#step1',active:true,getData:'getStepData'},
						{name:'2 step2',step:'#step2',active:false,checkFun:'check'},
						{name:'3 step3',step:'#step3',active:false},
						{name:'4 step4',step:'#step4',active:false,getData:'getStepData'},
					]
				}
			}
		},
		methods:{
			getStepData(){
				console.log(11)
			},
			check(){
				console.log('success');
				return true;
			},
			complateFun:function(){
				//console.log('complate');
			}
		}
	}
</script>