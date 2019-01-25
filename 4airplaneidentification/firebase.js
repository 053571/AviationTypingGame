var database;
var storageRef;
var theImage;
var imageReady;

var imageArray;
var imageCounter;
var realtimeFolder;
var downloadFolder;


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

	// reference to storage
	storageRef = firebase.storage();


	realtimeFolder = '';
	downloadFolder = 'airplaneModelImages';

	var myRef = database.ref();
	myRef.on('value', gotData, errData)
}

// function to download data from firebase realtime database
function gotData(data)
{
	console.log('Got data!');

	console.log(data.val());
	var imagelist = data.val();

	var theKeys = Object.keys(imagelist);
	console.log(theKeys);

	imageArray = new Array(theKeys.length);
	imageCounter = theKeys.length;
	
	for (var i = 0; i < theKeys.length-1; i++)
	{
		var k = theKeys[i];
		var imageFileName = imagelist[k].name;
		console.log(imageFileName);
		downloadImage(downloadFolder+'/'+imageFileName,i,theKeys.length);
//		downloadImage(imageFileName,i,theKeys.length);

	}
	
	
}

function errData(err)
{
	console.log('Error!');
	console.log(err);
}


// function to download image from firebase storage
function downloadImage(file,x,max)
{
	console.log('Attempting to download image');
	console.log(file);
	// Create a reference to the file we want to download
	var imageRef = storageRef.ref(file);
//	var imageRef = folderRef.child(file);

	imageReady = false;

	// Get the download URL
	
	imageRef.getDownloadURL().then(function(url) {
		// load the image into p5js
		console.log('log '+url);
//		theImage = loadImage(url);
		imageArray[x] = loadImage(url);

		if (x >= max-2)
		{
			imageReady = true;
		}
	});

}


function areImagesReady()
{
	if (imageReady)
	{
		return true;
	}

	return false;
}

function showAirplane(arrayIndex,x,y,length,height)
{
	image(imageArray[arrayIndex],x,y,length,height);
}

function showAllImages()
{
	for (var i = 0; i < imageArray.length; i++)
	{
		if (imageArray[i].width > 100 || imageArray[i].height > 100)
		{
			sizeDownImage(imageArray[i],250,i*50+25);
		}
		else
		{
		    image(imageArray[i],250,i*50+25);
		}
	}
}

function sizeDownImage(imageFile,x,y)
{
	var finished = false;
	var newWidth = imageFile.width;
	var newHeight = imageFile.height;
	var count = 0;

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
		count++;
		console.log(count);
	}
	image(imageFile,x,y,newWidth,newHeight);
}