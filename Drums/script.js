const btn = document.getElementsByTagName('button')
const sound1 = new Audio('sound 1.mp3')
const sound2 = new Audio('sound 2.mp3')
const sound3 = new Audio('sound 3.mp3')
const sound4 = new Audio('sound 4.mp3')
const sound5 = new Audio('sound 5.mp3')
const sound6 = new Audio('sound 6.mp3')
const sound7 = new Audio('sound 7.mp3')
const sound8 = new Audio('sound 8.mp3')

const key = ["a", "s", "d", "f", "h", 'l', 'k', 'l']

var btnpress = this.innerHTML;


document.addEventListener('keypress', e =>{
   drumSound(e.key)
})


function drumSound(key){
   switch (key){
      case 'a':
         sound1.play()
         btn[0].focus()
         break;

      case 's':
         sound2.play()
         btn[1].focus()
         break;

      case 'd':
         sound3.play()
         btn[2].focus()
         break;
         
      case 'f':
         sound4.play()
         btn[3].focus()
         break;

      case 'h':
         sound5.play()
         btn[4].focus()
         break;

      case 'j':
         sound6.play()
         btn[5].focus()
         break;

      case 'k':
         sound7.play()
         btn[6].focus()
         break;

      case 'l':
         sound8.play()
         btn[7].focus()
         break;
   }
}




//Play on Click
// for(let i = 0; i < btn.length; i++){
//    btn[i].addEventListener("keypress", (e)=>{
//      this.e[i] = drum[i].play()
// })
// }


