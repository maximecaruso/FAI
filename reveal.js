

function reveal() {
 
  if(window.innerWidth >=600){
    
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    reveal2();
    reveal3();
   // let sE1 =  document.getElementById("feat");
  // sE1.style.marginTop = (-15)-(scrollY/100)+"vw";
let se1 = document.getElementById("svgB");
let se2 = document.getElementById("svg2");
se1.style.transform = "rotate("+scrollY/10+"deg)"
se2.style.transform = "rotate("+(scrollY/10)*-1+"deg)"
  }
  else{
    var reveals = document.querySelectorAll(".reveal");
    var reveals1 = document.querySelectorAll(".reveal2");
    var reveals2 = document.querySelectorAll(".reveal3");
    for (var i = 0; i < reveals.length; i++) {

        reveals[i].classList.add("active");
      } 
      for (var i = 0; i < reveals1.length; i++) {
          reveals1[i].classList.add("active");
        }
        for (var i = 0; i < reveals2.length; i++) {
          reveals2[i].classList.add("active");
        }
    }
  }

  window.onload = function () {
   reveal();
   
}
  window.addEventListener("scroll", reveal);
  
  
  function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function reveal3() {
    var reveals = document.querySelectorAll(".reveal3");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


  function formular(){
    let form = document.getElementsByClassName("formular");
    let bg = document.getElementsByClassName("vers");
    let x = document.getElementById("X");
    x.style.visibility ="visible";
    form[0].classList.add("formularActive");
    bg[0].setAttribute("id","verschwommen");
    reveal();
  }
  function x(){
    let form = document.getElementsByClassName("formular");
    let bg = document.getElementsByClassName("vers");
    let x = document.getElementById("X");
    form[0].classList.remove("formularActive");
    x.style.visibility ="hidden";
    bg[0].setAttribute("id","");
  }