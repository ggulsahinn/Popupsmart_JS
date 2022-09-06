let addInput = document.querySelector("#addInput")
let addBtn = document.querySelector("#addBtn")
let divList = document.querySelector(".listHolder ")
let names = []
let listBtn = document.querySelector("#listBtn")

let ul = divList.querySelector("ul")
let li = document.createElement("li")


function addLists(){
    
    let nameText = addInput.value

    if(addInput.value.length < 3){
        alert("En az 3 karaker giriniz.")
    }
    else{

        li.innerText = nameText
        names.push(nameText)
        localStorage.setItem("name",JSON.stringify(names))
        addInput.value = ""
        
        alert("İsim eklendi.")
        
    }
}

addBtn.addEventListener("click",() => {
    addLists()  
})

addInput.addEventListener("keyup", (event) => {
    if(event.which === 13) {
        addLists()
    }
})

function listele(){
    for (let i = 0; i < names.length ; i++){
        li.appendChild(document.createTextNode(names[i]))
        ul.appendChild(li)
    }
}

listBtn.addEventListener("click", () => {
    listele()
})

