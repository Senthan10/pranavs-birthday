function openLetter(){
  document.getElementById("letterScreen").style.display="none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("music").play();
}

function reveal(){
  document.getElementById("msg").classList.remove("hidden");
}

/* SLIDESHOW */
let slides=document.querySelectorAll(".slideshow img");
let index=0;
setInterval(()=>{
  slides[index].classList.remove("active");
  index=(index+1)%slides.length;
  slides[index].classList.add("active");
},3000);

/* WAND */
const wand=document.getElementById("wand");
document.addEventListener("mousemove",e=>{
  wand.style.left=e.clientX+"px";
  wand.style.top=e.clientY+"px";
});

/* CANDLE */
function blowCandle(){
  const flame=document.getElementById("flame");
  if(flame) flame.style.display="none";
  alert("✨ Wish accepted! Happy Birthday Pranavs 🎂 ✨");
}
