document.addEventListener("DOMContentLoaded", () => {
  const quizView = document.querySelector("#quizView");
  const endView = document.querySelector("#endView");

  const questionCount = document.querySelector("#questionCount");
  const questionContainer = document.querySelector("#question");
  const choiceContainer = document.querySelector("#choices");
  const nextButton = document.querySelector("#nextButton");
  const resetQuizButton = document.querySelector("#restartButton");
  const resultContainer = document.querySelector("#result");
  const choicesContainer = document.querySelector("#choices");

  quizView.style.display = "block";
  endView.style.display = "none";

  const questions = [
    new Question(
      "What was the name of the first computer virus?",
      ["MyDoom", "Slammer", "TheCreeper", "Zeus"],
      "TheCreeper",
      1
    ),
    new Question(
      "In what decade was the internet created?",
      ["1940s", "1950s", "1960s", "1970s"],
      "1960s",
      1
    ),
    new Question(
      "Who is known as the father of computing?",
      ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
      "Alan Turing",
      2
    ),
    new Question(
      "Which company created the first personal computer (PC)",
      ["IBM", "Apple", "Microsoft", "Xerox"],
      "Apple",
      3
    ),
  ];
  const quizDuration = 45;

  const quiz = new Quiz(questions, quizDuration, quizDuration);
  quiz.shuffleQuestions();

  showQuestion();

  function startTheTimer() {
    timer = setInterval(() => {
      quiz.timeRemaining--;
      if (quiz.timeRemaining == 40) {
        // showToast("Hello time is up");
        nextButton.innerText = "Hurry up!";
      }
      if (quiz.timeRemaining == 37) {
        // showToast("Hello time is up");
        nextButton.innerText = "Answer";
      }
      if (quiz.timeRemaining < 0) {
        clearInterval(timer);
        showResults();
      }
    }, 1000);
  }

  startTheTimer();

  nextButton.addEventListener("click", nextButtonHandler);

  function showQuestion() {
    if (quiz.hasEnded()) {
      showResults();
      return;
    }

    questionContainer.innerText = "";
    choiceContainer.innerHTML = "";

    const question = quiz.getQuestion();
    question.shuffleChoices();

    questionContainer.innerText = question.text;

    function updateProgressBar() {
      const progressBar = document.getElementById("progressBar");
      const rocketIcon = document.getElementById("rocketIcon");

      let number = (quiz.currentQuestionIndex / questions.length) * 100;

      progressBar.style.width = quiz.currentQuestionIndex
        ? `${number}%`
        : `${0}%`;
    }

    updateProgressBar();

    questionCount.innerText = `Question ${quiz.currentQuestionIndex + 1} of ${
      questions.length
    }`;

    const questionChoicesArray = question.choices;
    questionChoicesArray.forEach((element, index) => {
      const divContainerForLabelAndRadio = document.createElement("div");
      divContainerForLabelAndRadio.style.margin = "10px 0";
      choicesContainer.appendChild(divContainerForLabelAndRadio);

      const radioId = `choice-${index}`;

      // Create radio input element
      let radioElement = document.createElement("input");
      radioElement.setAttribute("type", "radio");
      radioElement.setAttribute("class", "radio-buttons");
      radioElement.setAttribute("name", `choice`);
      radioElement.setAttribute("value", element);
      radioElement.setAttribute("id", radioId);
      divContainerForLabelAndRadio.appendChild(radioElement);
      let choiceLabel = document.createElement("label");
      choiceLabel.setAttribute("for", radioId);
      choiceLabel.innerText = element;
      divContainerForLabelAndRadio.appendChild(choiceLabel);
    });
  }

  function nextButtonHandler() {
    let selectedAnswer;

    let radioButtonsArray = document.querySelectorAll(".radio-buttons");

    radioButtonsArray.forEach((radio) => {
      if (radio.checked === true) {
        selectedAnswer = radio.defaultValue;
      }
    });

    if (selectedAnswer) {
      quiz.checkAnswer(selectedAnswer);
      quiz.moveToNextQuestion();
      showQuestion();
    }
  }

  function showResults() {
    quizView.style.display = "none";

    endView.style.display = "flex";

    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${quiz.questions.length} correct answers!`;
  }

  function restartQuiz() {
    return window.location.reload();
  }

  resetQuizButton.addEventListener("click", () => {
    restartQuiz();
  });
});

function showToast(message) {
  const toastMessage = document.body.querySelector("#toast-message");

  console.log("showToast called!");

  toastMessage.innerHTML = message;

  const toastBlock = document.body.querySelector("#toast");
  toastBlock.classList.add("show");

  setTimeout(() => {
    toastBlock.classList.remove("show");
  }, 3000);

  const closeToastButton = document.body.querySelector("#close-toast");

  closeToastButton.addEventListener("click", () => {
    toastBlock.classList.remove("show");
  });
}
