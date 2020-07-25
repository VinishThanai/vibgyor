var colors = generaterandomcolors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = randomcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	colors=generaterandomcolors(6);
	pickedColor=randomcolor();
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors !";
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
});
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent=" Correct";
			resetButton.textContent="Play Again !";
			changecolorstothesame(pickedColor);
			h1.style.background=pickedColor;
		} else {
			this.style.background=("#242527");
			messageDisplay.textContent="Try Again !";
		}
	});
}

function changecolorstothesame(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=color;
	}
}
function randomcolor(){
	var randomnumber=Math.floor(Math.random() * colors.length);
	return colors[randomnumber];
}
function generaterandomcolors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(anycolor());
	}
	return arr;
}
function anycolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}