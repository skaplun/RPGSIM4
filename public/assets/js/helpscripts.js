
/************* 

script to generate tiles updates needed to adjust designed map to game ready map.

**************/
let i = 0;

function isEven(n) {
   return n % 2 == 0;
}


Array.from(document.querySelectorAll('path')).forEach(function(p){
  if(isEven(i)){
    p.id = 'tile' + i;
    p.classList.add('hexTile');
  }else{
    p.id = 'point' + i;
    p.classList.add('hexCenter');
    p.setAttribute('stroke', '#fff')
  }
  p.setAttribute('fill', '#fff')
  i++ 
})










function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

Number.isFinite(parseFloat(n))