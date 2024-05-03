// adding event listener
let Dropbox = document.querySelector(".dropbox");
let Dropbox_nav = Dropbox.querySelector("nav");

Dropbox.addEventListener("click",function(){
  Dropbox_nav.classList.toggle("dropbox_tab");
  console.log("Dropbox clicked");
  console.log(Dropbox_nav)
});