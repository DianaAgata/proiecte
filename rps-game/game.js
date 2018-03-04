(function(){
var arr = ['rock', 'paper', 'scissors'];
var userChoice = arr[Math.floor(Math.random() * 3)];
console.log('User Choice : ' + userChoice);
var computerChoice = arr[Math.floor(Math.random() * 3)];
console.log('Computer choice : ' + computerChoice);

function play() {
    var rock = arr[0];
    var paper = arr[1];
    var scissors = arr[2];

    if (userChoice === computerChoice) {
        return 'The result is a tie!';
    } else if(userChoice == rock && computerChoice == scissors || userChoice == paper && computerChoice == rock || userChoice == scissors && computerChoice == paper){
        return 'User wins'
    }else{
        return 'Computer wins'
    }
    
}

console.log(play(userChoice, computerChoice));
}()); 
    
    
    