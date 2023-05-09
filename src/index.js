// imports at the top
const prompt = require('prompt-sync')();

const welcome = () => {
    console.log("Welcome, user!");
    const name = prompt("What is your name? ")
    console.log(`Greetings, ${name}. Pleasure to meet you!`)
}

// Primary runner function
const main = () => {
    const name = welcome()
}

main();