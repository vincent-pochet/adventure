const NewSession = {
  data: function() {
    return {
      password: null,
      error_message: null,
    }
  },
  template: `
    <div class="session-new">
      <h1>Connectez-vous pour accéder au calendrier</h1>
      <form class="session-form" ref="session" @submit.prevent="login">
        <input required type="password" v-model="password" placeholder="Mot de passe" />
        <span class="error-message" v-if="error_message">{{error_message}}</span>
        <br/>
        <button type="submit" class="submit-button">Connexion</button>
      </form>
    </div>
  `,
  created() {
    sessionStore.loadSession();

    if (sessionStore.session) {
      router.replace('/days');
    }
  },
  methods: {
    login: function() {
      fetch('/api/session', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          password: this.password,
        })
      })
      .then(handleErrors)
      .then(response => response.json())
      .then(response => {
        sessionStore.store(response);

        router.push('/days');
      })
      .catch(error => {
        if (error.message == '401') {
          this.error_message = 'Le mot de passe est invalide';
        } else {
          redirectToErrors(error);
        }
      })
    }
  }
}
