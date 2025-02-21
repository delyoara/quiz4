import { culture } from "./questions.js";

let index = 0;
//indique la question acutelle;
const question = document.querySelector(".question");
let optionsBox = document.querySelector(".options");

 let options = document.querySelector('.options');
options.innerText = culture.questions[index].options;

const nextButton = document.querySelector("#next-button");
const replayButton = document.querySelector("#replay-button");
const countButton = document.querySelector("#countButton");

let score = 0;
// let numberQuestions = culture.questions.length;


function loadQuestion() {
  //déroulé des quesitons 
  question.innerText = culture.questions[index].text;
  const correctAnswer = culture.questions[index].correct_answer.trim();
      optionsBox.innerHTML = "";

  culture.questions[index].options.forEach((options) => {
    let bouton = document.createElement("button");
    //insère l'option du boutton
    bouton.classList.add("another-class");
    bouton.textContent = options;
    optionsBox.appendChild(bouton);

    let br = document.createElement("br");
    optionsBox.appendChild(br);

    nextButton.disabled = true; 

  bouton.addEventListener("click",() => {
 
          if(options === correctAnswer){
            score++;
            bouton.style.border = "2px solid green"      
          }
      
           else {
            bouton.style.border = "2px solid red";
         }   
        nextButton.disabled = false; 
  })
    
  })

}

//fin de la function loadQuestions

nextButton.addEventListener("click", () => {
  index++;

 
  if (index < culture.questions.length) {
    //Mettre à jour la question et les options
    index;
    loadQuestion();
  } 
  else {
    question.innerText = "Felicitations, vous avez terminé notre quiz de culture générale !";
    optionsBox.innerHTML = "";
    nextButton.style.display = "none";
    replayButton.style.display = "inline-block";
    countButton.style.display = "inline-block";
    countButton.innerText = "Tu as obtenu : " + score + "/" + culture.questions.length; 

    confetti({
      particleCount: 800,  // Nombre de confettis
      spread: 100,  // Angle de dispersion
      colors: ['#ff0000', '#ff69b4', '#00ff00', '#0000ff','#800080'],  // Couleurs rouge, rose, vert, bleu
      origin: { y: 0.6 },  // Position d'origine des confettis
      shapes: ['stars'],  // Formes carrées (tu peux aussi essayer 'circle' ou 'star')
  });

    replayButton.addEventListener("click", () => {
      //document.createElement
      index = 0;
      score = 0;
      nextButton.style.display = "inline-block";
      replayButton.style.display = "none";
      countButton.style.display = "none";
      
      loadQuestion();
    });
  }
});

loadQuestion();


