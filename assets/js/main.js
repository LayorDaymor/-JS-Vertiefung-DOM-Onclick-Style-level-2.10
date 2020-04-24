const wPlace=document.getElementById("wPlace");
const h1=document.getElementById("element")

function small(){
    h1.classList.add("small")
    h1.classList.remove("middle")
    h1.classList.remove("big")
}
function middle(){
    h1.classList.add("middle")
    h1.classList.remove("small")
    h1.classList.remove("big")
    
}
function big(){
    h1.classList.toggle("big")
        
}