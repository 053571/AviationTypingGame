// other stuff functions
var inp;
var nextButtonX;
var nextButtonY;
var words;
var counter;
var startTime;
var graspTime;
var waitTime;

// all airplane images placeholder
var airplanes = [];
var airplaneVariationName = ["Boeing737", "AirbusA330", "Boeing787", "Boeing747", "AirbusA350", "Embraer190", "Boeing777", "Boeing767", "AirbusA380", "AirbusA320"];
var airplaneVariationName1 = ["BoeingB737", "Airbus330", "Boeing787Dreamliner", "B747", "A350", "E190", "B777", "B767", "Airbus380", "Airbus320"]
var airplaneVariationName2 = ["B737", "A330", "Boeing DreamLiner", "Boeing747JumboJet", "Airbus350", "EmbraerE190", "BoeingB777", "BoeingB767", "A380", "A320"]

var pictureFrame;

//function to get airplane images 
function preload(){

  for (var i = 0; i < 10; i++)
  {
	  airplanes[i] = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/Plane'+(i+1)+'.jpg');
  }
  

  pictureFrame = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/AirbusA320.jpg');
}

function setup(){
  //create a drawing service 500px wide, 500px tall
  createCanvas(500,500);
  
  frameRate(30);

  counter = 0;

//Creation of button x and y coordinates 
  nextButtonX = 200;
  nextButtonY = 125;

  waitTime = 50;
  
  inp = createInput('');
  inp.position(150,150);


}
function draw(){

   //draw circle in centre of sketch
  background(255,255,0);

  section1_airplanes();
  
}

function section1_airplanes()
{
  
  var q = 0;
  var x = 0;

  while (q < 19)
  {
	  if (counter == q)
	  {
	    image(airplanes[x],10,10,960/4,640/4);
	    fill(0,0,0);
	    if (inp.value() == airplaneVariationName[x] || inp.value() == airplaneVariationName1[x] || inp.value() == airplaneVariationName2[x])
	    {
	      startTime = frameCount;
	      counter++;
	    }
	  }

	  q++;

	  if (counter == q)
	  {
	    fill(0,0,0);
	    text("Congratuations you typed the correct word!",100,300);

	    if ( frameCount >= startTime + waitTime )
	    {
	      counter++;
	      inp.value('');  
	    }

	  }

	  q++;
	  x++;

  }


  fill(0,0,0);
  text(frameCount,10,10);
  
}


function section2_parts()
{
	
}

function nextButton()
{
  fill(35, 135,212);
  rect(nextButtonX,125,100,50);

  fill(255, 255,255);
  text("Back",217,155);


      

  if (mouseX > nextButtonX && mouseX < nextButtonX+100 && 
      mouseY > nextButtonY && mouseY < nextButtonY+50)
    {
      fill(53, 212, 35);
      rect(nextButtonX,nextButtonY,100,50);

      fill(255, 255,255);
      text("Back",217,155); 

    if (mouseIsPressed)
      {
        fill(255, 140, 10);
        rect(nextButtonX,nextButtonY,100,50);

        fill(255, 255,255);
        text("Back",217,155); 
      }


    }


}
