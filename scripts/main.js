const body = document.querySelector("body");;
const divBtn = document.createElement("div");
const divRes = document.createElement("div");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const scorePlayer = document.createElement("p");
const scoreComputer = document.createElement("p");
const scorePlayerT = document.createElement("p");
const scoreComputerT = document.createElement("p");
const rounds = document.createElement("p");
const playA = document.createElement("p");
const testbtn = document.querySelector("button");
function assignr(name,id,parent,text){
    name.setAttribute("id",id);
    name.textContent = text;
    parent.appendChild(name);
}
let roundsV= 1;
assignr(divBtn,"divBtn",body);
assignr(divRes,"divRes",body);
assignr(btnRock,"Rock",divBtn,"Rock");
assignr(btnPaper,"Paper",divBtn,"Paper");
assignr(btnScissors,"Scissors",divBtn,"Scissors");
assignr(scorePlayerT,"scorePlayerT",divRes,"Player:");
assignr(scorePlayer,"scorePlayer",divRes,0);
assignr(rounds,"rounds",divRes,`round ${roundsV}`);
assignr(playA,"playA",divRes,"");
assignr(scoreComputerT,"scoreComputerT",divRes,"Computer:");
assignr(scoreComputer,"scoreComputer",divRes,0);


btnRock.addEventListener("click", () =>{
    if(rounds.textContent == "You won!" || rounds.textContent == "You lose!") {
        scorePlayer.textContent = 0;
        scoreComputer.textContent = 0;
        roundsV = 1;
        rounds.textContent = `round ${roundsV}`;
        playA.textContent =" ";
        janKenPon("rock");
    }else {janKenPon("rock")}});
btnPaper.addEventListener("click", ()=>{
    if(rounds.textContent == "You won!" || rounds.textContent == "You lose!") {
        scorePlayer.textContent = 0;
        scoreComputer.textContent = 0;
        roundsV = 1;
        rounds.textContent = `round ${roundsV}`;
        playA.textContent =" ";
        janKenPon("paper");
    }else {janKenPon("paper")}});
btnScissors.addEventListener("click", ()=> {
    if(rounds.textContent == "You won!" || rounds.textContent == "You lose!") {
        scorePlayer.textContent = 0;
        scoreComputer.textContent = 0;
        roundsV = 1;
        rounds.textContent = `round ${roundsV}`;
        playA.textContent =" ";
        janKenPon("scissors");
    }else {janKenPon("scissors")}});
function computerPlay() {
function random() {
return Math.floor(Math.random()*3+1)
}
let janK = random();
switch (janK) {
    case 1:
    return "rock";    
        break;
    case 2:
    return "paper";
        break;
    case 3:
    return "scissors";
        break;
    default:
        break;
    }
}
function winCall(){
    let player = parseInt(scorePlayer.textContent);
    let computer = parseInt(scoreComputer.textContent);
    if(roundsV == 6 || player == 3 || computer == 3){
        if(player>computer){rounds.textContent = "You won!";
    playA.textContent= "play again?";}
        else{ rounds.textContent = "You lose!";
    playA.textContent= "play again?";};
    } else{ rounds.textContent = `round ${roundsV}`;}
}
function janKenPon(playerPick) { 
    let computerPick = computerPlay();
    if(playerPick == computerPick){ 
        alert(`it's a draw!, both picked ${playerPick}!`)
    }else {
        switch (playerPick) {
            case "rock":
                if(computerPick == "scissors"){
                    alert('you win! rock beats scissors!'); scorePlayer.textContent++; roundsV++;winCall()} 
                else {
                    alert('you lose! paper beats rock!'); scoreComputer.textContent++; roundsV++;winCall()} 
            break;
        
            case "paper":
                if(computerPick == "rock"){
                    alert('you win! paper beats rock!'); scorePlayer.textContent++; roundsV++;winCall()} 
                else {
                    alert('you lose! scissors beats paper!'); scoreComputer.textContent++; roundsV++;winCall()}
            break;
            
            case "scissors":
                if(computerPick == "paper"){
                    alert('you win! scissors beats paper!'); scorePlayer.textContent++; roundsV++; winCall()} 
                else {
                    alert('you lose! rock beats paper!'); scoreComputer.textContent++; roundsV++;winCall()}
            break;
            
            default:
                alert("you fucked up!"); return 'you fucked up!'
            break;
        }
    }
}