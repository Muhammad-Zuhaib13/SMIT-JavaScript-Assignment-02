
//Recusive function for applying search operation of a given value
let myArray = [1,5,3,4,10,20];
let searchValue = +prompt("Enter search value");
let i = 0;
function recursiveSearch(array, searchElement){  
    let getArrayLength = array.length;
    if(i >= getArrayLength) return (searchElement+' is not found');   
    if(array[i] === searchElement) return (array[i]+" is found at index no "+i);
    else {    
        i = i+1;
        return recursiveSearch(array, searchElement);
    }
}
let resultOfSearch = recursiveSearch(myArray,searchValue); 
console.log(resultOfSearch);