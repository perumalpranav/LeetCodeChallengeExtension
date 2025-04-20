const style = document.createElement('style');
style.innerHTML = `
.LeetCodeChallengeHider {
    position: relative;
    overflow: hidden;
}
.LeetCodeChallengeHider::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 1;
    transition: opacity 0.3s ease;
    pointer-events: none;
}
.LeetCodeChallengeHider:hover::after {
    opacity: 0;
}

.LeetCodeChallengeWidth {
    width: 100px;
}
`;

document.head.appendChild(style);

function hider() {
    const difficulty = document.querySelector('.text-difficulty-hard, .text-difficulty-easy, .text-difficulty-medium');
    if (difficulty && !difficulty.classList.contains('LeetCodeChallengeHider')) {
      difficulty.classList.add('LeetCodeChallengeHider', 'LeetCodeChallengeWidth');
    }
}

hider();

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        hider();
      }
    }
});
  
/*
Need to find more precise parent element that persists when randomizing to prevent unecessary calls
const description = document.querySelector('.flex .h-full .w-full .flex-col');
*/

observer.observe(document.body, { childList: true, subtree: true });
