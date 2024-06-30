let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const Computerchoice = () => {
    const option = ["rock", "paper", "seassor"];
    const random_numb = Math.floor(Math.random()*3);
    return option[random_numb];
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "You draw";
    msg.style.background = "yellow";
}

const showWinner = (userWin, userChoice, comp_choice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You Win! ${userChoice} beats ${comp_choice}`;
        msg.style.background = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You lose! ${comp_choice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}

const PlayGame = (userChoice) => {
    console.log(("user Choice = ", userChoice));

    //Generate computer choice -> modular
    const comp_choice = Computerchoice();
    console.log("Computer choice = ", comp_choice);

    if(userChoice === comp_choice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper

           userWin = comp_choice === "paper" ? false : true;

        }else if(userChoice == "paper"){
            //rock, scissor

            userWin = comp_choice === "Scissor" ? false : true;
        }else{
            //rock, paper
            userWin = comp_choice === "rock" ? false : true; 
        }

        showWinner(userWin, userChoice, comp_choice);
    }

};


//User Choice -> Moduler
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        PlayGame(userChoice);
    });
});

