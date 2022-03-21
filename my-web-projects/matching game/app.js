const imageArray = new Array('images/binance.png', 'images/bitcoin_SV.png', 'images/bitcoin.png', 'images/cardano-ADA.png','images/celsius.png','images/dash.png','images/dogecoin.png', 'images/EOS_coin.png', 'images/ethereum.png', 'images/nano.png', 'images/NEM.png', 'images/neo.png', 'images/polkadot.png', 'images/stellar-XML.png', 'images/tether.png', 'images/tron.png', 'images/xrp.png', 'images/zcash.png', 'images/binance.png', 'images/bitcoin_SV.png', 'images/bitcoin.png', 'images/cardano-ADA.png','images/celsius.png','images/dash.png','images/dogecoin.png', 'images/EOS_coin.png', 'images/ethereum.png', 'images/nano.png', 'images/NEM.png', 'images/neo.png', 'images/polkadot.png', 'images/stellar-XML.png', 'images/tether.png', 'images/tron.png', 'images/xrp.png', 'images/zcash.png');

const imageRandom = imageArray.sort(() => 0.5 - Math.random());  //sorts the array randomly..
// the value larger than 0.5 and smaller than 0.5 will suffle..
const score = document.getElementById('score');
let scoreNumber = 0;
const displayImage = document.querySelector('.wrapper');
let imageChosen = []; // will be used to check the match of the image..
let imageChosenIds = []; // ids will be pushed to this array of the chosen image..
const imageWon = [];    //to know the matches OR cards won..
const reloadBtn = document.querySelector('.reload');

function displayScore() {
    score.textContent = "Your score: " + scoreNumber;
}
displayScore();

function showImage() {
    for (let i = 0; i < 36; i++) {
        const image = document.createElement('img');
        image.setAttribute('src', 'images/dark_green.png'); //method to set any ATTRIBUTE to the html tag..
        image.setAttribute('data-id', i);   //just to keep track of the image..
        image.addEventListener('click', flipImage);
        console.log(image, i);
        displayImage.appendChild(image);
    }
}
showImage();

function checkMatch() { //function to check match..
    // if(imageArray[imageId])
    const images = document.querySelectorAll('img');
    const optionOneId = imageChosenIds[0];
    const optionTwoId = imageChosenIds[1];

        if(optionOneId == optionTwoId) {
            alert('You have clicked the same image.');
        }
        if(imageChosen[0] == imageChosen[1] && imageChosenIds[0] != imageChosenIds[1]) {  //to run the code inside the if statement only if when the 1st and second flipped image are equal..
            // alert("You found a match.");
            //the following two will help to set the respective image to white if they match..
            images[optionOneId].setAttribute('src', 'images/white_image.png');
            images[optionTwoId].setAttribute('src', 'images/white_image.png');
            images[optionOneId].removeEventListener('click', flipImage);
            images[optionTwoId].removeEventListener('click', flipImage);
            imageWon.push(imageChosen);
            console.log(imageWon);
            scoreNumber += 10;
            score.style.color = "green";
            displayScore();
        }
        else {
            images[imageChosenIds[0]].setAttribute('src', 'images/dark_green.png');
            images[imageChosenIds[1]].setAttribute('src', 'images/dark_green.png');
            alert('Sorry try again');
            if(scoreNumber > 0) {
            scoreNumber -= 5;
            }
            score.style.color = "red";
            displayScore();
        }

        imageChosen = [];
        imageChosenIds = [];

        if(imageWon.length === (imageArray.length/2)) {   //There are only half pair of matches...
            alert("Wohoo you've won the match");
            score.style.color = "blue";
        }
}

function flipImage() {
    const imageId = this.getAttribute('data-id');   //'this' keyword represents whatever image. In this, 'this' keyword used with getAttribute gives us id of whatever image tag we clicked on..
        imageChosen.push(imageArray[imageId]);
        imageChosenIds.push(imageId);
    
    console.log(imageChosen);
    console.log(imageChosenIds);
    this.setAttribute('src', imageArray[imageId]);  //sets image source of the selected image element from an array..
    
    if (imageChosen.length === 2) {
        setTimeout( checkMatch, 500)    // setTimeout() will call the function "checkMatch" after 500 ms if the length of imageChosen array is 2..
    }
}

reloadBtn.addEventListener('click', () => window.location.reload());        //js method to reload the page (to play again..)