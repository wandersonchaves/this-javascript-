// Context inside a method
// - Não pega o this global, somente do objeto.

this.name = 'Paulo'

const dev = {
  name: "Cleber",
  sayMyName: function () {
    console.log(this.name); // Cleber
  }
}

dev.sayMyName()