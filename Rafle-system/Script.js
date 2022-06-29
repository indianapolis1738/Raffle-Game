
              const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    
    const ShowNumber = () => getRandomNumber(1, 10);
    
    document.getElementById("roll").addEventListener("click", function () {
      // fetch random number from the input fields
      const player1 = document.getElementById("player1").value;
      const player2 = document.getElementById("player2").value;
      const player3 = document.getElementById("player3").value;
    
      // roll dice for both players
      const player1Score = ShowNumber();
      const player2Score = ShowNumber();
      const player3Score = ShowNumber();
    
      // initialize empty string to store result
      let result = "";
    
      // determine the result
      if (player1Score && player2Score && player3Score === player1 && player2 && player3) {
        result = `You won the round`;
      } else if (player2Score && player1Score && player3Score !== player1 && player2 && player3) {
        result = `You lost the round`;
      } else {
        result = "You've no Input";
      }
    
      // display the result on the page
      document.getElementById("results").innerHTML = `
      <p>${player1} => ${player1Score}</p>
      <p>${player2} => ${player2Score}</p>
      <p>${player3} => ${player3Score}</p>
      <p>${result}</p>`;
    });
          </script>
          <script>
            var video = document.getElementById("video1");
            var btn = document.getElementById("myBtn");

            function myFunctio() {
              if (video.paused) {
                video.play();
                btn.innerHTML = "&#9208;";
              }
              else {
                video.pause();
                btn.innerHTML = "&#9199;"
              }
            }
        