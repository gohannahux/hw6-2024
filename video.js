var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
}

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
}	

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
}

/*speed up video*/
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
}

/*skip ahead*/
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime += 10 > video.duration) {
		video.currentTime = 0;
		console.log("Video Current Time is " + video.currentTime);
	}