<template>
	<div id="app" style="overflow-x: hidden;" class="min-vh-100 d-flex flex-column">
		<navigation></navigation>
		<router-view class="flex-fill"/>
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
	metaInfo: {
		titleTemplate: '%s | Stephen Donchez',
		htmlAttrs: {
			lang: 'en-us'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		]
	},
	components: {
		Navigation,
		SiteFooter,
	},
	methods: {
		// showModal() {
		// 	// noinspection JSUnresolvedFunction
    //   this.$refs["WIP-modal"].show()
		// },
		// hideModal() {
		// 	this.$refs["WIP-modal"].hide()
		// },
	},
	mounted() {
		// this.showModal()
	},
}
</script>

<style lang="scss">
//noinspection CssUnknownTarget
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
//noinspection CssUnknownTarget
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-family: "Roboto", "Roboto Slab",serif;
	font-display: swap;
}
a:hover {
	color: white;
}
p {
	text-align: justify;
}
</style>
