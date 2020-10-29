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

function janKenPon() {
    let playerPick;  
        function playerChoice(){
            playerPick = prompt("rock,paper or scissors?","rock");
            playerPick = playerPick.toLowerCase();
            if(playerPick == "rock" || playerPick == "paper" || playerPick == "scissors"){
                alert("good choice!"); return playerPick;} 
            else{
                alert("Please pick between 'rock', 'paper' or 'scissors'!"); playerChoice();}  
        }
    playerPick = playerChoice();
    let computerPick = computerPlay();
    if(playerPick == computerPick){ 
        alert(`it's a draw!, both picked ${playerPick}!`)
    }else {
        switch (playerPick) {
            case "rock":
                if(computerPick == "scissors"){
                    alert('you win! rock beats scissors!'); return 'you win! rock beats scissors!'} 
                else {
                    alert('you lose! paper beats rock!'); return 'you lose! paper beats rock!'} 
            break;
        
            case "paper":
                if(computerPick == "rock"){
                    alert('you win! paper beats rock!'); return 'you win! paper beats rock!'} 
                else {
                    alert('you lose! scissors beats paper!'); return 'you lose! scissors beats paper!'}
            break;
            
            case "scissors":
                if(computerPick == "paper"){
                    alert('you win! scissors beats paper!'); return 'you win! scissors beats paper!'} 
                else {
                    alert('you lose! rock beats paper!'); return 'you lose! rock beats paper!'}
            break;
            
            default:
                alert("you fucked up!"); return 'you fucked up!'
            break;
        }
    }
}
function game() {
    let playerScore =0;
    let computerScore =0;
    let rounds=0;
    while(rounds<5){
        switch (janKenPon()) {
            case 'you win! rock beats scissors!':
                playerScore++;
                rounds++;
                break;
        
            case 'you lose! paper beats rock!':
                computerScore++;
                rounds++;
                break;
        
            case 'you win! paper beats rock!':
                playerScore++;
                rounds++;
                break;
        
            case 'you lose! scissors beats paper!':
                computerScore++;
                rounds++;
                break;
        
            case 'you win! scissors beats paper!':
                playerScore++;
                rounds++;
                break;
        
            case 'you lose! rock beats paper!':
                computerScore++;
                rounds++;
                break;
        
            default:
                
                break;
        }
        console.log(playerScore);
        if (playerScore>2) {
            alert(`you win! ${playerScore} to ${computerScore}`); return `you win! ${playerScore} to ${computerScore}`
        } 
        else if (computerScore>2){
            alert(`you lose! ${playerScore} to ${computerScore}`); return `you lose! ${playerScore} to ${computerScore}`
        } else {
            alert("next round!");
        }
    }
    
}