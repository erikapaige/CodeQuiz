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
  const quiz = [
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

//

//turn the array in to buttons
function arrayButtons() {
  
}
//check if each answer is correct (true vs false)