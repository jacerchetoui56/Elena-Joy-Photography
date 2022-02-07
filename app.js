const Menu = document.querySelector('.links'); 
const Open = document.querySelector('.openlinks');
const hide = Menu.querySelectorAll('a')

Open.addEventListener("click" , toggleClass)


for (let i = 0; i < hide.length; i++) { //we can use forEach function
    hide[i].addEventListener("click",toggleClass);
}

function toggleClass(){
    Menu.classList.toggle("slide");
    Open.classList.toggle("reshape");
}