const input = require('readline-sync');

let candidateName;
let question = "";
let correctAnswer = "";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space?",
  "True or false: 5 kilometer == 5000 meters?",
  "(5 + 3)/2 * 10 = ?",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
  "What is the minimum crew size for the ISS?"
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question('What is your name? ');
}

function askQuestion() {
  for(let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i] + " ");
  }
}

function gradeQuiz(candidateAnswers) {
  for(let i = 0; i < candidateAnswers.length; i++) {
    console.log(`Question: ${questions[i]}, Your answer: ${candidateAnswers[i]}, Correct answer: ${correctAnswers[i]}`)
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome, " + candidateName + ".");
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};