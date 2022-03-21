const lightbox = document.createElement('div');
lightbox.id = 'lightbox';        // id given to lightbox div..
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {   //while there exists first image children inside div element(#lightbox) it removes the first child of lightbox..
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);  //after removing the firstchild of lightbox img tag is appended inside lightbox..
    })
})

lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return;   /*here e.target == what you clicked on.. and e.currentTarget == lightbox
        so if the target is image which is not equals to lightbox(the current target) the statement below the if will not execute.. When e.target is lightbox that equals e.currentTarget the statement below will execute..
        */
        lightbox.classList.remove('active');
})