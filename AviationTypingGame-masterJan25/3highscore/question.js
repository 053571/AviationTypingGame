class Button {
	constructor(x,y,length,height)
	{
		this.length = length;
		this.height = height;
		this.x = x;
		this.y = y;
		this.fillR = 255;
		this.fillG = 255;
		this.fillB = 255;
		this.fillOverR = 255;
		this.fillOverG = 255;
		this.fillOverB = 255;
		this.textR = 0;
		this.textG = 0;
		this.textB = 0;
		this.textOver = "Hidden";
		this.text = "Hello World";
		this.textPressed = "Pressed";
		this.textLength = 20;
		this.textHeight = 16;
		this.clicked = 0;
		this.buttonState = 0;
	}

	getButtonState()
	{
		// buttonState = 0; not Pressed
		// buttonState = 1; clicked
		// buttonState = 2; press and hold
		return this.buttonState;
	}
