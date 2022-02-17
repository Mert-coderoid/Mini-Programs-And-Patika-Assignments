// let userName = prompt("What's your name?");

// let userName = "eyup";

// let myName = document.querySelector("#myName");
// myName.innerHTML = userName;

const domClock = document.querySelector(".clock");

domClock.addEventListener("onload", startTime());

function startTime() {
	const d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	var days = [
		"Pazar",
		"Pazartesi",
		"Salı",
		"Çarşamba",
		"Perşembe",
		"Cuma",
		"Cumartesi",
	];
	domClock.innerHTML = `${h}:${m}:${s}  ${days[d.getDay()]}`;
	console.log();
	setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	} // add zero in front of numbers < 10
	return i;
}

