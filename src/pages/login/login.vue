<template>
	<div id="mylogin">
			<form class="form">
				<div class="line">
					<div v-show="btn && !form.id">id不能为空</div>
					<!--<input type="number" placeholder="输入你的id" v-model="form.id">-->
					<el-input placeholder="输入你的id" v-model="form.id"></el-input>
				</div>
				<div class="line">
					<div v-show="btn && !form.password">密码不能为空</div>
					<el-input type="password" placeholder="输入你的用户名" v-model="form.password">
					</el-input>
				</div>
				<el-button v-on:click="submit">登录</el-button>
			</form>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import { USER_SIGNIN } from '../../store/user.js'
	export default {
		data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
					id: '',
					password: ''
				}
			}
		},
		methods: {
            ...mapActions([USER_SIGNIN]),
			submit() {
				this.btn = true
				if (!this.form.id || !this.form.password) return
				this.USER_SIGNIN(this.form)
				this.$router.replace({ path: '/index' })
			}
		}
	}
</script>

<style scoped>
	#mylogin{
			position: fixed;
		width: 100%;
		height: 100%;
	background-image: url("https://c3-q.mafengwo.net/s9/M00/80/08/wKgBs1fp1weADbaOAA15PBZKTKE49.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90");
		background-size: 100% 100%;  
  	-moz-background-size: 100% 100%;  
  	-webkit-background-size: 100% 100%; 
		
	}
	.form{
		width: 200px;
		height: 200px;
		margin: 100px auto;
		border: 1px solid #eee;
		border-radius: 5px;
	}
</style>