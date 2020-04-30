// calling the elements
const start = document.getElementById("start-btn")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const answerA = document.getElementById("A")
const answerB = document.getElementById("B")
const answerC = document.getElementById("C")
const answerD = document.getElementById("D")
const counter = document.getElementById("counter")
const timeGage = document.getElementById("timeGage")
const progress = document.getElementById("progress")
const scoreDiv = document.getElementById("scoreContainer")

//array of quiz questions
  const quizArray = [
    {
      question: "What is JavaScript used for?",
      answerA: "To create responsive and interactive elements for webpages",
      answerB: "To visually style the page, including: colors, layouts and fonts",
      answerC: "To create pages that are dispalyed on the World Wide Web",
      answerD: "To define the content of web pages",
      correct: "A"
    },
    {
      question: "What HTML tag is used for JavaScript?",
      answerA: "<javascript>",
      answerB: "<js>",
      answerC: "<script>",
      answerD: "<scripting>",
      correct: "C"
    },
    {
      question: "How are comments added in a JavaScript?",
      answerA: "${Commnet}",
      answerB: "//Comment//",
      answerC: "<==Comment ==>",
      answerD: "!= Comment !==",
      correct: "B"
    },
    {
      question: "Arrays are a....",
      answerA: "Collection of commands",
      answerB: "Collection of data",
      answerC: "Collection of HTML tags",
      answerD: "Collection of images",
      correct: "B"
    },
    {
      question: "A JavaScript variable is written:",
      answerA: "v personName",
      answerB: "var personname",
      answerC: "variable personname",
      answerD: "var personName",
      correct: "D"
    }
    ]

// making variables
const lastQuestion = quizArray.length -1
let runningQuestion = 0
let count = 0
const questionTime= 10
const gageWidth = 150
const gageUnit = gageWidth / questionTime
let TIMER
let score = 0

//buidling the question and answer section
function askQuestion(){
  //q references quiz array
  let q = questions[runningQuestion]

  question.innerHTML = "<p>"+ q.question + "</p>"
  answerA.innerHTML = q.answerA
  answerB.innerHTML = q.answerB
  answerC.innerHTML = q.answerC
  answerD.innerHTML = q.answerD
}

start.addEventListener("click", startQuiz){
  console.log('start')
}

//buidling startQuiz function
function startQuiz(){
  //hiding the quiz question
  start.style.display="none"
  //showing the quiz question
  askQuestion()
  quiz.style.display ="block"
  //buidling out timer
  showProgress()
  showCounter()
  TIMER = setInterval(showCounter, 1000)
}

//building a for loop to cycle through array
  for(let qIndex = 0; qIndex <= quiz.length; qIndex++){
    progress.innerHTML += "<div class='progress' id="+ qIndex +"></div>"
  }

//buidling timer
function showCounter(){
  if(count <= questionTime){
    counter.innerHTML = count
    timeGage.style.width = count * gageUnit + "px"
    count++ 
  }else{
    count = 0
    if (runningQuestion < lastQuestion){
      runningQuestion++
      askQuestion()
    }else{
      clearInterval(TIMER);
      showScore();
    }
  }
}

//check if each answer is correct
function checkAnswer(answer){
  if (answer === questions[runningQuestion].correct){
    score++
    answerIsCorrect()
  }else{
    answerIsWrong()
  }
  count = 0
  if(runningQuestion < lastQuestion){
    runningQuestion++
    askQuestion()
  }else{
    clearInterval(TIMER)
    showScore()
  }
}

// answer is right
function answerIsCorrect(){
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0"
}

// answer is wrong
function answerIsWrong(){
  alert("Incorrect Answer")
  document.getElementById(runningQuestion).style.backgroundColor = "#f00"
}

// showing the score
function showScore(){
  scoreDiv.style.display="block",
}

//Local Storage, but it isn't linking
document.getElementById('submitScore').addEventListener('click', (event) => {
  event.preventDefault()
  let user = {
    Score: document.getElementById('userScore').value,
    Name: document.getElementById('name').value
  }
})
if (localStorage.getItem('user')) {
  let user = JSON.parse(localStorage.getItem('user'))
  document.getElementById('user').innerHTML = `
        <h2>Score: ${user.score}</h2>
        <h2>Name: ${user.email}</h2>
        `
}