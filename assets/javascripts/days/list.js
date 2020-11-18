const DayList = {
  data: function () {
    return { days: [] }
  },
  template: `
    <div class="day-list">
      <h1>Le calendrier de l'avent des Pochons</h1>
      <div class="intro">
        <p>Lors du premier confinement certains d’entre vous ont reçu une jolie carte postale bien kitch, made in Pochons. Ceux-ci se diront sûrement « Et c’est reparti pour un tour, Vincent et Claudine sont en plein délire créatif enfermés chez eux»… Et bien, ils n’ont pas tort. Mais cette fois, nous avons voulu en faire profiter un maximum de monde et nous avons mis la barre plus haut avec la création d’un calendrier de l’avent !!</p>
        <p>A n’importe quel moment de la journée, connectez-vous à notre site et découvrez ce qui  vous attend derrière la vignette du jour.</p>
        <p>Et gare à vous si vous tentez de tricher et de profiter du contenu avant tout le monde !</p>
        <p>On espère que vous prendrez plaisir à nous suivre dans cette aventure et on vous souhaite de bonnes découvertes !</p>
      </div>
      <day-card v-for="day in days" v-bind:key="day.number" v-bind:day="day"/>
    </div>
  `,
  created() {
    fetch('/api/days')
      .then(handleErrors)
      .then(response => response.json())
      .then(response => {
        this.days = response.days;
      })
      .catch(redirectToErrors)
  }
}
