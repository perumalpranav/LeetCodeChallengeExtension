const difficulty = document.querySelector('.text-difficulty-hard, .text-difficulty-easy, .text-difficulty-medium');

if (difficulty) {
    console.log(`This LeetCode problem is: ${difficulty.innerText}`);
    difficulty.remove();
}
else {
    alert("Couldn't find the difficulty display!")
}


