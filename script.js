// ================= REGISTRATION COUNTDOWN =================

const deadline = new Date("Feb 22, 2026 23:59:00").getTime();

const countdownInterval = setInterval(() => {

    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);

        document.querySelector(".countdown").innerHTML =
            "<h2 style='color:#ff4d6d;'>🚫 Registration Closed</h2>";

        const btn = document.getElementById("registerBtn");
        btn.innerText = "Closed";
        btn.style.opacity = "0.6";
        btn.style.cursor = "not-allowed";
        btn.disabled = true;

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);


// ================= REGISTER BUTTON =================

document.getElementById("registerBtn").addEventListener("click", function () {
    alert("🚀 Redirecting to registration form...");
});


// ================= TIMELINE SCROLL REVEAL =================

const timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline() {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);


// ================= SUBTLE MOUSE GLOW =================

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    document.body.style.background =
        `radial-gradient(
            circle 180px at ${x}px ${y}px,
            rgba(0,245,255,0.12),
            transparent 70%
        ),
        #000`;
});


// ================= PLAYFUL COUNTDOWN SHAKE =================

setInterval(() => {
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance < 3600000 && distance > 0) {
        document.querySelectorAll(".time-box").forEach(box => {
            box.style.animation = "pulse 0.6s infinite alternate";
        });
    }
}, 10000);

// ================= POSTER INTERACTIVE TILT =================
const poster = document.querySelector(".poster-img");

poster.addEventListener("mousemove", (e) => {
    const rect = poster.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 3; // smaller max rotation
    const rotateY = ((x - centerX) / centerX) * 3;

    poster.style.transform = `scale(1.05) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

poster.addEventListener("mouseleave", () => {
    poster.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
});
