var slidefoto = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var awal = 0;

function prevSlide(n){
  awal+=n;
  console.log("prevSlide is called");
  gantislide();
}

function nextSlide(n){
  awal+=n;
  gantislide();
}

gantislide();

function gantislide(){
    
  if(awal>slidefoto.length-1)
    awal=0;
  
  if(awal<0)
    awal=slidefoto.length-1;
  
    for(let i=0;i<slidefoto.length;i++){
      slidefoto[i].style.display = "none";
      
      dots[i].classList.remove("active");
    
    }
    
    slidefoto[awal].style.display = "block";
    dots[awal].classList.add("active");

}