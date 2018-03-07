<template>
	<div>
		<div class='breadCrumbsWrap'>
			<ul class='crumbUl'>
				<li v-for='(crumb,index) in $store.state.parents'>
					{{crumb.text}}
					<span > / </span>
				</li>
				<li>
					{{$store.state.text}}
				</li>
			</ul>
		</div>
		<div class='operationBtns'>
			<btngroup></btngroup>
		</div>
		<div class='resourceTabs'>

		</div>

	</div>

</template>
<script>
	import btngroup from './btnGroup'

	export default{
		name:'resourceContent',
		mounted(){
			
		},
		data(){
			return {
				
			}
		},
		components:{btngroup}

	}
</script>

<style>
	.breadCrumbsWrap .crumbUl li{
		list-style:none;
		float:left
	}
</style>