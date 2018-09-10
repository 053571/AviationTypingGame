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
  
  
  if (counter == 0)
  {
    image(airplanes[0],10,10,960/4,640/4);
    fill(0,0,0);
    text("Boeing737",10,50);
    if (inp.value() == "Boeing737" || inp.value() == "737" || inp.value() == "B737")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 1)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }


  if (counter == 2)
  {
    image(airplanes[1],10,10);
    fill(0,0,0);
    text("AirbusA330",10,50);
    if (inp.value() == "AirbusA330" || inp.value() == "Airbus330" || inp.value() == "A330")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 3)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }

if (counter == 4)
  {
    image(airplanes[2],10,10);
    if (inp.value() == "Boeing787" || inp.value() == "Boeing787Dreamliner" || inp.value() == "Boeing DreamLiner" || inp.value() == "B787" || inp.value() == "B787Dreamliner")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 5)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }

  if (counter == 6)
  {
    image(airplanes[3],10,10);
    if (inp.value() == "Boeing747" || inp.value() == "B747" || inp.value() == "Boeing747JumboJet")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 7)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }

  if (counter == 8)
  {
    image(airplanes[4],10,10);
    if (inp.value() == "AirbusA350" || inp.value() == "350" || inp.value() == "Airbus350" || inp.value() == "AirbusA350XWB")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 9)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }

  if (counter == 10)
  {
    image(airplanes[5],10,10);
    if (inp.value() == "Embraer190" || inp.value() == "E190")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 11)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }

if (counter == 12)
  {
    image(airplanes[6],10,10);
    if (inp.value() == "Boeing777" || inp.value() == "B777")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 13)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }

  if (counter == 14)
  {
    image(airplanes[7],15,20);
    if (inp.value() == "Boeing767" || inp.value() == "B767" || inp.value() == "Boeing767")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 15)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }

if (counter == 16)
  {
    image(airplanes[8],10,10);
    if (inp.value() == "AirbusA380" || inp.value() == "Airbus380" || inp.value() == "A380")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 17)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }

  }

  if (counter == 18)
  {
    image(airplanes[9],10,10);
    if (inp.value() == "AirbusA320" || inp.value() == "Airbus320" || inp.value() == "A320")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 19)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + waitTime )
    {
      counter++;
      inp.value('');  
    }
    nextButton();
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
