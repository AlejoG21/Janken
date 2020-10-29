function computerPlay() {
function random() {
return Math.floor(Math.random()*3+1)
}
let janK = random();
console.log(janK)
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

function janKenPon() {
let playerPick;  
    function playerChoice(){
        playerPick = prompt("rock,paper or scissors?","rock");
        playerPick = playerPick.toLowerCase();
        if(playerPick == "rock" || playerPick == "paper" || playerPick == "scissors"){
            alert("good choice!")} 
        else{
            alert("Please pick between 'rock', 'paper' or 'scissors'!"); playerChoice();}  
    }
playerPick = playerChoice();
let computerPick = computerPlay();
console.log(playerPick);
console.log(computerPick);
    if(playerPick == computerPick){ 
        alert(`it's a draw!, both picked ${playerPick}!`)
    }else {
        switch (playerPick) {
            case "rock":
                if(computerPick == "scissors"){
                    alert('you win! rock beats scissors!') return 'you win! rock beats scissors!';} 
                else {
                    alert('you lose! paper beats rock!') return 'you lose! paper beats rock!';} 
            break;
        
            case "paper":
                if(computerPick == "rock"){
                    alert('you win! paper beats rock!') return 'you win! paper beats rock!';} 
                else {
                    alert('you lose! scissors beats paper!') return 'you lose! scissors beats paper!';}
            break;
            
            case "scissors":
                if(computerPick == "paper"){
                    alert('you win! scissors beats paper!') return 'you win! scissors beats paper!';} 
                else {
                    alert('you lose! rock beats paper!') return 'you lose! rock beats paper!';}
            break;
            
            default:
                alert("you fucked up!") return 'you fucked up!';
            break;
        }
    }
}
function game() {
for (let i = 0; i < 6; i++) {

}