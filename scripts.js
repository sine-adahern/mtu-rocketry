console.log("scripts.js loaded");

const launchDate = new Date("2026-11-01T10:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    const countdownEl = document.getElementById("countdown");

    // If this page doesn't have a countdown element, bail out early.
    if (!countdownEl) return;

    if (diff <= 0) {
        countdownEl.textContent = "Launch in progress or completed!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const fullText = document.querySelector(".full-text");
    const shortText = document.querySelector(".short-text");

    // If we're not on the events page, just exit
    if (!readMoreBtn || !fullText || !shortText) return;

    readMoreBtn.addEventListener("click", () => {
        const isHidden = fullText.classList.contains("hidden");

        if (isHidden) {
            fullText.classList.remove("hidden");
            shortText.style.display = "none";
            readMoreBtn.textContent = "Show Less";
        } else {
            fullText.classList.add("hidden");
            shortText.style.display = "block";
            readMoreBtn.textContent = "Read More";
        }
    });
});
