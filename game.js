Object.defineProperty(window, 'game', {
    get: function () {
        console.log("hello would you like to play a game");
        let userInput = prompt();
        if (userInput = "yes") {
            console.log("Good choice! lets play wordle!");
            let url = "https://random-word-api.herokuapp.com/word?length=5";
 
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Failed to fetch data");
                    }
                })
                .then(data => {
                    console.log(data[0]);
 
 
 
 
                    let word = data[0]; // Assuming 'apple' is the word to guess
                    let answer = ["_", "_", "_", "_", "_"]; // Array to store correct guesses
                    let attempt = 1; // Attempt counter
 
                    while (true) {
                        console.log(`What word do you think it is (five letters)? You're on try ${attempt}`);
                        let userWord = prompt("Enter your guess: ");
 
                        if (userWord.length !== 5) {
                            console.log("Has to be five letters");
                            continue;
                        }
 
                        let x = 0;
 
                        for (let i = 0; i < word.length; i++) {
                            let letter = word[i];
 
                            switch (true) {
                                case userWord[i] === letter:
                                    answer[i] = letter;
                                    console.log(`${letter} is correct`);
                                    x++;
                                    break;
 
                                case word.includes(userWord[i]):
                                    console.log(`${userWord[i]} is close`);
                                    break;
 
                                default:
                                    console.log(`${userWord[i]} is incorrect`);
                                    break;
                            }
                        }
 
                        if (x === 5) {
                            console.log(`You did it on try ${attempt}! The word is ${word}`);
                            break;
                        } else {
                            console.log("Close");
                            attempt++;
                        }
                    }
 
 
 
 
 
 
                })
                .catch(error => {
                    console.error("Error:", error);
                });
 
 
        }
 
 
    }
});