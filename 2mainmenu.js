var nextButtonX;
var nextButtonY;
var highScoreX;
var highScoreY;
var game1X;
var game1Y;
var game2X;
var game2Y;
var backX;
var backY;

function setupMainMenu() {
	highScoreX = 200;
	highScoreY = 50;
	game1X = 200;
	game1Y = 150;
	game2X = 200;
	game2Y = 250;
	backX = 200;
	backY = 350;
}

function loadMainMenu() {

  background(255,255,0);


	fill(0,0,0);
	text("2 main menu",10,10);


 	// High Score button - Start
 	// -------------------------------------------------


  if (mouseX > highScoreX && mouseX < highScoreX+100 && 
      mouseY > highScoreY && mouseY < highScoreY+50)
    {
		fill(255, 212, 255);
		rect(highScoreX,highScoreY,100,50);

		fill(0, 0,0);
		text("High Score",highScoreX + 24,highScoreY + 25); 

		if (mouseIsPressed)
		{
			navigation = 2;			
		}


    }
    else
    {
		fill(53, 212, 35);
		rect(highScoreX,highScoreY,100,50);    	

		fill(0, 0,0);
		text("High Score",highScoreX + 24,highScoreY + 25);

    }

 	// -------------------------------------------------
 	// High Score button - End



 	// Game 1 - Start
 	// -------------------------------------------------



    if (mouseX > game1X && mouseX < game1X+100 && 
        mouseY > game1Y && mouseY < game1Y+50)
    {

		fill(53, 212, 35);
		rect(game1X,game1Y,100,50);

		fill(0, 0,0);
		text("Game 1",game1X + 25,game1Y + 30); 

		if (mouseIsPressed)
		{
			navigation = 3; 
		}


    }
    else
    {
		fill(53, 212, 35);
		rect(game1X,game1Y,100,50);    	

		fill(0, 0,0);
		text("Game 1",game1X + 25,game1Y + 30);

    }

	// -------------------------------------------------
    // Game 1 - End
 	


    // Game 2 - Start
 	// -------------------------------------------------



    if (mouseX > game2X && mouseX < game2X+100 && 
        mouseY > game2Y && mouseY < game2Y+50)
    {

		fill(53, 212, 35);
		rect(game2X,game2Y,100,50);

		fill(0, 0,0);
		text("Game 2",game2X + 25,game2Y + 30); 

		if (mouseIsPressed)
		{
			navigation = 4; 
		}


    }
    else
    {
		fill(53, 212, 35);
		rect(game2X,game2Y,100,50);    	

		fill(0, 0,0);
		text("Game 2",game2X + 25,game2Y + 30);

    }

	// -------------------------------------------------
    // Game 2 - End

    // Back Button - Start
 	// -------------------------------------------------



    if (mouseX > backX && mouseX < backX+100 && 
        mouseY > backY && mouseY < backY+50)
    {

		fill(255, 212, 255);
		rect(backX,backY,100,50);

		fill(0, 0,0);
		text("Back",backX + 25,backY + 30); 

		if (mouseIsPressed)
		{
			navigation = -2; 
		}


    }
    else
    {
		fill(53, 212, 35);
		rect(backX,backY,100,50);    	

		fill(0, 0,0);
		text("Back",backX + 25,backY + 30);

    }

	// -------------------------------------------------
    // Back Button - End



}