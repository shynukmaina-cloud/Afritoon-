// AfriToon Demo Script
const generateBtn = document.querySelector("button");
const textInput = document.querySelector("textarea");
const preview = document.querySelector("#preview");
const voiceCheck = document.querySelector("#voice");
const subtitleCheck = document.querySelector("#subtitles");

generateBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (!text) {
    alert("Please enter a scene description!");
    return;
  }

  // Add subtitles
  if (subtitleCheck.checked) {
    preview.innerHTML = `<p><strong>🎬 Scene:</strong> ${text}</p>`;
  }

  // Voice demo
  if (voiceCheck.checked) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    speechSynthesis.speak(utter);
  }

  // Fake "video" placeholder
  preview.innerHTML += `<p>🎞️ [Animated scene for: "${text}"]</p>`;
});
