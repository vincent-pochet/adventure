var sessionStore = {
  session: null,
  loadSession: function() {
    var localSession = localStorage.getItem('session');

    if (localSession) {
      this.session = JSON.parse(localSession);
      return;
    }

    var distantSession = this.fetchSession();
    sessionStore.store(distantSession);
  },
  fetchSession: async function() {
    fetch('/api/session')
      .then(handleErrors)
      .then(response => response.json())
      .then(response => {
        resolve(response);
      })
      .catch(redirectToErrors)
  },
  store: function(session) {
    sessionStore.session = session;
    localStorage.setItem('session', JSON.stringify(session));
  },
  checkAuthentication: function(to, from, next) {
    sessionStore.loadSession();

    if (!sessionStore.session) {
      next('/session')
    }

    next()
  }
};