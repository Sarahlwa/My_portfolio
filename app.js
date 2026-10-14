const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

 // toggle mobile menu visibility
menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
})

// close menu when the close button is clicked
menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());

// close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});


// read more and read less button
const moreBtn = document.querySelector('.read-more')
const moreText = document.querySelector('.moreText')

moreBtn.addEventListener('click', ()=>{
    if(moreText.classList[1]){
        moreText.classList.toggle('hide')
        moreBtn.textContent = 'read less'
    }else{
        moreText.classList.toggle('hide')
        moreBtn.textContent = 'read more'
    }
})