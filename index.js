'use strict';

const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions;
let currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame);

function startGame(){
  console.log('Started');
  startButton.classList.add('hide');
  shuffledQestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
 showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function sshowQuestion(question) {
  questionElement.innerText = question.question
}



function selectAnswer() {


}

const quizQuestions = [
  {
    question: '',
    answers: [
      {}
      {}
      {}
      {}
    ]
  }
]