//function to check if correct answer was selected
// const onClickChoice = (option, answer) => {
//   if (option === answer){
//     score++
//   } else {
//     timeLeft -= 5
//   }
// }
// document.getElementById('answer').innerText = score
// document.getElementById('timer').innerText = timer

// if (question === quiz.length -1){
//   question++
//   renderQuestion()
// }

for (let = 0; i < quiz.length; i++) {
  let btnAnswer1 = document.createElement(btn1)
  btnAnswer1.className = 'option'
  btnAnswer1.textContent = quiz[i].option
  document.getElementById('answer1')
  append(btnAnswer1)
}

document.getElementById
  // let renderQuestion = () => {


    // document.getElementById('question').innerHTML = `
    // <button onclick="onClickOption('${quiz[question].option[0]}', '${quiz[question].JSON.stringify(answer)}')" type ="button" class="btn btn-default"> ${quiz[questions].option[0]}</button>`
  }