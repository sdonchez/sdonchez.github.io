<template>
<div>
	<b-navbar sticky="bottom" class="navbar-dark bg-secondary px-5">
		<b-row>
				Copyright &copy; 2020&mdash;{{ currentYear }}<span class="d-none d-md-block">Stephen Donchez </span>
				<a href="mailto:sdonchez@villanova.edu" v-b-tooltip title="email">
					<font-awesome-icon icon="envelope" :style="{color: 'white' }"/>
				</a>
				<a href="https://github.com/sdonchez" v-b-tooltip title="github">
					<font-awesome-icon :icon="['fab', 'github']" :style="{color: 'white' }"/>
				</a>
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
@media screen and (max-width: 400px){
	.mobile-hide{
		display:none;
	}
}
</style>