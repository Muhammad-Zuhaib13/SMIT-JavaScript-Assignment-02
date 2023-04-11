//Updating list function
function UpdateTheList(listText){
			var node = document.createElement('li');
			node.appendChild(document.createTextNode(listText));
			document.querySelector('#addCarList').appendChild(node);
		}
//manual calling
UpdateTheList("Toyota");

//calling on button by user input
function updateCarList(){
			let userInputCar = prompt("Enter your favourite car company to the list:");
			UpdateTheList(userInputCar);
		}