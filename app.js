new Vue ({
  el: '#app',

  data: {
    titre: 'Découverte'
    message: 'Salut les gens',
    message2: "Test changement à l'input",
    link1: 'http://www.google.fr',
    link2: 'http://www.twitter.fr',
    success1: true,
    success2: true,
    persons: ['Bertrand', 'Ivan', 'Wilfried', 'Yoann', 'Ophélie', 'GuillaumeG', 'GuillaumeL', 'Ahrry', 'Robin', 'Romain'],
    state1: 'true',
    state2 : 'open',
    checkbox: false,
    cls: 'alert-success',
    state: 'Décochée'
  },

  methods: {
    changestate: function () {
      if (this.success1 === true) {
      this.success1 = false
      this.state1 = 'false'
      }
      else {
      this.success1 = true
      this.state1 = 'true'
      }
    },
    close: function () {
      this.success2 = false
      this.state2 = 'close'

    },
    open: function () {
      this.success2 = true
      this.state2 = 'open'

    },
  }

})
