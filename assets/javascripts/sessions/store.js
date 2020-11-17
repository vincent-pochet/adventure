var sessionStore = {
  session: null,
  loadSession: function() {
    if (sessionStore.session) return;

    var localSession = localStorage.getItem('session');

    if (localSession) {
      var storageSession = JSON.parse(localSession);

      if (storageSession.role) {
        sessionStore.session = storageSession;
        return;
      }
    }

    var distantSession = sessionStore.fetchSession();
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
  }
};