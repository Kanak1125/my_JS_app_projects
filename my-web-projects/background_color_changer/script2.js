const colorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const clickBtn = document.querySelector('.btn');
const mainBody = document.querySelector('.main');
let colorName = document.getElementById('color');

clickBtn.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        const randomArray = Math.floor(Math.random() * colorArr.length);    //to get random element from the 'colorArr' 6 times...
        hexColor += colorArr[randomArray];      //concatenates the character from the array to 'hexColor' string...
    }
    mainBody.setAttribute('style', `background: ${hexColor}; transition: all 500ms linear;`);
    colorName.textContent = hexColor;
})