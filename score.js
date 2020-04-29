
// starting timer
let Timer = 60
// starting question / quiz index
let question = 0
// starting score
let score = 0
//array of quiz questions
  const quiz = [
      {
        qustion: 'Where do the tags for JavaScript get inserted on the HTML page?',
        answer: 'the <head> and the <body> sections',
        option: ['<head>', '<body>', '<footer>', 'the <head> and the <body> sections']
      },
      {
        qustion: 'What HTML tag is used for JavaScript?',
        answer: '<javascript>',
        option: ['<js>', '<javascript>', '<script>', '<scripting>']
      },
      {
        qustion: 'A JavaScript variable is written:',
        answer: 'var personName',
        option: ['var personName', 'variable personname', 'var personname', 'v personName']
      },
      {
        qustion: 'How are comments added in a JavaScript?',
        answer: '//Comment//',
        option: ['${Commnet}', '//Comment//', '<==Comment ==>', '!= Comment !==']
      },
      {
        qustion: 'Arrays are a....',
        answer: 'Collection of data', 
        option: ['Collection of commands', 'Collection of data', 'Collection of HTML tags', 'Collection of images']
      },
    ]

//turn the array in to buttons
function arrayButtons() {
  
}
//check if each answer is correct (true vs false)