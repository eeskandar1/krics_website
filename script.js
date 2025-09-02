document.addEventListener("DOMContentLoaded", () => {
  // Typewriter animation
  const element = document.getElementById("typewriter-text");
  const text = element.textContent;
  element.textContent = "";

  const words = text.split(" ");
  const lastWord = words.pop(); 
  const mainText = words.join(" ") + " ";

  mainText.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("type-letter");
    span.style.animationDelay = `${i * 0.06}s`;
    element.appendChild(span);
  });

  lastWord.split("").forEach((char, j) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("highlight-letter");
    span.style.animationDelay = `${(mainText.length + j) * 0.07}s`;
    element.appendChild(span);
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Header scroll behavior
  const header = document.querySelector("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Background change
    if (currentScroll > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Hide on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 50) {
      header.style.top = "-100px"; // hide
    } else {
      header.style.top = "0";      // show
    }

    lastScroll = currentScroll;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
