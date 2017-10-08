$('#start').on('click', function() {
  game.start();
});

$(document).on('click', 'end', function() {
  game.done();
});

var questions = ([{
  question: 'The first person shooter video game "Doom", was first released in what year?',
  answers: ["1983", "1999", "1984", "1993", "2016"],
  correctAnswer: "1993",

}, {
  question: "In what year did Nintendo release its first game console in North America?",
  answers: ["1984", "1985", "1990", "1989", "1983"],
  correctAnswer: "1985",

}, {
  question: "What is the name of the princess Mario keeps trying to save from Bowser?",
  answers: ["Daisy", "Rosalina", "Peach", "Pear", "Star"],
  correctAnswer: "Peach",
}, {

  question: "What color is Pac-Man?",
  answers: ["Orange", "Red", "Yellow", "Blue", "Rainbow"],
  correctAnswer: "Yellow",
}, {

  question: "What gender is Zelda?",
  answers: ["Male", "Female", "NonBinary"],
  correctAnswer: "Female",
}]);

var game = {
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  counter: 45,
  countdown: function() {
    game.counter--;
    $('#counter').html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is Up!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subWrapper').prepend('<h2> Time Remaining: <span id= "counter"> 45 </span> Seconds </h2>')
    $('#start').remove();
    for (var i = 0; i < questions.length; i++) {
      $('#subWrapper').append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        $('#subWrapper').append("<input type = 'radio' name = 'question-" + i + "' value = '" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
      }
    }
    $('#subWrapper').append('<br><button id = "end"> Done </button>');
  },
  done: function() {
    $.each($('input [name = "question-0]" : checked'), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($('input [name = "question-1]" : checked'), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($('input [name = "question-2]" : checked'), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($('input [name = "question-3]" : checked'), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($('input [name = "question-4]" : checked'), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },

  result: function() {
    clearInterval(timer);
    $('#subWrapper h2').remove();
    $('#subWrapper').html("<h2> All Done! </h2>");
    $('#subWrapper').append("h3> Correct Answers: " + this.correct + " </h3>");
    $('#subWrapper').append("h3> Incorrect Answers: " + this.incorrect + " </h3>");
    $('#subWrapper').append("<h3> unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
}
