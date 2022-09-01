let addInput = document.querySelector("#addInput")
let addBtn = document.querySelector("#addBtn")
let divList = document.querySelector(".listHolder ")
let isimler = []


function addLists(){
    if(addInput.value.length < 3){
        alert("En az 3 karaker giriniz.")
    }
    else{
        const ul = divList.querySelector("ul")
        const li = document.createElement("li")
        li.innerHTML = addInput.value
        isimler.push(addInput.value)
        localStorage.setItem("isim",JSON.stringify(isimler)) 
        addInput.value = ""
        ul.appendChild(li)
        
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


// ekle.addEventListener("click", () =>{
//     if (isim.length < 3 && isim.length==null) {   
//         alert("En az 3 karaker giriniz.")

//     }
//     else{
//         isimler.push(isim)
//         isim = "<ul>";
//         for (let i = 0; i<isimler.length; i++) {
//             isim += "<li>" + isimler[i] + "</li>";
//         }
//         isim += "</ul>";
//         localStorage.setItem("isim", JSON.stringify(isimler))
        
//         let info = document.getElementById("isim")
//         info.innerHTML = `${isim}`     
//     }
// })

