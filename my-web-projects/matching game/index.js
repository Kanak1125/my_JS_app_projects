const images = new Array('spade.png', 'club.png', 'diamond.png');  //Alternate way to create array that stores png files..
const imgClicked = document.querySelectorAll('.click-img');
const displayImage = document.querySelectorAll('.image');

// EVENT LISTENERE for each div element with class 'click-img'..
imgClicked.forEach(image =>
    image.addEventListener('click', (e) => {
    addImg(e);
    console.log(e.target);
    // UIimg();
}))

// to generate random image..
function addImg(image_element) {
    const randomImg = Math.floor(Math.random() * images.length);    // stores random INDEX of images array..
     displayImage.forEach(img => {
        const image = document.createElement('img');
        image.src = images[randomImg];
        img.appendChild(image);
        console.log(image.src);
    })
    
    //adds the image after the div with IMAGE id in HTML file..
    // UIimg(image);
    
}

// function UIimg(img) {
//     displayImage.forEach(image => {     //inside EACH 'div' element image is to be displayed passing into the image argument..
//         image.appendChild(img); 
//         console.log(image.target);
//     })
// }