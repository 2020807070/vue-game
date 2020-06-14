<template>
  <div id="app">
    <transition name="slide-left" >
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  // mounted () {
  //   new BScroll('#app', {
  //     bounce: false,
  //     snap: {
  //       threshold: 0.5,
  //       stepY: window.innerHeight
  //     }
  //   });
  // }
}
</script>

<style lang="scss">
@import url('../src/statics/css/basic/_basic.scss');
body,
#app{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  min-width: 500px;
  height: 100%;
  background-image: url(./pages/step1/img/bg.png);
  background-size: contain;
}

.wrapper {
  width: 100%;
  height: 100%;
  background-image: url(./pages/step1/img/bg.png);
  background-size: contain;
}

// .v-enter,.v-leave-to {
//   opacity: 0;
//   transform: translate(0%, 0)
// }

// v-leave-to {
//   transform: translate(300px, 0)
// }
// .v-enter-active,.v-leave-active{
//   transition: all .4s ease-in-out;
//   transition: .4s;
// }


.child-view {
    position: absolute;
    width:100%;
    transition: all .4s ;
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(0, -100%);
    transform: translate(0, -100%);
}
</style>
