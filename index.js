//Select the first form
//Target whatever input the client types
//create a callback function that indicates what happens after submitting the data
document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector('form');    
    form.addEventListener('submit', (e) =>{
        let theTarget = e.target.myList.value;
        if(theTarget === ""){
            alert("input must be filled")
        } else{
            e.preventDefault();
        
           
            makeTheList(theTarget);
            form.reset(); 
        }
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

//select the 2nd form
//once the page has loaded, add an event listener to it to submit the input
//create a callback function to be invoked once form has been submitted
document.addEventListener('DOMContentLoaded', () => {
    const secondForm = document.querySelector('#secondForm')
    secondForm.addEventListener('submit', (sth) => {
        let theTarget = sth.target.secondList.value
        if(theTarget === ""){
            alert("input must be filled!")
        } else{
        sth.preventDefault();
        makeSecondList(sth.target.secondList.value)
        secondForm.reset();
        }
    })
})

//on submitting the second form, the makeSecondList() function is triggered
//it creates a list and adds the input in the second list to the <div> element
//the button attached to each list content triggers the deleteAct() which removes that content
function makeSecondList(theTargeted){
    const li = document.createElement('li')
    const ol = document.getElementById('typed2')
    li.textContent = `${theTargeted}`
    ol.appendChild(li);
    const btn = document.createElement('button')
    li.appendChild(btn)
    btn.textContent = 'remove'
    btn.addEventListener('click', deleteAct)    
}

//get the first <h1> element and give it a variable
//create a function that gets a random combination every one and a half second to change the yaay color randomly
const div = document.getElementById("intro");
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
    div.style.color= getRandomColor();
  }
  
setInterval(changeColor,1500); 

//once input filled and form submitted, the data goes to the unordered list below
//operate on the conclusion
//compile the lists of the person's activities
//give a number after they click of the activities theyve done
      
const button = document.getElementById('concButton');
button.addEventListener('click', buttonClick)
async function buttonClick() {
    const div = document.querySelector('#conclusion');
    const p = document.createElement('p')
    div.appendChild(p);
    const myArr = []
    const tasks =document.querySelector('#tasks')
    let list = tasks.getElementsByTagName('li');
    for(let i=0; i<list.length; i++) {
        myArr.push(list[i].innerText)
    }
    const otherArr = []
    const list2 = document.querySelector('#typed2')
    let otherList = list2.getElementsByTagName('li');
    for (let y=0; y<otherList.length; y++){
        otherArr.push(otherList[y].innerText)
    }
    if((myArr.length > 1) && (otherArr.length > 1)){
        p.textContent = `You had ${myArr.length } good moments and ${otherArr.length } difficult ones today.`
      }  else if((myArr.length = 1) && (otherArr.length = 1)){
        p.textContent = `You had only ${myArr.length} great moment and ${otherArr.length} difficult one today.`
      } 

//call the fetchData function once the button has been clicked   
//specifically target the description.
    const data = await fetchData()
    console.log(data)
    const div2 = document.createElement('div')
    div2.textContent = data.description
    div.appendChild(div2)
    }

//define the fetchData function
//fetch some URL and post it
//return the data
async function fetchData(){
    const data = await fetch('https://aztro.sameerkumar.website/?sign=aries&day=today', {
        method: 'POST'
    })
    const someName = await data.json()
    return someName
}

function required(){
    const selectForm = document.forms["thisForm"]['myList'].value
    if (selectForm == ""){
        alert("Please input a Value");
        return false;
    } else {
        alert('value accepted : you can try another');
        return true;
    }
}

fetchData()




