const difficultyElements = document.querySelectorAll('.text-difficulty-hard, .text-difficulty-easy, .text-difficulty-medium');

const modifier = (elem) => {
    const diff = elem.innerText;
    console.log(`This LeetCode problem is: ${diff}`);

    //Remove all the special styling that can be hint towards difficulty level
    [...elem.classList].forEach(className => {
        if (className.toLowerCase().includes(diff.toLowerCase())) {
            elem.classList.remove(className);
        }
    })

    //Change the text of the display
    elem.innerText = "Difficulty: Hidden";
};

difficultyElements.forEach(elem => {
    //Perform initial modification
    modifier(elem);

    //Set up observer to modify again if there are dynamic updates
    new MutationObserver(() => modifier(elem))
        .observe(elem, { attributes: true, attributeFilter: ['class'] });
});

if (difficultyElements.length === 0) {
    alert("Couldn't find the difficulty display!")
}

