function computerPlay() {
function random() {
return Math.floor(Math.random()*3+1)
}
let janK = random();
console.log(janK)
if (janK==1){
return "rock";} 
else if (janK==2) { return "paper";}
else {return "scissors"}
}

function janKenPon() {
let playerPick = prompt("rock,paper or scissors?","rock");
let computerPick = computerPlay();
if(playerPick == "rock" || playerPick == "paper" || playerPick == "scissors"){
    alert("good choice!")} 
else{
    alert("Please pick between 'rock', 'paper' or 'scissors'!"); playerPick= prompt("rock,paper or scissors?","rock");}
console.log(playerPick);
console.log(computerPick);
    if(playerPick == computerPick){ 
        alert(`it's a draw!, both picked ${playerPick}!`)
    }else {
        switch (playerPick) {
            case "rock":
                if(computerPick == "scissors"){
                    alert(`you win! rock beats scissors!`)} 
                else {
                    alert('you lose! paper beats rock!')} 
            break;
        
            case "paper":
                if(computerPick == "rock"){
                    alert(`you win! paper beats rock!`)} 
                else {
                    alert('you lose! scissors beats paper!')}
            break;
            
            case "scissors":
                if(computerPick == "paper"){
                    alert(`you win! scissors beats paper!`)} 
                else {
                    alert('you lose! rock beats paper!')}
            break;
            
            default:
                alert("you fucked up!");
            break;
        }
    }
}
