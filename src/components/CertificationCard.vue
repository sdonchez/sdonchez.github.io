<template>
  <b-card class="my-4 w-100 h-100" :id=card.slug>
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
      <h5 class="text-center">
        {{ card.subtitle3 }}
      </h5>
    </b-card-header>
    <b-card-body>
      <b-row align-v="center">
        <b-col lg="4" class="text-center py-4 px-2" :order-lg="card.credentialRight">
          <p class="text-center" v-html= card.credential> </p>
        </b-col>
        <b-col lg="8" v-if="card.credential">
          <div v-for="para in card.text" :key="para">
            <p v-html="para"></p>
          </div>
          <p v-if="card.actions" class = "text-center">
            <b-button v-for="action in card.actions" :key="action" variant="primary" :href="action.link" target="_blank" class="mx-2 mt-2">{{
                action.text
              }}</b-button>
          </p>
        </b-col>
        <b-col lg="12" v-else>
          <div v-for="para in card.text" :key="para">
            <p v-html="para"></p>
          </div>
          <p v-for="action in card.actions" :key="action" class = "text-center">
            <b-button variant="primary" :href="action.link" target="_blank" class="mt-1">{{
                action.text
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
