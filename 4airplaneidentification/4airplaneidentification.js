// other stuff functions
var inp;
var backButtonX;
var backButtonY;
var words;
var counter;
var startTime;
var graspTime;
var waitTime;
var finalTime;
var tempValue;
var tempString;
var timerBegin;
var timer;
var correctCounter;

// all airplane images placeholder
var airplanes = [];
//var airplaneVariationName = ["Boeing737", "AirbusA330", "Boeing787", "Boeing747", "AirbusA350", "Embraer190", "Boeing777", "Boeing767", "AirbusA380", "AirbusA320"];
//var airplaneVariationName1 = ["BoeingB737", "Airbus330", "Boeing787Dreamliner", "B747", "A350", "E190", "B777", "B767", "Airbus380", "Airbus320"]
//var airplaneVariationName2 = ["B737", "A330", "B787", "Boeing747JumboJet", "Airbus350", "EmbraerE190", "BoeingB777", "BoeingB767", "A380", "A320"]


var userInput;

var airplaneName = ["B737", "A330", "B787", "B747", "A350", "E190", "B777", "B767", "A380", "A320"]
var airplaneCompany = ["B", "A", "B", "B", "A", "E", "B", "B", "A", "A"]

var order = [];

var pictureFrame;


//navigation essentailly like counter where it aids in navigating the different sections of the code
// navigation = 0; Start screen is loaded.
// navigation = 1; Main menu is loaded.
//navigation = 2; Highscore is loaded.
//navigation = 3; Airplane Identification game is loaded;
//navigation = 4; Airplane Parts game is loaded;

var navigation;

//function to get airplane images
function preload(){

//	preloadStartScreen1();



/*
  for (var i = 0; i < 10; i++)
  {
	  airplanes[i] = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/Plane'+(i+1)+'.jpg');
  }
  */

  pictureFrame = loadImage('https://053571.github.io/AviationTypingGame/Frame.png');
	timerBegin = false;
//  additionalPhotos();
}

function draw()
{
//	console.log('Game 1 start');

	var x = areImagesReady();
//	console.log(x);
	// Dec 07 left off here
	if (x == true)
	{
		section1_airplanes();
	}
}

function setup(){
	setupFirebase();

  //create a drawing service 500px wide, 500px tall
  createCanvas(500,500);

  frameRate(30);

  counter = 0;
  correctCounter = 0;

//Creation of button x and y coordinates
  backButtonX = 200;
  backButtonY = 125;

  waitTime = 50;

  tempString = "";

  inp = createInput('');
  inp.position(180,350);
  inp.input(limitStringIdentification);
  inp.hide();

  createOrder();

  navigation = 0;

//  window.HELLO.test("Ben");


}

function limitStringIdentification()
{

//Proven that these two lines show the length of the string
  userInput = inp.value();

  text(userInput.length,10,10);


  if (userInput.length < 12)
  {
  	tempString = userInput;
  }
  if (userInput.length >= 12)
  {
  	inp.value(tempString);
  }

}



function section1_airplanes()
{
  background(125,125,125);

  var q = 0;
  var x = 0;

	if (timerBegin == false)
	{
		timer = new Timer(75,450,300,25);
		timer.setMaxTime(1); //change back to 5
		timer.resetTimer(); 
//		console.log('reset timer');
		inp.show();
			timerBegin = true;
	}

//	console.log("start timer");

	// run airplane ID rounds
  while (q < 19)
  {



	  if (counter == q)
	  {

	  	var randomNum = order[x];
//	  	console.log("random Num "+randomNum);
			showAirplane(randomNum,120,10,960/4,640/4);
			image(pictureFrame,120,10,960/4,640/4);
			timer.drawTimer();
			timer.startTimer();

			if (timer.getCurrentTime() <= 0)
			{
				counter++;
				startTime = frameCount;
				timerBegin = false;
				inp.hide();
			}
	    fill(0,0,0);

			// is the airplane name a match
	    if (checkAirplaneName(randomNum))
	    {
//				timer.resetTimer();
	      counter++;
	      startTime = frameCount;
				timerBegin = false;
				inp.hide();
	    }
	    finalTime = frameCount/30;
	  }

	  q++;

	  if (counter == q)
	  {
//	    fill(0,0,0);
//	    text("Congratuations you typed the correct word!",100,300);

	    if ( frameCount >= startTime + waitTime )
	    {
	      counter++;
	      inp.value('');
	    }

	  }

	  q++;
	  x++;

  }

	// finished all rounds
		finishRound();


}


function finishRound()
{
	if (counter > 18)
  {
		inp.hide();
	  fill(0,0,0);
	  text("Your accuracy is: "+correctCounter + " out of 10",10,10);
	  text("Your time is: "+round(finalTime) + " seconds",10,60)
	  text("Your final score is " ,10,110)
	  ;


		backButton();
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

//Final check to see if both letters and numbers match. If matched, increase correct counter by 1.
	if (number == true && letter == true)
	{
		correctCounter++;
		return true;
	}
	return false;
}


function backButton()
{
  fill(35, 135,212);
  rect(backButtonX,125,100,50);

  fill(255, 255,255);
  text("Back",217,155);




  if (mouseX > backButtonX && mouseX < backButtonX+100 &&
      mouseY > backButtonY && mouseY < backButtonY+50)
    {
      fill(53, 212, 35);
      rect(backButtonX,backButtonY,100,50);

      fill(255, 255,255);
      text("Back",217,155);

    if (mouseIsPressed)
      {
        fill(255, 140, 10);
        rect(backButtonX,backButtonY,100,50);

        fill(255, 255,255);
        text("Back",217,155);
				window.open("../2mainmenu/2mainmenu.html","_self");
      }


    }


}
