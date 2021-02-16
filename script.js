var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

// Add Items

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	deleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Create Delete Button

function deleteButton(newItem) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("X"));
	newItem.appendChild(btn);
}

// Remove Item

function removeParent(event) {
	if (event.target.parentNode.tagName === "LI") {
		event.target.parentNode.remove();
	}
}

document.body.addEventListener("click", removeParent);

// Cross Out Items

function crossOut(event) {
	var item = event.target;
	if (item.tagName === "LI") {
		item.classList.toggle("done");
	}
}

document.body.addEventListener("click", crossOut);
