const leftPage = document.getElementById('leftPage');
const rightPage = document.getElementById('rightPage');
const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');
const puzzleButton = document.getElementById('puzzleButton');
const puzzleModal = document.getElementById('puzzleModal');
const solvePuzzle = document.getElementById('solvePuzzle');

let currentPage = 0;

// Example pages
const pages = [
    ["[Blank]", "The Gold-Bug by Edgar Allan Poe"],
    ["Once upon a time...", "The narrator arrives on Sullivan's Island."],
    ["He meets Legrand.", "Legrand shows interest in strange symbols."],
    ["This page is partially visible...", "[REDACTED - puzzle lockout]"]
];

const lockedPages = [3]; // lock puzzle before showing page 3

function updatePages() {
    const left = pages[currentPage]?.[0] || "";
    const right = pages[currentPage]?.[1] || "";

    leftPage.innerHTML = left;
    rightPage.innerHTML = lockedPages.includes(currentPage) ?
        `<div class="blacked-out">[Redacted — Solve puzzle]</div>` : right;

    leftArrow.classList.toggle('disabled', currentPage === 0);
    rightArrow.classList.toggle('disabled',
        currentPage >= pages.length - 1 || lockedPages.includes(currentPage)
    );

    puzzleButton.classList.toggle('hidden', !lockedPages.includes(currentPage));
}

rightArrow.addEventListener('click', () => {
    if (currentPage < pages.length - 1 && !lockedPages.includes(currentPage)) {
        currentPage++;
        updatePages();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

puzzleButton.addEventListener('click', () => {
    puzzleModal.classList.remove('hidden');
});

solvePuzzle.addEventListener('click', () => {
    // Puzzle “solved”
    lockedPages.splice(lockedPages.indexOf(currentPage), 1);
    puzzleModal.classList.add('hidden');
    updatePages();
});

updatePages();
