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

// image slider 

let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

let currentSlide = 0;

// Function to show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Function to set active dot
function setActiveDot(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Click event for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    setActiveDot(currentSlide);
  });
});

// Initial setup
showSlide(currentSlide);
setActiveDot(currentSlide);

// Automatic slide change (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  setActiveDot(currentSlide);
}, 5000); // Change slide every 5 seconds (adjust as needed)
