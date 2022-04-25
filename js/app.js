$(document).ready(function(){
$('.slider').slick({
arrows: false,
dots:true,
appendDots:'.slider-dots',
dotsClass:'dots',
});

let hamburger = document.querySelector('.hamburger');
let cross = document.querySelector('.cross');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});
cross.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

//Get the button:
mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener('click', function(){
  document.documentElement.scrollTop = 0; 
});

});
