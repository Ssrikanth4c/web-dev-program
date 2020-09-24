const menu= document.getElementById('menu');
const side_nav= document.getElementById('side-nav');
const main_container=document.getElementById('main-container')
menu.addEventListener('click', ()=>{
     side_nav.classList.add("side-nav-collapse")
     bool=false;
})

document.getElementById('collapse-side').addEventListener('click', ()=>{
    side_nav.classList.remove("side-nav-collapse")
    bool=true;
})


   