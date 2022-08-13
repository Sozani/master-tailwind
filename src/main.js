const menuList = document.getElementById("menu");
const openBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");



openBtn.addEventListener("click",()=>{
    menuList.classList.add("flex");
    menuList.classList.remove("hidden");
    console.log('bravo suz');

openBtn.classList.add("hidden");
closeBtn.classList.remove("hidden");
})
closeBtn.addEventListener("click",()=>{
    menuList.classList.add("hidden");
    menuList.classList.remove("flex");
    
    closeBtn.classList.add("hidden");
    console.log('bravo');
    openBtn.classList.remove("hidden");
})




