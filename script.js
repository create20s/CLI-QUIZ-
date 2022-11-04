var readlineSync = require('readline-sync');
var score=0;
var userAnswer= readlineSync.question('May I have your name? ');
console.log("welcome to the first CLI QUIZ "+userAnswer);


// using function

function play(question,answer){
  var userAnswer= readlineSync.question(question);
  if(userAnswer== answer){
    console.log("right");
    score++;
     console.log(score);
  }
  else{
    console.log("wrong");
    score--;
     console.log(score);
  }
}

// Array of Objects

var questions=[{
  question: "where do i live ",
  answer: "tripura"
  
},
{
  question: "my favorite car ",
  answer: "audi"
},
   { question: "my favorite food ",
    answer: "biriyani"}
              ];

// call function with new variable questions

for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}