const CORRECT_PASSWORD = "I love you forever";

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === CORRECT_PASSWORD) {

        document.getElementById("login").style.display = "none";

        document.getElementById("main").style.display = "flex";

        const music = document.getElementById("bgMusic");

        music.play().catch(() => {});


    } else {

        alert("🥺 كلمة السر غلط يا Bellu ❤️");

    }
}

// Love Button

document.addEventListener("DOMContentLoaded", () => {

    const loveBtn = document.getElementById("loveBtn");

    if (loveBtn) {

        loveBtn.addEventListener("click", () => {

            loveBtn.innerHTML = "❤️‍🔥😍 بموت فيكي 😘💖";

            loveBtn.style.transform = "scale(1.08)";

        });

    }

});

// Floating Emojis

function createFloatingEmojis() {

    const container =
    document.getElementById("floatingContainer");

    const emojis = [
        "❤️","💖","💕","💞",
        "🥰","😍","✨","💘"
    ];

    setInterval(() => {

        const emoji =
        document.createElement("div");

        emoji.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.position = "fixed";

        emoji.style.left =
        Math.random() * 100 + "vw";

        emoji.style.bottom = "-50px";

        emoji.style.fontSize =
        (15 + Math.random() * 30) + "px";

        emoji.style.opacity =
        (0.4 + Math.random() * 0.6);

        emoji.style.pointerEvents = "none";

        emoji.style.zIndex = "2";

        const duration =
        5 + Math.random() * 5;

        emoji.style.animation =
        `floatUp ${duration}s linear forwards`;

        container.appendChild(emoji);

        setTimeout(() => {

            emoji.remove();

        }, duration * 1000);

    }, 100);
}

createFloatingEmojis();
