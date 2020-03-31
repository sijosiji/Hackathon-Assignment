<script>
class Hack {
	constructor(base, height) {
		this.base = base;
		this.height = height;
	}
	}
myHack = new Hack(6, 4);
document.getElementById("AreaTriangle").innerHTML = ((myHack.base*myHack.height)/2);

	function arrayOfMultiples(num, length) {
		multiplication = [];

	for (i = 1; i <= length; i++) {
		multiplication.push(num * i);
	}

	return multiplication;
}
	document.getElementById("Multiple").innerHTML = (arrayOfMultiples(3,10));

</script>

