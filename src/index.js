// imports at the top
const prompt = require('prompt-sync')();

let userName

const welcomeAndGetName = () => {
    console.log("Welcome, user!");
    userName = prompt("What is your name? ");
    console.log(`Greetings, ${userName}. Pleasure to meet you!`);
}

const showOptions = () => {
    console.log(`
        Here are your options:
        1 - play a guessing game
        2 - words of wisdom
        3 - cheer you on!
        Any other key - exit
    `)
}

const getUserNumber = () => {
    const userInputOption = Number(prompt("Select 1, 2, or 3: ").trim());
}

const handleGuessingGame = () => {
    
}

const event = () => {
    const option = getUserNumber();
    if (option === 1) {
        handleGuessingGame();
    // } else if (option === 2) {
  // handleWordsOfWisdom() // doesn't exist yet
    // } else if (option === 3) {
  // handleCheer // doesn't exist yet
}

const sayGoodbye = () => {
    console.log(`Goodbye, ${userName}`)
}

// Primary runner function
const main = () => {
    welcomeAndGetName();
    showOptions();
    getUserNumber();
    handleGuessingGame();
    sayGoodbye();
}

main();