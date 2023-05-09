// imports at the top
const prompt = require('prompt-sync')();

const welcomeAndGetName = () => {
    console.log("Welcome, user!");
    const name = prompt("What is your name? ");
    console.log(`Greetings, ${name}. Pleasure to meet you!`);
}

const showOptions = () => {
    console.log(`
        Here are your options:
        1 - play a guessing game
        2 - words of wisdom
        3 - cheer you on!
        Any other key - exit
    `)
    const select = prompt("Select 1, 2, or 3: ")
}

// Primary runner function
const main = () => {
    welcomeAndGetName();
    showOptions();
}

main();