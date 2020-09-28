const menu= document.getElementById('menu');
const side_nav= document.getElementById('side-nav');
const main_container=document.getElementById('main-container');
const nav_link= document.querySelectorAll('.nav-link');
const submenu_collapse= document.querySelectorAll('.submenu-collapse');

menu.addEventListener('click', ()=>{
     side_nav.classList.add("side-nav-collapse")
     bool=false;
})

document.getElementById('collapse-side').addEventListener('click', ()=>{
    side_nav.classList.remove("side-nav-collapse")
    bool=true;
})

console.log(nav_link)

nav_link.forEach((link, ind)=>{
    if(ind!=4){
        console.log(ind)
        link.addEventListener('mouseenter', ()=>{
            submenu_collapse[ind].classList.add('submenu')
        })
        link.addEventListener('mouseleave', ()=>{
            submenu_collapse[ind].classList.remove('submenu')
        })
    }
})