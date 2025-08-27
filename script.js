document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("subtopic");
  const text = element.innerText;
  element.innerText = ""; // start empty

  let index = 0;

  function revealLetter() {
    if (index < text.length) {
      const span = document.createElement("span");
      span.textContent = text[index];
      span.classList.add("glow"); // add glow

      element.appendChild(span);

      // Remove glow after flicker duration
      setTimeout(() => {
        span.classList.remove("glow");
      }, 200); // glow lasts 0.6s

      index++;
      setTimeout(revealLetter, 50); // delay between letters
    }
  }

  revealLetter();
});
