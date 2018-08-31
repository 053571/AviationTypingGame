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
var airplane1;
var airplane2;
var airplane3;
var airplane4;
var airplane5;
var airplane6;
var airplane7;
var airplane8;
var airplane9;
var airplane10;

//function to get airplane images 
function preload(){
  airplane1 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/Boeing737.jpg');
  airplane2 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/AirbusA330.jpg');
  airplane3 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/Boeing787.jpg');
  airplane4 = loadImage('https://053571.git hub.io/AviationTypingGame/AirplanePictures/Boeing747.jpg');
  airplane5 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/AirbusA350.jpg');
  airplane6 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/Embraer190.jpg');
  airplane7 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/Boeing777.jpg');
  airplane8 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/Boeing767.jpg');
  airplane9 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/AirbusA380.jpg');
  airplane10 = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/AirbusA320.jpg');

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
  
  
  if (counter == 0)
  {
    image(airplane1,10,10);
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
    image(airplane2,10,10);
    fill(0,0,0);
    text("AirbusA330",10,50);
    if (inp.value() == "AirbusA330" || "Airbus330" || "A330")
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
    image(airplane3,10,10);
    if (inp.value() == "Boeing787 || Boeing787Dreamliner" || "Boeing DreamLiner" || "B787" || "B787Dreamliner")
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
    image(airplane4,10,10);
    if (inp.value() == "Boeing747" || "B747" || "Boeing747JumboJet")
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
    image(airplane5,10,10);
    if (inp.value() == "AirbusA350" || "350" || "Airbus350" || "AirbusA350XWB")
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
    image(airplane6,10,10);
    if (inp.value() == "Embraer190" || "E190")
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
    image(airplane7,10,10);
    if (inp.value() == "Boeing777" || "B777")
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
    image(airplane8,15,20);
    if (inp.value() == "Boeing767" || "B767" || "Boeing767")
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
    image(airplane9,10,10);
    if (inp.value() == "AirbusA380" || "Airbus380" || "A380")
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
    image(airplane10,10,10);
    if (inp.value() == "AirbusA320" || "Airbus320" || "A320")
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
  
  
  
/*
  fill(255,0,0);
  ellipse(250,150,100,100);
  
  */
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
