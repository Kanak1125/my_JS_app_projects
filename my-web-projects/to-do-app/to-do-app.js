let myItem = []
const listItem = document.getElementById("list-item")
const inputBtn = document.getElementById("input-btn")
const subBtn = document.getElementById("sub-btn")
const clrBtn = document.getElementById("clr-btn")
const itemfromlocalStorage = JSON.parse( localStorage.getItem("myItem"))

// rendering the item of an array in list only if the item is pusshed to "myItem" array and stored in local storage..
if( itemfromlocalStorage ) { 
        myItem = itemfromlocalStorage
         listValue() 
}

//function to list the items from the local storage..
function listValue() {
    let myLists = ""
        //(//....THIS WAS MY TRY FOR RENDERING AND DELETING SPECIFIC ITEM FROM AN ARRAY BUT THE DELETION DIDN'T WORK...)
        /*
         for (let i = 0; i < listIt.length; i++) {
            myLists += `<li>
                           ${listIt[i]}
                           <button id = "cancel-btn" onclick = "deleteItem()"> X </button>
                           <button onclick = "deleteItem()"> Done </button>
                       </li>`           
       }*/

       //USING THE forEach() method for the first time that successfully helped to delete the specific element..
       myItem.forEach((element, index) => {
        myLists += `<li>
                    ${element}
                    <button id = "cancel-btn" onclick = "deleteItem(${index})"> X </button>
                    <button id = "done-btn" onclick = "deleteItem(${index})"> Done </button>
                    </li>`           
       })
       listItem.innerHTML = myLists
    
    }
    //EVENTLISTENER to clear all the data from the local storage and Indeed from the to-do-list..
       clrBtn.addEventListener("dblclick", function() {
        localStorage.clear()
        myItem = []
        listValue()
    } )

// Eventlistener for the ENTER key pressed down to input the to-do...
document.addEventListener("keydown", function(event) {

	if(event.keyCode === 13) {
	event.preventDefault()
	
	if(inputBtn.value){
          	  myItem.push(inputBtn.value)    
		}
	
	inputBtn.value = ""     // emptying the input field after adding the input..
        localStorage.setItem("myItem",JSON.stringify(myItem))
        listValue()
        }
	
        // Trigger the button element with a click
  
})

//Event Listener to push the data and store the input in the local storage...
	subBtn.addEventListener("click", function() {
        if(inputBtn.value){
            myItem.push(inputBtn.value)
        }
        
        inputBtn.value = ""
        localStorage.setItem("myItem",JSON.stringify(myItem))
        listValue()
    })


    //function to delete the specific item from the local storage...
    function deleteItem(index) {
        const itemForAct = JSON.parse(localStorage.getItem("myItem"))
        itemForAct.splice(index, 1)
        localStorage.setItem("myItem",JSON.stringify(itemForAct))
        myItem = itemForAct
        listValue()
    }

    //function to strike item that is completed...
    /*function strikeItem() {
        //const itemForAct = JSON.parse(localStorage.getItem("myItem"))
        document.getElementById('done-btn').style.setProperty("text-decoration",'line-through')
    }
    */



   