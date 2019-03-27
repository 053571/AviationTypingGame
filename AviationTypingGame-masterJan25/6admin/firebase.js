var theFile;
var successfulUploadToBrowser;
var database;
var storageRef;
var successfulUploadToFirebase;
var initiateProgressBar;
var progressBarValue;

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

	successfulUploadToFirebase = false;  
	successfulUploadToBrowser = false;
	initiateProgressBar = false;

}


// this function assist with sketch.js 
function hasUploadToFirebase()
{
  if (successfulUploadToFirebase)
  {
    return true;
  }
  return false;
}


// this function initiates file upload from computer to browser through the "choose file button"
function previewFile() {

  var preview = document.querySelector('img');

  // take the first file and upload it
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  successfulUploadToBrowser = false;



  reader.addEventListener("load", function () {
    preview.src = reader.result;

    // save the image file onto firebase
	submitImageList(file.name);
    submitImage2(file);

    successfulUploadToBrowser = true;

    // load image data into a variable for p5js
    theFile = loadImage(reader.result);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }


}

function submitImageList(imageFileName)
{
	
	var ref = database.ref();

	var data = {
		name: imageFileName
	}

	ref.push(data);
	
}

function submitImage2(theFile)
{
	successfulUploadToFirebase = false;

	// target the root folder   root/
	var rootUploadRef = storageRef.ref();

	// target the subfolder within and what the file is called
	// root/images/picture
	var imagesFolderUploadRef = storageRef.ref('airplaneModelImages/'+theFile.name);

	// add metadata like extensions .jpg
	var metadata = {
		'contentType': theFile.type
	}
	

	var uploadProgress = imagesFolderUploadRef.put(theFile, metadata);


	initiateProgressBar = true;
	uploadProgress.on('state_changed', function(snapshot){

	  // Observe state change events such as progress, pause, and resume
	  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

	  progressBarValue = progress;

	  console.log('Upload is ' + progress + '% done');
	} , function(error) {
		console.log('Upload Progress Bar Error');
  		// Handle unsuccessful uploads
	}, function() {
		console.log('Success upload progress');
		successfulUploadToFirebase = true;
	  // Handle successful uploads on complete
	  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  uploadProgress.snapshot.ref.getDownloadURL().then(function(downloadURL) {
	    console.log('File available at', downloadURL);
	  });
	});

}

function startProgressBar()
{
	return initiateProgressBar;
}

function getProgress()
{
	return progressBarValue;
}

function hasUploadToBrowser()
{
	return successfulUploadToBrowser;
}

