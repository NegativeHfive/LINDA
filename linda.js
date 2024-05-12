// adding event listener
let Dropbox = document.querySelector(".dropbox");
let Dropbox_nav = Dropbox.querySelector("nav");

Dropbox.addEventListener("click",function(){
  Dropbox_nav.classList.toggle("dropbox_tab");
  console.log("Dropbox clicked");
  console.log(Dropbox_nav)
});

// animation fade in

let LindaPhoto = document.querySelector(".linda_photo");

function ShowAnimation(){
   LindaPhoto.classList.add("animated");
   console.log("Animation Added")
}

function RemoveAnimation(){
  LindaPhoto.classList.remove("animated");
  console.log("Animation remove")
}

window.addEventListener("scroll", function(){
   let ScrollPostion = window.scrollY;
   let TriggerOffset = 200;


   if(ScrollPostion > TriggerOffset){
     ShowAnimation();
   }else{
    RemoveAnimation();
   }
})

