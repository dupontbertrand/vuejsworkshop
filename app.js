new Vue ({
  el: '#app',

  data: {
    titre: 'Découverte',
    message: 'Présentation rapide de Vue.js',
    persons: ['Bertrand', 'Ivan', 'Wilfried', 'Yoann', 'Ophélie', 'GuillaumeG', 'GuillaumeL', 'Ahrry', 'Robin', 'Romain'],
    personText: '',
  },

  methods: {
    addPerson: function () {
      this.persons.push(this.personText),
      this.personText = ''
    },
    sortPerson: function () {
      this.persons.sort()
    }
  }

})
