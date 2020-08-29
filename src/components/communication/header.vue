<template>
  <div
    class="header"
  >
    <div @click="headerEmit">
      header
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      index: 0
    }
  },
  mounted () {
    this.Emit.$on('headerTofooter', function(value) { window.console.log(`header${JSON.stringify(value)}`) })
  },
  destroyed() {
    this.Emit.$off('headerTofooter')
  },
  methods: {
    headerEmit() {
      window.console.log(11)
      this.Emit.$emit('fromHeader',{value:"123"}); //可以传递数据
    }
  }
}
</script>