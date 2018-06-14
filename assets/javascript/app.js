$( document ).ready(function() {

    
    //Record the answer selected for question number1

    //Question 1
    $('#questionOneForm input').on('change', function() {
         answer1 = $('input[name=question1]:checked', '#questionOneForm').val();
     });

    //Question 2
    $('#questionOneForm input').on('change', function() {
        answer2 = $('input[name=question1]:checked', '#questionOneForm').val();
    });

    //Question 3
    $('#questionOneForm input').on('change', function() {
        answer3 = $('input[name=question1]:checked', '#questionOneForm').val();
    });

    //Question 4
    $('#questionOneForm input').on('change', function() {
        answer4 = $('input[name=question1]:checked', '#questionOneForm').val();
    });




    console.log( "Let the console being!" );

    if(quizPage === true) {
        stopwatch.start();
    } else {

        //Perform question calculations
        
        

    }

    

});

//Quiz Answers Bank
var answer1;
var answer2;
var answer3;
var answer4;

//Quiz Counters
var questionsRight = 0;
var questionsWrong = 0;
var unansweredQuestions = 0;

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
            quizPage = false;
            window.location.replace("quizResults.html");
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


//alert($('input[name=question1]:checked', '#questionOneForm').val()); 

