Vue.component('day-card', {
  props: ['day'],
  template: `
    <router-link
      :to="{ path: '/days/' + day.number}"
      :disabled="!day.visible"
      tag="div"
      class="day-item"
      v-bind:class="{ pending: !day.visible, today: day.today }">
      <span>{{day.number}}</span>
    </router-link>
  `
})
