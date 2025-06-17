// Countdown Timer
const countdownEl = document.getElementById("countdown");
const partyDate = new Date("2026-05-18T18:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = partyDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "The celebration has started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

if (countdownEl) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Accordion functionality
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const isOpen = body.style.display === "block";

    // Close all
    document.querySelectorAll(".accordion-body").forEach(b => b.style.display = "none");

    // Open clicked one
    if (!isOpen) {
      body.style.display = "block";
    }
  });
});

// RSVP Form Submission
const form = document.getElementById("rsvpForm");
const successMessage = document.getElementById("successMessage");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    successMessage.classList.remove("hidden");
    form.reset();
  });
}