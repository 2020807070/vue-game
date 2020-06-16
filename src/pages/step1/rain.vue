<template>
  <div class="wrapper rain" >
    <div class="scrollWrapper" :style="`transform: translate3d(0, ${scrollTop}px, 0);transition-duration: 0ms;`"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      >
      <div class="content c1">风</div>
      <div class="content">还有雨……</div>
      <div class="move-wrapepr">
        <div class="move-container move-container__rain" :style="`background-position: center ${rainMovePostion}px;`"></div>
      </div>
      <div class="content">从<span>大革命</span>失败，共产党人起义反对蒋介石，到现在已经八年了。</div>
      <div class="content">这八年里，共产党在全国农村已经建立起十几块革命根据地。其中最大的一块就是这里——</div>
      <div class="move-wrapepr">
        <div class="move-container move-container__map" :style="`background-position: ${mapMovePostionX}px ${mapMovePostionY}px;`"
          @touchstart="maptouchstart"
          @touchmove="maptouchmove"
          @touchend="maptouchend"></div>
      </div>
      <div class="title">中央苏区</div>
      <div class="content">我是中央苏区中一名普通的红军战士，同大部分战士一样，我们以为自己会一直保卫着这里。</div>
      <div class="content">不过，后来的事情出乎我们的意料——</div>
      <div class="zhengfu">
        <img src="./img/temporary.jpg" alt="" :style="`transform: translateZ(0px);filter: grayscale(${grayscale}%);`">
      </div>
      <br>
      <div class="content">我们将要走很长很长的路，</div>
      <div class="content">然后再回到这梦想开始的地方！</div>
      <br>
      <div class="content">那是1934年的初春，还是寒风呼号的时节，江西的红土地上就像雨后春笋般冒出成千上万个怪物来。这是蒋介石采用的赛克特建议，实行堡垒政策，建造了各种各样的碉堡，将中央苏区团团围住。</div>
      <br>
      <div class="move-wrapepr">
        <div class="move-container move-container__map2" :style="`background-position: ${map2MovePostionX}px ${map2MovePostionY}px;`"
          @touchstart="maptouchstart"
          @touchmove="maptouchmove"
          @touchend="maptouchend"></div>
      </div>
      <div class="content">
        到了10月，我们同许多其他地方的部队都逐渐集结到于都附近，每个人都发了一件崭新的灰色棉上衣，除了枪支弹药，四十排子弹，还有三四个手榴弹，两三双草鞋，几斤口粮。这是以前从来没有过的阵仗，战士们既兴奋又纳闷，为什么一下发这么多东西呢？
      </div>

      <div class="content">“做好准备，明日出发！”</div>
      <div class="content">这样的命令，一连几天传来。</div>
      <div class="content">我们时刻准备着，不敢大意，只是当时的我们还远不知道，人类文明的一个奇迹已经缓缓拉开了序幕……</div>
    </div>
  </div>
</template>

<script>

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
      map2MovePostionX: 0,
      map2MovePostionY: 0,
      zfMoveTop: 0,
      grayscale: 100,
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
      mapLastEnd: 0,
      
    }
  },
  mounted () {
    // const myScroll = new IScroll('#wrapper');
    this.$rainBGM = document.querySelector('#rainBGM');
    // console.log(this.$rainBGM.load());
    this.$rainBGM.play();
    this.rainMoveTop = document.querySelectorAll('.move-container')[0].offsetTop;
    this.mapMoveTop = document.querySelectorAll('.move-container')[1].offsetTop;
    this.zfMoveTop = document.querySelector('.zhengfu').offsetTop;
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
      const scrollTop = Math.abs(this.scrollTop);
      if(scrollTop >= this.rainMoveTop + this.baseHeight) {
        this.rainMovePostion = scrollTop - this.rainMoveTop - this.baseHeight;
      } else this.rainMovePostion = 0;
      if(scrollTop >= this.mapMoveTop + this.baseHeight) {
        this.mapMovePostionY = scrollTop - this.mapMoveTop - this.baseHeight;
      } else this.mapMovePostionY = 0;
      const zfBengin = this.zfMoveTop - 266;
      const zfEnd = this.zfMoveTop;
      if (zfBengin < scrollTop &&  scrollTop < zfEnd) {
        this.grayscale -= (zfEnd - zfBengin) / 100;
        // console.log(scrollTop, (zfEnd - zfBengin) / 100);
        console.log((scrollTop - zfBengin) /2.66);
        this.grayscale = 100- [(scrollTop - zfBengin) /2.66];
      }
    },
    maptouchstart (e) {
      const { clientX, clientY } = e.touches[0];
      this.map = { clientX, clientY };
    },
    maptouchmove (e) {
      // console.log(Math.abs(this.map.clientX - e.touches[0].clientX), Math.abs(this.map.clientY - e.touches[0].clientY));
      if (Math.abs(this.map.clientX - e.touches[0].clientX) > Math.abs(this.map.clientY - e.touches[0].clientY)){
        e.stopPropagation();
        this.mapMovePostionX = -(this.map.clientX - e.touches[0].clientX) + this.mapLastEnd;
      }
    },
    maptouchend (e) {
      console.log(e);
      this.mapLastEnd = this.mapMovePostionX;
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
  &__map2 {
    background-image: url(./img/map2.jpg);
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

.zhengfu {
  img {
    height: px2rem(251, 20);
    // -webkit-filter: grayscale(100%);
    // -moz-filter: grayscale(100%);
    // -ms-filter: grayscale(100%);
    // -o-filter: grayscale(100%);
    
    filter: gray;
  }
}
</style>