const DayShow = {
  data: function () {
    return { day: null }
  },
  props: ['id'],
  template: `
    <div class="day-show" v-if="day">
      <div class="day-content" v-html="day.content"></div>
      <router-link to="/" class="back-link"><- Retour au calendrier</router-link>
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
  }
}
