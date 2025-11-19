<template>
  <div class="home">
    <!-- <header class="header">
      <h1>欢迎来到明星网站</h1>
      <div class="auth-buttons" v-if="!isLoggedIn">
        <button @click="goToLogin">登录</button>
        <button @click="goToRegister">注册</button>
      </div>
      <div class="user-info" v-else>
        <span>欢迎, {{ currentUser.username }}!</span>
        <button @click="logout">退出</button>
      </div>
    </header> -->

    <main class="main-content">
      <div class="main-container">
        <div class="module-grid">
          <div class="module-card" @click="goToModule('star-profile')">
            <div class=" module-card1"></div>
            <h3>明星档案</h3>
            <p>详细资料</p>
          </div>
          <div class="module-card" @click="goToModule('data-workshop')">
            <div class=" module-card2"></div>
            <h3>数据工坊</h3>
            <p>分析与可视化</p>
          </div>

        </div>
        <div class="module-grid">

          <div class="module-card" @click="goToModule('works-promotion')">
            <div class=" module-card3"></div>
            <h3>作品安利</h3>
            <p>优秀作品</p>
          </div>
          <div class="module-card" @click="goToModule('fan-voice')">
            <div class=" module-card4"></div>
            <h3>粉丝心声</h3>
            <p>互动交流区</p>
          </div>
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

.auth-buttons button,
.user-info button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: #42b983;
  cursor: pointer;
}

.main-content {

  height: 100vh;
  background-image: url('../assets/image/bg-home.jpg');
  background-size: cover;
  position: relative;
}

.module-grid {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  margin: 30px;

}

.main-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
}

.module-grid1 {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  /* margin: 30px; */
  position: absolute;
  bottom: 300px;
}

.module-card {
  /* background-color: #f5f5f5; */
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  border-radius: 30px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
  width: 45%;
}

.module-card1 {
  margin: 5px auto;
  width: 50px;
  height: 50px;
  background-image: url(../assets/icon/1.png);
  background-size: cover;
}

.module-card3 {
  margin: 5px auto;
  width: 50px;
  height: 50px;
  background-image: url(../assets/icon/3.png);
  background-size: cover;
}

.module-card2 {
  margin: 5px auto;
  width: 50px;
  height: 50px;
  background-image: url(../assets/icon/2.png);
  background-size: cover;
}

.module-card4 {
  margin: 5px auto;
  width: 50px;
  height: 50px;
  background-image: url(../assets/icon/4.png);
  background-size: cover;
}

.module-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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