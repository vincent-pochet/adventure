const DayShow = {
  data: function () {
    return { day: null }
  },
  props: ['id'],
  template: `
    <div class="day-show" v-if="day">
      <div class="day-content" v-html="day.content"></div>
      <div class="navigation-link"><router-link :to="{ path: '/days/' + (day.number - 1) }" :event="'click'" class="previous-link" v-if="day.has_visible_previous">< {{ $t("days.navigation.previous") }}</router-link></div>
      <div class="navigation-link"><router-link to="/" class="back-link">^ {{ $t("days.navigation.calendar") }}</router-link></div>
      <div class="navigation-link"><router-link :to="{ path: '/days/' + (day.number + 1) }" :event="'click'" class="next-link" v-if="day.has_visible_next">{{ $t("days.navigation.next") }} ></router-link></div>
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
