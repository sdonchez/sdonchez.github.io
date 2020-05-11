<template>
	<div class="icon">
		<a :href="platform.link" v-b-tooltip :title="platform.tooltip">
			<font-awesome-icon
				:icon="[platform.iconType, platform.icon]"
				:style="{ color: 'white' }"
			/>
		</a>
	</div>
</template>

<script>
export default {
	props: ["platform"],
}
</script>

<style>
.icon {
	display: inline;
	padding-left: 0.5rem;
}
</style>
