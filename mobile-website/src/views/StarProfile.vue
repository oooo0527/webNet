<template>
  <div class="star-profile">
    <header class="module-header">
      <button @click="$router.back()" class="back-button">返回</button>
      <h2>明星档案</h2>
    </header>
    
    <div class="content">
      <div class="star-list">
        <div class="star-item" v-for="star in stars" :key="star.id" @click="viewStarDetail(star)">
          <img :src="star.avatar" :alt="star.name" class="star-avatar">
          <div class="star-info">
            <h3>{{ star.name }}</h3>
            <p>{{ star.brief }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarProfilePage',
  data() {
    return {
      stars: [
        {
          id: 1,
          name: '张三',
          avatar: 'https://via.placeholder.com/50',
          brief: '知名演员，代表作《电影A》'
        },
        {
          id: 2,
          name: '李四',
          avatar: 'https://via.placeholder.com/50',
          brief: '流行歌手，代表作《歌曲B》'
        },
        {
          id: 3,
          name: '王五',
          avatar: 'https://via.placeholder.com/50',
          brief: '模特，时尚界新星'
        }
      ]
    }
  },
  methods: {
    viewStarDetail(star) {
      // 这里可以跳转到明星详情页
      alert(`查看 ${star.name} 的详细档案`)
    }
  }
}
</script>

<style scoped>
.star-profile {
  padding: 1rem;
}

.module-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.back-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;
}

.content {
  margin-top: 1rem;
}

.star-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.star-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
}

.star-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.star-info h3 {
  margin: 0 0 0.5rem 0;
}

.star-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>