
const pages = document.querySelectorAll('.page');
const clickHint = document.getElementById('clickHint');
let currentPage = 0;

function showPage(index) {
    pages.forEach((p, i) => {
        p.style.display = i === index ? 'flex' : 'none';
    });
    setTimeout(() => {
        canAdvance = true;
        clickHint.style.opacity = 1;
    }, 20000);
}

function nextPage() {
    if (!canAdvance) return;
    currentPage++;
    if (currentPage < pages.length) {
        canAdvance = false;
        clickHint.style.opacity = 0;
        showPage(currentPage);
    }
}

document.addEventListener('click', nextPage);

let canAdvance = false;
showPage(currentPage);

function createFallingWords() {
    const words = ["Work", "School", "Success", "Normal", "Safe", "Money", "Fame", "Productive"];
    const container = document.querySelector('.falling-words');
    for (let i = 0; i < 50; i++) {
        const span = document.createElement('span');
        span.className = 'word';
        span.innerText = words[Math.floor(Math.random() * words.length)];
        span.style.left = `${Math.random() * 100}%`;
        span.style.animationDuration = `${3 + Math.random() * 5}s`;
        container.appendChild(span);
    }
}

createFallingWords();
