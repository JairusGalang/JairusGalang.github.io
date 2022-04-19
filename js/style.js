const toggleMenubtn = document.querySelector('.toggleMenubtn');
const menuBar = document.querySelector('.menuBar');
// const firstDiv = document.querySelector('.firstDiv');
// const secondDiv = document.querySelector('.secondDiv');
// const thirdDiv = document.querySelector('.thirdDiv')
// const fourthDiv = document.querySelector('.fourthDiv')


toggleMenubtn.addEventListener('click', () =>{
  menuBar.classList.toggle("hidden");
})

