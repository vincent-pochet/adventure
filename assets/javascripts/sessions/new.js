const NewSession = {
  data: function() {
    return {
      password: null,
      error_message: null,
    }
  },
  template: `
    <div class="session-new">
      <form class="session-form" ref="session" v-on:submit.prevent="submit">
        <input type="password" v-model="password" />
        <span class="error-message" v-if="error_message">{{error_message}}</span>
        <button class="submit-button" v-on:click="submit">Connexion</button>
      </form>
    </div>
  `,
  created() {
    if (this.session) {
      router.replace('/');
    }
  },
  methods: {
    submit: function() {
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
        this.session = response;

        router.replace('/');
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