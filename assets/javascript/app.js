$('#start').on('click', function() {
  $('#subWrapper').remove();
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
