class Airplane {

	// Default constructor for airplane objects
	constructor()
	{
		this.airplaneNumber = "111";
		this.airplaneImage = null;
		this.airplaneCompany = "Z";
	}

	//Accessors
	getAirplaneNumber()
	{
		return this.airplaneNumber;
	}

	getAirplaneImage()
	{
		return this.airplaneImage;
	}

	getAirplaneCompany()
	{
		return this.airplaneCompany;
	}


	//Mutators
	setAirplaneNumber(newAirplaneNumber)
	{
		this.airplaneNumber = newAirplaneNumber;
	}

	setAirplaneImage(newAirplaneImage)
	{
		this.airplaneImage = newAirplaneImage;
	}

	setAirplaneCompany(newAirplaneCompany)
	{
		this.airplaneCompany = newAirplaneCompany;
	}


}
