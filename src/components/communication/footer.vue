<template>
	<div class="footer">
		<!-- <div @click="footerEmit">Emit</div> -->
        <div @click="footerEmitToHeader">Emit</div>
	</div>
</template>
<script type="text/javascript">
  export default {
     name: "fooetr",
     methods: {
      footerEmitToHeader(){
         this.Emit.$emit('headerTofooter', { key: 'footer' }); //不传递数据
      }
     }
  }
</script>
