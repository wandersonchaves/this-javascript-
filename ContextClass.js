// Context class
// - O this está dispon ível por toda a classe.

class Alo {
  constructor() {
    this.hello = 'Olá'
  }

  sayHello() {
    console.log(this.hello);
  }
}

const hello = new Alo();

hello.sayHello()