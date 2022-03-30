const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
const clickBtn = document.querySelector('.btn');
const mainBody = document.querySelector('.main');
let colorName = document.getElementById('color');

clickBtn.addEventListener('click', () => {
    const i = Math.floor(Math.random() * colors.length);
    mainBody.setAttribute('style', `background: ${colors[i]}; transition: all 500ms linear;`);   
    colorName.textContent = colors[i];
});