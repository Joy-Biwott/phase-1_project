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

//define the first form's callback function 
//on submitting the input, taget it to the <div> section below where it's presented as an ordered list
//attach a button to each list where the client can delete the input
//on clicking the button, the callback function deleteAct() is triggered
function makeTheList(list1){
    const li = document.createElement('li')
    const list =document.querySelector('#toDo')
    const btn = document.createElement('button')
    const ol = document.querySelector('#tasks')
    ol.appendChild(li);
    li.textContent = `${list1 }`
    li.appendChild(btn);
    btn.textContent = 'remove'
    btn.addEventListener('click', deleteAct);
    
} 

//deleteAct() is a callback function that on clicking a button, it removes the input it is attached to
function deleteAct(e){
    e.target.parentNode.remove();
}