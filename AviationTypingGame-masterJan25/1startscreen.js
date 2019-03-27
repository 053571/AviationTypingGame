var startScreenPicture;
var navigation;

function preload(){

  startScreenPicture = loadImage('https://053571.github.io/AviationTypingGame/AirplanePictures/1StartScreen/startScreenPicture.jpg');

}

function setup(){
  createCanvas(500,500);
  navigation = 0;
}

function draw() {

	background(255,0,0);

	fill(255,255,255);
	text("1 start screen",10,10);

	image(startScreenPicture,0,0);

  if (mouseIsPressed)
  {
    window.open("2mainmenu/2mainmenu.html","_self");
  }
}
