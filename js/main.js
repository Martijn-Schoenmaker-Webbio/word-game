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

  }

  function getValues(amount) {
    var words = [];
    var optionAmount = data.length;
    var randomOptionAmount = Math.floor(Math.random() * data.length);
    var randomWordAmount;
    var previousWord;
    var isSame = false;
    for ( i = 0; i < amount; i++) {
      if (randomWordAmount == null) {
        randomWordAmount = Math.floor(Math.random() * data[randomOptionAmount].options.length);
        previousWord = randomWordAmount;
      } else{
        randomWordAmount = Math.floor(Math.random() * data[randomOptionAmount].options.length);
        if (previousWord === randomWordAmount) {
          isSame = true;
        }
      }
      var randomWord = data[randomOptionAmount].options[randomWordAmount];
      words.push(randomWord);
    }

    // alert(words);
    // alert(isSame);

    return {
      words: words,
      isSame: isSame
    };
  }

});