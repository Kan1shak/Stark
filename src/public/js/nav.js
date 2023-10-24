const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    hamburgerMenu.classList.toggle('visible');
    navbar.classList.toggle('menu')
})
let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }

// const featureHeading = document.querySelector('.features-heading .emphasis');
// console.log(featureHeading);
// const mediaQuery = window.matchMedia('(max-width: 1024px)');
// function handleTabletChange(e) {
//   if (e.matches) {
//     featureHeading.textContent = 'every thing';
//   }
//   else {
//     featureHeading.textContent = 'everything';
//   }
// }

// mediaQuery.addListener(handleTabletChange);
// handleTabletChange(mediaQuery);