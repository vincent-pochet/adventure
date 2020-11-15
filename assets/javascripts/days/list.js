const DayList = {
  data: function () {
    return { days: [] }
  },
  template: `
    <div class="day-list">
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
