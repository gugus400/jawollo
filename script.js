const position = document.getElementById("position")

console.log("jawollo")
console.log("lorem ipsum dolor sit amet")
window.onclick = (e) => {
	let x = e.clientX
	let y = e.clientY
	console.log("x: " + x  + " y: " + y)

	let o = 10 / 2
	position.style.left = x + o
	position.style.top = y + o
}
