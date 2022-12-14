var images = [
   "https://i.pinimg.com/564x/f4/53/86/f453861dde1b2932f774405d77957e90.jpg",

   "https://iphoneswallpapers.com/wp-content/uploads/2020/09/Lighthouse-Nature-Minimalism-iPhone-Wallpaper.jpg", 

   "https://i.pinimg.com/564x/df/92/3c/df923c1c6150228a366a4b0ddaefbcbc.jpg"
];
let btn = document.querySelector("button");
let slider = document.getElementById('slider');

let len = images.length;
let num = 0;

function next(){
   num++;
   if(num >= len){
      num = 0
   }

   slider.src = images[num];
}

function prev(){
   num--;

   if(num < 0){
      num = len-1;
   }

   slider.src = images[num]
}