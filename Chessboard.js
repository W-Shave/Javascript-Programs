//Chessboard function creates checkered pattern of arbitrary size.

function chessboard(n) {
	let board = "";
	
	for (let i = 0; i<n; i++) {
    for (let j = 0; j<n/2; j++) {//the inner loop runs half as many iterations because it adds two characters per iteration.
    	  if (i % 2 ===0) { //is the line number (i) even or odd?
    	  	  board += "#";
    	  	  board += " ";
    	  } else {
      	  	board += " ";
       	board += "#";
         }
    }
    board += "\n"
	}
	return board;
}

console.log(chessboard(5));