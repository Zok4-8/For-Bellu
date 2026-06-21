function checkPassword(){

    const pass = document.getElementById("password").value;

    if(pass === "I Love you forever"){

        document.getElementById("login").style.display = "none";

        document.getElementById("main").style.display = "flex";

        const music = document.getElementById("bgMusic");

        music.play().catch(() => {});
    }
    else{
        alert("🥺 كلمة السر غلط يا Bellu");
    }
}

/* قلوب متحركة */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis = ["❤️","💕","💖","💗","💞"];

    heart.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (20 + Math.random()*30) + "px";

    heart.style.animationDuration =
        (4 + Math.random()*6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },10000);
}

setInterval(createHeart,250);

/* زر سامحيني */

document.addEventListener("click", function(e){

    if(e.target.classList.contains("forgive-btn")){

        e.target.innerHTML =
        " روح قلبيBellu ❤️";

    }

});

const emojis = [
"❤️","💖","💕","💞",
"💘","💝",
"✨","🥺","😍","❤️‍🔥",
"💓","💗"
];

function createFloatingEmoji(){

    const emoji = document.createElement("span");

    emoji.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.bottom = "-50px";
    emoji.style.fontSize = (25 + Math.random() * 30) + "px";
    emoji.style.zIndex = "1";
    emoji.style.pointerEvents = "none";

    document.body.appendChild(emoji);

    let position = -50;

    const animation = setInterval(() => {

        position += 3;

        emoji.style.bottom = position + "px";

        emoji.style.transform =
        `rotate(${position}deg)`;

        if(position > window.innerHeight + 100){
            clearInterval(animation);
            emoji.remove();
        }

    },20);
}

setInterval(createFloatingEmoji,150);