<template>
  <div class="wrapper rain">
    <div class="scrollWrapper" :style="`transform: translateY(${scrollTop}px);`"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend">
      <div class="content c1">风</div>
      <div class="content">还有雨……</div>
      <div class="move-wrapepr" @click="next">
        <div class="move-container move-container__rain" :style="`background-position: center ${rainMovePostion}px;`"></div>
      </div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="move-wrapepr" @click="next">
        <div class="move-container move-container__map" :style="`background-position: ${mapMovePostionX}px ${mapMovePostionY}px;`"
          @touchstart="maptouchstart"
          @touchmove="maptouchmove"
          @touchend="maptouchend"></div>
      </div>
      <div class="title">中央苏区</div>
      <div class="content">
        我是中央苏区中一名普通的红军战士，同大部分战士一样，我们以为自己会一直保卫着这里。不过，后来的事情出乎我们的意料——
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseHeight: 80,
      rainMoveTop: 0,
      rainMovePostion: 0,
      mapMoveTop: 0,
      mapMovePostionX: 0, // -80
      mapMovePostionY: 0,
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
  mounted () {
    this.rainMoveTop = document.querySelectorAll('.move-container')[0].offsetTop;
    this.mapMoveTop = document.querySelectorAll('.move-container')[1].offsetTop;
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
      this.checkMoveOver();
    },
    touchend () { 
      this.lastEnd = this.scrollTop;
    },
    next () {
      this.$router.replace('/home');
    },
    checkMoveOver () {
      if(Math.abs(this.scrollTop) >= this.rainMoveTop + this.baseHeight) {
        this.rainMovePostion = Math.abs(this.scrollTop) - this.rainMoveTop - this.baseHeight;
      } else this.rainMovePostion = 0;
      if(Math.abs(this.scrollTop) >= this.mapMoveTop + this.baseHeight) {
        this.mapMovePostionY = Math.abs(this.scrollTop) - this.mapMoveTop - this.baseHeight;
      } else this.mapMovePostionY = 0;
    },
    maptouchstart (e) {
      const { clientX } = e.touches[0];
      this.map = { clientX };
    },
    maptouchmove (e) {
      e.stopPropagation();
      console.log(this.map.clientX - e.touches[0].clientX);
      this.mapMovePostionX = -(this.map.clientX - e.touches[0].clientX);
    },
    maptouchend (e) {
      console.log(e);
    },
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

.c1 {
  margin-top: px2rem(10, 20);
}

.title {
  font-family: "fzFont";
  text-align: center;
  margin: px2rem(11) 0;
  font-size: px2rem(22, 20);
}
.move-wrapepr {
  overflow: hidden;
  height: px2rem(320 , 20);
  margin: px2rem(30, 20);
}


.move-container {
  animation: zoom 10s infinite;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  zoom: 1;
  &__rain {
    background-image: url(./img/rain.jpg);
  }
  &__map {
    background-image: url(./img/map1.jpg);
  }
}

@keyframes zoom {
  0% {
    zoom: 1;
  }
  100% {
    zoom: 1.8;
  }
}

.scrollWrapper {
  background-image: url(./img/bg.png);
  height: px2rem(3000, 20);
  padding-bottom: 300px;
  background-size: contain;
}
</style>