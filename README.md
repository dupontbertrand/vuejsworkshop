## Decouverte de vue.js

Liens utiles pour la présentation :

[Documentation complète et officielle](https://vuejs.org)
[Plugins utiles et ressources diverses](https://github.com/vuejs/awesome-vue#libraries--plugins)
[React vs Vue](http://www.stefankrause.net/js-frameworks-benchmark5/webdriver-ts/table.html)
[Interview d'Evan You par "Open-source github"](https://github.com/open-source/stories/yyx990803)
[Interview d'Evan You par betweenthewires](https://betweenthewires.org/between-the-wires-evan-you-cb56660bc8a4#.b3lapwjug)
[Evan You répond à plusieurs questions concernant l'écosystème de Vue (Jobs, cas d'utilisation par les entreprises, trends...)](https://www.quora.com/How-popular-is-VueJS-in-the-industry)
[Vue.js best of MVVM ?](https://blog.lesieur.name/vuejs-versus-angular-versus-react-versus-les-autres-mvvm/)
[Comparaison Vue.js avec d'autres FW sur leur propre site](https://vuejs.org/v2/guide/comparison.html)
[Vue.js par la communauté laravel](http://laravel.sillo.org/vue-js/)

1. Englober d'un élément avec un ID (ici "app")

2. Appel d'une variable : `{{ nomdelavariable }}` (ici "message")

3. Initialiser Vue (dans app.js ici):

  * `new Vue({})`

  * En parametre un tableau d'options

4. Premier parametre : `el:` (element), qui va indiquer sur quel(s) element(s) on va greffer Vue.js

  * Ici, on indique `'#app'` pour le greffer sur notre div avec l'ID `app`

5. Pour définir la variable (comme `{{ message }}` ici) :

6. Nouvelle clé, qui s'appelle `data:` qui va contenir toutes les variables que l'on souhaite injecter dans notre vue

7. Ici par exemple on peut écrire `message: 'Salut les gens'`  

  * Cette ligne va donc render à la vue la valeur de notre variable message : "Salut les gens"

8. **Cela ne marche pas pour les attributs (href par exemple: `href='{{ link }}'` PAS POSSIBLE**

  * Il faudra utiliser le `v-bind:href` ou le raccourci `:href` **et on lui mettra la valeur link directement** `<a href :link="link">Osef</a>`

9. Cela est pour **tout les attributs**, le v-bind: (exemple title pour un link : `:title="message"` : La valeur du title de ce link sera la valeur de la variable `message`)

10. Il est possible de concatener dans les links comme cela : `<a :href="link + '/dunno'"`

####Conditions v-if/v-else

1. Création d'une autre variable (ici `success`), avec comme valeur `true`
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
2. Sur le bouton (ici un button bootstrap prévu à cet effet) on applique un `v-on:` puis on lui dit quel événement écouter, ici `click` et enfin le nom de la méthode à exécuter. Soit ici `v-on:click="close"`
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

## 02 - L'instance

1. On stocke tout le `new Vue` dans une variable (ici `vm`) soit `let vm = ` pour nous permettre en console de l'inspecter avec un simple `vm`
2. Vue a un systeme de **_guetteur_** et de **_setteur_**
3. **C'est une des limitations de Vue.js, comme le montre l'exemple on ne peut pas changer ici le tableau `persons` en voulant accéder à l'index [0] par exemple, on passe par un .push('valeur')**
 * Soit `this.persons2.push("test")` et non **pas** `this.persons2[0] = "test"` (Voir à utiliser le `assign` aussi ..?)
4. Autre limitation : On ne peut pas rajouter de variable au fur et à mesure sans les avoir déclaré dans notre `data:`
5. On peut accéder à notre html via `vm2.$el` (ou `vm2` est ici l'ID de l'élément Vue.js)

####A quel moment binder quelque chose sur notre élément ?

Voir l'image ci-dessous pour le diagramme :

Explication :
**NOUS POUVONS NOUS GREFFER SUR CHAQUE METHODE (en rouge ici)**
`  mounted:
    function() {
      console.log('test mounted')
    },`

**Quand on monte un element avec `mounted:` il faut penser à le supprimer avec `destroyed:` sinon celui ci continue de s'effectuer et peut ralentir l'app**

1. Vue.js ne peut se greffer que sur les propriétés présentes dans `data:`
2. Pas d'accés à un tableau via l'index
3. Pas la possibilité de créer de nvlles propriétés au sein d'un objet
4. Dans le lifecycle : `mounted` nous permet de savoir quand est-ce que notre élément est réellement disponible et est présent dans le DOM
5. `destroyed` nous permet de supprimer "réellement" les écouteurs montés

## 03 - Propriétés combinées et watchers

Voir les exemples dans le dossier 03 pour bien comprendre pourquoi utiliser `computed:` est beaucoup plus intéressant en terme de performances. En effet en utilisant `computed:` nous appellerons notre `function` qui nous intéresse **uniquement** lorsque celle-ci est changée, contrairement à `methods:` qui fera un appel à toutes les modifications pour vérifier si notre model a été changé.

De plus, les propriétées `computed:` peuvent prendre un `get:` et un `set:` comme ici dans l'exemple où l'on dira que notre fullname est **un objet** qui aura un guetteur et un setteur, ce qui nous permettra de changer sa valeur mais aussi d'afficher celle-ci de manière simple.

####Watchers

`watch:` est trés utile:

` watch: {
    fullname: function (value) {
      console.log('Watch ' + value)
    }
  }`

  Celui-ci nous permet de savoir quand une variable est modifiée, trés utile en term de perfs aussi si l'on veut (par exemple), un comportement différent pour un champ et ne pas appeler de recherche AJAX sur celui-ci.

## 04 - Les directives

Les directives sont par exemple : `v-model v-on v-click v-if v-bind`, attributs spéciaux pour comportements particuliers.

Nous pouvons créer les nôtres

####Modifiers :

Les modifiers sont des "attributs" que l'on rajoute sur (par exemple) nos `@click` => `prevent stop self capture`
Ils nous permettent de ne pas forcément passer par notre app.js pour des choses "basiques"
Autre exemple pour un input text : `.lazy` ou le changement se fera une fois que le focus est retiré.
Pour les autres exemple voir l'index 04 ainsi que pour le `onkeyup` etc..

####Créer ses directives :

On les créer en "inventant" une directive par exemple : `v-salut="message9"` puis nous déclarons dans app.js de manière **globale** :

`Vue.directive('salut', {
  bind: function(el, binding, vnode) {
    console.log('Notre directive salut est bind' + el + binding)
    el.value = binding.value
  }
})`

Nous pouvons également travailler sur le `bind:` et le `update:` :

`Vue.directive('salut', {
  bind: function(el, binding, vnode) {
    console.log('Notre directive salut est bind' + el + binding)
    el.value = binding.value
  },
  update: function(el, binding, vnode, oldvnode) {
    console.log('Directive salut update')
  }
})`

Enfin, nous pouvons concilier les deux car dans cet exemple nous voulons que tout réagisse ensemble, que le deuxieme input avec le model message11 change ET la valeur de l'input ET l'affichage de notre variable :

`let salut3 = function(el, binding) {
    console.log('Notre directive salut3 est bind' + el + binding + ' OU celle ci a été appelée')
    el.value = binding.value
}`

Puis nous la déclarons dans notre composant Vue :

` directives: {
    salut3: salut3
  },`

  **Les directives sont trés utiles mais les cas d'utilisations se révelent relativement complexe** __Doc doc doc doc__

## 05 - Les filtres

Les filtres s'utilisent en mettant un pipe | par exemple `{{ message | filtre }}`
On le déclare hors de notre composant de cette facon :
`Vue.filter('capitalize', function (value) {
  return value.toUpperCase()
  })`

Nous pouvons le déclarer hors de notre composant mais ne l'appeller que dans un de celui-ci :
`let dunno = function (value) {
  return value.toLowerCase()
}`

`let vm5 = new Vue ({
  el: '#app5',

  filters: {dunno},`
