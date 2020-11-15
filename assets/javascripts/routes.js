const router = new VueRouter({
  routes: [
    { path: '/', component: DayList },
    { path: '/session', component: NewSession },
    { path: '/days/:id', component: DayShow },
    { path: '/days/:id/edit', component: DayEdit },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },
  ]
})
