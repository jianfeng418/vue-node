<template>
	<div class='loginWrap'>
		<div class='bgDiv'>
		</div>
		<div class='loginDiv '>
			<form class="form-horizontal" role="form">
				<h2>{{welcome}}</h2>
				<div class='form-group'>
					<label for='userName' class='col-xs-2 control-label'>用户：</label>
					<div class='col-xs-8'>
						<input id='userName' placeholder='userName' v-model='userName'  class='form-control ' />
					</div>
				</div>
				<div class='form-group'>
					<label for='password' class='col-xs-2 control-label'>密码：</label>
					<div class='col-xs-8'>
						<input id='password' placeholder='password' v-model='password' type='password' class='form-control' />
					</div>
				</div>

				<div class='form-group'>
					<div class='col-xs-offset-5'>
						<button class='btn btn-default' @click='login'>login</button>
					</div>
					
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default{
		name:'login',
		data(){
			return {
				welcome:'welcome to your vue app',
				userName:'root',
				password:'123',
			}
		},
		methods:{
			login() {
				var that = this;
				let userInfos = {
					account:this.userName,
					password:this.password
				}
				this.$http.post('/api/login',userInfos)
					.then((response) => {
						//账户验证成功，跳转
						if(response.body.checked === 'success'){
							this.setCookie('session',response.body.session,response.body.expiredays);
							//Vue.http.headers.common['Authorization'] ='Basic';
							this.$router.push({path:'homes'});
						}
					})
					.then((response) => {
						console.log(response)
					})


	        // 获取已有账号密码
	        /*this.$http.get('/api/login/getAccount')
	          .then((response) => {
	            // 响应成功回调
	            console.log(response)
	            let params = { 
	              account : this.account,
	              password : this.password
	            };
	            // 创建一个账号密码
	            return this.$http.post('/api/login/createAccount',params);
	          })
	          .then((response) => {
	            console.log(response)
	          })
	          .catch((reject) => {
	            console.log(reject)
	          });
	          */
	        }
		},		

	}
</script>

<style>
	.loginWrap{
		width:100%;
		height:100%;

	}
	.bgDiv{
		width:100%;
		height:100%;
		position:absolute;
		background:url('../images/login-bg.jpg');
		//opacity:0.9;
		z-index:-999;

	}
	h2{
		text-align:center;
		margin:60px 0px;
	}
	.loginDiv{
		box-shadow:0px 0px 4px 2px;
		width:500px;
		height:360px;
		margin:auto;
		border:1px solid blue;
		position:absolute;
		top:0px;
		left:0px;
		right:0px;
		bottom:100px;
		background:url('../images/systembac.jpg');
		color:white;


	}
</style>