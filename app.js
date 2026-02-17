/*const fortuneButton = document.getElementById("open-fortune");
const fortuneDisplay = document.getElementById("fortune");*/

// cookies
const cookie1 = document.getElementById("c1");
const cookie2 = document.getElementById("c2");
const cookie3 = document.getElementById("c3");
const cookie4 = document.getElementById("c4");
const zoomCookie = document.getElementById("zoom-cookie");
const fortuneDisplay = document.getElementById("fortune");
const clickText = document.getElementById("click-text");
const clickOpen = document.getElementById("click-open");


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
    clickText.style.display = "none";
    // After animation completes, hide clicked cookie and show zoom-cookie
    setTimeout(() => {
        clickedCookie.style.display = "none";
        zoomCookie.style.display = "block";
        clickOpen.style.display = "block";
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
        "You will meet a mysterious pineapple.",
        "Beware of overly friendly pigeons.",
        "You will accidentally invent a dance move.",
        "Your future is slightly suspicious, check under your bed.",
        "A magical door will appear where you least expect it.",
        "Your next snack will be surprisingly epic.",
        "Someone will compliment your chaotic brilliance soon.",
        "A small risk today leads to a huge laugh tomorrow.",
        "Beware of socks that disappear in the laundry—they have a plan.",
        "Your phone will beep at the perfect moment.",
        "A random stranger’s advice will make you rethink tacos.",
        "Good news comes disguised as a tiny paper airplane.",
        "Your next adventure will involve a very confused cat.",
        "You will find a hidden talent for interpretive dance.",
        "A fortune cookie will reveal a secret about your future.",
        "Your next big idea will come from a dream about cheese.",
        "You will discover a new favorite song in the next week.",
        "A surprise encounter will lead to an unforgettable story.",
        "Your next meal will be the best thing you’ve ever tasted.",
        "You will have a hilarious misunderstanding that turns into a great story.",
        "A mysterious opportunity will knock—answer with snacks in hand.",
        "Your next idea is either brilliant or mildly chaotic. Probably both.",
        "Someone will misunderstand you today… in a way that makes you laugh.",
        "Happiness sneaks in through the Wi-Fi sometimes.",
        "The fortune you seek is hidden in the last place you’d expect: the fridge.",
        "Adventure calls—but it might be from your couch."
    ];

    const todayKey = new Date().toDateString();
    const storedDay = localStorage.getItem("fortuneDay");
    const storedPool = localStorage.getItem("fortunePool");
    let pool = [];

    if (storedDay === todayKey && storedPool) {
        pool = JSON.parse(storedPool);
    }

    if (pool.length === 0) {
        pool = Array.from({ length: fortunes.length }, (_, index) => index);
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
    }

    const nextIndex = pool.pop();
    localStorage.setItem("fortuneDay", todayKey);
    localStorage.setItem("fortunePool", JSON.stringify(pool));

    fortuneDisplay.style.display = "block";
    fortuneDisplay.textContent = fortunes[nextIndex];
    zoomCookie.style.pointerEvents = "none";
}
