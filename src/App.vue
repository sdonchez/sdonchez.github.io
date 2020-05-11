<template>
  <div id="app" style="overflow-x: hidden;">
    <navigation></navigation>
	<b-modal 
		ref="WIP-modal"
		id="WIP-modal" 
		title="Site Under Construction" 
		header-bg-variant="danger"
		ok-only
		ok-variant="danger">
	This site is still under construction! You're welcome to stick around, but you should
	know that a lot of the links won't work, and it's looking pretty sparse. Check back
	soon for more content!
	</b-modal>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
	name:'app',
	title:'Stephen Donchez',
	components: {
		Navigation
		},
		methods: {
      showModal() {
        this.$refs['WIP-modal'].show()
      },
      hideModal() {
        this.$refs['WIP-modal'].hide()
      }
    },
    mounted() {
      this.showModal();
    }
	}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', 'Roboto Slab';
}
</style>
