

// Initialize Firebase

  var config = {
    apiKey: "AIzaSyDbpRltk_EGNNZN2f5Idu90vrEAgYtBDrs",
    authDomain: "train-homework-e13aa.firebaseapp.com",
    databaseURL: "https://train-homework-e13aa.firebaseio.com",
    storageBucket: "train-homework-e13aa.appspot.com",
    messagingSenderId: "663584851941"
  };
  
  
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function (event) {
event.preventDefault ();
//var fixTime = $("#time-input").val().trim();
//var time = fixTime.split(":");
//var startTime = (time[0] + time[1]);
//var strgTime = startTime.toString();
//console.log (strgTime);



var trainName = $("#train-name-input").val().trim();
var trainDest = $("#destination-input").val().trim();
var trainTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
var trainFreq = $("#freq-input").val().trim();

var newTrain = {
	name: trainName,
	dest: trainDest,
	time: trainTime,
	freq: trainFreq
	};
	
database.ref().push(newTrain);

//console.log(newTrain.name);
//console.log(newTrain.dest);
//console.log(newTrain.time);
//console.log(newTrain.freq);

alert ("Train successfully added");

//$("#train-name-input").val("");
//$("#destination-input").val("");
//$("#time-input").val("");
//$("#freq-input").val("");
$("form").trigger("reset");

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

console.log(childSnapshot.val());
console.log(prevChildKey);

var trainName = childSnapshot.val().name;
var trainDest = childSnapshot.val().dest;
var trainTime = childSnapshot.val().time;
var trainFreq = childSnapshot.val().freq;


console.log(trainName);
console.log(trainDest);
console.log(trainTime);
console.log(trainFreq);

var freqNum = parseInt(trainFreq);
var startTime = parseInt(trainTime);
var currentTime = moment().unix();
var timeCheck = false;
console.log(currentTime);
console.log(freqNum);
console.log(startTime);
//var trainStartPretty = moment.unix(trainTime).format("HHmm");
//console.log(trainStartPretty);

//var trainNextArr

//for (; timeCheck===false; ) {
//if (moment(trainTime).isBefore(currentTime)) {
//trainTime=moment().add(freqNum,"m");
//console.log(trainTime);

//} else {
//timeCheck=true;
console.log(startTime=startTime + moment().add(trainFreq,"mm"));
console.log(moment(trainFreq));

//alert(moment.unix(startTime).format("HHmm"));
//}
//}
//console.log(Works);
//}

 //for current time is less than real time; add freq to current time
//for (; moment(startTime).isBefore(currentTime); startTime=moment().add(freqNum,'m')) { 
//console.log(moment.unix(startTime).format("HHmm"));
//};

//console.log(trainNextArr)

//var minsAway
//console.log(minsAway)




});

