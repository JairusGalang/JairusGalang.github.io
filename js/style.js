const toggleMenubtn = document.querySelector('.toggleMenubtn');
const menuBar = document.querySelector('.menuBar');
toggleMenubtn.addEventListener('click', () =>{
  menuBar.classList.toggle("hidden");
})

