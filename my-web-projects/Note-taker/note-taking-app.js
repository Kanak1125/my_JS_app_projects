let notes = []
const addBtn = document.getElementById('add-btn')
const getInput = document.getElementById('my-input')
const noteList = document.getElementById('notes-table')
//const tableData = document.getElementById('table-data')

const viewBlock = document.querySelector('.modal-container')
const closeBtn = document.querySelector('.modal_btn')

class Note{
    constructor (body) {
        this.body = body;
        this.id = Math.random(); //to keep track of your notes in array in the local storage...
    }
}

addBtn.addEventListener("click", function() {
    if(getInput.value) {
        notes.push(getInput.value)
        listNotes(notes)
    }
    getInput.value = ""
})

function listNotes(note) {
    const newUINote = document.createElement('div');
    newUINote.classList.add('Note');
    newUINote.innerHTML = `
                            <span hidden> ${note.id}</span>
                                <h1 style = "color: blue; user-select: none;"> Note </h1> 
                                <p id = "style-a"> ${note.body} </p>
                            `
    /*let myNotes = ""
    for( let i = 0; i < note.length; i++) {
        myNotes += `
                    <span hidden> ${note.id} </span>
                    <div style = "padding: 27px;">
                    <p id = "style-a">
                    <h1 style = "color: blue; user-select: none;">${"Note " + (i+1)}</h1> 
                    <p>
                    ${note[i]}
                    </p>
                    </div>
                    </a>
                    </div>
                    `
                }
    noteList.innerHTML = myNotes*/
}

function viewNote() {
   viewBlock.style.display = "block";
}

closeBtn.addEventListener("click", function() {
    viewBlock.style.display = "none";   
})

/*function myPopup() {
    const popUp = document.getElementById('pop-it')
    let i = 0;
    //popUp.classList.toggle("show")
    let fullPopup = ` 
                    <div>
                        dfsgdfgdfgdfgdfgdfg
                    </div>
                    `
    }*/