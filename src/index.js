// Add javascript code to Party Parrot Clicker such that:

const state = {
  count: 0,

};
// 1. A click on the Party Parrot increases the counter by 1
const addToCounter = () => {
  const currentCount = document.getElementById('click-count');
  state.count += 1;
  currentCount.textContent = state.count;
  if (state.count > 5) {
    const parrotImg = document.querySelector('img');
    parrotImg.classList.add('enlarge');
  }
};

const registerEventHandlers = () => {
  const addCount = document.querySelector('#add-parrot');
  addCount.addEventListener('click', addToCounter);
  const resetCount = document.querySelector('#reset');
  resetCount.addEventListener('click', resetCounter);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);


// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.

const resetCounter = () => {
  const currentCount = document.getElementById('click-count');
  state.count = 0;
  currentCount.textContent = state.count;
};

// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)



// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
