const game = ()=>{
    let PlayerScore = 0;
    let ComputerScore = 0;

    const rules = ()=>{
        const rulesButton = document.querySelector(".rules button");
        const rulesImage = document.querySelector(".rule-img");
        const closeImage = document.querySelector(".close");

        rulesButton.addEventListener("click", ()=>{
            rulesImage.classList.add("fadeIn");
        });
        closeImage.addEventListener("click", ()=>{
            rulesImage.classList.remove("fadeIn");
        });
    }

    const startGame = ()=>{
        let StartButton = document.querySelector(".intro button");
        let match = document.querySelector(".match");
        let introScreen = document.querySelector(".intro");

        StartButton.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.remove("fadeOut");
        });
    }

    const playMatch = ()=>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        const computerOptions = ["rock", "paper", "scissors"];


        // Remove animation
        hands.forEach(hand=>{
            hand.addEventListener("animationend", function(){
                this.style.animation = '';
            });
        });

        options.forEach(option=>{
            option.addEventListener("click", function(){

                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;

                const computerNumber = Math.floor(Math.random()*3);
                let computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{ // imges
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                    // Dicision who win
                    dicision(this.textContent, computerChoice);}
                    ,1500);

               

                // Animations
                playerHand.style.animation = "shake-player-hand 1.5s ease";
                computerHand.style.animation = "shake-computer-hand 1.5s ease";
            });
        });


    }

    const updateScore = ()=>{
        const pScore = document.querySelector(".player-score p");
        const cScore = document.querySelector(".computer-score p");
        pScore.textContent = PlayerScore;
        cScore.textContent = ComputerScore;
    }


    const dicision = (playerChoice, computerChoice)=>{
        const winner = document.querySelector(".winner");

        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }

        if(playerChoice === "rock"){
            if(computerChoice === "paper"){
                winner.textContent = "Computer win";
                ComputerScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player win";
                PlayerScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer win";
                ComputerScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player win";
                PlayerScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer win";
                ComputerScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player win";
                PlayerScore++;
                updateScore();
                return;
            }
        }
    }

    // RunAll
    rules();
    startGame();
    playMatch();
}

game();