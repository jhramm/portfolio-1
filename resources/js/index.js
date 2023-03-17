const containerEl = document.querySelector(".container");

const careers = ["LEARNER.", "WEB DEVELOPER.", "FREELANCER.", "DREAMER."];

let careerIndex = 0;

let charactorIndex = 0;

updateText();

function updateText() {
  charactorIndex++;
  containerEl.innerHTML = `<h1>I AM A ${careers[careerIndex].slice(0, charactorIndex)}</h1>`;
  if (charactorIndex === careers[careerIndex].length) {
    careerIndex++;
    charactorIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 600);
}
