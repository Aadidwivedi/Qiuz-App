 const questions =[{
  "que" : "which of the following is a markup language?",
  "a": "HTML",
  "b": "CSS",
  "c" : "javascript",
  "d" : "XML",
  "correct" : "a "
 },
 {
  "que" : "What year was javascript launched?",
  "a": "1996",
  "b": "1995",
  "c" : "1994",
  "d" : "NOT",
  "correct" : "b"
 },
 {
  "que" : "Who is the best cricketer in the world?",
  "a": "Sehwag",
  "b": "Sachin",
  "c": "Yuvraj",
  "d" : "Kohli",
  "correct" : "b"
 },
 {
  "que" : "which cricketer has most odi hundred?",
  "a": "Sehwag",
  "b": "Sachin",
  "c": "Yuvraj",
  "d" : "Kohli",
  "correct" : "d"
 },
 {
  "que" : "which cricketer has most test hundred?",
  "a": "Sehwag",
  "b": "Sachin",
  "c": "Yuvraj",
  "d" : "Kohli",
  "correct" : "b"
 },
 {
  "que" : "which cricketer has most times manof the series in wordcup match?",
  'a': "Yuvraj",
  'b': "Sachin",
  'c' : "Dhoni",
  'd' : "Kohli",
  "correct" : "a"
 }
]

let index = 0;
let total = questions.length;
let right = 0;
    wrong=0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () =>{
  if(index === total){
    return endQuiz()
  }
  reset();
  const data = questions[index]
  //console.log(data);
  quesBox.innerText = `${index+1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText= data.a;
  optionInputs[1].nextElementSibling.innerText= data.b;
  optionInputs[2].nextElementSibling.innerText= data.c;
  optionInputs[3].nextElementSibling.innerText= data.d;
}
const submitQuiz=() => {
  const data = questions[index]
  const ans = getAnswer()
  if(ans == data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}
const getAnswer = ()=>{
  let answer
  optionInputs.forEach(
    (input)=>{
      if(input.checked){
       answer=  input.value;
      }
    }
  )
  return answer;
}
const reset = () =>{
  optionInputs.forEach(
    (input)=>{
      input.checked = false;
    }
  )
}

const endQuiz = () =>{
  document.getElementById("box").innerHTML =`
  <div style="text-align:center">
  <h3>Thinku for playing the Quiz</h3>
  <h2> ${right} / ${total} are correct </h2>
  </div>
  `
} 
loadQuestion();
