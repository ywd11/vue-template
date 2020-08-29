<template>
	<div class="father">
		<Header />
		<Footer />
	</div>
</template>
<script>
import Header from './header.vue' 
import Footer from './footer.vue' 
export default {
	name: 'Father',
	data() {
		return {}
	},
	components: {
		Header,
		Footer
	},
	mounted() {
		this.Emit.$on('fromHeader', function(value) { window.console.log(value) })
	},
	destroyed() {
      this.Emit.$off('fromHeader');
    //   this.Emit.$off('fromFooter');
    }
}
</script>