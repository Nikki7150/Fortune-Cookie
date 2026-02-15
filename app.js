/*const fortuneButton = document.getElementById("open-fortune");
const fortuneDisplay = document.getElementById("fortune");*/

// cookies
const cookie1 = document.getElementById("c1");
const cookie2 = document.getElementById("c2");
const cookie3 = document.getElementById("c3");
const cookie4 = document.getElementById("c4");
const zoomCookie = document.getElementById("zoom-cookie");
const fortuneDisplay = document.getElementById("fortune");

/*const today = new Date().toDateString(); // "Thu Feb 13 2026"
const lastOpened = localStorage.getItem("lastOpened");
fortuneButton.addEventListener("click", () => {
    const fortunes = [
        "Your future is slightly suspicious, check under your bed.",
        "You will meet a mysterious pineapple tomorrow.",
        "Beware of overly friendly pigeons today.",
        "You will accidentally invent a new dance move.",
        "A magical door will appear where you least expect it."
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneDisplay.textContent = randomFortune;

    localStorage.setItem("lastOpened", today);
    fortuneButton.disabled = true;
});*/

function handleCookieClick(clickedCookie, otherCookies) {
    otherCookies.forEach(cookie => {
        cookie.style.display = "none";
    });
    clickedCookie.classList.add("zoomed");
    document.documentElement.style.backgroundImage = "none";
    
    // After animation completes, hide clicked cookie and show zoom-cookie
    setTimeout(() => {
        clickedCookie.style.display = "none";
        zoomCookie.style.display = "block";
    }, 500);
}

cookie1.addEventListener("click", () => {
    handleCookieClick(cookie1, [cookie2, cookie3, cookie4]);
});

cookie2.addEventListener("click", () => {
    handleCookieClick(cookie2, [cookie1, cookie3, cookie4]);
});

cookie3.addEventListener("click", () => {
    handleCookieClick(cookie3, [cookie1, cookie2, cookie4]);
});

cookie4.addEventListener("click", () => {
    handleCookieClick(cookie4, [cookie1, cookie2, cookie3]);
});

// break cookie when clicked animation thing

const breakFrames = [
    "assets/cbreak-1.PNG",  // slightly cracked
    "assets/cbreak-2.PNG",  // more cracked
    "assets/cbreak-3.PNG",  // broken with paper
    "assets/cbreak-4.PNG"   // fully open
];

let currentFrame = 0;

zoomCookie.addEventListener("click", () => {
    if (currentFrame < breakFrames.length - 1) {
        zoomCookie.classList.add("shake");

        setTimeout(() => {
            zoomCookie.classList.remove("shake");

            currentFrame++;
            zoomCookie.src = breakFrames[currentFrame];

            if (currentFrame === breakFrames.length - 1) {
                showFortune();
            }

        }, 300); 

    } else {
        showFortune();
    }
});


function showFortune() {
    const fortunes = [
        "Your future is slightly suspicious.",
        "You will meet a mysterious pineapple.",
        "Beware of overly friendly pigeons.",
        "You will accidentally invent a dance move.",
        "Your future is slightly suspicious, check under your bed.",
        "You will meet a mysterious pineapple tomorrow.",
        "Beware of overly friendly pigeons today.",
        "You will accidentally invent a new dance move.",
        "A magical door will appear where you least expect it."
    ];

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    fortuneDisplay.style.display = "block";
    fortuneDisplay.textContent = randomFortune;
}
