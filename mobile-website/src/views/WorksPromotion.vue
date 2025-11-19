<template>
  <div class="works-promotion">
    <header class="module-header">
      <button @click="$router.back()" class="back-button">返回</button>
      <h2>作品安利</h2>
    </header>
    
    <div class="content">
      <div class="works-filter">
        <select v-model="selectedCategory">
          <option value="">全部类型</option>
          <option value="movie">电影</option>
          <option value="tv">电视剧</option>
          <option value="music">音乐</option>
          <option value="variety">综艺</option>
        </select>
      </div>
      
      <div class="works-list">
        <div class="work-item" v-for="work in filteredWorks" :key="work.id">
          <img :src="work.poster" :alt="work.title" class="work-poster">
          <div class="work-info">
            <h3>{{ work.title }}</h3>
            <p class="work-category">{{ work.category }}</p>
            <p class="work-description">{{ work.description }}</p>
            <div class="work-rating">
              <span v-for="star in 5" :key="star" class="star">
                {{ star <= work.rating ? '★' : '☆' }}
              </span>
              <span>{{ work.rating }}/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorksPromotionPage',
  data() {
    return {
      selectedCategory: '',
      works: [
        {
          id: 1,
          title: '电影A',
          category: 'movie',
          poster: 'https://via.placeholder.com/80x120',
          description: '这是一部非常精彩的电影，剧情扣人心弦。',
          rating: 4.5
        },
        {
          id: 2,
          title: '电视剧B',
          category: 'tv',
          poster: 'https://via.placeholder.com/80x120',
          description: '热门电视剧，收视率持续领先。',
          rating: 4.2
        },
        {
          id: 3,
          title: '歌曲C',
          category: 'music',
          poster: 'https://via.placeholder.com/80x120',
          description: '流行金曲，传唱度极高。',
          rating: 4.8
        }
      ]
    }
  },
  computed: {
    filteredWorks() {
      if (!this.selectedCategory) {
        return this.works
      }
      return this.works.filter(work => work.category === this.selectedCategory)
    }
  }
}
</script>

<style scoped>
.works-promotion {
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

.works-filter {
  margin-bottom: 1rem;
}

.works-filter select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.works-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.work-item {
  display: flex;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.work-poster {
  width: 80px;
  height: 120px;
}

.work-info {
  padding: 1rem;
  flex: 1;
}

.work-info h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.work-category {
  color: #42b983;
  font-weight: bold;
  margin: 0.5rem 0;
}

.work-description {
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.work-rating {
  color: #ffcc00;
  font-size: 1.2rem;
}

.work-rating span:last-child {
  color: #666;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}
</style>