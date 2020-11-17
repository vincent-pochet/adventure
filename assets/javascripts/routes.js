const needAuthentication = function(to, from, next) {
  sessionStore.loadSession();

  if (!sessionStore.session) {
    next('/session');
    return;
  }

  next()
}

const router = new VueRouter({
  routes: [
    { path: '/', component: NewSession },
    { path: '/days', component: DayList, beforeEnter: needAuthentication },
    { path: '/days/:id', component: DayShow, beforeEnter: needAuthentication },
    { path: '/days/:id/edit', component: DayEdit, beforeEnter: needAuthentication },
    { path: '/404', component: NotFound, beforeEnter: needAuthentication },
    { path: '*', redirect: '/404' },
  ]
})
