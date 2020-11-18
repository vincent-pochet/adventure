const router = new VueRouter({
  routes: [
    { path: '/', component: DayList },
    { path: '/days/:id', component: DayShow },
    { path: '/days/:id/edit', component: DayEdit },
    { path: '/session', component: NewSession },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },
  ]
})
