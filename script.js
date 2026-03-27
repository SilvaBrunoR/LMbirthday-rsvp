// FORM SUBMIT UX
const form = document.getElementById("rsvpForm");
const btn = document.getElementById("submitBtn");
const msg = document.getElementById("statusMsg");

if (form) {
  form.addEventListener("submit", () => {
    btn.disabled = true;
    btn.textContent = "Sending...";
    msg.textContent = "Submitting your RSVP...";
  });
}

// COUNTDOWN
const partyDate = new Date("2026-04-11T11:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownMessage = document.getElementById("countdownMessage");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = partyDate - now;

  if (distance <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "0";
    minutesEl.textContent = "0";
    secondsEl.textContent = "0";
    countdownMessage.textContent = "The birthday day is here! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
