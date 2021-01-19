const DayList = {
  data: function () {
    return {
      days: [],
      title: { value: '' },
      introduction: { value: '' },
    }
  },
  template: `
    <div class="day-list">
      <h1>{{title.value}}</h1>
      <div class="intro" v-html="introduction.value"></div>
      <day-card v-for="day in days" v-bind:key="day.number" v-bind:day="day"/>
    </div>
  `,
  created() {
    var url = new URL('/api/settings', window.location.origin)
    url.searchParams.append('locale', i18n.locale)
    url.searchParams.append('keys[]', 'app.title')
    url.searchParams.append('keys[]', 'app.introduction')

    fetch(url)
      .then(handleErrors)
      .then(response => response.json())
      .then(response => {
        this.title = response.settings.find(setting => setting.key == 'app.title');
        this.introduction = response.settings.find(setting => setting.key == 'app.introduction');
      })
      .catch(redirectToErrors)

    fetch('/api/days')
      .then(handleErrors)
      .then(response => response.json())
      .then(response => {
        this.days = response.days;
      })
      .catch(redirectToErrors)
  }
}
