const translateField = document.querySelector("#translate-field button");
const input = document.querySelector("#input-field");
const result = document.querySelector("#result-field");

// Make an alphabet array and equivalent morse alphabet array
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];

const morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "z--..", "/"];

// function to loop over each letter from input, splits them into separate characters
// Find each character's index in alphabet array
// Match that index to morseAlphabet array index
// Join characters back into string
// put that string to result field

const translate = (input) => {
    const lowerCaseInput = input.toLowerCase();
    

    const indexMatch = () => {
        
        for (index = 0; index < input.length; index++){
            let matches = [];
            // const alphabetIndex = alphabet.indexOf(lowerCaseInput[index]);

            for (i = 0; i < i.length; i++) {
                if (alphabet.indexOf(lowerCaseInput[index]) === morseAlphabet[i]) {
                    return matches.push(morseAlphabet[i]);
                };
                
            };
            
        };
            return matches;
        
    };
    console.log(indexMatch());
        
};

translateField.addEventListener("click", (event) => {
    event.preventDefault();
    const userInput = input.value;

    translate(userInput); // call loop function to split userInput into separate characters
});