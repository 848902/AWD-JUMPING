document.getElementById('letter').addEventListener('click', function() {
    var letter = this;
  
    // Randomizing jump distance
    var jumpDistanceX = (Math.random() * 20 - 10) + 'px';
    var jumpDistanceY = (Math.random() * 20 - 10) + 'px';
  
    // Applying the jump
    letter.style.transform = 'translate(' + jumpDistanceX + ', ' + jumpDistanceY + ')';
  
    // Resetting the position after a short delay
    setTimeout(function() {
      letter.style.transform = 'translate(-50%, -50%)';
    }, 300);
  });