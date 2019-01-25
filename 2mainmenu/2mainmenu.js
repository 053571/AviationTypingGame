var nextButtonX;
var nextButtonY;
var highScoreX;
var highScoreY;
var game1X;
var game1Y;
var adminX;
var adminY;
var backX;
var backY;

function setup() {
		highScoreX = 200;
		highScoreY = 50;
		game1X = 200;
		game1Y = 150;
		adminX = 200;
		adminY = 250;
		backX = 200;
		backY = 350;
		createCanvas(500,500);
}

function draw() {

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
						window.open("../3highscore/3highscore.html","_self");
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
						window.open("../4airplaneidentification/4airplaneidentification.html","_self");
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



		// Admin - Start
		// -------------------------------------------------



    if (mouseX > adminX && mouseX < adminX+100 &&
        mouseY > adminY && mouseY < adminY+50)
    {

				fill(255, 212, 255);
				rect(adminX,adminY,100,50);

				fill(0, 0,0);
				text("Admin - Add photos",adminX - 0,adminY + 30);

				if (mouseIsPressed)
				{
						window.open("../6admin/6admin.html","_self");
				}


    }
    else
    {
				fill(53, 212, 35);
				rect(adminX,adminY,100,50);

				fill(0, 0,0);
				text("Admin - Add photos",adminX - 0,adminY + 30);

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
						window.open("../index.html","_self");
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
