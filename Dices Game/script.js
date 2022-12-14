let nums1 = document.getElementsByClassName('num1')
let nums2 = document.getElementsByClassName('num2')
let msg = document.querySelector('h3')
let dice1Len = nums1.length;
let dice2Len = nums2.length;

let color1 = Math.ceil(Math.random() * dice1Len)
let color2 = Math.ceil(Math.random() * dice2Len)

window.addEventListener('load', () =>{


   // nums1[color1].style.backgroundColor = 'red';
   chnagdiceClr2();
   chnagdiceClr1();

})

function chnagdiceClr1(){
      for(let i = 0; i < color1; i++){
      nums1[i].style.backgroundColor = 'red';
   }
}

function chnagdiceClr2(){
   for(let i = 0; i < color2; i++){
      nums2[i].style.backgroundColor = "blue"
   }
}

if(color1 > color2){
   msg.innerHTML = "Player 1 won"
}
else if(color1 < color2){
   msg.innerHTML = "Player 2 won"
}
else{
   msg.innerHTML = "TIE"
}