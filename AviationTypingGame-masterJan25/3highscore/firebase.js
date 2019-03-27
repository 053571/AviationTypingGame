var database = 0;
var myHighScore = null;


function setupFirebase()
{
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCIvvJr4uEnMxIeMsFCVFCWDh9NqpvE4YE",
		authDomain: "comp-sci-ia-2569a.firebaseapp.com",
		databaseURL: "https://comp-sci-ia-2569a.firebaseio.com",
		projectId: "comp-sci-ia-2569a",
		storageBucket: "comp-sci-ia-2569a.appspot.com",
		messagingSenderId: "915433248448"
	};
	firebase.initializeApp(config);

	// reference to Real-Time database
	database = firebase.database();
	myHighScore = 20;

	// reference to storage
	var ref = database.ref('Highscore');

	ref.on('value', gotData, errData);


}

function gotData(data)
{
	var x = data.val();
	console.log(x);
	var values = Object.values(x);
	myHighScore = findHighestScore(values);
//	myHighScore = x;
}

function findHighestScore(values)
{
	var largest = values[0];
	for (x in values)
	{
		console.log(values[x]);
		if (values[x] > largest)
			largest = values[x];
	}
	return largest;
}

function errData(err)
{
	console.log('error');
	console.log(err);
}

function getHighScore()
{
	console.log(myHighScore);
	if (myHighScore == null)
		return 0;
	return myHighScore;

}

function setHighScore(newHighScore)
{
	console.log('setting new high score');
	if (newHighScore > myHighScore)
	{
		var ref = database.ref('Highscore');
		ref.push(newHighScore);

		ref.on('value', gotData, errData);

	}

}
