const myLibrary = [];


function Book(ID, title, author, pages) { 
    this.ID = ID;
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) { 
    myLibrary.push(new Book(crypto.randomUUID(), title, author, pages));
    console.log(myLibrary);
}

/* loop through the library array elements and create table elements every time
    a new item has been added or removed.
*/

function updateTable() { 
    // WIP: updates the table if add or remove is pressed
    const table = document.querySelector(".book-table").querySelector("tbody");
    let count = 0;
    table.innerHTML = ""; 


    myLibrary.forEach((book) => { 
        const row = table.insertRow();
        row.insertCell().textContent = ++count; // Incrementing # count for each book
        row.insertCell().textContent = book.title;
        row.insertCell().textContent = book.author;
        row.insertCell().textContent = book.pages;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove Book";
        row.insertCell().appendChild(deleteButton);

                
        deleteButton.addEventListener("click", () => { 
            myLibrary.splice(myLibrary.indexOf(book), 1);
            updateTable();
        });
        
        

        });

}



        
document.querySelector("#submit-button").addEventListener("click", (e) => {
    e.preventDefault(); 
    const title = document.querySelector("#book-name").value;   
    const author = document.querySelector("#book-author").value;
    const pages = document.querySelector("#pages").value;
    
    if (!title || !author || !pages) {
        alert("Please fill in all fields.");
        return;
    } else { 
        addBookToLibrary(title, author, pages);
        document.querySelectorAll("#book-name, #book-author, #pages").forEach(element => {
            element.value = "";
        });
    }

    updateTable();
    dialog.close();
});




// modal section

const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#show-button");

const cancelButton = document.querySelector("#cancel-button");

addButton.addEventListener("click", () => { 
    dialog.showModal();
});

cancelButton.addEventListener("click", () => { 
    dialog.close();
})

