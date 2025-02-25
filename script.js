const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const resultContainer = document.getElementById("resultContainer");

noBtn.addEventListener("mouseover", () => {
    const newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
    resultContainer.classList.remove("hidden");
});
