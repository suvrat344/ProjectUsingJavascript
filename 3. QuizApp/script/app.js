const question = [
  {
    'que' : "Which of the following is a markup language?",
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'Javascript',
    'd' : 'PHP',
    'correct' : 'a'
  },
  {
    'que' : "What year was Javascript launched?",
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : 'none of the above',
    'correct' : 'b'
  },
  {
    'que' : "Which does CSS stands for?",
    'a' : 'Hyperlink Markup Language',
    'b' : 'Cascading Style Sheet',
    'c' : 'Javascript Object Notation',
    'd' : 'none of the above',
    'correct' : 'b'
  }
]

let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const quesbox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.option');
const loadQuestion = () => {
  if(index == total){
    return endQuiz();
  }
  reset();
  const data = question[index];
  quesbox.innerHTML = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerHTML = data.a; 
  optionInputs[1].nextElementSibling.innerHTML = data.b; 
  optionInputs[2].nextElementSibling.innerHTML = data.c; 
  optionInputs[3].nextElementSibling.innerHTML = data.d; 
} 

const submitQuiz = () =>{
  const ans = getAnswer();
  const data = question[index];
  if(ans === data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}

const getAnswer = () =>{
  let answer;
  optionInputs.forEach((input)=>{
    if(input.checked){
      answer = input.value;
    }
  })
  return answer;
}

const reset = () =>{
  optionInputs.forEach((input)=>{
    if(input.checked){
      input.checked = false;
    }
  })
}

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <h3>Thank you for playing</h3>
    <h2>${right} / ${total} are correct</h2>
  `
}

loadQuestion();