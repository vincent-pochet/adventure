const router = new VueRouter({
  routes: [
    { path: '/', component: DayList, beforeEnter: sessionStore.checkAuthentication },
    { path: '/session', component: NewSession },
    { path: '/days/:id', component: DayShow, beforeEnter: sessionStore.checkAuthentication },
    { path: '/days/:id/edit', component: DayEdit, beforeEnter: sessionStore.checkAuthentication },
    { path: '/404', component: NotFound, beforeEnter: sessionStore.checkAuthentication },
    { path: '*', redirect: '/404' },
  ]
})
