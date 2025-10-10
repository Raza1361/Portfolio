 let randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const userGuess = parseInt(document.getElementById("guessInput").value);
            const messageElement = document.getElementById("message");
            
            attempts++;

            if (userGuess === randomNumber) {
                messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
                messageElement.className = 'message success';
                document.getElementById("resetButton").style.display = 'inline-block';  
            } else if (userGuess < randomNumber) {
                messageElement.textContent = 'Your guess is too low! Try again.';
                messageElement.className = 'message error';
            } else if (userGuess > randomNumber) {
                messageElement.textContent = 'Your guess is too high! Try again.';
                messageElement.className = 'message error';
            }
        }

        function resetGame() {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById("guessInput").value = '';
            document.getElementById("message").textContent = '';
            document.getElementById("resetButton").style.display = 'none';
        }