<template>
  <div class="wrapper rain" >
    <div class="scrollWrapper" :style="`transform: translate3d(0, ${scrollTop}px, 0);transition-duration: 0ms;`"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      >
      <div class="content c1">风</div>
      <div class="content">还有雨……</div>
      <div class="move-wrapepr" @click="next">
        <div class="move-container move-container__rain" :style="`background-position: center ${rainMovePostion}px;`"></div>
      </div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="move-wrapepr" @click="next">
        <div class="move-container move-container__map" :style="`background-position: ${mapMovePostionX}px ${mapMovePostionY}px;`"
          v-swipeleft="(e)=>swipeleft('左滑',e)"
          v-swiperight="(e)=>swiperight('右滑',e)"
          v-swipeup="(e)=>swipeup('上滑',e)"
          v-swipedown="(e)=>swipedown('下滑',e)"
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
import Vue from 'vue';
import VIscroll from 'viscroll';

// 可以在use的时候设置iscroll的参数
Vue.use(VIscroll, {
    mouseWheel: true,
    click: false,
    preventDefault: true,
    tap: false,
    bounce: false,
    disableTouch: true
});

export default {
  data () {
    return {
      up: 0,
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
    // const myScroll = new IScroll('#wrapper');
    this.$rainBGM = document.querySelector('#rainBGM');
    // console.log(this.$rainBGM.load());
    this.$rainBGM.play();
    this.rainMoveTop = document.querySelectorAll('.move-container')[0].offsetTop;
    this.mapMoveTop = document.querySelectorAll('.move-container')[1].offsetTop;


    this.$rainBGM.play();
  },
  methods: {
    touchstart (e) {
      const { clientX, clientY} = e.touches[1] || e.touches[0];
      this.start = {
        clientX,
        clientY
      }
    },
    touchmove (e) {
      // console.log(e.touches);
      const { clientY } = e.touches[1] || e.touches[0];
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
      const { clientX, clientY } = e.touches[0];
      this.map = { clientX, clientY };
    },
    maptouchmove (e) {
      console.log(Math.abs(this.map.clientX - e.touches[0].clientX), Math.abs(this.map.clientY - e.touches[0].clientY));
      if (Math.abs(this.map.clientX - e.touches[0].clientX) > Math.abs(this.map.clientY - e.touches[0].clientY)){
        e.stopPropagation();
        this.mapMovePostionX = -(this.map.clientX - e.touches[0].clientX);
      }
      // console.log(e.touches);
      // console.log(this.map.clientX - e.touches[0].clientX);
      // if (this.up === 1) {

      // }
    },
    maptouchend (e) {
      console.log(e);
    },
    swipeleft () {
      this.up = 1;
    },
    swiperight () {
      this.up = 1;
    },
    swipeup () {
      this.up = 2;
    },
    swipedown () {
      this.up = 2;
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
  width: 100%;
  height: px2rem(320 , 20);
  margin: px2rem(30, 20) 0;
}


.move-container {
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