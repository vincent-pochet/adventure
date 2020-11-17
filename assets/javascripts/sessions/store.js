var sessionStore = {
  session: null,
  loadSession: function() {
    if (sessionStore.session) return;

    const localSession = localStorage.getItem('session');
    if (!localSession) return;

    var storageSession = JSON.parse(localSession);
    if (!storageSession.role) return;

    const now = new Date()
    if (now.getTime() > storageSession.expiry) {
      localStorage.removeItem(key)
      return
    }

    sessionStore.session = storageSession;
  },

  store: function(session) {
    const now = new Date();
    sessionStore.session = session;
    sessionStore.session.expiry = now.getTime() + 2592000; // 30 days
    localStorage.setItem('session', JSON.stringify(session));
  }
};