//Select the first form
//Target whatever input the client types
//create a callback function that indicates what happens after submitting the data
document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector('form');    
    form.addEventListener('submit', (e) =>{
            e.preventDefault();
    
    let theTarget = e.target.myList.value;       
            makeTheList(theTarget);
            form.reset(); 
        })
        
    })