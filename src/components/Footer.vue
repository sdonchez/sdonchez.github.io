<template>
<div>
	<b-navbar sticky="bottom" class="navbar-dark bg-secondary px-5">
		<b-row>
				Copyright &copy; 2020&mdash;{{ currentYear }}
				<div class="d-none d-md-block px-1"> Stephen Donchez </div>
				<div class="icon">
				<a href="mailto:sdonchez@villanova.edu" v-b-tooltip title="Email">
					<font-awesome-icon icon="envelope" :style="{color: 'white' }"/>
				</a>
				</div>
				<div class="icon">
				<a href="https://github.com/sdonchez" v-b-tooltip title="GitHub">
					<font-awesome-icon :icon="['fab', 'github']" :style="{color: 'white' }"/>
				</a>
				</div>
				<div class="icon">
				<a href="https://www.linkedin.com/in/stephen-donchez/" v-b-tooltip title="LinkedIn">
					<font-awesome-icon :icon="['fab', 'linkedin']" :style="{color: 'white' }"/>
				</a>
				</div>
		</b-row>
	</b-navbar>
</div>
</template>

<script>
export default {
	name: 'footer',
	data: () => {
		return{
			currentYear: new Date().getFullYear()
		}
	}
}
</script>

<style>
.icon{
	padding-left: 0.5rem;
}
</style>