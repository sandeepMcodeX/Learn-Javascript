const body = document.querySelector('body');
const buttons = document.querySelectorAll('.box');
// select all buttons
buttons.forEach((button) => {
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target.id);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id ==='teal') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id ==='tomato') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
