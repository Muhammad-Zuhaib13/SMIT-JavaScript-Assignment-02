//A function that takes values from user to target and set given color
function getValues(){
	let mySelectionId = prompt("Enter the your selected id of element");
	let mySelectionClr = prompt("Enter the your selected background color");
  colorChanger(mySelectionId,mySelectionClr);
}
function colorChanger(getHtmlElement, getColor){
	let setColor = document.getElementById(getHtmlElement);
  setColor.style.backgroundColor=getColor;
}