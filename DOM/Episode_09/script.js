    const saySandeep = function(){
        console.log("sandeep");
    }
    setTimeout(saySandeep, 2000);
    const changeText = function(){
       document.querySelector("h1").innerHTML = "Best Js Series"
    }
  const changeMe=  setTimeout(changeText,2000)
   document.querySelector("#stop").addEventListener('click', ()=>{
    clearTimeout(changeMe);
    console.log("STOPPED");
   })

const sayDate = function (str) {
  console.log(str, Date.now());
};
const intervalId = setInterval(sayDate, 1000, 'hello');
clearInterval(intervalId);
