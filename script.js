// This adds a nicer “submitting…” message and avoids double submits.
const form = document.getElementById("rsvpForm");
const btn = document.getElementById("submitBtn");
const msg = document.getElementById("statusMsg");

form.addEventListener("submit", () => {
  btn.disabled = true;
  btn.textContent = "Sending...";
  msg.textContent = "Submitting your RSVP…";
});