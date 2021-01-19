const NewSession = {
  data: function() {
    return {
      password: null,
      error_message: null,
    }
  },
  template: `
    <div class="session-new">
      <h1>{{ $t('sessions.connect_title') }}</h1>
      <form class="session-form" ref="session" @submit.prevent="login">
        <input required type="password" v-model="password" :placeholder="$t('sessions.password')" />
        <br/>
        <span class="error-message" v-if="error_message">{{error_message}}</span>
        <br/>
        <button type="submit" class="submit-button">{{ $t('sessions.connect_button') }}</button>
      </form>
    </div>
  `,
  created() {
    // TODO: call /me if 200 redirect
  },
  methods: {
    login: function() {
      this.error_message = null;

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
      .then(() => { router.push('/') })
      .catch(error => {
        if (error.message == '401') {
          this.error_message = this.$t('sessions.invalid_password');
        } else {
          redirectToErrors(error);
        }
      })
    }
  }
}
