const canvas = document.getElementById('canvas');
const ctxt = canvas.getContext('2d'); //obtain a 2D context from the canvas element.
const colorContainer = document.querySelector('.colors')
const mouse = {
    x: undefined,
    y: undefined,
}
const colors = ['red',
                'green', 
                'blue', 
                'cyan', 
                'magenta', 
                'yellow', 
                'pink', 
                'black', 
                'whitesmoke',
                'lightgreen',
                'skyblue'];

 let painting = false;
 let draw = false;

const eraser = document.querySelector('.eraser');
const clearPage = document.querySelector('.clear_page');

function starting_pos() {
    painting = true;
    animate()
}
function finishing_pos() {
    ctxt.closePath();
    painting = false;
}

for(let i = 0; i <= colors.length; i++) {
    const color_box = document.createElement('div');
    color_box.className = 'color_box'
    color_box.style.backgroundColor = colors[i]
    color_box.addEventListener('click', switchColor)
    colorContainer.appendChild(color_box)
}

//function to switch paint brush color...
function switchColor(e) {
    mouse.x = undefined
    mouse.y = undefined
    const currentColor = e.target
    paint(currentColor.style.backgroundColor)
    if(currentColor) currentColor.classList.add('color_active')
}

//event listener to paint on canvas
canvas.addEventListener('mousedown', starting_pos)
canvas.addEventListener('mouseup', finishing_pos)
canvas.addEventListener('mousemove', event => {
    mouse.x = event.offsetX
    mouse.y = event.offsetY
})

//function to paint...
function paint(color) {
    if(draw == true)
    if(!painting) return;
    const radius = 10
    ctxt.fillStyle = color
    
    ctxt.beginPath()
    ctxt.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2)
    ctxt.fill()
}

function animate() {
    if(!painting) return
    paint()
    requestAnimationFrame(animate)
}

//function to clear the drawing console...
function clear_page() {
    ctxt.clearRect(0, 0, canvas.width, canvas.height)
}

//function for eraser...
function erase() {
    painting = false;
    ctxt.fillStyle = 'white'
}

clearPage.addEventListener('click', clear_page)
eraser.addEventListener('mousedown', erase)