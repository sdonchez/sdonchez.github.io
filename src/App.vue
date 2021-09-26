<template>
	<div id="app" style="overflow-x: hidden;">
		<navigation></navigation>
		<router-view />
		<SiteFooter></SiteFooter>
	</div>
</template>

<!--suppress JSUnresolvedFunction -->
<script>
import Navigation from "@/components/Navigation"
import SiteFooter from "@/components/SiteFooter"

// noinspection JSUnusedGlobalSymbols
export default {
	name: "app",
	title: "Stephen Donchez",
	components: {
		Navigation,
		SiteFooter,
	},
	methods: {
		showModal() {
			// noinspection JSUnresolvedFunction
      this.$refs["WIP-modal"].show()
		},
		hideModal() {
			this.$refs["WIP-modal"].hide()
		},
	},
	mounted() {
		this.showModal()
	},
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab");
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-family: "Roboto", "Roboto Slab",serif;
}
a:hover {
	color: white;
}
p {
	text-align: justify;
}
</style>
