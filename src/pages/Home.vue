<template>
  <div class="container-fluid">
    <canvas ref="cvWave" class="canvas-fluid"></canvas>
    <div class="pt-5">
      <h2 class="home-title">vue-bootstrap-selecticker</h2>
      <p class="home-badge">
        <img src="https://img.shields.io/github/release/long-woo/vue-bootstrap-selectpicker/all.svg?style=for-the-badge" alt="vue-bootstrap-selecticker version" />
      </p>
      <router-link class="btn btn-outline-success btn-getstart" to="/getstart">快速开始</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  mounted () {
    this.initWave()
  },
  methods: {
    initWave () {
      const cvWave = this.$refs.cvWave
      const ctx = cvWave.getContext('2d')
      const width = cvWave.width = cvWave.offsetWidth
      const height = cvWave.height = cvWave.offsetHeight

      const A1 = 30
      const W1 = 1 / 200
      let Q1 = 0
      const H1 = height / 2

      const A2 = 30
      const W2 = 1 / 300
      let Q2 = 0
      const H2 = height / 2

      const speed1 = -0.01
      const speed2 = -0.02

      const lingrad1 = ctx.createLinearGradient(0, 0, width, 0)
      const lingrad2 = ctx.createLinearGradient(0, 0, width, 0)

      // requestAnimationFrame兼容性处理
      window.requestAnimationFrame = (() => requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          setTimeout(callback, 1000 / 60)
        }
      )()

      lingrad1.addColorStop(0, '#47B784')
      lingrad1.addColorStop(1, '#36495D')
      lingrad2.addColorStop(0, '#36495D')
      lingrad2.addColorStop(0, '#47B784')

      const drawWave = () => {
        ctx.clearRect(0, 0, width, height)
        ctx.globalCompositeOperation = 'destination-over'

        // 第一个波浪
        ctx.beginPath()
        ctx.fillStyle = lingrad1
        ctx.moveTo(0, height / 2)
        Q1 += speed1

        for (let x = 0; x <= width; x++) {
          const y = (A1 * Math.sin(x * W1 + Q1) + H1)

          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.fill()
        ctx.closePath()

        // 绘制第二个
        ctx.beginPath()
        ctx.fillStyle = lingrad2
        Q2 += speed2

        for (let x = 0; x <= width; x++) {
          const y = A2 * Math.sin(x * W2 + Q2) + H2

          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.fill()
        ctx.closePath()

        window.requestAnimationFrame(drawWave)
      }

      drawWave()
    }
  }
}
</script>

<style scoped>
.canvas-fluid {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.home-title {
  margin-bottom: 1rem !important;
}

.home-badge {
  margin-bottom: 2rem;
}

.btn-getstart {
  padding: 0.8rem 5rem;
}

.btn-getstart:hover {
  box-shadow: 0 0.3rem 0.3rem rgba(54, 73, 93, 0.3);
  padding: 0.75rem 4.5rem;
}
</style>
