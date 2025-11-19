<template>
  <div class="data-workshop">
    <header class="module-header">
      <button @click="$router.back()" class="back-button">返回</button>
      <h2>数据工坊</h2>
    </header>
    
    <div class="content">
      <div class="data-charts">
        <div class="chart-container">
          <h3>粉丝增长趋势</h3>
          <div class="chart-placeholder">
            [数据图表区域]
          </div>
        </div>
        
        <div class="chart-container">
          <h3>作品热度排行</h3>
          <div class="chart-placeholder">
            [排行榜区域]
          </div>
        </div>
        
        <div class="chart-container">
          <h3>社交媒体数据分析</h3>
          <div class="chart-placeholder">
            [社交数据区域]
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataWorkshopPage'
}
</script>

<style scoped>
.data-workshop {
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

.data-charts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chart-container {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
}

.chart-container h3 {
  margin-top: 0;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border-radius: 4px;
  color: #666;
}
</style>