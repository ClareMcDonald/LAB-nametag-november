/*Input
Why? This tells us what words we will add to the box.
How?
gives an input element, which grabs whatever words the user has typed */
const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');
const boxEl = document.getElementById('box');

const blueButton = document.getElementById('blue');
const grayButton = document.getElementById('gray');
const greenButton = document.getElementById('green');


/*Why? This tells us when we add to the box.
How? */

    // in here, do stuff
buttonEl.addEventListener('click', () => {
    boxEl.textContent = inputEl.value;
    inputEl.value = '';
})

blueButton.addEventListener('click', () => {
    boxEl.style.backgroundColor = 'blue';

})


/* Some other div
Why? This is the box we'll inject words into.
How? */



