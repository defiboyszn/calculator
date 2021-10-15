// Selectors
var screen = document.querySelector('#show');
var screenAns= document.querySelector('#answ');

function show(val){
  screen.innerHTML += val;
}
function clearAll(){
  screen.innerHTML=''
}
function ans(){
var b=  screen.innerHTML;
 var final= eval(b);
 screen.innerHTML=final;
}
function percent(){
  var c=screen.innerHTML / 100;
  screen.innerHTML=c;
}

/**
 * return {void}
*/

function clr(){
 var str = screen.innerHTML;
 let arrr = str.split('');
 arrr.pop();
 screen.innerHTML = arrr.join('')
}
