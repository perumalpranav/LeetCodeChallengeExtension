const difficultyElement = document.querySelector('.text-difficulty-hard, .text-difficulty-easy, .text-difficulty-medium');

if (difficultyElement) {
    const diff = difficultyElement.innerText;
    console.log(`This LeetCode problem is: ${diff}`);

    //Remove all the special styling that can be hint towards difficulty level
    difficultyElement.classList.forEach(className => {
        if (className.toLowerCase().includes(diff.toLowerCase())) {
            difficultyElement.classList.remove(className);
        }
    })

    difficultyElement.innerText = "Difficulty: Hidden";
}
else {
    alert("Couldn't find the difficulty display!")
}
