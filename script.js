// sticky navbar
const nav= document.querySelector('.nav');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset> nav.offsetTop){
        nav.classList.add('sticky')
    }else{
        nav.classList.remove('sticky')
    }
})