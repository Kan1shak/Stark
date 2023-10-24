
const signuplink =document.querySelector('.signup-link');
const create= document.querySelector('.login-link');
const container=document.querySelector('.container');

signuplink.addEventListener('click',()=>{
    container.classList.toggle('active');
});