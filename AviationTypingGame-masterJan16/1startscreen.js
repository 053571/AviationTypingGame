var startScreenPicture;

function preloadStartScreen1(){

  startScreenPicture = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/1StartScreen/startScreenPicture.jpg');

}

function loadStartScreen() {

	background(255,0,0);

	fill(255,255,255);
	text("1 start screen",10,10);

	image(startScreenPicture,0,0);

	 if (mouseIsPressed)
      {
      		navigation = -1;
      }
}

function mouseReleased()
{
	if (navigation == -1)
	{
		navigation = 1;
	}
}