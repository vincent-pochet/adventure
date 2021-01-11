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
          <button class="submit-button" v-on:click="submit">{{ $t('days.edit.save') }}</button>
          <span class="submit-confirm" v-if="save">{{ $t('days.edit.saved') }}</span>
        </div>
      </form>
      <div class="day-preview">
        <div class="day-content" v-html="day.content"></div>
        <div class="navigation-link"><router-link :to="{ path: '/days/' + (day.number - 1) + '/edit' }" :event="'click'" class="previous-link" v-if="day.has_visible_previous">< {{ $t("days.navigation.previous") }}</router-link></div>
        <div class="navigation-link"><router-link to="/" class="back-link">^ {{ $t("days.navigation.calendar") }}</router-link></div>
        <div class="navigation-link"><router-link :to="{ path: '/days/' + (day.number + 1) + '/edit' }" :event="'click'" class="next-link" v-if="day.has_visible_next">{{ $t("days.navigation.next") }} ></router-link></div>
      </div>
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
        mode: 'same-origin',
        credentials: 'same-origin',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
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
          setTimeout(() => { this.save = false }, 1500);
        })
        .catch(redirectToErrors)
    }
  }
}
