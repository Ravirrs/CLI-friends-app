var readlineSync = require("readline-sync");

var score =0;

function play(question, answer) {
  var userAnswer= readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
 {
  console.log("You were right! ");
  score = score +1;

  } else {
  console.log("You were wrong");

  }
 
  console.log("current score: ", score);
  console.log("________________________________")



}
// the function

var questions =[ {
   question: "where do I live(State)? ",
   answer: "Bihar"
}, {
   question:"My favourite laptop would be? ",
   answer: "Macbook"
},
  {question:"My current phone's brand is ? ",
   answer: "Poco"
   },
   {question:"My current laptop's brand is ? ",
   answer: "Acer"
   }  
   ,
   {question:"My college graduation year is ? ",
   answer: "2018"
   },
   {question:"In which city my college is located ? ",
   answer: "Delhi"
   }

];


for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer)}
