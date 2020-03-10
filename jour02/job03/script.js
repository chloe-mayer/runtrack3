var counter = 0;
var button = document.getElementById("button");

button.addEventListener("click", function addone() {

	counter ++;
	document.getElementById("compteur").textContent = counter;

});
