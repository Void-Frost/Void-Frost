var wins = 0
var losses = 0
var ties = 0
function playGame(userInput){
var computerChoice=getComputerChoice()
console.log("Player choice: "+userInput+" Computer Choice: "+computerChoice)
 console.log(determinewinner(userInput,computerChoice))
 var winner = determinewinner(userInput,computerChoice)
 document.getElementById("winner").innerHTML="Winner: "+winner
 document.getElementById("pcchoice").innerHTML="Computer choice: "+computerChoice
 if (winner.toLowerCase()=="user won"){
  wins=wins+1
 document.getElementById("wins").innerHTML="Wins: "+wins
 }
 else if (winner.toLowerCase()=="user lost"){
  losses=losses+1
 document.getElementById("losses").innerHTML="Losses: "+losses
 }
 
  else if (winner.toLowerCase()=="tie"){
 ties=ties+1
 document.getElementById("ties").innerHTML="Ties: "+ties
 }
}

function getComputerChoice(){
  var num = Math.floor(Math.random()*3)
  if (num==0){
    return "Rock"
  }
  else if (num==1){
    return "Paper"
  }
    else if (num==2){
    return "Scissors"
  }
}
function determinewinner(userChoice,computerChoice) {
  if (userChoice.toLowerCase()==computerChoice.toLowerCase()){
    return "Tie"
  }
else if (userChoice.toLowerCase()=="bomb"){
  return "User won"
}
//User Choice: Rock
  else  if (userChoice.toLowerCase()=="rock"){
   if (computerChoice.toLowerCase()=="paper"){
     return "User lost"
   }
    else if  (computerChoice.toLowerCase()=="scissors") {
      return "User won"
    }
  }
//User Choice: Paper
  else  if (userChoice.toLowerCase()=="paper"){
   if (computerChoice.toLowerCase()=="scissors"){
     return "User lost" 
   }
    else if  (computerChoice.toLowerCase()=="rock") {
      return "User won"
    }
  }


//User Choice: Scissors
  else  if (userChoice.toLowerCase()=="scissors"){
   if (computerChoice.toLowerCase()=="rock"){
     return "User lost" 
   }
    else if  (computerChoice.toLowerCase()=="paper") {
      return "User won"
    }
  }
}
