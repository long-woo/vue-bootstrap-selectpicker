<template>
  <div class="container-fluid">
    <canvas ref="cvWave" class="canvas-fluid"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      dropdownData: ['Vue', 'React', 'Angular'],
      dropdownData1: ['Vue', 'React', 'Angular', 'jQuery'],
      dropdownData2: [
        { text: 'Vue', value: 'vue' },
        { text: 'React', value: 'react', disabled: false },
        { text: 'Angular', value: 'angular' },
        { text: 'jQuery', value: 'jquery', disabled: true }
      ],
      demo1: '',
      demo2: '',
      demo3: '',
      demo4: '',
      demo5: '',
      demo6: '',
      demo7: ''
    }
  },
  mounted () {
    this.$prism.highlightAll()
  },
  methods: {
    consoleInfo (data, example) {
      data = JSON.stringify(data)
      console.info(`%c演示-${example}%c输出：%c${data}`, 'color: #47B784;', 'color: #000;', 'background-color: #d1ecf1; border-color: #d1ecf1; color: #0c5460; border-radius: 0.25rem; padding: 0.25rem 0.5rem;')
    },
    change1 (data, text) {
      this.demo1 = text
      this.consoleInfo(data, 1)
    },
    change2 (data, text) {
      this.demo2 = text
      this.consoleInfo(data, 2)
    },
    change3 (data, text) {
      this.demo3 = text
      this.consoleInfo(data, 3)
    },
    change4 (data, text) {
      this.demo4 = text
      this.consoleInfo(data, 4)
    },
    change5 (data, text) {
      this.demo5 = text
      this.consoleInfo(data, 5)
    },
    change6 (data, text) {
      this.demo6 = text
      this.consoleInfo(data, 6)
    },
    change7 (data, text) {
      this.demo7 = text
      this.consoleInfo(data, 7)
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
}
</style>
