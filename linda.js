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

//adding animatiion to nail products

let NailProduct= document.querySelector("#nail_products");

window.addEventListener("scroll", function(){
  let ScrollPostion = window.scrollY;
  let TriggerOffset = 1500;


  if(ScrollPostion > TriggerOffset){

    NailProduct.classList.add("animated");
    console.log("done");
  }
  else{
    NailProduct.classList.remove("animated");
  }
})

function Animation(Selector,TriggerOffset){
  window.addEventListener("scroll",function(){
    let ScrollPostion = window.scrollY;

    if(ScrollPostion > TriggerOffset){
      Selector.classList.add("animated");
      console.log("Added")
    }
    else{
      Selector.classList.remove("animated")
    }
  })
};

let Booking = document.querySelector(".booking");
Animation(Booking,2500);


//making a function for left animation 
function LeftAnimation(Selector,TriggerOffset){
  window.addEventListener("scroll",function(){
    let ScrollPostion =window.scrollY;

    if(ScrollPostion > TriggerOffset){
      Selector.classList.add("left_animation")
    }
    else{
      Selector.classList.remove("left_animated")
    }
  })
}

//making a function for right animation 
function RightAnimation(Selector,TriggerOffset){
  window.addEventListener("scroll",function(){
    let ScrollPostion =window.scrollY;

    if(ScrollPostion > TriggerOffset){
      Selector.classList.add("right_animation")
      console.log("banana")
    }
    else{
      Selector.classList.remove("right_animated")
    }
  })
}


//adding animation to the hand treatment
let HandTreatmentImage = document.querySelector(".hand_treatment img");
let HandTreatmentText= document.querySelector(".hand_treatment_text");

LeftAnimation(HandTreatmentImage,3900)
RightAnimation(HandTreatmentText,3900)
