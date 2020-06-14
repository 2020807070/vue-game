<template>
  <div class="step2">
    <button @click="go">123132</button>
  </div>
</template>

<script>
export default {
  methods: {
    go () {
      this.$router.replace('/step1')
    }
  }
}
</script>

<style>
.step2 {
  width: 100%;
  height: 100%;
}
</style>