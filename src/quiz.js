class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      this.questions.push(this.questions[randomIndex]);
      this.questions.splice(randomIndex, 1);
    }
    return this.questions;
  }

  checkAnswer(answer) {
    this.questions.map((element) => {
      if (element.answer === answer) {
        this.correctAnswers++;
      }
    });
  }

  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) return true;
    if (this.currentQuestionIndex < this.questions.length) return false;
  }
}
