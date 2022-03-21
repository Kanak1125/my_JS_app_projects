// let notes = []
const addBtn = document.getElementById('btn')       //fetching ID of ADD NOTE btn..
let noteContainer = document.querySelector('.note-container')       // grid where the notes are listed..
const modalContainer = document.querySelector('.modal_container')   //to store the class of value 'modal_container' to modalContainer
const modalBtn = document.querySelector('.modal-btn')       // cross sign, to close the modal..
const noNotes = document.querySelector('.no-notes')         //line with "No notes added yet!"

const viewBtn = document.querySelectorAll('.view-btn') //to store the class of view-btn to viewBtn constant..

//creating a new note using Class ..
class Note {
    constructor(title, body) {      //arguments inside the constructor() method
        this.title = title          // value from Note.title is assigned to title argument..
        this.body = body
        this.id = Math.random()     //to identify the id of the note in local storage..
    }
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

addBtn.addEventListener("click", (e) => {
    e.preventDefault()      
    const getTitle = document.getElementById('title')
    const getNote = document.getElementById('textbox')
    
    if(getNote.value && getTitle.value) {
        // notes.push(getNote.value)
        const newNote = new Note(getTitle.value, getNote.value)     //passing notes' TITLE and notes' BODY to the constructor..
        getTitle.value = ""
        getNote.value = ""
        getTitle.focus()        // to re-focus the title input field after adding the note..
        noNotes.style.display = "none"
        addNotes(newNote)
    }
})

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

    if(e.target.classList.contains('view-btn')) {   //activated if the targeted classList contains '.view-btn' class..
        const currentNote = e.target.closest('.note-info')      //The closest() method in JavaScript is used to retrieve the closest ancestor, or parent of the element that matches the selectors. If there is no ancestor found, the method returns null.
        const currentTitle = currentNote.querySelector('.note_title').textContent;
        const currentBody = currentNote.querySelector('.note_body').textContent;
        activateNoteModal(currentTitle, currentBody);
    }
})

//display none for modal..
modalBtn.addEventListener('click', () => {
    console.log("clicked")
    modalContainer.style.display = 'none';
})