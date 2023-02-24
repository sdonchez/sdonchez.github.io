<template>
	<b-card class="my-4 w-100 h-100">
		<b-card-header>
			<h3 class="text-center">
				{{ card.title }}
			</h3>
		</b-card-header>
		<b-card-body>
			<b-row align-v="center">
        <b-col lg="12">
          <div v-for="para in card.text" :key="para">
            <p v-html="para"></p>
          </div>
          <b-col :lg="skillsColWidth" v-for="skill in card.skills" :key="skill.title" class="float-left">
            <h4 class = "text-center">
              {{skill.title}}
            </h4>
            <ul v-if="!skill.bullets.exists">
              <b-row v-for="bullet in skill.bullets" :key="bullet">
                <li>{{bullet}}</li>
              </b-row>
            </ul>
          </b-col>
        </b-col>
			</b-row>
		</b-card-body>
	</b-card>
</template>

<script>
export default {
	props: ["card"],
  computed: {
    skillsColWidth() {
      return 12/(this.card.skills.length)
    }
  }
}
</script>
