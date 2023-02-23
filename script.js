// Creating quiz CLASS

class Quiz {

  constructor(questions){
  
      this.score = 0;
      this.questions= questions;
      this.questionsIndex= 0;
      this.shuffledQuestions = questions.sort(() => Math.random() - .5)
  }
  
  
  getQuestionIndex(){
      return this.questions[this.questionsIndex];
      
  }
  
  guess (answer) {
  if (this.getQuestionIndex() .isCorrectAnswer(answer)) {
      this.score++;
  
  }
  this.questionsIndex ++;
  
  }
  
  isEnded (){
      return this.questionsIndex ===  this.questions.length;
  }
  
  }
  
  // Creating question class
  
  class Question {
      constructor(text, choices, answer){
          this.text= text;
          this.choices= choices;
          this.answer= answer;
      }
      isCorrectAnswer(choice){
          return this.answer === choice 
      }
  }
  
  
  // Displaying question 
  
  function displayQuestion () {
      if (quiz.isEnded()){
          showScores();
      } else {
          //showing questions
          
          let questionElement = document.getElementById("question");
          questionElement.innerHTML = quiz.getQuestionIndex().text;
          // showing choices
          
          let choices = quiz.getQuestionIndex().choices;
          for ( let i = 0; i < choices.length; i++ ){
              let choiceElement = document.getElementById("choice" + i);
              choiceElement.innerHTML = choices[i];
              guess("btn" + i, choices[i]);
          }
      showProgress();
      }
  };
  

  
  function guess (id, guess){
      let button = document.getElementById(id);
      button.onclick = function (){
          quiz.guess(guess);
          displayQuestion();
      }
  }
  
  //Quiz progress 
  
  function showProgress() {
      let currentQuestionNumber = quiz.questionsIndex + 1;
      let progressElement = document.getElementById("progress");
      progressElement.innerHTML =
      `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
      
  }
  
  
  //Showing score
  
  function showScores() {
      let quizEndHTML = 
      `
      <h1>Quiz completed</h1>
      <h2 id="score">You scored: ${quiz.score} of ${quiz.questions.length}</h2>
      <div class ="quiz-repeat">
      <a href="index.html">Repeat Quiz</a>
      <div class="complete"></div>
      <form class="form-inline">
      <div class="form-group">
      <label for="inputPassword6">Enter Initials</label>
      <input type="Initials" id="inputInitials" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
      </div>
      <input type="submit" value="Submit">
      </form>
      </div>
      `;
      
      let quizElement = document.getElementById("quiz");
      quizElement.innerHTML = quizEndHTML;
  }
  
  // questions
  
  let questions =[
  
      new Question("Which operator is used to assign a value to a variable?",["=", "*", "#", "/"] , "="
      ),
      new Question (
          "How does a FOR loop start?", [ "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)",  "for (i <= 5; i++)", "for i = 1 to 5"], "for (i = 0; i <= 5; i++)"
      ),
      new Question (
          "Which of the following statement cannot be used to declare a variable in JavaScript?", ["const", "int", "let", "var"], "int"
      ),
      new Question (
        "How do you stop an interval time in JavaScript?", ["intervalOver", "clearInterval", "clearTimer", "stopInterval"], "clearInterval"
      ),
      new Question (
          "How can you add comment in JavaScript?", ["=This is a comment", "!This is a comment", "* This is a comment", "// This is a comment" ], "// This is a comment"
      )
  ];
  
  
  
  let quiz = new Quiz(questions);
  
  
  // displaying  question
  displayQuestion();
  
  
  // Adding a countdown
  
  let time = 1.00;
  let quizTimeInMinutes = time * 60 * 60;
  let quizTime = quizTimeInMinutes / 60;
  
  let counting = document.getElementById("count-down");
  
  function startCountdown () {
      let quizTimer = setInterval(function() {
          if (quizTime <= 0){
              clearInterval(quizTimer);
              showScores();
          } else {
              quizTime--;
              let sec = Math.floor(quizTime % 60);
              let min = Math.floor(quizTime / 60) % 60;
              counting.innerHTML = `TIME: ${min} : ${sec}`;   
          }
      },1000);
      }
      startCountdown();
  