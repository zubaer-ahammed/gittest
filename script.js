var numbers=[1,2,3,4,5,6];
//calculate summation of the numbers in an array
function sum(n){
	var summation = 0;
	summation = n.reduce(function(p,c){return p+c;});
	return summation;
}

console.log(sum(numbers));