let inputText = document.getElementById("input-area");
let submit = document.getElementById("submit");
let landing = document.getElementById("ul");
let condition = document.getElementById("condition");

let create = function() {
	let node = document.createElement("li");
	let textnode = document.createTextNode(inputText.value);
	node.appendChild(textnode);
	landing.appendChild(node);
	
	let checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	node.appendChild(checkBox);
	
	let deleteButton = document.createElement("button");
	deleteButton.setAttribute('type', 'button');
	let x = document.createTextNode("Delete");
	deleteButton.appendChild(x);
	node.appendChild(deleteButton);
	let remove = function() {
		landing.removeChild(node);
	}
	deleteButton.onclick = remove;
	let index = 0;
	let lineThrough = function() {
		index += 1;
		if(index >= 2) {
			index = 0;
		}
		if(index === 1) {
			node.style.textDecoration="line-through";
		}
		if(index === 0) {
			node.style.textDecoration="none";
		}
	}
	checkBox.onchange = lineThrough;
	if(inputText.value == '') {
		landing.removeChild(node);
		condition.innerHTML = ("повторите попытку");
	}
	else if(inputText.value != '') {
		condition.innerHTML = ('задача добавлена!');
	}
	inputText.value = '';
	return;
}
function pressEnter(event) {
	let keyCode = event.keyCode;
	if(keyCode == 13) {
		create();
	}
}
submit.addEventListener("click", create);
inputText.addEventListener("keydown", pressEnter, false);