function printcansole(){  
     let input = document.getElementById("in")

let ininput = input.value;

if (ininput.trim() === "") return;

let parents = document.createElement("div")

parents.setAttribute('class','parents')

let neweliment = document.createElement("div")

neweliment.textContent = ininput;

neweliment.setAttribute('class','neweliment')

let newbtn = document.createElement("button")

newbtn.textContent = "X";

newbtn.setAttribute('class','newbtn')

let combtn = document.createElement("button")

combtn.textContent = "✓";

combtn.setAttribute('class','Combtn')

combtn.addEventListener('click', function(event) {
        const taskText = event.target.parentElement.querySelector('.neweliment');
        
        taskText.classList.toggle('completed');
    });

newbtn.addEventListener('click', function(event) {
       const taskItem = event.target.parentElement;
        
        taskItem.remove();
    });

let new1 = document.querySelector(".new");

parents.appendChild(combtn)

parents.appendChild(neweliment)

parents.appendChild(newbtn)
  
new1.appendChild(parents)

input.value = ""

}

let btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    printcansole();
})