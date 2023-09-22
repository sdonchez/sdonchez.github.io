<!--suppress SpellCheckingInspection -->
<template>
	<footer>
		<b-row class="bg-secondary px-5 py-3 text-center">
			<b-col lg="6" class="text-lg-left">
				Copyright &copy; 2020&mdash;{{ currentYear }}
				<div class="d-none d-md-inline px-1">Stephen Donchez</div>
				<Icon v-for="site in social" :key="site.link" :platform="site" />
        <span class="px-2"><a :href="this.$resumeFile" target="_blank" class="text-white">Resume</a></span>
			</b-col>
			<b-col lg="6" class="text-lg-right">
				Built With:
				<Icon v-for="site in tools" :key="site.link" :platform="site" />
			</b-col>
		</b-row>
	</footer>
</template>

<script>
import Icon from "@/components/Icon"
export default {
	name: "siteFooter",
	components: {
		Icon,
	},
	data: () => {
		return {
			currentYear: new Date().getFullYear(),
			social: [
				{
					link: "mailto:sdonchez@villanova.edu",
					tooltip: "Email",
					iconType: "fas",
					icon: "envelope",
				},
				{
					link: "https://github.com/sdonchez",
					tooltip: "GitHub",
					iconType: "fab",
					icon: "github",
				},
				{
					link: "https://www.linkedin.com/in/stephen-donchez/",
					tooltip: "LinkedIn",
					iconType: "fab",
					icon: "linkedin",
				}
			],
			tools: [
				{
          link: "https://vuejs.org",
          tooltip: "VueJS",
          iconType: "fab",
          icon: "vuejs" },
				{
					link: "https://github.com/sdonchez/sdonchez.github.io",
					tooltip: "GitHub",
					iconType: "fab",
					icon: "github",
				},
				{
					link: "https://getbootstrap.com/",
					tooltip: "Bootstrap",
					iconType: "fab",
					icon: "bootstrap",
				},
				{
					link: "https://fontawesome.com/",
					tooltip: "FontAwesome",
					iconType: "fab",
					icon: "font-awesome",
				},
				{ link: "https://npmjs.com", tooltip: "npm", iconType: "fab", icon: "npm" },
				{
					link: "https://stackoverflow.com/",
					tooltip: "Stack Overflow (because what project is complete without it)",
					iconType: "fab",
					icon: "stack-overflow",
				},
			],
		}
	},
}
</script>
