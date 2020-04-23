
function generateRoundcounter(){
	function * roundCounter() {
	  let num = 1;
	  while (true) {
		yield num;
		num = num + 1;
	  }
	}
	return roundCounter()
}


module.exports = generateRoundcounter;

/*
const a = generateRoundcounter();
const b = generateRoundcounter();

console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)

console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)


*/