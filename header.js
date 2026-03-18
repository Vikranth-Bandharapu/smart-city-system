
function openMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

/* MOBILE DROPDOWN */
document.querySelectorAll(".dropdown-btn").forEach(item=>{
  item.addEventListener("click",function(e){
    if(window.innerWidth <= 900){
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });
});