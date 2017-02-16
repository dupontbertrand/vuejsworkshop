new Vue ({
  el: '#app',

  data: {
    titre: 'Découverte',
    message: 'Présentation rapide de Vue.js',
    persons: ['Bertrand', 'Ivan', 'Wilfried', 'Yoann', 'Ophélie', 'GuillaumeG', 'GuillaumeL', 'Ahrry', 'Robin', 'Romain'],
    personText: '',
    success1: true
  },

  methods: {
    addPerson: function () {
      this.persons.push(this.personText),
      this.personText = ''
    },
    sortPerson: function () {
      this.persons.sort()
    },
    changestate: function () {
      if (this.success1 === true) {
      this.success1 = false
      this.state1 = 'false'
      }
      else {
      this.success1 = true
      this.state1 = 'true'
      }
    }
  }

})
