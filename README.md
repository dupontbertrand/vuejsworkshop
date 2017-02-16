## Decouverte de vue.js

Liens utiles pour la présentation :

[Documentation complète et officielle](https://vuejs.org)

[Plugins utiles et ressources diverses](https://github.com/vuejs/awesome-vue#libraries--plugins)

[Benchmark all FW js](http://www.stefankrause.net/js-frameworks-benchmark5/webdriver-ts/table.html)

[Interview d'Evan You par "Open-source github"](https://github.com/open-source/stories/yyx990803)

[Interview d'Evan You par betweenthewires](https://betweenthewires.org/between-the-wires-evan-you-cb56660bc8a4#.b3lapwjug)

[Evan You répond à plusieurs questions concernant l'écosystème de Vue (Jobs, cas d'utilisation par les entreprises, trends...)](https://www.quora.com/How-popular-is-VueJS-in-the-industry)

[Vue.js best of MVVM ?](https://blog.lesieur.name/vuejs-versus-angular-versus-react-versus-les-autres-mvvm/)

[Comparaison Vue.js avec d'autres FW sur leur propre site](https://vuejs.org/v2/guide/comparison.html)

[Vue.js par la communauté laravel](http://laravel.sillo.org/vue-js/)

[Point sur 2016 et attentes de 2017](https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3#.osqnveujl)

[Liste de projets, de websites et d'entreprises utilisat Vue.js](https://github.com/vuejs/awesome-vue#open-source)

[Why we choose vue ? By GitLab](https://about.gitlab.com/2016/10/20/why-we-chose-vue/)




### Démarrage rapide

1. Englober d'un élément avec un ID (ici "app")

2. Appel d'une variable : `{{ nomdelavariable }}` (ici "message")

3. Initialiser Vue (dans app.js):

  * `new Vue({})`

  * En parametre un tableau d'options

4. Premier parametre : `el:` (element), qui va indiquer sur quel(s) element(s) on va greffer Vue.js

  * Ici, on indique `'#app'` pour le greffer sur notre div avec l'ID `app`

5. Pour définir la variable (comme `{{ message }}` ici) :

6. Nouvelle clé, qui s'appelle `data:` qui va contenir toutes les variables que l'on souhaite injecter dans notre vue

7. Ici par exemple on peut écrire `message: 'Rapide découverte'`  

  * Cette ligne va donc render à la vue la valeur de notre variable message : "Salut les gens"

8. **Cela ne marche pas pour les attributs (href par exemple: `href='{{ link }}'` PAS POSSIBLE**

  * Il faudra utiliser le `v-bind:href` ou le raccourci `:href` **et on lui mettra la valeur link directement** `<a href :link="link">Osef</a>`

9. Cela est pour **tout les attributs**, le v-bind: (exemple title pour un link : `:title="message"` : La valeur du title de ce link sera la valeur de la variable `message`)

10. Il est possible de concatener dans les links comme cela : `<a :href="link + '/dunno'"`

####Conditions v-if/v-else

1. Création d'une autre variable (`success`), avec comme valeur `true`
 * Et dans la view une alert success bootstrap classique
2. Dans la vue est dans cette div alert nous mettons un `v-if="success"` qui aura pour effet d'afficher cette div uniquement si la variable success a une valeur à `true` ou similaire
3. Création d'une autre div alert (avec `danger`) et nous lui mettons l'attribut `v-else` qui indiquera quoi faire si la variable success est à false
 * Le v-else ici est similaire à `v-if="!success"`
4. *le v-show appliquera juste un display: none mais celui sera visible dans le html en console alors que le v-if le supprime*

####Boucles

1. Dans app.js nous créons une variable `persons:` qui a pour valeur un tableau d'élements
2. Nous créons une `ul` et une `li` avec le `v-for:` sur cette li où l'on précise ce que l'on veut, ici le `person in persons` dit "Pour chaque personne (person) dans la variable persons", et à l'intérieur du `<li> </li>` nous appelons `{{ person }}`. Cela permettra de boucler sur chaque element du tableau persons et à chaque fois d'afficher la valeur.

####L'attribut v-on et les methods

1. Exemple pour ajouter un bouton close sur nos `alert`
2. Sur le bouton (un button bootstrap prévu à cet effet par ex.) on applique un `v-on:` puis on lui dit quel événement écouter, `click` et enfin le nom de la méthode à exécuter. Soit `v-on:click="close"`
3. Dans app.js on définit cette méthode, pas dans data mais dans `methods:` Soit :

`methods: {
  close: function(){
    this.success = false
  }
  },`

* Le **this** nous permet d'accéder à **n'importe quelle** propriété présente dans `data:`
4. Le raccourci pour le `v-on` est le `@` soit `@click="close"`

####v-model

1. Ici pour que la valeur d'un texte change avec un input :
2. Nous créons un input avec la valeur `v-model="nomdumodel"`
3. Puis nous l'appelons dans notre vue également à l'endroit souhaité comme une variable autre `{{ nomdumodel }}`
4. Enfin dans le app.js nous le déclarons dans les `data:` : `nomdumodel: "Dunno"`

1. Cela nous permet (par exemple) d'afficher sous l'une des alertes son statut actuel:
 * En mettant une variable sous celle-ci
 * en la déclarant dans nos `data:`
 * dans la fonction `close` de rajouter losque l'alerte se ferme `this.status = "Fermée"`

1. Dans le cas d'une checkbox **exemple** :
 * `<input type="checkbox" v-model="state" :true-value="'Cochée'" :false-value="'Décochée'">
       <p>
         {{ state }}
       </p>`
* Et on déclare dans app.js la variable avec le statut initial : `state: 'Décochée'`


## Les filtres

Les filtres s'utilisent en mettant un pipe | par exemple `{{ message | filtre }}`
On le déclare hors de notre composant de cette facon :
`Vue.filter('capitalize', function (value) {
  return value.toUpperCase()
  })`

Nous pouvons le déclarer hors de notre composant mais ne l'appeler que dans un de celui-ci :
`let dunno = function (value) {
  return value.toLowerCase()
}`

`let vm5 = new Vue ({
  el: '#app5',

  filters: {dunno},`
