const supportedLocals = ['en', 'fr'];

const messages = {
  en: {
    days: {
      navigation: {
        previous: 'Previous day',
        next: 'Next day',
        calendar: 'Back to calendar'
      },
      edit: {
        save: "Save",
        saved: "Saved"
      }
    },
    sessions: {
      connect_title: "Connect to see the calendar",
      password: "Password",
      connect_button: "Connect",
      invalid_password: "Password is invalid",
    }
  },
  fr: {
    days: {
      navigation: {
        previous: 'Jour précédent',
        next: 'Jour suivant',
        calendar: 'Retour au calendrier'
      },
      edit: {
        save: "Enregistrer",
        saved: "Sauvegardé"
      }
    },
    sessions: {
      connect_title: "Connectez-vous pour accéder au calendrier",
      password: "Mot de passe",
      connect_button: "Connection",
    }
  }
}

const detectBrowserLanguage = function() {
  var userLang = navigator.language || navigator.userLanguage;

  return supportedLocals.includes(userLang) ? userLang : 'en';
}

const i18n = new VueI18n({
  locale: detectBrowserLanguage(),
  messages,
})
