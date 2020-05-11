<template>
<div>
	<b-row class="bg-secondary px-5 py-3">
		<b-col lg=6>
			Copyright &copy; 2020&mdash;{{ currentYear }}
			<div class="d-none d-md-inline px-1"> Stephen Donchez </div>
			<Icon v-for="site in social" 
				:key="site.link" 
				:platform="site"/>
		</b-col>
	</b-row>
</div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
	name: 'siteFooter',
	components: {
		Icon
	},
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