$( document ).ready(function() {

        stopwatch.start();

    //Record the answer selected for questions and stored in variables

    //Question 1
    $('#questionOneForm input').on('change', function() {
         answer1 = parseInt($('input[name=question1]:checked', '#questionOneForm').val());
         if (answer1 === 3) {
             questionsRight++;
             unansweredQuestions--;
             
         } else {
             questionsWrong++;
             unansweredQuestions--;
         }

         $('#questionOneForm input').attr('disabled',true);

         
     });

    //Question 2
    $('#questionTwoForm input').on('change', function() {
        answer2 = parseInt($('input[name=question2]:checked', '#questionTwoForm').val());
        if (answer2 === 1) {
            questionsRight++;
            unansweredQuestions--;
            
        } else {
            questionsWrong++;
            unansweredQuestions--;
        }

        $('#questionTwoForm input').attr('disabled',true);
       
    });

    //Question 3
    $('#questionThreeForm input').on('change', function() {
        answer3 = parseInt($('input[name=question3]:checked', '#questionThreeForm').val());
        if (answer3 === 2) {
            questionsRight++;
            unansweredQuestions--;
        } else {
            questionsWrong++;
            unansweredQuestions--;
        }
        $('#questionThreeForm input').attr('disabled',true);
    });

    //Question 4
    $('#questionFourForm input').on('change', function() {
        answer4 = parseInt($('input[name=question4]:checked', '#questionFourForm').val());
        if (answer4 === 4) {
            questionsRight++;
            unansweredQuestions--;
        } else {
            questionsWrong++;
            unansweredQuestions--;
        }
        $('#questionFourForm input').attr('disabled',true);
    });
    console.log( "Let the console being!" );

});

//Answer html

var answerHTML = "<Div id='Game-Body'>" + "<h1>Quiz Results</h1>" + "<Div class='Quiz-Results' id='Correct-Answers'>Correct Answers 0</Div>" + "<Div class='Quiz-Results' id='Incorrect-Answers'>Incorrect Answers: 0</Div>" + "<Div class='Quiz-Results' id='Unanswered-Questions'>Unanswered: 0</Div>"

//Quiz Answers Bank
var answer1 = 0;
var answer2 = 0;
var answer3 = 0;
var answer4 = 0;

//Quiz Counters
var questionsRight = 0;
var questionsWrong = 0;
var unansweredQuestions = 4;

//Navigation Counter
var quizPage = true;

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

    time: 30,
    lap: 1,
  
    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
      },
    count: function() {
  
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time--;

      if (stopwatch.time === 0) {

        //Perform actions once stopwatch reaches 0
            stopwatch.stop();
            $("#Game-Body").html(answerHTML);
            //Post quiz results to QuizResults HTML
            $("#Correct-Answers").html("Correct Answers: " + questionsRight);
            $("#Incorrect-Answers").html("Incorrect Answers: " + questionsWrong);
            $("#Unanswered-Questions").html("Unanswered Questions: " + unansweredQuestions);
            quizPage = false;
            //$("#Game-Body").html(quizResults.html);
      }
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#Seconds-Remaining").text("Time Remaining " + converted);
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds;
    }
  };




