// this na arrow function
// - Pega o this do escopo anterior

this.name = 'Nati'

const age = (age) => {
  this.name = 'Caio'

  const birthYear = (age) => {
    const year = 2019 - age
    console.log(this.name, year);
  }

  birthYear(age)
}

const dev = {
  sayMyName: () => {
    this.name = 'Enzo'
    console.log(this.name);
  }
}

dev.sayMyName()