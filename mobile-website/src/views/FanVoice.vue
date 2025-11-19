<template>
  <div class="fan-voice">
    <header class="module-header">
      <button @click="$router.back()" class="back-button">返回</button>
      <h2>粉丝心声</h2>
    </header>
    
    <div class="content">
      <div class="post-form" v-if="isLoggedIn">
        <textarea 
          v-model="newPost" 
          placeholder="分享你的心声..." 
          class="post-input"
        ></textarea>
        <button @click="submitPost" class="post-button">发布</button>
      </div>
      
      <div class="posts-list">
        <div class="post-item" v-for="post in posts" :key="post.id">
          <div class="post-header">
            <img :src="post.avatar" :alt="post.author" class="author-avatar">
            <div class="author-info">
              <h4>{{ post.author }}</h4>
              <p class="post-time">{{ post.time }}</p>
            </div>
          </div>
          <div class="post-content">
            {{ post.content }}
          </div>
          <div class="post-actions">
            <button class="like-button">👍 {{ post.likes }}</button>
            <button class="comment-button">💬 {{ post.comments }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FanVoicePage',
  data() {
    return {
      isLoggedIn: true, // 实际应用中应从登录状态获取
      newPost: '',
      posts: [
        {
          id: 1,
          author: '粉丝小明',
          avatar: 'https://via.placeholder.com/40',
          time: '2小时前',
          content: '张三的新电影太棒了！演技一如既往地出色，期待下一部作品！',
          likes: 24,
          comments: 5
        },
        {
          id: 2,
          author: '粉丝小红',
          avatar: 'https://via.placeholder.com/40',
          time: '5小时前',
          content: '李四的演唱会现场太震撼了，歌声直达心底，不愧是实力派歌手！',
          likes: 36,
          comments: 8
        },
        {
          id: 3,
          author: '粉丝小刚',
          avatar: 'https://via.placeholder.com/40',
          time: '1天前',
          content: '王五的时尚大片每一张都很有感觉，不愧是国际超模！',
          likes: 18,
          comments: 3
        }
      ]
    }
  },
  methods: {
    submitPost() {
      if (this.newPost.trim()) {
        const post = {
          id: this.posts.length + 1,
          author: '当前用户',
          avatar: 'https://via.placeholder.com/40',
          time: '刚刚',
          content: this.newPost,
          likes: 0,
          comments: 0
        }
        this.posts.unshift(post)
        this.newPost = ''
      }
    }
  }
}
</script>

<style scoped>
.fan-voice {
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

.post-form {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.post-input {
  width: 100%;
  min-height: 80px;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: vertical;
  margin-bottom: 0.5rem;
}

.post-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-item {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.author-info h4 {
  margin: 0;
}

.post-time {
  margin: 0;
  font-size: 0.8rem;
  color: #666;
}

.post-content {
  margin-bottom: 1rem;
  line-height: 1.5;
}

.post-actions {
  display: flex;
  gap: 1rem;
}

.like-button, .comment-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
</style>