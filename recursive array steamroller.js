//This function flattens out any nested arrays so that all the arrays are in a single 1-dimensional array.
function steamrollArray(arr) {
	/*In the first step, a new variable is made from an empty array with all the first-level elements spread out in it. This takes the array one level deep, but may still leave some nested arrays.*/
	let newArr = [].concat(...arr);
	//The console.log allows you to see the recursive process in action, step by step.
	console.log(newArr);
	/*The conditional checks if any nested arrays remain. If not, the function is done and returns newArr. If yes, it recursively calls itself and will keep doing so until all of the nested arrays are gone.*/
	if (newArr.some(Array.isArray)) {
		return steamrollArray(newArr);
	} else {
		return newArr;
		}
}


steamrollArray([1, [2], [3, [[4]]]]);

