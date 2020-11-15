const DayEdit = {
  data: function () {
    return {
      day: null,
      save: false
    }
  },
  props: ['id'],
  template: `
    <div class="day-edit" v-if="day">
      <form class="day-form" ref="dayForm">
        <div>
          <textarea v-model="day.content"/>
        </div>
        <div>
          <button class="submit-button" v-on:click="submit">Enregistrer</button>
          <span class="submit-confirm" v-if="save">Sauvegardé</span>
        </div>
        <div>
          <router-link to="/" class="back-link"><- Retour au calendrier</router-link>
        </div>
      </form>
      <div class="day-preview" v-html="day.content"></div>
    </div>
  `,
  created() {
    fetch(`/api/days/${this.$route.params.id}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(response => {
        this.day = response.day;
      })
      .catch(redirectToErrors)
  },
  methods: {
    submit: function () {
      fetch(`/api/days/${this.$route.params.id}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          day: { content: this.day.content }
        })
      })
        .then(handleErrors)
        .then(response => response.json())
        .then(response => {
          this.day = response.day;
          this.save = true;
          setTimeout(() => { this.save = false }, 600);
        })
        .catch(redirectToErrors)
    }
  }
}
