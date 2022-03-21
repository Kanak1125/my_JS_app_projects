const addBtn = document.getElementById('btn')       //fetching ID of ADD NOTE btn..
const noteContainer = document.querySelector('.note-container')       // grid where the notes are listed..
const modalContainer = document.querySelector('.modal_container')   //to store the class of value 'modal_container' to modalContainer
const modalBtn = document.querySelector('.modal-btn')       // cross sign, to close the modal..
const noNotes = document.querySelector('.no-notes')         //line with "No notes added yet!"

//creating a new note using Class ..
class Note {
    constructor(title, body) {      //arguments inside the constructor() method
        this.title = title          // value from Note.title is assigned to title argument..
        this.body = body
        this.id = Math.random()     //to identify the id of the note in local storage..
    }
}

//function to get notes from the local storage..
function getNotes() {
    let notes;
    if (localStorage.getItem('UInotes') === null) {
        notes = [];
    }
    else {
        notes = JSON.parse(localStorage.getItem('UInotes'));  //to get notes when there is a note stored in localStorage..
    }
    return notes;  
}

//functions to set notes to local storage..
function setNotes(note) {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem('UInotes',JSON.stringify(notes));
}

//functions to delete notes from the local storage and UI..
function deleteNotes(id) {
    const notes = getNotes();   //array from parsed notes are stored in notes variable..
    notes.forEach((note, index) => { // possible only because notes is an array where note is note element and index is the array-index of note object(including note.id, note.title & note.body)
        if(note.id === id) {
            notes.splice(index, 1); //notes is spliced only if the id given is matched..
        }
        localStorage.setItem('UInotes', JSON.stringify(notes)); //again stored the result in the local storage..
    })
}

// function to addNotes to the UI and to show the notes in defined pattern
function addNotes(note) {
    const noteBlock = document.createElement("div")
    noteBlock.classList.add('note-info')
    noteBlock.innerHTML = `
                            <span hidden>${note.id}</span>      <!--span attribute is hidden due to 'hidden' attribute-->
                            <h2 class = "note_title">${note.title}</h2>
                            <p class = "note_body">${note.body}</p>
                            <div class="note-btns">
                            <button class = "view-btn"> View detail </button>
                            <button class = "del-btn"> Delete Note </button>
                            </div>
                            `
    noteContainer.appendChild(noteBlock)        //to add the html code as a child of the noteContainer..
}

// function: Show notes in UI
function displayNotes() {
    const notes = getNotes();
    notes.forEach(note => {     //each note is passed on to the addNoted function to display it to the note container..
        addNotes(note);
    });
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault()      
    const getTitle = document.getElementById('title')
    const getNote = document.getElementById('textbox')
    
    if(getNote.value && getTitle.value) {
        // notes.push(getNote.value)
        const newNote = new Note(getTitle.value, getNote.value)     //passing notes' TITLE and notes' BODY to the constructor..
        
        getTitle.value = ""
        getNote.value = ""
        getTitle.focus()        // to re-focus the title input field after adding the note..
        addNotes(newNote);
        setNotes(newNote);
    }
})

//Event: Display Notes
document.addEventListener('DOMContentLoaded', displayNotes()) //DOMContentLoaded EVENT is used to load the notes to the page after the HTML page is loaded.

// Function: View note in modal..
function activateNoteModal(title, body) {
    const modalTitle = document.querySelector('.modal_title');
    const modalBody = document.querySelector('.modal_body');
    modalTitle.textContent = title; //update the modalTitle with the title..
    modalBody.textContent = body; //update the modalBody with the body..
    modalContainer.style.display = 'flex';      //to display('activate') the flex..
}

// Event: note Buttons..
noteContainer.addEventListener('click', (e) => {
    console.log(e.target)  // to check which of the element has been clicked.
    const currentNote = e.target.closest('.note-info')      //The closest() method in JavaScript is used to retrieve the closest ancestor, or parent of the element that matches the selectors. If there is no ancestor found, the method returns null.

    if(e.target.classList.contains('view-btn')) {   //activated if the targeted classList contains '.view-btn' class..
        
        const currentTitle = currentNote.querySelector('.note_title').textContent;
        const currentBody = currentNote.querySelector('.note_body').textContent;
        activateNoteModal(currentTitle, currentBody);
    }
    
    else if(e.target.classList.contains('del-btn')) {   //activated if the targeted classList contains '.del-btn' class..
        currentNote.remove();   //to remove the note of that class
        const id = currentNote.querySelector('span').textContent;   // the textContent(i.e. ID of note) inside span element is assigned to the id variable..
        deleteNotes(Number(id));    //this method converts the value to the number..

    }
})   
    
//display none for modal..
modalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
})