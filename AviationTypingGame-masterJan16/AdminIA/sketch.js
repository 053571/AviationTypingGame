var p5ImageFile;
var initializeProgress;
var backX;
var backY;

function preload()
{
}

function setup()
{
	createCanvas(500,500);
	setupFirebase();

	backX = 150;
	backY = 200;
//	setupProgressBar(300,200);

}

function draw()
{

	background(0,0,0);

	fill(255);

	// check if the image has been successfully updated to browser
	if (hasUploadToBrowser())
	{
		fill(0,255,0);
		text("Successful upload to browser",60,50);
		if (theFile.width > 100 || theFile.height > 100)
		{
			sizeDownImage(theFile,250,25);
		}
		else
		{
		    image(theFile,250,25);
		}
	}
	else
	{
		text("Upload the photo using the \"Choose file\" button.",60,50);
	}


	if (startProgressBar())
	{
		if (hasUploadToFirebase())
		{
			fill(0,255,0);
			text("Successful upload to firebase",60,150);
			if (theFile.width > 100 || theFile.height > 100)
			{
				sizeDownImage(theFile,250,125);
			}
			else
			{
			    image(theFile,250,125);
			}
		}
		else
		{
			showProgressBar();
		}
	}
	else
	{
	}


	if (mouseX > backX && mouseX < backX +100 &&
			mouseY > backY && mouseY < backY +50)
	{

			fill(53, 212, 35);
			rect(backX,backY,100,50);

			fill(25, 25,100);
			text("Back",backX + 25,backY + 30);

			if (mouseIsPressed)
			{
				window.open("../index.html","_self");
			}


	}
	else {
			fill(53, 212, 35);
			rect(backX,backY,100,50);

			fill(25, 25,100);
			text("Back",backX + 25,backY + 30);

	}

}

function showProgressBar()
{
	fill(0,255,0);
	text("Uplaod in Progress",60,150);
	var x = getProgress();
	strokeWeight(3);
	stroke(200,200,200);
	fill(55,55,55);
	rect(230,135,200,20);
	strokeWeight(0);
	fill(0,255,0);
	if (x < 10)
	{
		rect(230+1,135+1,20-1+x*2,20-2);
	}
	else
	{
		rect(230+1,135+1,x*2-2,20-2);
	}
	fill(0);
	text(round(x),230+6,135+13);
}

function sizeDownImage(imageFile,x,y)
{
	var finished = false;
	var newWidth = imageFile.width;
	var newHeight = imageFile.height;

	while (!finished)
	{
		if (newWidth > 100 || newHeight > 100)
		{
			newWidth /= 2;
			newHeight /= 2;
		}
		else
		{
			finished = true;
		}
	}
	image(imageFile,x,y,newWidth,newHeight);
}
