// 移动端适配工具混入

export default {
  data() {
    return {
      isMobile: false,
      screenWidth: 0,
      screenHeight: 0
    }
  },

  mounted() {
    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkDevice)
  },

  methods: {
    checkDevice() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.isMobile = window.innerWidth <= 768

      // 设置移动端样式类
      if (this.isMobile) {
        document.body.classList.add('mobile-device')
      } else {
        document.body.classList.remove('mobile-device')
      }
    },

    // 安全区域适配（适用于iPhone X等异形屏）
    getSafeAreaInsets() {
      if (this.isMobile) {
        return {
          top: 'env(safe-area-inset-top)',
          right: 'env(safe-area-inset-right)',
          bottom: 'env(safe-area-inset-bottom)',
          left: 'env(safe-area-inset-left)'
        }
      }
      return { top: 0, right: 0, bottom: 0, left: 0 }
    }
  }
}