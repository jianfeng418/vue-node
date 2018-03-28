<template>
	<div>
		<form role='form' class='form-horizontal'>
			<div id='step1' class=''>
				<div class='form-group'>
					<label class='col-xs-2 control-label' for='sourcename'> 名称：</label>
					<div class='col-xs-10'>
						<input id='sourcename' class='form-control' name='sourcename' v-model='initName'/>
					</div>
				</div>
				
			</div>
			<div id='step2' class='dialog-tabHide'>
				<div class='form-group'>
					<label class='col-xs-2 control-label' for='description'> 描述：</label>
					<div class='col-xs-10'>
						<textarea id='description' class='form-control' name='description' v-model='description' style='width:50%;resize:none' ></textarea>
					</div>
				</div>
			</div>
			<div id='step3' class='dialog-tabHide'>
				<div class='form-group'>
					<label class='col-xs-2 control-label' > 方式：</label>
					<div class='col-xs-10'>
						<select v-model="selected" class='form-control' style='width:50%'>
						  <option v-for="option in options" v-bind:value="option.value">
						    {{ option.value }}
						  </option>
						</select>
						

						
					</div>
				</div>

				
			</div>
			<div id='step4' class='dialog-tabHide'>
				
				<table  class="table ">
					<tr>
						<td>名称：</td>
						<td>{{initName}}</td>
					</tr>
					<tr>
						<td>描述:</td>
						<td>{{description}}</td>
					</tr>
					<tr>
						<td>方式:</td>
						<td>{{selected}}</td>
					</tr>
				</table>
				
			</div>
		</form>
</div>
</template>
<script>
	export default{
		name:'editDc',
		data(){
			return{
				initName: this.appData.name,
				description:'vue 是个好东西',
				type:'',
				selected: 'A',
			    options: [
			      { text: 'One', value: 'A' },
			      { text: 'Two', value: 'B' },
			      { text: 'Three', value: 'C' }
			    ]
			}
		},
			
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
			},
			appData:{}
		},
		methods:{
			getStepData(){
				console.log('getData')
			},
			check(){
				console.log('checked success');
				return true;
			},
			complateFun:function(){
				this.$root.close()
				
			}
		}
	}
</script>
<style>
	.form-control{
		border-radius: 0px !important;
	}

</style>