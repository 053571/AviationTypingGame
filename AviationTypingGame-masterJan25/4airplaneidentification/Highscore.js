class Highscore {

	// Default constructor for airplane objects
	constructor()
	{
		this.highscore = 0;
	}

	//Accessors
	getHighScore()
	{
		return this.highscore;
	}

	calculateHighScore(numberCorrect,time)
	{
		console.log('number correct: '+numberCorrect);
		console.log('time: '+time);


		var timeScore = 0;
		var numberCorrectScore = 0;

		if (time > 90)
		{
			timeScore = 0;
		}
		else if (time <= 90 && time > 75)
		{
			timeScore = 1;
		}
		else if (time <= 75 && time > 55)
		{
			timeScore = 2;
		}
		else if (time <= 55 && time > 35)
		{
			timeScore = 3;
		}
		else if (time <= 35 && time > 30)
		{
			timeScore = 4;
		}
		else if (time <= 30)
		{
			timeScore = 7;
		}
		
		switch (numberCorrect)
		{
			case 1:
				numberCorrectScore = 1;
				break;
			case 2:
				numberCorrectScore = 2;
				break;
			case 3:
				numberCorrectScore = 3;
				break;
			case 4:
				numberCorrectScore = 4;
				break;
			case 5:
				numberCorrectScore = 5;
				break;
			case 6:
				numberCorrectScore = 6;
				break;
			case 7:
				numberCorrectScore = 7;
				break;
			case 8:
				numberCorrectScore = 8;
				break;
			case 9:
				numberCorrectScore = 9;
				break;
			case 10:
				numberCorrectScore = 10;
				break;
			default:
				numberCorrectScore = 0;
				break;
		}


		var sum = timeScore + numberCorrectScore;
		console.log(sum);
		var letterGrade;

		//2-17
		if (sum <= 17 && sum > 14)
		{
			letterGrade = "A";
		}
		else if (sum <= 14 && sum > 11)
		{
			letterGrade = "B";
		}
		else if (sum <= 11 && sum > 9)
		{
			letterGrade = "C";
		}
		else if (sum <= 9 && sum > 7)
		{
			letterGrade = "D";
		}
		else if (sum <= 7 && sum > 5)
		{
			letterGrade = "E";
		}
		else if (sum <= 5)
		{
			letterGrade = "F";
		}
		console.log(letterGrade);
	
		return letterGrade;


	}

	//Accessors
	setHighScore(numberCorrect,time)
	{
		// max time = 50 seconds
		var scoreA = 0;

		var x = int(numberCorrect);

		switch (x)
		{
			case 1:
				scoreA = 1;
				break;
			case 2:
				scoreA = 2;
				break;
			case 3:
				scoreA = 3;
				break;
			case 4:
				scoreA = 3;
				break;
			case 5:
				scoreA = 4;
				break;
			case 6:
				scoreA = 4;
				break;
			case 7:
				scoreA = 5;
				break;
			case 8:
				scoreA = 5;
				break;
			case 9:
				scoreA = 10;
				break;
			case 10:
				scoreA = 30;
				break;
			default:
				scoreA = 0;
				break;
		}

		return scoreA;
	}


}