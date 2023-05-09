const prompt = require('prompt-sync')({ sigint: true });

// const name = prompt("What's your name? ");
// const age = prompt("What's your age? ");
// console.log(typeof name)
// console.log(typeof age)

const greet = () => {
    const name = prompt("What's your name? ");
    console.log(`Hello ${name}`)
}
greet()