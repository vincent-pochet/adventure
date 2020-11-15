//= require_tree ./sessions
//= require_tree

Vue.mixin({
  data: function() {
    return { session: null }
  }
})

const app = new Vue({
  router
}).$mount('#container')
