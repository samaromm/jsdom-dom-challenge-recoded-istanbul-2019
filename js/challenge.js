let plus = document.getElementById('plus');
plus.addEventListener('click',function(){
  let counter = document.getElementById('counter');
  counter.textContent=textContent.parseInt()+1;
}
)

let minus = document.getElementById('minus');
minus.addEventListener('click',function(){
  let counter = document.getElementById('counter');
  counter.textContent=textContent.parseInt()-1;
}
)