<template>
  <div class="wrapper">
    <div class="home">
      <div class="home-banner" @click="next"></div>
      <div class="home-ntron">
        <div class="home-content">
          <div>心中有信仰，</div>
          <div>脚下有力量。</div>
          <div>——习近平</div>
        </div>
      </div>
      <div class="home-mountain"></div>
    </div>

  </div>
</template>

<script>
import 'swiper/css/swiper.css'
export default {
  data () {
    return {
    }
  },
  mounted () {
    window.onscroll = () => {
      console.log(123);
    }
  },
  methods: {
    next () {
      this.$router.replace('/rain')
    }
  }
}
</script>

<style lang="scss">
@function px2rem($px, $base: 40) {
  @return ($px / $base) * 1rem;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  &-banner {
    background-image: url(./img/banner.png);
    height: px2rem(175, 20);
    background-size: contain;
  }
  &-ntron {
    @extend .center;
    flex: 1;
    height: 100%;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    // text-align: center;
    font-family: 'fzFont';
    width: px2rem(215, 20);
    div {
      width: 100%;
      text-align: center;
      color: #9b1a02;
      font-size: px2rem(30, 20);
      &:first-child {
        margin-bottom: px2rem(2, 20);
      }
      &:last-child {
        margin-top: px2rem(17, 20);
        font-size: px2rem(20, 20);
        color: #222222;
        text-align: right;
      }
    }
  }
  &-mountain {
    // opacity: 0.8;
    width: 100%;
    height: px2rem(193, 20);
    background-image: url(./img/mountain.png);
  }
}

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

</style>