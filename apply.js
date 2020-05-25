// function.apply(this, [arg1, arg2])
// retorna o this do contexto que eu enviar

// sayMyName.apply(this, [18])

function multiply() {
  const args = Array.from(arguments)
  return args.reduce((acc, item) => {
    return acc * item
  }, 1)
}

const total = multiply.apply(this, [2, 2, 3, 2])
console.log(total);