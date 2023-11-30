/*var flowRate = 0; //initial flow rate
var pipeHeight = document.getElementById("pipe").clientHeight;

setInterval(function() {
  var waterHeight = flowRate / 100 * pipeHeight;
  document.getElementById("pipe").style.backgroundPositionY = waterHeight + "px";
}, 100);
*/



function uflow(){
	
	
	setTimeout(function(){
		   document.getElementById('pipe2').classList.add("uflow");
	   },2000);
	   
	  /* pipe water 7 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe7').classList.add("wpu7flow");
	   },500);
	   
	   /* pipe water 8 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe8').classList.add("wpu8flow");
	   },4000);
	   /* pipe water 9 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe9').classList.add("wpu9flow");
	   },7500);
	   
	     setTimeout(function(){
		   document.getElementById('basin').classList.add("bflow");
	   },15000);
	 
		/*setTimeout(function(){
		   document.getElementById('gas').classList.add("gflowstop");
	   },18000); */
	   
	   setTimeout(function(){   
	 moveUp();  
	 },500); 
	 
	  /* outlet control */
	 
	 setTimeout(function(){
	       document.getElementById('drop').classList.add("dflow");
	  },57500);
	
	
	  /*
	 setInterval(function(){
		   document.getElementById('basin2').classList.add("lbflow");
	   },60000);
	
	
	
	    setTimeout(function(){
		   document.getElementById('basin2').classList.remove("lbflow");
	   },100000);
	  ...................................................*/
	   
	  
	   
	   
	   
	    /* ...................................................*/
	  
	 
	   
	   setTimeout(function(){
		   document.getElementById('tank').classList.add("cflowstop");
	   },70000);
	   
	 
	  
	   
	   /* pipe water 1 wpuflow */
	   setTimeout(function(){
		   document.getElementById('wpipe').classList.add("wpuflow");
	   },38500);
	     /* pipe water 2 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe2').classList.add("wpu2flow");
	   },42000);
	   
	  /* pipe water 3 wpu1flow */
	  setTimeout(function(){
		   document.getElementById('wpipe3').classList.add("wpu3flow");
	   },46000);
	   
	
	    /* pipe water 5 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe5').classList.add("wpu5flow");
	   },50500);
	    /* pipe water 6 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe6').classList.add("wpu6flow");
	   },56500);
	   
	  	    setTimeout(function(){   
	        nextSlide();  
	 },500); 
	 
}	

function tankflow(){

		   
	    setTimeout(function(){
		   document.getElementById('wpipe7').classList.remove("wpu7flow");
	   },45000);
	    setTimeout(function(){
		   document.getElementById('wpipe6').classList.remove("wpu6flow");
	   },46000);
	   
	    /* stop drop 
	    setTimeout(function(){
		   document.getElementById('drop').classList.add("dflowstop");
	   },500);  */
	   
	    setTimeout(function(){
	       document.getElementById('drop').classList.remove("dflow");
	  },57500);
	  
	  /*stop slide */
	  setTimeout(function(){   
	 nextSlide();  
	 },500); 
	  
	  
	 
}


function moveUp() {
  let rectangle = document.getElementById("rectangle");
  let position = 53;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 57) {
      clearInterval(id);
    } else {
      position++;
      rectangle.style.bottom = position + "%";
    }
  }
}

function moveDown() {
  let rectangle = document.getElementById("rectangle");
  let position = 81;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 78) {
      clearInterval(id);
    } else {
      position--;
      rectangle.style.bottom = position + "%";
    }
  }
}


 /* Slide change */

var slides = document.querySelectorAll(".img-fluid");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 61400); 
/*var slideInterval = setInterval(nextSlide, 101999); */
var isPaused = false;

function nextSlide() {
   if (isPaused) return;
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  
  slides[currentSlide].style.display = "block";
  console.log("u start next slide!"); 
  
  setInterval(function(){
		   document.getElementById('basin2').classList.add("lbflow");
	   },60000);
}

function previousSlide() {
   if (isPaused) return;
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1) % slides.length;
  console.log(currentSlide);
  slides[currentSlide].style.display = "block";
}

function stopSlide() {
	
  clearInterval(slideInterval); 
  isPaused = true;
  
}

/*
var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopSlide); */








