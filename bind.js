this.name = 'Kamila'
this.age = 25

function sayMyName(age) {
  this.age = age
  console.log(this.name, this.age);
}

const dev = {
  name: 'Isadora',
  age: 35,
  sayMyAge: function () {
    console.log(this.name, this.age);
  }
}

// bind = ligar
// retorna a função chamada, porém ligada ao contexto que lhe foi passado
// bound function

const age = dev.sayMyAge.bind(dev)

age()