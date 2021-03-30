const translateField = document.querySelector("#translate-field button");
const input = document.querySelector("#input-field");
const result = document.querySelector("#result-field");

// Make an alphabet array and equivalent morse alphabet array
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];

const morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "z--..", " "];

// Function that -> Takes input from input-field and add it to result field
translateField.addEventListener("click", (e) => {
    const userInput = input.value;
    let output = "";

// loops over each letter from userInput, splits them into separate characters
    const loop = (input) => {
        for (index = 0; index < input.length; index++){
            console.log(input.charAt(index));
        };
    };

// Passes each separate character through alphabet array to find index number using iterator

// Matches alphabet index to morse index 

    loop(userInput); // call loop function to split userInput into separate characters

    // concatenate each separate character back into string


    // Have output be equal to concatenated string

    // result.innerHTML = userInput;
    result.innerHTML = output; // output is put into result field
});