<template>
<div>
	<b-row class="bg-secondary px-5 py-3">
		<b-col lg=6>
			Copyright &copy; 2020&mdash;{{ currentYear }}
			<div class="d-none d-md-inline px-1"> Stephen Donchez </div>
			<div v-for="site in social" :key="site.link">
				<div class="icon">
					<a :href="site.link" v-b-tooltip :title="site.tooltip">
						<font-awesome-icon :icon="['site.iconType', 'site.icon']" :style="{color: 'white' }"/>
					</a>
				</div>
			</div>
		</b-col>
	</b-row>
</div>
</template>

<script>
export default {
	name: 'footer',
	data: () => {
		return{
			currentYear: new Date().getFullYear(),
			social: [
				{ link:'mailto:sdonchez@villanova.edu', tooltip:'Email', iconType:'fas', icon:'envelope' },
				{ link:'https://github.com/sdonchez', tooltip:'GitHub', iconType:'fab', icon:'github' },
				{ link:'https://www.linkedin.com/in/stephen-donchez/', tooltip:'LinkedIn', iconType:'fab', icon:'linkedin' },
			],
		}
	}
}
</script>

<style>
.icon{
	display:inline;
	padding-left: 0.5rem;
}
</style>