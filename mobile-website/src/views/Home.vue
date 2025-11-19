<template>
  <div class="home">
    <header class="header">
      <h1>欢迎来到明星网站</h1>
      <div class="auth-buttons" v-if="!isLoggedIn">
        <button @click="goToLogin">登录</button>
        <button @click="goToRegister">注册</button>
      </div>
      <div class="user-info" v-else>
        <span>欢迎, {{ currentUser.username }}!</span>
        <button @click="logout">退出</button>
      </div>
    </header>
    
    <main class="main-content">
      <div class="module-grid">
        <div class="module-card" @click="goToModule('star-profile')">
          <h3>明星档案</h3>
          <p>查看明星详细资料</p>
        </div>
        <div class="module-card" @click="goToModule('data-workshop')">
          <h3>数据工坊</h3>
          <p>数据分析与可视化</p>
        </div>
        <div class="module-card" @click="goToModule('works-promotion')">
          <h3>作品安利</h3>
          <p>推荐优秀作品</p>
        </div>
        <div class="module-card" @click="goToModule('fan-voice')">
          <h3>粉丝心声</h3>
          <p>粉丝互动交流区</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser'])
  },
  methods: {
    ...mapActions(['logout']),
    goToLogin() {
      this.$router.push('/login')
    },
    goToRegister() {
      this.$router.push('/register')
    },
    goToModule(module) {
      this.$router.push(`/${module}`)
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #42b983;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-buttons button, .user-info button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: #42b983;
  cursor: pointer;
}

.main-content {
  padding: 1rem;
}

.module-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.module-card {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.module-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.module-card h3 {
  margin-top: 0;
  color: #333;
}

.module-card p {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .module-grid {
    grid-template-columns: 1fr;
  }
}
</style>