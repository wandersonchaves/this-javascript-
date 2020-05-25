'use strict' // É recomendável sempre utilizà-lo

this.name = 'Wanderson' // Variável Global

function sayMyName() {
  console.log(this.name); // Não lê, pois já está dentro do escopo local
}

const user = {
  name: 'Diego', // Variável Local
  sayMyName: function () {
    console.log(this.name); // Conseque ler, pois é um objeto dentro do escopo local
  }
}

user.sayMyName()

console.log(window.name);
