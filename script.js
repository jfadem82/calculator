document.getElementById("buttZero").addEventListener("click", function() {
	document.getElementById("display").value += "0"
	console.log("displaying 0")
});
document.getElementById("buttOne").addEventListener("click", function() {
	document.getElementById("display").value += "1"
	console.log("displaying 1")
});
document.getElementById("buttTwo").addEventListener("click", function() {
	document.getElementById("display").value += "2"
	console.log("displaying 2")
});
document.getElementById("buttThree").addEventListener("click", function() {
	document.getElementById("display").value += "3"
	console.log("displaying 3")
});
document.getElementById("buttFour").addEventListener("click", function() {
	document.getElementById("display").value += "4"
	console.log("displaying 4")
});
document.getElementById("buttFive").addEventListener("click", function() {
	document.getElementById("display").value += "5"
	console.log("displaying 5")
});
document.getElementById("buttSix").addEventListener("click", function() {
	document.getElementById("display").value += "6"
	console.log("displaying 6")
});
document.getElementById("buttSeven").addEventListener("click", function() {
	document.getElementById("display").value += "7"
	console.log("displaying 7")
});
document.getElementById("buttEight").addEventListener("click", function() {
	document.getElementById("display").value += "8"
	console.log("displaying 8")
});
document.getElementById("buttNine").addEventListener("click", function() {
	document.getElementById("display").value += "9"
	console.log("displaying 9")
});
document.getElementById("buttEqual").addEventListener("click", function() {
	document.querySelector(".btn.btn-default.btn-sm").value = ( eval( document.querySelector(".btn.btn-default.btn-sm").value ) )
	console.log("displaying result")
});
document.getElementById("buttDecimal").addEventListener("click", function() {
	document.getElementById("display").value += "."
	console.log("displaying decimal")
});
document.getElementById("buttMult").addEventListener("click", function() {
	document.getElementById("display").value += "*"
	console.log("displaying X")
});
document.getElementById("buttDivide").addEventListener("click", function() {
	document.getElementById("display").value += "/"
	console.log("displaying %")
});
document.getElementById("buttMinus").addEventListener("click", function() {
	document.getElementById("display").value += "-"
	console.log("displaying -")
});
document.getElementById("buttPlus").addEventListener("click", function() {
	document.getElementById("display").value += "+"
	console.log("displaying +")
});
document.getElementById("buttClear").addEventListener("click", function() {
	document.getElementById("display").value = ""
	console.log("clearing")
});



