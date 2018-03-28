<template>
	<div>
		<ul class='user-info-ul'>
			<li>root</li>
			<li @click='logout()'>logout</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'userInfo',
		data(){
			return {

			}
		},
		methods:{
			logout(){
				this.delCookie('session');
				this.$router.push({path:'/login'});
			}
		}
	}
</script>
<style>
	.user-info-ul{
		float:right
	}
	.user-info-ul li:hover{
		cursor:pointer
	}
</style>