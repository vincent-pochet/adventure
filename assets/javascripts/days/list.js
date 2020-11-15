const DayList = {
  data: function () {
    return { days: [] }
  },
  template: `
    <div class="day-list">
      <h1>Le calendrier de l'avent des Pochons</h1>
      <day-card v-for="day in days" v-bind:key="day.number" v-bind:day="day"/>
    </div>
  `,
  created() {
    fetch('/api/days')
      .then(response => response.json())
      .then(response => {
        this.days = response.days;
      })
  }
}
