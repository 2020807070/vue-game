<template>
  <div class="wrapper rain">
    <div class="scrollWrapper" :style="`transform: translateY(${scrollTop}px);`"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend">
      <div class="content">风</div>
      <div class="content">还有雨……</div>
      <div class="move-wrapepr" @click="next">
        <div class="move-container"></div>
      </div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      start: {
        clientX: 0,
        clientY: 0
      },
      move: {
        clientX: 0,
        clientY: 0
      },
      scrollTop: 0,
      lastEnd: 0,
    }
  },
  methods: {
    touchstart (e) {
      const { clientX, clientY} = e.touches[0];
      this.start = {
        clientX,
        clientY
      }
    },
    touchmove (e) {
      const { clientY } = e.touches[0];
      this.scrollTop = clientY - this.start.clientY + this.lastEnd;
      if (this.scrollTop > 10)  this.scrollTop = 8;

    },
    touchend () { 
      this.lastEnd = this.scrollTop;
    },
    next () {
      this.$router.replace('/home');
    }
  }
}
</script>

<style lang="scss">
@function px2rem($px, $base: 40) {
  @return ($px / $base) * 1rem;
}
.rain {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  margin-left: 50%;
  transform: translateX(-50%);
  width: px2rem(295, 20);
  font-size: px2rem(18, 20);
  font-family: 'fzFont';
  line-height: px2rem(32, 20);
  color: #222222;
  span {
    text-decoration: underline;
    color: #e95430;
  }
}

.move-wrapepr {
    height: 900px;
}

.content {
  margin-left: 50%;
  transform: translateX(-50%);
  width: px2rem(295, 20);
  font-size: px2rem(18, 20);
  font-family: 'fzFont';
  line-height: px2rem(32, 20);
  color: #222222;
  span {
    text-decoration: underline;
    color: #e95430;
  }
}

.move-wrapepr {
  height: 200px;
  overflow: hidden;
}


.move-container {
  animation-name: zoom;
  animation-duration: 3.5;
  animation-iteration-count: 1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url(./img/rain.jpg);
  transform: scale(1);
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);;
  }
}

.scrollWrapper {
  background-image: url(./img/bg.png);
  height: px2rem(3000, 20);
  padding-bottom: 300px;
  background-size: contain;
}
</style>