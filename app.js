const fortuneButton = document.getElementById("open-fortune");
const fortuneDisplay = document.getElementById("fortune");

const today = new Date().toDateString(); // "Thu Feb 13 2026"
const lastOpened = localStorage.getItem("lastOpened");
fortuneButton.addEventListener("click", () => {
    //if (lastOpened === today) {
    //    fortuneDisplay.textContent = "Come back tomorrow for a new fortune!";
    //    fortuneButton.disabled = true;
    //} else {
        
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
       // }
});
