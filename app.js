$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
             $('.navbar').removeClass("sticky");
        }
    })
})


const navLinks = document.querySelector(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

// close menu when the close button is clicked
menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());

// close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});