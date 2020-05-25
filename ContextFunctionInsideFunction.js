// context function inside a function
// - Não pega o this global

this.name = 'Nati'

function age(age) {
  this.name = 'Joshua'

  function birthYear(age) {
    this.name = 'Caio'

    const year = 2019 - age
    console.log(this.name, year);
  }

  birthYear(age)

  console.log(this.name);
}

age(25)

console.log(this.name);
