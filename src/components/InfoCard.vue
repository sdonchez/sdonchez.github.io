<template>
	<b-card class="my-4 w-100 h-100">
		<b-card-header>
			<h3 class="text-center">
				{{ card.title }}
			</h3>
			<h5 class="text-center">
				{{ card.subtitle1 }}
			</h5>
			<h5 class="text-center">
				{{ card.subtitle2 }}
			</h5>
		</b-card-header>
		<b-card-body>
			<b-row align-v="center">
				<b-col lg="4" class="text-center py-4" :order-lg="card.iconRight">
					<b-avatar :src="require(`@/assets/${card.icon}`)" size="15rem"></b-avatar>
				</b-col>
				<b-col lg="8">
					<p v-html="card.p1"></p>
					<p v-html="card.p2"></p>
					<p v-html="card.p3"></p>
					<p>
						<b-button variant="primary" :href="card.link" target="_blank">{{
							card.buttonText
						}}</b-button>
					</p>
				</b-col>
			</b-row>
		</b-card-body>
	</b-card>
</template>

<script>
export default {
	props: ["card"],
}
</script>
