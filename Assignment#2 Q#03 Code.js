let para=document.getElementById("new");
let paraText=document.getElementById("theText");
let btn=document.getElementById("btn");

//adding para function manual
function update(textValue=paraText.value){
        para.innerHTML += " "+textValue;
}

//adding para function by user
let myPara = document.getElementById('myTextPara'); 
let textMsg= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aliquam officiis vitae vero! Quod, autem, architecto eos consequuntur tempora, in ipsam nihil ut animi fugit nemo debitis asperiores vero cumque!";
myPara.innerHTML+=printPara(textMsg);

function printPara(myText){
		return myText;
}