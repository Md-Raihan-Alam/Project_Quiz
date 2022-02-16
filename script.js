//all question and answers
const quizQuestion=[
    {
        question:"What does HTML stands for?",
        q_a:"HyperText Markup Language",
        q_b:"Humen Text Markup Language",
        q_c:"HyeperText Markup Language",
        q_d:"HyperText Murkup Language",
    },
    {
        question:"What is the national game of Bangladesh?",
        q_a:"Kabadi",
        q_b:"Cricket",
        q_c:"Football",
        q_d:"Swimming",
    },
    {
        question:"Who is the current president of America?",
        q_a:"Trump",
        q_b:"Biden",
        q_c:"Obama",
        q_d:"Modhi",
    },
    {
        question:"Which one is now the most populer Programing Language?",
        q_a:"JavaScript",
        q_b:"Java",
        q_c:"Phyton",
        q_d:"PHP",
    },
    {
        question:"Who is the first human being?",
        q_a:"Jesus",
        q_b:"Ibrahim",
        q_c:"Moses",
        q_d:"Adam",
    },
];
//selection of classes
const quiz=document.querySelector('.quiz');
const submitBtn=document.querySelector('.submit_btn');
const quizData=document.querySelector('.quiz_form');
const answerSection=document.querySelector('.show_text');
//track of right, wrong, submitted answers and score
let quesNo=0;
let submittedAnswers=[];
let correctAnswers=['q_a','q_a','q_b','q_c','q_d'];
let score=0;
let right=0;
let wrong=0;
document.addEventListener('DOMContentLoaded',quesNum);
//function for questin update
function quesNum(){
    quiz.innerHTML=`
     <p>${quizQuestion[quesNo].question}</p>
            <label for="radio_one" class="radio_sec">
                <ul>
                    <li><input type="radio" name="radio_one" class="radio_one" value="q_a">${quizQuestion[quesNo].q_a}</li>
                    <li><input type="radio" name="radio_one" class="radio_one" value="q_b">${quizQuestion[quesNo].q_b}</li>
                    <li><input type="radio" name="radio_one" class="radio_one" value="q_c">${quizQuestion[quesNo].q_c}</li>
                    <li><input type="radio" name="radio_one" class="radio_one" value="q_d">${quizQuestion[quesNo].q_d}</li>
                </ul>
            </label>
    `;


}
//code for tracking scores
 submitBtn.addEventListener('click',function(e){
     submittedAnswers.push(quizData.elements['radio_one'].value);
               e.preventDefault();
               quesNo++;
               if(quesNo<quizQuestion.length){
                    quesNum();
               }else{
                   showAnswer();
               }

});
//showing answers
function showAnswer(){
   for(let i=0;i<correctAnswers.length;i++){
       if(correctAnswers[i]==submittedAnswers[i]){
           score++;
           right++;
       }else{
           wrong++;
       }
   }
   quiz.innerHTML=`
    <div class="score_text">
            <div>Score:${score}</div>
            <div>Wrong:${wrong}</div>
            </div>
            <div class="final_result">
                you have got ${right} of 5
            </div>
   `;
   submitBtn.classList.add('close');
   submitBtn.value=``;
}