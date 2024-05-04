function navSlide(){
    let nav=document.querySelector(".navbar");
    let menu=document.querySelector(".menu");
    let burger=document.querySelector(".hamburger")

    burger.addEventListener("click",()=>{
        menu.classList.toggle("nav-active")
    })
}
navSlide()