<template>
  <div class="hello">
    hello world
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    window.console.log(this.$store.state)
    this.$store.dispatch('SetStore', {
      key: 'test',
      value: '5656859789'
    })
  }
}
</script>
