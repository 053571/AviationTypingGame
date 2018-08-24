var inp;
var nextButtonX;
var nextButtonY;
var words;
var counter;
var startTime;
var graspTime;

function setup(){
  //create a drawing service 500px wide, 500px tall
  createCanvas(500,500);
  
  frameRate(30);

  counter = 0;

  nextButtonX = 200;
  nextButtonY = 125;
  
  inp = createInput('');
  inp.position(150,150);
}
function draw(){
  //draw circle in centre of sketch
  background(255,255,0);
  
  
  if (counter == 0)
  {
    if (inp.value() == "darren")
    {
      startTime = frameCount;
      counter++;
    }
  }

  if (counter == 1)
  {
    fill(0,0,0);
    text("Congratuations you typed the correct word!",100,300);

    if ( frameCount >= startTime + 150 )
    {
      counter++;
      inp.value('');  
    }

  }


  if (counter == 2)
  {
    if (inp.value() == "ben")
    {
      fill(0,0,0);
      text("Congratuations you typed the correct word!",100,300);
      counter++;
    }

  }

  fill(0,0,0);
  text(frameCount,10,10);
  
  
  nextButton();
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
  text("Next",217,155);


      

  if (mouseX > nextButtonX && mouseX < nextButtonX+100 && 
      mouseY > nextButtonY && mouseY < nextButtonY+50)
    {
      fill(53, 212, 35);
      rect(nextButtonX,nextButtonY,100,50);

      fill(255, 255,255);
      text("Next",217,155); 

    if (mouseIsPressed)
      {
        fill(255, 140, 10);
        rect(nextButtonX,nextButtonY,100,50);

        fill(255, 255,255);
        text("Next",217,155); 
      }


    }


}
