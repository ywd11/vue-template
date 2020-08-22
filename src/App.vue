<template>
  <div id="app">
    <a-button type="primary">Primary</a-button>
    <excl />
    <div>
      {{ 'ss  s   shdiiqw  ioeqwio ' | trim(1)}}
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import Excl from '@/components/excl.vue'
export default {
  name: 'app',
  components: {
    [Button.name]: Button,
    Excl
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
