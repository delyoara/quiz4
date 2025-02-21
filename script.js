import { culture } from "./questions.js";

let index = 0;
const nextButton = document.querySelector("#next-button");
let optionsBox = document.querySelector(".options");
const replayButton = document.querySelector("#replay-button");
// let correctAnswer = culture.correct_answer.trim();

const question = document.querySelector(".question");

function loadQuestion() {
  question.innerText = culture.questions[index].text;



  optionsBox.innerHTML = "";

  culture.questions[index].options.forEach((options) => {
    let bouton = document.createElement("button");
    //insère l'option du boutton
    bouton.classList.add("another-class");
    bouton.textContent = options;
    optionsBox.appendChild(bouton);

    let br = document.createElement("br");
    optionsBox.appendChild(br);
  });
}
nextButton.addEventListener("click", () => {
  index++;

 
  if (index < culture.questions.length) {
    //Mettre à jour la question et les options
    index;
    loadQuestion();
  } else {
    question.innerText =
      "Felicitations, vous avez terminé notre quiz de culture générale !";
    optionsBox.innerHTML = "";
    nextButton.style.display = "none";
    replayButton.style.display = "inline-block";

    replayButton.addEventListener("click", () => {
      //document.createElement
      index = 0;
      nextButton.style.display = "inline-block";
      replayButton.style.display = "none";
      loadQuestion();
    });
  }
});

loadQuestion();

