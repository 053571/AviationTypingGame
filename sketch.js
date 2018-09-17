// other stuff functions
var inp;
var nextButtonX;
var nextButtonY;
var words;
var counter;
var startTime;
var graspTime;
var waitTime;
var finalTime;
var tempValue;

// all airplane images placeholder
var airplanes = [];
//var airplaneVariationName = ["Boeing737", "AirbusA330", "Boeing787", "Boeing747", "AirbusA350", "Embraer190", "Boeing777", "Boeing767", "AirbusA380", "AirbusA320"];
//var airplaneVariationName1 = ["BoeingB737", "Airbus330", "Boeing787Dreamliner", "B747", "A350", "E190", "B777", "B767", "Airbus380", "Airbus320"]
//var airplaneVariationName2 = ["B737", "A330", "B787", "Boeing747JumboJet", "Airbus350", "EmbraerE190", "BoeingB777", "BoeingB767", "A380", "A320"]



var airplaneName = ["B737", "A330", "B787", "B747", "A350", "E190", "B777", "B767", "A380", "A320"]
var airplaneCompany = ["B", "A", "B", "B", "A", "E", "B", "B", "A", "A"]

var order = [];

var pictureFrame;

//function to get airplane images 
function preload(){

  for (var i = 0; i < 10; i++)
  {
	  airplanes[i] = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/Plane'+(i+1)+'.jpg');
  }
  

  pictureFrame = loadImage('https://053571.github.io/AviationTypingGame/Frame.png');
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
  inp.position(180,350);

  createOrder();

//  window.HELLO.test("Ben");


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
	  	var randomNum = order[x];
	    image(airplanes[randomNum],120,10,960/4,640/4);
	    image(pictureFrame,120,10,960/4,640/4);
	    fill(0,0,0);
	    if (checkAirplaneName(randomNum))
	    {
	      startTime = frameCount;
	      counter++;
	    }
	    finalTime = frameCount/30;
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

  if (counter > 18)
  {
	  fill(0,0,0);
	  text("Your time is: "+round(finalTime) + " seconds",10,10);  	
  }

  
}

//Random function
function createOrder()
{
	order[0] = int(random(0,10));

	for (var i = 1; i < 10; i++)
	{
		var flag = true;
		while (flag == true)
		{
			tempValue =  int(random(0,10));
			flag = false;
			for(var j = 0; j < 10; j++) 
			{
				if (tempValue == order[j])
				{
					flag = true;
				}
			
			}

		}

		order[i] = tempValue;
	
	}
	
}

function checkAirplaneName(randomNum)
{
	// store user input into temporary variable
	var temp = inp.value();
	var number = false;
	var letter = false; 
	var countNumbers = 0;

	// extract original triplet of numbers

	var numberTriplet = airplaneName[randomNum].substring(1,4);
	var airplaneLetter = airplaneName[randomNum].substring(0,1);


	// scan what user typed in
	// scanning for a triplet of numbers
	// and a specific letter


	for (var i = 0; i < temp.length; i++)
	{
		if (numberTriplet == temp.substring(i,i+3))
		{
			number = true;
		}
		if (airplaneLetter == temp.substring(i,i+1))
		{
			letter = true;
		}
	}


	for (var i = 0; i < temp.length; i++)
	{
		var isANumber = int(temp.substring(i,i+1));
		if (isANumber>=0 && isANumber<=9)
		{
			countNumbers++;
		}
		if (countNumbers > 4)
		{
			number = false;
		}
	}




	text(number,10,300);
	text(letter,10,350);

	if (number == true && letter == true)
	{
		return true;
	}
	return false;
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
