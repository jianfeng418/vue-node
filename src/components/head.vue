<template>
	<div>
		<img style='float:left' src='../images/vue1.png' ></img>
			<ul>
				<li v-for ='nav in navList'>
					<router-link  v-bind:to=nav.link >{{nav.text}}</router-link>
				</li>
			</ul>
			<div class='userInfoDiv'>
				<ul>
					<li></li>
				</ul>
			</div>
	</div>
</template>

<script>
export default{
		name:'vhead',
		data(){
			return {
			}
		},
		props:['navList']
}
</script>
<style>
	img{
		width:300px;
		height:80px;
		capacity:0.1
	}
</style>