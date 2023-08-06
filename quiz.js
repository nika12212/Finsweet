
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;



const quizArray = [
  {
    id: "0",
    question: "Which of these materials cannot be recycled?",
    options: ["Metals", "Plastic bottles", "Paper and cardboard", "Light bulbs"],
    correct: "Light bulbs",
  },
  {
    id: "1",
    question: "Which of these is a renewable energy resource?",
    options: ["Coal", "Nuclear energy", "Natural gas", "Wind energy"],
    correct: "Wind energy",
  },
  {
    id: "2",
    question: " Which day is Earth Day?",
    options: ["March 12", "October 2", "April 22", "May 9"],
    correct: "April 22",

  },
  
{ 
   id: "3",
  question: "How long does a Styrofoam cup take to decompose?",
  options: ["50 years", "100 years", "300 years", "500 years"],
  correct: "500 years",
},
{
  id: "4",
  question: "What is the most common type of trash that litters our oceans?",
  options: ["Beverage plastic bottles", "Straws/stirrers", "Cigarettes", "Plastic bags"],
  correct: "Cigarettes",
},
{
  id: "5",
  question: "Which of these countries emits the most carbon dioxide?",
  options: ["China", "Russia", "Usa", "Australia"],
  correct: "China",
}
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
   
    questionCount += 1;
  
    
    if (questionCount == quizArray.length) {
 
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
    
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    }
    
    if(scoreCount==4)
    {
      userScore.innerHTML =
      "Your score is " + scoreCount + " out of " + questionCount + "!"+ '<br>'+
       '<br>' + "Keep going 😉";
    } 
    if(scoreCount==5)
    {
      userScore.innerHTML =
      "Your score is " + scoreCount + " out of " + questionCount + "!"+ '<br>'+
       '<br>' + "Well done 🙌";
    } 
    if(scoreCount==6)
    {
      userScore.innerHTML =
      "Your score is " + scoreCount + " out of " + questionCount + "!"+ '<br>'+
       '<br>' + "Good job  🥳";
    } 
    else {
   
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
    
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
   
    }
  })
);

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};


const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
 
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
 
  for (let i of quizArray) {
 
    i.options.sort(() => Math.random() - 0.5);
  
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
  
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
 
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}


function checker(userOption) {
  let userSolution = userOption.innerText;
  
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;

  } else {
    userOption.classList.add("incorrect");
   
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  
}


function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}


startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");

};