import { culture } from './questions.js';

let questionText = 0;
let optionsText = 0;
const nextButton = document.querySelector('#next-button');
let optionsBox = document.querySelector('.options');

function update () {
    
    
    const question = document.querySelector('.question');
    question.innerText = culture.questions[questionText].text;


    
    optionsBox.innerHTML = '';
    
    
    
    culture.questions[optionsText].options.forEach((option) => {
        
    let bouton = document.createElement('button');
  

 bouton.classList.add('another-class');
    bouton.textContent = option;
    optionsBox.appendChild(bouton);

    let br = document.createElement('br');
    optionsBox.appendChild(br);
    })
}
    nextButton.addEventListener('click',() => {
        questionText++;
        optionsText++;
        
     update();


    })

update();


    