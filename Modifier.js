function hideDifficulties() {
    //Select all difficulty elements
    const difficultyElements = document.querySelectorAll('.text-difficulty-hard, .text-difficulty-easy, .text-difficulty-medium');
    
    if (difficultyElements.length !== 0) {
        difficultyElements.forEach(elem => {
            const diff = elem.innerText;
            //Log the difficulty
            console.log(`This LeetCode problem is: ${diff}`);
            
            //Remove all the special styling that can be hint towards difficulty level
            [...elem.classList].forEach(className => {
                if (className.toLowerCase().includes(diff.toLowerCase())) {
                    elem.classList.remove(className);
                }
            });
            
            //Change the text of the display
            elem.innerText = "Difficulty: Hidden";
        });
    }
}

hideDifficulties();

//Attach observer to the document body
let timeout;
const observer = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        hideDifficulties();
    }, 100);
});

/*
Need to find more precise parent element that persists when randomizing to prevent unecesary calls
const description = document.querySelector('.flex .h-full .w-full .flex-col');
*/

observer.observe(document.body, { childList: true, subtree: true });
