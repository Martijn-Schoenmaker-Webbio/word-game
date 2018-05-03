$(document).ready(function() {
  var data = [
    {options: ['Hoi', 'Hio', 'hio', 'hoi']}
  ];
  
  $( 'button.start-game' ).click(function() {
    $( 'button.start-game' ).animate({opacity:0});
    startGame(data);
  });

  function startGame(data) {
    var firstNumber = $( '#number-first' );
    var secondNumber = $( '#number-second' );

    getValues(2);

    for ( i = 0; i < 2; i++) {
      rand = Math.floor(Math.random() * 5);
      firstNumber.text(data[0].options[rand]);
    }

  }

  function getValues(amount) {
    var words = [];
    var randomOption = Math.floor(Math.random() * data.length);
    for ( i = 0; i < amount; i++) {
      
      randomWord = Math.floor(Math.random() * data[randomOption]);
      firstNumber.text(data[0].options[rand]);
    }
    return words;
  }

});