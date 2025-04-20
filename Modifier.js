const difficulty = document.querySelector('.text-difficulty-hard, .text-difficulty-easy, .text-difficulty-medium');

if (difficulty) {
    difficulty.remove();
}
else {
    alert("Couldn't find the difficulty display!")
}
