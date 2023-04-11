
//closure function that calculate two varaible sum
function outerFunc(x){

	 return function innerFunc(y){
		console.log("The sum of input is: "+Number(x+y));
	}
}

let callOuterFunc = outerFunc(5);
callOuterFunc(15);