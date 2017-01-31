$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDnYokM_9lNNbbVLdsCoi5Z3VdPDP-SsDQ",
    authDomain: "train-schedule-7f06f.firebaseapp.com",
    databaseURL: "https://train-schedule-7f06f.firebaseio.com",
    storageBucket: "train-schedule-7f06f.appspot.com",
    messagingSenderId: "962062933098"
  };
  firebase.initializeApp(config);

	var name = "";
	var destination = "";
	var trainTime = "";
	var frequency = "";

	$("#addTrain").on('click',function() {
		name = $("#trainNameInput").val().trim();
		destination = $("#destinationInput").val().trim();
		trainTime = $("#firstTimeInput").val().trim();
		frequency = $("#frequencyInput").val().trim();
		console.log(name);
		console.log(destination);
		console.log(trainTime);
		console.log(frequency);

		firebase.database().ref().push({
			name:name,
			destination:destination,
			trainTime:trainTime,
			frequency:frequency
		});

		// Don't refresh the page!
		return false;
	});

	firebase.database().ref().on("value", function(snapshot) {
		$("#trainNameDisplay").html(snapshot.val().name);
		$("#destinationDisplay").html(snapshot.val().destination);
		$("#frequencyDisplay").html(snapshot.val().frequency);
		$("#nextArrivaDisplay").html(snapshot.val().name);
		$("#minutesAwayDisplay").html(snapshot.val().name);
	
	})

});







