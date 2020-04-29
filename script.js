const start = document.getElementById("start")
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

//button that will start the game
startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () =>{
  currentQuestionIndex++
  setNextQuestion()
})

//start the game
// const startGame = () => { **ASK TUTOR WHY DOESN'T THIS WORK SAME AS BELOW?
function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

// what happens when hit next button
// setNextQuestion = () => {**ASK TUTOR WHY DOESN'T THIS WORK SAME AS BELOW?
function setNextQuestion () {
  //default form to reset page after each question is answered
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// function that will show the next question when 'next button is clicked'
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach (answer => {
    const button = document.createElement('button')
    button.innerText=answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

// select an answer needs to do something
// selectAnswer = () => {
function selectAnswer(e) {
  //function to indicate what answer was clicked on
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  //adding classes to array and body for correct vs incorrect answer
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  //if there are no more questions quiz will stop, if there are unaswered questions it will continue
  if (shuffledQuestions.length > currentQuestionIndex + 1){
  nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//array of quiz questions
const questions = [
  {
    question: 'Where do the tags for JavaScript get inserted on the HTML page?',
    answers: [
      { text: 'the <head> and the <body> sections', correct: true },
      { text: '<head>', correct: false },
      { text: '<body>', correct: false },
      { text: '<footer>', correct: false }
    ]
  },
  {
    question: 'What HTML tag is used for JavaScript?',
    answers: [
      { text: '<js>', correct: false },
      { text: '<script>', correct: true },
      { text: '<scripting>', correct: false },
      { text: '<javascript>', correct: false }
    ]
  },
  {
    question: 'A JavaScript variable is written:',
    answers: [
      { text: 'var personname', correct: false },
      { text: 'variable personname', correct: false },
      { text: 'var personName', correct: true },
      { text: 'v personName', correct: false }
    ]
  },
  {
    question: 'How are comments added in a JavaScript?',
    answers: [
      { text: '//Comment//', correct: true },
      { text: '${Comment}', correct: false },
      { text: '<==Comment ==>', correct: false },
      { text: '!= Comment !==', correct: false }
    ]
  },
  {
    question: 'Arrays are a....',
    answers: [
      { text: 'Collection of commands', correct: false },
      { text: 'Collection of HTML tags', correct: false },
      { text: 'Collection of images', correct: true },
      { text: '!= Comment !==', correct: false }
    ]
  },
]

// startButton.addEventListener('click', startGame)