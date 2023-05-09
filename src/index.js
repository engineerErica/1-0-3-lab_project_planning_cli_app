// imports at the top
const prompt = require('prompt-sync')();

// Primary runner function
const main = () => {
    const name = prompt("Hello. What is your name? ")
    console.log(`Greetings, ${name}.`)
}

main();