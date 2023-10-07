const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    hamburgerMenu.classList.toggle('visible');
    navbar.classList.toggle('menu')
})

const featureHeading = document.querySelector('.features-heading .emphasis');
console.log(featureHeading);
const mediaQuery = window.matchMedia('(max-width: 1024px)');
function handleTabletChange(e) {
  if (e.matches) {
    featureHeading.textContent = 'every thing';
  }
  else {
    featureHeading.textContent = 'everything';
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);