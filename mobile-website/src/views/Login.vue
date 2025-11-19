<template>
  <div class="login">
    <header class="module-header">
      <button @click="$router.back()" class="back-button">返回</button>
      <h2>用户登录</h2>
    </header>
    
    <div class="content">
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            required 
            class="form-input"
          >
        </div>
        
        <div class="form-group">
          <label for="password">密码:</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required 
            class="form-input"
          >
        </div>
        
        <button type="submit" class="login-button">登录</button>
      </form>
      
      <div class="register-link">
        <p>还没有账号？<router-link to="/register">立即注册</router-link></p>
      </div>
            <div class="register-link">
              <router-link to="/Home">游客登录</router-link>
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      // 简单的登录验证逻辑（实际应用中应连接后端API）
      if (this.username && this.password) {
        // 创建用户对象
        const user = {
          username: this.username,
          loggedIn: true
        }
        
        // 使用Vuex进行登录
        this.login(user)
        
        // 跳转到首页
        this.$router.push('/')
      } else {
        alert('请输入用户名和密码')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/var.scss';
.login {
  padding: 1rem;
    background-image: url('../assets/image/bg-login.jpg');
  height: 100vh;
  background-size: cover;
}

.module-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.back-button {
  background-color: $--color-default;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;
}

.content {
  max-width: 400px;
  margin: 0 auto;
}

.login-form {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.login-button {
  width: 100%;
  background-color: $--color-default;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.register-link {
  text-align: center;
  margin-top: 1rem;
}

.register-link a {
  color: $--color-default;
  text-decoration: none;
}
</style>