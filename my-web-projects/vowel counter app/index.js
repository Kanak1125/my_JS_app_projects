const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text');

checkBtn.addEventListener('click', () => {
    checkVowel();
    textInput.value = "";
})

function checkVowel() {
    const text = textInput.value;
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u' || text[i] == 'A' || text[i] == 'E' || text[i] == 'I' || text[i] == 'O' || text[i] == 'U')
        {
            count += 1;
        }  
    }

    if(count === 1){
        alert("There is "+ count +" vowel!");
    }
    else {
        alert("There are "+ count +" vowels!");
    } 
}