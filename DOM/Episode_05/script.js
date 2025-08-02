// onlclick event
// document.getElementById('owl').onclick=function(){
//     alert('owl clicked')
// }

// attachEvent()
// jQuery - on

// type ,  timestamp , defaultPrevented
//  target , toElement , srcElement , currentTarget,
// clientX , clientY , screenX , screenY
// altKey , ctrlKey , shiftkey , keyCode

// addEventListener
//third default false
//   document.getElementById('owl').addEventListener('click', function(e){
//     // alert('owl clicked again')
//     console.log(e);
//   },false)

// event pro
// bubbling up to down (inside to outside)  (false)
// capturing outside to inside   (true)
document.getElementById('images').addEventListener(
  'click',
  function (e) {
    console.log('clicked inside the ul');
  },
  false
); //true
document.getElementById('owl').addEventListener(
  'click',
  function (e) {
    console.log('owl clicked');
    e.stopPropagation();
  },
  false
); //true

document.getElementById('google').addEventListener(
  'click',
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('google clicked');
  },
  false
);

document.querySelector('#images').addEventListener(
  'click',
  (e) => {
    console.log(e.target.parentNode);

    if (e.target.tagName === 'IMG') {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove();
      // removeIt.parentNode.removeChild(removeIt)
    }
  },
  false
);
