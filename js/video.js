var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to:", video.autoplay);
	console.log("Loop is set to:", video.loop);

});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");

document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	console.log("Volume is:" + Math.round(video.volume * 100) + "%");
	});

/*pause video*/

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
	});

/*slow down video*/
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
	});

/*speed up video*/
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
	});

/*skip ahead*/
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime += 10 > video.duration) {
		video.currentTime = 0;
		console.log("Video Current Time is " + video.currentTime);
		}
	});


/*mute video*/
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		this.textContent = "Unmute";
		console.log("Muted");
	}
	});

/*volume slider*/
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	console.log("Volume is " + video.volume);
	});


/*old school*/
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Applied old school style");
	});

/*original*/
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Removed old school style");
	});



