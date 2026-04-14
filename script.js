let correctAnswer = "exam";

function checkAnswer() {
  let userAnswer = document.getElementById("answer").value.toLowerCase();
  let message = document.getElementById("message");

  if (userAnswer === correctAnswer) {
    // Hide question page
    document.getElementById("questionPage").style.display = "none";

    // Show tap screen first
    let tapScreen = document.getElementById("tapScreen");
    tapScreen.style.display = "flex";

    // When user taps, hide tap screen and show memory page
    tapScreen.addEventListener("click", function () {
      tapScreen.style.display = "none";
      document.getElementById("memoryPage").style.display = "block";
      document.getElementById("bgAudio").play();
    }, { once: true });

  } else {
    message.innerText = "The answer is written in our destiny... try again ✨";
  }
}

// Auto play audio on load
window.addEventListener("load", function () {
  const audio = document.getElementById("bgAudio");
  audio.play().catch(function () {
    document.addEventListener("click", function () {
      audio.play();
    }, { once: true });
  });
});