// 网站配置文件

export default {
  // 网站基本信息
  siteName: '明星网站',
  siteDescription: '一个专注于明星资讯的移动端网站',

  // 模块配置
  modules: [
    {
      id: 'star-profile',
      name: '明星档案',
      description: '查看明星详细资料',
      icon: 'star'
    },
    {
      id: 'data-workshop',
      name: '数据工坊',
      description: '数据分析与可视化',
      icon: 'chart'
    },
    {
      id: 'works-promotion',
      name: '作品安利',
      description: '推荐优秀作品',
      icon: 'movie'
    },
    {
      id: 'fan-voice',
      name: '粉丝心声',
      description: '粉丝互动交流区',
      icon: 'heart'
    }
  ],

  // 用户相关配置
  user: {
    // 是否允许游客访问
    allowGuestAccess: true,
    // 登录后重定向页面
    loginRedirect: '/',
    // 登出后重定向页面
    logoutRedirect: '/'
  },

  // 移动端配置
  mobile: {
    // 是否启用移动端优化
    enabled: true,
    // 触摸设备最小点击区域
    touchTargetMinSize: 44
  }
}