var video;
var volume;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	volume.innerHTML = "100%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Volume");
	console.log(this.value)
	volume.innerHTML = this.value + "%"
	video.volume = this.value / 100
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
});
